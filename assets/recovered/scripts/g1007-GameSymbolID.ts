// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameSymbolID.js
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EBackendSymbolID };
var __export_1;
export { __export_1 as GameSymbolID };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBackendSymbolID":
      __export_0 = value;
      break;
    case "GameSymbolID":
      __export_1 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var O, S;
var e;
__publish("EBackendSymbolID", void 0), __dependency_0.cclegacy._RF.push({}, "158adYyW7pHV7RiGt0vNs6u", "GameSymbolID", void 0), function (t) {
  t[t.WILD = 1] = "WILD", t[t.HADES = 2] = "HADES", t[t.PERSE = 3] = "PERSE", t[t.DOG = 4] = "DOG", t[t.GHOST = 5] = "GHOST", t[t.A = 6] = "A", t[t.K = 7] = "K", t[t.Q = 8] = "Q", t[t.SCATTER = 9] = "SCATTER", t[t.JACKPOT = 10] = "JACKPOT";
}(e || (e = __publish("EBackendSymbolID", {})));
var n = __publish("GameSymbolID", function () {
  function t() {}
  return t.makeSymbolPosConfig = function () {
    for (var t = new Map(), O = this.SYMBOL_WIDTH, e = this.SYMBOL_HEIGHT, n = O + this.SYMBOL_PADDING_X, i = e + this.SYMBOL_PADDING_Y, D = -(this.COL - 1) * n / 2, o = (this.ROW - 1) * i / 2, s = 0, r = 0; r < this.ROW; r++) for (var c = 0; c < this.COL; c++) {
      var a = D + c * n,
        u = o - r * i;
      t.set(s, new __dependency_0.Vec3(a, u, 0)), s++;
    }
    return t;
  }, t;
}());
n.ROW = 5, n.COL = 5, n.TOTAL_SYMBOL = n.ROW * n.COL, n.SYMBOL_WIDTH = 108, n.SYMBOL_HEIGHT = 108, n.SYMBOL_PADDING_X = 0, n.SYMBOL_PADDING_Y = 0, __dependency_0.cclegacy._RF.pop();
