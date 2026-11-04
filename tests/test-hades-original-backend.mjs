import { test } from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const {HadesLocalBackend,evaluateClusters,PAYOUTS,FEATURES}=await import('data:text/javascript;base64,'+Buffer.from(readFileSync(new URL('../Project-B/assets/game/backend/HadesLocalBackend.ts',import.meta.url))).toString('base64'));

function random(seed=90210){return()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};}

test('displayed original paytable: five and 25 matching symbols at stake 1',()=>{
  assert.equal(PAYOUTS[2][0],.5); assert.equal(PAYOUTS[2][20],300);
  for(let symbol=2;symbol<=8;symbol++){
    const wins=evaluateClusters(Array.from({length:5},()=>Array(5).fill(symbol)),1);
    assert.equal(wins.length,1);assert.equal(wins[0].winnings,PAYOUTS[symbol][20]);
  }
});
test('cluster adjacency excludes diagonal-only matches and counts connected wild substitution',()=>{
  const board=Array.from({length:5},(_,r)=>Array.from({length:5},(_,c)=>2+(r+c)%7));
  assert.equal(evaluateClusters(board,10).length,0);
  board[0]=[2,2,1,2,2];
  const win=evaluateClusters(board,10).find(w=>w.symbolId===2);
  assert.ok(win);assert.ok(win.symbolPos.includes(2));assert.ok(win.symbolPos.length>=5);
});
test('generated cascades preserve surviving symbols and moving Wild identities; settle exactly once',()=>{
  const backend=new HadesLocalBackend({random:random()});
  let cascading=0;
  for(let n=0;n<300;n++){
    const before=backend.state.balance;
    const spin=backend.request('spin',{stakeIndex:0,ratioIndex:0}),states=spin.engine.gameState;
    assert.equal(backend.state.balance,Math.round((before-1)*100)/100);
    assert.equal(states.at(-1).winSymbols.length,0);
    let score=0;
    for(let i=0;i<states.length;i++){
      const stage=states[i];
      assert.equal(stage.currentView,i);assert.equal(stage.totalViews,states.length);
      score=Math.round((score+stage.winSymbols.reduce((s,w)=>s+w.winnings,0)*stage.currentTimes)*100)/100;
      assert.equal(stage.totalWinnings,score);
      if(!stage.winSymbols.length)continue;
      cascading++;
      const removed=new Set(stage.winSymbols.flatMap(w=>w.symbolPos));
      assert.ok(removed.has(stage.randomWildPos));removed.delete(stage.randomWildPos);
      const previous=stage.view.flat();previous[stage.randomWildPos]=1;
      const current=states[i+1].view.flat(),moves=new Map(stage.posTransform.map(p=>[p.beforePos,p.afterPos]));
      for(let p=0;p<25;p++)if(!removed.has(p))assert.equal(current[moves.get(p)??p],previous[p]);
    }
    const pending=JSON.stringify(backend.state.pending);
    const resume=backend.request('spin',{spinId:spin.engine.spinId});
    assert.deepEqual(resume.engine.gameState,states);assert.equal(JSON.stringify(backend.state.pending),pending);
    let bonus=spin.engine.bonusState?.prize||0;
    if(spin.engine.bonusState?.bonusType==='jpGame')for(let pickedPos=0;pickedPos<6;pickedPos++){
      bonus=backend.request('spin',{spinId:spin.engine.spinId,action:'collect',actionData:{pickedPos}}).engine.bonusState.totalWinnings;
    }
    backend.request('closeSpin',{spinId:spin.engine.spinId});
    const after=backend.state.balance;assert.equal(after,Math.round((before-1+score+bonus)*100)/100);
    backend.request('closeSpin',{spinId:spin.engine.spinId});assert.equal(backend.state.balance,after);
  }
  assert.ok(cascading>0);
});
for(const feature of FEATURES)test(`purchased ${feature.feature} acknowledges, reveals without debit and settles once`,()=>{
  const backend=new HadesLocalBackend({random:random(405)});
  const ack=backend.request('spin',{action:'buyFeature',featureIndex:feature.featureIndex,featureValue:feature.feature,stakeIndex:0,ratioIndex:0});
  const id=ack.engine.gameState.spinId;
  assert.equal(backend.state.balance,10000-feature.featureRate);
  const spin=backend.request('spin',{spinId:id});
  assert.equal(backend.state.balance,10000-feature.featureRate);
  assert.ok(Array.isArray(spin.engine.gameState));
  if(feature.feature==='freeGame')assert.equal(spin.engine.gameState.filter(s=>s.action==='freeSpin'&&s.currentTimes===1).length>=8,true);
  if(feature.feature==='superFreeGame')assert.equal(spin.engine.gameState.filter(s=>s.action==='freeSpin'&&s.currentTimes===1).length>=12,true);
  if(feature.feature==='thePowerOfHades')assert.ok([2,3,4,5].includes(spin.engine.gameState[0].groupSymbols[0].size));
  if(feature.feature==='theWrathOfHades')assert.ok(spin.engine.gameState[0].bonusTimes>1);
  backend.request('closeSpin',{spinId:id});const balance=backend.state.balance;
  backend.request('closeSpin',{spinId:id});assert.equal(backend.state.balance,balance);
});
for(const tier of ['mini','minor','major','grand'])test(`Jackpot ${tier} uses three matching picks and credits only after close`,()=>{
  const backend=new HadesLocalBackend({random:random(405),scenario:'jackpot-'+tier});
  const spin=backend.request('spin',{stakeIndex:0,ratioIndex:0}),id=spin.engine.spinId;
  assert.equal(spin.engine.gameState[0].view.flat().filter(s=>s===10).length,3);
  assert.throws(()=>backend.request('closeSpin',{spinId:id}),/selection/);
  let result;
  for(let pickedPos=0;pickedPos<6;pickedPos++){
    result=backend.request('spin',{spinId:id,action:'collect',actionData:{pickedPos}});
    const duplicate=backend.request('spin',{spinId:id,action:'collect',actionData:{pickedPos}});
    assert.deepEqual(duplicate.engine.bonusState,result.engine.bonusState);
    assert.equal(backend.state.balance,9999);
  }
  const award={mini:20,minor:50,major:2500,grand:10000}[tier];
  assert.equal(result.engine.bonusState.totalWinnings,award);
  assert.equal(result.engine.bonusState.picked.filter(p=>p.category==='jp-'+tier).length,3);
  backend.request('closeSpin',{spinId:id});assert.equal(backend.state.balance,9999+award);
});
test('failed persistence and unbounded draw cannot mutate wallet or sequence',()=>{
  const backend=new HadesLocalBackend({random:random(),storage:{getItem(){return null;},setItem(){throw new Error('disk failed');}}});
  const before=JSON.stringify(backend.state);
  assert.throws(()=>backend.request('spin',{stakeIndex:0,ratioIndex:0}),/disk failed/);
  assert.equal(JSON.stringify(backend.state),before);
  const stuck=new HadesLocalBackend({random:()=>0});const prior=JSON.stringify(stuck.state);
  assert.throws(()=>stuck.request('spin',{stakeIndex:0,ratioIndex:0}),/limit/);
  assert.equal(JSON.stringify(stuck.state),prior);
});

