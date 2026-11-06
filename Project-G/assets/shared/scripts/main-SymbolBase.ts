// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
var _export;
export { _export as SymbolBase };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SymbolBase":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, i, o, r, l, a, c, u;
var s, p, d, f, y, b, h, m, S;
_dependency2.cclegacy._RF.push({}, "27b59vGLMJAB6ovtJxn4eHK", "SymbolBase", void 0);
var v = _dependency2._decorator.ccclass,
  g = _dependency2._decorator.property,
  x = _dependency2._decorator.menu,
  I = (_dependency2._decorator.executeInEditMode, _dependency2._decorator.requireComponent);
_publish("SymbolBase", (s = v("SymbolBase"), p = x("Slot/Symbol/SymbolBase"), d = I(_dependency2.UITransform), f = g(_dependency2.CCInteger), y = g(_dependency2.CCInteger), s(b = p(b = d((m = _dependency.applyDecoratedDescriptor((h = function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var n, t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
    return n = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "id", m, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "zIndex", S, _dependency.assertThisInitialized(n)), n.isExplode = !1, n.originalParent = null, n;
  }
  _dependency.inheritsLoose(n, e);
  var r = n.prototype;
  return r.setSymbol = function () {
    this.isExplode = !1, this.node.zIndex = this.zIndex;
  }, r.unScheduleAllCallBack = function () {
    this.unscheduleAllCallbacks();
  }, r.changeSpeed = function (e, n) {}, r.playIdle = function () {}, n;
}(_dependency3.default)).prototype, "id", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), S = _dependency.applyDecoratedDescriptor(h.prototype, "zIndex", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), b = h)) || b) || b) || b));
_dependency2.cclegacy._RF.pop();
