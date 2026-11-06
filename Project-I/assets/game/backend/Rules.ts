// @ts-nocheck
// New local rules from Project-I's own displayed 20-line paytable.
// Weights and feature frequencies are configurable simulation assumptions.
import {definitionConfig} from './DisplayedRules';
const copy=x=>JSON.parse(JSON.stringify(x)),cents=x=>Math.round(x*100),money=x=>x/100;
export const simulationDefaults={normalWeights:[1,1,1,1,1,1,1],wildChance:.035,scatterChance:.014,bonusChance:.006,maxCascades:100,maxStages:10000,maxFreeRounds:100,transformChance:.01,miniBonusChance:.003};
const check=(v,m)=>{if(!v)throw Error(m);};
export function localConfiguration(options={}){
 const c={...simulationDefaults,...options};
 for(const k of ['wildChance','scatterChance','bonusChance','transformChance','miniBonusChance'])check(Number.isFinite(c[k])&&c[k]>=0&&c[k]<=1,'Invalid '+k);
 check(c.wildChance+c.scatterChance+c.bonusChance<=1,'Invalid combined probability');
 check(c.normalWeights.length===7&&c.normalWeights.every(x=>Number.isFinite(x)&&x>=0)&&c.normalWeights.some(x=>x>0),'Seven normal symbol weights required');
 for(const k of ['maxCascades','maxStages','maxFreeRounds'])check(Number.isInteger(c[k])&&c[k]>0&&c[k]<=10000,'Invalid '+k);
 check(c.maxFreeRounds<=100,'Displayed free-round cap is100');return c;
}
export function evaluateBoard(view,totalBet,currentTimes=1){
 check(Array.isArray(view)&&view.length===3&&view.every(r=>Array.isArray(r)&&r.length===5),'Project-I requires3x5 view');
 check(view.flat().every(x=>Number.isInteger(x)&&x>=1&&x<=10),'Unknown symbol');
 check(Number.isFinite(totalBet)&&totalBet>0&&Number.isInteger(currentTimes)&&currentTimes>=1&&currentTimes<=5,'Invalid stake/multiplier');
 const flat=view.flat(),winSymbols=[];
 for(const item of definitionConfig.winlineDefs){
  const selected=item.line.map(p=>flat[p]);let symbol=selected.find(x=>x!==1);
  if(!symbol)symbol=2;if(symbol<2||symbol>8)continue;
  let count=0;for(const x of selected){if(x!==1&&x!==symbol)break;count++;}
  if(count<3)continue;
  const odds=definitionConfig.oddsList[symbol][count];
  winSymbols.push({symbol,symbolPos:item.line.slice(0,count),winLine:Number(item.order),counts:count,payoutFactory:odds,winnings:money(cents(totalBet*odds*currentTimes/20))});
 }
 return {winSymbols,winnings:money(winSymbols.reduce((n,w)=>n+cents(w.winnings),0))};
}
export function gravity(view,winSymbols,draw){
 const flat=view.flat(),removed=new Set(winSymbols.flatMap(w=>w.symbolPos)),next=Array(15),posTransform=[];
 for(let col=0;col<5;col++){let dest=2;
  for(let row=2;row>=0;row--){const beforePos=row*5+col;if(removed.has(beforePos))continue;const afterPos=dest--*5+col;next[afterPos]=flat[beforePos];if(beforePos!==afterPos)posTransform.push({beforePos,afterPos});}
  for(;dest>=0;dest--)next[dest*5+col]=draw();
 }
 return {view:Array.from({length:3},(_,r)=>next.slice(r*5,r*5+5)),posTransform};
}
export function generateRound({totalBet,random=Math.random,config={},buyFeature=false,featureIndex=0,qaScenario=''}={}){
 const c=localConfiguration(config),states=[];let totalCents=0,awarded=0,played=0,bonusType='';
 check(Number.isFinite(totalBet)&&totalBet>0,'Positive stake required');
 check(['','win','lose','freeGame','free-retrigger','fullCombo','elixirFurnace','jpGame','fortuneLanding','luckyWealth','transform'].includes(qaScenario),'Unknown isolated Project-I QA scenario');
 const rng=()=>{const r=random();check(Number.isFinite(r)&&r>=0&&r<1,'RNG must return[0,1)');return r;};
 function normal(){let r=rng()*c.normalWeights.reduce((a,b)=>a+b,0);for(let i=0;i<7;i++){r-=c.normalWeights[i];if(r<0)return i+2;}return 8;}
 function draw(allowSpecial=true){const r=rng();if(r<c.wildChance)return 1;if(allowSpecial&&r<c.wildChance+c.scatterChance)return 9;if(allowSpecial&&r<c.wildChance+c.scatterChance+c.bonusChance)return 10;return normal();}
 function stage(view,action,remaining,times){return{action,view:copy(view),resultView:[],winSymbols:[],transformInfo:{toSymbol:[],toWild:[]},posTransform:[],currentTimes:times,totalStake:totalBet,roundWinnings:0,totalWinnings:money(totalCents),freeGameCount:remaining,startFreeGame:false,isJp:'',dragonLevel:0,localRules:true};}
 const push=s=>{check(states.length<c.maxStages,'Stage safety limit; reject before debit');states.push(s);};
 function subround(action,remaining,forced=''){
  let view=Array.from({length:3},()=>Array.from({length:5},()=>draw()));
  if(forced){view=Array.from({length:3},(_,r)=>Array.from({length:5},(_,col)=>2+(r*5+col)%7));
   if(forced==='win')view[1].fill(2,0,3);
   if(forced==='fullCombo')view=Array.from({length:3},()=>Array(5).fill(2));
   if(forced==='freeGame'||forced==='retrigger')for(const col of [0,2,4])view[0][col]=9;
   if(forced==='elixirFurnace')for(const col of [0,2,4])view[0][col]=10;
  }
  let times=1,roundCents=0,transformed=false;
  for(let cascade=0;cascade<=c.maxCascades;cascade++){
   const s=stage(view,action,remaining,times);
   if(!transformed&&(forced==='transform'||(!forced&&rng()<c.transformChance))){
    // Local optional transformation uses the original character/transform flow.
    const target=2+Math.floor(rng()*7),positions=[5,6,7];
    s.transformInfo.toSymbol=positions.map(position=>({position,newSymbol:target}));
    const result=copy(view);for(const p of positions)result[Math.floor(p/5)][p%5]=target;
    view=result;s.resultView=copy(result);transformed=true;
   }
   const result=evaluateBoard(view,totalBet,times),scatter=view.flat().filter(x=>x===9).length,bonus=view.flat().filter(x=>x===10).length;
   s.winSymbols=result.winSymbols;
   roundCents+=cents(result.winnings);totalCents+=cents(result.winnings);s.roundWinnings=money(roundCents);s.totalWinnings=money(totalCents);
   if(result.winSymbols.length){
    check(cascade<c.maxCascades,'Cascade safety limit; reject before debit');
    s.resultView=copy(view);const next=gravity(view,result.winSymbols,()=>draw(false));s.posTransform=next.posTransform;push(s);view=next.view;times=Math.min(5,times+1);continue;
   }
   if(scatter>=3&&awarded<c.maxFreeRounds){const extra=Math.min(10,c.maxFreeRounds-awarded);awarded+=extra;s.startFreeGame=extra>0;s.localExtraFreeRounds=extra;s.freeGameCount=remaining+extra;}
   else if(action==='spin'&&bonus>=3){bonusType='elixirFurnace';s.isBonus=true;}
   push(s);return s.localExtraFreeRounds||0;
  }
  throw Error('Unreachable Project-I cascade');
 }
 let forced=qaScenario==='free-retrigger'?'freeGame':qaScenario;
 if(buyFeature)forced=featureIndex===0?'freeGame':featureIndex===1?'fullCombo':'elixirFurnace';
 let remaining=subround('spin',0,forced);let retriggered=false;
 while(remaining>0){played++;remaining--;const extra=subround('freeSpin',remaining,qaScenario==='free-retrigger'&&!retriggered?'retrigger':'');if(extra)retriggered=true;remaining+=extra;check(played<=100,'Displayed free spin cap exceeded');}
 if(['jpGame','fortuneLanding','luckyWealth'].includes(qaScenario))bonusType=qaScenario;
 if(!bonusType&&!buyFeature&&!qaScenario&&rng()<c.miniBonusChance)bonusType=['jpGame','fortuneLanding','luckyWealth'][Math.floor(rng()*3)];
 states.forEach((s,i)=>{s.currentView=i;s.totalViews=states.length;});
 return{stages:states,totalWinnings:money(totalCents),bonusType,summary:{originalRngRestored:false,originalRtpRestored:false,method:'New20-line simulated cascade engine using displayed paytable',freeRoundsAwarded:awarded,playedFreeRounds:played,localConfiguration:copy(c),localAssumptions:['independent weighted symbols','optional transform distribution','bonus probabilities and awards','cent rounding','20-line wild tie chooses highest symbol']}};
}
