import {readFileSync,mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
const source=readFileSync(new URL('../Project-A/tools/frontend-launch.js',import.meta.url),'utf8');
const catalog=JSON.parse(readFileSync(new URL('../Project-A/tools/browser-game-catalog.json',import.meta.url)));
function launch(width,query,own='golden-seth',path='/seth2/'){
 let result,redirect;const document={currentScript:{dataset:{game:own}},documentElement:{dataset:{}}},window={__recoveredCatalog:catalog};
 runInNewContext(source,{URL,innerWidth:width,location:{href:'http://localhost'+path+'?'+query,replace(value){redirect=value;}},document,window,history:{state:null,replaceState(_,__,value){result=value;}}});return {...window.__recoveredLaunch,url:result,redirect};
}
assert.equal(launch(1280,'').scene,'db://assets/scenes/PC.scene');assert.equal(launch(390,'').scene,'db://assets/scenes/Mobile.scene');
assert.equal(launch(390,'layout=desktop').viewMode,'landscape');assert.equal(launch(1280,'layout=mobile').viewMode,'portrait');assert.equal(launch(1280,'layout=desktop&view_mode=portrait').viewMode,'portrait');
assert.equal(launch(390,'','hades','/hades/').scene,'db://assets/scenes/Game.scene');assert.equal(new URL(launch(1280,'gn=hades').redirect).pathname,'/hades/');
const fixture=mkdtempSync(join(tmpdir(),'independent-game-build-'));
try{
 mkdirSync(join(fixture,'src'));mkdirSync(join(fixture,'assets/g1005'),{recursive:true});writeFileSync(join(fixture,'assets/g1005/config.json'),'{}');
 writeFileSync(join(fixture,'src/settings.json'),'{"screen":{},"assets":{"projectBundles":["main","g1005"]}}');writeFileSync(join(fixture,'application.js'),'const options={overrideSettings: {}};');writeFileSync(join(fixture,'index.html'),'<head></head>');
 const hook=createRequire(import.meta.url)('../Project-A/extensions/recovered-frontends-build/hooks.js');hook.onAfterBuild({},{dest:fixture});hook.onAfterBuild({},{dest:fixture});
 const html=readFileSync(join(fixture,'index.html'),'utf8');assert.match(html,/data-game="golden-seth"/);assert.equal(html.match(/src="\.\/frontend-launch.js"/g).length,1);assert.ok(html.indexOf('frontend-game-config.js')<html.indexOf('frontend-launch.js'));
 writeFileSync(join(fixture,'src/settings.json'),'{"screen":{},"assets":{"projectBundles":["main"]}}');assert.throws(()=>hook.onAfterBuild({},{dest:fixture}),/game Bundle/);
}finally{rmSync(fixture,{recursive:true,force:true});}
console.log('PASS per-project build identity, original PC/mobile scene selection and cross-game navigation');
