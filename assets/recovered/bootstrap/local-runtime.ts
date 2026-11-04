// @ts-nocheck
// Reconstructed local runtime integration; this is not original source.
// Installed before main-Application evaluates; no sample/replay backend is used.
import { EDITOR } from 'cc/env';
import { game, Game } from 'cc';
import { installLocalBackend } from '../../local-backend/InstallLocalBackend';
import { GameServiceBase } from '../scripts/framework-GameServiceBase';
import { Config } from '../scripts/main-Config';
import { installHadesLocalBackend } from '../../local-backend/InstallHadesLocalBackend';

// Creator's Play button has no operator launch query. Supply the recovered
// Seth2 identity before Application parses UrlModel, rather than falling back
// to the unrelated g1001 bundle. Explicit user parameters remain unchanged.
if (!EDITOR) {
if (new URLSearchParams(window.location.search).get('reaDevelopmentMute') === '1') {
  game.on(Game.EVENT_GAME_INITED, () => { game.frameRate = 30; });
}
const isHadesPreview = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('gn') === 'hades';

if (typeof window !== 'undefined' && window.location && window.history) {
  const launch = new URL(window.location.href);
  const defaults = isHadesPreview ? { gn: 'hades', l: 'zh-tw', ct: 'slot',
    gt: 'slot-erase-cluster-times-1', view_mode: 'landscape', t: 'creator-local',
    socket_url: 'browser-local', gv: '261006', table: '1' } : { gn: 'golden-seth', l: 'zh-tw', ct: 'slot',
    gt: 'slot-erase-any-times-2', view_mode: 'portrait', t: 'creator-local',
    socket_url: 'browser-local', gv: '261006', table: '1' };
  let changed = false;
  for (const [key, value] of Object.entries(defaults)) {
    if (!launch.searchParams.get(key)) {
      launch.searchParams.set(key, value);
      changed = true;
    }
  }
  if (changed) window.history.replaceState(window.history.state, '', launch.href);
}

// Independent local build never uses the original hot-update server.
Config.isSkipCheckUpdate = true;
Config.USE_AUTO_VERSION = false;
Config.HOT_UPDATE_URL = '';

// User verification defaults to normal sound. Agent-only development builds
// apply a separate zero-gain output shim, without changing this saved setting.
if (isHadesPreview) {
  installHadesLocalBackend(GameServiceBase);
} else {
  installLocalBackend(GameServiceBase, { quiet: new URLSearchParams(window.location.search).get('reaDevelopmentMute') === '1' });
}

} // Runtime transport and URL defaults never run inside Creator workers.
