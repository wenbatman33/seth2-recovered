// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SymbolBase";
var _export;
export { _export as SpriteAtlasSymbolItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpriteAtlasSymbolItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, r, a, l, o, n, s, p, c;
var u, S, b, m, y, f, h, g, d, v;
_dependency2.cclegacy._RF.push({}, "cfb76jk/dBG0buiz6BJ015o", "SpriteAtlasSymbolItem", void 0);
var A = _dependency2._decorator.ccclass,
  z = _dependency2._decorator.property,
  I = _dependency2._decorator.menu;
_publish("SpriteAtlasSymbolItem", (u = A("SpriteAtlasSymbolItem"), S = I("Slot/Symbol/SpriteAtlasSymbolItem"), b = z(_dependency2.SpriteAtlas), m = z(_dependency2.Sprite), y = z(_dependency2.CCString), u(f = S((g = _dependency.applyDecoratedDescriptor((h = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(l).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "atlas", g, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "staticSprite", d, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "prefix", v, _dependency.assertThisInitialized(e)), e;
  }
  return _dependency.inheritsLoose(e, t), e.prototype.setSymbol = function (e) {
    if (t.prototype.setSymbol.call(this, e), this.id = e, this.staticSprite && this.atlas) {
      var i = this.atlas.getSpriteFrame(this.prefix + "" + this.id);
      this.staticSprite.spriteFrame = i;
    }
  }, e;
}(_dependency3.SymbolBase)).prototype, "atlas", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), d = _dependency.applyDecoratedDescriptor(h.prototype, "staticSprite", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = _dependency.applyDecoratedDescriptor(h.prototype, "prefix", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), f = h)) || f) || f));
_dependency2.cclegacy._RF.pop();
