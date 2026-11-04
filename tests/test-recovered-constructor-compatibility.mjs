import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

test('original Hades legacy .call chain preserves its derived constructor over an ES class base',()=>{
  const source=readFileSync(new URL('../Project-A/assets/shared/scripts/main-GameDataBase.ts',import.meta.url),'utf8')
    .replace(/^import .*;\n/gm,'').replace(/^export \{.*\};\n/gm,'');
  class NativeBase {constructor(...args){this.received=args;}}
  const sandbox={__dependency_0:{inheritsLoose(child,parent){child.prototype=Object.create(parent.prototype);Object.defineProperty(child.prototype,'constructor',{value:child,writable:true,configurable:true});Object.setPrototypeOf(child,parent);}},
    __dependency_1:{cclegacy:{_RF:{push(){},pop(){}}}},__dependency_2:{Macro:{UNKNOWN:'unknown'}},__dependency_3:{CmmGameData:NativeBase}};
  vm.runInNewContext(source+'\nglobalThis.Recovered=__export_0;',sandbox);
  const Recovered=sandbox.Recovered;
  function HadesDerived(){const instance=Recovered.call.apply(Recovered,[this,...arguments]);instance.version='1.0.27_2';return instance;}
  sandbox.__dependency_0.inheritsLoose(HadesDerived,Recovered);
  for(const args of [[],['first',42]]){
    const instance=new HadesDerived(...args);
    assert.ok(instance instanceof NativeBase);assert.ok(instance instanceof Recovered);assert.ok(instance instanceof HadesDerived);
    assert.deepEqual(Array.from(instance.received),args);assert.equal(instance.version,'1.0.27_2');
  }
});

test('recovered Hades GameData constructs with original fields and superclass arguments',()=>{
  let source=readFileSync(new URL('../Project-B/assets/game/scripts/g1007-GameData.ts',import.meta.url),'utf8');
  const sandbox={};
  for(const match of source.matchAll(/^import \* as (\w+) from "([^"]+)";/gm))sandbox[match[1]]={};
  class NativeBase {constructor(...args){this.received=args;}}
  sandbox.__dependency_0={inheritsLoose(child,parent){child.prototype=Object.create(parent.prototype);Object.defineProperty(child.prototype,'constructor',{value:child,writable:true,configurable:true});Object.setPrototypeOf(child,parent);},createClass(ctor,properties){for(const p of properties)Object.defineProperty(ctor.prototype,p.key,p);return ctor;}};
  sandbox.__dependency_1={cclegacy:{_RF:{push(){},pop(){}}}};
  sandbox.__dependency_2={EBundles:{g1007:13,13:'g1007'}};
  sandbox.__dependency_3={GameDataBase:NativeBase};
  source=source.replace(/^import .*;\n/gm,'').replace(/^export \{.*\};\n/gm,'');
  vm.runInNewContext(source+'\nglobalThis.Recovered=__export_0;',sandbox);
  const data=new sandbox.Recovered('original-argument');
  assert.ok(data instanceof NativeBase);assert.equal(data.GAME_VERSION,'1.0.27_2');
  assert.deepEqual(Array.from(data.received),['original-argument']);
});

test('Hades giant transformation completes when the timing Spine node is hidden',async()=>{
  const {parse}=await import('@babel/parser');
  const traverse=(await import('@babel/traverse')).default.default;
  const generate=(await import('@babel/generator')).default.default;
  const source=readFileSync(new URL('../Project-B/assets/game/scripts/g1007-GameSymbol.ts',import.meta.url),'utf8');
  let method;
  traverse(parse(source,{sourceType:'module'}),{AssignmentExpression(p){if(p.node.left.type==='MemberExpression'&&p.node.left.property.name==='setSymbolScaleByTween')method=p.node.right;}});
  assert.ok(method);
  const starts=[];
  const cc={v3:(x,y,z)=>({x,y,z}),easing:{backOut:x=>x},tween(target){let bound=true,complete;const chain={bindNodeState(value){bound=value;return chain;},to(){return chain;},delay(){return chain;},call(fn){complete=fn;return chain;},start(){starts.push({target,bound});if(target.active||!bound)complete?.();return chain;}};return chain;}};
  const run=vm.runInNewContext('('+generate(method).code+')',{__dependency_1:cc});
  const nodes={staticSymbol:{active:true},pieceSpine:{active:false},symbolSpine:{active:false}};
  let completed=false;
  await Promise.race([run.call(nodes,.8).then(()=>{completed=true;}),new Promise((_,reject)=>setTimeout(()=>reject(new Error('Hidden-node tween did not complete')),100))]);
  assert.ok(completed);assert.equal(starts.length,3);assert.ok(starts.every(s=>s.bound===false));
});

test('shared 3.7 delay sentinel completes without belonging to the scene tree',async()=>{
  const {parse}=await import('@babel/parser');
  const traverse=(await import('@babel/traverse')).default.default;
  const generate=(await import('@babel/generator')).default.default;
  const source=readFileSync(new URL('../Project-A/assets/shared/scripts/framework-CmmSlotUtils.ts',import.meta.url),'utf8');
  let method;
  traverse(parse(source,{sourceType:'module'}),{AssignmentExpression(p){if(p.node.left.type==='MemberExpression'&&p.node.left.property.value==='delayTime')method=p.node.right;}});
  assert.ok(method);
  const cc={Tween:{stopAllByTarget(){}},tween(){let bound=true,complete;const chain={bindNodeState(value){bound=value;return chain;},delay(){return chain;},call(fn){complete=fn;return chain;},start(){if(!bound)complete();}};return chain;}};
  const run=vm.runInNewContext('('+generate(method).code+')',{__dependency_1:cc});
  const result=await Promise.race([run.call({delayNode:{activeInHierarchy:false}},.618),new Promise((_,reject)=>setTimeout(()=>reject(new Error('Detached timer paused')),100))]);
  assert.equal(result,true);
});
