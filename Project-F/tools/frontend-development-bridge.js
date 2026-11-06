// Local development only. Ordinary verification keeps normal game audio.
(() => {
  const params = new URLSearchParams(location.search);
  if (params.get('reaDevelopmentMute') === '1') {
    if (typeof AudioNode !== 'undefined') {
      const connect = AudioNode.prototype.connect, buses = new WeakMap();
      AudioNode.prototype.connect = function (destination, ...rest) {
        if (destination === this.context.destination) {
          let bus = buses.get(this.context);
          if (!bus) { bus = this.context.createGain(); bus.gain.value = 0; connect.call(bus, destination); buses.set(this.context, bus); }
          return connect.call(this, bus, ...rest);
        }
        return connect.call(this, destination, ...rest);
      };
    }
    const play = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function (...args) { this.muted = true; this.volume = 0; return play.apply(this, args); };
  }
})();

// Opt-in playback diagnostics; development mute still silences the output bus.
(() => {
 const params=new URLSearchParams(location.search);
 if(params.get('reaDebug')!=='1'||params.get('reaAudioProbe')!=='1'||typeof AudioBufferSourceNode==='undefined')return;
 const contexts=new Set(),events=[],ids=new WeakMap();let sequence=0;
 function publish(){document.documentElement.dataset.recoveryAudio=JSON.stringify({contexts:Array.from(contexts,context=>context.state),events});}
 const start=AudioBufferSourceNode.prototype.start,stop=AudioBufferSourceNode.prototype.stop;
 AudioBufferSourceNode.prototype.start=function(...args){const result=start.apply(this,args);if(!contexts.has(this.context)){contexts.add(this.context);this.context.addEventListener('statechange',publish);}const id=++sequence;ids.set(this,id);if(events.length<100)events.push({event:'start',id,loop:this.loop,duration:this.buffer?.duration||0,sampleRate:this.buffer?.sampleRate||0});publish();return result;};
 AudioBufferSourceNode.prototype.stop=function(...args){const result=stop.apply(this,args);if(events.length<100)events.push({event:'stop',id:ids.get(this)});publish();return result;};
})();
