/** Executes actual recovered callbacks; no engine, timers, fabricated prizes or GUI claim. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const traverse=traverseModule.default,generate=generatorModule.default;
function method(file,name,globals){let node;traverse(parse(fs.readFileSync(path.join(root,file),'utf8'),{sourceType:'module'}),{AssignmentExpression(p){if(p.node.left.type==='MemberExpression'&&p.node.left.property.name===name&&p.node.right.type==='FunctionExpression')node=p.node.right;}});assert(node,name);return vm.runInNewContext('('+generate(node).code+')',globals);}
let tween;
const globals={globalProjectG:{project:'Project-G',created:true,getBackend(){}},_dependency10:{default:{getData:()=>({digital:2})}},_dependency15:{CmmSlotUtils:{formatNumber:String,tweenNum(config){tween=config;return{};}}}};
const play=method('assets/shared/scripts/slotFramework-InfoBarController.ts','playTotalWinTween',globals);
for(const value of [0,0.00]){let completed=0;const owner={totalWinLabel:{string:'25'}};play.call(owner,{value,needComplete:true},()=>completed++);assert.equal(owner.totalWinLabel.string,'0');assert.equal(completed,1);}
console.log('PASS zero-valued native total win completes exactly once');
let completed=0;play.call({totalWinLabel:{string:'0'}},{value:20,needComplete:true},()=>completed++);assert.equal(completed,0);assert.equal(tween.end,20);tween.callback();assert.equal(completed,1);
console.log('PASS positive total win waits for original tween callback');
play.call({totalWinLabel:{string:'9'}},{value:0,needComplete:false},()=>{throw Error('Unexpected completion');});play.call({totalWinLabel:{string:'9'}},{value:0,needComplete:true},undefined);
console.log('PASS zero auto events and absent callbacks remain safe');
class Event{constructor(name,data,options){Object.assign(this,{name,data,options});}}
const events=new Proxy(Event,{get:(target,key)=>key in target?target[key]:String(key)});
let flow;
class Flow{constructor(){this.steps=[];}add(...steps){this.steps.push(...steps);}}
const show=method('assets/game/scripts/g1008-CreateNewSpinCompleteFlowCmd.ts','showFreeGameIntroFlow',{App:{flowManager:{Flow,registerFlow(value){flow=value;}}},_dependency1:{FlowIDs:{SHOW_FG_INTRO_FLOW:'intro'}},_dependency3:{FlowTrigger:{CONCURRENT:'concurrent',AFTER_PREVIOUS:'after'}},_dependency0:{GameEvent:events},_dependency6:{SlotFrameworkEvent:events},_dependency7:{default:{getData:()=>({winAmountTime:1})},EBTM:{COUNTING:'count'}}});
show.call({data:{currSpinData:{totalWinnings:0},setNewBigWinReach:()=>false}});
const ordered=flow.steps.filter(item=>item instanceof Event);assert.equal(ordered[0].name,'SHOW_SCATTER_WIN');const zeroIndex=ordered.findIndex(item=>item.name==='UPDATE_TOTAL_WINNINGS');assert.equal(ordered[zeroIndex].data.value,0);assert.equal(ordered[zeroIndex].data.needComplete,true);assert.equal(ordered[zeroIndex+1].name,'SHOW_FG_INTRO_ALERT');let intro=0;play.call({totalWinLabel:{string:'0'}},ordered[zeroIndex].data,()=>{intro++;});assert.equal(intro,1);
console.log('PASS actual purchased-intro zero event can advance to original FG popup');
console.log(JSON.stringify({project:'Project-G',passed:4,nativeCallbacks:true,guiVerified:false}));
