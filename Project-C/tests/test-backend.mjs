import './verify-fixtures.mjs';
/** Offline Project-C core + captured parser checks. No browser/Creator/socket. */
import assert from 'node:assert/strict';
import { SourceTextModule, createContext, runInNewContext } from 'node:vm';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const testsDir=dirname(fileURLToPath(import.meta.url)), root=resolve(testsDir,'../assets/game/backend'), project=resolve(testsDir,'fixtures');
const context=createContext({console:{info(){},error(){},warn(){},log(){}},Math,Date,Map,Set,Promise,Error,JSON,Number,Array,Object,URLSearchParams});
const modules=new Map();
async function load(path){path=resolve(path);if(modules.has(path))return modules.get(path);assert.ok(path.startsWith(root+'/'));const module=new SourceTextModule(readFileSync(path,'utf8'),{context,identifier:path});modules.set(path,module);await module.link((name,ref)=>{assert.ok(name.startsWith('./'));return load(resolve(dirname(ref.identifier),name+'.ts'));});return module;}
const transport=await load(root+'/InstallLocalBackend.ts');await transport.evaluate();
const {installLocalBackend,selectLocalWalletKey,selectLocalScenario,selectLocalQuiet}=transport.namespace;
const {LocalGameBackend}=modules.get(root+'/LocalGameBackend.ts').namespace;
const {evaluateBoard}=modules.get(root+'/OrdinaryRules.ts').namespace;
const plain=x=>JSON.parse(JSON.stringify(x));
const rng=(seed=23)=>()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/2**32);
const memory=()=>{const values=new Map();return{values,getItem:key=>values.get(key)||null,setItem(key,value){if(this.fail)throw Error('Fixture write failure');values.set(key,value);}};};
const ok=response=>{assert.equal(response.status,200,JSON.stringify(response));return response;};
const tests=[];async function check(name,fn){await fn();tests.push(name);console.log('PASS '+name);}
const base={jackpotConfig:{triggerProbability:0},featureConfig:{multiplierChance:0,scatterChance:0,goldenScatterChance:0,totemChance:0,upgradeChance:0,lockChance:0,splitChance:0}};

