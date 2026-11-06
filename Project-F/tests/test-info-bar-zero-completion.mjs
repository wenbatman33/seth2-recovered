/** Actual recovered landscape callback, bounded by each project's active own transport. */
import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import {fileURLToPath}from 'node:url';import {parse}from '@babel/parser';import tr from '@babel/traverse';import gm from '@babel/generator';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),project=path.basename(root),letter=project.slice(-1),key=({C:'ProjectCCreatorLocalBackend',F:'ProjectFCreatorLocalBackend'})[letter]||'globalProject'+letter;
const source=fs.readFileSync(root+'/assets/shared/scripts/slotFramework-InfoBarController.ts','utf8'),adapter=fs.readFileSync(root+'/assets/game/backend/InstallLocalBackend.ts','utf8');assert(adapter.includes('globalThis.'+key+' = runtime')||adapter.includes('globalThis.'+key+'=runtime'),'Gate must name actual installed transport');let node;tr.default(parse(source,{sourceType:'module'}),{AssignmentExpression(p){if(p.node.left.type==='MemberExpression'&&p.node.left.property.name==='playTotalWinTween')node=p.node.right;}});assert(node);const code='('+gm.default(node).code+')';let tween;
const base={_dependency10:{default:{getData:()=>({digital:2})}},_dependency15:{CmmSlotUtils:{formatNumber:String,tweenNum(config){tween=config;return{};}}}};
const own={created:true,getBackend(){throw Error('Completion must not create/read wallet');},...('CF'.includes(letter)?{installed:true}:{project})};const fn=runtime=>vm.runInNewContext(code,{...base,...runtime});
for(const value of [0,0.00]){let count=0;const owner={totalWinLabel:{string:'12'}};fn({[key]:own}).call(owner,{value,needComplete:true},()=>count++);assert.equal(owner.totalWinLabel.string,'0');assert.equal(count,1);}
console.log('PASS active project local transport completes native zero once without wallet access');
for(const runtime of [{},{[key]:{...own,created:false}},{[key]:{...own,...('CF'.includes(letter)?{installed:false}:{project:'foreign'})}},{globalForeignProject:own}]){let count=0;fn(runtime).call({totalWinLabel:{string:'12'}},{value:0,needComplete:true},()=>count++);assert.equal(count,0);}
console.log('PASS absent, uncreated and foreign transports preserve original zero behavior');
for(const runtime of [{},{[key]:own}]){let count=0;fn(runtime).call({totalWinLabel:{string:'0'}},{value:20,needComplete:true},()=>count++);assert.equal(count,0);assert.equal(tween.end,20);tween.callback();assert.equal(count,1);}
console.log('PASS positive values always wait for original tween callback');
fn({[key]:own}).call({totalWinLabel:{string:'2'}},{value:0,needComplete:false},()=>{throw Error('Unexpected completion');});fn({[key]:own}).call({totalWinLabel:{string:'2'}},{value:0,needComplete:true},null);
console.log('PASS native auto events and absent completion callbacks are safe');
console.log(JSON.stringify({project,passed:4,sourceConsumer:true,localOnly:true,guiVerified:false}));
