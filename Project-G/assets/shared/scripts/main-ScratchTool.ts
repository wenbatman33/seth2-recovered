// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as ScratchTool };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ScratchTool":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, o, e, n, r, s, c, h, a, p, l, u;
var g, T, _, d, v;
_dependency2.cclegacy._RF.push({}, "fbee07bdSVLB5P+gsWN1pmX", "ScratchTool", void 0);
var f = _dependency2._decorator.ccclass,
  y = _dependency2._decorator.property;
_publish("ScratchTool", (g = f("ScratchTool"), T = y({
  tooltip: "刮痕的寬度"
}), g((v = _dependency.applyDecoratedDescriptor((d = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var i, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
    return (i = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this)._graphics = null, _dependency.initializerDefineProperty(i, "lineWidth", v, _dependency.assertThisInitialized(i)), i;
  }
  _dependency.inheritsLoose(i, t);
  var r = i.prototype;
  return r.onLoad = function () {
    this._graphics = this.getComponent(_dependency2.Graphics), null == this._graphics && (this._graphics = this.node.addComponent(_dependency2.Graphics)), this.node.getComponent(_dependency2.Mask).type = _dependency2.Mask.Type.GRAPHICS_STENCIL, this._graphics.lineWidth = this.lineWidth, this._graphics.lineJoin = _dependency2.Graphics.LineJoin.ROUND, this._graphics.lineCap = _dependency2.Graphics.LineCap.ROUND, this._graphics.stroke(), this.node.on(_dependency2.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(_dependency2.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
  }, r.onTouchStart = function (t) {
    var i = t.getUILocation(),
      o = this.convertToLocal(i);
    this._graphics.moveTo(o.x, o.y);
  }, r.onTouchMove = function (t) {
    var i = t.getUILocation(),
      o = this.convertToLocal(i);
    this._graphics.lineWidth = this.lineWidth, this._graphics.lineJoin = _dependency2.Graphics.LineJoin.ROUND, this._graphics.lineCap = _dependency2.Graphics.LineCap.ROUND, this._graphics.lineTo(o.x, o.y), this._graphics.stroke();
  }, r.convertToLocal = function (t) {
    return this.getComponent(_dependency2.UITransform).convertToNodeSpaceAR(new _dependency2.Vec3(t.x, t.y, 0));
  }, r.resetScratch = function () {
    this._graphics.clear(), this._graphics.stroke();
  }, i;
}(_dependency2.Component)).prototype, "lineWidth", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 60;
  }
}), _ = d)) || _));
_dependency2.cclegacy._RF.pop();
