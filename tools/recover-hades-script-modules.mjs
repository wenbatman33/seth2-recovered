#!/usr/bin/env node
// Recover only the captured Hades modules into a staging directory. This never
// regenerates the existing Creator project or changes any installed .meta UUID.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import * as t from '@babel/types';
const traverse=traverseModule.default,generate=generateModule.default;
const input='research/atg/hades/live-capture-20261104/extracted';
const output='research/atg/hades/creator-script-staging';
const files=(await fs.readdir(input)).filter(f=>f.endsWith('.js')).sort();
const names=new Set(files.map(f=>path.basename(f,'.js')));
const existing=(await fs.readdir('assets/recovered/scripts')).filter(f=>f.endsWith('.ts'));
function resolve(dep){
  if(dep==='cc')return dep;
  const name=path.basename(dep).replace(/\.(ts|js)$/,'');
  if(names.has(name))return './g1007-'+name;
  if(name==='type2')return './framework-type2';
  const hits=existing.filter(f=>f.endsWith('-'+name+'.ts'));
  if(hits.length!==1)throw new Error(`Unresolved dependency ${dep}: ${hits.join(',')}`);
  return './'+hits[0].slice(0,-3);
}
function uuid(value){
  if(![22,23].includes(value.length))throw new Error('Unexpected source script UUID '+value);
  const prefix=value.length===23?5:2;
  const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let hex=value.slice(0,prefix);
  for(let i=prefix;i<value.length;i+=2){
    const pair=alphabet.indexOf(value[i])*64+alphabet.indexOf(value[i+1]);
    hex+=pair.toString(16).padStart(3,'0');
  }
  if(hex.length!==32)throw new Error('Invalid decoded UUID '+value);
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}
function bridgeNativeSuper(program){
 let changed=0;const constructors=new Set();
 const property=n=>n.computed?n.property.value:n.property.name;
 traverse(t.file(program),{CallExpression(p){
  let callee=p.node.callee;if(t.isSequenceExpression(callee))callee=callee.expressions.at(-1);
  if(!t.isMemberExpression(callee)||property(callee)!=='inheritsLoose')return;
  const [subclass,superclass]=p.node.arguments;
  if(!t.isIdentifier(subclass)||!t.isIdentifier(superclass))return;
  const ctor=p.scope.getBinding(subclass.name)?.path;
  if(!ctor?.isFunctionDeclaration()||constructors.has(ctor.node))return;
  constructors.add(ctor.node);
  const parentBinding=p.scope.getBinding(superclass.name);
  ctor.traverse({CallExpression(q){
   if(q.getFunctionParent()!==ctor)return;
   const n=q.node,c=n.callee; if(!t.isMemberExpression(c))return;
   let args;
   if(t.isIdentifier(c.object,{name:superclass.name})&&q.scope.getBinding(superclass.name)===parentBinding){
    if(!t.isThisExpression(n.arguments[0]))return;
    if(property(c)==='call')args=t.arrayExpression(n.arguments.slice(1));
    else if(property(c)==='apply')args=n.arguments[1]||t.arrayExpression([]);
   }else if(property(c)==='apply'&&t.isMemberExpression(c.object)&&property(c.object)==='call'&&t.isIdentifier(c.object.object,{name:superclass.name})&&q.scope.getBinding(superclass.name)===parentBinding){
    const supplied=n.arguments[1];
    if(!supplied)throw Error('Unrecognized super.call.apply arguments');
    args=t.callExpression(t.memberExpression(t.cloneNode(supplied,true),t.identifier('slice')),[t.numericLiteral(1)]);
   }
   if(args){q.replaceWith(t.callExpression(t.memberExpression(t.identifier('Reflect'),t.identifier('construct')),[t.identifier(superclass.name),args,t.logicalExpression('||',t.metaProperty(t.identifier('new'),t.identifier('target')),t.memberExpression(t.thisExpression(),t.identifier('constructor')))]));changed++;q.skip();}
  }});
 }});
 return changed;
}

