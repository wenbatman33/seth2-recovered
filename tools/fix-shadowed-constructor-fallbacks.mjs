// Targeted compatibility repair; does not regenerate recovered scripts or metas.
import fs from 'node:fs/promises';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import * as t from '@babel/types';
const traverse=traverseModule.default,report=[];
for(const file of (await fs.readdir('assets/recovered/scripts')).filter(f=>f.endsWith('.ts'))){
 const path='assets/recovered/scripts/'+file,source=await fs.readFile(path,'utf8');
 if(!source.includes('Reflect.construct'))continue;
 const ast=parse(source,{sourceType:'module',plugins:['typescript']}),edits=[];
 traverse(ast,{CallExpression(p){
  const n=p.node;
  if(!t.isMemberExpression(n.callee)||!t.isIdentifier(n.callee.object,{name:'Reflect'})||!t.isIdentifier(n.callee.property,{name:'construct'}))return;
  const target=n.arguments[2];
  if(!t.isLogicalExpression(target,{operator:'||'})||!t.isMetaProperty(target.left)||!t.isIdentifier(target.right))return;
  const binding=p.scope.getBinding(target.right.name),ctor=p.getFunctionParent();
  if(binding?.path.isVariableDeclarator()&&binding.scope===ctor?.scope)edits.push({start:target.right.start,end:target.right.end,original:target.right.name});
 }});
 if(edits.length){let result=source;for(const e of edits.sort((a,b)=>b.start-a.start))result=result.slice(0,e.start)+'this.constructor'+result.slice(e.end);await fs.writeFile(path,result);report.push({file,edits});}
}
await fs.writeFile('research/atg/hades/shadowed-constructor-repairs.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({files:report.length,repairs:report.reduce((n,r)=>n+r.edits.length,0),changed:report.map(r=>r.file)}));
