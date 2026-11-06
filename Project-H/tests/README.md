# Project-H source-contract fixtures

Run from repository root:

```sh
node --experimental-vm-modules Project-H/tests/test-backend.mjs
node --experimental-vm-modules Project-H/tests/test-bonus.mjs
```

These load the actual project backend sources. Selected original public client modules are under fixtures, verified against source-manifest.json SHA256 values and original module/byte ranges. No ignored cache, launch credentials, player session or original production responses are required.

19 ordinary/FG checks and15 bonus input-callback/sender/state checks exercise simulated wallet persistence, input protocol and idempotent settlement. Native UI objects are stubbed; these do not establish browser rendering, actual mouse/touch/audio acceptance, original RNG/RTP or a successful official Creator build. After the official GUI build, execute tools/recovery/check-built-backend.mjs and browser QA separately.
