/**
 * FG Flow Tracer
 *
 * 模擬 FG 狀態機，讀取假資料 JSON，印出每一步的 state、freeTick 顯示值、transition 條件。
 * 不依賴 Cocos 引擎，純邏輯驗證。
 *
 * 用法：
 *   node debug/fg-flow-tracer.cjs debug/mock/listenFreeSpinEnter.json
 */

const fs = require("fs");
const path = require("path");

// ─── 讀取假資料 ──────────────────────────────────────────────────────
const jsonPath = process.argv[2];
if (!jsonPath) {
    console.error("用法: node fg-flow-tracer.js <mock-json-path>");
    process.exit(1);
}
const raw = JSON.parse(fs.readFileSync(path.resolve(jsonPath), "utf-8"));
const gameState = raw.engine?.gameState ?? raw.gameState ?? raw;

if (!Array.isArray(gameState) || gameState.length === 0) {
    console.error("找不到 gameState 陣列");
    process.exit(1);
}

// ─── 模擬用的 helpers ────────────────────────────────────────────────
const WILD = 1;

function isFullBoard(board) {
    if (!board || board.length === 0) return false;
    const first = board[0][0];
    for (const row of board) {
        for (const el of row) {
            if (el !== first && el !== WILD) return false;
        }
    }
    return true;
}

function hasWinSymbols(gs) {
    return gs.winSymbols != null && gs.winSymbols.length > 0;
}

function setBigWinReach(gs, winOdds) {
    const winRate = gs.currentWinnings / gs.totalStake;
    let reach = null;
    for (const wo of winOdds) {
        if (winRate >= wo.reachRate) reach = wo;
    }
    return reach;
}

// ─── updateFgRemaining 模擬 ──────────────────────────────────────────
function simulateUpdateFgRemaining(currentSpinIndex, gameState) {
    const index = currentSpinIndex + 1;
    const state = gameState[index];
    if (!state) return null;
    const { numFreeSpins, freeTimesDenominator } = state;
    const currentFreeSpin = freeTimesDenominator - numFreeSpins;
    const currentDenom =
        gameState[currentSpinIndex]?.freeTimesDenominator ?? freeTimesDenominator;
    return `${currentFreeSpin}/${currentDenom}`;
}

// ─── increaseFgRemaining 模擬 ────────────────────────────────────────
function simulateIncreaseFgRemaining(currentSpinIndex, gameState) {
    const currentState = gameState[currentSpinIndex];
    const prevState = gameState[currentSpinIndex - 1];
    const prevDenom =
        prevState?.freeTimesDenominator ?? currentState.freeTimesDenominator;
    const spinsAdded = currentState.freeTimesDenominator - prevDenom;
    if (spinsAdded <= 0) return null;

    const currentFreeSpin =
        currentState.freeTimesDenominator - currentState.numFreeSpins;
    const startDisplay = `${currentFreeSpin}/${prevDenom}`;
    const endDisplay = `${currentFreeSpin}/${currentState.freeTimesDenominator}`;
    return { startDisplay, endDisplay, spinsAdded };
}

// ─── 偵測 retrigger ──────────────────────────────────────────────────
function hasRetrigger(currentSpinIndex, gameState) {
    const curr = gameState[currentSpinIndex];
    const prev = gameState[currentSpinIndex - 1];
    return (
        prev != null && curr.freeTimesDenominator > prev.freeTimesDenominator
    );
}

