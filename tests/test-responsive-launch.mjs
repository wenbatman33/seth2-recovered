import { readFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';
const source = readFileSync(new URL('../tools/frontend-launch.js', import.meta.url), 'utf8');
function launch(width, query, bundledGame, path='/seth2/') {
  const document = { currentScript: { dataset: { game: bundledGame } }, documentElement: { dataset: {} } }, window = {};
  let result, redirect;
  runInNewContext(source, { location: { href: 'http://localhost'+path+'?' + query, replace(url) { redirect=url; } }, innerWidth: width,
    URL, window, document, history: { state: null, replaceState(_, __, url) { result = url; } } });
  return { ...window.__recoveredLaunch, url: result, redirect, layout: document.documentElement.dataset.gameLayout };
}
assert.equal(launch(1280, 'gn=golden-seth').scene, 'db://assets/recovered/main/main.scene');
assert.equal(launch(390, 'gn=golden-seth').scene, 'db://assets/recovered/main/mainPortrait.scene');
assert.equal(launch(1280, 'gn=golden-seth').url.searchParams.get('view_mode'), 'landscape');
assert.equal(launch(390, 'gn=golden-seth').url.searchParams.get('view_mode'), 'portrait');
assert.equal(launch(390, 'gn=golden-seth&layout=desktop').viewMode, 'landscape');
assert.equal(launch(1280, 'gn=golden-seth&layout=mobile').viewMode, 'portrait');
assert.equal(launch(1280, 'gn=golden-seth&layout=desktop&view_mode=portrait').scene, 'db://assets/recovered/main/mainPortrait.scene');
assert.equal(launch(390, 'gn=hades').scene, 'db://assets/recovered/main/main.scene');
assert.equal(launch(1280, '', 'hades', '/web-desktop/frontend-hades/index.html').url.searchParams.get('gn'), 'hades');
assert.equal(new URL(launch(1280, 'gn=golden-seth', 'hades', '/web-desktop/frontend-hades/index.html').redirect).pathname, '/web-desktop/frontend-seth2/index.html');
assert.equal(new URL(launch(390, 'gn=hades', 'golden-seth').redirect).pathname, '/hades/');
// Reproduce the user's raw GUI build without any gn query or post-build step.
const fixture = mkdtempSync(join(tmpdir(), 'recovered-gui-output-'));
try {
  mkdirSync(join(fixture, 'src'));
  mkdirSync(join(fixture, 'assets/g1007'), { recursive: true });
  writeFileSync(join(fixture, 'assets/g1007/config.json'), '{}');
  writeFileSync(join(fixture, 'src/settings.json'), '{"screen":{"exactFitScreen":false},"assets":{"projectBundles":["main","g1007"]}}');
  writeFileSync(join(fixture, 'application.js'), 'const options = { overrideSettings: {} };');
  writeFileSync(join(fixture, 'index.html'), '<html><head></head><body></body></html>');
  const hook = createRequire(import.meta.url)('../extensions/recovered-frontends-build/hooks.js');
  await hook.onAfterBuild({}, { dest: fixture });
  await hook.onAfterBuild({}, { dest: fixture });
  const html = readFileSync(join(fixture, 'index.html'), 'utf8');
  assert.match(html, /data-game="hades" src="\.\/frontend-launch.js"/);
  assert.equal(html.match(/src="\.\/frontend-launch.js"/g).length, 1);
  assert.match(readFileSync(join(fixture, 'application.js'), 'utf8'), /window.__recoveredLaunch.scene/);
  assert.equal(JSON.parse(readFileSync(join(fixture, 'src/settings.json'))).screen.exactFitScreen, true);
  writeFileSync(join(fixture, 'src/settings.json'), '{"screen":{},"assets":{"projectBundles":["main","slotFramework"]}}');
  assert.throws(() => hook.onAfterBuild({}, { dest: fixture }), /Select exactly one game Bundle/);
} finally { rmSync(fixture, { recursive: true, force: true }); }
console.log('PASS captured desktop/mobile scene and prefab launch selection');