// Execute captured System.register class/method bodies. Stubs replace engine
// lifecycle and transport only; GameData/ParseResponse/Stake/Config are original.
function captured(bucket,name,deps={},globals={}){
 const dir=resolve(project,'extracted',bucket), files=readdirSync(dir).filter(file=>file.includes('-'+name+'-'));
 assert.equal(files.length,1,'Unambiguous captured module '+bucket+'/'+name);
 let registration;const out={};const exported=(name,value)=>{if(typeof name==='object')Object.assign(out,name);else out[name]=value;return value;};
 runInNewContext(readFileSync(resolve(dir,files[0]),'utf8'),{console:{log(){},warn(){},error(){}},Log:{d(){},w(){},e(){}},System:{register(...args){registration=args.at(-1);}},...globals});
 const declaration=registration(exported,{});for(let i=0;i<(declaration.setters||[]).length;i++){const dependency=Object.values(deps)[i];assert.notEqual(dependency,undefined,'Missing stub '+name+' dependency '+i);declaration.setters[i](dependency);}declaration.execute();return out;
}
function parserHarness(){
 const registry=new Map(),events=[],slots={tempJpPools:{}},senderSettings=[];
 const App={dataCenter:{get(type){assert.ok(registry.has(type),'Registered captured model');return registry.get(type);}},senderManager:{get(){return{setting:value=>senderSettings.push(value)};}},serviceManager:{get(){return{};}},cache:{get(){throw Error('No fixture/static spin playback');}},gameAlert:{show(value){throw Error('Unexpected captured alert '+JSON.stringify(value));}},getLanguage:key=>key};
 let parser;
 const dispatch=(event,payload)=>{events.push({event,payload});if(event==='INIT_RESPONSE')parser.parseNewInit(payload);if(event==='SPIN_RESPONSE')parser.parseNewSpin(payload);};
 const globals={App,dispatch,window:{location:{search:''}}};
 const helpers=captured('chunks','rollupPluginModLoBabelHelpers',{},globals);
 const cc={cclegacy:{_RF:{push(){},pop(){}}},v3:(x=0,y=0,z=0)=>({x,y,z}),Vec3:class{constructor(x=0,y=0,z=0){Object.assign(this,{x,y,z});}},sys:{browserType:'fixture',browserVersion:'1',os:'fixture',osVersion:'1',osMainVersion:'1',platform:'fixture'}};
 const URL={getViewModeParam:()=> 'landscape'};
 const symbols=captured('g1009','GameSymbolID',{cc,URL:{default:URL}},globals);
 const types=captured('g1009','types',{cc},globals);
 function BaseModel(){this.data={};}BaseModel.prototype.getData=function(){return this.data;};BaseModel.prototype.setData=function(value){this.data=value;};
 const objectUtils={ObjectUtils:{clone:plain,diffObjects:(left,right)=>Object.fromEntries(Object.entries(right).filter(([key,value])=>left[key]!==value))}};
 const definition=captured('slotFramework','DefinitionModel',{helpers,cc,base:{BaseModel}},globals).default;
 const platform=captured('slotFramework','PlatformModel',{helpers,cc,base:{BaseModel},objectUtils},globals).default;
 const initial=captured('slotFramework','InitialModel',{helpers,cc,base:{BaseModel}},globals).default;
 const state=captured('slotFramework','GameStateModel',{helpers,cc,base:{BaseModel}},globals).default;
 const stake=captured('slotFramework','StakeModel',{helpers,cc,base:{BaseModel},objectUtils},globals).default;
 const settings={data:{advancedSettings:{turbo:false}},setData(value){this.data=value;},get turbo(){return this.data.advancedSettings.turbo;},set turbo(value){this.data.advancedSettings.turbo=value;}};
 let configActual;const config={getData:()=>configActual.getData(),get isTurbo(){return configActual.isTurbo;},setNewData:value=>configActual.setNewData(value)};
 const Event=new Proxy(function(){},{get:(_,key)=>String(key)});
 const auto={spinsRemaining:0,active:false};
 const Data=captured('g1009','GameData',{helpers,cc,URL:{default:URL},bundles:{EBundles:{g1009:'g1009'}},base:{GameDataBase:BaseModel},auto:{default:auto},stake:{default:stake},definition:{default:definition},platform:{default:platform},math:{default:{flattenArray:x=>x.flat()}},objectUtils,events:{GameEvent:Event},types,config:{default:config},symbols},globals).default;
 const data=new Data();data.module='g1009';registry.set(Data,data);data.init();
 configActual=captured('g1009','GameConfigModel',{helpers,cc,URL:{default:URL},base:{BaseModel},definition:{default:definition},settings:{default:settings},URLModel:{default:{getLanguageParam:()=> 'zh-tw'}},objectUtils,sender:{GameSender:{}},data:{default:Data}},globals).default;
 const replay={};
 parser=captured('g1009','ParseResponse',{helpers,cc,stake:{default:stake},config:{default:config},data:{default:Data},events:{GameEvent:Event},types,replay:{default:replay,EReplayMode:{}},definition:{default:definition}},globals).default;
 function SenderBase(){}SenderBase.prototype.setToken=function(value){this.lastToken=value.token;};SenderBase.prototype.showAlert=function(value){throw Error('Unexpected sender alert '+value);};
 const socketNames={SPIN:'spin',CLOSE_SPIN:'closeSpin',UPDATE_SETTINGS:'updateSettings'};
 const Sender=captured('g1009','GameSender',{helpers,cc,bundles:{EBundles:{}},server:{default:{mode:'online'},EServerMode:{STATIC:'static'}},utils:{CmmUtils:{getClientType:()=> 'web'}},http:{Http:{ServerStatus:{SUCCESS:200,ERROR_SPIN_ONE_MORE:201}}},events:{SlotFrameworkEvent:Event},service:{GameService:{}},types:{ESocketRequestName:socketNames,ESpinStatus:{IDLE:'idle'},EDebugLogLevel:{}},config:{ViewZOrder:{}},base:{GameSenderBase:SenderBase},definition:{default:definition},state:{default:state},initial:{default:initial},platform:{default:platform},settings:{default:settings},table:{default:{setData(){}}},socket:{default:{currentToken:'project-c-local'}},replay:{default:replay,EReplayMode:{}},URLUtils:{default:{GetAvatarUrl:()=>''}},data:{default:Data},gameConfig:{default:config},gameEvents:{GameEvent:Event},slot:{default:{}},view:{default:{}},log:{getKeyStyle:()=>'',KeyStyle:{}}},globals).GameSender;
 const sender=new Sender();sender.slotData=slots;
 return {data,Data,parser,Sender,sender,definition,platform,settings,stake,config:configActual,events,helpers,cc,App,registry,dispatch,globals,slots,Event,senderSettings,bind(backend){sender.send=(event,payload,callback)=>{const response=ok(backend.request(event,payload));callback?.(response);return response;};}};
}

