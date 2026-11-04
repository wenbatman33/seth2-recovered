// @ts-nocheck
// Project-owned simulated backend. Original server RNG/RTP is not restored.
import { EDITOR } from 'cc/env';
import { game, Game, settings } from 'cc';
import { GameServiceBase } from '../scripts/framework-GameServiceBase';
import { Config } from '../scripts/main-Config';
import { installHadesLocalBackend } from '../../game/backend/InstallHadesLocalBackend';
if (!EDITOR) {
 const launch = new URL(window.location.href);
 const scene = String(settings.querySettings('launch','launchScene') || '');
 const mobile = scene.includes('ed1c7a5d-01d8-4ed0-9393-741fe7f675a0') || scene.includes('Mobile.scene');
 const defaults = {gn:"hades",l:'zh-tw',ct:'slot',gt:"slot-erase-cluster-times-1",view_mode:'landscape',t:'creator-local',socket_url:'browser-local',gv:'261006',table:'1'};
 // Each independently imported project always owns its own game identity.
 launch.searchParams.set('gn',defaults.gn);launch.searchParams.set('gt',defaults.gt);
 for(const [key,value] of Object.entries(defaults)) if(!launch.searchParams.get(key))launch.searchParams.set(key,value);
 window.history.replaceState(window.history.state,'',launch.href);
 const muted=launch.searchParams.get('reaDevelopmentMute')==='1';
 if(muted)game.on(Game.EVENT_GAME_INITED,()=>{game.frameRate=30;});
 Config.isSkipCheckUpdate=true;Config.USE_AUTO_VERSION=false;Config.HOT_UPDATE_URL='';
 installHadesLocalBackend(GameServiceBase);
}
