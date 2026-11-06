import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {parse} from '@babel/parser';
import tr from '@babel/traverse';
import gm from '@babel/generator';
const traverse=tr.default,generate=gm.default,here=path.dirname(fileURLToPath(import.meta.url)),repo=path.resolve(here,'../..'),copy=v=>JSON.parse(JSON.stringify(v));
const hook=new vm.SourceTextModule(await fs.readFile(here+'/../assets/game/backend/ProgressHooks.ts','utf8'));await hook.link(()=>{throw Error('Hooks must remain standalone');});await hook.evaluate();const {installProgressHooks,installStateHooks}=hook.namespace;
const exports=new Map(),models=new Map(),events=[],checks=[],nop=()=>{},names=new Proxy({},{get:(_,name)=>String(name)});function Base(){this.data={};}Base.prototype.getData=function(){return this.data;};
const config={isTurbo:true,setData:nop,setIsTurbo(value,send){assert.equal(send,false);this.isTurbo=value;}},types={EGameType:{MAIN_GAME:'mainGame',FREE_GAME:'freeGame'},EBonusType:{ELIXIR_FURNACE:'elixirFurnace',JP_GAME:'jpGame',LUCKY_WEALTH:'luckyWealth'}};
const stake={init(options){this.options=options;}},rf={push:nop,pop:nop},cc={cclegacy:{_RF:rf},tween(){const chain=new Proxy({},{get:()=>()=>chain});return chain;}},deps={cc,'./GameDataBase.ts':{GameDataBase:Base},'./Bundles.ts':{EBundles:{g1002:'g1002'}},'./MathUtil.ts':{default:{flattenArray:a=>a.flat(),transposeArray:a=>a[0].map((_,c)=>a.map(row=>row[c]))}},'./ObjectUtils.ts':{ObjectUtils:{clone:copy}},'./types.ts':types,'./GameConfigModel.ts':{default:config,EBTM:{REEL_SCROLL:'original-scroll'},EBGM:{FREEGAME:'original-fg-music'}},'./StakeModel.ts':{default:stake},'./GameEvent.ts':{GameEvent:names},'./SlotFrameworkEvent.ts':{SlotFrameworkEvent:names},'./type2.ts':{ESpinStatus:{SPINING:'spining'}},'./state.ts':{isState:s=>!!s?.id&&typeof s.transitionTo==='function'},'./AutoPlayModel.ts':{default:{active:false,spinsRemaining:0}},'./ReplayModel.ts':{default:{isReplay:false}}};
const sandbox={console,Log:{d:nop,w:nop,e:nop},App:{dataCenter:{get:key=>models.get(key)},uiManager:{}},dispatch:(name,payload)=>events.push({name,payload}),System:{register(id,names,factory){const out={},declaration=factory((key,value)=>typeof key==='object'?Object.assign(out,key):out[key]=value);names.forEach((name,i)=>declaration.setters?.[i]?.(deps[name]||{}));declaration.execute();exports.set(id,out);}}};
// Execute actual captured Babel helpers, not a simulated async/state implementation.
const helper=JSON.parse(await fs.readFile(here+'/fixtures/system-helper.json','utf8'));
vm.runInNewContext(await fs.readFile(path.resolve(here,'fixtures',helper.file),'utf8'),sandbox);deps['./rollupPluginModLoBabelHelpers.js']=exports.get(helper.id);
for(const name of ['GameData','ParseResponse','GameState']){const file=path.resolve(here,'fixtures/original/I-g1002-'+name+'.ts.js');vm.runInNewContext(await fs.readFile(file,'utf8'),sandbox,{filename:file});const out=exports.get('chunks:///_virtual/'+name+'.ts');deps['./'+name+'.ts']=out;if(name==='GameData'){const data=new out.default();data.init();models.set(out.default,data);}}
const Data=deps['./GameData.ts'].default,Parser=deps['./ParseResponse.ts'].default,State=deps['./GameState.ts'].GameState,data=models.get(Data);
const stages=Array.from({length:5},(_,currentView)=>({action:currentView?'freeSpin':'spin',view:[[2,3,4,5,6],[3,4,5,6,7],[4,5,6,7,8]],resultView:[],transformInfo:{toSymbol:[],toWild:[]},winSymbols:currentView===2?[{symbol:2,symbolPos:[0,6,12],winLine:0,winnings:3}]:[],totalStake:2,totalWinnings:currentView*3,currentWinnings:currentView===2?3:0,currentTimes:2,freeGameCount:Math.max(0,4-currentView),startFreeGame:currentView===0,dragonLevel:0,isJp:'',currentView,totalViews:5,localRules:true}));
const response=(index=2)=>({status:200,localBackend:true,isResuming:true,localResumeIndex:index,engine:{spinId:'project-i-persisted',definition:{winOddsTypes:{big:20,mega:100},winlineDefs:Array.from({length:20},()=>[])},gameState:copy(stages)},platform:{game:{stakeValues:[.1],ratioValues:[1]},player:{settings:{stakeIndex:0,ratioIndex:0}}}});
let cursor=2,marks=[];const runtime={markStage(spinId,currentView){assert.equal(spinId,'project-i-persisted');assert.ok(currentView>=cursor);cursor=currentView;marks.push(currentView);return{status:200};}};
async function check(name,fn){await fn();checks.push(name);console.log('PASS '+name);}
await check('actual original parser demonstrates reset0/first-stage MG problem before local hooks',()=>{Parser.parseInit(response());assert.equal(data.data.parser.currentSpinIndex,0);assert.equal(data.currentGameType,'mainGame');});
installProgressHooks(Data,runtime,{ParseResponse:Parser});
await check('saved FG index2 restores native linear positions/transforms and parser cannot reset its type',()=>{
 Parser.parseInit(response());assert.equal(data.data.parser.currentSpinIndex,2);assert.equal(data.currentGameType,'freeGame');assert.equal(data.data.parser.currentGameState.action,'freeSpin');assert.equal(data.data.parser.reelResult.length,5);assert.equal(data.data.parser.reelResult[0].length,3);assert.deepEqual(copy(data.data.parser.winSymbols[0].positions),[[0,0],[1,1],[2,2]]);assert.equal(data.data.parser.currentViewWin,3);assert.equal(cursor,2);
 Parser.parseNewInit(response());assert.equal(data.data.parser.currentSpinIndex,2);assert.equal(data.currentGameType,'freeGame');
});
await check('actual GameLogic first-stage type copy is also guarded for local saved FG only',async()=>{
 const ast=parse(await fs.readFile(path.join(repo,'Project-I/assets/game/scripts/g1002-GameLogic.ts'),'utf8'),{sourceType:'module'});let original;
 traverse(ast,{AssignmentExpression(p){const n=p.node;if(n.left.type==='MemberExpression'&&n.left.property.name==='setGameType'&&n.right.type==='FunctionExpression')original=n.right;}});assert.ok(original);
 function Logic(){}Logic.prototype.setGameType=vm.runInNewContext('('+generate(original).code+')',{_dependency23:types});const logic=new Logic();logic.data=data;logic.setGameType(response());assert.equal(data.currentGameType,'mainGame');installProgressHooks(Data,runtime,{GameLogic:Logic});logic.setGameType(response());assert.equal(data.currentGameType,'freeGame');
 logic.setGameType({...response(),localBackend:false});assert.equal(data.currentGameType,'mainGame');Parser.parseInit(response());
});
installStateHooks(State,{GameEvent:names,SlotFrameworkEvent:names,GameConfigModel:config,EBGM:{FREEGAME:'original-fg-music'},ESpinStatus:{SPINING:'spining'},dispatch:sandbox.dispatch});
await check('actual GET_ALL_STATES wraps resume locally without replacing native states or skipping saved stage',()=>{
 const owner=new State(),states=owner.GET_ALL_STATES(),count=states.length,wait=owner.MG_WAIT_RESUME_STATE,wrapped=wait.transitionTo;assert.ok(count>40);assert.equal(owner.GET_ALL_STATES().length,count);assert.equal(wait.transitionTo,wrapped);
 events.length=0;const target=wait.transitionTo({event:{name:names.START_RESUME},sharedData:data});assert.equal(target,owner.FG_SPIN_TO_STOP_STATE.id);assert.equal(data.data.parser.currentSpinIndex,2);assert.equal(cursor,2);assert.equal(data.currentGameType,'freeGame');assert.equal(config.isTurbo,false);assert.equal(data.originTurbo,true);
 assert.ok(events.some(e=>e.name===names.START_SCROLL));assert.ok(events.some(e=>e.name===names.PLAY_BGM&&e.payload.data==='original-fg-music'));assert.ok(!events.some(e=>[names.NEXT_SPIN,names.CHANGE_FG_SPIN_TO_STOP_STATE].includes(e.name)));
 owner.FG_SPIN_TO_STOP_STATE.onEntry({event:{name:names.START_RESUME},sharedData:data});assert.equal(data.data.parser.currentSpinIndex,2);assert.ok(events.some(e=>e.name===names.SET_REEL_RESULT));data.setNextSpinData();assert.equal(cursor,3);assert.equal(data.data.parser.currentSpinIndex,3);
});
await check('actual native dragon branch remains available for saved FG without NEXT_SPIN',()=>{
 cursor=2;Parser.parseInit(response());data.data.parser.currentGameState.dragonLevel=2;const owner=new State();owner.stateMachine={previous:{id:owner.MG_WAIT_RESUME_STATE.id}};owner.GET_ALL_STATES();events.length=0;const target=owner.MG_WAIT_RESUME_STATE.transitionTo({event:{name:names.START_RESUME},sharedData:data});assert.equal(target,owner.DRAGON_STATE.id);assert.equal(data.data.parser.currentSpinIndex,2);assert.ok(!events.some(e=>e.name===names.NEXT_SPIN));const after=owner.DRAGON_STATE.transitionTo({event:{name:names.SHOW_DRAGON_END},sharedData:data});assert.equal(after,owner.FG_SPIN_TO_STOP_STATE.id);assert.equal(data.data.parser.currentSpinIndex,2);
});
await check('saved terminal FG uses original reel-stop→summary transition, without an out-of-range advance',()=>{
 cursor=4;Parser.parseInit(response(4));const owner=new State();owner.GET_ALL_STATES();assert.equal(owner.MG_WAIT_RESUME_STATE.transitionTo({event:{name:names.START_RESUME},sharedData:data}),owner.FG_SPIN_TO_STOP_STATE.id);assert.equal(owner.FG_SPIN_TO_STOP_STATE.transitionTo({event:{name:names.REEL_ALL_STOP},sharedData:data}),owner.FG_SHOW_SUMMARY_ALERT_STATE.id);assert.equal(data.data.parser.currentSpinIndex,4);assert.equal(cursor,4);
});
await check('nonlocal initial data disables persistence and original async resume function remains in control',()=>{
 const before=marks.length;Parser.parseInit({...response(),localBackend:false,isResuming:false});assert.equal(data.__localProjectI,false);assert.equal(data.data.parser.currentSpinIndex,0);assert.equal(data.currentGameType,'mainGame');assert.equal(marks.length,before);
 const owner=new State();owner.GET_ALL_STATES();const result=owner.MG_WAIT_RESUME_STATE.transitionTo({event:{name:'unrelated'},sharedData:data});assert.equal(typeof result.then,'function');assert.equal(data.data.parser.currentSpinIndex,0);assert.equal(marks.length,before);
 // The original async method waits on an inert engine tween in this isolated
 // fixture. No fake animation completion is emitted or counted as runtime QA.
});
console.log(JSON.stringify({passed:checks.length,checks,actualSource:['GameData','ParseResponse','GameState.GET_ALL_STATES and native states','GameLogic.setGameType','original Babel async helpers'],browser:false,engine:false,animationCallbacksSynthesized:false}));
