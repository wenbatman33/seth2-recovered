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
var o, i, e, n, s, r, h, a, c, u, l, f, g, _, d, p;
var T, C, v, y, P, S;
_dependency2.cclegacy._RF.push({}, "f24a6nclRRPhLFywmOCMGvi", "DragItem", void 0);
var D = _dependency2._decorator.ccclass,
  m = _dependency2._decorator.property;
_publish("default", (T = m({
  type: _dependency2.Node,
  tooltip: "拖动去的指定区域节点列表"
}), C = m({
  tooltip: "是否吸附到中点心"
}), D((P = _dependency.applyDecoratedDescriptor((y = function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var o, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
    return o = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(o, "targetOfDragList", P, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "isCenter", S, _dependency.assertThisInitialized(o)), o._onDragComp = null, o._oldPos = null, o._target = null, o._touchStartPoint = new _dependency2.Vec2(), o;
  }
  _dependency.inheritsLoose(o, t);
  var h = o.prototype;
  return h.start = function () {
    this._oldPos = this.node.getPosition();
  }, h.onEnable = function () {
    this.node.on(_dependency2.NodeEventType.TOUCH_MOVE, this._onTouchMove, this), this.node.on(_dependency2.NodeEventType.TOUCH_START, this._onTouchStart, this), this.node.on(_dependency2.NodeEventType.TOUCH_END, this._onTouchEnd, this), this.node.on(_dependency2.NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
  }, h.onDisable = function () {
    this.node.off(_dependency2.NodeEventType.TOUCH_MOVE, this._onTouchMove, this), this.node.off(_dependency2.NodeEventType.TOUCH_START, this._onTouchStart, this), this.node.off(_dependency2.NodeEventType.TOUCH_END, this._onTouchEnd, this), this.node.off(_dependency2.NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
  }, h._onTouchStart = function (t) {
    this._touchStartPoint.set(t.getUILocation());
    var o = this._touchStartPoint.x - _dependency2.view.getVisibleSize().width / 2 - this.node.position.x,
      i = this._touchStartPoint.y - _dependency2.view.getVisibleSize().height / 2 - this.node.position.y;
    this._touchStartPoint = new _dependency2.Vec2(o, i);
  }, h._onTouchMove = function (t) {
    var o = new _dependency2.Vec2().set(t.getUILocation()),
      i = o.x - _dependency2.view.getVisibleSize().width / 2 - this._touchStartPoint.x,
      e = o.y - _dependency2.view.getVisibleSize().height / 2 - this._touchStartPoint.y;
    this.node.setPosition(_dependency2.v3(i, e, 0));
  }, h._onTouchCancel = function (t) {
    this.clearTouch(t);
  }, h._onTouchEnd = function (t) {
    this.clearTouch(t);
  }, h.clearTouch = function (t) {
    if (this._touchStartPoint = new _dependency2.Vec2(0, 0), 0 !== this.targetOfDragList.length) {
      for (var o, i = !1, e = _dependency.createForOfIteratorHelperLoose(this.targetOfDragList); !(o = e()).done;) {
        var n = o.value,
          r = this._withinTarget(n, t);
        if (r.isIn) {
          this._target = n, i = !0, r.offsetX, r.offsetY;
          break;
        }
      }
      if (i) {
        if (this.isCenter) {
          var h = this.target.worldPosition,
            a = this.node.parent.getComponent(_dependency2.UITransform).convertToNodeSpaceAR(h);
          this.node.setPosition(a);
        }
        this._onDragComp && this._onDragComp(this.node, this._target);
      } else this._target = null, this.node.setPosition(this._oldPos);
    }
  }, h._withinTarget = function (t, o) {
    var i = t.getComponent(_dependency2.UITransform).getBoundingBox(),
      e = o.getUILocation(),
      n = t.parent.getComponent(_dependency2.UITransform).convertToNodeSpaceAR(_dependency2.v3(e.x, e.y, 0)),
      s = {},
      r = i.contains(_dependency2.v2(n.x, n.y));
    if (s.isIn = r, r) {
      var h = i.x + .5 * i.width,
        a = i.y + .5 * i.height;
      s.offsetX = n.x - h, s.offsetY = n.y - a;
    }
    return s;
  }, h.goBack = function () {
    this._oldPos && this.node.setPosition(this._oldPos);
  }, _dependency.createClass(o, [{
    key: "target",
    get: function () {
      return this._target;
    }
  }, {
    key: "onDragComp",
    set: function (t) {
      this._onDragComp = t;
    }
  }]), o;
}(_dependency2.Component)).prototype, "targetOfDragList", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), S = _dependency.applyDecoratedDescriptor(y.prototype, "isCenter", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), v = y)) || v));
_dependency2.cclegacy._RF.pop();
