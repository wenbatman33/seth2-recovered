// @ts-nocheck
/** New Project-D rules implementation from its own source rules images.
 * All distributions below are explicit LOCAL choices, not original RNG/RTP. */
import {displayedRules as rules} from './DisplayedRules';
export const simulationDefaults=Object.freeze({normalWeights:[1,1,1,1,1,1,1,1,1],multiplierChance:.015,scatterChance:.02,upgradeChance:.08,rareChance:.03,multiplierValues:[2,3,4,5,6,8,10,20,50,100,500],multiplierWeights:[30,25,20,15,10,8,5,3,1,.2,.02],maxCascades:100,maxStages:12000});
const clone=x=>JSON.parse(JSON.stringify(x));
const cents=x=>Math.round(x*100),money=x=>x/100;
function check(v,message){if(!v)throw Error(message);}
export function localConfiguration(options={}){
 const c={...simulationDefaults,...options};
 for(const k of ['multiplierChance','scatterChance','upgradeChance','rareChance'])check(Number.isFinite(c[k])&&c[k]>=0&&c[k]<=1,'Invalid '+k);
 check(c.multiplierChance+c.scatterChance<=1,'Symbol chances exceed one');
 check(Array.isArray(c.normalWeights)&&c.normalWeights.length===9&&c.normalWeights.every(v=>Number.isFinite(v)&&v>=0)&&c.normalWeights.some(v=>v>0),'Nine nonnegative normal weights required');
 check(Array.isArray(c.multiplierValues)&&c.multiplierValues.length>0&&c.multiplierValues.every(v=>Number.isInteger(v)&&v>=2&&v<=500),'Multiplier values must be2..500');
 check(Array.isArray(c.multiplierWeights)&&c.multiplierWeights.length===c.multiplierValues.length&&c.multiplierWeights.every(v=>Number.isFinite(v)&&v>=0)&&c.multiplierWeights.some(v=>v>0),'Invalid multiplier weights');
 for(const k of ['maxCascades','maxStages'])check(Number.isInteger(c[k])&&c[k]>0&&c[k]<=100000,'Invalid '+k);
 return c;
}
export function evaluateBoard(view,totalBet){
 check(Array.isArray(view)&&view.length===5&&view.every(r=>Array.isArray(r)&&r.length===6),'Expected5x6 board');
 check(Number.isFinite(totalBet)&&totalBet>0&&cents(totalBet)>0,'Positive cent bet required');
 const flat=view.flat();check(flat.every(v=>Number.isInteger(v)&&v>=1&&v<=15),'Unknown Project-D symbol');
 const winSymbols=[];
 for(const s of rules.symbols){const symbolPos=flat.flatMap((v,i)=>v===s.id?[i]:[]),count=symbolPos.length;
  if(count<8)continue;const tier=count>=12?2:count>=10?1:0,odds=s.odds[tier];
  winSymbols.push({symbol:s.id,symbolPos,symbolCount:count,payValue:odds,winnings:money(cents(totalBet*odds/20))});
 }
 return{winSymbols,winnings:money(winSymbols.reduce((n,s)=>n+cents(s.winnings),0))};
}
export function scatterPayout(view,totalBet){const count=view.flat().filter(v=>v===15).length;return {count,winnings:money(cents(totalBet*(rules.scatter.odds[count]||0)/20))};}
const ballSymbol=v=>v>=500?13:v>=100?12:v>=10?11:10;
/** Source SymbolView updates set(after,get(before));delete(before), so transforms
 * must be ordered bottom-up and omit unchanged cells. The CURRENT winning stage
 * carries its outgoing gravity transform, not the following stage. */
