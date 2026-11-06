# Offline consumer contracts

Run from any working directory with the collection Node dependencies installed:

```sh
node --experimental-vm-modules Project-D/tests/test-backend.mjs
node --experimental-vm-modules Project-D/tests/test-special-rewards.mjs
```

The tests read the current `assets/game/backend` and recovered consumer methods. Fixtures are only the public client JavaScript modules actually executed; `fixtures/source-manifest.json` records and verifies their original SHA-256. No launch tokens, server credentials or provider responses are included.

These contracts verify the own simulated backend, persistence and native callback interfaces. They do not verify Creator rendering, mouse/touch, sound, animation playback, original RNG or RTP.
