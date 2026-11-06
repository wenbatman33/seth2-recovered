import {installSourceAssetAliases} from "./source-asset-aliases";
import {sourceAssetAliasManifest} from "./source-asset-alias-manifest";
// @ts-nocheck
// Owned local simulation. Original backend RNG, RTP and hidden probabilities are unknown.
import { EDITOR } from 'cc/env';
import { game, Game, settings, assetManager } from 'cc';
import { GameServiceBase } from "../scripts/slotFramework-GameServiceBase";
import { Config } from "../scripts/main-Config";
import { BundleManager } from "../scripts/main-BundleManager";
import { installLocalBackend } from "../../game/backend/InstallLocalBackend";
if(!EDITOR){
 installSourceAssetAliases(sourceAssetAliasManifest);
 const url=new URL(location.href),scene=String(settings.querySettings('launch','launchScene')||'');
 const portrait=scene.includes("ed1c7a5d-01d8-4ed0-9393-741fe7f675a0")||/Portrait|Mobile/.test(scene);
 const defaults={gn:"son-go-ku",gt:"slot-erase-link-times-2",l:'zh-tw',ct:'slot',view_mode:portrait?'portrait':'landscape',t:'creator-local',socket_url:'browser-local',gv:'local-simulation',table:'1'};
 url.searchParams.set('gn',defaults.gn);url.searchParams.set('gt',defaults.gt);
 for(const[key,value]of Object.entries(defaults))if(!url.searchParams.has(key))url.searchParams.set(key,value);
 history.replaceState(history.state,'',url);
 window.__recoveredLaunch=window.__recoveredLaunch||{viewMode:url.searchParams.get('view_mode'),scene:scene};
 Config.isSkipCheckUpdate=true;Config.USE_AUTO_VERSION=false;Config.HOT_UPDATE_URL='';
 // All bundles belong to this static build; no provider root-domain manifest.
 BundleManager.prototype._loadBundle=function(name,complete){assetManager.loadBundle(name,complete);return Promise.resolve();};
 installLocalBackend(GameServiceBase,{quiet:url.searchParams.get('reaDebug')==='1'&&url.searchParams.get('reaAudioProbe')==='1'?false:undefined});
 if(url.searchParams.get('reaDevelopmentMute')==='1')game.on(Game.EVENT_GAME_INITED,()=>{game.frameRate=30;});
}
