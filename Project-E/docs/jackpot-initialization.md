# Local jackpot ticker initialization

The original ticker only reads live `NOTIFY_JACKPOT_RESPONSE` events. The local service emits its first jackpot notification before the initial response creates the native GameView, so a fresh ticker can miss that notification and display zero until the next request.

`JackpotDisplayHooks.ts` reads the existing local backend's `jackpotNotification()` lazily after native asynchronous initialization and before the existing rotation callback. It passes that exact notification to the original `setJackpotValue` method and retains native number formatting, rotation and replay behavior. It adds no timers, requests, wagers or credits.

The displayed amounts remain the existing own simulation configuration: MINI 200, MINOR 1,000, MAJOR 10,000 and GRAND 100,000 by default. These are fixed local pools, not recovered provider values or stake multipliers. Backend award amounts and probabilities are unchanged.

`tests/test-jackpot-display.mjs` executes the original recovered asynchronous `init`, `setJackpotValue`, `updateJPNumber` and `formatJPNumber`, including the original Babel async helper. Four fixtures cover late transport availability, fresh initialization, all four tiers with no betting side effects, and native replay values. Engine presentation is mocked; an official GUI rebuild and real browser verification are still required for this change.
