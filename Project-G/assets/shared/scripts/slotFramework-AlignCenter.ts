// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, o, s, h, r, l, c, u, a, _, d, p, g, f;
var v, y, C, m, w, T, I;
_dependency2.cclegacy._RF.push({}, "12991v8EIFOup0um0ysJ/hL", "AlignCenter", void 0);
var E = _dependency2._decorator.ccclass,
  S = _dependency2._decorator.property,
  U = _dependency2._decorator.menu;
_publish("default", (v = U("AlignCenter"), y = S({
  displayName: "臨界值",
  type: _dependency2.CCFloat,
  min: .1
}), C = S({
  displayName: "回彈速度",
  type: _dependency2.CCFloat,
  min: .1
}), E(m = v((T = _dependency.applyDecoratedDescriptor((w = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), h = 0; h < i; h++) s[h] = arguments[h];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this)._lastPos = void 0, e._content = void 0, e._contentUI = void 0, e._layout = void 0, e._view = void 0, e._viewUI = void 0, e._scrollView = void 0, e._selected = void 0, e._listener = !1, _dependency.initializerDefineProperty(e, "threshold", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "turningSpeed", I, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var h = e.prototype;
  return h.onLoad = function () {
    this._scrollView = this.node.getComponent(_dependency2.ScrollView), this._content = this._scrollView.content, this._contentUI = this._content.getComponent(_dependency2.UITransform), this._layout = this._content.getComponent(_dependency2.Layout), this._view = this._content.parent, this._viewUI = this._view.getComponent(_dependency2.UITransform), this._lastPos = this._content.position, this.scrolling();
  }, h.onEnable = function () {
    this.listener = !0, this.node.on(_dependency2.ScrollView.EventType.SCROLL_ENDED, this.scrollEnded, this), this.node.on(_dependency2.NodeEventType.TOUCH_START, this.touchStart, this), this.node.on(_dependency2.NodeEventType.TOUCH_END, this.touchEndNCancel, this), this.node.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.touchEndNCancel, this);
  }, h.onDisable = function () {
    this.listener = !1, this.node.off(_dependency2.ScrollView.EventType.SCROLL_ENDED, this.scrollEnded, this), this.node.off(_dependency2.NodeEventType.TOUCH_START, this.touchStart, this), this.node.off(_dependency2.NodeEventType.TOUCH_END, this.touchEndNCancel, this), this.node.off(_dependency2.NodeEventType.TOUCH_CANCEL, this.touchEndNCancel, this);
  }, h.jumpToItem = function (t) {
    var e = new _dependency2.Size(this._scrollView.node.getComponent(_dependency2.UITransform).width, this._contentUI.height - this._viewUI.height),
      i = (this._content.children[t].position.y + this._contentUI.height * this._contentUI.anchorY - .5 * this._viewUI.height) / e.height;
    return i > 1 || i < 0 || (this.listener = !1, this._scrollView.stopAutoScroll(), this._scrollView.scrollTo(_dependency2.v2(0, i), this.turningSpeed)), i;
  }, h.scrolling = function () {
    if (this._content.children.length && !(this._contentUI.height <= this._viewUI.height)) {
      var t,
        e,
        i,
        n,
        o = new _dependency2.Vec3(),
        s = new _dependency2.Vec3();
      if ((o = new _dependency2.Vec3(JSON.parse(JSON.stringify(this._content.position)))).subtract(this._lastPos), this._lastPos = this._content.position, !(o.length() > this.threshold)) {
        var h = new _dependency2.Size(this._content.children[0].getComponent(_dependency2.UITransform).width, this._content.children[0].getComponent(_dependency2.UITransform).height + this._layout.spacingY);
        if (this._view.parent.getComponent(_dependency2.UITransform).convertToWorldSpaceAR(_dependency2.Vec3.ZERO, o), this._contentUI.convertToNodeSpaceAR(o, s), t = this._contentUI.height - this._contentUI.anchorY * this._contentUI.height, e = 0, (t -= this._layout.paddingTop + this._content.children[0].getComponent(_dependency2.UITransform).height + .5 * this._layout.spacingY) <= s.y) {
          if (this._selected = e, this._scrollView.isScrolling()) return;
          if ((n = this.jumpToItem(e)) >= 0 && n <= 1) return;
        }
        for ((i = this._content.children.length - 1) < 1 && (i = 1), e = 1; e < i; ++e) if ((t -= h.height) <= s.y) {
          if (this._selected = e, this._scrollView.isScrolling()) return;
          if ((n = this.jumpToItem(e)) < 0) return void this.jumpToItem(e - 1);
          if (n <= 1) return;
        }
        if ((t -= this._content.children[0].getComponent(_dependency2.UITransform).height + .5 * this._layout.spacingY + this._layout.paddingBottom) <= s.y) {
          if (this._selected = e, this._scrollView.isScrolling()) return;
          this.jumpToItem(e);
        }
      }
    }
  }, h.scrollEnded = function () {
    this.listener || (this.listener = !0), this.scrolling();
  }, h.touchStart = function () {
    this.listener || (this.listener = !0);
  }, h.touchEndNCancel = function () {
    this._scrollView.isAutoScrolling() || this.scrolling();
  }, h.update_view = function () {
    this._layout.updateLayout(), this.scrolling();
  }, _dependency.createClass(e, [{
    key: "selected",
    get: function () {
      return this._selected;
    }
  }, {
    key: "listener",
    get: function () {
      return this._listener;
    },
    set: function (t) {
      this._listener = t, this._listener ? this.node.on(_dependency2.ScrollView.EventType.SCROLLING, this.scrolling, this) : this.node.off(_dependency2.ScrollView.EventType.SCROLLING, this.scrolling, this);
    }
  }]), e;
}(_dependency2.Component)).prototype, "threshold", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), I = _dependency.applyDecoratedDescriptor(w.prototype, "turningSpeed", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .3;
  }
}), m = w)) || m) || m));
_dependency2.cclegacy._RF.pop();
