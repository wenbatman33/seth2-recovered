import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import vm from 'node:vm';
import {extractBundle,extractModules,containedFile,sha256} from '../tools/recovery/extract-system-modules.mjs';
import {recoverIndex,recoverModule} from '../tools/recovery/recover-system-modules.mjs';
const registration=(id,deps,setters,execute,preamble='')=>`System.register(${JSON.stringify(id)},${JSON.stringify(deps)},function(exports){${preamble}return {setters:[${setters}],execute:function(){${execute}}};});`;
async function temporary(t){const root=await fs.mkdtemp(path.join(os.tmpdir(),'cocos-module-recovery-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));return root;}
async function entry(root,bundle,id,source,n){const file=`source-${n}.js`;await fs.writeFile(path.join(root,file),source);return {id,bundle,file,sha256:sha256(source)};}
test('extract preserves exact provenance, blocks duplicates, traversal and existing output',async t=>{
  const root=await temporary(t),source='/* prefix 中文 */\n'+registration('chunks:///_virtual/Foo.ts',[],'','exports("value",7);');
  const input=path.join(root,'bundle.js'),output=path.join(root,'extracted');await fs.writeFile(input,source);
  const manifest=await extractBundle(input,output),item=manifest.modules[0],code=await fs.readFile(path.join(output,item.file),'utf8');
  assert.equal(code,source.slice(item.start,item.end)+';\n');assert.equal(item.sha256,sha256(code));assert.equal(manifest.source.sha256,sha256(source));
  await assert.rejects(extractBundle(input,output),/EEXIST/);
  assert.throws(()=>extractModules(source+source),/Duplicate/);
  assert.throws(()=>extractModules(registration('chunks:///_virtual/../escape.ts',[],'','')),/Unsafe/);
  assert.throws(()=>containedFile(root,'../escape'),/escapes/);
  const wrappers=extractModules(source+'System.register([],function(){});');assert.equal(wrappers.length,1);assert.equal(wrappers.skipped.length,1);
  const wrapperOnly=extractModules('System.register([],function(){});');assert.equal(wrapperOnly.length,0);assert.equal(wrapperOnly.skipped.length,1);
});
test('exact identities and bundle context preserve duplicate basenames; ambiguity fails before output',async t=>{
  const root=await temporary(t),id='chunks:///_virtual/Shared.ts',consumer='chunks:///_virtual/Consumer.ts';
  const modules=[];
  for(const [bundle,value]of [['main',1],['g1009',2]])modules.push(await entry(root,bundle,id,registration(id,[],'',`exports("value",${value});`),modules.length));
  const helper='chunks:///_virtual/_rollupPluginBabelHelpers.ts';modules.push(await entry(root,'main',helper,registration(helper,[],'','exports("helper",1);'),modules.length));
  modules.push(await entry(root,'g1009',consumer,registration(consumer,['./Shared.ts','./_rollupPluginBabelHelpers.ts'],'function(ns){value=ns.value;},function(ns){helper=ns.helper;}','exports("read",function(){return value+helper;});','var value,helper;'),modules.length));
  const index=path.join(root,'index.json');await fs.writeFile(index,JSON.stringify({modules}));
  const result=await recoverIndex(index,path.join(root,'out'));
  assert.equal(result.modules[3].dependencies[0],'./'+result.modules[1].output.slice(0,-3));assert.equal(result.modules[3].dependencies[1],'./'+result.modules[2].output.slice(0,-3));
  modules[3].bundle='other';await fs.writeFile(index,JSON.stringify({modules}));
  const ambiguous=path.join(root,'ambiguous');await assert.rejects(recoverIndex(index,ambiguous),/Ambiguous/);await assert.rejects(fs.stat(ambiguous),/ENOENT/);
  await fs.writeFile(index,JSON.stringify({modules,bundleDependencies:{other:{'./Shared.ts':'main'}}}));
  const selected=await recoverIndex(index,path.join(root,'selected'));assert.equal(selected.modules[3].dependencies[0],'./'+selected.modules[0].output.slice(0,-3));
});
test('hash mismatch and unsupported setter effects fail before writing',async t=>{
  const root=await temporary(t),id='chunks:///_virtual/Bad.ts',item=await entry(root,'game',id,registration(id,[],'',''),0);item.sha256='wrong';
  const index=path.join(root,'index.json'),out=path.join(root,'out');await fs.writeFile(index,JSON.stringify({modules:[item]}));
  await assert.rejects(recoverIndex(index,out),/hash mismatch/);await assert.rejects(fs.stat(out),/ENOENT/);
  assert.throws(()=>recoverModule(registration(id,['cc'],'function(ns){ns.sideEffect();}','',''),id,x=>x),/setter/);
});
test('tween compatibility is explicit and preserves ccclass names',()=>{
  const id='chunks:///_virtual/View.ts',source=registration(id,['cc'],'function(ns){tween=ns.tween;decorator=ns._decorator;}','exports("default",function(){tween({});return decorator.ccclass("OriginalView");});','var tween,decorator;');
  const normal=recoverModule(source,id,x=>x),compat=recoverModule(source,id,x=>x,{compatTweenNodeState:true});
  assert.equal(normal.tweenNodeStateBridges,0);assert.doesNotMatch(normal.code,/bindNodeState/);assert.match(normal.code,/OriginalView/);assert.doesNotMatch(normal.code,/Hades_/);
  assert.equal(compat.tweenNodeStateBridges,1);assert.match(compat.code,/bindNodeState\(false\)/);
});
test('dependency-free chunks helper may omit setters',()=>{
  const id='chunks:///_virtual/_rollupPluginBabelHelpers.ts',source=`System.register(${JSON.stringify(id)},[],function(exports){return {execute:function(){exports("inheritsLoose",function(child,parent){Object.setPrototypeOf(child.prototype,parent.prototype);});}};});`;
  const result=recoverModule(source,id,x=>x);assert.deepEqual(result.dependencies,[]);assert.deepEqual(result.exports,['inheritsLoose']);assert.match(result.code,/setPrototypeOf/);
  assert.throws(()=>recoverModule(source.replace(',[],',',["cc"],'),id,x=>x),/count mismatch/);
});
test('side-effect-only module entry retains null-setter dependencies',()=>{
  const id='chunks:///_virtual/main',source=`System.register(${JSON.stringify(id)},["./side-effect.ts"],function(){return {setters:[null],execute:function(){}};});`;
  const result=recoverModule(source,id,x=>x);assert.deepEqual(result.dependencies,['./side-effect.ts']);assert.match(result.code,/from "\.\/side-effect.ts"/);
});
test('captured main/index.ts setters become ESM live reexports',{skip:!vm.SourceTextModule},async()=>{
  // Exact Project-C main/00071-index-ba0161ae7b67.js source (no original assets).
  const source='System.register("chunks:///_virtual/index.ts",["cc","./state.ts","./fsm.ts"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy},function(n){t("isState",n.isState)},function(n){var i={};i.InvalidConstructor=n.InvalidConstructor,i.InvalidTransition=n.InvalidTransition,i.StateMachine=n.StateMachine,i.randomUUID=n.randomUUID,t(i)}],execute:function(){n._RF.push({},"f39b9vVhDNKqKjZS2C/2qc7","index",void 0),n._RF.pop()}}}));';
  const result=recoverModule(source,'chunks:///_virtual/index.ts',x=>x);assert.equal(result.reexports.length,5);assert.match(result.code,/export \{ StateMachine \} from "\.\/fsm.ts"/);
  const context=vm.createContext({}),modules=new Map([
    ['cc',new vm.SourceTextModule('export const cclegacy={_RF:{push(){},pop(){}}};',{context})],
    ['./state.ts',new vm.SourceTextModule('export let isState=1;export function update(){isState=2;}',{context})],
    ['./fsm.ts',new vm.SourceTextModule('export let InvalidConstructor=1,InvalidTransition=2,StateMachine=3,randomUUID=4;export function update(){StateMachine=30;}',{context})],
  ]),index=new vm.SourceTextModule(result.code,{context});
  await index.link(id=>modules.get(id));await index.evaluate();assert.equal(index.namespace.isState,1);assert.equal(index.namespace.StateMachine,3);
  modules.get('./state.ts').namespace.update();modules.get('./fsm.ts').namespace.update();assert.equal(index.namespace.isState,2);assert.equal(index.namespace.StateMachine,30);
  assert.throws(()=>recoverModule(source.replace('i.StateMachine=n.StateMachine','i.StateMachine=n.StateMachine()'),'chunks:///_virtual/index.ts',x=>x),/assignment/);
  assert.throws(()=>recoverModule(source.replace('var i={}','var i=unknownObject'),'chunks:///_virtual/index.ts',x=>x),/local/);
});
test('recovered modules execute with live exports, original UUID and native-super bridge',{skip:!vm.SourceTextModule},async t=>{
  const root=await temporary(t),a='chunks:///_virtual/State.ts',b='chunks:///_virtual/Reader.ts',c='chunks:///_virtual/Child.ts';
  const sources=[
    [a,registration(a,[],'','exports("counter",counter);exports("increment",function(){exports("counter",++counter);});','var counter=0;')],
    [b,registration(b,['./State.ts'],'function(ns){counter=ns.counter;}','exports("read",function(){return counter;});','var counter;')],
    [c,registration(c,['cc'],'function(ns){Base=ns.Component;legacy=ns.cclegacy;}','legacy._RF.push({},"00000000-0000-0000-0000-000000000001","Child",undefined);helpers.inheritsLoose(Child,Base);exports("Child",Child);legacy._RF.pop();','var Base,legacy;var helpers={inheritsLoose:function(child,parent){Object.setPrototypeOf(child.prototype,parent.prototype);Object.setPrototypeOf(child,parent);}};function Child(value){return Base.call(this,value)||this;}')],
  ];
  const modules=[];for(const [id,source]of sources)modules.push(await entry(root,'game',id,source,modules.length));
  const index=path.join(root,'index.json'),out=path.join(root,'recovered');await fs.writeFile(index,JSON.stringify({modules}));
  const manifest=await recoverIndex(index,out);assert.equal(manifest.modules[2].constructorBridges,1);assert.equal(manifest.modules[2].uuid,'00000000-0000-0000-0000-000000000001');
  const meta=JSON.parse(await fs.readFile(path.join(out,manifest.modules[2].output+'.meta'),'utf8'));assert.equal(meta.uuid,manifest.modules[2].uuid);
  const context=vm.createContext({}),loaded=new Map();
  const cc=new vm.SourceTextModule('export class Component {constructor(value){this.value=value}}; export const cclegacy={_RF:{push(){},pop(){}}};',{context});
  for(const item of manifest.modules)loaded.set('./'+item.output.slice(0,-3),new vm.SourceTextModule(await fs.readFile(path.join(out,item.output),'utf8'),{context}));
  const linker=id=>id==='cc'?cc:loaded.get(id);
  for(const mod of loaded.values())if(mod.status==='unlinked')await mod.link(linker);
  for(const mod of loaded.values())if(mod.status!=='evaluated')await mod.evaluate();
  const state=loaded.get('./'+manifest.modules[0].output.slice(0,-3)).namespace,reader=loaded.get('./'+manifest.modules[1].output.slice(0,-3)).namespace,child=loaded.get('./'+manifest.modules[2].output.slice(0,-3)).namespace;
  assert.equal(reader.read(),0);state.increment();assert.equal(reader.read(),1);
  const instance=new child.Child(42);assert.equal(instance.value,42);assert.equal(instance instanceof child.Child,true);assert.equal(instance instanceof cc.namespace.Component,true);
  Object.defineProperty(child.Child.prototype,'constructor',{get(){throw Error('instance constructor must never be consulted');}});
  const called=child.Child.call(Object.create(child.Child.prototype),43);assert.equal(called.value,43);assert.equal(called instanceof child.Child,true);
  await assert.rejects(recoverIndex(index,out),/EEXIST/);
});
