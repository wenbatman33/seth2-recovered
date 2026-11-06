# Project-H owned local backend staging

This is a new local simulation connected to the original recovered client. It is not the original server, RNG, RTP, reel strips, or production feature distribution. No browser/Creator or full gameplay acceptance has been performed in this subtask.

## Source evidence

The actual original `GameView.prefab` has five `SingleReelSetting` components with `midCount:4`. Viewed English rules01..07, localized05/06, and symbol01..10 confirm a 4-row/5-reel,40-payline game. `Paylines.ts` and `payline-transcription.json` record all forty lines transcribed from rules03/04. Stale `GameSymbolID`3-row constants and old debug initialData20-line definitions are not authoritative for the current art/prefab.

Symbols:1 WILD woman,2 young man,3 older man,4 fan,5 East,6 South,7 West,8 North,9 SCATTER,10 JP. Visible odds for3/4/5 matching symbols are:1=25/200/1000;2,3=20/100/400;4=10/50/250;5,6=5/25/150;7,8=5/20/100. Three scatters on middle reels2/3/4 show x80 and10FG. Rule07 shows JP tier counts2/3/4/5 but no pool awards.

The original static developer fixtures in `debug/mock/` independently confirm4x5 states, native `modifier:[{col:0,pos:[0,5,10,15]}]`, sticky FG columns, object purchase acknowledgement consumer and per-line masks. The fullCombo fixture at totalStake2 gives7.5 per line with payoutFactory150, supporting totalStake/40. Its stale initialData has only20lines. Several mock payouts are deliberately stress-test values and the scatter cash examples conflict; these do not establish production math. Only safe engine facts and file hashes are retained in `source-evidence.json`; tokens/player data are not copied.

## Implemented behavior

- Forty original lines, left-to-right3/4/5 awards and wild substitutions; raw view preserved for original presentation, expanded columns evaluated as wild except scatter.
- Ordinary MG is exactly one state, independently generated winning and losing outcomes. No D/G cascade terminal state is added.
- Natural middle-reel scatter trigger and10FG; expanded FG wild columns remain sticky. Native col values are zero-based0..4, verified by direct `reelList[t]` consumption.
- Hidden `freeGame`/`buyFullCombo` protocol fixtures preserve object acknowledgement and spinId continuation with no second debit. Public definition.buyFeature is empty because the original purchase popup prefab is absent; a local-only event guard avoids requesting it.
- Independent integer-cent wallet `project-h.local-simulation.v1`, atomic generation/debit, pending-stage persistence, idempotent request/close, settings and bet records. Invalid requests do not debit.
- Explicit local simulation label; default sound enabled. `reaDevelopmentMute=1` only changes response sound settings. Isolated QA wallets/scenarios require `reaDebug=1`.

The H response uses its own native keys: `engine.gameState[]`, `view[4][5]`, `modifier[].col/pos`, `scatterPos[5]` bitmasks, `freespinWinnings`, `noWinReward`, `currentWinnings`, `totalWinnings`, `numFreeSpins`, `freeSpinWon`, `freeTimesDenominator` and line-winning power-of-two masks. MG `currentWinnings` is the line sum while `totalWinnings` also includes scatter cash, matching the native MG_SHOW_SCATTER subtraction. FG carries cumulative `freespinWinnings`.

## Explicit own assumptions and unavailable features

Normal weights are uniform2..8; expanded-reel chances MG .035/FG .04 and eligible-reel scatter chance .05 are own distributions. Forty-line bet units and per-line cent rounding are used. Each line pays the highest eligible wildcard substitution. Scatter cash is x80 times per-line stake, an explicit own convention because source mocks disagree. Purchased FG entry pays its line sum but no separate scatter cash. No FG retriggers are generated: static mock has a test retrigger but uses arbitrary2-round award while initial definition says5; exact production trigger/award is unknown.

FreeGame rate100 has static debug-only evidence. FullCombo rate200 and feature indexes0/2 are own configuration; fullCombo selects one ordinary symbol and computes its forty-line award. Source BuyFeatureView maps freeGame and buyFullCombo but the captured g1011 config contains no BuyFeatureView prefab. Purchase protocol is fixture-tested; availability of its original visible popup remains unverified/missing. Do not generate a replacement popup or claim it works visually. Middle `elixirFurnace` is unmapped and rejected.

