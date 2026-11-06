// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-ReelExpectItem";
var _export;
export { _export as ReelExpect };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelExpect":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, r, n, l, a, o;
var p, c, s, u, m, f, y, b, d, h, g, C, R;
_dependency2.cclegacy._RF.push({}, "66ec0JsGf1CTJWS0KL7rAsB", "ReelExpect", void 0);
var w = _dependency2._decorator.ccclass,
  x = _dependency2._decorator.property;
_publish("ReelExpect", (p = w("ReelExpect"), c = x({
  type: _dependency2.CCInteger,
  displayName: "期待動畫要經過幾個 Symbol"
}), s = x({
  type: _dependency2.CCFloat,
  displayName: "期待動畫滾輪速度調整"
}), u = x({
  type: _dependency2.CCFloat,
  displayName: "期待動畫滾輪加速度時間"
}), m = x({
  type: _dependency3.default,
  displayName: "期待動畫條件陣列"
}), f = x({
  type: _dependency3.default,
  displayName: "全盤瞇牌動畫條件陣列"
}), p((d = _dependency.applyDecoratedDescriptor((b = function () {
  _dependency.initializerDefineProperty(this, "step", d, this), _dependency.initializerDefineProperty(this, "speedUp", h, this), _dependency.initializerDefineProperty(this, "incrementTime", g, this), _dependency.initializerDefineProperty(this, "itemList", C, this), _dependency.initializerDefineProperty(this, "fullComboItem", R, this);
}).prototype, "step", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 20;
  }
}), h = _dependency.applyDecoratedDescriptor(b.prototype, "speedUp", [s], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 2.3;
  }
}), g = _dependency.applyDecoratedDescriptor(b.prototype, "incrementTime", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), C = _dependency.applyDecoratedDescriptor(b.prototype, "itemList", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), R = _dependency.applyDecoratedDescriptor(b.prototype, "fullComboItem", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency3.default();
  }
}), y = b)) || y));
_dependency2.cclegacy._RF.pop();
