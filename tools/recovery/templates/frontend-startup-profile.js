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