Three owned bonus simulations now use the original native JP twelve-ingot popup, falling-box treasure popup and Lucky popup. Each has an independently declared .003 entry chance after a single ordinary MG state, not the recovered production trigger. Own fixed JP pools are100/500/2000/10000. Falling boxes number12 with own stake factors .5/1/2/3/5; Lucky uses5/10/20. No original pools, contribution rates, RNG/RTP, bonus trigger distribution or award distribution is claimed. `bonuses:false` disables entry for isolated ordinary compiled checks. Elixir, original-server pools, remote rank/account/replay and original complete special rules remain unavailable.

## Required bootstrap hooks

1. `installLocalBackend(GameServiceBase)` before original service initialization, saved as `globalThis.globalProjectH`.
2. `installProgressHooks(GameData, globalThis.globalProjectH)` before initial response. It restores `parser.currentSpinIndex`, transpose/win data, records advances, and fixes the native `[ ].concat(Set)` conversion only for local responses.
3. `installStateHooks(GameState,{StateId,GameEvent,SlotFrameworkEvent,dispatch,GameConfigModel,EBGM})` **before the first state-machine getMachine**. A persisted local freeSpin resumes directly at the existing FG_SPIN_TO_STOP; the native CHANGE_FG_SPIN_TO_STOP_STATE event advances NEXT_SPIN first, so using it on resume would skip the saved stage. Original nonlocal/ordinary transitions are preserved.

Local-only footer hooks are installed on the original GameState before first getMachine, and on GameSender, JpBarView and HeavenlyTreasuresView. Config/audio getters remain lazy across the original singleton cycles. Native input/presentation classes are retained. Original live setters/close sender lacked bonusState routing, so the own bridge stores the local bonus and routes close into the existing START_JACKPOT_GAME/START_FORTUNE_GAME/START_LUCKY_WEALTH_GAME states. The first close opens the bonus without paying the wallet; native collects accumulate pending liability and the final close settles exactly once. JP selections repeat by position; treasure selections repeat by issued token plus verified amount. Partial picks, collected score and remaining boxes persist. Original DROP_TREASURE_CLOSE missed its live result transition; only local responses now return to existing MG_WAIT_SPIN. The local treasure coin animation returns to its actual TREASURE_COIN_POOL. These hooks decorate existing states, not a replacement gameplay loop. Public responses strip the own hidden deck/config ledger.

All newly written Map/Set iterator conversion uses Array.from. Iterator spread was removed after an official Creator build elsewhere demonstrated its erroneous [].concat(iterator) transformation. Actual compiled H checks remain required after its official build.

## Validation

`node --experimental-vm-modules Project-H/tests/test-backend.mjs`

19 ordinary/FG checks passed; 15 additional bonus source fixtures passed via `node --experimental-vm-modules Project-H/tests/test-bonus.mjs`. The fixtures VM-execute actual captured GameData, GameSender, StateFactory, StateId, MGStates, FGStates, BonusStates, GameState and isolated original reel modifier method. They verify20cells/40lines, masks/odds, zero-based wild columns, winning/losing single-state rounds, purchases, sticky FG, original sender continuation, correct native thresholds, scatter accounting, persisted cursor, resume state, settings, no-double-debit/no-double-settlement and local transport. The bonus fixtures execute original JP onOpenItemPosition, falling-box onTouchItem, Lucky completeClick and original sender collect/finish methods. They check native source-contract reachability, repeat collection/settlement, partial/empty-box/JP/Lucky reload, token amount validation, hidden purchase exposure and own pool display. This is narrow callback VM execution with stubbed engine objects, not a browser mouse/touch/render/audio acceptance. Browser visuals, input, audio, missing purchase popup, complete special-state presentations and official Creator build remain unverified.

The installed transport writes only its own bounded100-request audit to `#ProjectHLocalRuntimeBoundary.dataset.requests`: event/status/code/spinId/stageCount/balanceBefore/balanceAfter/award. Tokens, player payloads and original-provider data are excluded. This supports GUI validation of the owned adapter without accessing game globals.

The maintained public tests read this project's actual `assets/game/backend` modules, with13 selected original frontend source fixtures in `tests/fixtures` verified against SHA256/module identity/UTF8 byte ranges. They require no ignored cache or provider sessions. LuckyWealthView attaches its script dynamically through the original UIManager getComponent/addComponent path; JP/Treasure serialize their original source component UUIDs.
