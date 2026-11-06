// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, o, n, l, r;
var s, u, a, p, c, b, m, y, f, h, d, g, S, x, C;
_dependency2.cclegacy._RF.push({}, "d9d02M0iWREfI8QL5fIfu/h", "ReelExpectItem", void 0);
var W = _dependency2._decorator.ccclass,
  L = _dependency2._decorator.property;
_publish("default", (s = W("ReelExpectItem"), u = L({
  type: _dependency2.CCInteger,
  displayName: "Symbol ID List"
}), a = L({
  type: _dependency2.CCInteger,
  visible: !1
}), p = L({
  type: _dependency2.CCInteger,
  displayName: "超過幾次"
}), c = L({
  type: _dependency2.CCInteger,
  displayName: "符合條件 滾輪 index"
}), b = L({
  type: _dependency2.CCInteger,
  displayName: "中獎期待動畫滾輪隨機symbol id陣列",
  tooltip: "長度通常為expectSetting的step"
}), m = L({
  type: _dependency2.CCInteger,
  displayName: "沒中獎期待動畫滾輪隨機symbol id陣列沒中獎(輪帶)",
  tooltip: "長度通常為expectSetting的step"
}), s((h = _dependency.applyDecoratedDescriptor((f = function () {
  function t() {
    _dependency.initializerDefineProperty(this, "symbolList", h, this), _dependency.initializerDefineProperty(this, "count", d, this), _dependency.initializerDefineProperty(this, "overCount", g, this), _dependency.initializerDefineProperty(this, "reelIdList", S, this), _dependency.initializerDefineProperty(this, "winningExpectRandomSymbolList", x, this), _dependency.initializerDefineProperty(this, "noWinExpectRandomSymbolList", C, this), this._fullComboWinSymbols = [];
  }
  var e = t.prototype;
  return e.setFullComboExpectWinSymbols = function (t) {
    this._fullComboWinSymbols.push(t);
  }, e.clearFullComboWinSymbols = function () {
    this._fullComboWinSymbols = [];
  }, e.getFullComboExpectWinSymbols = function () {
    var t = _dependency2.randomRangeInt(0, this._fullComboWinSymbols.length);
    return null != this._fullComboWinSymbols[t] ? this._fullComboWinSymbols[t] : [];
  }, t;
}()).prototype, "symbolList", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), d = _dependency.applyDecoratedDescriptor(f.prototype, "count", [a], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), g = _dependency.applyDecoratedDescriptor(f.prototype, "overCount", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 2;
  }
}), S = _dependency.applyDecoratedDescriptor(f.prototype, "reelIdList", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), x = _dependency.applyDecoratedDescriptor(f.prototype, "winningExpectRandomSymbolList", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), C = _dependency.applyDecoratedDescriptor(f.prototype, "noWinExpectRandomSymbolList", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), y = f)) || y));
_dependency2.cclegacy._RF.pop();
