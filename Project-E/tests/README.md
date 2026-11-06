# Offline contract checks

Run `node tests/run-tests.mjs` from this project folder. Requires Node 22+ and the collection root Babel devDependencies. Tests import this project’s real `assets/game/backend` and the minimal public runtime modules in `tests/fixtures`; no `.cache`, private launch URLs, provider sessions, Creator or remote socket is used.

These tests verify transaction and original sender/parser/consumer contracts. They do not validate browser rendering, sound playback, animation timing or the original RNG/RTP. Fixture source SHA-256 values are recorded in `fixture-sources.json`.
