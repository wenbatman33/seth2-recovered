// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as SingleReelDampingSetting };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingleReelDampingSetting":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, e, n, a, r;
var l, p, o, s, u, m, c, g, f, y, b, D, d, h, w, S, z;
_dependency2.cclegacy._RF.push({}, "04bc5brFN9Fp7t9rUtQWdat", "SingleReelDampingSetting", void 0);
var N = _dependency2._decorator.ccclass,
  R = _dependency2._decorator.property;
_publish("SingleReelDampingSetting", (l = N("SingleReelDampingSetting"), p = R({
  displayName: "滾動開始的抖動",
  tooltip: "downView"
}), o = R({
  type: _dependency2.CCFloat,
  displayName: "滾動開始的抖動時間(單位:sec)",
  tooltip: "midCount"
}), s = R({
  type: _dependency2.CCFloat,
  displayName: "滾動開始的抖動幅度",
  tooltip: "一個Symbol高的比例"
}), u = R({
  type: _dependency2.CCFloat,
  displayName: "延遲滾動開始的抖動秒數"
}), m = R({
  displayName: "滾動最後的抖動",
  tooltip: "downView"
}), c = R({
  type: _dependency2.CCFloat,
  displayName: "滾動最後的抖動時間(單位:sec)",
  tooltip: "midCount"
}), g = R({
  type: _dependency2.CCFloat,
  displayName: "滾動最後的抖動幅度",
  tooltip: "一個Symbol高的比例"
}), l((b = _dependency.applyDecoratedDescriptor((y = function () {
  _dependency.initializerDefineProperty(this, "firstDamping", b, this), _dependency.initializerDefineProperty(this, "firstDampingTime", D, this), _dependency.initializerDefineProperty(this, "firstDampingAmplitude", d, this), _dependency.initializerDefineProperty(this, "firstDampingDelay", h, this), _dependency.initializerDefineProperty(this, "lastDamping", w, this), _dependency.initializerDefineProperty(this, "lastDampingTime", S, this), _dependency.initializerDefineProperty(this, "lastDampingAmplitude", z, this);
}).prototype, "firstDamping", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), D = _dependency.applyDecoratedDescriptor(y.prototype, "firstDampingTime", [o], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .08;
  }
}), d = _dependency.applyDecoratedDescriptor(y.prototype, "firstDampingAmplitude", [s], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), h = _dependency.applyDecoratedDescriptor(y.prototype, "firstDampingDelay", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .1;
  }
}), w = _dependency.applyDecoratedDescriptor(y.prototype, "lastDamping", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), S = _dependency.applyDecoratedDescriptor(y.prototype, "lastDampingTime", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .08;
  }
}), z = _dependency.applyDecoratedDescriptor(y.prototype, "lastDampingAmplitude", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), f = y)) || f));
_dependency2.cclegacy._RF.pop();
