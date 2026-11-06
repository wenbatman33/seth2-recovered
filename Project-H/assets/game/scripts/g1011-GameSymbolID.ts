// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EBackendSymbolID };
var _export2;
export { _export2 as ESymbolStatus };
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
    case "ESymbolStatus":
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
var t;
var o, S;
_publish({
  EBackendSymbolID: void 0,
  ESymbolStatus: void 0
}), _dependency.cclegacy._RF.push({}, "5c59eEvmYlFS4rIisIpGGcY", "GameSymbolID", void 0), function (n) {
  n[n.BLUR = 0] = "BLUR", n[n.STATIC = 1] = "STATIC", n[n.ANIM = 2] = "ANIM", n[n.WIN = 3] = "WIN";
}(o || (o = _publish("ESymbolStatus", {}))), function (n) {
  n[n.WILD = 1] = "WILD", n[n.HAT = 2] = "HAT", n[n.STICK = 3] = "STICK", n[n.FORK = 4] = "FORK", n[n.A = 5] = "A", n[n.K = 6] = "K", n[n.Q = 7] = "Q", n[n.J = 8] = "J", n[n.SCATTER = 9] = "SCATTER", n[n.BONUS = 10] = "BONUS";
}(S || (S = _publish("EBackendSymbolID", {})));
var c = _publish("GameSymbolID", function () {
  function n() {}
  return n.init = function () {}, n;
}());
c.ROW = 3, c.COL = 5, c.TOTAL_SYMBOL = c.ROW * c.COL, c.SYMBOL_WIDTH = 160, c.SYMBOL_HIGH = 160, c.symbolPosConfig = new Map(), _dependency.cclegacy._RF.pop();
