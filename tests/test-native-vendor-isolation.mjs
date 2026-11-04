import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';

// Execute the actual isolation prelude, without loading unrelated vendor code.
const source = readFileSync(new URL('../Project-A/assets/shared/vendor/original-vendors.js', import.meta.url), 'utf8');
const prelude = source.slice(0, source.indexOf('// Original plugin 0:')) +
  '}).call(window, window);';
for (const native of [{ process: { versions: { electron: '30' } } },
  { Editor: {} }, { navigator: { userAgent: 'Mozilla/5.0 Electron/30.0' } }]) {
  const fetch = () => Promise.resolve('native');
  const root = { ...native, fetch };
  runInNewContext(prelude, { window: root });
  assert.equal(root.fetch, fetch, 'Creator transport must remain untouched');
}
const root = { location: { href: 'http://localhost:8174/' }, fetch: async () => 'local' };
runInNewContext(prelude, { window: root, URL, Promise });
assert.equal(await root.fetch('/assets/game.png'), 'local');
await assert.rejects(root.fetch('https://example.com/remote-api'), /Third-party connection blocked/);
console.log('PASS native Creator transport isolation and browser-only network boundary');
