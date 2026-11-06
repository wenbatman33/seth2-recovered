# Native audio and menu contract audit

The seven new projects retain the original GameView, SettingView, AudioData/AudioComponent and native menu consumers. The owned adapters provide local settings, one local table, settled local history and safe empty avatar/ranking states. Every README uses its neutral Project-C through Project-I heading and explicitly labels the backend as a local simulation with unknown original RNG/RTP. Public prose uses neutral project labels; original asset inventories retain UUID/path provenance and therefore are not a promise to hide identifiable upstream filenames.

A new source-level regression fixture is available:

```sh
node --experimental-vm-modules tests/test-source-audio-initialization.mjs
```

It reproduced the actual native stale-flag failure on all seven projects: Win/BigWin temporarily changes `App.globalAudio.isMusicOn`, native AudioData.save persists the flags, the next page reads them, and neither GameView.initAudio nor the music/effect sliders restores them despite100% volume. The actual AudioComponent.play gate refuses playback. This was independent of correct local backend sound settings.

The installed owned-local adapter only resets these two gates on the first initialization of a fresh AudioData instance. It runs through a standalone helper attached at the original AudioComponent module's end, with an Editor guard and project-local transport predicate; it adds no Application dependency cycle. Native volumes, user zero volume, replay `spinId` mute, developer mute response and the external muted output bus are unchanged. Later original transient pauses on the same instance are retained. Nonlocal initialization stays original.

The fixture executes the real native constructors, getters/setters, GameView.initAudio and SettingView slider methods, plus each installed helper and owned audioProbe policy. It verified normal settings with `reaDebug=1&reaAudioProbe=1`, persistent fractional/zero user volume, nonpersistent development mute, replay mute and nonlocal guards. Its AudioSource host is inert: no browser, Creator or speaker output is exercised. Source hashes and seven project results are in `audio-initialization-audit.json`.

Original navigation has a delayed error-page fallback after exitWeb/replayExitWeb. The collection's already installed MenuMetadata navigation hook sends a local menu destination directly to the menu without that fallback. `frontend-launch.js` sets `goback_url` to the collection menu. A standalone build served at its own root has no separate collection menu and resolves its own root as the return destination; that should not be confused with a published collection launch.

Original Node development scripts were found only under Project-E/G/H framework tools, plus the Project-H tracing script. They had no runtime imports or serialized scene/prefab/material references. They were relocated unchanged, with their meta files and SHA provenance, outside Creator assets to `tools/source-framework`; they were never executed. Each affected project records `docs/source-development-tools-relocation.json`. Creator may retain an old AssetDB compilation entry until its import database refreshes; moving the files does not by itself prove an already running Editor has released that entry.

The compiled backend fixture now consumes persisted presentation stages with native `progress` requests before settlement. For Project-E it first asserts premature close still returns `FEATURE_PENDING` without changing balance. The guard remains enabled. The actual official Project-E build passed ordinary/win/lose,16-stage FG retrigger and6-stage purchase data/transaction checks; rendering, input, source-frame repair and audio playback remain separate GUI checks.
