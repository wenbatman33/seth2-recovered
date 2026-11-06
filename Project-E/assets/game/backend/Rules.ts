// @ts-nocheck
// Self-defined symbol distribution; displayed awards/line shapes come from E art.
import {displayedRules as R} from './DisplayedRules';
const clone=v=>JSON.parse(JSON.stringify(v)),round=v=>Math.round(v*100)/100;
function rand(random){const n=random();if(!Number.isFinite(n)||n<0||n>=1)throw Error('Random source must return [0,1)');return n;}
function weighted(values,weights,random){let x=rand(random)*weights.reduce((a,b)=>a+b,0);for(let i=0;i<values.length;i++){x-=weights[i];if(x<0)return values[i];}return values.at(-1);}
export function localConfiguration(config={}){
 const result={weights:[.1,1,1.3,1.3,2,2,3,3],freeChance:.025,jackpotChance:.005,retriggerChance:.015,feverChance:.08,feverFreeMultiplier:2,feverTransformChance:.35,feverWildTransformChance:.5,feverMaxTransforms:5,maxFreeRounds:100,purchaseScatterCount:3,poolAmounts:{'jp-mini':200,'jp-minor':1000,'jp-major':10000,'jp-grand':100000},...clone(config)};
 if(!Array.isArray(result.weights)||result.weights.length!==8||result.weights.some(w=>!Number.isFinite(w)||w<0)||result.weights.reduce((a,b)=>a+b,0)<=0)throw Error('Eight nonnegative symbol weights required');
 for(const name of ['freeChance','jackpotChance','retriggerChance','feverChance','feverTransformChance','feverWildTransformChance'])if(!Number.isFinite(result[name])||result[name]<0||result[name]>1)throw Error('Invalid local probability '+name);
 if(!Number.isFinite(result.feverFreeMultiplier)||result.feverFreeMultiplier<1||result.feverFreeMultiplier>100||!Number.isInteger(result.feverMaxTransforms)||result.feverMaxTransforms<1||result.feverMaxTransforms>20)throw Error('Invalid owned fever configuration');
 if(result.freeChance+result.jackpotChance>1||!Number.isInteger(result.maxFreeRounds)||result.maxFreeRounds<15||result.maxFreeRounds>1000||![3,4,5].includes(result.purchaseScatterCount))throw Error('Invalid local feature configuration');
 if(Object.keys(R.jackpot.tiers).some(n=>!Number.isFinite(result.poolAmounts[R.jackpot.tiers[n]])||result.poolAmounts[R.jackpot.tiers[n]]<0))throw Error('Invalid local jackpot pools');return result;
}
export function assertBoard(view){if(!Array.isArray(view)||view.length!==4||view.some(row=>!Array.isArray(row)||row.length!==5||row.some(n=>!Number.isInteger(n)||n<1||n>10)))throw Error('Project-E actual prefab requires view[4][5], symbols1..10');}
export function evaluateBoard(view,totalBet,multiple=1){
 assertBoard(view);if(!Number.isFinite(totalBet)||totalBet<=0||!Number.isFinite(multiple)||multiple<1)throw Error('Invalid bet or factor');
 const winSymbols=[];
 R.paylines.forEach((line,winLine)=>{
  let best=null;
  for(const symbol of R.symbols){let count=0;while(count<5&&(view[line[count]][count]===symbol.id||view[line[count]][count]===1&&symbol.id!==1))count++;
   const odds=symbol.odds[count]||0;if(odds&&(!best||odds>best.odds))best={symbol:symbol.id,count,odds};}
  if(best){const winnings=round(totalBet/R.lineCount*best.odds);winSymbols.push({symbol:best.symbol,symbolPos:line.map((row,col)=>col<best.count?2**row:0),counts:best.count,winLine,winnings,payoutFactor:best.odds});}
 });
 const baseWinnings=round(winSymbols.reduce((n,w)=>n+w.winnings,0));return{winSymbols,baseWinnings,currentWinnings:round(baseWinnings*multiple)};
}
function board(random,config){return Array.from({length:4},()=>Array.from({length:5},()=>weighted([1,2,3,4,5,6,7,8],config.weights,random)));}
function specials(view,symbol,count,random){const cols=[0,1,2,3,4];for(let i=cols.length-1;i>0;i--){const j=Math.floor(rand(random)*(i+1));[cols[i],cols[j]]=[cols[j],cols[i]];}for(let i=0;i<count;i++)view[Math.floor(rand(random)*4)][cols[i]]=symbol;}
function forced(kind){const view=Array.from({length:4},()=>[2,3,4,5,6]);if(kind==='win')for(let c=0;c<5;c++)view[1][c]=2;return view;}
export function generateRound({totalBet,random=Math.random,config={},buyFeature=false,qaScenario=''}){
 const cfg=localConfiguration(config),stages=[];let total=0,awarded=0,retriggers=0,multiple=1;
 // Base-game frenzy frequency and transform presentation are explicit OWN choices.
 const fever=!buyFeature&&(qaScenario.startsWith('fever')||!qaScenario&&rand(random)<cfg.feverChance),effectiveFreeChance=fever?Math.min(1-cfg.jackpotChance,cfg.freeChance*cfg.feverFreeMultiplier):cfg.freeChance;let transformCount=0;
 function transform(view){
  const before=clone(view),result=clone(view),toWild=[],toSymbol=[],eligible=[];for(let row=0;row<4;row++)for(let col=0;col<5;col++)if(view[row][col]>=2&&view[row][col]<=8)eligible.push(row*5+col);
  if(!eligible.length)return{view:before,resultView:result,transformInfo:{toWild,toSymbol}};
  const wild=qaScenario==='fever-transform-wild'||qaScenario!=='fever-transform-symbol'&&rand(random)<cfg.feverWildTransformChance,target=wild?1:qaScenario==='fever-transform-symbol'?2:weighted([2,3,4],[1,1,1],random);let positions;
  if(qaScenario==='fever-transform-wild')positions=[5,6,7];else if(qaScenario==='fever-transform-symbol')positions=[6,7];else{positions=[];const count=1+Math.floor(rand(random)*Math.min(cfg.feverMaxTransforms,eligible.length));for(let i=0;i<count;i++){const at=Math.floor(rand(random)*eligible.length);positions.push(eligible.splice(at,1)[0]);}}
  for(const position of positions){const row=Math.floor(position/5),col=position%5;if(result[row][col]===target)continue;result[row][col]=target;(wild?toWild:toSymbol).push({position,newSymbol:target});}transformCount+=toWild.length+toSymbol.length;return{view:before,resultView:result,transformInfo:{toWild,toSymbol}};
 }
 const stage=(view,action,extra={})=>{const hasTransform=fever&&action==='spin'&&!extra.startFreeGame&&!extra.isJp&&(qaScenario.startsWith('fever-transform-')||!qaScenario&&rand(random)<cfg.feverTransformChance),change=hasTransform?transform(view):{view:clone(view),resultView:[],transformInfo:{toSymbol:[],toWild:[]}},finalView=hasTransform?change.resultView:view,evaluated=evaluateBoard(finalView,totalBet,action==='freeSpin'?multiple:1);total=round(total+evaluated.currentWinnings);const nonwild=finalView.flat().filter(s=>s!==1),fullCombo=nonwild.every(s=>s===nonwild[0]);return{action,...change,totalStake:totalBet,winSymbols:evaluated.winSymbols,totalWinnings:total,currentWinnings:evaluated.currentWinnings,roundWinnings:evaluated.currentWinnings,currentTimes:action==='freeSpin'?multiple:1,multiple:action==='freeSpin'?multiple:1,startFreeGame:false,freeSpinWon:0,numFreeSpins:0,selectFgMultiple:multiple,freeTimesDenominator:1,isJp:'',fullCombo,isLuckyMoment:action==='spin'&&fever,localRules:true,...extra};};
 let first=qaScenario==='win'||qaScenario==='lose'||qaScenario.startsWith('fever')?forced(qaScenario==='win'?'win':'lose'):board(random,cfg),kind='normal';
 if(buyFeature||qaScenario.startsWith('free'))kind='free';else if(qaScenario.startsWith('jackpot-'))kind='jackpot';else if(!['win','lose'].includes(qaScenario)&&!qaScenario.startsWith('fever')){const x=rand(random);if(x<effectiveFreeChance)kind='free';else if(x<effectiveFreeChance+cfg.jackpotChance)kind='jackpot';}
 if(kind==='free'){
  const count=buyFeature?cfg.purchaseScatterCount:qaScenario==='free-4'?4:qaScenario==='free-5'?5:qaScenario.startsWith('free')?3:weighted([3,4,5],[80,15,5],random);specials(first,9,count,random);awarded=R.scatter.awards[count];multiple=weighted(R.selection.multipliers,[1,1,1],random);
  stages.push(stage(first,'spin',{startFreeGame:true,freeSpinWon:awarded,numFreeSpins:awarded,selectFgMultiple:multiple}));
  for(let played=0;played<awarded;played++){
   const view=board(random,cfg);let extra=0;
   if(awarded<cfg.maxFreeRounds&&(qaScenario==='free-retrigger'&&played===0||rand(random)<cfg.retriggerChance)){const count=weighted([3,4,5],[80,15,5],random);specials(view,9,count,random);extra=Math.min(R.scatter.awards[count],cfg.maxFreeRounds-awarded);awarded+=extra;retriggers+=extra;}
   stages.push(stage(view,'freeSpin',{startFreeGame:extra>0,freeSpinWon:extra,numFreeSpins:awarded-played-1,selectFgMultiple:multiple}));
  }
 }else if(kind==='jackpot'){
  const tier=qaScenario.replace('jackpot-',''),count=({mini:2,minor:3,major:4,grand:5})[tier]||weighted([2,3,4,5],[90,8,1.8,.2],random);specials(first,10,count,random);
  const jp=R.jackpot.tiers[count],s=stage(first,'spin',{isJp:jp}),award=cfg.poolAmounts[jp];s.isJp=jp;s.jpWinnings=award;s.currentWinnings=round(s.currentWinnings+award);total=round(total+award);s.totalWinnings=total;s.roundWinnings=s.currentWinnings;stages.push(s);
 }else stages.push(stage(first,'spin'));
 stages.forEach((s,currentView)=>{s.currentView=currentView;s.totalViews=stages.length;});
 return{stages,totalWinnings:total,summary:{mode:kind,originalRng:false,originalRtp:false,freeRoundsAwarded:awarded,retriggeredRounds:retriggers,freeRoundsPlayed:stages.filter(s=>s.action==='freeSpin').length,selectedFactor:multiple,isLuckyMoment:fever,transformedSymbols:transformCount,feverAssumptions:{frequency:cfg.feverChance,freeChance:effectiveFreeChance,freeMultiplier:cfg.feverFreeMultiplier,transformChance:cfg.feverTransformChance,wildTransformChance:cfg.feverWildTransformChance,maxTransforms:cfg.feverMaxTransforms,originalProbabilitiesKnown:false},unsupported:clone(R.unsupported)}};
}
