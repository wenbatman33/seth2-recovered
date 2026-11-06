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
var n, t, i, o, s, c, r, a;
var u;
_dependency2.cclegacy._RF.push({}, "7d842eSsqpFsbBEOwo3cG4x", "OrientationFitStage", void 0);
var l = _dependency2._decorator.ccclass,
  h = (_dependency2._decorator.property, _dependency2._decorator.menu),
  d = _dependency2._decorator.executeInEditMode;
_publish("default", l(u = d(u = h("自訂工具/直橫版/OrientationFitStage")(u = function (e) {
  var _nativeConstructor = i;
  function i() {
    for (var n, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return (n = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).onResize = n.onResizeEvent.bind(_dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(i, e);
  var o = i.prototype;
  return o.onEnable = function () {
    _dependency2.view.on("design-resolution-changed", this.onResize, this), this.onResize();
  }, o.onDisable = function () {
    _dependency2.view.on("design-resolution-changed", this.onResize, this);
  }, o.update = function (e) {}, o.onResizeEvent = function () {
    var e = this;
    this.scheduleOnce(function () {
      e.scheduleOnce(function () {
        e.syncCanvasSize();
      });
    });
  }, o.syncCanvasSize = function () {
    var e = _dependency2.director.getScene().getChildByName("Canvas");
    this.node.getComponent(_dependency2.UITransform).setContentSize(e.getComponent(_dependency2.UITransform).contentSize);
  }, i;
}(_dependency2.Component)) || u) || u) || u);
_dependency2.cclegacy._RF.pop();
