// @ts-nocheck
/** Own H 4x5 line-pay implementation. Visible odds and forty source lines are
 * transcribed; sampling, pricing and bet-unit conventions are explicit simulation choices. */
import{lineRows}from'./Paylines';
import{displayedRules as rules}from'./DisplayedRules';
const copy=x=>JSON.parse(JSON.stringify(x)),cent=x=>Math.round(x*100),money=x=>x/100;
function assert(ok,message){if(!ok)throw Error(message);}
export const simulationDefaults=Object.freeze({normalWeights:[1,1,1,1,1,1,1],mainWildReelChance:.035,freeWildReelChance:.04,scatterReelChance:.05,freeGamePrice:100,fullComboPrice:200,maxStages:11});
export function configuration(input={}){const c={...simulationDefaults,...input};assert(Array.isArray(c.normalWeights)&&c.normalWeights.length===7&&c.normalWeights.every(v=>Number.isFinite(v)&&v>=0)&&c.normalWeights.some(v=>v>0),'Seven ordinary symbol weights required');for(const k of ['mainWildReelChance','freeWildReelChance','scatterReelChance'])assert(Number.isFinite(c[k])&&c[k]>=0&&c[k]<=1,'Invalid '+k);for(const k of ['freeGamePrice','fullComboPrice'])assert(Number.isInteger(c[k])&&c[k]>0&&c[k]<=100000,'Invalid local feature price');return c;}
export function effectiveView(view,wildCols=[]){assert(Array.isArray(view)&&view.length===4&&view.every(r=>Array.isArray(r)&&r.length===5),'H requires actual4x5 board');assert(view.flat().every(s=>Number.isInteger(s)&&s>=1&&s<=10),'Unknown H symbol');assert(wildCols.every(c=>Number.isInteger(c)&&c>=0&&c<5),'modifier.col must be zero-based0..4');return view.map(row=>row.map((s,c)=>wildCols.includes(c)&&s!==9?1:s));}
/** Source GameData.parserWinSymbols converts each mask with log2(mask), one
 * element per winning reel. Arrays stop at the3/4/5 matched reel count. */
