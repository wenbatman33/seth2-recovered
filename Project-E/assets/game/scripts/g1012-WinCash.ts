// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
var _export;
export { _export as WinCash };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WinCash":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, i, o, r, a, c, u, s;
var l, f, p, h, d, v, b;
_dependency2.cclegacy._RF.push({}, "eb5e8fJ4s1CnLWtggTeNHmt", "WinCash", void 0);
var y = _dependency2._decorator.ccclass,
  g = _dependency2._decorator.property;
_publish("WinCash", (l = y("WinCash"), f = g(_dependency2.Label), p = g(_dependency2.Sprite), l((v = _dependency.applyDecoratedDescriptor((d = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "number", v, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "background", b, _dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.update = function (t) {}, r.onDestroy = function () {
    this.removeEvents();
  }, r.init = function () {}, r.changeModel = function (t) {
    this.reset();
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {}, r.removeEvents = function () {}, n;
}(_dependency3.default)).prototype, "number", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), b = _dependency.applyDecoratedDescriptor(d.prototype, "background", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), h = d)) || h));
_dependency2.cclegacy._RF.pop();
