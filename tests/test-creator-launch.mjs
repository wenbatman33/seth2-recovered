import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
const source=readFileSync(new URL('../assets/recovered/bootstrap/local-runtime.ts',import.meta.url),'utf8').replace(/^import .*;\n/gm,'');
function launch(url,editor=false){let installed;const game={on(event,fn){assert.equal(event,'game_inited');fn();}};const location=new URL(url);const window={location,history:{state:{keep:1},replaceState(state,title,next){assert.equal(state.keep,1);location.href=next;}}};runInNewContext(source,{EDITOR:editor,game,Game:{EVENT_GAME_INITED:'game_inited'},window,URL,URLSearchParams,Config:{},GameServiceBase:{},installLocalBackend(service,options){installed=options;}});return{url:location,installed,game};}
const normal=launch('http://localhost:7457/');assert.equal(normal.url.searchParams.get('gn'),'golden-seth');assert.equal(normal.url.searchParams.get('view_mode'),'portrait');assert.equal(normal.installed.quiet,false);
const dev=launch('http://localhost:7457/?reaDevelopmentMute=1&reaTestWallet=separate');assert.equal(dev.installed.quiet,true);assert.equal(dev.url.searchParams.get('reaTestWallet'),'separate');
assert.equal(dev.game.frameRate,30);assert.equal(normal.game.frameRate,undefined);
const explicit=launch('http://localhost:7457/?gn=golden-seth&view_mode=landscape&t=local-existing');assert.equal(explicit.url.searchParams.get('view_mode'),'landscape');assert.equal(explicit.url.searchParams.get('t'),'local-existing');
const editor=launch('packages://scene/native-worker',true);assert.equal(editor.url.search,'');assert.equal(editor.installed,undefined);
console.log('PASS Creator launch defaults select Seth2; explicit settings and dev/user audio separation retained');
