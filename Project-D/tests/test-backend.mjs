import './verify-fixtures.mjs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const tests=path.dirname(fileURLToPath(import.meta.url)),here=path.resolve(tests,'../assets/game/backend'),modules=new Map();
async function load(filename){filename=path.resolve(filename);if(modules.has(filename))return modules.get(filename);const m=new vm.SourceTextModule(await fs.readFile(filename,'utf8'),{identifier:filename});modules.set(filename,m);await m.link(spec=>load(path.resolve(path.dirname(filename),spec+'.ts')));await m.evaluate();return m;}
const {LocalGameBackend}= (await load(here+'/LocalGameBackend.ts')).namespace;
const {evaluateBoard,generateRound,gravity}= (await load(here+'/Rules.ts')).namespace;
const {selectWalletKey,installLocalBackend}= (await load(here+'/InstallLocalBackend.ts')).namespace;
const json=x=>JSON.parse(JSON.stringify(x));
const storage=()=>{const m=new Map();return{getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v),m};};
function seeded(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
const backend=(o={})=>new LocalGameBackend({random:seeded(42),clock:()=>100,...o});
let checks=0;function check(name,fn){fn();checks++;console.log('PASS '+name);}
check('D own paytable/formula, symbols and 30-cell losing board',()=>{
 const board=Array.from({length:5},(_,r)=>Array.from({length:6},(_,c)=>2+(r*6+c)%8));assert.equal(evaluateBoard(board,1).winnings,0);
 for(let i=0;i<8;i++)board[Math.floor(i/6)][i%6]=1;assert.equal(evaluateBoard(board,1).winnings,10);
 board[1][2]=1;board[1][3]=1;assert.equal(evaluateBoard(board,1).winnings,25);
});
check('ordinary winning and losing responses are newly generated native D states',()=>{
 for(const scenario of ['win','lose']){const b=backend({qaScenario:scenario,ruleConfig:{multiplierChance:0,scatterChance:0,upgradeChance:0}}),r=b.request('spin',{requestId:scenario});assert.equal(r.status,200);assert.equal(r.engine.gameState.at(-1).winSymbols.length,0);assert.equal(r.engine.gameState[0].view.flat().length,30);assert.equal(r.engine.gameState.some(s=>s.winSymbols.length>0),scenario==='win');assert.equal(r.platform.game.gn,'egyptian-mythology');assert.equal(r.platform.game.gameId,'g1001');assert.equal(r.platform.player.balance.amount,9999);for(const [i,s]of r.engine.gameState.entries()){assert.equal(s.currentView,i);assert.equal(s.totalViews,r.engine.gameState.length);assert.ok(Array.isArray(s.timesSymbols));assert.ok(Array.isArray(s.timesUpgrade));assert.ok(Array.isArray(s.posTransform));}}
});
check('gravity transform preserves surviving symbols and native map update order',()=>{
 const flat=Array.from({length:30},(_,i)=>2+i%8);for(let i=0;i<8;i++)flat[i]=1;const wins=evaluateBoard(Array.from({length:5},(_,r)=>flat.slice(r*6,r*6+6)),1).winSymbols;const g=gravity(flat,wins,new Map(),()=>({symbol:9}));const live=new Map(flat.map((v,i)=>[i,v]));for(const w of wins)for(const p of w.symbolPos)live.delete(p);for(const t of g.posTransform){const symbol=live.get(t.beforePos);assert.ok(symbol!==undefined);live.set(t.afterPos,symbol);live.delete(t.beforePos);}for(const [p,v]of live)assert.equal(g.flat[p],v);
});
check('terminal multiplier calculates cash from visible multiplier sum',()=>{
 const g=generateRound({totalBet:1,random:seeded(29),qaScenario:'multiplier',config:{multiplierChance:0,scatterChance:0,upgradeChance:0}});assert.ok(g.summary.rounds[0].baseWinnings>0);assert.equal(g.summary.rounds[0].factor,2);assert.equal(g.summary.rounds[0].roundWinnings,g.summary.rounds[0].baseWinnings*2);
});
check('spin idempotency, close exactly once and independent D persistence',()=>{
 const s=storage(),b=backend({storage:s,qaScenario:'win'}),r=b.request('spin',{requestId:'one'}),balance=b.state.balanceCents,award=b.state.pending.awardCents,id=r.engine.spinId;assert.equal(b.request('spin',{requestId:'one'}).engine.spinId,id);assert.equal(b.state.balanceCents,balance);assert.equal(b.request('spin',{spinId:id}).engine.spinId,id);const restored=backend({storage:s});assert.equal(restored.request('initial').isResuming,true);assert.equal(restored.state.balanceCents,balance);restored.request('closeSpin',{spinId:id});assert.equal(restored.state.balanceCents,balance+award);restored.request('closeSpin',{spinId:id});assert.equal(restored.state.balanceCents,balance+award);assert.equal(s.m.has('project-d.local-simulation.v1'),true);assert.equal([...s.m.keys()].length,1);
});
check('buyFeature costs100x, returns original object acknowledgement and no second debit',()=>{
 const b=backend({ruleConfig:{multiplierChance:0,scatterChance:0}}),r=b.request('spin',{action:'buyFeature',featureIndex:0,featureValue:'freeGame',requestId:'buy'});assert.equal(r.status,200);assert.equal(r.engine.gameState.spinId,r.engine.spinId);assert.equal(r.platform.player.balance.amount,9900);const next=b.request('spin',{spinId:r.engine.spinId});assert.equal(next.status,200);assert.equal(next.engine.gameState.filter(s=>s.action==='freeSpin'&&!s.winSymbols.length).length,15);assert.equal(b.state.balanceCents,990000);assert.equal(next.engine.gameState[0].startFreeGame,true);assert.equal(next.featureSummary.freeRoundsAwarded,15);assert.equal(b.request('spin',{action:'buyFeature',featureIndex:0,featureValue:'freeGame'}).engine.spinId,r.engine.spinId);assert.equal(b.state.balanceCents,990000);
});
check('FG retrigger adds5; no extra stake while original stage cursor advances',()=>{
 const b=backend({qaScenario:'free-retrigger',ruleConfig:{scatterChance:0,multiplierChance:0}}),r=b.request('spin');assert.equal(r.status,200);assert.equal(r.featureSummary.freeRoundsAwarded,20);assert.equal(r.featureSummary.retriggeredRounds,5);assert.equal(r.featureSummary.freeRoundsPlayed,20);const id=r.engine.spinId;for(let currentView=0;currentView<r.engine.gameState.length;currentView++)assert.equal(b.request('progress',{spinId:id,currentView}).status,200);assert.equal(b.state.balanceCents,999900);assert.equal(b.request('progress',{spinId:id,currentView:0}).status,400);
});
check('early spin atomically closes ordinary pending round and debits next once',()=>{
 const b=backend({qaScenario:'lose',ruleConfig:{multiplierChance:0,scatterChance:0}}),r=b.request('spin'),id=r.engine.spinId;const n=b.request('spin',{forceClose:id});assert.equal(n.status,200);assert.notEqual(n.engine.spinId,id);assert.equal(b.state.balanceCents,999800);assert.equal(b.request('spin',{forceClose:id}).engine.spinId,n.engine.spinId);assert.equal(b.state.balanceCents,999800);assert.equal(b.request('closeSpin',{spinId:id}).status,200);assert.equal(b.state.balanceCents,999800);
});
check('settings persist, reject unsafe invalid changes, quiet preview does not overwrite user sounds',()=>{
 const s=storage(),b=backend({storage:s});assert.equal(b.request('updateSettings',{type:'game',data:{turbo:true}}).status,200);assert.equal(b.request('updateSettings',{type:'sounds',data:{backgroundVolume:.42}}).status,200);assert.equal(b.request('updateSettings',{type:'sounds',data:{effectVolume:3}}).status,400);const muted=backend({storage:s,quiet:true});assert.equal(muted.state.settings.advancedSettings.turbo,true);assert.equal(muted.state.settings.advancedSettings.sounds.backgroundVolume,.42);assert.equal(muted.request('initial').platform.player.settings.advancedSettings.sounds.backgroundVolume,0);assert.equal(backend({storage:s}).request('initial').platform.player.settings.advancedSettings.sounds.backgroundVolume,.42);
});
check('invalid RNG, exhausted cascade, storage failure and insufficient balance never debit',()=>{
 const b=backend({random:()=>0,ruleConfig:{multiplierChance:0,scatterChance:0,maxCascades:1}}),before=json(b.state);assert.equal(b.request('spin').status,400);assert.deepEqual(json(b.state),before);
 const poor=backend({initialBalance:.5});assert.equal(poor.request('spin').code,'INSUFFICIENT_BALANCE');assert.equal(poor.state.balanceCents,50);
 const broken=backend({storage:{getItem(){return null;},setItem(){throw Error('disk full');}}}),original=json(broken.state);assert.equal(broken.request('spin',{requestId:'atomic'}).status,400);assert.deepEqual(json(broken.state),original);
});
check('corrupt wallets fail loudly and do not reset',()=>{assert.throws(()=>backend({storage:{getItem(){return '{bad';}}}),/Invalid saved/);});
check('isolated QA wallets require reaDebug and a valid name',()=>{assert.equal(selectWalletKey('?reaScenario=win'),'project-d.local-simulation.v1');assert.equal(selectWalletKey('?reaDebug=1&reaTestWallet=fixture'),'project-d.local-simulation.v1.test.fixture');});
check('FG awards cap at100 using its own explicit scatter distribution',()=>{
 const g=generateRound({totalBet:1,random:seeded(7),buyFeature:true,config:{multiplierChance:0,scatterChance:1,upgradeChance:0}});assert.equal(g.summary.freeRoundsAwarded,100);assert.equal(g.summary.freeRoundsPlayed,100);assert.equal(g.summary.retriggeredRounds,85);
});
check('multiplier upgrade fields preserve old/new values for original D animation',()=>{
 const g=generateRound({totalBet:1,random:seeded(29),qaScenario:'multiplier',config:{multiplierChance:0,scatterChance:0,upgradeChance:1}});assert.equal(g.stages[0].timesUpgrade[0].beforeTimes,2);assert.equal(g.stages[0].timesUpgrade[0].afterTimes,4);assert.equal(g.stages[1].timesSymbols[0].times,4);assert.equal(g.summary.rounds[0].factor,4);
});
check('FG terminal cash and multiplier accumulation follow displayed sum rule',()=>{
 const g=generateRound({totalBet:1,random:seeded(111),buyFeature:true,config:{normalWeights:[6,1,1,1,1,1,1,1,1],multiplierChance:.08,scatterChance:0,upgradeChance:0}});let prior=0,winningMultiplied=0;const terminal=g.stages.filter(s=>s.action==='freeSpin'&&!s.winSymbols.length);assert.equal(terminal.length,15);
 for(const [i,r]of g.summary.rounds.entries()){const sum=terminal[i].timesSymbols.reduce((n,b)=>n+b.times,0);assert.equal(r.priorAccumulatedTimes,prior);if(r.baseWinnings>0&&sum>0){assert.equal(r.factor,prior+sum);prior+=sum;winningMultiplied++;}else assert.equal(r.factor,1);assert.equal(r.accumulatedTimes,prior);}assert.ok(winningMultiplied>0);
});
// Execute only the original isolated parser/model/sender modules, with engine/UI
// dependencies replaced by narrow stubs; no source gameplay, rendering or network.
const exportsByModule=new Map(),captures=new Map(),events=[];
const rf={push(){},pop(){}};
const helpers={inheritsLoose(child,parent){child.prototype=Object.create(parent.prototype);Object.defineProperty(child.prototype,'constructor',{value:child,writable:true,configurable:true});Object.setPrototypeOf(child,parent);},extends:Object.assign,createClass(ctor,instance=[],statics=[]){for(const [target,list]of [[ctor.prototype,instance],[ctor,statics]])for(const p of list||[])Object.defineProperty(target,p.key,{...p,configurable:true});return ctor;}};
function Base(){this.data={};}Base.prototype.getData=function(){return this.data;};
const model=()=>({data:{},setData(v){this.data=v;},getData(){return this.data;},init(v){this.data=v;}}),definition=model(),platform=model(),settings=model(),initial=model(),gameState=model(),stake=model(),config={...model(),setNewData(){},getData(){return{}}};
platform.updateBalance=function(amount,updatedAt){this.data.player.balance.amount=amount;this.data.player.balance.updatedAt=updatedAt;};
const deps={
 './rollupPluginModLoBabelHelpers.js':helpers,'cc':{cclegacy:{_RF:rf},v3:(x=0,y=0,z=0)=>({x,y,z}),sys:{}},'./Bundles.ts':{EBundles:{g1001:'g1001'}},'./MathUtil.ts':{default:{flattenArray:v=>v.flat()}},'./GameDataBase.ts':{GameDataBase:Base},'./GameSymbolID.ts':{GameSymbolID:{init(){},symbolPosConfig:new Map()}},'./AutoPlayModel.ts':{default:{active:false,spinsRemaining:0}},'./ObjectUtils.ts':{ObjectUtils:{clone:json}},'./PlatformModel.ts':{default:platform},'./StakeModel.ts':{default:stake},'./DefinitionModel.ts':{default:definition},'./InitialModel.ts':{default:initial},'./GameStateModel.ts':{default:gameState},'./SettingsModel.ts':{default:settings},'./UrlUtils.ts':{default:{getViewModeParam:()=> 'landscape'}},'./GameConfigModel.ts':{default:config},'./types.ts':{EGameType:{MAIN_GAME:'mainGame',FREE_GAME:'freeGame'}},'./GameEvent.ts':{GameEvent:{PARSER_INIT_COMPLETED:'parser-init',PARSER_SPIN_COMPLETED:'parser-spin'}},'./SlotFrameworkEvent.ts':{SlotFrameworkEvent:{INIT_RESPONSE:'initial-response',SPIN_RESPONSE:'spin-response',CLOSE_RESPONSE:'close-response',BUY_FEATURE_RESPONSE:'buy-response'}},'./ServerModel.ts':{default:{mode:'online'},EServerMode:{STATIC:'static'}},'./SocketModel.ts':{default:{currentToken:'fixture-local'}},'./CmmUtils.ts':{CmmUtils:{getClientType:()=> 'web'}},'./Http.ts':{Http:{ServerStatus:{SUCCESS:200,ERROR_SPIN_ONE_MORE:201}}},'./type2.ts':{ESocketRequestName:{SPIN:'spin',CLOSE_SPIN:'closeSpin',UPDATE_SETTINGS:'updateSettings'}},'./GameSenderBase.ts':{GameSenderBase:function(){}},'./SlotFrameworkData.ts':{default:{}},'./GameService.ts':{GameService:function(){}}};
const sandbox={console,Log:{d(){},e(){},w(){}},window:{location:{search:''}},App:{dataCenter:{get(key){return captures.get(key)||{};}},senderManager:{get(){return{};}},gameAlert:{show(){throw Error('Original sender rejected fixture');}},getLanguage:()=>''},dispatch:(event,payload)=>events.push({event,payload}),System:{register(id,dependencyNames,factory){const exported={};const declaration=factory((key,value)=>typeof key==='object'?Object.assign(exported,key):exported[key]=value);for(let i=0;i<dependencyNames.length;i++)declaration.setters[i]?.(deps[dependencyNames[i]]||{});declaration.execute();exportsByModule.set(id,exported);}}};
for(const name of ['GameData','ParseResponse','GameSender']){const file=path.resolve(tests,'fixtures/contracts-static/D-g1001-'+name+'.ts.js');vm.runInNewContext(await fs.readFile(file,'utf8'),sandbox,{filename:file});const exp=exportsByModule.get('chunks:///_virtual/'+name+'.ts');deps['./'+name+'.ts']=exp;if(name==='GameData'){const data=new exp.default();data.init();captures.set(exp.default,data);}}
const Data=deps['./GameData.ts'].default,parser=deps['./ParseResponse.ts'].default,data=captures.get(Data),Sender=deps['./GameSender.ts'].GameSender;
check('actual captured D GameData/ParseResponse accepts initial + winning ordinary cascade',()=>{
 const b=backend({qaScenario:'win',ruleConfig:{multiplierChance:0,scatterChance:0}}),init=b.request('initial');parser.parseNewInit(init);assert.equal(data.data.parser.view1D.length,30);assert.equal(stake.data.numWinlines,20);const r=b.request('spin');parser.parseNewSpin(r);assert.equal(data.data.parser.view1D.length,30);for(let i=1;i<r.engine.gameState.length;i++){data.setNextSpinData();assert.equal(data.currSpinData.currentView,i);}assert.equal(data.currSpinData.winSymbols.length,0);assert.equal(data.currSpinData.totalWinnings,r.engine.gameState.at(-1).totalWinnings);
});
check('actual captured D parser accepts FG entry, complete free series and terminal finish',()=>{
 const b=backend({qaScenario:'free-retrigger',ruleConfig:{multiplierChance:0,scatterChance:0}});parser.parseNewInit(b.request('initial'));const r=b.request('spin');parser.parseNewSpin(r);assert.equal(data.currSpinData.startFreeGame,true);let sawFG=false;for(let i=1;i<r.engine.gameState.length;i++){data.setNextSpinData();if(data.currSpinData.action==='freeSpin')sawFG=true;}assert.ok(sawFG);assert.equal(data.getIsFGFinish(),true);
});
const parserNativeMethods=Object.fromEntries(['setNewInitData','setNewSpinData','setNextSpinData'].map(name=>[name,Data.prototype[name]]));
const {installProgressHooks}=(await load(here+'/ProgressHooks.ts')).namespace;
check('actual D parser resumes persisted native cursor through isolated progress hooks',()=>{
 const store=storage(),b=backend({storage:store,qaScenario:'freeGame',ruleConfig:{multiplierChance:0,scatterChance:0}}),response=b.request('spin');assert.ok(response.engine.gameState.length>1);b.request('progress',{spinId:response.engine.spinId,currentView:1});const restored=backend({storage:store});installProgressHooks(Data,{markStage:(spinId,currentView)=>restored.request('progress',{spinId,currentView})});data._currentGameType=undefined;data.previousGameType=undefined;parser.parseNewInit(restored.request('initial'));assert.equal(data.currentGameType,'freeGame');assert.equal(data.currSpinIndex,1);assert.equal(data.currSpinData.currentView,1);assert.equal(restored.state.balanceCents,999900);
});
const senderBackend=backend({qaScenario:'win'}),sender=new Sender();sender.send=(event,payload,cb)=>cb(senderBackend.request(event,payload));sender.setToken=()=>{};
await sender.initial();assert.equal(definition.data.digital,2);assert.ok(events.some(e=>e.event==='initial-response'));sender.spin({},null,null,false);assert.ok(events.some(e=>e.event==='spin-response'));sender.closeSpin(senderBackend.state.pending.id);assert.ok(events.some(e=>e.event==='close-response'));checks++;console.log('PASS actual captured D GameSender accepts initial/spin/close callbacks');
sender.buyFeature({},false);const purchased=events.findLast(e=>e.event==='buy-response');assert.ok(purchased?.payload.data);const beforeFeatureFollow=senderBackend.state.balanceCents;sender.spin({},purchased.payload.data,null,false);assert.equal(senderBackend.state.balanceCents,beforeFeatureFollow);assert.ok(Array.isArray(events.findLast(e=>e.event==='spin-response').payload.engine.gameState));checks++;console.log('PASS actual captured D GameSender buyFeature object acknowledgement then spin array');
const mockStorage=storage();class Service{init(){this.originalInitialized=true;}onOpen(){this.opened=true;}}
const runtime=installLocalBackend(Service,{storage:mockStorage,search:'?reaDebug=1&reaTestWallet=transport&reaDevelopmentMute=1',random:seeded(13)});assert.equal(runtime.created,false);const service=new Service();service.init();assert.equal(service.originalInitialized,true);await service.connect();assert.equal(service.opened,true);let received;await service.socketIOMessage('initial',{},response=>{received=response;});assert.equal(received.status,200);assert.equal(received.platform.player.settings.advancedSettings.sounds.backgroundVolume,0);assert.equal(runtime.storageKey,'project-d.local-simulation.v1.test.transport');assert.equal(globalThis.globalProjectD,runtime);checks++;console.log('PASS Project-D lazy transport adapter and development mute boundary');
console.log(JSON.stringify({passed:checks,capturedModulesExecuted:['GameData.ts','ParseResponse.ts','GameSender.ts'],browser:false,engine:false,originalRngRestored:false}));

check('actual captured parser accepts every JP/chest ordinary, intro and FG stage',()=>{
 Object.assign(Data.prototype,parserNativeMethods);
 for(const qaScenario of ['jackpot-mini','jackpot-minor','jackpot-major','jackpot-grand','intro-jackpot-mini','free-jackpot-grand','mystery-chest']){
  const local=backend({qaScenario,jackpotConfig:{triggerProbability:0},mysteryChest:{probability:0},ruleConfig:{multiplierChance:0,scatterChance:0,upgradeChance:0}}),initial=local.request('initial');
  parser.parseNewInit(initial);const response=local.request('spin');assert.equal(response.status,200);parser.parseNewSpin(response);for(let i=1;i<response.engine.gameState.length;i++)data.setNextSpinData();assert.equal(data.currSpinData.totalWinnings,response.engine.gameState.at(-1).totalWinnings);assert.equal(data.currSpinData.currentView,response.engine.gameState.length-1);
 }
});
console.log(JSON.stringify({project:'Project-D',totalParserContractChecks:checks,specialStagesParsed:true,engine:false}));
