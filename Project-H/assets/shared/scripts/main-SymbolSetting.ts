// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as SymbolSetting };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SymbolSetting":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, r, o, n, l;
var a, s, c, u, y, b, p, m, h;
_dependency2.cclegacy._RF.push({}, "08221BVuwJOmp4oOuoGt6xV", "SymbolSetting", void 0);
var g = _dependency2._decorator.ccclass,
  f = _dependency2._decorator.property;
_publish("SymbolSetting", (a = g("SymbolSetting"), s = f({
  type: _dependency2.CCInteger,
  displayName: "Symbol 寬度"
}), c = f({
  type: _dependency2.CCInteger,
  displayName: "Symbol 高度"
}), u = f({
  displayName: "Symbol 锚點"
}), a((p = _dependency.applyDecoratedDescriptor((b = function () {
  _dependency.initializerDefineProperty(this, "symbolWidth", p, this), _dependency.initializerDefineProperty(this, "symbolHeight", m, this), _dependency.initializerDefineProperty(this, "symbolAnchor", h, this);
}).prototype, "symbolWidth", [s], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 150;
  }
}), m = _dependency.applyDecoratedDescriptor(b.prototype, "symbolHeight", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 150;
  }
}), h = _dependency.applyDecoratedDescriptor(b.prototype, "symbolAnchor", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Vec2(.5, .5);
  }
}), y = b)) || y));
_dependency2.cclegacy._RF.pop();
