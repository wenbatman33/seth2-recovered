import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {assemble,rewriteImports,originalLaunchSceneNames} from '../tools/recovery/create-independent-project.mjs';
import {sha256} from '../tools/recovery/extract-system-modules.mjs';
const write=async(file,value)=>{await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file,typeof value==='string'?value:JSON.stringify(value));};
test('original application mapping distinguishes launch scenes from example scenes',()=>{
  assert.deepEqual(originalLaunchSceneNames('let launchScene=view_mode=="portrait"?"mainPortrait":"main";'),{portrait:'mainPortrait',landscape:'main'});
  assert.equal(originalLaunchSceneNames('let orientationExampleScene="sample";'),null);
});
test('rewrites exact module identities across shared/game folders and rejects unknown imports',()=>{
  const map=new Map([['/input/shared.ts','/new/assets/shared/scripts/main-Same.ts']]);
  const result=rewriteImports('import * as a from "./shared"; export {x} from "./shared";','/input/game.ts','/new/assets/game/scripts/g1234-Same.ts',map);
  assert.equal(result.imports.length,2);assert.match(result.code,/\.\.\/\.\.\/shared\/scripts\/main-Same/);
  assert.throws(()=>rewriteImports('import "./missing";','/input/game.ts','/new/game.ts',map),/Unmapped/);
});
test('new-only assembly preserves scene/script UUIDs and keeps plugins out of Editor',async t=>{
  const tmp=await fs.mkdtemp(path.join(os.tmpdir(),'independent-cocos-'));t.after(()=>fs.rm(tmp,{recursive:true,force:true}));
  const capture=path.join(tmp,'capture'),stage=path.join(tmp,'stage'),scripts=path.join(tmp,'scripts'),root=path.join(tmp,'Project-Z'),metadata=path.join(tmp,'metadata.json');
  const plugin='var VendorFixture = {version:1};',sceneUuid='00000000-0000-0000-0000-000000000001',scriptUuid='00000000-0000-0000-0000-000000000002';
  await write(path.join(capture,'src/settings.json'),{CocosEngine:'3.7.2',assets:{projectBundles:['internal','resources','main','g1234','slotFramework']},plugins:{jsList:['plugin.js']},screen:{designResolution:{width:1280,height:720}}});
  await write(path.join(capture,'src/plugin.js'),plugin);await write(path.join(capture,'capture-manifest.json'),{files:[{path:'src/plugin.js',sha256:sha256(plugin)}]});
  await write(metadata,{project:'Project-Z',gn:'fixture',gt:'slot-fixture',viewMode:'landscape'});
  const stageReport={status:'assets-staged-not-runtime-verified',unresolved:[],unknownTypes:[],outputs:[{type:'scene',path:'assets/scenes/main.scene',uuid:sceneUuid}]};
  await write(path.join(stage,'asset-map.json'),stageReport);await write(path.join(stage,'assets/scenes/main.scene'),'[]');await write(path.join(stage,'assets/scenes/main.scene.meta'),{uuid:sceneUuid,importer:'scene'});
  const portraitUuid='00000000-0000-0000-0000-000000000003',exampleUuid='00000000-0000-0000-0000-000000000004';
  for(const [name,uuid]of [['mainPortrait',portraitUuid],['orientationExampleScene',exampleUuid]]){
    stageReport.outputs.push({type:'scene',path:'assets/scenes/'+name+'.scene',uuid});await write(path.join(stage,'assets/scenes/'+name+'.scene'),'[]');await write(path.join(stage,'assets/scenes/'+name+'.scene.meta'),{uuid,importer:'scene'});
  }
  await write(path.join(stage,'asset-map.json'),stageReport);await write(path.join(capture,'application.js'),'let launchScene=view_mode=="portrait"?"mainPortrait":"main";');await write(path.join(capture,'assets/main/config.json'),{uuids:[sceneUuid,portraitUuid,exampleUuid],scenes:{'db://assets/main.scene':0,'db://assets/mainPortrait.scene':1,'db://assets/orientationExampleScene.scene':2}});
  for(const folder of ['assets/game/content','assets/shared/framework','assets/resources'])await fs.mkdir(path.join(stage,folder),{recursive:true});
  await write(path.join(scripts,'shared.ts'),'export const x=1;');await write(path.join(scripts,'game.ts'),'import {x} from "./shared";export const y=x;');await write(path.join(scripts,'game.ts.meta'),{uuid:scriptUuid,importer:'typescript'});
  await write(path.join(scripts,'manifest.json'),{modules:[{bundle:'main',id:'chunks:///_virtual/Same.ts',output:'shared.ts',sourceSha256:'fixture-shared',uuid:null},{bundle:'g1234',id:'chunks:///_virtual/Same.ts',output:'game.ts',sourceSha256:'fixture-game',uuid:scriptUuid}]});
  const result=await assemble(capture,stage,scripts,metadata,root);assert.equal(result.report.status,'not runtime verified');assert.equal(result.config.scenes.landscape.uuid,sceneUuid);assert.equal(result.report.backend,'not-installed');
  assert.equal(result.config.scenes.portrait.uuid,portraitUuid);assert.equal(result.report.additionalScenes[0].uuid,exampleUuid);assert.equal(Object.keys(result.config.scenes).length,2);
  assert.equal(JSON.parse(await fs.readFile(path.join(root,'assets/game/scripts/g1234-Same.ts.meta'),'utf8')).uuid,scriptUuid);
  assert.match(await fs.readFile(path.join(root,'assets/game/scripts/g1234-Same.ts'),'utf8'),/\.\.\/\.\.\/shared\/scripts\/main-Same/);
  const vendor=await fs.readFile(path.join(root,'assets/shared/vendor/original-vendors.js'),'utf8'),meta=JSON.parse(await fs.readFile(path.join(root,'assets/shared/vendor/original-vendors.js.meta'),'utf8'));
  assert.match(vendor,/root.Editor/);assert.match(vendor,/root\["VendorFixture"\]=VendorFixture/);assert.equal(meta.userData.loadPluginInEditor,false);assert.equal(meta.userData.isPlugin,true);
  assert.equal(JSON.parse(await fs.readFile(path.join(root,'assets/game/content.meta'),'utf8')).userData.bundleName,'g1234');assert.doesNotMatch(await fs.readFile(path.join(root,'README.md'),'utf8'),/hades|seth2|Baphomet/i);
  assert.equal(result.report.modules[1].file,'assets/game/scripts/g1234-Same.ts');
  await assert.rejects(assemble(capture,stage,scripts,metadata,root),/already exists/);
  const otherRoot=path.join(tmp,'another','Project-Z');await fs.mkdir(path.dirname(otherRoot));stageReport.unresolved=[{uuid:'missing'}];await write(path.join(stage,'asset-map.json'),stageReport);
  await assert.rejects(assemble(capture,stage,scripts,metadata,otherRoot),/staging gate/);await assert.rejects(fs.stat(otherRoot),/ENOENT/);
});
