// @ts-nocheck
/** Project-I OWN bonus simulation; original RNG, RTP and award distributions are
 * unknown. Native bonusType/action/field names were checked against I consumers.
 * Pure clone transformations only: no wallet, debit, network, timers or UI.
 * Both exports return {bonusState, awardCents}; awardCents is an incremental
 * pending-round award delta, never an instruction to immediately credit cash.
 */
const clone=v=>JSON.parse(JSON.stringify(v)),money=c=>c/100;
function fail(condition,code,message){if(condition){const error=new Error(message);error.code=code;throw error;}}
function randomValue(random){const n=random();fail(!Number.isFinite(n)||n<0||n>=1,'INVALID_RNG','Bonus random source must return [0,1)');return n;}
function choose(list,random){return list[Math.floor(randomValue(random)*list.length)];}
function positiveCents(value){const n=Math.round(Number(value)*100);fail(!Number.isSafeInteger(n)||n<=0,'INVALID_STAKE','A positive total stake in currency units is required');return n;}
function stakeCents(stake){if(stake&&typeof stake==='object'){if(Number.isSafeInteger(stake.totalCents)&&stake.totalCents>0)return stake.totalCents;return positiveCents(stake.totalStake);}return positiveCents(stake);}
function centsAt(stake,factor){const n=Math.round(stake*factor);fail(!Number.isSafeInteger(n)||n<0,'INVALID_AWARD','Bonus award exceeds safe cents');return n;}
function configuration(input={}){
 const c={id:input.spinId||input.id||'project-i-local-bonus',materialMultipliers:[2,3,4,5,8,10,12,20],gambleWinChance:.6,maxGambles:3,fortuneCount:12,fortuneMultipliers:[.5,1,2,3,5,10],luckyMultipliers:[5,10,20,50],poolAmounts:{'jp-mini':200,'jp-minor':1000,'jp-major':10000,'jp-grand':100000},...clone(input)};
 fail(typeof c.id!=='string'||!/^[A-Za-z0-9][A-Za-z0-9_.-]{0,119}$/.test(c.id),'INVALID_BONUS_ID','Use the local round id for bonus token namespace');
 for(const [name,min]of [['materialMultipliers',1],['fortuneMultipliers',1],['luckyMultipliers',1]])fail(!Array.isArray(c[name])||c[name].length<min||c[name].some(n=>!Number.isFinite(n)||n<=0),'INVALID_CONFIG','Positive '+name+' required');
 fail(c.materialMultipliers.length!==8||c.maxGambles!==3||!Number.isInteger(c.fortuneCount)||c.fortuneCount<1||c.fortuneCount>60||!Number.isFinite(c.gambleWinChance)||c.gambleWinChance<0||c.gambleWinChance>1,'INVALID_CONFIG','Invalid native-shaped bonus configuration');
 for(const tier of ['jp-mini','jp-minor','jp-major','jp-grand'])fail(!Number.isFinite(c.poolAmounts[tier])||c.poolAmounts[tier]<=0,'INVALID_CONFIG','All four positive local jackpot pools required');return c;
}
function publicSnapshot(state){const out=clone(state);delete out._local;return out;}
function safeId(value){return typeof value==='string'&&value.length>0&&value.length<=160&&!['__proto__','constructor','prototype'].includes(value);}
function signature(payload){return JSON.stringify([payload.bonusType,payload.action,payload.actionValue,payload.bonusType==='fortuneLanding'?payload.token??null:null,payload.spinId??null]);}
function actionKey(state,payload){
 const supplied=payload.operationId??payload.requestId??payload.localActionId;
 if(supplied!=null){fail(!safeId(supplied),'INVALID_ACTION_ID','Invalid local logical action id');return 'id:'+supplied;}
 if(state.bonusType==='jpGame'&&payload.action==='collect')return 'jp-position:'+payload.actionValue;
 if(state.bonusType==='fortuneLanding'&&payload.action==='collect')return 'fortune-token:'+payload.token;
 if(payload.action==='finish'||state.bonusType==='elixirFurnace'&&payload.action==='gamble'&&payload.actionValue===false)return 'finish:'+payload.action;
 fail(true,'ACTION_ID_REQUIRED','Native repeated purify/gamble payloads require localActionId/requestId from the owned transport');
}
function cache(state,key,payload,delta){
 fail(Object.keys(state._local.responses).length>=256,'ACTION_LIMIT','Bonus logical-action cache limit reached');
 state._local.revision++;state._local.responses[key]={signature:signature(payload),response:publicSnapshot(state),awardCents:delta};return {bonusState:state,awardCents:delta,replayed:false};
}
function finish(state,cents){state.isFinish=true;state.totalWinnings=money(cents);state._local.awardIssued=true;return cents;}
function gambleResults(base){
 // Nineteen entries satisfy both original PushGame (ten initial balls and loss
 // sentinel index18) and MultipReelsController (outcome has a following entry).
 const results=[{times:0,level:0}];for(const factor of [.25,.5,1,2,4,8])for(let n=0;n<3;n++)results.push({times:base*factor,level:factor<=1?0:factor<=4?1:2});return results;
}
export function createBonusState(type,{stake,random=Math.random,config={}}={}){
 const cents=stakeCents(stake),c=configuration(config),state={isBonus:true,isFinish:false,bonusType:type,action:'collect',totalWinnings:0,localBonusSimulation:true,_local:{version:1,project:'Project-I',id:c.id,stakeCents:cents,revision:0,responses:{},config:c,awardIssued:false}};let awardCents=0;
 switch(type){
  case'elixirFurnace':Object.assign(state,{action:'purify',actionValues:[1,2,3,4,5,6,7,8],purifyValues:[],localSelectedMaterials:[],purifyTimes:0,gambleTimes:null,restOfGamble:3,biggest:Array.from(c.materialMultipliers).sort((a,b)=>b-a).slice(0,4).reduce((a,b)=>a+b,0)*8});state._local.selectedMaterials=[];state._local.candidateTimes=0;break;
  case'jpGame':{
   const deck=['jp-mini','jp-minor','jp-major','jp-grand'].flatMap(tier=>[tier,tier,tier]);for(let i=deck.length-1;i>0;i--){const j=Math.floor(randomValue(random)*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
   Object.assign(state,{pickPositions:[],actionValues:Array.from({length:12},(_,i)=>i)});state._local.deck=deck;break;
  }
  case'fortuneLanding':{
   const options=Array.from({length:c.fortuneCount},(_,i)=>({token:'project-i-'+c.id+'-treasure-'+i,amount:money(centsAt(cents,choose(c.fortuneMultipliers,random)))}));Object.assign(state,{actionOptions:options,actionValues:options.map(o=>o.amount),collectValues:[]});state._local.originalOptions=clone(options);state._local.collectedTokens=[];break;
  }
  case'luckyWealth':awardCents=centsAt(cents,choose(c.luckyMultipliers,random));Object.assign(state,{action:'finish',prize:money(awardCents)});finish(state,awardCents);break;
  default:fail(true,'UNKNOWN_BONUS','Unknown native I bonus type '+type);
 }
 return {bonusState:state,awardCents};
}
export function advanceBonus(bonusState,payload,{stake,random=Math.random}={}){
 fail(!bonusState?._local||bonusState._local.version!==1||bonusState._local.project!=='Project-I','INVALID_BONUS_STATE','Expected an owned Project-I bonus snapshot');
 fail(!payload||typeof payload!=='object'||Array.isArray(payload)||payload.bonusType!==bonusState.bonusType,'INVALID_BONUS_REQUEST','bonusType must match pending local bonus');
 const state=clone(bonusState),local=state._local,c=local.config;
 if(stake!=null)fail(stakeCents(stake)!==local.stakeCents,'STAKE_MISMATCH','Bonus continuation cannot alter the locked round stake');
 if(payload.spinId!=null&&c.spinId!=null)fail(payload.spinId!==c.spinId,'SPIN_MISMATCH','Bonus continuation must match local round id');
 const key=actionKey(state,payload),prior=local.responses[key];
 if(prior){fail(prior.signature!==signature(payload),'ACTION_ID_CONFLICT','Logical action id reused with different contents');return{bonusState:state,awardCents:0,replayed:true,cachedResponse:clone(prior.response)};}
 if(state.bonusType==='jpGame'&&payload.action==='collect'&&state.pickPositions.some(p=>p.position===payload.actionValue))return cache(state,key,payload,0);
 if(state.bonusType==='fortuneLanding'&&payload.action==='collect'&&local.collectedTokens.includes(payload.token)){
  const option=local.originalOptions.find(o=>o.token===payload.token);fail(typeof payload.actionValue!=='number'||Math.round(payload.actionValue*100)!==Math.round(option.amount*100),'TREASURE_AMOUNT_MISMATCH','Treasure amount does not match its token');return cache(state,key,payload,0);
 }
 if(state.bonusType==='elixirFurnace'&&state.isFinish&&payload.action==='gamble'&&payload.actionValue===false)return cache(state,key,payload,0);
 if(state.isFinish){fail(payload.action!=='finish','BONUS_FINISHED','This bonus has already finished');return cache(state,key,payload,0);}
 let awardCents=0;
 switch(state.bonusType){
  case'elixirFurnace':{
   if(payload.action==='purify'){
    fail(state.action!=='purify','INVALID_PHASE','Four materials were already selected');const item=payload.actionValue;
    fail(!Number.isInteger(item)||item<1||item>8,'INVALID_MATERIAL','Material actionValue must be1..8');fail(local.selectedMaterials.includes(item),'DUPLICATE_MATERIAL','Four distinct materials are required by displayed rules');
    local.selectedMaterials.push(item);state.localSelectedMaterials=Array.from(local.selectedMaterials);const times=c.materialMultipliers[item-1];state.purifyValues.push(times);state.purifyTimes+=times;state.actionValue=item;local.candidateTimes=state.purifyTimes;
    if(local.selectedMaterials.length===4){state.action='gamble';state.actionValues=[true,false];state.biggest=state.purifyTimes*8;}
   }else if(payload.action==='gamble'){
    fail(state.action!=='gamble'||local.selectedMaterials.length!==4,'INVALID_PHASE','Finish four purify choices first');fail(typeof payload.actionValue!=='boolean','INVALID_GAMBLE','Native gamble actionValue must be boolean');state.actionValue=payload.actionValue;
    if(payload.actionValue===false){state.gambleTimes=local.candidateTimes;awardCents=finish(state,centsAt(local.stakeCents,local.candidateTimes));}
    else{
     fail(state.restOfGamble<=0,'INVALID_PHASE','No gamble attempts remain');state.restOfGamble--;state.gambleResults=gambleResults(state.purifyTimes);
     if(randomValue(random)<c.gambleWinChance){local.candidateTimes*=2;state.gambleTimes=local.candidateTimes;state.totalWinnings=money(centsAt(local.stakeCents,local.candidateTimes));if(state.restOfGamble===0)awardCents=finish(state,centsAt(local.stakeCents,local.candidateTimes));}
     else{local.candidateTimes=0;state.gambleTimes=0;finish(state,0);}
    }
   }else fail(true,'INVALID_ACTION','Elixir uses purify or gamble(true/false), never a foreign feature action');break;
  }
  case'jpGame':{
   fail(payload.action!=='collect','BONUS_NOT_FINISHED','JP finishes automatically after a three-symbol match');const position=payload.actionValue;fail(!Number.isInteger(position)||position<0||position>=12,'INVALID_POSITION','JP actionValue must be0..11');
   const category=local.deck[position];state.pickPositions.push({position,category});state.actionValue=position;
   if(state.pickPositions.filter(p=>p.category===category).length===3){state.prize=c.poolAmounts[category];state.category=category;awardCents=finish(state,positiveCents(state.prize));}break;
  }
  case'fortuneLanding':{
   if(payload.action==='collect'){
    const option=local.originalOptions.find(o=>o.token===payload.token);fail(!option,'INVALID_TREASURE_TOKEN','Use the exact locally issued treasure token');fail(typeof payload.actionValue!=='number'||Math.round(payload.actionValue*100)!==Math.round(option.amount*100),'TREASURE_AMOUNT_MISMATCH','Treasure amount does not match its token');
    if(local.collectedTokens.includes(payload.token))return cache(state,key,payload,0);
    local.collectedTokens.push(option.token);state.collectValues.push(option.amount);state.actionValue=option.amount;state.totalWinnings=money(Math.round(state.totalWinnings*100)+Math.round(option.amount*100));state.actionOptions=state.actionOptions.filter(o=>o.token!==option.token);awardCents=Math.round(option.amount*100);
   }else if(payload.action==='finish'){state.action='finish';state.isFinish=true;state.actionOptions=[];local.awardIssued=true;}
   else fail(true,'INVALID_ACTION','Fortune Landing supports collect or finish');break;
  }
  case'luckyWealth':fail(true,'BONUS_FINISHED','Lucky Wealth is presented then settled through native closeSpin');break;
  default:fail(true,'UNKNOWN_BONUS','Unknown local bonus');
 }
 return cache(state,key,payload,awardCents);
}

/** UI reads the same owned pool configuration used by bonus settlement.
 * These are simulation amounts, not recovered production jackpot balances. */
export function getOwnedBonusPoolAmounts(config={}){return clone(configuration(config).poolAmounts);}