await fs.mkdir(output,{recursive:true});
const manifest=[];
for(const file of files){
  const source=await fs.readFile(path.join(input,file),'utf8'),ast=parse(source,{sourceType:'script'});
  let registration;
  traverse(ast,{CallExpression(p){if(t.isMemberExpression(p.node.callee)&&t.isIdentifier(p.node.callee.object,{name:'System'})&&t.isIdentifier(p.node.callee.property,{name:'register'}))registration=p;}});
  if(!registration)continue;
  const args=registration.get('arguments'),factory=args[2],publish=factory.scope.getBinding(factory.node.params[0]?.name);
  const returned=factory.get('body.body').find(p=>p.isReturnStatement());
  const properties=returned.get('argument.properties');
  const setters=properties.find(p=>t.isIdentifier(p.node.key,{name:'setters'})).get('value.elements');
  const execute=properties.find(p=>t.isIdentifier(p.node.key,{name:'execute'})).get('value.body');
  const exports=new Set();
  for(const ref of publish?.referencePaths||[]){
    if(!ref.parentPath.isCallExpression()||ref.parentKey!=='callee')throw new Error('Non-call export in '+file);
    const first=ref.parentPath.node.arguments[0];
    if(t.isStringLiteral(first))exports.add(first.value);
    else if(t.isObjectExpression(first))for(const prop of first.properties)exports.add(prop.key.name||prop.key.value);
    else throw new Error('Dynamic export in '+file);
    ref.replaceWith(t.identifier('__publish'));
  }
  setters.forEach((setter,i)=>{
    setter.traverse({AssignmentExpression(p){
      const {left,right}=p.node;
      if(!t.isIdentifier(left)||!t.isMemberExpression(right)||!t.isIdentifier(right.object,{name:setter.node.params[0].name}))return;
      const binding=p.scope.getBinding(left.name);
      if(!binding||binding.scope!==factory.scope)throw new Error('Unexpected setter alias in '+file);
      for(const ref of [...binding.referencePaths])ref.replaceWith(t.memberExpression(t.identifier(`__dependency_${i}`),t.cloneNode(right.property),right.computed));
    }});
  });
  const deps=args[1].node.elements.map(e=>resolve(e.value));
  const declarations=deps.map((dep,i)=>t.importDeclaration([t.importNamespaceSpecifier(t.identifier(`__dependency_${i}`))],t.stringLiteral(dep)));
  const pairs=[...exports].map((name,i)=>[name,`__export_${i}`]);
  // System.register publishes initially undefined bindings. var preserves that
  // behaviour through the original mutually dependent game modules.
  for(const [name,variable]of pairs){declarations.push(t.variableDeclaration('var',[t.variableDeclarator(t.identifier(variable))]));declarations.push(t.exportNamedDeclaration(null,[t.exportSpecifier(t.identifier(variable),t.identifier(name))]));}
  const publishSource=`function __publish(name,value){if(typeof name==='object'){for(const key of Object.keys(name))__publish(key,name[key]);return name;}switch(name){${pairs.map(([name,variable])=>`case ${JSON.stringify(name)}:${variable}=value;break;`).join('')}default:throw new Error('Unknown recovered export '+name);}return value;}`;
  declarations.push(...parse(publishSource).program.body);
  declarations.push(...factory.node.body.body.filter(n=>t.isVariableDeclaration(n)),...execute.node.body);
  const recovered=t.file(t.program(declarations));
  const constructorBridges=bridgeNativeSuper(recovered.program);
  const renamedClasses=[];
  const ccNamespace=`__dependency_${deps.indexOf('cc')}`;
  traverse(recovered,{CallExpression(p){
    let tweenCallee=p.node.callee;
    if(t.isSequenceExpression(tweenCallee))tweenCallee=tweenCallee.expressions.at(-1);
    if(t.isMemberExpression(tweenCallee)&&t.isIdentifier(tweenCallee.object,{name:ccNamespace})&&t.isIdentifier(tweenCallee.property,{name:'tween'})){
      // Preserve the captured 3.7 scheduling semantics throughout this game.
      // Hidden score labels, pooled symbols and timing sentinels participate in
      // animation completion; 3.8.7+ activation binding otherwise suspends them.
      p.replaceWith(t.callExpression(t.memberExpression(t.cloneNode(p.node,true),t.identifier('bindNodeState')),[t.booleanLiteral(false)]));p.skip();return;
    }
    if(p.node.arguments.length!==1||!t.isStringLiteral(p.node.arguments[0]))return;
    let callee=p.node.callee;
    if(t.isIdentifier(callee))callee=p.scope.getBinding(callee.name)?.path.node.init;
    if(t.isMemberExpression(callee)&&t.isIdentifier(callee.property,{name:'ccclass'})){
      const old=p.node.arguments[0].value;
      p.node.arguments[0].value='Hades_'+old;renamedClasses.push({original:old,recovered:'Hades_'+old});
    }
  }});
  let code=generate(recovered).code;
  if(file==='BackgroundView.js')code+='\n'+await fs.readFile('tools/hades-backdrop-compatibility.js','utf8');
  if(file==='GameData.js')code+=`\n// Owned local continuation hook; original parsers and animation state remain.\nconst __advanceLocalStage=__export_0.prototype.setNextSpinData;\n__export_0.prototype.setNextSpinData=function(...args){const result=__advanceLocalStage.apply(this,args);const data=this.getData();globalThis.__hadesLocalProgress?.(data.spinId,data.parser.currentGameState.currentView);return result;};\n`;
  if(file==='GameState.js')code+=`\n// Optional isolated QA observation; no polling or change to state transitions.\nconst __getLocalGameMachine=__export_2.prototype.getMachine;\n__export_2.prototype.getMachine=function(...args){const machine=__getLocalGameMachine.apply(this,args);if(globalThis.__hadesLocalState&&!machine.__localObserved){machine.__localObserved=true;machine.subscribe(state=>globalThis.__hadesLocalState?.(state.currentStateId));}return machine;};\n`;
  parse(code,{sourceType:'module'});
  let scriptUuid=null;
  execute.traverse({CallExpression(p){if(t.isMemberExpression(p.node.callee)&&t.isIdentifier(p.node.callee.property,{name:'push'})&&t.isStringLiteral(p.node.arguments[1])&&[22,23].includes(p.node.arguments[1].value.length))scriptUuid=uuid(p.node.arguments[1].value);}});
  const filename='g1007-'+path.basename(file,'.js')+'.ts';
  await fs.writeFile(path.join(output,filename),`// @ts-nocheck\n// Recovered runtime JavaScript, not original TypeScript.\n// Source: ${input}/${file}\n${code}\n`);
  if(scriptUuid)await fs.writeFile(path.join(output,filename+'.meta'),JSON.stringify({ver:'4.0.24',importer:'typescript',imported:true,uuid:scriptUuid,files:[],subMetas:{},userData:{isPlugin:false}},null,2)+'\n');
  manifest.push({file:filename,source:file,sha256:crypto.createHash('sha256').update(source).digest('hex'),uuid:scriptUuid,dependencies:deps,exports:[...exports],renamedClasses,constructorBridges});
}
await fs.writeFile(path.join(output,'manifest.json'),JSON.stringify({status:'staged only; Creator import and runtime not validated',modules:manifest},null,2)+'\n');
console.log(JSON.stringify({staged:manifest.length,output,sourceUuid:manifest.filter(x=>x.uuid).length}));
