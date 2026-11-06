import {installLocalMenuMetadata} from './MenuMetadata';
// @ts-nocheck
import {LocalGameBackend,projectIdentity} from './LocalGameBackend';
/** Source service transport boundary only: leave G GameSender/parser/flows intact. */
export function selectWalletKey(search='',base=projectIdentity.wallet){const p=new URLSearchParams(search),name=p.get('reaTestWallet');return p.get('reaDebug')==='1'&&name&&/^[A-Za-z0-9][A-Za-z0-9_-]{0,47}$/.test(name)?base+'.test.'+name:base;}
export function installLocalBackend(GameServiceBase,options={}){
 const proto=GameServiceBase.prototype;if(proto.__projectGTransport)return proto.__projectGTransport;const original={},clients=new Set();let backend;
 const runtime={project:'Project-G',created:false,requests:[],original,getBackend(){if(!backend){let storage=options.storage;if(storage===undefined){try{storage=globalThis.localStorage;}catch{storage=null;}}
  const search=options.search??globalThis.location?.search??'',p=new URLSearchParams(search),key=selectWalletKey(search,options.storageKey),scenario=key.includes('.test.')?p.get('reaScenario')||'':'';
  backend=new LocalGameBackend({...options,storage,storageKey:key,qaScenario:options.qaScenario||scenario,quiet:options.quiet??p.get('reaDevelopmentMute')==='1'});runtime.created=true;runtime.storageKey=key;}return backend;},markStage(spinId,currentView){return runtime.getBackend().request('progress',{spinId,currentView});}};
 function deliver(event,payload,callback){return Promise.resolve().then(()=>{const owned=runtime.getBackend(),balanceBefore=owned.state.balanceCents/100,pendingAward=(owned.state.pending?.awardCents||0)/100;const response=owned.request(event,payload||{});if(response.status===200){const notification=runtime.getBackend().jackpotNotification();for(const client of clients){const listener=client.listeners.get('notify');if(listener)listener(notification);}}runtime.requests.push({event,status:response.status,code:response.code||null,spinId:response.engine?.spinId||null,stageCount:Array.isArray(response.engine?.gameState)?response.engine.gameState.length:0,balanceBefore,balanceAfter:owned.state.balanceCents/100,award:event==='closeSpin'?pendingAward:(owned.state.pending?.awardCents||0)/100,localBackend:true});if(runtime.requests.length>100)runtime.requests.shift();if(typeof document!=='undefined'){const notice=document.getElementById('ProjectGLocalRuntimeBoundary');if(notice)notice.dataset.requests=JSON.stringify(runtime.requests);}callback?.(response);return response;});}
 const opened=service=>{service._client.isConnected=true;service._client._readyState=3;return Promise.resolve().then(()=>service.onOpen({type:'project-g-local-simulation',localBackend:true}));};
 function patch(name,fn){original[name]=proto[name];proto[name]=fn;}
 patch('init',function(){original.init.call(this);const service=this,listeners=new Map();this._client={listeners,isConnected:false,_readyState:0,connectTimeOut:10,on(event,fn){listeners.set(event,fn);},emit(event,payload,cb){return deliver(event,payload,cb);},initSocket(){return opened(service);},close(){this.isConnected=false;this._readyState=0;},socketDisconnect(){this.close();}};clients.add(this._client);});
 patch('connect',function(){return opened(this);});patch('socketIOMessage',function(event,payload,callback){return deliver(event,payload,callback);});patch('socketIOMessageWithoutCheck',function(event,payload,callback){return deliver(event,payload,callback);});patch('buildPayload',async function(payload){return payload;});patch('sendHeartbeat',function(){});
 Object.defineProperty(proto,'__projectGTransport',{value:runtime,configurable:true});globalThis.globalProjectG=runtime;
 if(typeof document!=='undefined'&&!document.getElementById('ProjectGLocalRuntimeBoundary')){const label=document.createElement('div');label.id='ProjectGLocalRuntimeBoundary';label.textContent='本機模擬後端';Object.assign(label.style,{position:'fixed',bottom:'0',left:'0',font:'11px sans-serif',color:'#ffe6ac',zIndex:'10000',padding:'2px 6px',pointerEvents:'none'});document.body.appendChild(label);}
 return runtime;
}

installLocalMenuMetadata(LocalGameBackend,{project:'Project-G'});
