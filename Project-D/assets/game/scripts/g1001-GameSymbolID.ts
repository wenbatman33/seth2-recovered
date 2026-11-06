// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as EBackendSymbolID };
var _export2;
export { _export2 as EReelStatus };
var _export3;
export { _export3 as ESymbolAnimType };
var _export4;
export { _export4 as ESymbolStatus };
var _export5;
export { _export5 as GameSymbolID };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBackendSymbolID":
      _export = value;
      break;
    case "EReelStatus":
      _export2 = value;
      break;
    case "ESymbolAnimType":
      _export3 = value;
      break;
    case "ESymbolStatus":
      _export4 = value;
      break;
    case "GameSymbolID":
      _export5 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var S, t, e;
var E, s, A, n;
_publish({
  EBackendSymbolID: void 0,
  EReelStatus: void 0,
  ESymbolAnimType: void 0,
  ESymbolStatus: void 0
}), _dependency.cclegacy._RF.push({}, "7a03bxdEEpBMrPhnQkNvMzu", "GameSymbolID", void 0), function (M) {
  M[M.BLUR = 0] = "BLUR", M[M.STATIC = 1] = "STATIC", M[M.ANIM = 2] = "ANIM", M[M.WIN = 3] = "WIN";
}(E || (E = _publish("ESymbolStatus", {}))), function (M) {
  M.LOOP = "loop", M.WIN = "win", M.IN = "in", M.OUT = "out", M.TEASE = "tease", M.FUNCTION = "function";
}(s || (s = _publish("ESymbolAnimType", {}))), function (M) {
  M.SPINNING = "SPINNING", M.STOPPING = "STOPPING", M.STATIC = "STATIC";
}(A || (A = _publish("EReelStatus", {}))), function (M) {
  M[M.EYE = 1] = "EYE", M[M.SNAKE = 2] = "SNAKE", M[M.BOW = 3] = "BOW", M[M.MACHETE = 4] = "MACHETE", M[M.ORANGE_GEM = 5] = "ORANGE_GEM", M[M.RED_GEM = 6] = "RED_GEM", M[M.PURPLE_GEM = 7] = "PURPLE_GEM", M[M.BLUE_GEM = 8] = "BLUE_GEM", M[M.GREEN_GEM = 9] = "GREEN_GEM", M[M.T1 = 10] = "T1", M[M.T2 = 11] = "T2", M[M.T3 = 12] = "T3", M[M.T4 = 13] = "T4", M[M.JACKPOT = 14] = "JACKPOT", M[M.SCATTER = 15] = "SCATTER";
}(n || (n = _publish("EBackendSymbolID", {})));
var o = _publish("GameSymbolID", function () {
  function M() {}
  return M.init = function () {
    this.mapSymbolAnims(), this.makeSymbolPosConfig(_dependency2.default.getViewModeParam());
  }, M.mapSymbolAnims = function () {
    var S = s.FUNCTION,
      t = s.WIN,
      e = s.IN,
      E = s.LOOP;
    M.SYMBOL_ANIMS_MAP.set(n.EYE, [t]), M.SYMBOL_ANIMS_MAP.set(n.SNAKE, [t]), M.SYMBOL_ANIMS_MAP.set(n.BOW, [t]), M.SYMBOL_ANIMS_MAP.set(n.MACHETE, [t]), M.SYMBOL_ANIMS_MAP.set(n.ORANGE_GEM, [t]), M.SYMBOL_ANIMS_MAP.set(n.RED_GEM, [t]), M.SYMBOL_ANIMS_MAP.set(n.PURPLE_GEM, [t]), M.SYMBOL_ANIMS_MAP.set(n.BLUE_GEM, [t]), M.SYMBOL_ANIMS_MAP.set(n.GREEN_GEM, [t]), M.SYMBOL_ANIMS_MAP.set(n.T1, [S]), M.SYMBOL_ANIMS_MAP.set(n.T2, [S]), M.SYMBOL_ANIMS_MAP.set(n.T3, [S]), M.SYMBOL_ANIMS_MAP.set(n.T4, [S]), M.SYMBOL_ANIMS_MAP.set(n.JACKPOT, [e, E, t]), M.SYMBOL_ANIMS_MAP.set(n.SCATTER, [e, t]);
  }, M.makeSymbolPosConfig = function (M) {
    void 0 === M && (M = "landscape"), Log.e("make symbol position config::::", M);
    for (var S = "landscape" == M ? 375 : 353, e = "landscape" == M ? 250 : 235, E = "landscape" == M ? this.SYMBOL_WIDTH : 117, s = "landscape" == M ? this.SYMBOL_HIGH : .94 * this.SYMBOL_HIGH, A = "landscape" == M ? 64 : 60, n = "landscape" == M ? -54 : -51, o = 0; o < this.TOTAL_SYMBOL; o++) {
      var _ = new _dependency.Vec3(0, 0);
      _.x = A + o % this.ROW * (E + 0) - S, _.y = n + Math.floor(o / this.ROW) * -(s + 0) + e, this.symbolPosConfig.set(o, _);
    }
  }, M;
}());
o.ROW = 6, o.COL = 5, o.TOTAL_SYMBOL = o.ROW * o.COL, o.SYMBOL_WIDTH = 124, o.SYMBOL_HIGH = 98, o.symbolPosConfig = new Map(), o.SYMBOL_ANIMS_MAP = new Map(), o.symbolTextures = [], o.symbolSpriteMap = new Map(), o.symbolAnimMap = new Map(), _dependency.cclegacy._RF.pop();
