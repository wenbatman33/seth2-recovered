// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-TweenMaxNode";
var _export;
export { _export as SlotPrefabLineAnimation };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotPrefabLineAnimation":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, r, a, s, u, l;
var p, c, f, d, b, h, m;
_dependency2.cclegacy._RF.push({}, "936d0MC6btPnKbzZd9ugiIG", "SlotPrefabLineAnimation", void 0);
var g = _dependency2._decorator.ccclass,
  y = _dependency2._decorator.property;
_publish("SlotPrefabLineAnimation", (p = g("SlotPrefabLineAnimation"), c = y(_dependency2.Node), f = y(_dependency2.Prefab), p((h = _dependency.applyDecoratedDescriptor((b = function () {
  function t() {
    _dependency.initializerDefineProperty(this, "parentNode", h, this), _dependency.initializerDefineProperty(this, "prefab", m, this);
  }
  var e = t.prototype;
  return e.getNode = function () {
    var t = null;
    return this.prefab && (t = _dependency2.instantiate(this.prefab)).setParent(this.parentNode), t;
  }, e.startAnimation = function (t) {
    var e = this,
      n = this.getNode();
    n.setPosition(new _dependency2.Vec3(t.path[0].x, t.path[0].y));
    var i = n.addComponent(_dependency3.TweenMaxNode);
    gsap.to(i, {
      delay: t.delay || 0,
      duration: t.duration,
      ease: "none",
      motionPath: {
        path: t.path,
        autoRotate: !0,
        alignOrigin: [.5, .5],
        curviness: t.curviness || 0
      },
      onComplete: function () {
        e.stopAnimation(n), t.onComplete && t.onComplete();
      }
    });
  }, e.stopAnimation = function (t) {
    gsap.killTweensOf(t), t.destroy();
  }, t;
}()).prototype, "parentNode", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = _dependency.applyDecoratedDescriptor(b.prototype, "prefab", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), d = b)) || d));
_dependency2.cclegacy._RF.pop();
