// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
var _export;
export { _export as CircleAnim };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CircleAnim":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, i, e, o, r, c, s, a, l;
var u, p, f, h, y;
_dependency2.cclegacy._RF.push({}, "0d0b3zCk55D2or9Uh8rgHdM", "CircleAnim", void 0);
var d = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("CircleAnim", (u = d("CircleAnim"), p = _dependency4.inject("anim", _dependency2.sp.Skeleton), u((y = _dependency.applyDecoratedDescriptor((h = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, i = arguments.length, r = new Array(i), c = 0; c < i; c++) r[c] = arguments[c];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "anim", y, _dependency.assertThisInitialized(n)), n;
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
    this.anim.setAnimation(0, "circle", !1), this.anim.setCompleteListener(function () {
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
}), f = h)) || f));
_dependency2.cclegacy._RF.pop();
