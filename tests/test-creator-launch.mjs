import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
function launch(project,url,{editor=false,scene='98fa17d8-70db-4b60-aae0-288a6e364e15'}={}){
 const source=readFileSync(new URL('../'+project+'/assets/shared/bootstrap/local-runtime.ts',import.meta.url),'utf8').replace(/^import .*;\n/gm,'');
 let installed;const game={on(event,fn){assert.equal(event,'game_inited');fn();}},location=new URL(url);
 const window={location,history:{state:{keep:1},replaceState(state,title,next){assert.equal(state.keep,1);location.href=next;}}};
 runInNewContext(source,{EDITOR:editor,settings:{querySettings(){return scene;}},game,Game:{EVENT_GAME_INITED:'game_inited'},window,URL,URLSearchParams,Config:{},GameServiceBase:{},installLocalBackend(service,options){installed=options;},installHadesLocalBackend(){installed={hades:true};}});
 return {url:location,installed,game};
}
const normal=launch('Project-A','http://localhost:7457/');assert.equal(normal.url.searchParams.get('gn'),'golden-seth');assert.equal(normal.url.searchParams.get('view_mode'),'landscape');assert.equal(normal.installed.quiet,false);
const mobile=launch('Project-A','http://localhost:7457/',{scene:'ed1c7a5d-01d8-4ed0-9393-741fe7f675a0'});assert.equal(mobile.url.searchParams.get('view_mode'),'portrait');
const dev=launch('Project-A','http://localhost:7457/?reaDevelopmentMute=1&reaTestWallet=separate');assert.equal(dev.installed.quiet,true);assert.equal(dev.game.frameRate,30);assert.equal(normal.game.frameRate,undefined);
const explicit=launch('Project-A','http://localhost:7457/?view_mode=portrait&t=local-existing');assert.equal(explicit.url.searchParams.get('view_mode'),'portrait');assert.equal(explicit.url.searchParams.get('t'),'local-existing');
const second=launch('Project-B','http://localhost:7457/?gn=golden-seth');assert.equal(second.url.searchParams.get('gn'),'hades');assert.equal(second.installed.hades,true);
const editor=launch('Project-B','packages://scene/native-worker',{editor:true});assert.equal(editor.url.search,'');assert.equal(editor.installed,undefined);
console.log('PASS independent project identity, scene defaults and development/user audio separation');
