#!/usr/bin/env node
// Recover runtime JavaScript as editable modules; never execute captured code.
// Index: {modules:[{id,bundle,file,sha256?}]}; file is relative to the index.
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import * as t from '@babel/types';
import {containedFile,moduleFilename,sha256} from './extract-system-modules.mjs';
const traverse=traverseModule.default,generate=generateModule.default;
const prop=n=>n.computed?n.property.value:n.property.name;
const property=(object,name)=>object.properties.find(p=>t.isObjectProperty(p)&&(t.isIdentifier(p.key,{name})||t.isStringLiteral(p.key,{value:name})));
function decodeUuid(value){
  if(/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(value))return value;
  if(![22,23].includes(value.length))throw Error('Unexpected script UUID: '+value);
  const prefix=value.length===23?5:2,alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let hex=value.slice(0,prefix);
  for(let i=prefix;i<value.length;i+=2){const a=alphabet.indexOf(value[i]),b=alphabet.indexOf(value[i+1]);if(a<0||b<0)throw Error('Invalid compressed UUID');hex+=(a*64+b).toString(16).padStart(3,'0');}
  if(!/^[0-9a-f]{32}$/i.test(hex))throw Error('Invalid decoded script UUID');
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}
function bridgeNativeSuper(program){
  let changed=0;const constructors=new Set();
  traverse(t.file(program),{CallExpression(p){
    let c=p.node.callee;if(t.isSequenceExpression(c))c=c.expressions.at(-1);
    if(!t.isMemberExpression(c)||prop(c)!=='inheritsLoose')return;
    const [sub,sup]=p.node.arguments;if(!t.isIdentifier(sub)||!(t.isIdentifier(sup)||t.isMemberExpression(sup)))return;
    const ctor=p.scope.getBinding(sub.name)?.path,parent=t.isIdentifier(sup)?p.scope.getBinding(sup.name):null;
    const sameSuper=(node,scope)=>t.isNodesEquivalent(node,sup)&&(!t.isIdentifier(sup)||scope.getBinding(sup.name)===parent);
    if(!ctor?.isFunctionDeclaration()||constructors.has(ctor.node))return;
    constructors.add(ctor.node);
    const fallback=p.scope.generateUidIdentifier('nativeConstructor');let fallbackNeeded=false;
    ctor.traverse({CallExpression(q){
      if(q.getFunctionParent()!==ctor)return;
      const n=q.node,c=n.callee;if(!t.isMemberExpression(c))return;
      let args;
      if(sameSuper(c.object,q.scope)){
        if(!t.isThisExpression(n.arguments[0]))return;
        if(prop(c)==='call')args=t.arrayExpression(n.arguments.slice(1));
        else if(prop(c)==='apply')args=n.arguments[1]||t.arrayExpression([]);
      }else if(prop(c)==='apply'&&t.isMemberExpression(c.object)&&prop(c.object)==='call'&&sameSuper(c.object.object,q.scope)){
        if(!n.arguments[1])throw Error('Unrecognized super.call.apply arguments');
        args=t.callExpression(t.memberExpression(t.cloneNode(n.arguments[1],true),t.identifier('slice')),[t.numericLiteral(1)]);
      }
      if(args){q.replaceWith(t.callExpression(t.memberExpression(t.identifier('Reflect'),t.identifier('construct')),[t.cloneNode(sup,true),args,t.logicalExpression('||',t.metaProperty(t.identifier('new'),t.identifier('target')),t.cloneNode(fallback))]));changed++;fallbackNeeded=true;q.skip();}
    }});
    // Capture the actual lexical function before local constructor temporaries
    // can shadow its name; never consult an instance constructor getter.
    if(fallbackNeeded)p.scope.push({id:fallback,init:t.cloneNode(sub),kind:'var'});
  }});
  return changed;
}
export function recoverModule(source,expectedId,resolveDependency,options={}){
  const ast=parse(source,{sourceType:'script'});let registration;
  traverse(ast,{CallExpression(p){const c=p.node.callee;if(t.isMemberExpression(c)&&!c.computed&&t.isIdentifier(c.object,{name:'System'})&&t.isIdentifier(c.property,{name:'register'})){if(registration)throw Error('Expected exactly one registration');registration=p;}}});
  if(!registration||registration.node.arguments[0]?.value!==expectedId)throw Error('Module identity mismatch: '+expectedId);
  const args=registration.get('arguments'),factory=args[2];
  if(!args[1]?.isArrayExpression()||!factory?.isFunctionExpression()||factory.node.async||factory.node.generator)throw Error('Unsupported registration factory: '+expectedId);
  const publisher=factory.scope.getBinding(factory.node.params[0]?.name);
  const returned=factory.get('body.body').filter(p=>p.isReturnStatement());
  if(returned.length!==1||!returned[0].get('argument').isObjectExpression()||factory.node.body.body.at(-1)!==returned[0].node)throw Error('Unsupported factory return');
  const object=returned[0].node.argument,setterProperty=property(object,'setters'),setterNode=setterProperty?.value??t.arrayExpression([]),executeNode=property(object,'execute')?.value;
  if(!t.isArrayExpression(setterNode)||!t.isFunctionExpression(executeNode)||executeNode.params.length)throw Error('Unsupported setters/execute');
  const deps=args[1].node.elements.map(n=>{if(!t.isStringLiteral(n))throw Error('Nonliteral module dependency');return resolveDependency(n.value);});
  if(setterNode.elements.length!==deps.length)throw Error('Setter/dependency count mismatch');
  const setterPaths=setterProperty?returned[0].get('argument.properties').find(p=>p.node===setterProperty).get('value.elements'):[];
  const exports=new Set(),publishName=factory.scope.generateUidIdentifier('publish').name;
  for(const ref of [...(publisher?.referencePaths||[])]){
    // Statically recognized setter publications become native ESM reexports.
    if(setterPaths.some(setter=>setter.isAncestor(ref)))continue;
    if(!ref.parentPath.isCallExpression()||ref.parentKey!=='callee')throw Error('Non-call export in '+expectedId);
    const first=ref.parentPath.node.arguments[0];
    if(t.isStringLiteral(first))exports.add(first.value);
    else if(t.isObjectExpression(first))for(const p of first.properties){if(!t.isObjectProperty(p)||p.computed)throw Error('Dynamic object export');exports.add(p.key.name??p.key.value);}
    else throw Error('Dynamic export in '+expectedId);
    ref.replaceWith(t.identifier(publishName));
  }
  const dependencyNames=deps.map((_,i)=>factory.scope.generateUidIdentifier('dependency'+i).name);
  const reexports=[];
  setterPaths.forEach((setter,i)=>{
    if(setter.isNullLiteral()||setter.node===null)return; // side-effect-only import
    if(setter.isFunctionExpression()&&setter.node.params.length===0&&setter.node.body.body.length===0)return;
    if(!setter.isFunctionExpression()||setter.node.params.length!==1||!t.isIdentifier(setter.node.params[0]))throw Error('Unsupported setter');
    const parameter=setter.node.params[0].name,objects=new Map();
    const imported=n=>t.isMemberExpression(n)&&t.isIdentifier(n.object,{name:parameter})&&(!n.computed&&t.isIdentifier(n.property)||n.computed&&t.isStringLiteral(n.property))?String(prop(n)):null;
    const add=(name,member)=>{
      if(typeof name!=='string'||name==='__proto__'||member===null)throw Error('Nonstatic setter reexport');
      if(exports.has(name)||reexports.some(e=>e.exported===name))throw Error('Duplicate setter export: '+name);
      reexports.push({exported:name,imported:member,dependency:deps[i]});
    };
    // Only aliases and explicitly enumerable import reexports are removable.
    for(const statement of setter.get('body.body')){
      if(statement.isEmptyStatement())continue;
      if(statement.isVariableDeclaration()){
        for(const declaration of statement.get('declarations')){
          const n=declaration.node,binding=t.isIdentifier(n.id)&&declaration.scope.getBinding(n.id.name);
          if(!binding||binding.scope!==setter.scope||!t.isObjectExpression(n.init)||n.init.properties.length)throw Error('Unsupported setter local');
          objects.set(binding,{members:new Map(),published:false});
        }
        continue;
      }
      if(!statement.isExpressionStatement())throw Error('Unsupported setter side effect');
      const expression=statement.get('expression'),assignments=expression.isSequenceExpression()?expression.get('expressions'):[expression];
      for(const assignment of assignments){
        const n=assignment.node;
        if(assignment.isCallExpression()&&t.isIdentifier(n.callee)&&assignment.scope.getBinding(n.callee.name)===publisher){
          if(n.arguments.length===2&&t.isStringLiteral(n.arguments[0]))add(n.arguments[0].value,imported(n.arguments[1]));
          else if(n.arguments.length===1&&t.isIdentifier(n.arguments[0])){
            const object=objects.get(assignment.scope.getBinding(n.arguments[0].name));
            if(!object||object.published)throw Error('Unknown or republished setter export object');
            for(const [name,member]of object.members)add(name,member);object.published=true;
          }else if(n.arguments.length===1&&t.isObjectExpression(n.arguments[0])){
            for(const p of n.arguments[0].properties){if(!t.isObjectProperty(p)||p.computed)throw Error('Dynamic setter export object');add(String(p.key.name??p.key.value),imported(p.value));}
          }else throw Error('Unsupported setter publication');
          continue;
        }
        if(assignment.isAssignmentExpression({operator:'='})&&t.isMemberExpression(n.left)&&t.isIdentifier(n.left.object)){
          const object=objects.get(assignment.scope.getBinding(n.left.object.name)),member=imported(n.right),name=(!n.left.computed&&t.isIdentifier(n.left.property)||n.left.computed&&t.isStringLiteral(n.left.property))?String(prop(n.left)):null;
          if(!object||object.published||name===null||member===null||object.members.has(name))throw Error('Unsupported setter export-object assignment');
          object.members.set(name,member);continue;
        }
        if(!assignment.isAssignmentExpression({operator:'='})||!t.isIdentifier(n.left))throw Error('Unsupported setter assignment');
        let replacement;
        if(t.isIdentifier(n.right,{name:parameter}))replacement=t.identifier(dependencyNames[i]);
        else if(t.isMemberExpression(n.right)&&t.isIdentifier(n.right.object,{name:parameter})&&(!n.right.computed||t.isStringLiteral(n.right.property)))replacement=t.memberExpression(t.identifier(dependencyNames[i]),t.cloneNode(n.right.property),n.right.computed);
        else throw Error('Unsupported setter alias');
        const binding=assignment.scope.getBinding(n.left.name);
        if(!binding||binding.scope!==factory.scope||binding.constantViolations.some(p=>!setter.isAncestor(p)))throw Error('Mutable or nonlocal setter alias: '+n.left.name);
        for(const ref of [...binding.referencePaths])ref.replaceWith(t.cloneNode(replacement,true));
      }
    }
    if([...objects.values()].some(object=>!object.published))throw Error('Unpublished setter local object');
  });
  const context=factory.node.params[1];
  if(context&&factory.scope.getBinding(context.name)?.referenced)throw Error('System context needs explicit recovery: '+expectedId);
  const body=deps.map((dep,i)=>t.importDeclaration([t.importNamespaceSpecifier(t.identifier(dependencyNames[i]))],t.stringLiteral(dep)));
  const exportNode=name=>t.isValidIdentifier(name,false)?t.identifier(name):t.stringLiteral(name);
  for(const item of reexports)body.push(t.exportNamedDeclaration(null,[t.exportSpecifier(exportNode(item.imported),exportNode(item.exported))],t.stringLiteral(item.dependency)));
  const pairs=[...exports].map(name=>[name,factory.scope.generateUidIdentifier('export').name]);
  for(const [name,local]of pairs){body.push(t.variableDeclaration('var',[t.variableDeclarator(t.identifier(local))]));body.push(t.exportNamedDeclaration(null,[t.exportSpecifier(t.identifier(local),t.isValidIdentifier(name,false)?t.identifier(name):t.stringLiteral(name))]));}
  body.push(...parse(`function ${publishName}(name,value){if(typeof name==='object'){for(const key of Object.keys(name))${publishName}(key,name[key]);return name;}switch(name){${pairs.map(([name,local])=>`case ${JSON.stringify(name)}:${local}=value;break;`).join('')}default:throw new Error('Unknown recovered export '+name);}return value;}`).program.body);
  body.push(...factory.node.body.body.slice(0,-1),...executeNode.body.body);
  const recovered=t.file(t.program(body)),constructorBridges=bridgeNativeSuper(recovered.program),uuids=new Set();let tweenNodeStateBridges=0;
  if(options.compatTweenNodeState){
    const ccIndex=deps.indexOf('cc'),namespace=dependencyNames[ccIndex];
    if(namespace)traverse(recovered,{CallExpression(p){let c=p.node.callee;if(t.isSequenceExpression(c))c=c.expressions.at(-1);if(t.isMemberExpression(c)&&t.isIdentifier(c.object,{name:namespace})&&prop(c)==='tween'){p.replaceWith(t.callExpression(t.memberExpression(t.cloneNode(p.node,true),t.identifier('bindNodeState')),[t.booleanLiteral(false)]));tweenNodeStateBridges++;p.skip();}}});
  }
  traverse(recovered,{CallExpression(p){const c=p.node.callee;if(t.isMemberExpression(c)&&prop(c)==='push'&&t.isMemberExpression(c.object)&&prop(c.object)==='_RF'&&t.isStringLiteral(p.node.arguments[1]))uuids.add(decodeUuid(p.node.arguments[1].value));}});
  if(uuids.size>1)throw Error('Multiple script UUIDs in '+expectedId);
  const code=generate(recovered).code;parse(code,{sourceType:'module'});
  return {code,uuid:[...uuids][0]??null,exports:[...exports,...reexports.map(e=>e.exported)],reexports,dependencies:deps,constructorBridges,tweenNodeStateBridges};
}
export async function recoverIndex(indexFile,output,options={}){
  const indexRoot=path.dirname(path.resolve(indexFile)),index=JSON.parse(await fs.readFile(indexFile,'utf8'));
  if(!Array.isArray(index.modules)||!index.modules.length)throw Error('Expected nonempty module index');
  const seen=new Set(),root=path.resolve(output);
  const modules=index.modules.map((entry,i)=>{
    if(typeof entry.bundle!=='string'||!entry.bundle)throw Error('Every module needs a bundle context');
    const identity=JSON.stringify([entry.bundle,entry.id]);if(seen.has(identity))throw Error('Duplicate module identity/context: '+identity);seen.add(identity);
    return {...entry,output:moduleFilename(entry.bundle+'/'+entry.id,i,'ts')};
  });
  const prepared=[];
  for(const item of modules){
    const file=containedFile(indexRoot,item.file),source=await fs.readFile(file,'utf8');
    if(item.sha256&&item.sha256!==sha256(source))throw Error('Source hash mismatch: '+item.file);
    let result;try{result=recoverModule(source,item.id,dependency=>{
      if(dependency==='cc')return 'cc';
      let identity=dependency;
      if(dependency.startsWith('.')){try{identity=new URL(dependency,item.id).href;}catch{identity=path.posix.normalize(path.posix.join(path.posix.dirname(item.id),dependency));}}
      let hits=modules.filter(m=>m.id===identity),local=hits.filter(m=>m.bundle===item.bundle);
      if(local.length)hits=local;
      // Optional explicit bundle mapping resolves shared framework duplicate identities.
      const context=index.bundleDependencies?.[item.bundle]?.[dependency];
      if(context)hits=hits.filter(m=>m.bundle===context);
      if(hits.length!==1)throw Error(`${hits.length?'Ambiguous':'Unresolved'} dependency ${dependency} from ${item.bundle}:${item.id}`);
      return './'+hits[0].output.slice(0,-3);
    },options);}catch(error){throw new Error(`${item.bundle}:${item.id} (${item.file}): ${error.message}`,{cause:error});}
    prepared.push({...item,...result,sourceSha256:sha256(source)});
  }
  const metaIds=new Set();for(const item of prepared)if(item.uuid){if(metaIds.has(item.uuid))throw Error('Duplicate script UUID: '+item.uuid);metaIds.add(item.uuid);}
  await fs.mkdir(root);
  for(const item of prepared){
    const code='// @ts-nocheck\n// Recovered runtime JavaScript, not original TypeScript.\n'+item.code+'\n';
    await fs.writeFile(containedFile(root,item.output),code,{flag:'wx'});
    if(item.uuid)await fs.writeFile(containedFile(root,item.output+'.meta'),JSON.stringify({ver:'4.0.24',importer:'typescript',imported:false,uuid:item.uuid,files:[],subMetas:{},userData:{isPlugin:false}},null,2)+'\n',{flag:'wx'});
  }
  const manifest={version:1,status:'static recovery only; Creator import and runtime not validated',sourceIndex:path.resolve(indexFile),compatibility:{nativeSuper:'Reflect.construct with lexical constructor fallback',tweenNodeState:options.compatTweenNodeState===true},modules:prepared.map(({code,...entry})=>entry)};
  await fs.writeFile(containedFile(root,'manifest.json'),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'});return manifest;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
  if(process.argv.length<4||process.argv.length>5||(process.argv[4]&&process.argv[4]!=='--compat-tween-node-state')){console.error('Usage: recover-system-modules.mjs <module-index-json> <new-output-dir> [--compat-tween-node-state]');process.exitCode=1;}
  else try{const result=await recoverIndex(process.argv[2],process.argv[3],{compatTweenNodeState:process.argv[4]==='--compat-tween-node-state'});console.log(JSON.stringify({modules:result.modules.length,output:path.resolve(process.argv[3])}));}catch(error){console.error(error.message);process.exitCode=1;}
}
