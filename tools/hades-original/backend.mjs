// Owned local simulation for the recovered g1007 client. Not original RNG/RTP.
// Public payout amounts are transcribed from original zh-tw rules_03/04.png.
const copy = value => JSON.parse(JSON.stringify(value));
const amount = value => Math.round(value * 100) / 100;
function mergeSettings(target, change){
  for(const [key,value]of Object.entries(change||{})){
    if(['__proto__','constructor','prototype'].includes(key))continue;
    if(value&&typeof value==='object'&&!Array.isArray(value))mergeSettings(target[key]||(target[key]={}),value);
    else target[key]=copy(value);
  }
}
export const MULTIPLIERS = Array.from({ length: 17 }, (_, i) => 2 ** i);
export const FEATURES = [
  ['luckOrBadLuck', 2000], ['superFreeGame', 400], ['freeGame', 100],
  ['theWrathOfHades', 25], ['thePowerOfHades', 5],
].map(([feature, featureRate], featureIndex) => ({ feature, featureRate, featureIndex }));
export const PAYOUTS = {
  2: [.5,1,1.5,2,3.5,5,10,15,20,25,35,50,75,100,125,150,175,200,225,250,300],
  3: [.4,.8,1.3,1.8,3,4.5,8,13,15,20,25,40,60,80,100,120,140,160,180,200,250],
  4: [.3,.6,1,1.5,2.5,4,6,10,13,15,20,30,40,50,65,80,100,125,150,175,200],
  5: [.2,.4,.8,1.2,2,3,4,6,8,10,15,20,25,30,35,40,50,60,70,85,100],
  6: [.15,.3,.6,1,1.75,2.5,3.5,5,6,8,10,15,20,25,30,35,40,50,60,70,80],
  7: [.1,.25,.5,.8,1.5,2,3,3.5,5,7,8,12,14,16,20,25,30,35,40,50,60],
  8: [.1,.2,.4,.6,1,1.5,2,3,4,6,8,10,12,14,16,18,20,25,30,35,40],
};
export function evaluateClusters(view, stake) {
  const flat = view.flat(), wins = [];
  for (let symbolId = 2; symbolId <= 8; symbolId++) {
    const visited = new Set();
    for (let p = 0; p < 25; p++) {
      if (visited.has(p) || ![symbolId,1].includes(flat[p])) continue;
      const queue = [p], cluster = [];
      visited.add(p);
      while (queue.length) {
        const at = queue.pop(); cluster.push(at);
        for (const next of [at - 5, at + 5, ...(at % 5 ? [at - 1] : []), ...(at % 5 < 4 ? [at + 1] : [])]) {
          if (next < 0 || next >= 25 || visited.has(next) || ![symbolId,1].includes(flat[next])) continue;
          visited.add(next); queue.push(next);
        }
      }
      if (cluster.length >= 5 && cluster.some(pos => flat[pos] === symbolId)) {
        wins.push({ symbolId, symbol: symbolId, symbolPos: cluster.sort((a,b)=>a-b), count: cluster.length,
          winnings: amount(stake * PAYOUTS[symbolId][cluster.length - 5]) });
      }
    }
  }
  return wins;
}

