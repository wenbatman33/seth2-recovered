// @ts-nocheck
/** Project-E own simulated backend; no original server/RNG/RTP claim.
 * Transaction fields were checked against D GameSender/GameData/ParseResponse.
 * No imports from another recovered game's backend or captured spin fixtures. */
import {generateRound,localConfiguration} from './Rules';
import {displayedRules} from './DisplayedRules';
const copy=v=>JSON.parse(JSON.stringify(v)),cents=v=>Math.round(Number(v)*100),money=v=>v/100;
export class BackendError extends Error {constructor(code,message){super(message);this.code=code;}}
function guard(b,code,message){if(b)throw new BackendError(code,message);}
const settingsDefault=()=>({stakeIndex:0,ratioIndex:0,advancedSettings:{sounds:{background:true,effect:true,backgroundVolume:1,effectVolume:1},turbo:false,notify:false},autoPlay:{numberOfPlays:[10,20,50,100,-1],stopOnWinMultiplier:false,stopOnWinMultiplierValue:20,stopOnBalance:false,stopOnBalanceValue:0,stopOnFreeSpin:true,stopOnJackpot:true}});
export class LocalGameBackend {
 constructor(options={}){
  this.options=options;this.storage=options.storage??null;this.storageKey=options.storageKey||'project-e.local-simulation.v1';if(!/^project-e\.local-simulation\.v1(?:\.test\.[A-Za-z0-9][A-Za-z0-9_-]{0,47})?$/.test(this.storageKey))throw new BackendError('INVALID_WALLET_NAMESPACE','Only an independent Project-E wallet namespace is allowed');this.clock=options.clock||Date.now;this.random=options.random||Math.random;
  this.stakes=options.stakeValues||[.05,.1,.2,.5,1,2,5];this.ratios=options.ratioValues||[1,2,5,10];this.config=localConfiguration(options.ruleConfig||{});
  guard(!this.stakes.length||!this.ratios.length||[...this.stakes,...this.ratios].some(v=>!Number.isFinite(v)||v<=0),'INVALID_CONFIGURATION','Positive stake/ratio choices required');
  const saved=this.storage?.getItem(this.storageKey);
  if(saved){try{this.state=JSON.parse(saved);}catch{throw new BackendError('CORRUPT_WALLET','Invalid saved Project-E wallet; refusing to reset it silently');}}
  else this.state={version:1,project:'Project-E',balanceCents:cents(options.initialBalance??10000),sequence:0,updatedAt:0,settings:settingsDefault(),pending:null,completed:{},requests:{},records:[],qaConsumed:false};
  this.validate(this.state);this.audit=[];
 }
 validate(s){guard(!s||s.version!==1||s.project!=='Project-E'||!Number.isSafeInteger(s.balanceCents)||s.balanceCents<0||!Number.isSafeInteger(s.sequence)||s.sequence<0||!s.settings||!s.completed||!s.requests||!Array.isArray(s.records),'CORRUPT_WALLET','Project-E wallet schema invalid');
  if(s.pending)guard(typeof s.pending.id!=='string'||!Array.isArray(s.pending.stages)||!s.pending.stages.length||!Number.isSafeInteger(s.pending.awardCents)||s.pending.awardCents<0||!Number.isInteger(s.pending.currentView)||s.pending.currentView<0||s.pending.currentView>=s.pending.stages.length,'CORRUPT_WALLET','Project-E pending operation invalid');
 }
 commit(next){this.validate(next);if(next.updatedAt<=this.state.updatedAt)next.updatedAt=Math.max((this.state.updatedAt||0)+1,this.clock());if(this.storage)this.storage.setItem(this.storageKey,JSON.stringify(next));this.state=next;}
 stake(p={}){const stakeIndex=p.stakeIndex??this.state.settings.stakeIndex,ratioIndex=p.ratioIndex??this.state.settings.ratioIndex;
  guard(!Number.isInteger(stakeIndex)||!Number.isInteger(ratioIndex)||!(stakeIndex in this.stakes)||!(ratioIndex in this.ratios),'INVALID_STAKE_INDEX','Unknown stake or ratio index');
  for(const [k,v]of [['stakeValue',this.stakes[stakeIndex]],['ratioValue',this.ratios[ratioIndex]]])guard(p[k]!=null&&p[k]!==v,'STAKE_MISMATCH',k+' does not match index');
  const totalCents=cents(this.stakes[stakeIndex]*this.ratios[ratioIndex]*40);guard(!Number.isSafeInteger(totalCents)||totalCents<=0,'INVALID_STAKE','Positive cent stake required');return{stakeIndex,ratioIndex,totalCents};
 }
 definition(){return{digital:2,viewDefs:{type:'grid',view:Array.from({length:4},(_,r)=>Array.from({length:5},(_,c)=>r*5+c))},symbolDefs:[...displayedRules.symbols.map(s=>({symbol:s.id,isWild:s.id===1,payoutFactor:copy(s.odds)})),{symbol:9,isWild:false},{symbol:10,isWild:false}],winlineDefs:displayedRules.paylines.map((rows,order)=>({order:String(order),line:rows.map((row,col)=>row*5+col)})),winOddsTypes:{win:20,bigWin:20,superWin:50,megaWin:100,ultraWin:500,legendaryWin:2000},autoConfirmTime:1.5,autoSpinInterval:.3,prizeAutoNextDelay:3,smallPrizeDelay:0,bigPrizeDelay:1.2,extraFgRounds:5,buyFeature:[{...displayedRules.localPurchase}],isDemo:true,isLuckyMoment:false,jpDefs:copy(this.config.poolAmounts),localSimulation:{project:'Project-E',originalRngRestored:false,originalRtpRestored:false,boardEvidence:copy(displayedRules.evidence),payoutSource:'Project-E original rules_01/02/03/04/06/07 PNGs; four-row original prefab',probabilitySource:'own configurable simulation',ruleConfig:copy(this.config),unsupported:copy(displayedRules.unsupported),unknown:copy(displayedRules.unknown),selfDefined:['symbol distribution and feature frequency','own Lucky Moment frequency, FG uplift and optional native-asset transform bridge','local purchase availability and 100x price','fixed jackpot pools','stake/ratio menus','presentation timings','cent rounding','100 free-round safety cap']}};}
 platform(state=this.state){return{game:{name:'new-vampire-hunter',gn:'new-vampire-hunter',gameId:'g1012',stakeValues:copy(this.stakes),ratioValues:copy(this.ratios),stakeList:[]},player:{name:'Local Player',id:'project-e-local-player',uid:'project-e-local-player',avatar:0,avatarUrl:'',displayName:'Local Player',displayNameBlockTime:null,nameDisplayOn:true,balance:{currency:'TWD',amount:money(state.balanceCents),gemAmount:0,betAmount:0,updatedAt:state.updatedAt},settings:copy(state.settings),clientSettings:{}},gemSystem:false,table:{roomId:'project-e-local',number:1,status:'Empty',detail:{},lock:false},slotTablesOn:false,tables:[],slotTableUpdated:false,jackpotOn:true,avatars:[],theme:'',isInstantClose:false,slotRankOn:false,disableRotate:false,disablePromotions:true,hideUserInfo:false,betRecordUrl:'',tableMeta:{currentPage:1,tablePerPage:1,totalPages:1,totalTableCount:1}};}
 response(extra={},state=this.state){const platform=this.platform(state);if(this.options.quiet)platform.player.settings.advancedSettings.sounds={background:false,effect:false,backgroundVolume:0,effectVolume:0};return{status:200,message:'Project-E own simulated backend',token:'project-e-local-'+state.sequence,localBackend:true,eventName:extra.eventName||'',...extra,platform};}
 jackpotNotification(){return {type:'jackpotUpdate',data:copy(this.config.poolAmounts),localBackend:true};}
 idleStage(){return{action:'spin',view:Array.from({length:4},()=>[2,3,4,5,6]),spinId:'project-e-initial',currentView:0,totalViews:1,totalStake:money(this.stake().totalCents),winSymbols:[],transformInfo:{toSymbol:[],toWild:[]},currentTimes:1,multiple:1,numFreeSpins:0,freeSpinWon:0,selectFgMultiple:4,freeTimesDenominator:1,startFreeGame:false,totalWinnings:0,currentWinnings:0,roundWinnings:0,isJp:'',fullCombo:false,localRules:true};}
 initial(){const p=this.state.pending,definition=this.definition();definition.isLuckyMoment=!!p?.stages[p.currentView||0]?.isLuckyMoment;return this.response({eventName:'initial',isResuming:!!p,localResumeIndex:p?.currentView||0,engine:{definition,spinId:p?.id||'project-e-initial',gameState:p?copy(p.stages):[this.idleStage()]}});}
 ack(p,state=this.state){return this.response({eventName:'spin',purchased:true,cost:money(p.costCents),engine:{spinId:p.id,gameState:{spinId:p.id}}},state);}
 pendingResponse(p=this.state.pending){return this.response({eventName:'spin',engine:{spinId:p.id,luckyMoment:!!p.stages[p.currentView||0]?.isLuckyMoment,isLuckyMoment:!!p.stages[p.currentView||0]?.isLuckyMoment,gameState:copy(p.stages)},featureSummary:copy(p.summary)});}
 spin(p={}){
  guard(p.test!=null||p.cheat!=null||(p.action!=null&&!['spin','buyFeature'].includes(p.action)),'UNSUPPORTED_REQUEST','Original cheats and caller-selected feature phases are unsupported');
  const purchase=p.action==='buyFeature',key=p.requestId||p.operationId||(typeof p.forceClose==='string'?'early:'+p.forceClose:null);
  guard(key!=null&&(typeof key!=='string'||key.length>128||['__proto__','constructor','prototype'].includes(key)),'INVALID_REQUEST_ID','Invalid idempotency key');
  if(key&&Object.hasOwn(this.state.requests,key))return copy(this.state.requests[key]);
  const stake=this.stake(p);if(purchase)guard(p.featureIndex!==0||p.featureValue!=='freeGame','INVALID_FEATURE','Project-E local purchase only exposes featureIndex0/freeGame; original purchase price is unknown');
  let previous=null;
  if(this.state.pending){const pending=this.state.pending;
   if(p.forceClose){guard(p.forceClose!==pending.id||purchase||pending.purchase||pending.stages.some(s=>s.action!=='spin'||s.startFreeGame),'FEATURE_PENDING','Early spin may only close the matching ordinary operation');previous=pending;}
   else if(purchase&&pending.purchase&&pending.stakeCents===stake.totalCents)return this.ack(pending);
   else if(!purchase&&p.spinId===pending.id)return this.pendingResponse(pending);
   else{guard(purchase||p.spinId||key||stake.totalCents!==pending.stakeCents,'PENDING_ROUND','Finish the current Project-E operation');return this.pendingResponse(pending);}
  }else guard(!!p.spinId||!!p.forceClose,'UNKNOWN_SPIN','Continuation does not match a pending operation');
  const costCents=stake.totalCents*(purchase?100:1);guard(!Number.isSafeInteger(costCents)||this.state.balanceCents+(previous?.awardCents||0)<costCents,'INSUFFICIENT_BALANCE','Insufficient simulated balance');
  const qa=!this.state.qaConsumed&&this.options.qaScenario||'';
  // Entire generation/validation precedes the only debit commit.
  const generated=generateRound({totalBet:money(stake.totalCents),random:this.random,config:this.config,buyFeature:purchase,qaScenario:qa});
  const next=copy(this.state);if(previous){next.balanceCents+=previous.awardCents;next.records.unshift({spinId:previous.id,totalStake:money(previous.costCents),winnings:money(previous.awardCents),generated:true});next.completed[previous.id]={settled:true};}
  const id='project-e-local-'+(++next.sequence),stages=generated.stages.map(s=>({...copy(s),spinId:id}));next.balanceCents-=costCents;next.settings.stakeIndex=stake.stakeIndex;next.settings.ratioIndex=stake.ratioIndex;
  next.pending={id,currentView:0,stakeCents:stake.totalCents,costCents,awardCents:cents(generated.totalWinnings),purchase,stages,summary:generated.summary};if(qa)next.qaConsumed=true;
  // Debit, generated chain and idempotency response are one storage commit.
  next.updatedAt=Math.max(this.state.updatedAt+1,this.clock());
  const response=purchase?this.ack(next.pending,next):this.response({eventName:'spin',engine:{spinId:id,luckyMoment:!!stages[0]?.isLuckyMoment,isLuckyMoment:!!stages[0]?.isLuckyMoment,gameState:copy(stages)},featureSummary:copy(generated.summary)},next);
  if(key)next.requests[key]=copy(response);
  this.commit(next);
  this.audit.push({event:'spin',spinId:id,stake:money(costCents),winnings:generated.totalWinnings,localBackend:true});return copy(response);
 }
 progress(p={}){const pending=this.state.pending;guard(!pending||p.spinId!==pending.id,'UNKNOWN_SPIN','Progress must match pending spin');guard(!Number.isInteger(p.currentView)||p.currentView<pending.currentView||p.currentView>=pending.stages.length,'INVALID_PROGRESS','Progress must advance to an existing stage');if(p.currentView!==pending.currentView){const next=copy(this.state);next.pending.currentView=p.currentView;this.commit(next);}return this.response({eventName:'progress',spinId:pending.id,currentView:p.currentView});}
 closeSpin(p={}){const id=p.spinId;guard(typeof id!=='string'||!id,'MISSING_SPIN_ID','closeSpin requires spinId');if(Object.hasOwn(this.state.completed,id))return this.response({eventName:'closeSpin',settled:true,alreadySettled:true,engine:{spinId:id}});
  guard(!this.state.pending||this.state.pending.id!==id,'UNKNOWN_SPIN','No matching Project-E operation');guard(this.state.pending.stages.length>1&&this.state.pending.currentView!==this.state.pending.stages.length-1,'FEATURE_PENDING','Original feature presentation must reach its terminal stage before settlement');const next=copy(this.state),pending=next.pending;next.balanceCents+=pending.awardCents;next.pending=null;next.completed[id]={settled:true};next.records.unshift({spinId:id,totalStake:money(pending.costCents),winnings:money(pending.awardCents),generated:true});next.records=next.records.slice(0,200);this.commit(next);this.audit.push({event:'closeSpin',spinId:id,award:money(pending.awardCents)});return this.response({eventName:'closeSpin',settled:true,engine:{spinId:id,gameState:copy(pending.stages)}});
 }
 updateSettings(p={}){const patch=p.data||p.settings||{},next=copy(this.state);guard(!patch||typeof patch!=='object'||Array.isArray(patch),'INVALID_SETTINGS','Settings patch must be an object');
  const target=p.type==='game'?next.settings.advancedSettings:['sound','sounds'].includes(p.type)?next.settings.advancedSettings.sounds:p.type==='autoPlay'?next.settings.autoPlay:next.settings;
  function merge(dst,src){for(const key of Object.keys(src)){guard(['__proto__','constructor','prototype'].includes(key),'INVALID_SETTINGS','Unsafe setting key');guard(!Object.hasOwn(dst,key),'INVALID_SETTINGS','Unknown setting '+key);const v=src[key];if(v&&typeof v==='object'&&!Array.isArray(v)){guard(!dst[key]||typeof dst[key]!=='object','INVALID_SETTINGS','Invalid nested setting');merge(dst[key],v);}else{guard(typeof v!==typeof dst[key]&&!Array.isArray(dst[key]),'INVALID_SETTINGS','Setting type mismatch');dst[key]=copy(v);}}}
  merge(target,patch);for(const name of ['backgroundVolume','effectVolume'])guard(!Number.isFinite(next.settings.advancedSettings.sounds[name])||next.settings.advancedSettings.sounds[name]<0||next.settings.advancedSettings.sounds[name]>1,'INVALID_SETTINGS','Volume must be0..1');
  this.stake({stakeIndex:next.settings.stakeIndex,ratioIndex:next.settings.ratioIndex});this.commit(next);return this.response({eventName:'updateSettings'});
 }
 request(event,p={}){try{switch(event){case'initial':return this.initial();case'spin':return this.spin(p);case'closeSpin':return this.closeSpin(p);case'progress':return this.progress(p);case'updateSettings':return this.updateSettings(p);case'echo':case'extension':return this.response({eventName:event});case'getBetRecords':return this.response({eventName:event,data:{records:copy(this.state.records),total:this.state.records.length}});default:throw new BackendError('UNSUPPORTED_FEATURE','Project-E simulation does not implement '+event);}}catch(e){return{status:400,code:e.code||'LOCAL_RULE_ERROR',message:e.message,localBackend:true};}}
}
