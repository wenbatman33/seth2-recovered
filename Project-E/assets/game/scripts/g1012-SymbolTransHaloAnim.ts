// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
var _export;
export { _export as SymbolTransHaloAnim };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SymbolTransHaloAnim":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, i, o, e, r, a, s, c, l;
var u, p, f, y, h;
_dependency2.cclegacy._RF.push({}, "0f587UlfTFG/Z2DOTEL8vGa", "SymbolTransHaloAnim", void 0);
var m = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("SymbolTransHaloAnim", (u = m("SymbolTransHaloAnim"), p = _dependency4.inject("anim", _dependency2.sp.Skeleton), u((h = _dependency.applyDecoratedDescriptor((y = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "anim", h, _dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    this.play();
  }, r.play = function () {
    var t = this;
    this.anim.setAnimation(0, "trans_reel", !1), this.anim.setCompleteListener(function () {
      t.node.destroy();
    });
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, n;
}(_dependency3.default)).prototype, "anim", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), f = y)) || f));
_dependency2.cclegacy._RF.pop();
