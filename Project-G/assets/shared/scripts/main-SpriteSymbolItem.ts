// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SymbolBase";
var _export;
export { _export as SpriteSymbolItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpriteSymbolItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, r, o, n, l, s, a, p, c;
var m, u, y, b, S, f, h, d, F;
_dependency2.cclegacy._RF.push({}, "b481e8FpJpLxZ0/TiZNr/hB", "SpriteSymbolItem", void 0);
var I = _dependency2._decorator.ccclass,
  g = _dependency2._decorator.property,
  v = _dependency2._decorator.menu,
  z = _dependency2._decorator.executeInEditMode;
_publish("SpriteSymbolItem", (m = I("SpriteSymbolItem"), u = v("Slot/Symbol/SpriteSymbolItem"), y = z(), b = g(_dependency2.Node), S = g({
  type: _dependency2.SpriteFrame,
  tooltip: "放入對應圖片。通常[0]會是空，其餘會與後端symbolID對齊"
}), m(f = u(f = y((d = _dependency.applyDecoratedDescriptor((h = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, n = new Array(i), l = 0; l < i; l++) n[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "staticSymbol", d, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spriteFrames", F, _dependency.assertThisInitialized(e)), e;
  }
  return _dependency.inheritsLoose(e, t), e.prototype.setSymbol = function (e) {
    if (t.prototype.setSymbol.call(this, e), this.id = e, this.staticSymbol) {
      var i = this.spriteFrames[e];
      i && (this.staticSymbol.getComponent(_dependency2.Sprite).spriteFrame = i);
    }
  }, e;
}(_dependency3.SymbolBase)).prototype, "staticSymbol", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(h.prototype, "spriteFrames", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), f = h)) || f) || f) || f));
_dependency2.cclegacy._RF.pop();
