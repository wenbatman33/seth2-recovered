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
var n, e, o, i, r, a, s, c, u, l, p, d, f, h;
var v, y, m, b, g, C, w;
_dependency2.cclegacy._RF.push({}, "eb5e8fJ4s1CnLWtggTeNHmt", "WinCash", void 0);
var M = _dependency2._decorator.ccclass,
  _ = _dependency2._decorator.property;
_publish("WinCash", (v = M("WinCash"), y = _(_dependency2.Label), m = _(_dependency2.Sprite), v((C = _dependency.applyDecoratedDescriptor((g = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "number", C, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "background", w, _dependency.assertThisInitialized(n)), n._particleNodes = [], n;
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
  }, r.playParticleBurst = function (t, n) {
    var e,
      o = this;
    if (void 0 === n && (n = 7), t) {
      var i = null == (e = this.background) ? void 0 : e.node;
      if (i) for (var r = function () {
          var e = new _dependency2.Node("star_" + a);
          e.parent = i, e.setPosition(0, 0, 0), e.addComponent(_dependency2.UITransform).setContentSize(40, 40), e.addComponent(_dependency2.Sprite).spriteFrame = t;
          var r = e.addComponent(_dependency2.UIOpacity);
          r.opacity = 255;
          var s = a / n * Math.PI * 2 + .5 * (Math.random() - .5),
            h = 150 + 150 * Math.random(),
            v = .25 + .55 * Math.random(),
            y = Math.cos(s) * h * v,
            m = Math.sin(s) * h * v;
          e.setScale(new _dependency2.Vec3(.8, .8, 1)), _dependency2.tween(e).bindNodeState(false).to(v, {
            position: new _dependency2.Vec3(y, m, 0),
            scale: new _dependency2.Vec3(.15, .15, 1)
          }).call(function () {
            return e.destroy();
          }).start(), _dependency2.tween(r).bindNodeState(false).delay(.5 * v).to(.5 * v, {
            opacity: 0
          }).start(), o._particleNodes.push(e);
        }, a = 0; a < n; a++) r();
    }
  }, r.addEvents = function () {}, r.removeEvents = function () {}, n;
}(_dependency3.default)).prototype, "number", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), w = _dependency.applyDecoratedDescriptor(g.prototype, "background", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = g)) || b));
_dependency2.cclegacy._RF.pop();