export class HadesLocalBackend {
  constructor({ storage = null, random = Math.random, muted = false, scenario = '', walletKey = '' } = {}) {
    this.storage = storage; this.random = random; this.muted = muted;
    this.scenario=scenario;
    this.key = walletKey || 'hades.original-client.local-simulation.v1';
    const saved = storage?.getItem(this.key);
    this.state = saved ? JSON.parse(saved) : { balance: 10000, sequence: 0, pending: null, completed: {},
      settings: { stakeIndex: 2, ratioIndex: 0, advancedSettings: {
        sounds: { background: true, effect: true, backgroundVolume: 1, effectVolume: 1 }, turbo: false, notify: false,
      }, autoPlay: { numberOfPlays: [10,20,50,100,-1], stopOnWinMultiplier: 0, stopOnBalance: 0, stopOnFreeSpin: true, stopOnJackpot: true } } };
    if (!Number.isFinite(this.state.balance) || this.state.balance < 0) throw new Error('Invalid local wallet; preserving saved data.');
  }
  save() { this.storage?.setItem(this.key, JSON.stringify(this.state)); }
  definition() {
    return { digital: 2, StoneMultiplierList: MULTIPLIERS, winlineDefs: [[]],
      buyFeature: copy(FEATURES), jpDefs: { 'jp-mini': 20, 'jp-minor': 50 },
      winOddsTypes: { big:20, super:40, mega:80, ultra:160, legendary:1000 },
      autoConfirmTime: 1.5, autoSpinInterval: .3, prizeAutoNextDelay: 3,
      localReconstruction: { originalRngRestored:false, originalRtpRestored:false,
        payoutSource:'g1007/assets/texture/locale/zh-tw/rules_03.png and rules_04.png',
        assumptions:['symbol weights','feature chance','giant size distribution','treasure loss threshold and award','jackpot pools','initial settings','timings'] } };
  }
  platform() {
    const settings = copy(this.state.settings);
    if (this.muted) settings.advancedSettings.sounds = {background:false,effect:false,backgroundVolume:0,effectVolume:0};
    return { game: { name:'hades', gameId:'g1007', stakeValues:[1,5,10,20,50,100], ratioValues:[1,2,5,10], stakeList:[] },
      player:{name:'Local Player',id:'local-hades',uid:'local-hades',avatar:this.state.avatar||0,avatarUrl:'',displayName:this.state.displayName||'本機測試',nameDisplayOn:true,
        balance:{currency:'TWD',amount:this.state.balance,gemAmount:0,betAmount:0,updatedAt:Date.now()},settings,clientSettings:{}},
      gemSystem:false,table:{roomId:'local',number:1,status:'available',detail:{},lock:false},slotTablesOn:false,
      tables:[],slotTableUpdated:false,jackpotOn:true,avatars:[],theme:'',isInstantClose:false,slotRankOn:false,disableRotate:false };
  }
  response(extra = {}) { return {status:200,message:'Local simulation',token:'local-hades',localBackend:true,platform:this.platform(),...extra}; }
  draw() { return 2 + Math.min(6, Math.floor(this.random() * 7)); }
  board(scatterChance=0) {
    const view=Array.from({length:5},()=>Array.from({length:5},()=>this.draw()));
    if(scatterChance)for(let col=0;col<5;col++)if(this.random()<scatterChance)view[Math.floor(this.random()*5)][col]=9;
    return view;
  }
  baseStage(view, stake, spinId) {
    return {spinId,action:'spin',view,winSymbols:[],groupSymbols:[],groupPosTransform:[],posTransform:[],
      currentView:0,totalViews:1,currentTimes:1,nextTimes:1,bonusTimes:0,totalStake:stake,totalWinnings:0,
      randomWildPos:-1,isStoneExtraAnim:false,isBigPrize:false,startFreeGame:false,freeGameCount:0,
      remainingFreeGames:0,remainingFreeSpins:0,freeGameWinnings:0,fgTotalWinnings:0};
  }
  initial() {
    const p = this.state.pending;
    let view;
    for (let attempt = 0; !p && attempt < 200; attempt++) {
      view = this.board(); if (!evaluateClusters(view, 10).length) break;
      if (attempt === 199) throw new Error('Unable to generate idle view');
    }
    return this.response({isResuming:!!p,engine:{spinId:p?.id||'local-initial',definition:this.definition(),
      gameState:p?copy(p.stages.slice(p.cursor||0)):[this.baseStage(view,10,'local-initial')],isXtraBet:p?.isXtraBet||false,buyFeatureType:p?.feature||null,bonusState:p?.bonusState?copy(p.bonusState):null}});
  }
  round(stake, spinId, options={}) {
    let view = options.view || this.board(options.scatterChance || 0), times = options.times || 1, total = options.total || 0;
    const stages = [];
    for (let depth = 0; depth < 100; depth++) {
      const state = this.baseStage(copy(view),stake,spinId);
      state.action=options.action||'spin';
      state.freeGameCount=options.freeGameCount||0;
      state.bonusTimes=stages.length?0:options.bonusTimes||0;
      state.groupSymbols=stages.length?[]:copy(options.groups||[]);
      state.currentTimes = times;
      state.winSymbols = evaluateClusters(view,stake);
      times=Math.max(times,state.bonusTimes);
      total = amount(total + state.winSymbols.reduce((s,w)=>s+w.winnings,0)*times);
      state.totalWinnings = total;
      stages.push(state);
      if (!state.winSymbols.length) {
        stages.forEach((s,i)=>{s.currentView=i;s.totalViews=stages.length;});
        return stages;
      }
      const removed = new Set(state.winSymbols.flatMap(w=>w.symbolPos));
      const wild = [...removed][Math.floor(this.random()*removed.size)];
      state.randomWildPos = wild;
      const flat = view.flat();
      flat[wild] = 1; removed.delete(wild);
      const next = Array(25);
      for(let col=0;col<5;col++){
        let dst=4;
        for(let row=4;row>=0;row--){
          const from=row*5+col; if(removed.has(from))continue;
          const to=dst--*5+col; next[to]=flat[from];
          if(from!==to)state.posTransform.push({beforePos:from,afterPos:to});
        }
        while(dst>=0)next[dst--*5+col]=this.draw();
      }
      times=Math.min(65536,times*2);state.nextTimes=times;
      view=Array.from({length:5},(_,row)=>next.slice(row*5,row*5+5));
    }
    throw new Error('Cascade generation limit; no balance debited');
  }
  generateSequence(stake,spinId,{feature=null,isXtraBet=false,scenario=''}={}){
    const scatterChance=isXtraBet ? .18 : .06;
    let view=this.board(scatterChance),groups=[],bonusTimes=0;
    if(['freeGame','superFreeGame','luckOrBadLuck'].includes(feature)){
      const scatters=feature==='freeGame'?3:feature==='luckOrBadLuck'&&this.random()<.5?0:5;
      view=this.board();
      for(let col=0;col<scatters;col++)view[Math.floor(this.random()*5)][col]=9;
    }
    if(feature==='thePowerOfHades'||/^giant-[2-5]$/.test(scenario)){
      // The client supports sizes 2..5. The equal local draw is an explicit
      // simulation assumption; no original server distribution was captured.
      const size=/^giant-[2-5]$/.test(scenario)?Number(scenario.at(-1)):2+Math.min(3,Math.floor(this.random()*4));
      const row=Math.floor(this.random()*(6-size)),col=Math.floor(this.random()*(6-size)),symbolId=2+Math.floor(this.random()*4);
      const symbolPos=Array.from({length:size*size},(_,i)=>(row+Math.floor(i/size))*5+col+i%size);
      for(const pos of symbolPos)view[Math.floor(pos/5)][pos%5]=symbolId;
      if(size===2){const adjacent=col<3?row*5+col+2:row*5+col-1;view[Math.floor(adjacent/5)][adjacent%5]=symbolId;}
      groups=[{symbolId,size,symbolPos,isNew:true}];
    }
    if(feature==='theWrathOfHades')bonusTimes=2**(1+Math.floor(this.random()*7));
    const stages=this.round(stake,spinId,{view,groups,bonusTimes});
    const terminal=stages.at(-1),scatterCount=terminal.view.flat().filter(s=>s===9).length;
    if(scatterCount>=3){
      let remaining=Math.min(12,8+(scatterCount-3)*2),extra=0,played=0,times=1,total=terminal.totalWinnings;
      terminal.startFreeGame=true;terminal.freeGameCount=remaining;
      while(remaining>0){
        remaining--;played++;
        const current=this.round(stake,spinId,{action:'freeSpin',times,total,scatterChance:.04,freeGameCount:0});
        const last=current.at(-1);total=last.totalWinnings;times=last.currentTimes;
        const count=last.view.flat().filter(s=>s===9).length;
        if(count>=3&&extra<48){const award=Math.min(48-extra,8+Math.min(2,count-3)*2);last.startFreeGame=true;last.freeGameCount=award;remaining+=award;extra+=award;}
        for(const state of current){state.remainingFreeGames=remaining;state.remainingFreeSpins=remaining;state.freeGameIndex=played;}
        stages.push(...current);
      }
    }
    stages.forEach((state,i)=>{state.currentView=i;state.totalViews=stages.length;});
    return stages;
  }
  request(event, payload={}) {
    const before = copy(this.state);
    try { return this.performRequest(event, payload); }
    catch (error) { this.state = before; throw error; }
  }
  performRequest(event, payload={}) {
    if(event==='initial')return this.initial();
    if(event==='progress'){
      const p=this.state.pending,index=payload.currentView;
      if(!p||p.id!==payload.spinId||!Number.isInteger(index)||index<0||index>=p.stages.length)throw new Error('Invalid local stage progress');
      if(index>(p.cursor||0)){p.cursor=index;this.save();}
      return this.response();
    }
    if(event==='spin') {
      const purchase=payload.action==='buyFeature';
      const p=this.state.pending;
      if(payload.action==='collect'){
        if(!p||p.id!==payload.spinId||p.bonusState?.bonusType!=='jpGame')throw new Error('No matching local jackpot');
        const pos=payload.actionData?.pickedPos,bonus=p.bonusState;
        if(!Number.isInteger(pos)||pos<0||pos>=12)throw new Error('Invalid jackpot position');
        if(!bonus.picked.some(pick=>pick.pickedPos===pos)){
          if(bonus.totalWinnings>0)throw new Error('Jackpot already complete');
          bonus.picked.push({pickedPos:pos,category:p.pickOrder[bonus.picked.length]});
          const last=bonus.picked.at(-1).category;
          if(bonus.picked.filter(pick=>pick.category===last).length===3){
            bonus.totalWinnings=amount(p.stake*({'jp-mini':20,'jp-minor':50}[last]||0)||({'jp-major':2500,'jp-grand':10000}[last]));
          }
          this.save();
        }
        return this.response({engine:{spinId:p.id,bonusState:copy(bonus)}});
      }
      if(p){
        if(purchase&&p.featureIndex!==payload.featureIndex)throw new Error('Finish existing local feature first');
        if(purchase)return this.response({purchased:true,engine:{gameState:{spinId:p.id}}});
        return this.response({engine:{spinId:p.id,gameState:copy(p.stages),isXtraBet:p.isXtraBet,buyFeatureType:p.feature,bonusState:p.bonusState||null}});
      }
      const stakeIndex=payload.stakeIndex??this.state.settings.stakeIndex,ratioIndex=payload.ratioIndex??this.state.settings.ratioIndex;
      const stake=[1,5,10,20,50,100][stakeIndex]*[1,2,5,10][ratioIndex];
      const feature=purchase?FEATURES[payload.featureIndex]:null;
      if(purchase&&(!feature||feature.feature!==payload.featureValue))throw new Error('Invalid local feature selection');
      const cost=amount(stake*(feature?feature.featureRate:payload.isXtraBetOn?1.5:1));
      if(!Number.isFinite(stake)||stake<=0||cost>this.state.balance)throw new Error('Insufficient or invalid local stake');
      const id=`hades-local-${this.state.sequence+1}`;
      const scenario=!this.state.scenarioConsumed?this.scenario:'';
      let stages=this.generateSequence(stake,id,{feature:feature?.feature,isXtraBet:!!payload.isXtraBetOn,scenario});
      let bonusState=null,pickOrder=null;
      if(!feature&&(/^jackpot-/.test(scenario)||stages.length===1&&this.random()<.01)){
        let view;
        for(let attempt=0;attempt<200;attempt++){
          view=this.board();view[0][0]=10;view[2][2]=10;view[4][4]=10;
          if(!evaluateClusters(view,stake).length)break;
          if(attempt===199)throw new Error('Jackpot board generation limit');
        }
        stages=[this.baseStage(view,stake,id)];
        bonusState={bonusType:'jpGame',picked:[],totalWinnings:0};
        const tiers=['jp-mini','jp-minor','jp-major','jp-grand'];
        const target=/^jackpot-(mini|minor|major|grand)$/.test(scenario)?'jp-'+scenario.slice(8):tiers[Math.floor(this.random()*4)];
        const others=tiers.filter(tier=>tier!==target);
        pickOrder=[others[0],target,others[1],target,others[0],target];
        this.state.scenarioConsumed=true;
      }
      // Original client reads bonusState.prize directly and closes the round
      // after its Treasure animation. Threshold/amount are local assumptions.
      if(!bonusState&&!feature&&stages.at(-1).totalWinnings===0&&
        (scenario==='treasure'||(this.state.lossStreak||0)>=19)){
        bonusState={bonusType:'noWinReward',prize:amount(stake*5)};
      }
      if(scenario)this.state.scenarioConsumed=true;
      this.state.balance=amount(this.state.balance-cost);this.state.sequence++;
      this.state.settings.stakeIndex=stakeIndex;this.state.settings.ratioIndex=ratioIndex;
      this.state.pending={id,stages,stake,cost,bonusState,pickOrder,isXtraBet:!!payload.isXtraBetOn,feature:feature?.feature||null,featureIndex:feature?.featureIndex};this.save();
      if(purchase)return this.response({purchased:true,engine:{gameState:{spinId:id}}});
      return this.response({engine:{spinId:id,gameState:copy(stages),isXtraBet:!!payload.isXtraBetOn,buyFeatureType:null,bonusState}});
    }
    if(event==='closeSpin') {
      const p=this.state.pending;
      if(p&&payload.spinId===p.id){
        if(p.bonusState?.bonusType==='jpGame'&&!p.bonusState.totalWinnings)throw new Error('Complete jackpot selection before closing');
        const award=amount(p.stages.at(-1).totalWinnings+(p.bonusState?.totalWinnings||p.bonusState?.prize||0));
        this.state.balance=amount(this.state.balance+award);
        this.state.lossStreak=award>0?0:(this.state.lossStreak||0)+1;
        (this.state.records||=[]).unshift({id:p.id,name:'古神巴風特',endTime:Date.now(),hasFree:p.stages.some(s=>s.action==='freeSpin'),
          isFeature:!!p.feature,roomId:'local',totalStake:p.cost,profit:amount(award-p.cost),win:award});
        this.state.records=this.state.records.slice(0,300);
        this.state.completed[p.id]=true;this.state.pending=null;this.save();
      }
      else if(!this.state.completed[payload.spinId])throw new Error('Unknown local spin');
      return this.response();
    }
    if(event==='updateSettings') {
      if(payload.type==='game')mergeSettings(this.state.settings.advancedSettings,payload.data);
      else if(payload.type==='autoPlay')mergeSettings(this.state.settings.autoPlay,payload.data);
      this.save();return this.response();
    }
    if(event==='updateDisplayName'){
      if(typeof payload.displayName!=='string'||payload.displayName.length>24)throw new Error('Invalid local display name');
      this.state.displayName=payload.displayName;this.save();return this.response();
    }
    if(event==='updateAvatar'){
      if(!Number.isInteger(payload.avatarId)||payload.avatarId<0||payload.avatarId>100)throw new Error('Invalid local avatar');
      this.state.avatar=payload.avatarId;this.save();return this.response({data:{avatarId:payload.avatarId,avatarUrl:''}});
    }
    if(event==='getBetRecords')return this.response({data:copy((this.state.records||[]).filter(r=>!payload.lt||r.endTime<payload.lt).slice(0,Math.min(100,payload.rows||16)))});
    if(event==='getUserReport'){
      const groups=new Map();
      for(const record of this.state.records||[]){
        if(payload.startTime&&record.endTime<payload.startTime||payload.endTime&&record.endTime>payload.endTime)continue;
        const row=groups.get(record.name)||{name:record.name,betCount:0,bet:0,win:0,profit:0};
        row.betCount++;row.bet=amount(row.bet+record.totalStake);row.win=amount(row.win+record.win);row.profit=amount(row.profit+record.profit);groups.set(record.name,row);
      }
      return this.response({content:{list:[...groups.values()]}});
    }
    return {...this.response(),status:400,message:`Local request not yet restored: ${event}`,code:'LOCAL_UNFINISHED_REQUEST'};
  }
}
