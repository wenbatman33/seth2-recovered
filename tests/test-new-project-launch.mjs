import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext,SourceTextModule,createContext} from 'node:vm';
for(const letter of 'CDEFGHI'){
 const folder='Project-'+letter,config=JSON.parse(readFileSync(new URL('../'+folder+'/game.config.json',import.meta.url))),source=readFileSync(new URL('../'+folder+'/tools/frontend-launch.js',import.meta.url),'utf8');
 for(const width of [390,1280])for(const layout of ['desktop','mobile'])for(const route of [folder,folder+'/build/web',config.id]){
  let changed;const document={currentScript:{dataset:{game:config.gn}},documentElement:{dataset:{}}},window={__recoveredCatalog:[config],addEventListener(){}};
  runInNewContext(source,{URL,console:{error(){}},document,window,innerWidth:width,location:{href:'https://example.test/collection/'+route+'/?layout='+layout,replace(){throw Error('Unexpected cross-game redirect');}},history:{state:null,replaceState(_,__,url){changed=url;}}});
  const mode=config.scenes[layout==='desktop'?'landscape':'portrait']?(layout==='desktop'?'landscape':'portrait'):config.defaultMode;
  assert.equal(window.viewMode,mode);assert.equal(window.__recoveredLaunch.scene,config.scenes[mode].url);assert.equal(window.__recoveredLaunch.menuUrl,'https://example.test/collection/');assert.equal(changed.searchParams.get('goback_url'),'https://example.test/collection/');
 }
 const context=createContext({window:{__recoveredLaunch:{menuUrl:'https://example.test/collection/'}}}),module=new SourceTextModule(readFileSync(new URL('../'+folder+'/assets/game/backend/MenuMetadata.ts',import.meta.url),'utf8'),{context});await module.link(()=>{throw Error('Menu adapter must stay independent');});await module.evaluate();
 let called=0;const exit={_window:{location:{href:''}},exitWeb(){called++;},replayExitWeb(){called++;}};module.namespace.installLocalNavigationHooks(exit);exit.exitWeb();assert.equal(exit._window.location.href,'https://example.test/collection/');assert.equal(called,0);exit.replayExitWeb('https://example.test/collection/');assert.equal(called,0);
 console.log(folder+': original layout fallback and collection-prefix return routes pass');
}
