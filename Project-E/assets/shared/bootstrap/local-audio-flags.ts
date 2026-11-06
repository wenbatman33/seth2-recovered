// @ts-nocheck
/** Owned fresh-page initialization only. Original Win/BigWin transient pauses
 * still work; native/current volumes, zero mute, replay and output buses stay. */
export function installLocalAudioFlagInitialization(AudioData,isOwnedLocal){
 const proto=AudioData.prototype;if(proto.__ownedFreshAudioFlags)return;
 const init=proto.init;if(typeof init!=='function')throw Error('Original AudioData.init missing');const initialized=new WeakSet();
 proto.init=function(...args){const result=init.apply(this,args);if(isOwnedLocal()&&!initialized.has(this)){initialized.add(this);this.isMusicOn=true;this.isEffectOn=true;}return result;};
 Object.defineProperty(proto,'__ownedFreshAudioFlags',{value:true,configurable:true});
}