for(const size of [2,3,4,5])test(`giant ${size}x${size} covers a square and is removed as one winning group`,()=>{
  const backend=new HadesLocalBackend({random:random(405),scenario:`giant-${size}`});
  const spin=backend.request('spin',{stakeIndex:0,ratioIndex:0});
  const first=spin.engine.gameState[0],group=first.groupSymbols[0];
  assert.equal(group.size,size);assert.equal(new Set(group.symbolPos).size,size*size);
  const rows=new Set(group.symbolPos.map(p=>Math.floor(p/5))),cols=new Set(group.symbolPos.map(p=>p%5));
  assert.equal(rows.size,size);assert.equal(cols.size,size);
  const win=first.winSymbols.find(w=>w.symbolId===group.symbolId);
  for(const p of group.symbolPos){assert.equal(first.view.flat()[p],group.symbolId);assert.ok(win.symbolPos.includes(p));}
  assert.ok(spin.engine.gameState.slice(1).every(s=>s.groupSymbols.length===0));
  backend.request('closeSpin',{spinId:spin.engine.spinId});
  assert.equal(backend.state.balance,Math.round((9999+spin.engine.gameState.at(-1).totalWinnings)*100)/100);
});
test('treasure prize is preserved on resume, credits once, and history matches original row fields',()=>{
  // Select a deterministic empty round; the scenario does not replace the RNG.
  let backend,spin;
  for(let seed=1;seed<100;seed++){
    backend=new HadesLocalBackend({random:random(seed),scenario:'treasure'});
    spin=backend.request('spin',{stakeIndex:0,ratioIndex:0});
    if(spin.engine.bonusState?.bonusType==='noWinReward')break;
  }
  assert.equal(spin.engine.bonusState.prize,5);
  assert.deepEqual(backend.request('initial').engine.bonusState,spin.engine.bonusState);
  assert.equal(backend.state.balance,9999);
  backend.request('closeSpin',{spinId:spin.engine.spinId});
  backend.request('closeSpin',{spinId:spin.engine.spinId});
  assert.equal(backend.state.balance,10004);
  assert.equal(backend.state.lossStreak,0);
  assert.equal(backend.request('getBetRecords').data.length,1);
  assert.deepEqual(backend.request('getUserReport').content.list,[{name:'古神巴風特',betCount:1,bet:1,win:5,profit:4}]);
  assert.deepEqual(backend.request('getUserReport',{endTime:1}).content.list,[]);
});
test('reload resumes at the entered cascade without generating or debiting again',()=>{
  const saved=new Map(),storage={getItem:k=>saved.get(k)||null,setItem:(k,v)=>saved.set(k,v)};
  const first=new HadesLocalBackend({storage,random:random(405),scenario:'giant-5'});
  const spin=first.request('spin',{stakeIndex:0,ratioIndex:0}),id=spin.engine.spinId;
  assert.ok(spin.engine.gameState.length>1);
  first.request('progress',{spinId:id,currentView:1});
  first.request('progress',{spinId:id,currentView:0});
  const reloaded=new HadesLocalBackend({storage,random:()=>{throw new Error('Resume must not draw');}});
  assert.deepEqual(reloaded.request('initial').engine.gameState,spin.engine.gameState.slice(1));
  assert.equal(reloaded.state.balance,9999);
  assert.throws(()=>reloaded.request('progress',{spinId:id,currentView:999}),/progress/);
  reloaded.request('closeSpin',{spinId:id});
  const balance=reloaded.state.balance;
  reloaded.request('closeSpin',{spinId:id});assert.equal(reloaded.state.balance,balance);
});
