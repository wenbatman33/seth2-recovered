import './verify-fixtures.mjs';
/** Exercise installed Project-C game methods, backend and native treasure callbacks.
 * No browser/Creator/rendering acceptance is claimed by these offline contracts.
 */
import assert from 'node:assert/strict';
import {SourceTextModule,createContext,runInNewContext} from 'node:vm';
import {readFileSync,readdirSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),parser=require('@babel/parser'),traverse=require('@babel/traverse').default,generate=require('@babel/generator').default;
const testsDir=dirname(fileURLToPath(import.meta.url)),root=resolve(testsDir,'../assets/game'),context=createContext({console,Math,Date,Map,Set,Promise,Error,JSON,Number,Array,Object,URLSearchParams}),modules=new Map();
async function load(file){file=resolve(file);if(modules.has(file))return modules.get(file);assert.ok(file.startsWith(root+'/backend/'));const m=new SourceTextModule(readFileSync(file,'utf8'),{context,identifier:file});modules.set(file,m);await m.link((name,ref)=>load(resolve(dirname(ref.identifier),name+'.ts')));return m;}
const entry=await load(root+'/backend/LocalGameBackend.ts');await entry.evaluate();const {LocalGameBackend,createMysteryChestConfig}=entry.namespace;
const bridge=await load(root+'/backend/LocalJackpotContinuation.ts');await bridge.evaluate();const {continueAfterLocalJackpot,jackpotPresentationAmounts}=bridge.namespace;
function method(file,name){let node,count=0;const ast=parser.parse(readFileSync(root+'/scripts/g1009-'+file+'.ts','utf8'),{sourceType:'module'});traverse(ast,{AssignmentExpression(path){if(path.node.left.type==='MemberExpression'&&path.node.left.property.name===name&&path.node.right.type==='FunctionExpression'){node=path.node.right;count++;}}});assert.equal(count,1,file+'.'+name);return generate(node).code;}
const fn=(file,name,globals={})=>runInNewContext('('+method(file,name)+')',globals);
const plain=x=>JSON.parse(JSON.stringify(x));
const rng=(seed=23)=>()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/2**32);
const memory=()=>{const values=new Map();return{getItem:key=>values.get(key)||null,setItem:(key,value)=>values.set(key,value)};};
const ok=value=>{assert.equal(value.status,200,JSON.stringify(value));return value;};
const quietMath={jackpotConfig:{triggerProbability:0},mysteryChest:{probability:0},featureConfig:{multiplierChance:0,scatterChance:0,goldenScatterChance:0,totemChance:0,upgradeChance:0,lockChance:0,splitChance:0}};
const tests=[];async function test(name,run){await run();tests.push(name);console.log('PASS '+name);}
const enums={EActionType:{SPIN:'spin',FREE_GAME:'freeSpin',SUPER_GAME:'superSpin'},EGameType:{MAIN_GAME:'mainGame',FREE_GAME:'freeGame'}};
class Event{constructor(name,data,options){Object.assign(this,{name,data,options});}}
for(const name of ['SHOW_JP_WIN','SHOW_JP','SHOW_SCATTER_WIN','INCREASE_FG_REMAINING','HIDE_DARK','CREATE_SPIN_FLOW','UPDATE_TOTAL_WINNINGS','UPDATE_WIN_AMOUNT','QUICK_STOP_TOTAL_WINNINGS','QUICK_STOP_WIN_AMOUNT','SHOW_TREASURE_VIEW','SEND_CLOSE_REQUEST','SPIN_CLOSED_FLOW','SHOW_BIGWIN'])Event[name]=name;
class Flow{constructor(){this.steps=[];}add(...values){this.steps.push(...values);return this;}}
function dataHarness(runtime){
 const globals={Log:{w(){},d(){}},_dependency0:{default:{flattenArray:value=>value.flat()}},globalThis:{ProjectCCreatorLocalBackend:runtime}};
 const owner={data:{parser:{view1D:[],newTimesSymbols:[],winOdds:[],lockTimesSymbols:new Map()}},currSpinIndex:0,newLockTimesSymbols:new Map()};
 Object.defineProperty(owner,'currSpinData',{get(){return this.data.newGameState[this.currSpinIndex];}});
 for(const name of ['setNewInitData','setNewSpinData','setNextSpinData','setPreSpinData','compareFunction','parseView','parseWinOddsTypes','parseNewTimesSymbols','parseLockTimesSymbol'])owner[name]=fn('GameData',name,globals);
 owner.getData=()=>owner.data;return owner;
}
await test('installed GameData resumes C cursor, multiplier and lock maps then persists only after parsing',()=>{
 const b=new LocalGameBackend({scenario:'lock',random:rng(19),mysteryChest:{probability:0},jackpotConfig:{triggerProbability:0}});const spin=ok(b.request('spin'));const index=spin.engine.gameState.findIndex(stage=>stage.timesSymbols.some(ball=>ball.lock>0));assert.ok(index>=1);ok(b.request('progress',{spinId:spin.engine.spinId,currentView:index}));const balance=b.state.balanceCents;
 let owner;const calls=[];owner=dataHarness({markStage(id,currentView){assert.equal(owner.data.gameState.currentView,currentView);assert.equal(owner.data.parser.view1D.length,30);calls.push(currentView);return b.request('progress',{spinId:id,currentView});}});
 owner.setNewInitData(ok(b.request('initial')));assert.equal(owner.currSpinIndex,index);assert.equal(owner.data.parser.view1D.length,30);assert.ok(owner.data.parser.lockTimesSymbols.size>0);assert.deepEqual(plain(owner.data.parser.newTimesSymbols),plain(owner.currSpinData.newTimesSymbols));
 const setType=fn('ParseResponse','setNewGameType',{_dependency7:enums});setType.call({data:owner});assert.equal(owner.currentGameType,'freeGame');
 if(index+1<owner.data.newGameState.length){owner.setNextSpinData();assert.deepEqual(calls,[index+1]);assert.equal(b.state.pending.currentView,index+1);}assert.equal(b.state.balanceCents,balance);
 const invalid=ok(b.request('initial'));invalid.localResumeIndex=invalid.engine.gameState.length;assert.throws(()=>dataHarness().setNewInitData(invalid),/resume cursor/);
});
await test('foreign C responses retain native index behavior and cannot persist local progress',()=>{
 const b=new LocalGameBackend({...quietMath,random:rng()});const response=ok(b.request('initial'));response.localBackend=false;response.isResuming=true;response.localResumeIndex=999;
 const owner=dataHarness({markStage(){throw Error('Foreign response cannot touch local wallet');}});owner.setNewInitData(response);assert.equal(owner.currSpinIndex,0);owner.data.newGameState.push(plain(owner.currSpinData));owner.setNextSpinData();assert.equal(owner.currSpinIndex,1);
});
await test('installed JP continuation waits for both native callbacks exactly once; normal close stays native',()=>{
 const b=new LocalGameBackend({...quietMath,random:rng(41),jackpotScenario:'jackpot-mini'});const ack=ok(b.request('spin',{action:'buyFeature',featureIndex:0,featureValue:'freeGame'}));const stages=ok(b.request('spin',{spinId:ack.engine.spinId})).engine.gameState,stage=stages.find(stage=>stage.localJpBeforeContinuation);assert.ok(stage);
 const sent=[],continued=[];const create=fn('CreateNewSpinCompleteFlowCmd','createFlow',{__projectCContinueAfterJackpot:continueAfterLocalJackpot,dispatch:(name,event)=>sent.push({name,event}),_dependency0:{GameEvent:Event},_dependency1:enums});
 const owner={data:{currSpinData:stage},showFreeGameIntroFlow(){continued.push('intro');},nextSpinFlow(){continued.push('next');},freeGameFinishFlow(){continued.push('free-summary');},superMainGameFinishFlow(){continued.push('super-summary');},closeSpinFlow(){continued.push('close');}};
 create.call(owner);assert.equal(continued.length,0);assert.equal(sent[0].name,'SHOW_JP_WIN');sent[0].event.complete();assert.equal(continued.length,0);assert.equal(sent[1].name,'SHOW_JP');sent[1].event.complete();sent[1].event.complete();sent[0].event.complete();assert.equal(continued.length,1);create.call(owner);assert.equal(continued.length,1);
 owner.data.currSpinData={...plain(stage),spinId:'native-close',action:'spin',startFreeGame:false,currentView:0,totalViews:1,localJpBeforeContinuation:false};create.call(owner);assert.equal(continued.at(-1),'close');assert.equal(sent.length,2);
});
await test('installed JP popup/trophy/reel and quick-stop amounts stay separate for C free spins',()=>{
 const stage={localRules:true,jpWinnings:15,roundWinnings:25,totalWinnings:100,action:'freeSpin'},events=[],queued=[],tweens=[];
 const globals={__projectCJackpotAmounts:jackpotPresentationAmounts,_dependency7:{CmmSlotUtils:{formatJPNumber:value=>String(value),tweenJPNum:config=>{tweens.push(config);return{stop(){}};}}},_dependency2:{NodeEventType:{TOUCH_END:'touch'}},_dependency6:{SlotFrameworkEvent:Event},_dependency1:{GameEvent:Event},dispatch:(name,payload)=>events.push([name,payload.data])};
 const owner={data:{getData:()=>({definition:{digital:2},gameState:stage})},totalWin:{node:{}},alert:{once(){}},scheduleOnce:callback=>queued.push(callback),playAnimation(){},closeAlert(){},unschedule(){},playBounceTween(){},addClickAlertCompleteCb(){}};
 fn('JackpotView','showJp',globals).call(owner,()=>{});queued[0]();assert.equal(tweens[0].end,15);assert.deepEqual(events.map(value=>value[1].value),[100,25]);events.length=0;
 fn('JackpotView','showJpResult',globals).call(owner);assert.equal(owner.totalWin.string,'15');assert.deepEqual(events.map(value=>value[1]),[100,25]);
 assert.deepEqual(plain(jackpotPresentationAmounts({...stage,localRules:false})),{popup:100,trophy:100,reel:100});
});
await test('installed retrigger guard follows local awarded rounds while retaining foreign scatter behavior',()=>{
 function run(extra,local=true){const flows=[];const globals={App:{flowManager:{Flow,registerFlow:flow=>flows.push(flow)}},_dependency10:{FlowIDs:{NEXT_SPIN_FLOW:'next'}},_dependency7:{default:{getData:()=>({hasTimesSymbolsDelay:0,nextSpinDelay:0})}},_dependency3:{FlowTrigger:{CONCURRENT:'concurrent',AFTER_PREVIOUS:'after'}},_dependency6:{SlotFrameworkEvent:Event},_dependency0:{GameEvent:Event},_dependency9:{EBackendSymbolID:{SCATTER:15,GOLD_SCATTER:16}}};const stage={spinId:'guard',winSymbols:[],roundWinnings:0,action:'freeSpin',localRules:local,localExtraFreeRounds:extra};fn('CreateNewSpinCompleteFlowCmd','nextSpinFlow',globals).call({data:{getData:()=>({parser:{newTimesSymbols:[],view1D:[16,16,16]}}),currSpinData:stage,setNewBigWinReach:()=>false}});return flows[0].steps.filter(step=>step instanceof Event).map(step=>step.name);}
 for(const extra of [0,undefined,-1,NaN,2.5])assert.equal(run(extra).includes('INCREASE_FG_REMAINING'),false);assert.ok(run(5).includes('INCREASE_FG_REMAINING'));assert.ok(run(0,false).includes('INCREASE_FG_REMAINING'));
});
await test('installed C purchase preview uses selected feature price and preserves native fallback',()=>{
 const b=new LocalGameBackend({...quietMath,random:rng()});const definition=b.definition(),state={currentBuyFeatureIndex:0,definition};const globals={globalThis:{ProjectCCreatorLocalBackend:{installed:true}},_dependency8:{default:{ratioValue:1,stakeValue:.05}},_dependency0:{default:{getData:()=>definition}},_dependency12:{default:{multiply:(...values)=>values.reduce((a,b)=>a*b,1)}},_dependency1:{default:{getData:()=>({player:{balance:{amount:10000}}})}}};
 const preview=fn('CreateNewSpinFlowCmd','getAfterBuyFeatureBalance',globals),owner={data:{getData:()=>state}};for(const [index,balance]of [9800,9500,8000].entries()){state.currentBuyFeatureIndex=index;assert.equal(preview.call(owner),balance);}state.currentBuyFeatureIndex=9;assert.throws(()=>preview.call(owner),/feature selection/);delete globals.globalThis.ProjectCCreatorLocalBackend;assert.equal(fn('CreateNewSpinFlowCmd','getAfterBuyFeatureBalance',globals).call(owner),9800);
});
await test('configurable self-defined chest generates noWinReward and is persisted/settled exactly once',()=>{
 const storage=memory(),b=new LocalGameBackend({...quietMath,features:false,storage,scenario:'mystery-chest',mysteryChest:{probability:0,multipliers:[7],weights:[1]},random:rng(91)});const before=b.state.balanceCents,spin=ok(b.request('spin',{requestId:'chest-one'})),stage=spin.engine.gameState[0];assert.equal(stage.noWinReward,7);assert.equal(stage.totalWinnings,7);assert.equal(stage.winSymbols.length,0);assert.equal(b.state.balanceCents,before-100);assert.equal(spin.featureSummary.mysteryChest.localSimulation,true);assert.equal(spin.featureSummary.mysteryChest.forced,true);
 assert.deepEqual(plain(b.request('spin',{requestId:'chest-one'})),plain(spin));const restored=new LocalGameBackend({...quietMath,features:false,storage,random(){throw Error('Resume must not generate');}});assert.equal(ok(restored.request('initial')).engine.gameState[0].noWinReward,7);ok(restored.request('closeSpin',{spinId:spin.engine.spinId}));assert.equal(restored.state.balanceCents,before-100+700);ok(restored.request('closeSpin',{spinId:spin.engine.spinId}));assert.equal(restored.state.balanceCents,before-100+700);
 assert.throws(()=>createMysteryChestConfig({probability:2}),/probability/);assert.throws(()=>createMysteryChestConfig({weights:[-1]}),/weights/);
});
await test('chest probability zero disables it and probability one awards only genuinely losing ordinary rounds',()=>{
 for(const probability of [0,1]){const b=new LocalGameBackend({...quietMath,features:false,mysteryChest:{probability,multipliers:[3],weights:[1]},random:rng(15)});let eligible=0;for(let round=0;round<12;round++){const spin=ok(b.request('spin',{requestId:'probability-'+round})),stage=spin.engine.gameState.at(-1);if(spin.engine.gameState.length===1&&!stage.winSymbols.length){eligible++;assert.equal(stage.noWinReward,probability?3:0);}else assert.equal(stage.noWinReward,0);ok(b.request('closeSpin',{spinId:spin.engine.spinId}));}assert.ok(eligible>0);}
});
await test('original C close flow routes a generated chest through native TreasuresView completion before settlement',async()=>{
 const b=new LocalGameBackend({...quietMath,features:false,scenario:'mystery-chest',random:rng(101),mysteryChest:{probability:0,multipliers:[5],weights:[1]}}),spin=ok(b.request('spin')),stage=spin.engine.gameState[0],before=b.state.balanceCents;
 const close=fn('CreateNewCloseSpinFlowCmd','createFlow',{App:{flowManager:{Flow}},_dependency8:{FlowIDs:{CLOSE_SPIN_FLOW:'close'}},_dependency3:{FlowTrigger:{CONCURRENT:'concurrent',AFTER_PREVIOUS:'after'}},_dependency7:{GameEvent:Event},_dependency5:{SlotFrameworkEvent:Event}}).call({data:{getData:()=>({gameState:stage,spinId:spin.engine.spinId}),setNewBigWinReach:()=>false,isOpenEarlyFlag:false}});
 const queue=close.steps.filter(step=>step instanceof Event);assert.deepEqual(queue.map(step=>step.name),['SHOW_TREASURE_VIEW','SEND_CLOSE_REQUEST']);
 let closed=0,animated=0;const treasury={totalWin:{node:{}},bbr:{active:false},data:{getData:()=>({gameState:stage,definition:{digital:2}})},playAnimation(){animated++;},onClose(){closed++;}};
 const show=fn('TreasuresView','showTreasureWin',{H:{SHOW_BIGWIN:1,BIGWIN_COMPLETED:4},App:{globalAudio:{pauseMusic(){},isMusicOn:true}}});
 const code=readFileSync(root+'/scripts/g1009-GameLogic.ts','utf8');let callback;traverse(parser.parse(code,{sourceType:'module'}),{CallExpression(path){const node=path.node;if(node.arguments[0]?.property?.name==='SHOW_TREASURE_VIEW')callback=node.arguments[1];}});assert.ok(callback);
 const dir=resolve(testsDir,'fixtures/extracted/chunks'),helperFile=readdirSync(dir).find(file=>file.includes('rollupPluginModLoBabelHelpers'));let registration;const helpers={};runInNewContext(readFileSync(resolve(dir,helperFile),'utf8'),{System:{register(...args){registration=args.at(-1);}}});registration((key,value)=>{if(typeof key==='object')Object.assign(helpers,key);else helpers[key]=value;return value;},{}).execute();
 const TreasureType={};treasury.showTreasureWin=complete=>show.call(treasury,complete);const App={uiManager:{async open(options){assert.equal(options.type,TreasureType);assert.equal(options.bundle,'g1009');return treasury;}},globalAudio:{pauseMusic(){}}};
 const nativeHandler=runInNewContext('('+generate(callback).code+')',{_dependency:helpers,_dependency19:{TreasuresView:TreasureType},_dependency3:{ViewZOrder:{UI:1}},t:{bundle:'g1009'},App});
 let presentationComplete=0;await nativeHandler({complete(){presentationComplete++;ok(b.request('closeSpin',{spinId:queue[1].data}));}});assert.equal(animated,1);assert.equal(b.state.balanceCents,before);assert.equal(presentationComplete,0);
 const values=[];fn('TreasuresView','playCoinSprayAndRunScore',{H:{SHOW_BIGWIN_NUMBER:2},_dependency7:{CmmSlotUtils:{tweenNum:config=>{assert.equal(config.end,5);return{};}}},_dependency2:{NodeEventType:{TOUCH_END:'touch'}},_dependency6:{SlotFrameworkEvent:Event},_dependency1:{GameEvent:Event},dispatch:(event,payload)=>values.push(payload.data.value)}).call({...treasury,tweenTime:8,alert:{once(){}},showCoinSpray(){}});assert.deepEqual(values,[5,5]);
 treasury.completedCB();assert.equal(presentationComplete,1);assert.equal(closed,1);assert.equal(b.state.balanceCents,before+500);ok(b.request('closeSpin',{spinId:spin.engine.spinId}));assert.equal(b.state.balanceCents,before+500);
});
console.log(JSON.stringify({project:'Project-C',passed:tests.length,installedGameMethods:true,nativeTreasureContractExecuted:true,guiOrRenderingVerified:false,originalRngRestored:false,originalRtpRestored:false}));
