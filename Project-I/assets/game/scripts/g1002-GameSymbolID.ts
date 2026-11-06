// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EBackendSymbolID };
var _export2;
export { _export2 as ESymbolAnimType };
var _export3;
export { _export3 as ESymbolStatus };
var _export4;
export { _export4 as GameSymbolID };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBackendSymbolID":
      _export = value;
      break;
    case "ESymbolAnimType":
      _export2 = value;
      break;
    case "ESymbolStatus":
      _export3 = value;
      break;
    case "GameSymbolID":
      _export4 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var S;
var M, I, n;
_publish({
  EBackendSymbolID: void 0,
  ESymbolAnimType: void 0,
  ESymbolStatus: void 0
}), _dependency.cclegacy._RF.push({}, "5c59eEvmYlFS4rIisIpGGcY", "GameSymbolID", void 0), function (_) {
  _[_.BLUR = 0] = "BLUR", _[_.STATIC = 1] = "STATIC", _[_.ANIM = 2] = "ANIM", _[_.WIN = 3] = "WIN";
}(M || (M = _publish("ESymbolStatus", {}))), function (_) {
  _.WIN = "win", _.HIT = "hit", _.SYMBOL_02_WIN = "symbol_02_win", _.SYMBOL_03_WIN = "symbol_03_win", _.SYMBOL_04_WIN = "symbol_04_win", _.SYMBOL_05_WIN = "symbol_05_win", _.SYMBOL_06_WIN = "symbol_06_win", _.SYMBOL_07_WIN = "symbol_07_win", _.SYMBOL_08_WIN = "symbol_08_win";
}(I || (I = _publish("ESymbolAnimType", {}))), function (_) {
  _[_.WILD = 1] = "WILD", _[_.HAT = 2] = "HAT", _[_.STICK = 3] = "STICK", _[_.FORK = 4] = "FORK", _[_.A = 5] = "A", _[_.K = 6] = "K", _[_.Q = 7] = "Q", _[_.J = 8] = "J", _[_.SCATTER = 9] = "SCATTER", _[_.BONUS = 10] = "BONUS";
}(n || (n = _publish("EBackendSymbolID", {})));
var A = _publish("GameSymbolID", function () {
  function _() {}
  return _.init = function () {
    this.mapSymbolAnims();
  }, _.mapSymbolAnims = function () {
    var S = I.WIN,
      M = I.HIT,
      A = I.SYMBOL_02_WIN,
      O = I.SYMBOL_03_WIN,
      t = I.SYMBOL_04_WIN,
      o = I.SYMBOL_05_WIN,
      L = I.SYMBOL_06_WIN,
      i = I.SYMBOL_07_WIN,
      B = I.SYMBOL_08_WIN;
    _.SYMBOL_ANIMS_MAP.set(n.WILD, [S, M]), _.SYMBOL_ANIMS_MAP.set(n.HAT, [A]), _.SYMBOL_ANIMS_MAP.set(n.STICK, [O]), _.SYMBOL_ANIMS_MAP.set(n.FORK, [t]), _.SYMBOL_ANIMS_MAP.set(n.A, [o]), _.SYMBOL_ANIMS_MAP.set(n.K, [L]), _.SYMBOL_ANIMS_MAP.set(n.Q, [i]), _.SYMBOL_ANIMS_MAP.set(n.J, [B]), _.SYMBOL_ANIMS_MAP.set(n.SCATTER, [S, M]), _.SYMBOL_ANIMS_MAP.set(n.BONUS, [S, M]);
  }, _;
}());
A.ROW = 3, A.COL = 5, A.TOTAL_SYMBOL = A.ROW * A.COL, A.SYMBOL_WIDTH = 160, A.SYMBOL_HIGH = 160, A.symbolPosConfig = new Map(), A.SYMBOL_ANIMS_MAP = new Map(), _dependency.cclegacy._RF.pop();
