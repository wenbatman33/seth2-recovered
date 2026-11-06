# Project-G backend staging

This is an **own simulated backend** for Project-G's captured native frontend. Original server, RNG, RTP and hidden probability distributions are not recovered. It is self-contained: no runtime imports from another game, no replayed captured round responses, no changes to Project-A/B/D or the formal Project-G project.

## Original evidence verified independently

Actually viewed original `staged-assets-02/.../landscape/en/rules_01..07.png` and numeric `symbols/landscape/symbol_01..09.png`. Rules art plus source zero-padded sprite lookup establish this mapping; legacy enum names such as EYE are not the G visual labels:

| ID | G artwork | 8–9 odds | 10–11 | 12+ |
|---|---|---|---|---|
| 1 | Imperial seal | 200 | 500 | 1000 |
| 2 | Feather fan | 50 | 200 | 500 |
| 3 | Sword | 40 | 100 | 300 |
| 4 | Repeating crossbow | 30 | 40 | 240 |
| 5 | Yellow jade | 20 | 30 | 200 |
| 6 | Red jade | 16 | 24 | 160 |
| 7 | Purple jade | 10 | 20 | 100 |
| 8 | Blue jade | 8 | 18 | 80 |
| 9 | Green jade | 5 | 15 | 40 |

- Native board: 5 rows × 6 columns. Source constants ROW=6/COL=5 are historical labels; x=index%6/y=floor(index/6) proves the actual layout.
- Normal credits = bet / 20 × displayed odds. Match 8+ equal ordinary symbols anywhere, remove together, apply gravity and refill.
- Scatter ID15 (Dragon Flag) odds are 60/100/2000 for 4/5/6. Main 4..6 scatters award 15 FG; FG 3..6 add 5, maximum 100 awarded FG.
- Buy source sender hardcodes featureIndex0/featureValue `freeGame`; original rules price 100×current bet.
- Multipliers 2..500 are summed on a terminal winning board; a winning FG multiplier is added to the accumulated multiplier.
- G's own rules04 upgrade example is **6→8→15→…500**. This differs from other games' artwork examples. It does not provide the full upgrade probability/ladder.

All 16 asset SHA-256s and original source-module byte ranges are in `source-evidence.json`.

## G client contract checks

The isolated test runs **actual G `GameData.ts`, `ParseResponse.ts`, `GameSender.ts`, `GameConfigModel.ts` and shared G `SettingsModel.ts`** with narrow engine/service stubs. This goes beyond changing a game's namespace:

- Original `GameConfigModel.setNewData` reads `advancedSettings.turbo`, writes G GameData.originTurbo, reads DefinitionModel autoConfirmTime/autoSpinInterval and engine.definition.prizeAutoNextDelay. Its G `bgm`, `btm`, symbols/blur folders and prefab paths are retained, not substituted with another game's paths.
- Original shared `SettingsModel` separately reads advancedSettings.notify/sounds/turbo, autoPlay.stopOnJackpot and selected stake/ratio indices. The generated initial response includes these nested UI fields. Tests assert actual notify, volume, turbo and asset-path getters.
- G `GameSender.spin` consumes platform balance amount, updatedAt and betAmount, status200 and engine.gameState[]. Early spin uses `forceClose`, and buyFeature consumes an **object** engine.gameState.spinId before its following spin consumes an **array**. These are tested using G's own sender.
- G `GameData.parseNewTimesSymbols` depends on appended timesSymbols order. The rule engine retains surviving multiplier order and appends refills. G SymbolView applies outgoing gravity transforms from the **current winning state**, bottom-up.
- Pending replay/resume uses the original stage cursor and parser helpers; fresh resumed FG needs previousGameType bridged before original ParseResponse otherwise defaults to main game.

## Implemented

