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
  if (params.get('reaDebug') === '1') {
    const events = [];
    for (const type of ['pointerdown', 'touchstart']) document.addEventListener(type, event => {
      events.push({ type: event.type, pointerType: event.pointerType || 'touch', trusted: event.isTrusted, target: event.target?.id || event.target?.nodeName });
      document.documentElement.dataset.localInputEvents = JSON.stringify(events.slice(-12));
    }, { passive: true, capture: true });
    const installCapture = () => {
      const button = document.createElement('button');
      button.id = 'LocalCaptureButton'; button.textContent = '儲存驗證畫面';
      Object.assign(button.style, { position: 'fixed', top: '4px', right: '4px', zIndex: '10002', fontSize: '11px' });
      button.onclick = () => {
        const cc = window.cc, canvas = document.getElementById('GameCanvas');
        if (!cc?.director || !canvas) { button.textContent = '尚未載入'; return; }
        // Read the actual rendered frame before WebGL releases its back buffer.
        // This captures evidence; it never draws or creates a game texture.
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, () => canvas.toBlob(blob => {
          if (!blob) { button.textContent = '擷取失敗'; return; }
          const link = document.createElement('a'), url = URL.createObjectURL(blob);
          link.href = url;
          link.download = `${params.get('gn') === 'hades' ? 'hades' : 'seth2'}-${document.documentElement.dataset.gameLayout || 'game'}.png`;
          link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
        }, 'image/png'));
      };
      document.body.append(button);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installCapture, { once: true });
    else installCapture();
  }
})();
