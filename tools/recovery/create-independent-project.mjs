#!/usr/bin/env node
// Assemble a NEW independent Creator project from verified static staging only.
// No engine, captured scripts, server connection, build, or backend is executed.
// CLI: <capture-dir> <stage-dir> <scripts-dir> <metadata.json[#Project-X]> <new-project-dir>
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {randomUUID} from 'node:crypto';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import {containedFile,sha256} from './extract-system-modules.mjs';
const traverse=traverseModule.default,generate=generateModule.default;
const collection=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const template=path.join(collection,'Project-A');
const json=async file=>JSON.parse(await fs.readFile(file,'utf8'));
const writeJson=(file,value)=>fs.writeFile(file,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
async function inventory(root){const files=[];for(const entry of await fs.readdir(root,{withFileTypes:true})){const full=path.join(root,entry.name);if(entry.isSymbolicLink())throw Error('Symlink source is unsupported: '+full);if(entry.isDirectory())files.push(...await inventory(full));else if(entry.isFile())files.push(full);}return files;}
function scriptName(item){const base=path.posix.basename(item.id).replace(/\.(ts|js)$/,'');return `${item.bundle}-${base}`.replace(/[^a-zA-Z0-9_-]/g,'_')+'.ts';}
function decodeUuid(value){
  const [root,...suffix]=value.split('@');if(![22,23].includes(root.length))return value;
  const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',prefix=root.length===23?5:2;let hex=root.slice(0,prefix);
  for(let i=prefix;i<root.length;i+=2){const a=alphabet.indexOf(root[i]),b=alphabet.indexOf(root[i+1]);if(a<0||b<0)return value;hex+=(a*64+b).toString(16).padStart(3,'0');}
  if(!/^[0-9a-f]{32}$/i.test(hex))return value;
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`+(suffix.length?'@'+suffix.join('@'):'');
}
export function rewriteImports(code,sourceFile,destination,scriptMap){
  const ast=parse(code,{sourceType:'module'}),imports=[];
  const rewrite=node=>{
    if(!node.source)return;
    const original=node.source.value;if(original==='cc')return;
    if(!original.startsWith('.'))throw Error('Unexpected external import '+original+' in '+sourceFile);
    const base=path.resolve(path.dirname(sourceFile),original),target=scriptMap.get(base)||scriptMap.get(base+'.ts');
    if(!target)throw Error('Unmapped script import '+original+' in '+sourceFile);
    let relative=path.relative(path.dirname(destination),target).split(path.sep).join('/').replace(/\.ts$/,'');if(!relative.startsWith('.'))relative='./'+relative;
    node.source.value=relative;imports.push({original,recovered:relative});
  };
  traverse(ast,{ImportDeclaration:p=>rewrite(p.node),ExportNamedDeclaration:p=>rewrite(p.node),ExportAllDeclaration:p=>rewrite(p.node),CallExpression(p){if(p.node.callee.type==='Import')throw Error('Dynamic imports require explicit recovery');}});
  return {code:generate(ast).code+'\n',imports};
}
export function originalLaunchSceneNames(source){
  const results=[];traverse(parse(source,{sourceType:'module'}),{VariableDeclarator(p){
    const n=p.node,c=n.init;if(n.id?.name!=='launchScene'||c?.type!=='ConditionalExpression')return;
    const test=c.test;
    if(test.type==='BinaryExpression'&&['==','==='].includes(test.operator)&&test.left.type==='Identifier'&&test.left.name==='view_mode'&&test.right.type==='StringLiteral'&&test.right.value==='portrait'&&c.consequent.type==='StringLiteral'&&c.alternate.type==='StringLiteral')results.push({portrait:c.consequent.value,landscape:c.alternate.value});
  }});if(results.length>1)throw Error('Ambiguous source launch scene mapping');return results[0]??null;
}
export async function assemble(captureDir,stageDir,scriptsDir,metadataSpec,newRoot){
  const capture=path.resolve(captureDir),stage=path.resolve(stageDir),scripts=path.resolve(scriptsDir),root=path.resolve(newRoot);
  // Reject an existing target before even considering staging; never update A/B.
  try{await fs.lstat(root);throw Error('Target project already exists: '+root);}catch(error){if(error.code!=='ENOENT')throw error;}
  const hashIndex=metadataSpec.lastIndexOf('#'),metadataFile=hashIndex<0?metadataSpec:metadataSpec.slice(0,hashIndex),selector=hashIndex<0?null:metadataSpec.slice(hashIndex+1);
  const metadataDocument=await json(metadataFile),metadata=Array.isArray(metadataDocument)?metadataDocument.find(m=>m.project===selector):metadataDocument;
  if(!metadata||!/^Project-[A-Z]+$/.test(metadata.project)||metadata.project!==path.basename(root))throw Error('Metadata must identify this neutral Project-X root');
  if(!metadata.gn||!metadata.gt)throw Error('Metadata must preserve gn and gt');
  const stageReport=await json(path.join(stage,'asset-map.json')),scriptReport=await json(path.join(scripts,'manifest.json')),settings=await json(path.join(capture,'src/settings.json'));
  if(stageReport.status!=='assets-staged-not-runtime-verified'||!Array.isArray(stageReport.unresolved)||stageReport.unresolved.length||!Array.isArray(stageReport.unknownTypes)||stageReport.unknownTypes.length)throw Error('Asset staging gate failed: unresolved, unknown, or incomplete assets');
  if(!Array.isArray(scriptReport.modules)||!scriptReport.modules.length)throw Error('Recovered script manifest is empty');
  const bundles=(settings.assets?.projectBundles||[]).filter(b=>/^g\d+$/.test(b));if(bundles.length!==1)throw Error('Expected exactly one original game bundle');const bundle=bundles[0];
  const stageFiles=await inventory(path.join(stage,'assets'));
  const allScenes=stageReport.outputs.filter(o=>o.type==='scene');let launchNames=null;
  try{launchNames=originalLaunchSceneNames(await fs.readFile(path.join(capture,'application.js'),'utf8'));}catch(error){if(error.code!=='ENOENT')throw error;}
  const selected=[];
  if(launchNames){
    const version=settings.assets.bundleVers?.main,mainConfig=await json(path.join(capture,'assets/main/config'+(version?'.'+version:'')+'.json'));
    for(const [mode,name]of Object.entries(launchNames)){
      const entries=Object.entries(mainConfig.scenes||{}).filter(([url])=>path.posix.basename(url).replace(/\.scene$/,'')===name);
      if(entries.length!==1)throw Error('Source launch scene missing or ambiguous: '+name);
      const uid=decodeUuid(mainConfig.uuids[Number(entries[0][1])]),outputs=allScenes.filter(o=>o.uuid===uid);
      if(outputs.length!==1)throw Error('Staged launch scene missing or ambiguous: '+name);
      selected.push({mode,output:outputs[0]});
    }
  }else for(const output of allScenes)selected.push({mode:/portrait|mobile/i.test(output.path)?'portrait':'landscape',output});
  const scenes={};for(const {mode,output}of selected){
    if(scenes[mode])throw Error('Ambiguous '+mode+' scene; explicit source launch mapping required');
    const meta=await json(containedFile(stage,output.path+'.meta'));if(meta.uuid!==output.uuid)throw Error('Scene metadata differs from staging');
    scenes[mode]={url:'db://'+output.path,uuid:meta.uuid};
  }
  if(!Object.keys(scenes).length)throw Error('No staged scene');
  const defaultMode=scenes[metadata.viewMode]?metadata.viewMode:scenes.landscape?'landscape':'portrait',id=metadata.project.toLowerCase();
  const config={id,title:metadata.project,projectId:id,project:metadata.project,bundle,gn:metadata.gn,gt:metadata.gt,buildDirectory:'build/web',previewPort:8180+metadata.project.charCodeAt(metadata.project.length-1)-64,scenes,defaultMode,status:'source-assembled-not-playable',backend:'not-installed'};
  const mapped=new Map(),destinations=new Set(),prepared=[];
  for(const item of scriptReport.modules){
    const folder=/^g\d+$/.test(item.bundle)?'assets/game/scripts':'assets/shared/scripts';if(/^g\d+$/.test(item.bundle)&&item.bundle!==bundle)throw Error('Unexpected game script bundle');
    let relative=folder+'/'+scriptName(item);if(destinations.has(relative))relative=relative.replace(/\.ts$/,'-'+sha256(item.bundle+':'+item.id).slice(0,10)+'.ts');
    if(destinations.has(relative))throw Error('Script filename collision');destinations.add(relative);
    const source=containedFile(scripts,item.output),destination=containedFile(root,relative);mapped.set(source,destination);prepared.push({item,source,destination,relative});
  }
  for(const item of prepared)item.rewritten=rewriteImports(await fs.readFile(item.source,'utf8'),item.source,item.destination,mapped);
  const captureManifest=await json(path.join(capture,'capture-manifest.json')),plugins=[],pluginBodies=[],pluginGlobals=new Set();
  for(const plugin of settings.plugins?.jsList||[]){
    const relative='src/'+plugin,file=containedFile(capture,relative),source=await fs.readFile(file,'utf8'),entry=captureManifest.files?.find(f=>f.path===relative);
    if(!entry||entry.sha256!==sha256(source))throw Error('Plugin provenance hash mismatch: '+relative);
    const ast=parse(source,{sourceType:'script'});traverse(ast,{Program(p){for(const [name,binding]of Object.entries(p.scope.bindings))if(binding.kind==='var'||binding.kind==='hoisted'||binding.kind==='let'||binding.kind==='const')pluginGlobals.add(name);p.stop();}});
    plugins.push({path:relative,sha256:sha256(source)});pluginBodies.push('// Original script: '+relative+'\n'+source+'\n;');
  }
  const vendor='// Original captured browser plugins in original jsList order; never loaded in Editor.\n(function(root){if(root.Editor||(root.process&&root.process.versions&&root.process.versions.electron)||/Electron\\//i.test(root.navigator&&root.navigator.userAgent||""))return;\n(function(){var module=undefined,exports=undefined,require=undefined,define=undefined,process=undefined,Buffer=undefined;var self=root,window=root,global=root,globalThis=root;\n'+pluginBodies.join('\n')+'\n'+[...pluginGlobals].filter(n=>!['module','exports','require','define','process','Buffer','self','window','global','globalThis'].includes(n)).map(n=>`root[${JSON.stringify(n)}]=${n};`).join('\n')+'\n}).call(root);\n})(globalThis);\n';parse(vendor,{sourceType:'script'});
  await fs.mkdir(root);
  await fs.cp(path.join(stage,'assets'),path.join(root,'assets'),{recursive:true,errorOnExist:true,force:false});
  await fs.mkdir(path.join(root,'docs'));await fs.mkdir(path.join(root,'tools'));await fs.mkdir(path.join(root,'.creator'));
  for(const file of ['engine.json','builder.json','project.json','program.json','device.json']){const dest=path.join(root,'settings/v2/packages',file);await fs.mkdir(path.dirname(dest),{recursive:true});await fs.copyFile(path.join(template,'settings/v2/packages',file),dest,fs.constants?.COPYFILE_EXCL);}
  await fs.copyFile(path.join(template,'.creator/default-meta.json'),path.join(root,'.creator/default-meta.json'));
  await fs.copyFile(path.join(template,'tsconfig.json'),path.join(root,'tsconfig.json'));
  await fs.copyFile(path.join(template,'.gitignore'),path.join(root,'.gitignore'));
  await writeJson(path.join(root,'package.json'),{name:id,uuid:randomUUID(),creator:{version:'3.8.8'},version:'1.0.0',private:true,description:'Independent recovered frontend sources; gameplay validation pending',scripts:{preview:'node tools/start-preview.cjs','preview:dev':'node tools/start-preview.cjs --development'}});
  await writeJson(path.join(root,'game.config.json'),config);
  for(const entry of prepared){await fs.mkdir(path.dirname(entry.destination),{recursive:true});await fs.writeFile(entry.destination,entry.rewritten.code,{flag:'wx'});if(entry.item.uuid){const meta=await json(entry.source+'.meta');if(meta.uuid!==entry.item.uuid)throw Error('Script metadata differs from manifest');await writeJson(entry.destination+'.meta',meta);}}
  const vendorPath=path.join(root,'assets/shared/vendor/original-vendors.js');await fs.mkdir(path.dirname(vendorPath),{recursive:true});await fs.writeFile(vendorPath,vendor,{flag:'wx'});
  await writeJson(vendorPath+'.meta',{ver:'4.0.24',importer:'javascript',imported:false,uuid:randomUUID(),files:[],subMetas:{},userData:{isPlugin:true,loadPluginInEditor:false,loadPluginInWeb:true,loadPluginInNative:false,loadPluginInMiniGame:false,executionScope:'global',simulateGlobals:true}});
  // Every folder is local and independently importable; source asset metas stay untouched.
  async function directoryMetas(directory){for(const entry of await fs.readdir(directory,{withFileTypes:true}))if(entry.isDirectory()){const full=path.join(directory,entry.name),meta=full+'.meta';try{await fs.access(meta);}catch{await writeJson(meta,{ver:'1.2.0',importer:'directory',imported:false,uuid:randomUUID(),files:[],subMetas:{},userData:{}});}await directoryMetas(full);}}
  await directoryMetas(path.join(root,'assets'));
  const bundleConfigs=[{name:'main',root:'',output:true},{name:'internal',root:'',output:true}];
  for(const [folder,name]of [['assets/resources','resources'],['assets/shared/framework','slotFramework'],['assets/game/content',bundle]]){
    const metaFile=path.join(root,folder+'.meta'),meta=await json(metaFile);meta.userData={...meta.userData,isBundle:true,bundleName:name,priority:name==='resources'?8:1,compressionType:{},isRemoteBundle:{}};
    await fs.writeFile(metaFile,JSON.stringify(meta,null,2)+'\n');bundleConfigs.push({name,root:'db://'+folder,uuid:meta.uuid,output:true});
  }
  const build=await json(path.join(template,'build-config.json'));Object.assign(build,{name:metadata.project,startScene:scenes[defaultMode].uuid,scenes:Object.values(scenes),bundleConfigs,buildPath:'project://build',outputName:'web'});
  const resolution=settings.screen?.designResolution||{width:1280,height:720};build.packages['web-desktop'].resolution={designWidth:resolution.width,designHeight:resolution.height};delete build.packages['adsense-h5g-plugin'];await writeJson(path.join(root,'build-config.json'),build);
  for(const file of ['start-preview.cjs','frontend-launch.js','prepare-recovered-build.cjs']){const source=file==='prepare-recovered-build.cjs'?path.join(collection,'tools/recovery/templates',file):path.join(template,'tools',file);await fs.copyFile(source,path.join(root,'tools',file));}
  await fs.writeFile(path.join(root,'tools/prepare-recovered-build.mjs'),"import preparation from './prepare-recovered-build.cjs';\nexport const {prepareRecoveredBuild}=preparation;\nprepareRecoveredBuild(process.argv[2]||'build/web');\n",{flag:'wx'});
  // Keep only the development mute block; omit old games' debug capture naming.
  const development=await fs.readFile(path.join(template,'tools/frontend-development-bridge.js'),'utf8'),debugAt=development.indexOf("  if (params.get('reaDebug')");if(debugAt<0)throw Error('Development mute template changed');
  await fs.writeFile(path.join(root,'tools/frontend-development-bridge.js'),development.slice(0,debugAt)+'})();\n',{flag:'wx'});
  await writeJson(path.join(root,'tools/browser-game-catalog.json'),[config]);
  await fs.cp(path.join(template,'extensions/recovered-frontends-build'),path.join(root,'extensions/recovered-frontends-build'),{recursive:true,errorOnExist:true,force:false});
  await fs.writeFile(path.join(root,'開啟本遊戲預覽.command'),'#!/bin/zsh\ncd "${0:A:h}"\nnode tools/start-preview.cjs --open\n',{mode:0o755,flag:'wx'});
  await fs.writeFile(path.join(root,'README.md'),`# ${metadata.project}\n\n獨立 Cocos Creator 3.8.8 前端還原工程。此工程尚未標記可玩，尚未完成官方 GUI 建置及玩法驗收。\n\nassets/scenes 保留來源 PC／Mobile 場景及原 UUID；assets/game/content 為此遊戲原素材；assets/game/scripts 與 assets/shared/scripts 為發布 runtime JavaScript 的機械還原，副檔名為 .ts，並非作者原始 TypeScript。\n\n本機模擬後端尚未安裝，沒有還原原伺服器、RNG 或 RTP。原始 vendor 插件僅供 Web，禁止在 Editor 執行。\n\n以 Dashboard 匯入本資料夾，使用官方 3.8.8 GUI 匯入 build-config.json 建置；建置後工具僅設定本工程入口及開發靜音參數。一般驗證預設保留聲音。\n\n來源轉換與靜態檢查參見 recovery-manifest.json；靜態依賴完整不代表畫面、音效或互動已驗收。\n`,{flag:'wx'});
  const report={status:'not runtime verified',project:metadata.project,capture:{directory:capture,manifestSha256:sha256(await fs.readFile(path.join(capture,'capture-manifest.json'))),engine:settings.CocosEngine},assetStage:{directory:stage,status:stageReport.status,unresolved:0,unknownTypes:0},scenes,launchSceneEvidence:launchNames?{source:'application.js launchScene conditional',names:launchNames}:null,additionalScenes:allScenes.filter(o=>!selected.some(s=>s.output.uuid===o.uuid)),plugins,pluginGlobalExports:[...pluginGlobals],modules:prepared.map(p=>({id:p.item.id,bundle:p.item.bundle,source:p.item.output,sourceSha256:p.item.sourceSha256,outputSha256:sha256(p.rewritten.code),file:p.relative,uuid:p.item.uuid,imports:p.rewritten.imports})),compatibility:scriptReport.compatibility,backend:'not-installed',validation:{officialGuiBuild:false,gameplay:false}};
  await writeJson(path.join(root,'recovery-manifest.json'),report);await writeJson(path.join(root,'docs/source-assets.json'),stageReport);
  return {root,config,report,stageFiles:stageFiles.length};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
  if(process.argv.length!==7){console.error('Usage: create-independent-project.mjs <capture-dir> <staged-assets-dir> <recovered-scripts-dir> <metadata.json[#Project-X]> <new-project-dir>');process.exitCode=1;}
  else try{const result=await assemble(...process.argv.slice(2));console.log(JSON.stringify({project:result.config.project,root:result.root,scripts:result.report.modules.length,scenes:result.config.scenes,status:result.report.status}));}catch(error){console.error(error.stack);process.exitCode=1;}
}