await check('C image transcription names/payouts and engine response identity are independent',()=>{
 const b=new LocalGameBackend({...base,random:rng()});const first=ok(b.request('initial'));
 assert.equal(first.platform.game.gameId,'g1009');assert.equal(first.platform.game.name,'tiger-princess');assert.equal(first.platform.game.project,'Project-C');assert.equal(first.token,'project-c-local');assert.equal(b.storageKey,'project-c.creator.local-backend.v1');
 const table=modules.get(root+'/DisplayedPaytable.ts').namespace.displayedPaytable;assert.deepEqual(Array.from(table.symbols,s=>s.displayName),['斧','盾','酒','袋','黃','紅','紫','藍','綠']);
 const board=Array.from({length:5},(_,r)=>Array.from({length:6},(_,c)=>(r*6+c)%8+2));board[0]=Array(6).fill(1);board[1][0]=1;board[1][1]=1;
 assert.ok(evaluateBoard(board,20).wins.some(win=>win.symbol===1&&win.winnings===200));
 assert.equal(first.engine.definition.localReconstruction.originalRngRestored,false);
});
await check('wallet namespace and persisted identity cannot read or migrate A wallet',()=>{
 const storage=memory();storage.setItem('project-a.fixture-wallet.v1','untouched sentinel');
 assert.throws(()=>new LocalGameBackend({storage,storageKey:'project-a.fixture-wallet.v1'}),/own namespace/);
 const b=new LocalGameBackend({...base,storage,random:rng()});ok(b.request('spin',{requestId:'c-only'}));assert.equal(storage.getItem('project-a.fixture-wallet.v1'),'untouched sentinel');assert.equal(b.state.projectId,'Project-C');
 const broken=plain(b.state);broken.gameId='foreign-game';storage.setItem(b.storageKey,JSON.stringify(broken));assert.throws(()=>new LocalGameBackend({storage}),/Invalid stored wallet/);
});
await check('captured C GameSender initial invokes original C ParseResponse/GameData/Stake/Config successfully',async()=>{
 const h=parserHarness(),b=new LocalGameBackend({...base,random:rng(2)});h.bind(b);await h.sender.initial();
 assert.equal(h.data.data.parser.view1D.length,30);assert.equal(h.stake.numWinlines,20);assert.equal(h.stake.totalStake,1);assert.equal(h.config.getData().nextSpinDelay,.3);assert.equal(h.data.currentGameType,'mainGame');assert.equal(h.data.currSpinData.spinId,'project-c-initial');
 assert.ok(h.events.some(event=>event.event==='PARSER_INIT_COMPLETED'));
});
await check('captured C sender/parser consumes generated normal stages and settlement exactly once',async()=>{
 const storage=memory(),b=new LocalGameBackend({...base,features:false,storage,random:rng(3)}),h=parserHarness();h.bind(b);await h.sender.initial();
 await h.sender.spin({stakeIndex:0,ratioIndex:0,requestId:'ordinary'});assert.equal(h.data.currSpinIndex,0);assert.equal(b.state.balanceCents,999900);
 while(h.data.currSpinIndex+1<h.data.data.newGameState.length){h.data.setNextSpinData();assert.equal(h.data.data.parser.view1D.length,30);}
 const id=b.state.pending.id,expected=b.state.balanceCents+b.state.pending.awardCents;h.sender.closeSpin(id);assert.equal(b.state.balanceCents,expected);h.sender.closeSpin(id);assert.equal(b.state.balanceCents,expected);assert.ok(h.events.some(event=>event.event==='CLOSE_RESPONSE'));
});
await check('all three actual C buyFeature payloads receive object ACK then State[] without a second debit',async()=>{
 for(const index of [0,1,2]){const b=new LocalGameBackend({...base,initialBalance:100000,random:rng(31+index)}),h=parserHarness();h.bind(b);await h.sender.initial();const before=b.state.balanceCents;h.sender.buyFeature({stakeIndex:0,ratioIndex:0},null,index);const event=h.events.findLast(event=>event.event==='BUY_FEATURE_RESPONSE');assert.ok(event?.payload.data);assert.equal(before-b.state.balanceCents,[20000,50000,200000][index]);const after=b.state.balanceCents;await h.sender.spin({stakeIndex:0,ratioIndex:0},event.payload.data);assert.equal(b.state.balanceCents,after);assert.ok(h.data.data.newGameState.length>=3);assert.equal(h.data.data.parser.view1D.length,30);while(h.data.currSpinIndex+1<h.data.data.newGameState.length){h.data.setNextSpinData();assert.equal(h.data.data.parser.view1D.length,30);}assert.equal(h.data.currSpinData.winSymbols.length,0);h.sender.closeSpin(event.payload.data);assert.equal(b.state.pending,null);}
});
await check('generated C multiplier, split, lock and retrigger sequences pass every original GameData stage parser',async()=>{
 for(const [index,scenario]of ['multiplier','split','lock','free-retrigger'].entries()){
  const b=new LocalGameBackend({scenario,random:rng(61+index),initialBalance:100000,jackpotConfig:{triggerProbability:0}}),h=parserHarness();h.bind(b);await h.sender.initial();await h.sender.spin({requestId:scenario});let found=false;
  do{const stage=h.data.currSpinData;assert.equal(h.data.data.parser.view1D.length,30);if(scenario==='multiplier')found ||= stage.timesSymbols.length>0;if(scenario==='split')found ||= stage.splitList.length>0;if(scenario==='lock')found ||= stage.timesSymbols.some(ball=>ball.lock>0);if(scenario==='free-retrigger')found ||= stage.localExtraFreeRounds===5;if(h.data.currSpinIndex+1===h.data.data.newGameState.length)break;h.data.setNextSpinData();}while(true);assert.ok(found,scenario+' must actually be generated');
 }
});
await check('persisted cursor/round and retries preserve bankroll without drawing more random symbols',()=>{
 const storage=memory(),b=new LocalGameBackend({...base,storage,random:rng(7)});const ack=ok(b.request('spin',{action:'buyFeature',featureIndex:0,featureValue:'freeGame',requestId:'purchase'}));const before=plain(b.state);ok(b.request('progress',{spinId:ack.engine.spinId,currentView:2}));const balance=b.state.balanceCents;
 const resumed=new LocalGameBackend({...base,storage,random(){throw Error('Resume/retry must not generate');}});const initial=ok(resumed.request('initial'));assert.equal(initial.localResumeIndex,2);assert.deepEqual(plain(initial.engine.gameState),before.pending.stages);assert.deepEqual(plain(resumed.request('spin',{requestId:'purchase'})),plain(ack));assert.equal(resumed.state.balanceCents,balance);const settled=ok(resumed.request('closeSpin',{spinId:ack.engine.spinId}));assert.deepEqual(plain(resumed.request('closeSpin',{spinId:ack.engine.spinId})),plain(settled));
});
await check('unmodified captured C parser baseline demonstrates the installed resume hook necessity',()=>{
 const b=new LocalGameBackend({...base,random:rng(5)});const ack=ok(b.request('spin',{action:'buyFeature',featureIndex:0,featureValue:'freeGame'}));ok(b.request('progress',{spinId:ack.engine.spinId,currentView:2}));const response=ok(b.request('initial')),h=parserHarness();h.definition.setData(response.engine.definition);h.parser.parseNewInit(response);assert.equal(response.localResumeIndex,2);assert.equal(h.data.currSpinIndex,0,'Unmodified C parseNewInit resets cursor to zero: bootstrap hook is still required');
});
await check('C JP count/tier/actual stage fields and close idempotency remain consistent',()=>{
 for(const [index,tier]of ['mini','minor','major','grand'].entries()){const b=new LocalGameBackend({...base,scenario:'jackpot-'+tier,random:rng(80+index)});const spin=ok(b.request('spin'));const stage=spin.engine.gameState.find(stage=>stage.isJp);assert.ok(stage);assert.equal(stage.isJp,'jp-'+tier);assert.equal(stage.view.flat().filter(symbol=>symbol===14).length,index+2);assert.ok(stage.jpWinnings>0);const before=b.state.balanceCents,award=b.state.pending.awardCents;ok(b.request('closeSpin',{spinId:spin.engine.spinId}));assert.equal(b.state.balanceCents,before+award);ok(b.request('closeSpin',{spinId:spin.engine.spinId}));assert.equal(b.state.balanceCents,before+award);}
});
await check('transport emits C original notify jackpot shape before initial callback and honors development mute',async()=>{
 const h=parserHarness(),events=[];function ServiceBase(){}ServiceBase.prototype.init=function(){this._client={};};ServiceBase.prototype.onOpen=function(){this.addSocketListeners();};ServiceBase.prototype.on=function(name,callback){this._client.on(name,callback);};
 const notifyTypes={BALANCE:'balance',JACKPOT_UPDATE:'jackpotUpdate',SYSTEM:'system'};const slotModel={};h.registry.set(slotModel,h.slots);
 const Service=captured('g1009','GameService',{helpers:h.helpers,cc:h.cc,notify:{ENotifyTypes:notifyTypes},slot:{default:slotModel},events:{SlotFrameworkEvent:h.Event},base:{GameServiceBase:ServiceBase},data:{default:h.Data},platform:{default:h.platform}},h.globals).GameService;
 const runtime=installLocalBackend(ServiceBase,{...base,random:rng(19),search:'?reaDevelopmentMute=1'});const service=new Service();service.init();await service.connect();await service.socketIOMessage('initial',{},response=>{events.push('callback');assert.equal(response.platform.player.settings.advancedSettings.sounds.background,false);assert.ok(h.slots.tempJpPools['jp-mini']>=0);});assert.equal(events[0],'callback');assert.ok(h.events.some(event=>event.event==='NOTIFY_JACKPOT_RESPONSE'));assert.equal(runtime.storageKey,'project-c.creator.local-backend.v1');assert.equal(context.ProjectCCreatorLocalBackend,runtime);
 assert.equal(selectLocalQuiet(''),false);assert.equal(selectLocalQuiet('?reaDevelopmentMute=1'),true);assert.equal(ok(new LocalGameBackend({...base,random:rng()}).request('initial')).platform.player.settings.advancedSettings.sounds.backgroundVolume,1);
});
await check('debug scenarios require a named Project-C wallet and never alter normal namespace',()=>{
 assert.equal(selectLocalWalletKey('?reaTestWallet=qa'),'project-c.creator.local-backend.v1');assert.equal(selectLocalScenario('?reaScenario=split&reaDebug=1'),'');assert.equal(selectLocalWalletKey('?reaTestWallet=qa&reaDebug=1'),'project-c.creator.local-backend.v1.test.qa');assert.equal(selectLocalScenario('?reaScenario=split&reaDebug=1&reaTestWallet=qa'),'split');assert.throws(()=>selectLocalWalletKey('','another-project.wallet'),/own wallet namespace/);
});
await check('generation/storage failures and malformed operations never debit or overwrite a committed C wallet',()=>{
 const storage=memory(),b=new LocalGameBackend({...base,features:false,storage,random:rng()});ok(b.request('spin',{requestId:'saved'}));const before=plain(b.state);for(const payload of [{stakeIndex:-1},{spinId:'unknown'},{action:'freeSpin'}]){assert.equal(b.request('spin',payload).status,400);assert.deepEqual(plain(b.state),before);}storage.fail=true;assert.equal(b.request('closeSpin',{spinId:b.state.pending.id}).status,400);assert.deepEqual(plain(b.state),before);
 const pathological=new LocalGameBackend({...base,features:false,random:()=>0,maxCascades:1});const original=plain(pathological.state);assert.equal(pathological.request('spin').status,400);assert.deepEqual(plain(pathological.state),original);
});
console.log(JSON.stringify({project:'Project-C',passed:tests.length,originalParserExecuted:true,creatorRuntimeVerified:false,originalRngRestored:false,originalRtpRestored:false,capturedUnmodifiedConsumerBaseline:true,installedHooksVerifiedBy:'test-game-hooks.mjs'}));
