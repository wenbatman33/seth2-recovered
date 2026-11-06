#!/usr/bin/env node
/** Execute only owned backend modules from an actual Creator web build.
 * This checks compiled data/transactions, not Cocos rendering, input or audio.
 * Registration is parsed inertly: Application/GameData/GUI code never executes.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const require = createRequire(import.meta.url);
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

async function walk(directory) {
  const result = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(filename));
    else result.push(filename);
  }
  return result;
}
export async function loadBuiltBackend(projectRoot) {
  const root = path.resolve(projectRoot), build = path.join(root, 'build/web');
  try {
    await fs.access(path.join(root,'assets/shared/bootstrap/source-asset-aliases.ts'));
    const settings=JSON.parse(await fs.readFile(path.join(build,'src/settings.json'),'utf8'));
    assert(settings.assets?.projectBundles?.includes('sourcePackedImages'),'Stale/incomplete build: original packed-image bundle is absent from canonical build/web');
    await fs.access(path.join(build,'assets/sourcePackedImages/config.json'));
  } catch(error) { if(error.code!=='ENOENT')throw error; if(error.path?.includes('build/web'))throw error; }
  const owned = new Set((await fs.readdir(path.join(root, 'assets/game/backend'))).filter(name => name.endsWith('.ts')));
  const registry = new Map(), executed = [], evidence = [];
  // Do not parse the engine or native plugins. These two locations contain the
  // generated System registrations and Creator's pure Babel helper module.
  const files = (await walk(path.join(build, 'assets'))).filter(file => /\/index(?:\.[^/]+)?\.js$/.test(file));
  try { files.push(...(await walk(path.join(build, 'src/chunks'))).filter(file => file.endsWith('.js'))); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  for (const filename of files) {
    const code = await fs.readFile(filename, 'utf8');
    if (!code.includes('System.register')) continue;
    const ast = parse(code, { sourceType: 'unambiguous' });
    traverse(ast, { CallExpression(p) {
      const { callee, arguments: args } = p.node;
      if (callee.type !== 'MemberExpression' || callee.object.name !== 'System' || callee.property.name !== 'register') return;
      if (args[0]?.type !== 'StringLiteral' || args[1]?.type !== 'ArrayExpression' || !['FunctionExpression', 'ArrowFunctionExpression'].includes(args[2]?.type)) return;
      const id = args[0].value, name = path.posix.basename(id);
      if (!owned.has(name) && name !== 'rollupPluginModLoBabelHelpers.js') return;
      assert(args[1].elements.every(item => item?.type === 'StringLiteral'), 'Nonliteral module dependency: ' + id);
      const factory = code.slice(args[2].start, args[2].end);
      if (registry.has(id)) { assert.equal(registry.get(id).factory, factory, 'Conflicting compiled registration: ' + id); return; }
      registry.set(id, { id, name, deps: args[1].elements.map(item => item.value), factory, filename });
    } });
    evidence.push({ path: path.relative(root, filename), sha256: createHash('sha256').update(code).digest('hex') });
  }
  const context = vm.createContext({ console: { log() {}, warn() {}, error() {} }, URLSearchParams });
  const loaded = new Map(), active = new Set();
  const cc = { cclegacy: { _RF: { push() {}, pop() {} } } };
  function load(id) {
    if (id === 'cc') return cc;
    if (loaded.has(id)) return loaded.get(id);
    const item = registry.get(id);
    assert(item, 'Refusing unowned or missing compiled dependency: ' + id);
    assert(!active.has(id), 'Unexpected owned backend dependency cycle: ' + id);
    active.add(id);
    const namespace = Object.create(null);
    function publish(name, value) {
      if (typeof name === 'object') { Object.assign(namespace, name); return name; }
      namespace[name] = value; return value;
    }
    const factory = vm.runInContext('(' + item.factory + ')', context, { filename: item.filename + '#' + item.name, timeout: 3000 });
    const declaration = factory(publish, { id, meta: { url: id } });
    assert(declaration && typeof declaration.execute === 'function', 'Invalid System declaration: ' + id);
    item.deps.forEach((dependency, index) => {
      const resolved = dependency === 'cc' ? 'cc' : new URL(dependency, id).href;
      const target = load(resolved);
      if (declaration.setters?.[index]) declaration.setters[index](target);
    });
    declaration.execute();
    active.delete(id); loaded.set(id, namespace); executed.push(id);
    return namespace;
  }
  const candidates = [...registry.keys()].filter(id => path.posix.basename(id) === 'LocalGameBackend.ts');
  assert.equal(candidates.length, 1, 'Expected one compiled owned LocalGameBackend.ts registration');
  const { LocalGameBackend } = load(candidates[0]);
  assert.equal(typeof LocalGameBackend, 'function', 'Compiled backend export missing');
  return { LocalGameBackend, root, executed, evidence };
}
export function validateStages(stages, label = 'operation') {
  assert(Array.isArray(stages) && stages.length > 0, label + ': gameState must contain stages');
  let balls = 0;
  stages.forEach((stage, index) => {
    const cells = stage.view?.flat(Infinity);
    assert(Array.isArray(cells) && cells.length > 0 && cells.every(Number.isFinite), label + ': invalid view at stage ' + index);
    for (const field of ['timesSymbols', 'newTimesSymbols']) {
      if (stage[field] == null) continue;
      assert(Array.isArray(stage[field]), label + ': ' + field + ' is not array');
      for (const ball of stage[field]) {
        assert(ball && Number.isInteger(ball.symbolPos) && ball.symbolPos >= 0 && ball.symbolPos < cells.length,
          label + ': ' + field + ' invalid symbolPos at stage ' + index + ': ' + JSON.stringify(ball));
        assert(Number.isFinite(ball.times), label + ': ' + field + ' invalid times at stage ' + index);
        balls++;
      }
    }
    for (const field of ['totalWinnings', 'roundWinnings', 'currentWinnings', 'currentTimes']) {
      if (stage[field] != null) assert(Number.isFinite(stage[field]) && stage[field] >= 0, label + ': invalid ' + field);
    }
    if (stage.modifier != null) {
      assert(Array.isArray(stage.modifier), label + ': modifier is not array');
      for (const modifier of stage.modifier) {
        assert(Number.isInteger(modifier.col) && modifier.col >= 0 && modifier.col < 5, label + ': invalid expanded-wild column');
        assert(Array.isArray(modifier.pos) && modifier.pos.every(pos => Number.isInteger(pos) && pos >= 0 && pos < cells.length), label + ': invalid expanded-wild positions');
      }
    }
  });
  return balls;
}
const seeded = (seed = 29) => () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
const storage = () => { const data = new Map(); return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) }; };
function success(response, label) { assert.equal(response?.status, 200, label + ': ' + JSON.stringify(response)); return response; }
export async function checkBuiltBackend(projectRoot) {
  const loaded = await loadBuiltBackend(projectRoot), { LocalGameBackend } = loaded;
  const project = path.basename(loaded.root), results = [];
  const common = { quiet: true, initialBalance: 100000, bonuses: false,
    jackpotConfig: { triggerProbability: 0 }, mysteryChest: { probability: 0 },
    waysConfig: { jackpotChance: 0 } };
  function run(label, options = {}, payload = {}) {
    const persisted = storage(), settings = { ...common, ...options, storage: persisted, random: seeded(), clock: () => 1000 };
    const backend = new LocalGameBackend(settings);
    const initial = success(backend.request('initial'), label + ' initial');
    for (const [level, threshold] of Object.entries(initial.engine.definition.winOddsTypes || {})) {
      assert(Number.isFinite(threshold) && threshold > 0, label + ': zero award satisfies winOdds threshold ' + level + '=' + threshold);
    }
    if (project === 'Project-F') assert.equal(initial.engine.definition.localReconstruction?.mathRevision, 'native-rate-bank-v2', label + ': compiled rate bank is stale');
    const response = success(backend.request('spin', { requestId: 'compiled-' + label, ...payload }), label + ' spin');
    const id = response.engine.spinId, pendingBalance = backend.state.balanceCents;
    const chain = Array.isArray(response.engine.gameState) ? response : success(backend.request('spin', { spinId: id }), label + ' purchase continuation');
    const balls = validateStages(chain.engine.gameState, label);
    if (project === 'Project-F') for (const stage of chain.engine.gameState) {
      assert.equal(stage.localMathRevision, 'native-rate-bank-v2', label + ': compiled native bank stage is stale');
      assert.equal(stage.currentTimes % 2, 0, label + ': native bank must be even');
      assert.equal(stage.localPayoutMultiplier, Math.max(1, stage.currentTimes), label + ': bank/payout separation mismatch');
      const p = stage.localRateProvenance;
      assert(p?.revision === 'native-rate-resume-v1', label + ': compiled resume provenance is stale');
      assert.equal(p.bankAfter, stage.currentTimes, label + ': resume bank differs from native stage');
      assert.equal(p.bankBefore + 2 * p.collectPositions.length, p.bankAfter, label + ': resume collection amount mismatch');
      assert(p.newMarkerPositions.every(pos => p.femalePositions.includes(pos)) && p.collectPositions.every(pos => p.newMarkerPositions.includes(pos)), label + ': resume marker identity mismatch');
    }
    if (label === 'qa-multiplier') assert(balls > 0, label + ': did not exercise multiplier records');
    if (/^qa-(?:(?:free|intro)-)?jackpot-/.test(label)) {
      const stage = chain.engine.gameState.find(stage => stage.isJp);
      const tier = 'jp-' + label.split('-').at(-1), expected = { 'jp-mini': 2, 'jp-minor': 3, 'jp-major': 4, 'jp-grand': 5 }[tier];
      assert(stage && stage.isJp === tier && stage.jpWinnings > 0, label + ': did not produce its requested own jackpot');
      assert.equal(stage.view.flat().filter(symbol => symbol === 14).length, expected, label + ': JP symbol count mismatch');
    }
    if (label === 'qa-mystery-chest') assert(chain.engine.gameState.some(stage => stage.noWinReward > 0), label + ': did not exercise chest');
    if (['qa-expandedWild', 'qa-free-sticky'].includes(label)) assert(chain.engine.gameState.some(stage => stage.modifier?.length > 0), label + ': did not exercise native expanded wild columns');
    let award = backend.state.pending.awardCents;
    assert(Number.isSafeInteger(award) && award >= 0, label + ': invalid pending award');
    // Request replay and a new instance must retain the exact operation/debit.
    assert.equal(success(backend.request('spin', { requestId: 'compiled-' + label, ...payload }), label + ' replay').engine.spinId, id);
    assert.equal(backend.state.balanceCents, pendingBalance, label + ': replay debited again');
    const restored = new LocalGameBackend({ ...settings, random: seeded(812) });
    const resumed = success(restored.request('initial'), label + ' reload');
    assert.equal(resumed.isResuming, true, label + ': missing persisted operation');
    assert.equal(resumed.engine.spinId, id);
    validateStages(resumed.engine.gameState, label + ' reload');
    // Native GameData.setNextSpinData marks each newly consumed presentation
    // stage. The compiled-data fixture must honor the same persisted cursor
    // contract before closeSpin; it does not synthesize UI/animation callbacks.
    const stageCount = resumed.engine.gameState.length;
    const resumeIndex = resumed.localResumeIndex ?? restored.state.pending.currentView ?? 0;
    if (project === 'Project-E' && stageCount > 1 && resumeIndex < stageCount - 1) {
      const rejected = restored.request('closeSpin', { spinId: id });
      assert.equal(rejected.code, 'FEATURE_PENDING', label + ': native FG progress guard missing');
      assert.equal(restored.state.balanceCents, pendingBalance, label + ': early close changed balance');
    }
    for (let currentView = resumeIndex + 1; currentView < stageCount; currentView++) {
      success(restored.request('progress', { spinId: id, currentView }), label + ' native progress ' + currentView);
      assert.equal(restored.state.pending.currentView, currentView, label + ': native progress cursor mismatch');
      assert.equal(restored.state.balanceCents, pendingBalance, label + ': progress settled prematurely');
    }
    // Original I bonus UI sends spin continuations with bonusType/action.
    // Consume those data contracts rather than weakening BONUS_PENDING or
    // pretending that an engine/tween completed in this compiled-data fixture.
    const bonusActions = [];
    if (project === 'Project-I' && restored.state.pending.bonusState && !restored.state.pending.bonusState.isFinish) {
      assert.equal(restored.request('closeSpin', { spinId: id }).code, 'BONUS_PENDING', label + ': early bonus close guard missing');
      assert.equal(restored.state.balanceCents, pendingBalance, label + ': early bonus close changed balance');
      const sendBonus = (action, actionValue, extra = {}) => {
        const bonusType = restored.state.pending.bonusState.bonusType;
        const request = { spinId: id, bonusType, action, ...(actionValue === undefined ? {} : { actionValue }), localActionId: 'compiled-' + label + '-bonus-' + bonusActions.length, ...extra };
        const response = success(restored.request('spin', request), label + ' native bonus ' + action);
        const expectedAward = restored.state.pending.awardCents;
        const retry = success(restored.request('spin', request), label + ' native bonus retry ' + action);
        const publicBonus = value => { const result = JSON.parse(JSON.stringify(value)); delete result._local; return result; };
        assert.deepEqual(publicBonus(retry.engine.bonusState), publicBonus(response.engine.bonusState), label + ': bonus retry changed native fields');
        assert.equal(restored.state.pending.awardCents, expectedAward, label + ': bonus retry added an award twice');
        assert.equal(restored.state.balanceCents, pendingBalance, label + ': bonus settled before native close');
        bonusActions.push({ bonusType, action, actionValue: actionValue ?? null, replayOnce: true });
      };
      const type = restored.state.pending.bonusState.bonusType;
      if (type === 'elixirFurnace') {
        for (const material of [1, 2, 3, 4]) sendBonus('purify', material);
        assert.equal(restored.state.pending.bonusState.action, 'gamble');
        // Native cancel button is gamble(false), a legitimate collect choice.
        sendBonus('gamble', false);
      } else if (type === 'jpGame') {
        for (let position = 0; position < 12 && !restored.state.pending.bonusState.isFinish; position++) sendBonus('collect', position);
      } else if (type === 'fortuneLanding') {
        const options = restored.state.pending.bonusState.actionOptions.slice();
        for (const item of options) sendBonus('collect', item.amount, { token: item.token });
        sendBonus('finish');
      } else assert.fail(label + ': unknown unfinished native bonus ' + type);
      assert.equal(restored.state.pending.bonusState.isFinish, true, label + ': native bonus never finished');
      award = restored.state.pending.awardCents;
      assert(Number.isSafeInteger(award) && award >= 0, label + ': invalid final bonus award');
    }
    success(restored.request('closeSpin', { spinId: id }), label + ' close');
    assert.equal(restored.state.balanceCents, pendingBalance + award, label + ': wrong award');
    success(restored.request('closeSpin', { spinId: id }), label + ' repeated close');
    assert.equal(restored.state.balanceCents, pendingBalance + award, label + ': repeated credit');
    assert.equal(restored.state.pending, null);
    results.push({ label, stages: chain.engine.gameState.length, multiplierRecords: balls, awardCents: award, ...(bonusActions.length ? { nativeBonusActions: bonusActions } : {}), persisted: true, creditOnce: true });
  }
  run('ordinary');
  const scenarios = project === 'Project-C' ? ['multiplier', 'free-retrigger'] : project === 'Project-F' ? ['ways-win', 'ways-lose', 'silver-gold', 'gold-wild', 'free-retrigger'] : project === 'Project-H' ? ['win', 'lose', 'expandedWild', 'free-sticky'] : ['Project-D', 'Project-G'].includes(project) ? ['win', 'lose', 'multiplier', 'free-retrigger'] : ['win', 'lose', 'free-retrigger'];
  if (['Project-D', 'Project-G'].includes(project)) scenarios.push('jackpot-mini', 'jackpot-minor', 'jackpot-major', 'jackpot-grand', 'free-jackpot-mini', 'intro-jackpot-mini', 'mystery-chest');
  for (const scenario of scenarios) run('qa-' + scenario, { scenario, qaScenario: scenario });
  const probe = new LocalGameBackend({ ...common, random: seeded() });
  const definition = success(probe.request('initial'), 'feature definitions').engine.definition;
  for (const [index, feature] of (definition.buyFeature || []).entries()) {
    run('purchase-' + (feature.featureIndex ?? index), {}, { action: 'buyFeature', featureIndex: feature.featureIndex ?? index, featureValue: feature.feature });
  }
  if (['Project-C', 'Project-D', 'Project-G'].includes(project)) assert(results.some(result => result.multiplierRecords > 0), 'Multiplier QA did not exercise any records');
  return { project, status: 'compiled owned backend fixtures pass', buildEvidence: loaded.evidence, executedModules: loaded.executed, results,
    guiGlobalsExecuted: false, creatorRuntimeVerified: false, originalRngRestored: false, originalRtpRestored: false };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    assert(process.argv[2], 'Usage: node tools/recovery/check-built-backend.mjs <Project-X-root> [--report file.json]');
    const report = await checkBuiltBackend(process.argv[2]);
    const reportIndex = process.argv.indexOf('--report');
    if (reportIndex >= 0) { assert(process.argv[reportIndex + 1], '--report requires a filename'); await fs.writeFile(process.argv[reportIndex + 1], JSON.stringify(report, null, 2) + '\n'); }
    console.log(JSON.stringify(report, null, 2));
  } catch (error) { console.error(error.stack); process.exitCode = 1; }
}