export function gravity(flat,winSymbols,balls,draw){
 const removed=new Set(winSymbols.flatMap(v=>v.symbolPos)),next=Array(30),moves=[],map=new Map(),refill=[];
 for(let col=0;col<6;col++){let dest=4;
  for(let row=4;row>=0;row--){const beforePos=row*6+col;if(removed.has(beforePos))continue;const afterPos=dest--*6+col;next[afterPos]=flat[beforePos];map.set(beforePos,afterPos);if(beforePos!==afterPos)moves.push({beforePos,afterPos});}
  for(;dest>=0;dest--){const pos=dest*6+col,item=draw(pos);next[pos]=item.symbol;refill.push(item.ball?{...item.ball,symbolPos:pos}:null);}
 }
 // Preserve existing multiplier list order, which original parseNewTimesSymbols
 // uses to identify newly appended fireballs by array suffix length.
 const nextBalls=new Map();for(const [pos,b]of balls){if(map.has(pos)){const target=map.get(pos);nextBalls.set(target,{...b,symbolPos:target});}}
 for(const b of refill)if(b)nextBalls.set(b.symbolPos,b);
 return{flat:next,balls:nextBalls,posTransform:moves};
}
export function generateRound({totalBet,random=Math.random,config={},buyFeature=false,qaScenario=''}={}){
 check(Number.isFinite(totalBet)&&totalBet>0,'Positive totalBet required');
 check(['','win','lose','multiplier','freeGame','free-retrigger'].includes(qaScenario),'Unknown isolated QA scenario');
 const c=localConfiguration(config),states=[],summary={source:'Project-D displayed rules; newly generated simulation',originalRngRestored:false,originalRtpRestored:false,localConfiguration:clone(c),freeRoundsAwarded:0,retriggeredRounds:0,rounds:[],localAssumptions:['independent weighted symbols','cent rounding per symbol award','scatter cash paid outside multiplier subtotal','multiplier bucket colours at10/100/500','multiplier upgrades double and cap500','rare visual appearance independent of multiplier value']};
 const rng=()=>{const x=random();check(Number.isFinite(x)&&x>=0&&x<1,'RNG must return[0,1)');return x;};
 function weighted(values,weights){let t=rng()*weights.reduce((a,b)=>a+b,0);for(let i=0;i<values.length;i++){t-=weights[i];if(t<0)return values[i];}return values.at(-1);}
 const normal=()=>weighted([1,2,3,4,5,6,7,8,9],c.normalWeights);
 function newBall(pos){const times=weighted(c.multiplierValues,c.multiplierWeights);return{symbol:ballSymbol(times),symbolPos:pos,times,isRare:rng()<c.rareChance};}
 let totalCents=0,accumulatedTimes=0,awarded=0,played=0;
 function draw(pos,scatterCount){const x=rng();if(x<c.multiplierChance){const ball=newBall(pos);return{symbol:ball.symbol,ball};}if(x<c.multiplierChance+c.scatterChance&&scatterCount.value<6){scatterCount.value++;return{symbol:15};}return{symbol:normal()};}
 const boardOf=flat=>Array.from({length:5},(_,r)=>flat.slice(r*6,r*6+6));
 const base=(flat,balls,action,remaining)=>({action,view:boardOf(flat),winSymbols:[],timesSymbols:clone(Array.from(balls.values())),timesUpgrade:[],posTransform:[],newTimesSymbols:[],currentTimes:action==='freeSpin'?accumulatedTimes:0,totalStake:totalBet,roundWinnings:0,totalWinnings:money(totalCents),startFreeGame:false,freeGameCount:remaining,isJp:'',noWinReward:0,jpWinnings:0,localRules:true});
 function push(state){check(states.length<c.maxStages,'Stage limit; reject round without debit');states.push(state);}
 function subround(action,remaining,forced=''){
  const scatters={value:0};let flat=Array(30),balls=new Map();
  for(let pos=0;pos<30;pos++){const item=draw(pos,scatters);flat[pos]=item.symbol;if(item.ball)balls.set(pos,item.ball);}
  if(forced){flat=Array.from({length:30},(_,i)=>2+i%8);balls=new Map();
   if(forced==='win'||forced==='multiplier')for(let i=0;i<8;i++)flat[i]=1;
   if(forced==='multiplier'){const b={symbol:10,symbolPos:29,times:2,isRare:false};flat[29]=10;balls.set(29,b);}
   if(forced==='freeGame')for(let i=0;i<4;i++)flat[i]=15;
   if(forced==='retrigger')for(let i=0;i<3;i++)flat[i]=15;
  }
  let subtotalCents=0,last;
  for(let cascade=0;cascade<=c.maxCascades;cascade++){
   const state=base(flat,balls,action,remaining),evaluation=evaluateBoard(state.view,totalBet);state.winSymbols=evaluation.winSymbols;
   const awardCents=cents(evaluation.winnings);subtotalCents+=awardCents;totalCents+=awardCents;state.roundWinnings=money(subtotalCents);state.totalWinnings=money(totalCents);
   if(!state.winSymbols.length){
    const sum=Array.from(balls.values()).reduce((n,b)=>n+b.times,0),prior=action==='freeSpin'?accumulatedTimes:0,factor=subtotalCents>0&&sum>0?prior+sum:1;
    const bonusCents=subtotalCents*(factor-1);totalCents+=bonusCents;
    if(action==='freeSpin'&&subtotalCents>0&&sum>0)accumulatedTimes+=sum;
    const scatter=scatterPayout(state.view,totalBet),scCents=cents(scatter.winnings);totalCents+=scCents;
    state.roundWinnings=money(subtotalCents+bonusCents+scCents);state.totalWinnings=money(totalCents);state.baseWinnings=money(subtotalCents);state.scatterWinnings=scatter.winnings;state.totalTimes=factor;
    push(state);last=state;summary.rounds.push({action,remaining,baseWinnings:money(subtotalCents),factor,priorAccumulatedTimes:prior,accumulatedTimes,scatterCount:scatter.count,scatterWinnings:scatter.winnings,roundWinnings:state.roundWinnings});break;
   }
   check(cascade<c.maxCascades,'Cascade limit; reject operation before debit');
   const scatterCount={value:flat.filter(v=>v===15).length};
   const next=gravity(flat,state.winSymbols,balls,pos=>draw(pos,scatterCount));state.posTransform=next.posTransform;
   for(const [pos,b]of balls)if(b.times<500&&rng()<c.upgradeChance){const afterPos=next.posTransform.find(v=>v.beforePos===pos)?.afterPos??pos,after=next.balls.get(afterPos);if(after){const value=Math.min(500,b.times*2);state.timesUpgrade.push({symbolPos:pos,beforeSymbol:b.symbol,beforeTimes:b.times,afterSymbol:ballSymbol(value),afterTimes:value});after.symbol=ballSymbol(value);after.times=value;next.flat[afterPos]=after.symbol;}}
   push(state);flat=next.flat;balls=next.balls;
  }
  check(last,'Subround did not terminate');return last;
 }
 function freeSeries(){let remaining=15;awarded=15;summary.freeRoundsAwarded=15;
  while(remaining>0){played++;const last=subround('freeSpin',remaining,qaScenario==='free-retrigger'&&played===1?'retrigger':'');remaining--;
   const count=last.view.flat().filter(v=>v===15).length;if(count>=3&&count<=6&&awarded<100){const add=Math.min(5,100-awarded);remaining+=add;awarded+=add;summary.retriggeredRounds+=add;last.localExtraFreeRounds=add;}
   last.remainingAfterRound=remaining;
  }summary.freeRoundsAwarded=awarded;
 }
 if(buyFeature||qaScenario==='freeGame'||qaScenario==='free-retrigger'){
  // The purchased intro has the original scatter board/intro, but buying is not
  // an independently spun scatter award; do not give extra scatter cash.
  const trigger=Array.from({length:30},(_,i)=>2+i%8);for(let i=0;i<4;i++)trigger[i]=15;
  const state=base(trigger,new Map(),'spin',15);state.startFreeGame=true;state.purchasedIntro=buyFeature;if(!buyFeature){const award=scatterPayout(state.view,totalBet).winnings;totalCents+=cents(award);state.roundWinnings=award;state.scatterWinnings=award;state.totalWinnings=money(totalCents);}push(state);freeSeries();
 }else{const last=subround('spin',0,qaScenario);const count=last.view.flat().filter(v=>v===15).length;if(count>=4&&count<=6){last.startFreeGame=true;last.freeGameCount=15;freeSeries();}}
 states.forEach((s,i)=>{s.currentView=i;s.totalViews=states.length;});
 check(Number.isSafeInteger(totalCents)&&totalCents>=0,'Award overflow');summary.accumulatedTimes=accumulatedTimes;summary.freeRoundsPlayed=played;
 return{stages:states,totalWinnings:money(totalCents),summary};
}
