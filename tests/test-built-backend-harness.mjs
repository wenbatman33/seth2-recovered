import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { loadBuiltBackend, validateStages } from '../tools/recovery/check-built-backend.mjs';

async function fixture(t, dependency = './Rules.ts') {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'rea-built-fixture-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  await fs.mkdir(path.join(root, 'assets/game/backend'), { recursive: true });
  await fs.mkdir(path.join(root, 'build/web/assets/main'), { recursive: true });
  for (const name of ['LocalGameBackend.ts', 'Rules.ts']) await fs.writeFile(path.join(root, 'assets/game/backend', name), '// owned source');
  const code = `
  // This entire registration must stay inert, including the factory itself.
  System.register('chunks:///_virtual/Application.ts', [], (()=>{throw Error('GUI factory executed')})());
  System.register('chunks:///_virtual/Rules.ts', ['cc'], function(exports){return {setters:[function(cc){if(!cc.cclegacy._RF)throw Error('cc stub missing')}],execute:function(){exports('read',function(){return 7})}}});
  System.register('chunks:///_virtual/LocalGameBackend.ts', ['${dependency}'], function(exports){var rules;return {setters:[function(module){rules=module}],execute:function(){exports('LocalGameBackend',class LocalGameBackend {result(){return rules.read()}})}}});
  `;
  await fs.writeFile(path.join(root, 'build/web/assets/main/index.fixture.js'), code);
  return root;
}
test('actual System registrations link owned dependencies without executing any GUI factory', async t => {
  const loaded = await loadBuiltBackend(await fixture(t));
  assert.equal(new loaded.LocalGameBackend().result(), 7);
  assert.equal(loaded.executed.length, 2);
  assert.equal(loaded.evidence.length, 1);
  assert(loaded.executed.every(name => !name.endsWith('/Application.ts')));
});
test('an owned backend cannot pull an original GUI global through its dependency graph', async t => {
  await assert.rejects(loadBuiltBackend(await fixture(t, './Application.ts')), /Refusing unowned or missing/);
});
test('compiled concat of a Map iterator is rejected before any graphical position access', () => {
  const ball = { symbolPos: 2, times: 4 }, balls = new Map([[2, ball]]);
  // Cocos loose spread output from the actual failing build.
  const corrupted = JSON.parse(JSON.stringify([].concat(balls.values())));
  assert.deepEqual(corrupted, [{}]);
  assert.throws(() => validateStages([{ view: [[1, 2, 10]], timesSymbols: corrupted }]), /invalid symbolPos/);
  assert.equal(validateStages([{ view: [[1, 2, 10]], timesSymbols: Array.from(balls.values()) }]), 1);
});
test('out-of-range positions and nonfinite multiplier values fail the compiled contract', () => {
  for (const ball of [{ symbolPos: 3, times: 2 }, { symbolPos: null, times: 2 }, { symbolPos: 1, times: NaN }]) {
    assert.throws(() => validateStages([{ view: [[1, 2, 3]], timesSymbols: [ball] }]), /invalid/);
  }
});
test('native nested views including the 34-cell top-reel layout stay valid', () => {
  assert.equal(validateStages([{ view: [Array(4).fill(2), ...Array.from({ length: 5 }, () => Array(6).fill(3))], timesSymbols: [{ symbolPos: 33, times: 2 }], roundWinnings: 0 }]), 1);
});
