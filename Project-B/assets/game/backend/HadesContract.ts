// @ts-nocheck
/**
 * Hades / g1007 client response contract recovered from the public client.
 *
 * This file deliberately contains no RNG, RTP, paytable, or server endpoint.
 * Those values are not present in the static client bundle and must not be
 * represented as original behaviour. It is the narrow, validated seam a
 * future local simulation must satisfy before it can drive the recovered UI.
 *
 * Evidence: research/atg/hades/formatted-GameSymbolID.js,
 * research/atg/hades/formatted-GameData.js,
 * research/atg/hades/formatted-GameLogic.js and
 * research/atg/hades/formatted-GameSender.js.
 */

export const HADES_BOARD_ROWS = 5;
export const HADES_BOARD_COLUMNS = 5;
export const HADES_BOARD_SIZE = HADES_BOARD_ROWS * HADES_BOARD_COLUMNS;

export const HadesSymbol = Object.freeze({
  WILD: 1,
  HADES: 2,
  PERSE: 3,
  DOG: 4,
  GHOST: 5,
  A: 6,
  K: 7,
  Q: 8,
  SCATTER: 9,
  JACKPOT: 10,
});

const VALID_SYMBOLS = new Set(Object.values(HadesSymbol));

export function assertHadesBoard(view: unknown): asserts view is number[][] {
  if (!Array.isArray(view) || view.length !== HADES_BOARD_ROWS) {
    throw new RangeError('Hades board must contain exactly five rows');
  }
  for (const row of view) {
    if (!Array.isArray(row) || row.length !== HADES_BOARD_COLUMNS) {
      throw new RangeError('Each Hades board row must contain exactly five symbols');
    }
    for (const symbol of row) {
      if (!Number.isInteger(symbol) || !VALID_SYMBOLS.has(symbol)) {
        throw new RangeError(`Unknown Hades symbol: ${symbol}`);
      }
    }
  }
}

export function hadesPositionToRowColumn(position: number) {
  if (!Number.isInteger(position) || position < 0 || position >= HADES_BOARD_SIZE) {
    throw new RangeError(`Invalid Hades board position: ${position}`);
  }
  return { row: Math.floor(position / HADES_BOARD_COLUMNS), column: position % HADES_BOARD_COLUMNS };
}

export function hadesRowColumnToPosition(row: number, column: number) {
  if (!Number.isInteger(row) || !Number.isInteger(column) || row < 0 || row >= HADES_BOARD_ROWS || column < 0 || column >= HADES_BOARD_COLUMNS) {
    throw new RangeError(`Invalid Hades board coordinates: ${row},${column}`);
  }
  return row * HADES_BOARD_COLUMNS + column;
}

/** Validate fields the recovered client reads from one engine game state. */
export function assertHadesGameState(state: any) {
  if (state === null || typeof state !== 'object') throw new TypeError('Hades gameState must be an object');
  assertHadesBoard(state.view);
  if (typeof state.action !== 'string') throw new TypeError('Hades gameState.action must be a string');
  if (!Array.isArray(state.winSymbols)) throw new TypeError('Hades gameState.winSymbols must be an array');
  if (!Array.isArray(state.groupSymbols)) throw new TypeError('Hades gameState.groupSymbols must be an array');
  for (const key of ['totalStake', 'currentTimes', 'bonusTimes']) {
    if (!Number.isFinite(state[key])) throw new TypeError(`Hades gameState.${key} must be finite`);
  }
  return state;
}

/** The client chooses the larger multiplier when displaying a completed state. */
export function displayedHadesMultiplier(state: any) {
  assertHadesGameState(state);
  return Math.max(state.currentTimes, state.bonusTimes);
}

export function isHadesMainGame(state: any) {
  assertHadesGameState(state);
  return state.action === 'spin';
}
