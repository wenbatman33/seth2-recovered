# Project-D simulated backend staging

This is an independently written simulated backend for the captured Project-D frontend. It does not restore or claim the original server, RNG, RTP or hidden probabilities. It imports no Project-A/Project-B files and replays no captured round responses. Only this staging directory was changed for implementation; original projects and assets are untouched.

## Implemented and verified in isolated tests

- Native initial envelope and a generated 5-row × 6-column idle board, D game ID `g1001` and gn `egyptian-mythology`.
- Ordinary newly generated winning/losing rounds, anywhere 8+ ordinary symbol payouts from **D's own** `rules_01`/`rules_05`, simultaneous removal, ordered native gravity transforms and refill.
- Visible multiplier values 2..500, terminal multiplier sum, configurable local upgrade/rare choices, and source-compatible `timesSymbols`/`timesUpgrade` fields.
- 4..6 scatter trigger, 15 FG, FG 3..6 scatter adds 5, maximum 100 awarded FG. FG multiplier accumulation follows the visible sum rule under the explicit assumptions below.
- Native featureIndex 0 / featureValue `freeGame`, price 100×bet; object purchase acknowledgement followed by array spin continuation without a second debit.
- Integer-cent wallet debit/credit, duplicate spin/close protection, atomic early-close+next spin, settings, persisted pending round/cursor and own separate wallet `project-d.local-simulation.v1`.
- Source `GameData.ts`, `ParseResponse.ts` and `GameSender.ts` executed in an isolated VM against generated responses. No renderer, browser, socket, original game engine or live wager was used.

Run from repository root:

```sh
node --experimental-vm-modules .cache/rea-new-games/Project-D/backend-staging/fixture-test.mjs
```

The current test result is **21 passing checks**. This is contract/transaction verification; browser/UI/Creator acceptance remains to be performed after integration.

## Source rules versus own assumptions

The rules PNGs were actually opened with `view_image`; hashes and original parser module byte intervals are in `source-evidence.json`.

Ordinary symbol IDs 1..9 use D's native EYE/SNAKE/BOW/MACHETE/ORANGE_GEM/RED_GEM/PURPLE_GEM/BLUE_GEM/GREEN_GEM mapping. For count bands 8–9 / 10–11 / 12+, odds are respectively:

| ID | Odds |
|---|---|
| 1 | 200 / 500 / 1000 |
| 2 | 50 / 200 / 500 |
| 3 | 40 / 100 / 300 |
| 4 | 30 / 40 / 240 |
| 5 | 20 / 30 / 200 |
| 6 | 16 / 24 / 160 |
| 7 | 10 / 20 / 100 |
| 8 | 8 / 18 / 80 |
| 9 | 5 / 15 / 40 |

Credits = bet / 20 × odds. Scatter ID 15 pays odds 60 / 100 / 2000 for 4 / 5 / 6 scatters. A winning ordinary subround is multiplied by the sum of visible multiplier symbols on its terminal board. In FG, the displayed prior accumulated multiplier is added to the current visible multiplier sum, and that sum is retained for later winning multiplier rounds.

Unknown originals: symbol weights, RNG, RTP, hit rate, scatter/multiplier/upgrade/rare probabilities, exact upgrade ladder, cent rounding, and whether scatter cash participates in the multiplier subtotal. Those are not hidden behind a claim of full recovery.

Own explicit defaults are exported as `simulationDefaults`: uniform normal weights; multiplier chance .015; scatter chance .02; upgrade chance .08; rare visual chance .03; documented multiplier values/weights. Upgrades double and cap at 500. Cash rounds per winning symbol to cents. Scatter cash is paid outside the multiplier subtotal. Purchased intro shows the source scatter intro but does not award an extra randomly spun scatter cash prize. These choices are configurable simulation assumptions, not measured original distributions.

## Required integration hooks

1. Convert/extract the original D bundles while preserving module identity and scene/Prefab/asset UUIDs; this backend does not replace the recovered client.
2. Import `installLocalBackend` and call it with the recovered **`chunks:///_virtual/GameServiceBase.ts` → `GameServiceBase`** class before any original service init/connect. Adapter initialization is lazy and does not access App/models until requests occur.
3. Import `installProgressHooks` and call it with **`chunks:///_virtual/GameData.ts` → default GameData class** and the returned runtime, before the first `initial` parser call:

```ts
const runtime = installLocalBackend(GameServiceBase);
installProgressHooks(GameData, runtime);
```

4. Global boundary is **`globalThis.globalProjectD`**. It exposes `getBackend()`, bounded request diagnostics and `markStage(spinId,currentView)`. All callbacks are delivered asynchronously through original service events, so original sender/parser/flows remain in charge.
5. The hooks restore `localResumeIndex` in `GameData.setNewInitData`, refresh native flattened view/new-times/full-combo parsers, and mark progress after `setNewSpinData`/`setNextSpinData`. A fresh reload into FG also supplies the previous main-game type because the original `ParseResponse.setNewGameType` otherwise forces an unset previous type to main game. These changes apply only to local persisted simulation responses.
6. Keep the source landscape/portrait URL/orientation setup. D source includes native 1280×720 and 720×1280 layouts. Do not route its launcher to source-project directories or replace the game with a screenshot.
7. Development uses `reaDevelopmentMute=1`; the adapter only overrides response sound settings for that preview and does not overwrite saved user sounds. Normal preview/release defaults to sound on.
8. Deterministic QA URLs require `reaDebug=1&reaTestWallet=<name>` and may add `reaScenario=win|lose|multiplier|freeGame|free-retrigger`; the regular wallet ignores scenario query parameters. Direct constructor scenarios are for isolated tests only.
9. Preserve native close-response lifecycle. `forceClose:<old spin ID>` is generated as an internal idempotency key for early spin. Completed ordinary rounds may settle before a next request, but pending features cannot be silently force-closed.
10. Copy these TypeScript modules into D's own backend folder at integration. No cross-game imports, wallet migration or A/B modifications are required. This staging task creates no asset `.meta` files and changes no original UUIDs.

## Incomplete special/UI flows

- Original JP rules art shows 2/3/4/5 JP symbols mapping mini/minor/major/grand, but original pool seed, contribution, hit distribution and awards are missing. JP generation is disabled and `platform.jackpotOn=false`; no generic A jackpot implementation is reused.
- Mystery Chest art only says a non-winning round may receive a reward and higher bets increase it. Amounts/distribution are unknown. `noWinReward=0` and no chest outcomes are generated.
- Remote records/ranks/tables/replay/account profile services are not restored. Rank/table controls are disabled in platform flags. The simple local record response is a simulation record list, not validated against every native record-panel branch.
- Native browser visuals, sound, mouse/touch quick-stop, FG transition/summary animations, auto-spin interruption/resume and native Creator build are still pending end-to-end checks. Passing these VM tests is not a claim that the complete game already works in the browser.
