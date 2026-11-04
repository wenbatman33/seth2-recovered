import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Keep this source-contract test dependency-free: transpile the tiny exported
// module shape just enough for Node's test runner without loading Cocos.
const source = fs.readFileSync(new URL('../Project-B/assets/game/backend/HadesContract.ts', import.meta.url), 'utf8')
  .replace(/export const /g, 'const ')
  .replace(/export function /g, 'function ')
  .replace(/: unknown/g, '')
  .replace(/: asserts view is number\[\]\[\]/g, '')
  .replace(/: number/g, '')
  .replace(/: any/g, '')
  .concat('\nglobalThis.__contract={HADES_BOARD_ROWS,HADES_BOARD_COLUMNS,HADES_BOARD_SIZE,HadesSymbol,assertHadesBoard,hadesPositionToRowColumn,hadesRowColumnToPosition,assertHadesGameState,displayedHadesMultiplier,isHadesMainGame};');
const context = { Object, Set, Array, Number, RangeError, TypeError, globalThis: {} };
vm.runInNewContext(source, context);
const h = context.globalThis.__contract;

assert.equal(h.HADES_BOARD_SIZE, 25);
assert.equal(h.hadesPositionToRowColumn(24).row, 4);
assert.equal(h.hadesPositionToRowColumn(24).column, 4);
assert.equal(h.hadesRowColumnToPosition(3, 2), 17);
assert.throws(() => h.hadesRowColumnToPosition(5, 0), /Invalid Hades/);

const state = {
  action: 'spin', totalStake: 1, currentTimes: 3, bonusTimes: 5,
  view: Array.from({ length: 5 }, () => Array(5).fill(h.HadesSymbol.HADES)),
  winSymbols: [], groupSymbols: [],
};
h.assertHadesGameState(state);
assert.equal(h.displayedHadesMultiplier(state), 5);
assert.equal(h.isHadesMainGame(state), true);
state.view[0][0] = 99;
assert.throws(() => h.assertHadesGameState(state), /Unknown Hades symbol/);
console.log('PASS g1007 Hades 5x5 response contract and multiplier semantics');
