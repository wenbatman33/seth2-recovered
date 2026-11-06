import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),loaded=new Map(),checks=[];
async function load(file){file=path.resolve(file);if(loaded.has(file))return loaded.get(file);const module=new vm.SourceTextModule(await fs.readFile(file,'utf8'),{identifier:file});loaded.set(file,module);await module.link(spec=>load(path.resolve(path.dirname(file),spec+'.ts')));await module.evaluate();return module;}
const {LocalGameBackend}=(await load(here+'/../assets/game/backend/LocalGameBackend.ts')).namespace,{evaluateBoard,generateRound,localConfiguration}=(await load(here+'/../assets/game/backend/Rules.ts')).namespace,{installLocalBackend,selectWalletKey}=(await load(here+'/../assets/game/backend/InstallLocalBackend.ts')).namespace;
const copy=v=>JSON.parse(JSON.stringify(v));function seeded(seed){return()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/2**32);}
const storage=()=>{const entries=new Map();return{getItem:key=>entries.get(key)||null,setItem:(key,value)=>entries.set(key,value),entries};};
const backend=options=>new LocalGameBackend({random:seeded(41),clock:()=>123456,...options});
async function check(name,fn){await fn();checks.push(name);console.log('PASS '+name);}
await check('actual four-row prefab and source 40-line table override stale debug constants',async()=>{
 const prefab=JSON.parse(await fs.readFile(path.resolve(here,'../assets/game/content/prefabs/GameView.prefab'),'utf8')),reels=prefab.filter(o=>o?.__type__==='SingleReelSetting');assert.equal(reels.length,5);assert.ok(reels.every(o=>o.midCount===4));
 const b=backend(),d=b.definition();assert.equal(d.winlineDefs.length,40);assert.equal(d.viewDefs.view.length,4);assert.equal(new Set(d.winlineDefs.map(l=>JSON.stringify(l.line))).size,40);assert.equal(d.symbolDefs.find(s=>s.symbol===10).isWild,false);
 const r=evaluateBoard(Array.from({length:4},()=>[1,1,1,1,1]),2);assert.equal(r.currentWinnings,2000);assert.ok(r.winSymbols.every(s=>s.symbol===1&&s.counts===5));
});
await check('displayed line payouts and bottom-row bitmask8 are retained',()=>{
 const view=Array.from({length:4},()=>[2,3,4,5,6]);view[3]=[8,8,8,8,8];const e=evaluateBoard(view,40),bottom=e.winSymbols.find(w=>w.winLine===3);assert.equal(bottom.symbol,8);assert.deepEqual(copy(bottom.symbolPos),[8,8,8,8,8]);assert.equal(bottom.winnings,100);
 const wild=copy(view);wild[3]=[1,1,8,8,8];assert.equal(evaluateBoard(wild,40).winSymbols.find(w=>w.winLine===3).winnings,100);
 assert.throws(()=>evaluateBoard([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]],1),/4\]\[5/);
});
await check('own distribution produces both wins and losses without fixed no-win answers',()=>{
 const random=seeded(35);let win=0,lose=0;for(let i=0;i<200;i++){const r=generateRound({totalBet:2,random,config:{freeChance:0,jackpotChance:0}});if(r.totalWinnings)win++;else lose++;}assert.ok(win>5);assert.ok(lose>5);
});
await check('debit/pending/cursor/settlement persist atomically and replay never pays twice',()=>{
 const store=storage(),b=backend({storage:store,qaScenario:'win'}),before=b.state.balanceCents,r=b.request('spin',{requestId:'round-1'}),id=r.engine.spinId,award=b.state.pending.awardCents;assert.equal(b.state.balanceCents,before-200);assert.deepEqual(copy(b.request('spin',{requestId:'round-1'})),copy(r));
 const restored=backend({storage:store});assert.equal(restored.request('initial').isResuming,true);assert.equal(restored.request('closeSpin',{spinId:id}).status,200);assert.equal(restored.state.balanceCents,before-200+award);assert.equal(restored.request('closeSpin',{spinId:id}).status,200);assert.equal(restored.state.balanceCents,before-200+award);assert.deepEqual([...store.entries.keys()],['project-e.local-simulation.v1']);
 let touched=false;assert.throws(()=>backend({storageKey:'project-c.local-simulation.v1',storage:{getItem(){touched=true;}}}),/namespace/);assert.equal(touched,false);
});
await check('local purchase100x returns original object acknowledgment then the same full FG chain',()=>{
 const b=backend({ruleConfig:{freeChance:0,jackpotChance:0,retriggerChance:0}}),balance=b.state.balanceCents,r=b.request('spin',{action:'buyFeature',featureIndex:0,featureValue:'freeGame',requestId:'purchase'});assert.equal(r.status,200);assert.equal(r.engine.gameState.spinId,r.engine.spinId);assert.equal(b.state.balanceCents,balance-20000);
 const f=b.request('spin',{spinId:r.engine.spinId});assert.equal(f.engine.gameState.length,6);assert.equal(f.engine.gameState[0].freeSpinWon,5);assert.equal(f.engine.gameState.at(-1).numFreeSpins,0);assert.ok([4,6,8].includes(f.engine.gameState[0].selectFgMultiple));assert.equal(b.state.balanceCents,balance-20000);assert.equal(b.request('closeSpin',{spinId:r.engine.spinId}).code,'FEATURE_PENDING');
 for(let i=1;i<f.engine.gameState.length;i++)assert.equal(b.request('progress',{spinId:r.engine.spinId,currentView:i}).status,200);assert.equal(b.request('closeSpin',{spinId:r.engine.spinId}).status,200);assert.equal(b.request('spin',{action:'buyFeature',featureIndex:2,featureValue:'elixirFurnace'}).status,400);
});
await check('FG factors4/6/8, 5/10/15 awards, retrigger and bounded terminal numFreeSpins0',()=>{
 for(const [qa,award]of [['free',5],['free-4',10],['free-5',15]]){const r=generateRound({totalBet:2,random:seeded(48),qaScenario:qa,config:{retriggerChance:0}});assert.equal(r.stages[0].freeSpinWon,award);assert.equal(r.stages.length,award+1);let prior=r.stages[0].currentWinnings;for(const s of r.stages.slice(1)){assert.equal(s.currentWinnings,Math.round(s.winSymbols.reduce((n,w)=>n+w.winnings,0)*s.multiple*100)/100);assert.equal(s.totalWinnings,Math.round((prior+s.currentWinnings)*100)/100);prior=s.totalWinnings;assert.equal(s.selectFgMultiple,r.summary.selectedFactor);}assert.equal(r.stages.at(-1).numFreeSpins,0);}
 const r=generateRound({totalBet:2,random:seeded(5),qaScenario:'free-retrigger',config:{retriggerChance:1,maxFreeRounds:15}});assert.equal(r.summary.freeRoundsPlayed,15);assert.equal(r.summary.freeRoundsAwarded,15);assert.ok(r.summary.retriggeredRounds>=5);assert.equal(r.stages.at(-1).numFreeSpins,0);
});
await check('JACKPOT count2/3/4/5 maps to native isJp tiers and explicit local pool awards',()=>{
 for(const [tier,count]of [['mini',2],['minor',3],['major',4],['grand',5]]){const r=generateRound({totalBet:2,random:seeded(44),qaScenario:'jackpot-'+tier}),s=r.stages[0];assert.equal(s.isJp,'jp-'+tier);assert.equal(s.view.flat().filter(n=>n===10).length,count);assert.equal(s.jpWinnings,localConfiguration().poolAmounts[s.isJp]);assert.equal(s.currentWinnings,Math.round((s.winSymbols.reduce((n,w)=>n+w.winnings,0)+s.jpWinnings)*100)/100);}
});
await check('invalid RNG, exhausted balance, invalid stake and failed storage do not debit',()=>{
 for(const b of [backend({random:()=>NaN}),backend({initialBalance:1}),backend({storage:{getItem(){return null;},setItem(){throw Error('disk full');}}})]){const before=copy(b.state);assert.equal(b.request('spin').status,400);assert.deepEqual(copy(b.state),before);}
 const b=backend();assert.equal(b.request('spin',{stakeValue:-1}).status,400);assert.equal(b.request('selectFgMultiple',{factor:8}).status,400);assert.throws(()=>backend({storage:{getItem(){return '{broken';}}}),/Invalid saved/);
});
await check('settings persist and mute response never overwrites normal user sound settings',()=>{
 const store=storage(),b=backend({storage:store});assert.equal(b.request('updateSettings',{type:'game',data:{turbo:true}}).status,200);assert.equal(b.request('updateSettings',{type:'sounds',data:{backgroundVolume:.4}}).status,200);assert.equal(b.request('updateSettings',{type:'sounds',data:{backgroundVolume:2}}).status,400);assert.equal(backend({storage:store,quiet:true}).request('initial').platform.player.settings.advancedSettings.sounds.backgroundVolume,0);assert.equal(backend({storage:store}).request('initial').platform.player.settings.advancedSettings.sounds.backgroundVolume,.4);assert.equal(selectWalletKey('?reaDebug=1&reaTestWallet=contract'),'project-e.local-simulation.v1.test.contract');
});