export function evaluateLines(view,totalBet,wildCols=[]){assert(Number.isFinite(totalBet)&&totalBet>0&&cent(totalBet)>0,'Positive cent bet required');const effective=effectiveView(view,wildCols),winSymbols=[];
 for(let index=0;index<lineRows.length;index++){
  const rows=lineRows[index],values=rows.map((r,c)=>effective[r][c]);let best=null;
  for(const symbol of rules.symbols){let count=0;for(const value of values){if(value===symbol.id||(symbol.id!==1&&value===1))count++;else break;}if(count<3)continue;const payoutFactory=symbol.odds[count],winnings=money(cent(totalBet/40*payoutFactory));
   // One highest award per line. Tie keeps WILD's own3/4/5 award when equal.
   if(!best||winnings>best.winnings)best={symbol:symbol.id,counts:count,symbolPos:rows.slice(0,count).map(r=>2**r),winLine:index,payoutFactory,winnings,type:'line'};
  }
  if(best)winSymbols.push(best);
 }
 return{effectiveView:effective,winSymbols,winnings:money(winSymbols.reduce((n,w)=>n+cent(w.winnings),0)),fullCombo:effective.flat().every(s=>s===effective[0][0])};
}
export function scatterResult(view,totalBet){const found=[];for(const col of rules.scatter.requiredReels){const row=view.findIndex(r=>r[col]===9);if(row>=0)found.push({col,row});}return{trigger:found.length===3,positions:found,winnings:found.length===3?money(cent(totalBet/40*80)):0};}
export function generateRound({totalBet,random=Math.random,config={},feature='',qaScenario=''}={}){
 const c=configuration(config);assert(['','freeGame','buyFullCombo'].includes(feature),'Only mapped H feature types are supported');assert(['','win','lose','expandedWild','freeGame','free-sticky'].includes(qaScenario),'Unknown isolated H scenario');
 const rng=()=>{const x=random();assert(Number.isFinite(x)&&x>=0&&x<1,'RNG must return[0,1)');return x;};
 const ordinary=()=>{let x=rng()*c.normalWeights.reduce((a,b)=>a+b,0);for(let i=0;i<7;i++){x-=c.normalWeights[i];if(x<0)return i+2;}return 8;};
 const stages=[],summary={project:'Project-H',originalRngRestored:false,originalRtpRestored:false,method:'new4x5 line-pay simulation from H odds and forty displayed lines',configuration:copy(c),localAssumptions:['40-line bet unit = totalStake/40 (supported by source fullCombo debug fixture; old initialData has stale20 lines)','highest substitute award per line','per-line cent rounding','scatter cash uses totalStake/40 times80 as own convention; source debug cash values are contradictory','independent local ordinary weights and wild-reel/scatter chances','persistent expanded wild reels in FG','freeGame100 seen only in debug initialData; fullCombo200 is own choice','no undocumented FG retriggers','buyFullCombo chooses a single ordinary symbol and computes its actual forty-line award'],freeRounds:0};
 let totalCents=0;
 function board(){return Array.from({length:4},()=>Array.from({length:5},ordinary));}
 function makeView(action,priorCols=new Set(),forced=''){
  let view=board(),cols=new Set(priorCols);
  const chance=action==='freeSpin'?c.freeWildReelChance:c.mainWildReelChance;
  for(let col=0;col<5;col++)if(!cols.has(col)&&rng()<chance){view[Math.floor(rng()*4)][col]=1;cols.add(col);}
  if(action==='spin')for(const col of [1,2,3])if(rng()<c.scatterReelChance)view[Math.floor(rng()*4)][col]=9;
  if(forced){view=Array.from({length:4},(_,r)=>Array.from({length:5},(_,col)=>2+(r+2*col)%7));cols=new Set(priorCols);
   if(forced==='win')view[1]=[2,2,2,7,8];
   if(forced==='expandedWild'){view[1]=[2,1,2,7,8];cols.add(1);}
   if(forced==='trigger')for(const col of [1,2,3])view[0][col]=9;
   if(forced==='sticky'){cols.add(1);view[2][1]=1;}
  }
  return{view,cols};
 }
 function stage(action,generated,remaining=0,trigger=false,freeWon=0){const result=evaluateLines(generated.view,totalBet,Array.from(generated.cols)),scatter=action==='spin'?scatterResult(generated.view,totalBet):{trigger:false,winnings:0};
  const currentCents=cent(result.winnings)+cent(scatter.winnings);totalCents+=currentCents;
  const out={action,view:copy(generated.view),winSymbols:result.winSymbols,modifier:Array.from(generated.cols).sort((a,b)=>a-b).map(col=>({col,pos:[col,col+5,col+10,col+15]})),scatterPos:Array.from({length:5},(_,col)=>generated.view.reduce((mask,row,r)=>mask|(row[col]===9?2**r:0),0)),noWinReward:0,freespinWinnings:action==='freeSpin'?money(totalCents-cent(stages[0]?.totalWinnings||0)):0,totalStake:totalBet,currentWinnings:action==='spin'?result.winnings:money(currentCents),roundWinnings:money(currentCents),totalWinnings:money(totalCents),startFreeGame:trigger,numFreeSpins:remaining,freeSpinWon:freeWon,freeTimesDenominator:trigger||action==='freeSpin'?10:0,currentTimes:1,isJp:'',fullCombo:result.fullCombo,transformInfo:{toSymbol:[],toWild:[]},localRules:true,scatterWinnings:scatter.winnings};stages.push(out);return out;
 }
 if(feature==='buyFullCombo'){const symbol=ordinary(),view=Array.from({length:4},()=>Array(5).fill(symbol));stage('spin',{view,cols:new Set()});summary.purchasedFullComboSymbol=symbol;}
 else{
  const buy=feature==='freeGame',qaFree=['freeGame','free-sticky'].includes(qaScenario),forced=buy||qaFree?'trigger':qaScenario;
  const main=makeView('spin',new Set(),forced),trigger=buy||qaFree||scatterResult(main.view,totalBet).trigger;
  const first=stage('spin',main,trigger?10:0,trigger,trigger?10:0);
  // A purchased entry is not a separately spun scatter cash prize in this own model.
  if(buy&&first.scatterWinnings>0){totalCents-=cent(first.scatterWinnings);first.roundWinnings=money(cent(first.roundWinnings)-cent(first.scatterWinnings));first.totalWinnings=money(totalCents);first.scatterWinnings=0;}
  if(trigger){let locked=new Set(main.cols);for(let round=0;round<10;round++){const generated=makeView('freeSpin',locked,qaScenario==='free-sticky'&&round===0?'sticky':'');locked=new Set(generated.cols);stage('freeSpin',generated,9-round,false,0);summary.freeRounds++;}}
 }
 assert(stages.length<=11,'Unexpected H native phase count');stages.forEach((s,i)=>{s.currentView=i;s.totalViews=stages.length;});assert(Number.isSafeInteger(totalCents)&&totalCents>=0,'Award overflow');return{stages,totalWinnings:money(totalCents),summary};
}
