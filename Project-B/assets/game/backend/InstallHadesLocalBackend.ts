// @ts-nocheck
// Original Hades client service boundary with owned local fake responses.
import { HadesLocalBackend } from './HadesLocalBackend';
import { game, Game, director, sp } from 'cc';
export function installHadesLocalBackend(Service){
 if(Service.prototype.__hadesLocalTransport)return Service.prototype.__hadesLocalTransport;
 const url=new URL(location.href),muted=url.searchParams.get('reaDevelopmentMute')==='1';
const walletSlug=url.searchParams.get('reaTestWallet');
const debug=url.searchParams.get('reaDebug')==='1'&&/^[a-z0-9][a-z0-9_-]{0,47}$/i.test(walletSlug||'');
const backend=new HadesLocalBackend({storage:localStorage,muted,
  walletKey:debug?'hades.original-client.local-simulation.v1.qa.'+walletSlug:'',
  scenario:debug?url.searchParams.get('reaScenario')||'':''});
const boundary=document.createElement('div');boundary.id='LocalRuntimeBoundary';
boundary.textContent='本機模擬後端';
Object.assign(boundary.style,{position:'fixed',bottom:'0',left:'0',zIndex:'10000',font:'11px sans-serif',color:'#ffe6ac',padding:'2px 6px',pointerEvents:'none'});
document.body.append(boundary);

const audit=[];
if(debug){const states=[];globalThis.__hadesLocalState=state=>{states.push(state);boundary.dataset.state=state;boundary.dataset.states=JSON.stringify(states.slice(-30));};}
if(debug){
 const delays=[];globalThis.__hadesLocalDelay=(phase,seconds)=>{delays.push({phase,seconds});boundary.dataset.delays=JSON.stringify(delays.slice(-20));};
 const probe=document.createElement('button');probe.id='LocalRuntimeProbe';probe.textContent='擷取診斷';
 Object.assign(probe.style,{position:'fixed',bottom:'0',right:'0',zIndex:'10001',fontSize:'10px'});
 probe.onclick=()=>{
  const skeletons=(director.getScene()?.getComponentsInChildren(sp.Skeleton)||[]).filter(s=>s.node.activeInHierarchy).map(s=>{
   const track=s.getCurrent(0);return {node:s.node.name,enabled:s.enabled,paused:s.paused,animation:track?.animation?.name,time:track?.trackTime,end:track?.animationEnd,loop:track?.loop};
  });
  const views=typeof App==='undefined'?[]:[...App.uiManager._viewDatas.entries()].map(([key,v])=>({key,isLoaded:v.isLoaded,status:v.status,bundle:v.bundle,url:v.info?.url,active:v.node?.activeInHierarchy}));
  boundary.dataset.diagnostics=JSON.stringify({gamePaused:game._paused,visibility:document.visibilityState,skeletons,views});
 };
 document.body.append(probe);
}
function record(event,payload,response){
  const item={event,action:payload?.action,spinId:response.engine?.spinId,status:response.status,stageCount:response.engine?.gameState?.length,
    picked:response.engine?.bonusState?.picked?.length,bonusAward:response.engine?.bonusState?.totalWinnings,
    bonusType:response.engine?.bonusState?.bonusType,treasurePrize:response.engine?.bonusState?.prize,localBackend:true};
  audit.push(item);boundary.dataset.requests=JSON.stringify(audit.slice(-30));
  console.info('[Hades local transport]',JSON.stringify(item));
}
function installTransport(Service){
  const proto=Service.prototype,originalInit=proto.init;
  const clients=new Set();
  const deliver=(event,payload,callback)=>Promise.resolve().then(()=>{
    let response;
    try{response=backend.request(event,payload||{});}catch(error){console.error('[Hades local backend]',error);response={status:400,message:error.message,code:'LOCAL_BACKEND_ERROR'};}
    const notify={type:'jackpotUpdate',data:{'jp-major':2500,'jp-grand':10000}};
    for(const client of clients)client.listeners.get('notify')?.(notify);
    record(event,payload,response);callback?.(response);return response;
  });
  const connected=service=>{
    if(debug&&!boundary.dataset.dispatchObserved){
      boundary.dataset.dispatchObserved='1';const dispatch=globalThis.dispatch,events=[];
      globalThis.dispatch=function(...args){
        if(typeof args[0]==='string'&&/WIN|SCORE|GROUP|TREASURE/.test(args[0])){events.push(args[0]);boundary.dataset.events=JSON.stringify(events.slice(-30));}
        return dispatch.apply(this,args);
      };
    }
    service._client.isConnected=true;service._client._readyState=3;
    return Promise.resolve().then(()=>service.onOpen({type:'local-hades',localBackend:true}));
  };
  proto.init=function(){
    originalInit.call(this);const listeners=new Map(),service=this;
    this._client={listeners,isConnected:false,_readyState:0,connectTimeOut:10,
      on(event,callback){listeners.set(event,callback);},emit:deliver,initSocket(){return connected(service);},
      close(){this.isConnected=false;this._readyState=0;},socketDisconnect(){this.close();}};
    clients.add(this._client);
  };
  proto.connect=function(){return connected(this);};
  proto.socketIOMessage=deliver;proto.socketIOMessageWithoutCheck=deliver;
  proto.buildPayload=async payload=>payload;proto.sendHeartbeat=function(){};
  boundary.dataset.transport='local';
}

 installTransport(Service);
 // Do not import the game model during bootstrap: its framework dependencies
 // require App to exist. The recovered model calls this optional local hook.
 globalThis.__hadesLocalProgress=(spinId,currentView)=>{
   if(backend.state.pending?.id===spinId)backend.request('progress',{spinId,currentView});
 };
 if(muted)game.on(Game.EVENT_GAME_INITED,()=>{game.frameRate=30;boundary.dataset.developmentFps='30';});
 const runtime={backend,requests:audit};Service.prototype.__hadesLocalTransport=runtime;
 return runtime;
}