// Execute isolated original sender/data/parser against narrow engine/model stubs.
// Captured debug fixtures, UI/Spine/game rendering and provider sockets never run.
const exportsByModule=new Map(),captures=new Map(),events=[],rf={push(){},pop(){}},silent={d(){},e(){},w(){}};
const helpers={inheritsLoose(child,parent){child.prototype=Object.create(parent.prototype);Object.defineProperty(child.prototype,'constructor',{value:child,writable:true,configurable:true});Object.setPrototypeOf(child,parent);},extends:Object.assign,createClass(ctor,instance=[],statics=[]){for(const [target,list]of [[ctor.prototype,instance],[ctor,statics]])for(const p of list||[])Object.defineProperty(target,p.key,{...p,configurable:true});return ctor;}};
function Base(){this.data={};}Base.prototype.getData=function(){return this.data;};
const model=()=>({data:{},setData(v){this.data=v;},getData(){return this.data;},init(v){this.data=v;}}),definition=model(),platform=model(),settings=model(),initial=model(),gameState=model(),stake=model(),config={...model(),setData(){},isSendClose:false};
platform.updateBalance=function(amount,updatedAt){this.data.player.balance.amount=amount;this.data.player.balance.updatedAt=updatedAt;};
const deps={
 './rollupPluginModLoBabelHelpers.js':helpers,cc:{cclegacy:{_RF:rf},sys:{},v3:(x=0,y=0,z=0)=>({x,y,z})},'./Bundles.ts':{EBundles:{g1012:'g1012'}},'./MathUtil.ts':{default:{flattenArray:v=>v.flat(),transposeArray:a=>a[0].map((_,c)=>a.map(r=>r[c]))}},'./GameDataBase.ts':{GameDataBase:Base},'./ObjectUtils.ts':{ObjectUtils:{clone:copy}},'./PlatformModel.ts':{default:platform},'./StakeModel.ts':{default:stake},'./DefinitionModel.ts':{default:definition},'./InitialModel.ts':{default:initial},'./GameStateModel.ts':{default:gameState},'./SettingsModel.ts':{default:settings},'./GameConfigModel.ts':{default:config},'./types.ts':{EGameType:{MAIN_GAME:'mainGame',FREE_GAME:'freeGame'},EBonusType:{ELIXIR_FURNACE:'elixirFurnace',JP_GAME:'jpGame'},BonusStateAction:{}},'./GameEvent.ts':{GameEvent:{PARSER_INIT_COMPLETED:'parser-init'}},'./SlotFrameworkEvent.ts':{SlotFrameworkEvent:{INIT_RESPONSE:'initial-response',SPIN_RESPONSE:'spin-response',CLOSE_RESPONSE:'close-response',BUY_FEATURE_RESPONSE:'buy-response'}},'./ServerModel.ts':{default:{mode:'online'},EServerMode:{STATIC:'static'}},'./SocketModel.ts':{default:{currentToken:'project-e-local-fixture'}},'./CmmUtils.ts':{CmmUtils:{getClientType:()=> 'web'}},'./Http.ts':{Http:{ServerStatus:{SUCCESS:200}}},'./type2.ts':{ESocketRequestName:{SPIN:'spin',CLOSE_SPIN:'closeSpin',UPDATE_SETTINGS:'updateSettings'}},'./GameSenderBase.ts':{GameSenderBase:function(){}},'./SlotFrameworkData.ts':{default:{}},'./GameService.ts':{GameService:function(){}}};
