// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameData";
var _export;
export { _export as lineItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "lineItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, s, r, c, l, u, p, m, f;
var h, d, y, v, D;
_dependency2.cclegacy._RF.push({}, "63dc0m/Al5FZrPty81SlAxo", "lineItem", void 0);
var g = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("lineItem", (h = g("lineItem"), d = _dependency4.inject("anim", _dependency2.sp.Skeleton), h((D = _dependency.applyDecoratedDescriptor((v = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "anim", D, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {}, s.play = function (t, e, n) {
    var i = this;
    this.node.active = !0, this.anim.clearTracks(), this.anim.setToSetupPose(), this.anim.skeletonData = t, this.anim.timeScale = 1.25, this.anim.setAnimation(0, e, !1), this.anim.setCompleteListener(function () {
      i.node.active = !1, i.anim.skeletonData = null, i.anim.setCompleteListener(null), _dependency2.tween(i.node).bindNodeState(false).delay(.15).call(function () {
        n();
      }).start();
    });
  }, s.reset = function () {
    _dependency2.Tween.stopAllByTarget(this.node), this.anim.clearTracks(), this.anim.setToSetupPose(), this.anim.setCompleteListener(null);
  }, s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "anim", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = v)) || y));
_dependency2.cclegacy._RF.pop();
