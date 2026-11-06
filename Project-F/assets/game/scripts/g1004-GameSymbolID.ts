// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EBackendSymbolID };
var _export2;
export { _export2 as ESymbolAnimType };
var _export3;
export { _export3 as GameSymbolID };
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
    case "GameSymbolID":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i;
var n, o;
_publish({
  EBackendSymbolID: void 0,
  ESymbolAnimType: void 0
}), _dependency.cclegacy._RF.push({}, "5c59eEvmYlFS4rIisIpGGcY", "GameSymbolID", void 0), function (e) {
  e.LOOP = "loop", e.WIN = "win", e.IN = "in", e.HIT = "hit", e.OUT = "out", e.IDLE = "idle", e.TWIST = "twist";
}(n || (n = _publish("ESymbolAnimType", {}))), function (e) {
  e[e.WILD = 1] = "WILD", e[e.RATE = 2] = "RATE", e[e.STICK = 3] = "STICK", e[e.FORK = 4] = "FORK", e[e.A = 5] = "A", e[e.K = 6] = "K", e[e.Q = 7] = "Q", e[e.J = 8] = "J", e[e.JACKPOT = 13] = "JACKPOT", e[e.SCATTER = 14] = "SCATTER", e[e.BONUS = 10] = "BONUS";
}(o || (o = _publish("EBackendSymbolID", {})));
var t = _publish("GameSymbolID", function () {});
t.ROW = 3, t.COL = 5, t.TOTAL_SYMBOL = t.ROW * t.COL, t.SYMBOL_WIDTH = 118, t.SYMBOL_HIGH = 100, _dependency.cclegacy._RF.pop();