const sandbox={console:{log(){},warn(){}},Log:silent,window:{location:{search:''}},App:{dataCenter:{get:key=>captures.get(key)||{}},utils:{shuffle:a=>a},senderManager:{get:()=>({})},gameAlert:{show(){throw Error('Original E sender rejected local response');}},getLanguage:()=>''},dispatch:(event,payload)=>events.push({event,payload}),System:{register(id,names,factory){const exported={};const declaration=factory((key,value)=>typeof key==='object'?Object.assign(exported,key):exported[key]=value);for(let i=0;i<names.length;i++)declaration.setters[i]?.(deps[names[i]]||{});declaration.execute();exportsByModule.set(id,exported);}}};
for(const name of ['GameData','ParseResponse','GameSender']){const file=path.resolve(here,'fixtures/original/E-g1012-'+name+'.ts.js');vm.runInNewContext(await fs.readFile(file,'utf8'),sandbox,{filename:file});const exported=exportsByModule.get('chunks:///_virtual/'+name+'.ts');deps['./'+name+'.ts']=exported;if(name==='GameData'){const data=new exported.default();data.init();captures.set(exported.default,data);}}
const Data=deps['./GameData.ts'].default,parser=deps['./ParseResponse.ts'].default,data=captures.get(Data),Sender=deps['./GameSender.ts'].GameSender;
await check('original E GameData/ParseResponse accept four rows, bottom row masks and all FG stages',()=>{
 const b=backend({qaScenario:'free-retrigger',ruleConfig:{retriggerChance:0}});parser.parseInit(b.request('initial'));assert.equal(stake.data.numWinlines,40);assert.equal(data.data.parser.reelResult.length,5);assert.equal(data.data.parser.reelResult[0].length,4);
 const r=b.request('spin');data.setSpinData(r);assert.equal(data.data.parser.currentGameState.startFreeGame,true);for(let i=1;i<r.engine.gameState.length;i++){data.setNextSpinData();assert.equal(data.data.parser.currentSpinIndex,i);assert.equal(data.data.parser.reelResult[0].length,4);}assert.equal(data.data.parser.currentGameState.numFreeSpins,0);assert.equal(data.getPower(8),3);
 const masked=data.parserWinSymbols([{symbol:2,symbolPos:[8,4,2,1,0],winLine:4,winnings:2}]);assert.deepEqual(copy(masked[0].positions),[[0,3],[1,2],[2,1],[3,0],[4,-1]]);
});
await check('original E sender accepts initial/spin/close and buy object acknowledgment callbacks',async()=>{
 const b=backend({qaScenario:'win'}),sender=new Sender();sender.send=(event,payload,callback)=>callback(b.request(event,payload));sender.setToken=()=>{};sender.showAlert=message=>{throw Error(message);};
 await sender.initial();sender.spin({},null,false);assert.ok(events.some(e=>e.event==='spin-response'));sender.closeSpin(b.state.pending.id);assert.ok(events.some(e=>e.event==='close-response'));
 sender.buyFeature({featureIndex:0,featureValue:'freeGame'});const response=events.findLast(e=>e.event==='buy-response');assert.ok(response.payload.data);const balance=b.state.balanceCents;sender.spin({},response.payload.data,true);assert.equal(b.state.balanceCents,balance);const stages=events.findLast(e=>e.event==='spin-response').payload.engine.gameState;assert.ok(Array.isArray(stages));assert.equal(stages.at(-1).numFreeSpins,0);
});
await check('persisted resume cursor remains explicit; original parser requires a local-only cursor hook',()=>{
 const store=storage(),b=backend({storage:store,qaScenario:'free'}),r=b.request('spin');b.request('progress',{spinId:r.engine.spinId,currentView:2});const resumed=backend({storage:store}).request('initial');assert.equal(resumed.localResumeIndex,2);parser.parseInit(resumed);assert.equal(data.data.parser.currentSpinIndex,0);
});
await check('isolated progress hook restores the exact original parser state and allows terminal settlement',async()=>{
 const {installProgressHooks}=(await load(here+'/../assets/game/backend/ProgressHooks.ts')).namespace,store=storage(),b=backend({storage:store,qaScenario:'free',ruleConfig:{retriggerChance:0}}),r=b.request('spin');b.request('progress',{spinId:r.engine.spinId,currentView:2});const restored=backend({storage:store});installProgressHooks(Data,{markStage:(spinId,currentView)=>restored.request('progress',{spinId,currentView})});parser.parseInit(restored.request('initial'));assert.equal(data.data.parser.currentSpinIndex,2);assert.equal(data.currentGameType,'freeGame');assert.equal(data.data.parser.reelResult[0].length,4);
 for(let i=3;i<r.engine.gameState.length;i++)data.setNextSpinData();assert.equal(restored.state.pending.currentView,r.engine.gameState.length-1);assert.equal(restored.request('closeSpin',{spinId:r.engine.spinId}).status,200);
});
await check('lazy local transport preserves callbacks and notifies original jackpot pool listener before initial',async()=>{
 class Service{init(){}onOpen(){this.opened=true;}}const runtime=installLocalBackend(Service,{storage:storage(),search:'?reaDebug=1&reaTestWallet=transport&reaDevelopmentMute=1',random:seeded(3)});assert.equal(runtime.created,false);const service=new Service();service.init();service._client.on('notify',message=>{assert.equal(message.type,'jackpotUpdate');events.push({event:'pool'});});await service.connect();let response;await service.socketIOMessage('initial',{},r=>{assert.equal(events.at(-1).event,'pool');response=r;});assert.equal(response.status,200);assert.equal(response.platform.player.settings.advancedSettings.sounds.effectVolume,0);assert.equal(runtime.storageKey,'project-e.local-simulation.v1.test.transport');assert.equal(globalThis.globalProjectE,runtime);
});
await check('DOM diagnostics reflect actual wallet settlement, retry, stage counts and bounded records',async()=>{
 const previousDocument=globalThis.document,notice={dataset:{}};globalThis.document={getElementById:id=>id==='ProjectELocalRuntimeBoundary'?notice:null};
 try{class Service{init(){}onOpen(){}}const runtime=installLocalBackend(Service,{storage:storage(),search:'?reaDebug=1&reaTestWallet=dom-audit',qaScenario:'win',random:seeded(3)}),service=new Service();service.init();let callbacks=0;
 const initial=await service.socketIOMessage('initial',{},()=>{callbacks++;assert.equal(JSON.parse(notice.dataset.requests).at(-1).event,'initial');});const before=initial.platform.player.balance.amount;
 const spin=await service.socketIOMessage('spin',{requestId:'dom-round'},()=>callbacks++),id=spin.engine.spinId;let row=JSON.parse(notice.dataset.requests).at(-1);const award=runtime.getBackend().state.pending.awardCents/100;assert.equal(row.balanceBefore,before);assert.equal(row.balanceAfter,before-2);assert.equal(row.award,award);assert.equal(row.stageCount,spin.engine.gameState.length);assert.equal(row.roundStageCount,runtime.getBackend().state.pending.stages.length);
 await service.socketIOMessage('spin',{requestId:'dom-round'},()=>callbacks++);row=JSON.parse(notice.dataset.requests).at(-1);assert.equal(row.balanceBefore,row.balanceAfter);assert.equal(row.creditedAward,0);
 await service.socketIOMessage('closeSpin',{spinId:id},()=>callbacks++);row=JSON.parse(notice.dataset.requests).at(-1);assert.equal(row.award,award);assert.equal(row.creditedAward,award);assert.equal(row.pendingAward,0);assert.equal(row.balanceAfter,before-2+award);
 await service.socketIOMessage('closeSpin',{spinId:id},()=>callbacks++);row=JSON.parse(notice.dataset.requests).at(-1);assert.equal(row.creditedAward,0);assert.equal(callbacks,5);
 for(let i=0;i<105;i++)await service.socketIOMessage('echo',{});assert.equal(runtime.requests.length,100);assert.equal(JSON.parse(notice.dataset.requests).length,100);assert.equal(runtime.getBackend().state.balanceCents,Math.round((before-2+award)*100));
 }finally{if(previousDocument===undefined)delete globalThis.document;else globalThis.document=previousDocument;}
});

const summary={status:'offline-contract-tests-passed; browser/GUI/gameplay not verified',passed:checks.length,checks,capturedModulesExecuted:['E GameData','E ParseResponse','E GameSender'],browser:false,engine:false,originalRng:false,originalRtp:false};await fs.writeFile(here+'/validation-summary.json',JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary));
