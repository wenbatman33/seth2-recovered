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
var t, S, s;
var e, A, E, o;
_publish({
  EBackendSymbolID: void 0,
  EReelStatus: void 0,
  ESymbolAnimType: void 0,
  ESymbolStatus: void 0
}), _dependency.cclegacy._RF.push({}, "ae0fcJmGIRPVpRNi0p4XBkf", "GameSymbolID", void 0), function (M) {
  M[M.BLUR = 0] = "BLUR", M[M.STATIC = 1] = "STATIC", M[M.ANIM = 2] = "ANIM", M[M.WIN = 3] = "WIN";
}(e || (e = _publish("ESymbolStatus", {}))), function (M) {
  M.LOOP = "loop", M.IDLE = "idle", M.WIN = "win", M.IN = "in", M.OUT = "out", M.TEASE = "tease", M.FUNCTION = "function";
}(A || (A = _publish("ESymbolAnimType", {}))), function (M) {
  M.SPINNING = "SPINNING", M.STOPPING = "STOPPING", M.STATIC = "STATIC";
}(E || (E = _publish("EReelStatus", {}))), function (M) {
  M[M.EYE = 1] = "EYE", M[M.SNAKE = 2] = "SNAKE", M[M.BOW = 3] = "BOW", M[M.MACHETE = 4] = "MACHETE", M[M.ORANGE_GEM = 5] = "ORANGE_GEM", M[M.RED_GEM = 6] = "RED_GEM", M[M.PURPLE_GEM = 7] = "PURPLE_GEM", M[M.BLUE_GEM = 8] = "BLUE_GEM", M[M.GREEN_GEM = 9] = "GREEN_GEM", M[M.T1 = 10] = "T1", M[M.T2 = 11] = "T2", M[M.T3 = 12] = "T3", M[M.T4 = 13] = "T4", M[M.JACKPOT = 14] = "JACKPOT", M[M.SCATTER = 15] = "SCATTER";
}(o || (o = _publish("EBackendSymbolID", {})));
var _ = _publish("GameSymbolID", function () {
  function M() {}
  return M.init = function () {
    this.mapSymbolAnims(), this.makeSymbolPosConfig(_dependency2.default.getViewModeParam());
  }, M.mapSymbolAnims = function () {
    var t = A.FUNCTION,
      S = A.WIN,
      s = A.IN,
      e = A.LOOP;
    M.SYMBOL_ANIMS_MAP.set(o.EYE, [S]), M.SYMBOL_ANIMS_MAP.set(o.SNAKE, [S]), M.SYMBOL_ANIMS_MAP.set(o.BOW, [S]), M.SYMBOL_ANIMS_MAP.set(o.MACHETE, [S]), M.SYMBOL_ANIMS_MAP.set(o.ORANGE_GEM, [S]), M.SYMBOL_ANIMS_MAP.set(o.RED_GEM, [S]), M.SYMBOL_ANIMS_MAP.set(o.PURPLE_GEM, [S]), M.SYMBOL_ANIMS_MAP.set(o.BLUE_GEM, [S]), M.SYMBOL_ANIMS_MAP.set(o.GREEN_GEM, [S]), M.SYMBOL_ANIMS_MAP.set(o.T1, [t]), M.SYMBOL_ANIMS_MAP.set(o.T2, [t]), M.SYMBOL_ANIMS_MAP.set(o.T3, [t]), M.SYMBOL_ANIMS_MAP.set(o.T4, [t]), M.SYMBOL_ANIMS_MAP.set(o.JACKPOT, [s, e, S]), M.SYMBOL_ANIMS_MAP.set(o.SCATTER, [s, S]);
  }, M.makeSymbolPosConfig = function (M) {
    void 0 === M && (M = "landscape");
    for (var t = "landscape" == M ? 375 : 353, s = "landscape" == M ? 250 : 235, e = "landscape" == M ? this.SYMBOL_WIDTH : 117, A = "landscape" == M ? this.SYMBOL_HIGH : .94 * this.SYMBOL_HIGH, E = "landscape" == M ? 64 : 60, o = "landscape" == M ? -54 : -51, _ = 0; _ < this.TOTAL_SYMBOL; _++) {
      var n = new _dependency.Vec3(0, 0);
      n.x = E + _ % this.ROW * (e + 0) - t, n.y = o + Math.floor(_ / this.ROW) * -(A + 0) + s, this.symbolPosConfig.set(_, n);
    }
    for (var i = 0; i < this.TOTAL_SYMBOL; i++) {
      var O = new _dependency.Vec3(0, 0);
      O.x = 64 + i % this.ROW * (this.SYMBOL_WIDTH + 0) - 375, O.y = Math.floor(i / this.ROW) * -(this.SYMBOL_HIGH + 0) - 54 + 250, this.symbolPosConfig.set(i, O);
    }
  }, M;
}());
_.ROW = 6, _.COL = 5, _.TOTAL_SYMBOL = _.ROW * _.COL, _.SYMBOL_WIDTH = 124, _.SYMBOL_HIGH = 98, _.symbolPosConfig = new Map(), _.SYMBOL_ANIMS_MAP = new Map(), _.symbolTextures = [], _.symbolSpriteMap = new Map(), _.symbolAnimMap = new Map(), _dependency.cclegacy._RF.pop();
