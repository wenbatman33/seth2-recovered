# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概覽

G1011（「金蓮三缺一」）是 Cocos Creator 3.7.2 老虎機遊戲 bundle。**不是**獨立專案 — 位於 `misa-cocos` monorepo 的 `bundles/bundles/g1011/`，依賴兩個共用層：

- **Core framework**（`../../../scripts/`）— entry 系統、網路、狀態機、資源載入、UI 基底類別
- **Slot framework**（`../../slotFramework/`）— 共用 slot 元件（SpinBar、InfoBar、StakeModel、loading 畫面等）

Import 使用相對路徑（例如 `../../../scripts/framework/core/entry/Entry`）。此 bundle 內沒有 `package.json` 或 `tsconfig.json`；建置由父層 `misa-cocos` Cocos Creator 專案驅動。

## 建置 & CI

- **Build configs**：`buildConfig_web-mobile*.json`（dev、portrait 變體），由 Cocos Creator 建置管線在父專案層級執行
- **CI**：`.gitlab-ci.yml` 引入 `egames/gitlab-ci-temp` 共用範本，設定 `IS_PORTRAIT: true`
- **沒有測試框架** — 驗證方式為在 Cocos Creator 或瀏覽器中執行
- **離線/除錯模式**：在 `GameSender` 中設定 `EServerMode.STATIC`，使用 `debug/mock/` 中的 mock JSON 資料（emptySpin、freeSpin、bigWin、fullCombo 等）。`NoBodyView` 除錯面板提供按鈕觸發特定遊戲狀態

## 架構

### 入口點

`script/GameEntry.ts` — 以 `@registerEntry("GameEntry", EBundles.g1011, GameView)` 裝飾。註冊網路 handler、載入所有資源（sprites、skeletons、prefabs、fonts）、初始化 WebSocket service、設定狀態機、dispatch `LOAD_COMPLETE`。

### 模式：Event Bus + 狀態機 + MVC

**Event bus** 是主要通訊層。`GameEvent`（`script/events/GameEvent.ts`）定義 80+ 個 string 事件常數。元件透過全域 `dispatch(EventName, data)` 發送、`this.on(EventName, handler)` 監聽。

**狀態機**驅動所有遊戲流程。`StateMachineManager` 管理兩個實例（game + replay）。狀態分三組：
- `MGStates.ts` — 主遊戲：WAIT_SPIN → SPIN → SPIN_TO_STOP → 中獎展示 → CLOSE_SPIN → 循環
- `FGStates.ts` — 免費遊戲：intro → 轉輪循環 → summary → 切回 MG
- `BonusStates.ts` — 獎勵玩法：Fortune Landing、Lucky Wealth、Jackpot Game

狀態定義 `onEntry`、`onExit`、`transitionGuard`、`transitionTo`。`GameLogic` 將 dispatch 的事件橋接到 `StateMachineManager.getMachine().sendAsync()`。

**Views** 使用 `@inject("path/to/node", Type)` 裝飾器綁定 Cocos 節點到 class 屬性。

### Symbol 動畫系統

`GameSymbol.ts` 中的 `getSymbolAnimation()` 決定每個 symbol 的動畫類型：

- **loop 類型**（id 1, 2, 3, 4, 9 = WILD, HAT, STICK, FORK, SCATTER）— 使用 `"loop"` 動畫，持續循環播放
- **win 類型**（其餘 id）— 使用 `"win"` 動畫，單次播放

Spine skeleton 資料透過 `LoadUtils.getDirSkeleton()` 動態載入，命名規則為 `A_symbol_XX`（XX 為補零的 id）。

關鍵方法：`playWinAnim`（兌獎動畫）、`playLoopAnim`（loop 持續動畫）、`playHitAnim`（命中動畫）、`hideSymbolAnime`（隱藏時需保留 loop 類型的動畫）。

### 關鍵目錄

| 目錄 | 角色 |
|------|------|
| `script/state/` | 狀態機：狀態定義、工廠（`defineState()`）、ID、管理器 |
| `script/controller/` | View 控制器（BigwinView、ReelView、WinLineView、JackpotGameView 等） |
| `script/logic/` | `GameLogic` — 主要協調器，橋接事件到狀態機 |
| `script/net/` | `GameService`（WebSocket）、`GameHandler`（事件路由）、`GameSender`（API 呼叫） |
| `script/data/` | `GameData`（執行時狀態）、`GameConfigModel`（singleton 設定）、`GameSymbolID`（symbol enum）、`GameTempo`（時間常數） |
| `script/types/` | TypeScript 介面：spin 回應、遊戲狀態、replay 資料 |
| `script/slot/` | symbol 元件（`GameSymbol.ts`、`GameReelsController.ts`） |
| `assets/spine/` | Spine 動畫（symbols、轉場、特效） |
| `assets/texture/locale/` | 多語系圖片（zh-tw 規則頁等），`loadDir` 為遞歸載入含子資料夾 |
| `prefabs/` | Cocos Creator prefab 檔案 |

### 轉輪格局

5 欄 × 3 列。Symbol ID：WILD(1)、HAT(2)、STICK(3)、FORK(4)、A(5)、K(6)、Q(7)、J(8)、SCATTER(9)、BONUS(10)。Symbol 尺寸 160×160 像素。

### 網路

`GameSender` 提供 API 呼叫：`initial()`、`spin()`、`closeSpin()`、`buyFeature()`、`sendJackpotGameSelectPosition()`、`sendFortuneLandingFinishReq()` 等。全部透過 WebSocket 經由共用框架的 `GameServiceBase` 發送。

### GameConfigModel

singleton 設定模型（`GameConfigModel.Instance()`）。`filePaths` 映射邏輯名稱到 bundle 相對資源路徑。`EBTM` enum 定義所有音效路徑。時間參數（`nextSpinDelay`、`symbolQuickInTime` 等）在建構子中初始化，由伺服器回應的 `setData` 更新。

## 慣例

- 遊戲流程修改放在 state 檔案（`script/state/`）。透過對應群組檔案的 `defineState()` 新增狀態
- 時間/延遲值放在 `GameTempo` — 在那裡修改，不要在 state 中寫死
- 音效 key 定義在 `GameConfigModel`（`EBTM` enum）。音檔在 `assets/music/btm/`
- `commands/` 目錄包含已被狀態機取代的舊版 command pattern — 裡面的程式碼已註解掉
- Commit 用繁體中文。分支命名遵循 `feature/` 前綴慣例
