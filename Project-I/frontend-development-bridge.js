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

// Explicit developer timing only; no audio, gameplay or loading decisions change.
(() => {
  if (new URLSearchParams(location.search).get('reaLoadProfile') !== '1') return;
  performance.setResourceTimingBufferSize(5000);
  const marks = [], resources = new Map();
  const element = document.createElement('div');
  element.id = 'RecoveryStartupProfile'; element.hidden = true;
  const publish = (includeResources = false) => {
    const rows = Array.from(resources.values());
    element.dataset.summary = JSON.stringify({
      elapsedMs: Math.round(performance.now()), requests: rows.length,
      uniqueResources: new Set(rows.map(r => r.path)).size,
      networkRequests: rows.filter(r => r.transferBytes > 0).length,
      transferBytes: rows.reduce((n, r) => n + r.transferBytes, 0),
      decodedBytes: rows.reduce((n, r) => n + r.decodedBytes, 0),
      lastResponseEndMs: Math.round(Math.max(0, ...rows.map(r => r.responseEndMs))),
      marks
    });
    if (includeResources) element.dataset.resources = JSON.stringify(rows);
  };
  const record = entry => {
    if (resources.size >= 5000) return;
    const url = new URL(entry.name, location.href);
    if (url.origin !== location.origin) return;
    resources.set(entry.name + ':' + entry.startTime, {
      path: url.pathname, startMs: Math.round(entry.startTime),
      durationMs: Math.round(entry.duration), responseEndMs: entry.responseEnd,
      transferBytes: entry.transferSize, decodedBytes: entry.decodedBodySize
    });
  };
  performance.getEntriesByType('resource').forEach(record);
  new PerformanceObserver(list => { list.getEntries().forEach(record); publish(); })
    .observe({ type: 'resource', buffered: true });
  window.__recoveryStartupProfile = { mark(name, detail) {
    if (marks.length < 32) marks.push({ name, atMs: Math.round(performance.now()), detail });
    if (name === 'native-game-view-created' && /^g\d+$/.test(detail?.bundle || '')) element.dataset.gameReady = '1';
    publish(true);
  } };
  const mount = () => { document.body.appendChild(element); publish(); };
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount, { once: true });
})();