New ordinary winning/losing cascades; visible payout calculations; configurable local multiplier/upgrade generation; 15FG/retrigger cap100; 100×purchase/continuation; integer-cent balance; duplicate request/close protection; atomic early-close+next request; persisted pending stage/settings; isolated development mute.

Wallet: `project-g.local-simulation.v1`.

Runtime global: `globalThis.globalProjectG`.

Own symbol/gravity/cent engine reuses generic mathematics only after independently verifying G's own rules and source fields. The G contract/platform/definition adapter is written for G identity, real G artwork names, original G config/settings and G sender branches. There are no cross-game backend imports or static response templates.

## Required bootstrap and progress integration

After source extraction/registration, before service initialization or initial request:

```ts
const runtime = installLocalBackend(GameServiceBase);
installProgressHooks(GameData, runtime);
```

`GameServiceBase` is the recovered `chunks:///_virtual/GameServiceBase.ts` named class. `GameData` is G's `chunks:///_virtual/GameData.ts` default class. Keep the original scene/Prefab/meta UUIDs and native rendering/logic/parser modules. This backend only replaces the service transport boundary.

- `InstallLocalBackend.ts` preserves original init lifecycle, then substitutes a local deferred callback client. No remote sockets/heartbeat/crypto are needed. It lazily creates the backend and labels the page `本機模擬後端`.
- `ProgressHooks.ts` restores localResumeIndex with native view/new-times/full-combo parsers, records stage progression after native spin/next-stage methods and restores the proper FG type on a fresh reload. Without this hook, persisted rounds would visually restart at stage0 even though the wallet remains debited once.
- `globalProjectG.markStage(spinId,currentView)` must match the pending operation and can only move forward. Early close cannot discard a pending feature.
- `reaDevelopmentMute=1` overrides response volume for development only; it does not overwrite stored user settings. User verification/release defaults to normal audio.
- QA scenarios `win`, `lose`, `multiplier`, `freeGame`, `free-retrigger` require `reaDebug=1&reaTestWallet=<valid name>` in URLs. Normal wallet ignores scenario query arguments.
- Use native landscape/portrait scenes and URL configuration; do not substitute another project's launcher or source folder for the built game.

## Validation and unfinished work

Run from repository root:

```sh
node --experimental-vm-modules .cache/rea-new-games/Project-G/backend-staging/fixture-test.mjs
```

**22 checks passed**, including actual G parser/sender/config/settings, losing and winning cascades, gravity mapping, upgrades, FG sum rules/cap100, purchase acknowledgement, atomic storage failure, idempotency, settings, early spin, reload cursor and mute. This does not run a browser, renderer, original engine or Creator build.

Own distributions are explicit in `simulationDefaults`: uniform normal weights, multiplier .015, scatter .02, upgrade .08, rare appearance .03, documented multiplier values/weights. Own upgrades double/cap500; this is explicitly **not** the exact original upgrade ladder. Cash is rounded per symbol award to cents; scatter cash is outside the multiplier subtotal; purchased intro does not grant an extra spun scatter cash award. These assumptions remain configurable and are not reported as original probabilities/RTP.

JP art reveals the symbol-count tier, but actual pool seeds/contributions/award amounts/distributions are unknown. JP generation is disabled and jackpotOn=false. Mystery Chest amounts/distributions are likewise unknown and noWinReward=0. Remote profile/rank/table/replay services are not recovered; simple local records are not a claim that every original history-panel branch works.

Still required after integration: native browser initial render, PC/mobile layout, real mouse/touch quick-stop, sound, auto-spin stop/resume, FG transitions/summary, page reload midway through a winning cascade and FG, then official Creator build. No complete gameplay acceptance is claimed by these isolated tests.

The installed transport writes only its own bounded100-request audit to `#ProjectGLocalRuntimeBoundary.dataset.requests`: event/status/code/spinId/stageCount/balanceBefore/balanceAfter/award. Tokens, player payloads and original-provider data are excluded. This supports GUI validation of the owned adapter without accessing game globals.
