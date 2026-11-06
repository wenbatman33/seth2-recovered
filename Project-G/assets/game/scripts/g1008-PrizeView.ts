// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
var _export;
export { _export as PrizeView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "PrizeView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, o, r, c, s, a, u;
var l, f, p, d, h;
_dependency2.cclegacy._RF.push({}, "dfc24s6gMlDrq7l0mSGPCiS", "PrizeView", void 0);
var y = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("PrizeView", (l = y("PrizeView"), f = _dependency4.inject("someNode", _dependency2.Node), l((h = _dependency.applyDecoratedDescriptor((d = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, r = new Array(i), c = 0; c < i; c++) r[c] = arguments[c];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "someNode", h, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {}, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, e;
}(_dependency3.default)).prototype, "someNode", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), p = d)) || p));
_dependency2.cclegacy._RF.pop();
