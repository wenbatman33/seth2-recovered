// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-ReelEnum";
import * as _dependency4 from "./main-SingleReelDampingSetting";
var _export;
export { _export as SingleReelSetting };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingleReelSetting":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, e, n, o, l, r, a, u, p, s;
var m, b, y, c, d, g, f, S, h, w, C, z, N, D, R, v, I, L, V, F, O, T, _, B, E, P, A, H, M, Q, U;
_dependency2.cclegacy._RF.push({}, "1b5ad5AGgFFHJNQSQd3tRnX", "SingleReelSetting", void 0);
var W = _dependency2._decorator.ccclass,
  j = _dependency2._decorator.property;
_publish("SingleReelSetting", (m = W("SingleReelSetting"), b = j({
  type: _dependency2.Enum(_dependency3.EScrollDirection),
  displayName: "滾動方向"
}), y = j({
  type: _dependency2.CCInteger,
  displayName: "[上面] 顯示幾個 Symbol",
  tooltip: "選向下滾動方向，必須 >=2"
}), c = j({
  displayName: "[上面] 是否顯示出來",
  tooltip: "topView"
}), d = j({
  type: _dependency2.CCInteger,
  displayName: "[中間] 顯示幾個 Symbol",
  tooltip: "midCount"
}), g = j({
  type: _dependency2.CCInteger,
  displayName: "[下面] 顯示幾個 Symbol",
  tooltip: "選向上滾動方向，必須 >=2"
}), f = j({
  displayName: "[下面] 是否顯示出來",
  tooltip: "downView"
}), S = j({
  type: _dependency2.CCFloat,
  displayName: "移動一個Symbol的時間(單位:sec)",
  tooltip: "移動一個Symbol，所花的秒數"
}), h = j({
  type: _dependency2.CCFloat,
  displayName: "最後停輪移動Symbol時間(單位:sec)",
  tooltip: "移動一個Symbol，所花的秒數"
}), w = j({
  type: _dependency2.CCInteger,
  displayName: "要滾動幾個Symbol",
  tooltip: "至少要比 TOP+MID+DOWN 多1個"
}), C = j({
  type: _dependency4.SingleReelDampingSetting,
  displayName: "抖動設定"
}), z = j(_dependency2.CCString), N = j(_dependency2.CCString), D = j({
  type: _dependency2.CCInteger,
  displayName: "初始化 symbol 陣列(symbol ID)",
  tooltip: "initSymbolIdList"
}), R = j({
  type: _dependency2.CCInteger,
  displayName: "Symbol 隨機ID",
  tooltip: "symbol數量，預設10"
}), m((L = _dependency.applyDecoratedDescriptor((I = function () {
  function t() {
    _dependency.initializerDefineProperty(this, "scrollDirection", L, this), _dependency.initializerDefineProperty(this, "topCount", V, this), _dependency.initializerDefineProperty(this, "topView", F, this), _dependency.initializerDefineProperty(this, "midCount", O, this), _dependency.initializerDefineProperty(this, "downCount", T, this), _dependency.initializerDefineProperty(this, "downView", _, this), _dependency.initializerDefineProperty(this, "moveOneSymbolTime", B, this), _dependency.initializerDefineProperty(this, "stopReelTime", E, this), _dependency.initializerDefineProperty(this, "step", P, this), _dependency.initializerDefineProperty(this, "dampingSetting", A, this), _dependency.initializerDefineProperty(this, "stopSoundUrl", H, this), _dependency.initializerDefineProperty(this, "stopSoundBundle", M, this), _dependency.initializerDefineProperty(this, "initSymbolIdList", Q, this), _dependency.initializerDefineProperty(this, "randomSymbolList", U, this);
  }
  return t.prototype.getAllCount = function () {
    return this.topCount + this.midCount + this.downCount;
  }, t;
}()).prototype, "scrollDirection", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return _dependency3.EScrollDirection.DOWN;
  }
}), V = _dependency.applyDecoratedDescriptor(I.prototype, "topCount", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), F = _dependency.applyDecoratedDescriptor(I.prototype, "topView", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), O = _dependency.applyDecoratedDescriptor(I.prototype, "midCount", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), T = _dependency.applyDecoratedDescriptor(I.prototype, "downCount", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), _ = _dependency.applyDecoratedDescriptor(I.prototype, "downView", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), B = _dependency.applyDecoratedDescriptor(I.prototype, "moveOneSymbolTime", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .07;
  }
}), E = _dependency.applyDecoratedDescriptor(I.prototype, "stopReelTime", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .075;
  }
}), P = _dependency.applyDecoratedDescriptor(I.prototype, "step", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 6;
  }
}), A = _dependency.applyDecoratedDescriptor(I.prototype, "dampingSetting", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.SingleReelDampingSetting();
  }
}), H = _dependency.applyDecoratedDescriptor(I.prototype, "stopSoundUrl", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), M = _dependency.applyDecoratedDescriptor(I.prototype, "stopSoundBundle", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(I.prototype, "initSymbolIdList", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = _dependency.applyDecoratedDescriptor(I.prototype, "randomSymbolList", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}), v = I)) || v));
_dependency2.cclegacy._RF.pop();
