// @ts-nocheck
/** Independently authored 34-cell/top+6-column ways simulation.
 * Displayed pay values/ranges are evidence-backed; every probability, group
 * selection, upgrade symbol, rounding policy and feature frequency is local.
 * No captured round/replay response is used as an outcome template.
 */
import {displayedPaytable} from './DisplayedPaytable';
const copy=value=>JSON.parse(JSON.stringify(value));
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
const cents=value=>Math.round(value*100),money=value=>value/100;
export const waysDefaults=Object.freeze({groupChance:.12,silverChance:.65,wildChance:.012,scatterChance:.009,jackpotChance:0,maxCascades:100,maxStages:15000,maxFreeRounds:100});
export function waysConfig(options={}){
 const config={...waysDefaults,...options};
 for(const name of ['groupChance','silverChance','wildChance','scatterChance','jackpotChance'])assert(Number.isFinite(config[name])&&config[name]>=0&&config[name]<=1,'Invalid '+name);
 assert(config.wildChance+config.scatterChance+config.jackpotChance<=1,'Special probabilities exceed one');
 for(const[name,min,max]of [['maxCascades',1,1000],['maxStages',1,50000],['maxFreeRounds',10,100]])assert(Number.isInteger(config[name])&&config[name]>=min&&config[name]<=max,'Invalid '+name);
 assert((config.maxFreeRounds-10)%5===0,'Free cap must be initial10 plus five-round awards');return config;
}
/** Native visual bank: main starts0, FG starts2. Collection is independent of wins. */
export const rateBankRevision='native-rate-bank-v2';
export function collectRateBank(bank,entries,credited){
 assert(Number.isInteger(bank)&&bank>=0&&bank%2===0,'Invalid native rate bank');
 let count=0;
 for(const entry of entries)if(entry.symbol===2&&entry.rateCollectible!==false&&!credited.has(entry.id)){credited.add(entry.id);count++;}
 return{bank:bank+2*count,added:2*count,payoutMultiplier:Math.max(1,bank+2*count)};
}
/** Position identities follow the actual captured parser, not legacy enum ROW/COL. */
export function decodePosition(position){assert(Number.isInteger(position)&&position>=0&&position<34,'Invalid 34-cell position');return position<4?{reel:0,index:position,column:position+1}:{reel:(position-4)%6+1,index:Math.floor((position-4)/6),column:(position-4)%6};}
export function validateView(view){assert(Array.isArray(view)&&view.length===6&&view[0].length===4&&view.slice(1).every(row=>Array.isArray(row)&&row.length===6),'Expected top4 + five rows of six, 34 cells');assert(view.flat().every(symbol=>Number.isInteger(symbol)&&symbol>=1&&symbol<=14),'Invalid symbol ID');}
export function logicalSymbols(view,groups=[]){
 validateView(view);const flat=view.flat(),covered=new Set(),symbols=[];
 for(const group of groups){const positions=group.symbolPos;assert(Array.isArray(positions)&&positions.length>=2&&positions.length<=4,'Group must cover2..4 cells');const coords=positions.map(decodePosition);assert(coords.every(p=>p.reel===coords[0].reel&&p.reel>=2&&p.reel<=5),'Tall groups only in main reels2..5');assert(coords.every((p,i)=>!i||p.index===coords[i-1].index+1),'Tall group must be consecutive');assert(Number.isInteger(group.symbol)&&group.symbol>=2&&group.symbol<=12,'Grouped normal symbol required');for(const pos of positions){assert(!covered.has(pos)&&flat[pos]===group.symbol,'Group overlap or raw-symbol mismatch');covered.add(pos);}symbols.push({symbol:group.symbol,positions:[...positions],anchor:positions.at(-1),column:coords[0].column,level:group.level||0});}
 for(let pos=0;pos<34;pos++)if(!covered.has(pos)){const c=decodePosition(pos);symbols.push({symbol:flat[pos],positions:[pos],anchor:pos,column:c.column,level:0});}
 return symbols;
}
export function evaluateWays(view,groups,totalBet,multiplier=1){
 assert(Number.isFinite(totalBet)&&totalBet>0&&cents(totalBet)>0,'Positive stake required');assert(Number.isSafeInteger(multiplier)&&multiplier>=1,'Positive integral multiplier required');
 const symbols=logicalSymbols(view,groups),columns=Array.from({length:6},(_,column)=>symbols.filter(symbol=>symbol.column===column));
 const counts=columns.map(column=>column.length),totalWays=[];counts.reduce((n,count)=>{const value=n*count;totalWays.push(value);return value;},1);
 const wins=[];
 for(const rule of displayedPaytable.symbols){const matching=columns.map(column=>column.filter(symbol=>symbol.symbol===rule.id||symbol.symbol===1));let length=0;for(const column of matching){if(!column.length)break;length++;}if(length<3)continue;const ways=matching.slice(0,length).reduce((n,column)=>n*column.length,1),payValue=rule.payValues[length-3],positions=matching.slice(0,length).flatMap(column=>column.map(symbol=>symbol.anchor));const baseCents=Math.round(cents(totalBet)*payValue*ways/20);assert(Number.isSafeInteger(baseCents),'Ways payout overflow');wins.push({symbol:rule.id,symbolPos:positions,symbolCount:length,ways,payValue,winnings:money(baseCents)});}
 const baseCents=wins.reduce((sum,win)=>sum+cents(win.winnings),0);assert(Number.isSafeInteger(baseCents*multiplier),'Multiplier payout overflow');return{wins,baseCents,payoutCents:baseCents*multiplier,totalWays,symbols};
}
export function generateWaysOperation({totalBet=1,mode='ordinary',random=Math.random,config={},scenario=''}={}){
 assert(mode==='ordinary'||mode==='freeGame','Unknown ways mode');const c=waysConfig(config);const rng=()=>{const n=random();assert(Number.isFinite(n)&&n>=0&&n<1,'RNG must return [0,1)');return n;};let identity=0,totalCents=0,freeMultiplier=2,freeAwarded=0,played=0;
 const stages=[],summary={originalRngRestored:false,originalRtpRestored:false,method:'new 34-cell grouped-ways implementation',mathRevision:rateBankRevision,mode,scenario,localDistributions:copy(c),rounds:[],assumptions:['group/frequency distribution','upgrade replacement symbol selection','cent rounding per winning symbol','native rate bank starts0 main/2 FG; all newly dropped female logical tokens collect once on main winning stages or any FG stage; main no-win terminal skips collection; surviving markers carry; upgraded-in-place token is not newly dropped','top-row refill direction based on native reversed top reel','jackpot and secondary bonus distribution handled separately']};
 const token=(symbol,size=1,level=0,rateCollectible=true)=>({id:++identity,symbol,size,level,rateCollectible});
 function normal(){return 2+Math.floor(rng()*11);}
 function draw(column,remaining,specials=true){let symbol=normal();if(specials){const value=rng(),wild=column>=1&&column<=4?c.wildChance:0;if(value<wild)symbol=1;else if(value<wild+c.scatterChance)symbol=14;else if(value<wild+c.scatterChance+c.jackpotChance)symbol=13;}let size=1;if(symbol>=2&&symbol<=12&&column>=1&&column<=4&&remaining>=2&&rng()<c.groupChance)size=2+Math.floor(rng()*Math.min(3,remaining-1));return token(symbol,size,size>1&&rng()<c.silverChance?1:0);}
 function board(specials=true){const top=Array.from({length:4},(_,index)=>draw(index+1,1,specials)),columns=Array.from({length:6},(_,column)=>{const list=[];let remaining=5;while(remaining){const item=draw(column,remaining,specials);list.push(item);remaining-=item.size;}return list;});return{top,columns};}
 function flatten(board){const view=[board.top.map(item=>item.symbol),...Array.from({length:5},()=>Array(6))],groups=[],entries=[];board.top.forEach((item,pos)=>entries.push({...item,positions:[pos],anchor:pos,column:pos+1,top:true}));board.columns.forEach((column,index)=>{let row=0;for(const item of column){const positions=Array.from({length:item.size},(_,offset)=>4+6*(row+offset)+index);row+=item.size;for(const pos of positions)view[1+Math.floor((pos-4)/6)][index]=item.symbol;if(item.size>1)groups.push({symbol:item.symbol,symbolPos:positions,level:item.level});entries.push({...item,positions,anchor:positions.at(-1),column:index,top:false});}});return{view,groups,entries};}
 function forceWin(board,level){board.columns[0][0].symbol=4;board.columns[1]=[token(4,2,level),token(normal()),token(normal()),token(normal())];board.columns[2][0].symbol=4;}
 function triggerBoard(){for(let attempt=0;attempt<1000;attempt++){const b=board(false);b.top=Array.from({length:4},()=>token(14));const flat=flatten(b);if(!evaluateWays(flat.view,flat.groups,totalBet).wins.length)return b;}throw Error('Trigger initialization limit');}
 function nextBoard(board,wins,entries,qaRepeat=false){
  const winning=new Set(wins.flatMap(win=>win.symbolPos)),upgrades=[],transformInfo={toSymbol:[],toWild:[]};const changed=new Map();
  for(const entry of entries)if(winning.has(entry.anchor)){
   if(entry.size>1&&entry.level===1){const symbol=qaRepeat?4:normal();changed.set(entry.id,[token(symbol,entry.size,2,false)]);upgrades.push({symbolPos:entry.positions,beforeLevel:1,afterLevel:2,beforeSymbol:entry.symbol,afterSymbol:symbol});transformInfo.toSymbol.push({position:entry.anchor,newSymbol:symbol});}
   else if(entry.size>1&&entry.level===2){changed.set(entry.id,Array.from({length:entry.size},()=>token(1)));upgrades.push({symbolPos:entry.positions,beforeLevel:2,afterLevel:0,beforeSymbol:entry.symbol,afterSymbol:1});for(const position of entry.positions)transformInfo.toWild.push({position,newSymbol:1});}
   else changed.set(entry.id,[]);
  }
  const survivors=items=>items.flatMap(item=>changed.has(item.id)?changed.get(item.id):[item]);
  const top=survivors(board.top);while(top.length<4)top.push(draw(top.length+1,1));
  const columns=board.columns.map((items,column)=>{const kept=survivors(items);let missing=5-kept.reduce((sum,item)=>sum+item.size,0),added=[];while(missing){const item=draw(column,missing);added.push(item);missing-=item.size;}return[...added,...kept];});
  const next={top,columns};if(qaRepeat){next.columns[0][0].symbol=4;next.columns[2][0].symbol=4;}return{board:next,upgrades,transformInfo};
 }
 function push(stage){assert(stages.length<c.maxStages,'Ways stage limit; reject entire operation');stages.push(stage);}
 function subround(action,remaining,forcedBoard=null,qa=''){
  let b=forcedBoard||board(),roundCents=0,multiplier=action==='freeSpin'?freeMultiplier:0,credited=new Set();if(qa==='ways-win'||qa==='silver-gold')forceWin(b,1);if(qa==='gold-wild')forceWin(b,2);
  for(let cascade=0;cascade<=c.maxCascades;cascade++){
   const flat=flatten(b);let result=evaluateWays(flat.view,flat.groups,totalBet);const bankBefore=multiplier;const newMarkers=flat.entries.filter(entry=>entry.symbol===2&&entry.rateCollectible!==false&&!credited.has(entry.id));const nativeCollect=action==='freeSpin'||result.wins.length>0;const collected=collectRateBank(multiplier,nativeCollect?flat.entries:[],credited);multiplier=collected.bank;if(action==='freeSpin')freeMultiplier=multiplier;
   const payout=result.baseCents*collected.payoutMultiplier;assert(Number.isSafeInteger(payout)&&Number.isSafeInteger(totalCents+payout),'Operation award overflow');roundCents+=payout;totalCents+=payout;
   const stage={action,view:flat.view,winSymbols:result.wins,groupSymbols:flat.groups,groupUpgrade:[],transformInfo:{toSymbol:[],toWild:[]},totalWays:result.totalWays,currentTimes:multiplier,dragonLevel:0,viewWinnings:money(payout),roundWinnings:money(roundCents),totalWinnings:money(totalCents),totalStake:totalBet,freeGameCount:remaining,startFreeGame:false,localRules:true,localFeatureRound:played,localAddedMultiplier:collected.added,localPayoutMultiplier:collected.payoutMultiplier,localMathRevision:rateBankRevision,localRateProvenance:{revision:'native-rate-resume-v1',bankBefore,bankAfter:multiplier,femalePositions:flat.entries.filter(entry=>entry.symbol===2).map(entry=>entry.anchor),newMarkerPositions:newMarkers.map(entry=>entry.anchor),collectPositions:nativeCollect?newMarkers.map(entry=>entry.anchor):[],route:action==='freeSpin'&&!result.wins.length?'free-no-win':result.wins.length?'win-line':'none'}};
   if(!result.wins.length){const scatter=flat.entries.filter(item=>item.symbol===14).length;summary.rounds.push({action,remaining,baseWinnings:money(roundCents),multiplier,payoutMultiplier:collected.payoutMultiplier,scatters:scatter,stageCount:cascade+1});push(stage);return{stage,scatter};}
   assert(cascade<c.maxCascades,'Ways cascade limit; reject entire operation');const next=nextBoard(b,result.wins,flat.entries,qa==='silver-gold'&&cascade===0);stage.groupUpgrade=next.upgrades;stage.transformInfo=next.transformInfo;push(stage);b=next.board;
  }
 }
 function freeSeries(){freeAwarded=10;let remaining=10;while(remaining>0){played++;const forced=scenario==='free-retrigger'&&played===1?triggerBoard():null;const round=subround('freeSpin',remaining,forced);remaining--;if(round.scatter>=4&&freeAwarded<c.maxFreeRounds){const add=Math.min(5,c.maxFreeRounds-freeAwarded);freeAwarded+=add;remaining+=add;round.stage.startFreeGame=true;round.stage.localExtraFreeRounds=add;}round.stage.localRemainingAfterRound=remaining;} }
 if(mode==='freeGame'||scenario==='freeGame'||scenario==='free-retrigger'){
  const intro=flatten(triggerBoard());push({action:'spin',view:intro.view,winSymbols:[],groupSymbols:intro.groups,groupUpgrade:[],transformInfo:{toSymbol:[],toWild:[]},totalWays:evaluateWays(intro.view,intro.groups,totalBet).totalWays,currentTimes:0,dragonLevel:0,viewWinnings:0,roundWinnings:0,totalWinnings:0,totalStake:totalBet,freeGameCount:10,startFreeGame:true,localRules:true,localFeatureRound:0,localAddedMultiplier:0,localPayoutMultiplier:1,localMathRevision:rateBankRevision,localRateProvenance:{revision:'native-rate-resume-v1',bankBefore:0,bankAfter:0,femalePositions:intro.entries.filter(entry=>entry.symbol===2).map(entry=>entry.anchor),newMarkerPositions:intro.entries.filter(entry=>entry.symbol===2).map(entry=>entry.anchor),collectPositions:[],route:'none'}});freeSeries();
 }else{
  let selected=null;if(scenario==='ways-lose'){for(let n=0;n<1000;n++){const candidate=board(false),flat=flatten(candidate);if(!evaluateWays(flat.view,flat.groups,totalBet).wins.length){selected=candidate;break;}}assert(selected,'Losing board initialization limit');}
  played++;const result=subround('spin',0,selected,scenario);if(result.scatter>=4){result.stage.startFreeGame=true;result.stage.freeGameCount=10;freeSeries();}
 }
 stages.forEach((stage,index)=>{stage.currentView=index;stage.totalViews=stages.length;});summary.playedRounds=played;summary.freeRoundsAwarded=freeAwarded;summary.finalFreeMultiplier=freeMultiplier;return{stages,totalWinnings:money(totalCents),featureSummary:summary};
}
