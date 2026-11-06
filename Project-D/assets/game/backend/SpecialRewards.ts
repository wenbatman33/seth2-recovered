// @ts-nocheck
/** Own optional local rewards, not recovered provider probabilities or pools.
 * Only symbol14/count2..5/tier and zero-win chest eligibility are from this
 * game's rules_06/07 PNGs and original GameService/JackpotView/TreasuresView.
 * Run after pure cascade generation, before a single persisted debit commit.
 */
import {createJackpotConfig,contributeJackpots,generateJackpotSymbolCount,settleJackpot} from './JackpotRules';
const copy=value=>JSON.parse(JSON.stringify(value)),cent=value=>Math.round(value*100),cash=value=>value/100;
function check(value,message){if(!value)throw new RangeError(message);}
export function createSpecialConfig(options={}){
 const chest=options.mysteryChest||{},multipliers=copy(chest.multipliers||[1,2,5,10]),weights=copy(chest.weights||[60,25,12,3]);
 const probability=chest.probability??.01;
 check(Number.isFinite(probability)&&probability>=0&&probability<=1,'Invalid own chest probability');
 check(Array.isArray(multipliers)&&multipliers.length>0&&multipliers.every(value=>Number.isSafeInteger(value)&&value>0),'Positive integer own chest multipliers required');
 check(Array.isArray(weights)&&weights.length===multipliers.length&&weights.every(value=>Number.isFinite(value)&&value>=0)&&weights.reduce((a,b)=>a+b,0)>0,'Invalid own chest weights');
 return{jackpot:createJackpotConfig(options.jackpotConfig),mysteryChest:{probability,multipliers,weights},originalRngRestored:false,originalRtpRestored:false};
}
export function mathScenario(scenario=''){
 if(scenario==='mystery-chest'||/^jackpot-(mini|minor|major|grand)$/.test(scenario))return'lose';
 if(/^(free|intro)-jackpot-(mini|minor|major|grand)$/.test(scenario))return'freeGame';
 return scenario;
}
export function chestEligible(generated){return generated.totalWinnings===0&&generated.stages.length===1&&generated.stages.every(stage=>stage.action==='spin'&&!stage.startFreeGame&&!stage.isJp&&!stage.winSymbols.length);}
export function applySpecialRewards(generated,{stakeCents,costCents,jackpots,config,random,qaScenario='',purchase=false}){
 const draw=()=>{const value=random();check(Number.isFinite(value)&&value>=0&&value<1,'Own reward RNG must return [0,1)');return value;};
 let pools=contributeJackpots(jackpots,costCents,config.jackpot);
 const forced=/^(?:(free|intro)-)?jackpot-(mini|minor|major|grand)$/.exec(qaScenario),forceChest=qaScenario==='mystery-chest';
 const count=forceChest?0:forced?['mini','minor','major','grand'].indexOf(forced[2])+2:generateJackpotSymbolCount(draw,config.jackpot);
 if(count){
  const candidates=[];
  generated.stages.forEach((stage,index)=>{const positions=stage.view.flat().flatMap((symbol,pos)=>symbol>=1&&symbol<=9?[pos]:[]);if(!stage.winSymbols.length&&positions.length>=count&&(!forced?.[1]||forced[1]==='free'&&stage.action==='freeSpin'||forced[1]==='intro'&&stage.startFreeGame))candidates.push({stage,index,positions});});
  check(candidates.length>0,'No genuine terminal symbol board can present the own jackpot');
  const selected=candidates[Math.floor(draw()*candidates.length)],{stage,index,positions}=selected;
  for(let n=positions.length-1;n>0;n--){const other=Math.floor(draw()*(n+1));[positions[n],positions[other]]=[positions[other],positions[n]];}
  // Replacing ordinary symbols only removes matches; terminal, scatter, prior
  // multiplier/cascade positions and native new-times suffix ordering remain valid.
  for(const position of positions.slice(0,count))stage.view[Math.floor(position/6)][position%6]=14;
  const settled=settleJackpot(pools,count,config.jackpot);pools=settled.newState;
  stage.isJp=settled.tier;stage.jpWinnings=cash(settled.awardCents);stage.roundWinnings=cash(cent(stage.roundWinnings)+settled.awardCents);
  stage.localJpBeforeContinuation=stage.action!=='spin'||stage.startFreeGame;
  for(let n=index;n<generated.stages.length;n++)generated.stages[n].totalWinnings=cash(cent(generated.stages[n].totalWinnings)+settled.awardCents);
  generated.totalWinnings=cash(cent(generated.totalWinnings)+settled.awardCents);
  generated.summary.jackpot={stageIndex:index,count,tier:settled.tier,awardCents:settled.awardCents,localSimulation:true,forced:!!forced,probability:config.jackpot.triggerProbability};
 }
 if(!purchase&&chestEligible(generated)&&(forceChest||config.mysteryChest.probability>0&&draw()<config.mysteryChest.probability)){
  const c=config.mysteryChest;let cursor=draw()*c.weights.reduce((a,b)=>a+b,0),selected=c.weights.length-1;
  for(let i=0;i<c.weights.length;i++){cursor-=c.weights[i];if(cursor<0){selected=i;break;}}
  const awardCents=stakeCents*c.multipliers[selected];check(Number.isSafeInteger(awardCents)&&awardCents>0,'Own chest award overflow');
  const stage=generated.stages[0];stage.noWinReward=cash(awardCents);stage.roundWinnings=cash(awardCents);stage.totalWinnings=cash(awardCents);stage.localMysteryChest=true;generated.totalWinnings=cash(awardCents);
  generated.summary.mysteryChest={awardCents,multiplier:c.multipliers[selected],probability:c.probability,forced:forceChest,localSimulation:true,distribution:'own configurable demo; original distribution unknown'};
 }
 check(!forceChest||generated.summary.mysteryChest,'Forced own chest requires a zero-win ordinary board');
 return pools;
}