// ─── 格式化輸出 ──────────────────────────────────────────────────────
const CYAN = "\x1b[36m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const MAGENTA = "\x1b[35m";
const RESET = "\x1b[0m";
const DIM = "\x1b[2m";

function log(color, label, msg) {
    console.log(`  ${color}[${label}]${RESET} ${msg}`);
}

// ─── 模擬 winOdds（簡化：使用常見門檻） ─────────────────────────────
const defaultWinOdds = [
    { level: 0, reachRate: 10 },
    { level: 1, reachRate: 25 },
    { level: 2, reachRate: 50 },
];

// ─── 主流程 ──────────────────────────────────────────────────────────
console.log(`\n${CYAN}═══ FG Flow Tracer ═══${RESET}`);
console.log(`${DIM}檔案: ${jsonPath}${RESET}`);
console.log(`${DIM}gameState 筆數: ${gameState.length}${RESET}\n`);

// 找到 FG 起始點
const triggerIndex = gameState.findIndex((gs) => gs.startFreeGame === true);
if (triggerIndex === -1) {
    // 非 FG 資料，跑 MG 流程
    console.log(`${YELLOW}未偵測到 startFreeGame，改跑 MG 流程模擬${RESET}\n`);
    simulateMG(gameState);
} else {
    simulateFG(gameState, triggerIndex);
}

// ─── MG 流程模擬 ─────────────────────────────────────────────────────
function simulateMG(gameState) {
    for (let i = 0; i < gameState.length; i++) {
        const gs = gameState[i];
        console.log(
            `${CYAN}── MG Spin [gameState[${i}]] ──${RESET}  totalWinnings=${gs.totalWinnings}  currentWinnings=${gs.currentWinnings}`
        );

        if (gs.startFreeGame) {
            log(GREEN, "STATE", "MG_SHOW_SCATTER → FG_SHOW_START_ALERT");
            return;
        }

        if (gs.totalWinnings === 0) {
            log(GREEN, "STATE", "MG_CLOSE_SPIN (no win)");
            continue;
        }

        const full = isFullBoard(gs.view);
        const bigWin = setBigWinReach(gs, defaultWinOdds);

        if (full) {
            log(GREEN, "STATE", "MG_SHOW_FULL_COMBO");
            if (bigWin) {
                log(GREEN, "  →", `MG_BIG_WIN (winRate=${(gs.totalWinnings / gs.totalStake).toFixed(1)}x, level=${bigWin.level})`);
            } else {
                log(GREEN, "  →", "MG_CLOSE_SPIN");
            }
        } else if (bigWin) {
            log(GREEN, "STATE", `MG_SHOW_ALL_WIN_LINE → MG_BIG_WIN (level=${bigWin.level})`);
        } else {
            log(GREEN, "STATE", "MG_SHOW_WIN_SUMMARY → MG_CLOSE_SPIN");
        }
    }
}

// ─── FG 流程模擬 ─────────────────────────────────────────────────────
function simulateFG(gameState, triggerIndex) {
    let currentSpinIndex = triggerIndex;
    const triggerGs = gameState[triggerIndex];

    console.log(
        `${MAGENTA}── 觸發 FG [gameState[${triggerIndex}]] ──${RESET}  numFreeSpins=${triggerGs.numFreeSpins}  freeTimesDenominator=${triggerGs.freeTimesDenominator}`
    );
    log(GREEN, "STATE", "FG_SHOW_START_ALERT");
    log(GREEN, "STATE", "→ FG_WAIT_SPIN");

    // 第一次進 FG_WAIT_SPIN
    const firstDisplay = simulateUpdateFgRemaining(currentSpinIndex, gameState);
    log(YELLOW, "DISPLAY", `updateFgRemaining → freeTick = "${firstDisplay}"`);

    // 逐 spin 模擬
    let spinCount = 0;
    let errors = 0;

    while (true) {
        // FG_SPIN → NEXT_SPIN
        currentSpinIndex++;
        spinCount++;

        if (currentSpinIndex >= gameState.length) {
            log(RED, "ERROR", `currentSpinIndex ${currentSpinIndex} 超出 gameState 範圍！`);
            errors++;
            break;
        }

        const gs = gameState[currentSpinIndex];
        const {
            numFreeSpins,
            startFreeGame,
            freeTimesDenominator,
            currentWinnings,
        } = gs;
        const freeSpinWon = gs.freeSpinWon;

        console.log(
            `\n${CYAN}── FG Spin #${spinCount} [gameState[${currentSpinIndex}]] ──${RESET}  numFreeSpins=${numFreeSpins}  denom=${freeTimesDenominator}  currentWinnings=${currentWinnings}`
        );

        // FG_SPIN_TO_STOP 判斷
        const isFinal =
            numFreeSpins === 0 &&
            (freeSpinWon === undefined || freeSpinWon === 0);
        const retrigger = hasRetrigger(currentSpinIndex, gameState);
        const triggersFG =
            startFreeGame ||
            (freeSpinWon != null && freeSpinWon > 0) ||
            retrigger;
        const winSymbols = hasWinSymbols(gs);
        const full = isFullBoard(gs.view);

        if (isFinal) {
            log(GREEN, "STATE", "FG_SHOW_SUMMARY_ALERT (最後一局)");
            break;
        }

        if (triggersFG) {
            const reason = startFreeGame
                ? "startFreeGame"
                : freeSpinWon > 0
                    ? `freeSpinWon=${freeSpinWon}`
                    : `retrigger (denom ${gameState[currentSpinIndex - 1].freeTimesDenominator}→${freeTimesDenominator})`;
            log(GREEN, "STATE", `FG_SHOW_ALL_WIN (${reason})`);
            log(GREEN, "STATE", "→ FG_SHOW_INCREASE_REMAINING");

            const increase = simulateIncreaseFgRemaining(
                currentSpinIndex,
                gameState
            );
            if (increase) {
                log(
                    YELLOW,
                    "DISPLAY",
                    `increaseFgRemaining: "${increase.startDisplay}" → 動畫 +${increase.spinsAdded} → "${increase.endDisplay}"`
                );
            } else {
                log(DIM, "DISPLAY", "increaseFgRemaining: spinsAdded=0, skip");
            }

            // 回到 FG_WAIT_SPIN
            log(GREEN, "STATE", "→ FG_WAIT_SPIN");
            const display = simulateUpdateFgRemaining(
                currentSpinIndex,
                gameState
            );
            log(YELLOW, "DISPLAY", `updateFgRemaining → freeTick = "${display}"`);
            continue;
        }

        // 一般 FG spin
        if (!winSymbols) {
            log(GREEN, "STATE", "→ FG_WAIT_SPIN (no win)");
        } else if (full) {
            log(GREEN, "STATE", "FG_SHOW_FULL_COMBO → FG_SHOW_WIN_LINE");
            log(GREEN, "STATE", "→ FG_WAIT_SPIN");
        } else {
            log(GREEN, "STATE", "FG_SHOW_WIN_LINE");

            const bigWin = setBigWinReach(gs, defaultWinOdds);
            if (bigWin) {
                log(
                    GREEN,
                    "STATE",
                    `→ FG_WIN (currentWinnings=${currentWinnings}, winRate=${(currentWinnings / gs.totalStake).toFixed(1)}x)`
                );
            }
            log(GREEN, "STATE", "→ FG_WAIT_SPIN");
        }

        // FG_WAIT_SPIN display
        const display = simulateUpdateFgRemaining(
            currentSpinIndex,
            gameState
        );
        if (display) {
            log(YELLOW, "DISPLAY", `updateFgRemaining → freeTick = "${display}"`);
        }
    }

    // 總結
    console.log(`\n${CYAN}═══ 總結 ═══${RESET}`);
    console.log(`  總 FG spins: ${spinCount}`);
    console.log(`  錯誤: ${errors === 0 ? `${GREEN}0${RESET}` : `${RED}${errors}${RESET}`}`);
    console.log();
}
