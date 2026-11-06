// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-LayoutDefines";
var _export;
export { _export as LayoutManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LayoutManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, o, r, s, a, l;
_dependency2.cclegacy._RF.push({}, "91f23IoCuxFko7p1sUVOjL7", "LayoutManager", void 0);
var c = new _dependency2.Vec3(),
  u = new _dependency2.Vec2(),
  g = new _dependency2.Vec2();
_publish("LayoutManager", function () {
  function e() {
    this.module = null;
  }
  var i = e.prototype;
  return i.align = function (e) {
    var t,
      i = e.node,
      n = e.target,
      a = e,
      g = new _dependency2.Vec2(),
      y = new _dependency2.Vec2();
    n ? (t = n, this.computeInverseTransForTarget(i, t, g, y)) : t = i.parent;
    var h = this.getReadonlyNodeSize(t),
      f = t instanceof _dependency2.Scene || !t.getComponent(_dependency2.UITransform),
      v = f ? u : t.getComponent(_dependency2.UITransform).anchorPoint,
      p = f;
    i.getPosition(c);
    var x = i._uiProps.uiTransformComp,
      b = c.x,
      d = c.y,
      m = x.anchorPoint,
      C = i.getScale();
    if (e.alignFlags & _dependency3.LayoutType.HORIZONTAL) {
      var R = 0,
        S = 0,
        A = h.width;
      p ? (R = this.visibleRect.left.x, S = this.visibleRect.right.x) : S = (R = -v.x * A) + A, R += a.isAbsoluteLeft ? a.left : a.left * A, S -= a.isAbsoluteRight ? a.right : a.right * A, n && (R += g.x, R *= y.x, S += g.x, S *= y.x);
      var w = 0,
        L = m.x,
        T = C.x;
      if (T < 0 && (L = 1 - L, T = -T), a.isStretchWidth) w = S - R, 0 !== T && (x.width = w / T), b = R + L * w;else if (w = x.width * T, a.isAlignHorizontalCenter) {
        var z = a.isAbsoluteHorizontalCenter ? a.horizontalCenter : a.horizontalCenter * A,
          F = (.5 - v.x) * h.width;
        n && (z *= y.x, F += g.x, F *= y.x), b = F + (L - .5) * w + z;
      } else b = a.isAlignLeft ? R + L * w : S + (L - 1) * w;
    }
    if (a.alignFlags & _dependency3.LayoutType.VERTICAL) {
      var I = 0,
        P = 0,
        V = h.height;
      p ? (P = this.visibleRect.bottom.y, I = this.visibleRect.top.y) : I = (P = -v.y * V) + V, P += a.isAbsoluteBottom ? a.bottom : a.bottom * V, I -= a.isAbsoluteTop ? a.top : a.top * V, n && (P += g.y, P *= y.y, I += g.y, I *= y.y);
      var H = 0,
        k = m.y,
        M = C.y;
      if (M < 0 && (k = 1 - k, M = -M), a.isStretchHeight) H = I - P, 0 !== M && (x.height = H / M), d = P + k * H;else if (H = x.height * M, a.isAlignVerticalCenter) {
        var O = a.isAbsoluteVerticalCenter ? a.verticalCenter : a.verticalCenter * V,
          _ = (.5 - v.y) * h.height;
        n && (O *= y.y, _ += g.y, _ *= y.y), d = _ + (k - .5) * H + O;
      } else d = a.isAlignBottom ? P + k * H : I + (k - 1) * H;
    }
    e.result.position.x = b, e.result.position.y = d;
  }, i.computeInverseTransForTarget = function (e, t, i, n) {
    e.parent ? g.set(e.parent.getScale().x, e.parent.getScale().y) : g.set(0, 0);
    for (var o = g.x, r = g.y, s = 0, a = 0, l = e.parent;;) {
      if (!l) return i.x = i.y = 0, void (n.x = n.y = 1);
      var c = l.getPosition();
      if (s += c.x, a += c.y, (l = l.parent) === t) break;
      l ? g.set(l.getScale().x, l.getScale().y) : g.set(0, 0);
      var u = g.x,
        y = g.y;
      s *= u, a *= y, o *= u, r *= y;
    }
    n.x = 0 !== o ? 1 / o : 1, n.y = 0 !== r ? 1 / r : 1, i.x = -s, i.y = -a;
  }, i.getReadonlyNodeSize = function (e) {
    var t = e.getComponent(_dependency2.UITransform);
    return e instanceof _dependency2.Scene ? this.visibleRect : t ? t.contentSize : _dependency2.Size.ZERO;
  }, _dependency.createClass(e, [{
    key: "visibleRect",
    get: function () {
      return window.cc.visibleRect;
    }
  }]), e;
}()).module = "【佈局管理器】", _dependency2.cclegacy._RF.pop();
