// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SymbolSetting";
import * as _dependency4 from "./main-ReelExpect";
var _export;
export { _export as ReelSetting };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelSetting":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, r, l, o, a, s, p;
var c, u, b, y, f, m, g, d, S, h, R, w, v;
_dependency2.cclegacy._RF.push({}, "dcd3bPThA5GIplTOB+CyXHI", "ReelSetting", void 0);
var x = _dependency2._decorator.ccclass,
  z = _dependency2._decorator.property;
_publish("ReelSetting", (c = x("ReelSetting"), u = z({
  type: _dependency3.SymbolSetting,
  displayName: "Symbol 設定"
}), b = z({
  type: _dependency2.CCFloat,
  displayName: "快停滾輪加速"
}), y = z({
  type: _dependency2.Prefab,
  tooltip: "index 代表 symbolID"
}), f = z({
  type: _dependency2.Node,
  visible: !1
}), m = z({
  type: _dependency4.ReelExpect,
  displayName: "瞇牌動畫設定"
}), c((S = _dependency.applyDecoratedDescriptor((d = function () {
  _dependency.initializerDefineProperty(this, "symbolSetting", S, this), _dependency.initializerDefineProperty(this, "speedUp", h, this), _dependency.initializerDefineProperty(this, "symbolPrefabList", R, this), _dependency.initializerDefineProperty(this, "symbolNode", w, this), _dependency.initializerDefineProperty(this, "expectSetting", v, this);
}).prototype, "symbolSetting", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency3.SymbolSetting();
  }
}), h = _dependency.applyDecoratedDescriptor(d.prototype, "speedUp", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .66;
  }
}), R = _dependency.applyDecoratedDescriptor(d.prototype, "symbolPrefabList", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), w = _dependency.applyDecoratedDescriptor(d.prototype, "symbolNode", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = _dependency.applyDecoratedDescriptor(d.prototype, "expectSetting", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.ReelExpect();
  }
}), g = d)) || g));
_dependency2.cclegacy._RF.pop();
