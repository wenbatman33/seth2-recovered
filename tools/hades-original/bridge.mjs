import { HadesLocalBackend } from './backend.mjs';

if(!['localhost','127.0.0.1','::1'].includes(location.hostname))throw new Error('Local preview bridge only');
const url=new URL(location.href);
const defaults={gn:'hades',l:'zh-tw',ct:'slot',gt:'slot-erase-cluster-times-1',view_mode:'landscape',t:'local-hades',socket_url:'browser-local',gv:'261006',table:'1'};
for(const [key,value]of Object.entries(defaults))if(!url.searchParams.get(key))url.searchParams.set(key,value);
history.replaceState(history.state,'',url.href);
const muted=url.searchParams.get('reaDevelopmentMute')==='1';
if(muted){
  const OriginalAudioContext=window.AudioContext||window.webkitAudioContext;
  if(OriginalAudioContext){
    class MutedAudioContext extends OriginalAudioContext {
      createGain(){const gain=super.createGain();const connect=gain.connect.bind(gain);gain.connect=(dest,...rest)=>{if(dest===this.destination)gain.gain.value=0;return connect(dest,...rest);};return gain;}
    }
    window.AudioContext=MutedAudioContext;window.webkitAudioContext=MutedAudioContext;
  }
}
const walletSlug=url.searchParams.get('reaTestWallet');
const debug=url.searchParams.get('reaDebug')==='1'&&/^[a-z0-9][a-z0-9_-]{0,47}$/i.test(walletSlug||'');
const backend=new HadesLocalBackend({storage:localStorage,muted,
  walletKey:debug?'hades.original-client.local-simulation.v1.qa.'+walletSlug:'',
  scenario:debug?url.searchParams.get('reaScenario')||'':''});
const boundary=document.createElement('div');boundary.id='LocalRuntimeBoundary';
boundary.textContent='本機模擬後端 · 原始客戶端復原中';
Object.assign(boundary.style,{position:'fixed',bottom:'0',left:'0',zIndex:'10000',font:'11px sans-serif',color:'#ffe6ac',padding:'2px 6px',pointerEvents:'none'});
document.body.append(boundary);
const audit=[];
const loaders=new Set();
// Loader diagnostics are needed only for isolated QA. Do not retain a polling
// loop in the normal local client or keep walking completed loader instances.
let loadingTimer=null;
function trackLoader(loader){
  if(!debug)return;
  loaders.add(loader);
  if(loadingTimer)return;
  loadingTimer=setInterval(()=>{
  for(const loader of loaders)if(!loader._isLoading)loaders.delete(loader);
  const loading=[...loaders].filter(loader=>loader._isLoading).map(loader=>({loaded:loader._loadedCount,total:loader._resources.size,
    pending:[...loader._resources.keys()].filter(key=>!loader._loadedResource.has(key))}));
  boundary.dataset.loading=JSON.stringify(loading);
  if(!loaders.size){clearInterval(loadingTimer);loadingTimer=null;}
  },1000);
}
function record(event,payload,response){
  const item={event,action:payload?.action,spinId:response.engine?.spinId,status:response.status,stageCount:response.engine?.gameState?.length,
    picked:response.engine?.bonusState?.picked?.length,bonusAward:response.engine?.bonusState?.totalWinnings,localBackend:true};
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
const originalRegister=System.register;
System.register=function(...args){
  if(typeof args[0]!=='string')return originalRegister.apply(this,args);
  const [name,deps,declare]=args;
  const wrapped=function(exporter,context){
    const exports={};
    const declareExport=(key,value)=>{if(typeof key==='object')Object.assign(exports,key);else exports[key]=value;return exporter(key,value);};
    const result=declare.call(this,declareExport,context),execute=result.execute;
    result.execute=function(){
      const out=execute.call(this);
      if(name.endsWith('/Config.ts')){exports.Config.isSkipCheckUpdate=true;exports.Config.USE_AUTO_VERSION=false;exports.Config.HOT_UPDATE_URL='';}
      if(name.endsWith('/GameServiceBase.ts'))installTransport(exports.GameServiceBase);
      if(name.endsWith('/GameData.ts')){
        const proto=exports.default.prototype,next=proto.setNextSpinData;
        proto.setNextSpinData=function(...values){
          const result=next.apply(this,values),data=this.getData();
          if(backend.state.pending?.id===data.spinId)backend.request('progress',{spinId:data.spinId,currentView:data.parser.currentGameState.currentView});
          return result;
        };
      }
      if(name.endsWith('/ResourceLoader.ts')){
        const proto=exports.default.prototype,load=proto.loadResources;
        proto.loadResources=function(...values){const result=load.apply(this,values);trackLoader(this);return result;};
      }
      return out;
    };
    return result;
  };
  return originalRegister.call(this,name,deps,wrapped);
};
const cc=await System.import('cc');
// Agent development is deliberately capped. User verification keeps the
// original configured rate; Cocos already pauses its loop on page hide.
if(muted)cc.game.on(cc.Game.EVENT_GAME_INITED,()=>{cc.game.frameRate=30;boundary.dataset.developmentFps='30';});
// Use the original captured lossless/fallback rasters on local preview devices.
// Compressed ASTC siblings are optional platform variants, not replacement art.
cc.macro.SUPPORT_TEXTURE_FORMATS=['.png','.jpg','.jpeg','.webp','.astc','.pkm','.pvr'];
await System.import('./index.js');
