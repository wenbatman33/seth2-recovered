// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-OrientationCanvas";
import * as _dependency4 from "./main-OrientationTool";
var _export;
export { _export as ORIENTATION_TYPE };
var _export2;
export { _export2 as ORIENTATION_EVENT };
var _export3;
export { _export3 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ORIENTATION_TYPE":
      _export = value;
      break;
    case "ORIENTATION_EVENT":
      _export2 = value;
      break;
    case "default":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o, n, i, e, a, r, l, s, c, u, T;
var f, h;
_dependency2.cclegacy._RF.push({}, "b242aJ8WiFHE72hu0zB3W9W", "OrientationToolManager", void 0);
var g = _dependency2._decorator.ccclass,
  O = (_dependency2._decorator.property, _dependency2._decorator.executeInEditMode),
  E = _publish("ORIENTATION_TYPE", {
    NONE: 0,
    HORIZONTAL: 1,
    VERTICAL: 2
  });
_publish("ORIENTATION_EVENT", {
  RESIZE: "ORIENTATION_EVENT_RESIZE",
  WIDGET_RESIZE: "ORIENTATION_EVENT_WIDGET_RESIZE"
}), _publish("default", g(f = O(((h = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var o, n = arguments.length, i = new Array(n), e = 0; e < n; e++) i[e] = arguments[e];
    return (o = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).orientationToolList = {}, o;
  }
  _dependency.inheritsLoose(i, t);
  var e = i.prototype;
  return e.onLoad = function () {
    this.getAllTools();
  }, e.start = function () {}, e.onEnable = function () {
    _dependency2.director.on("OrientationToVertical", this.toVerticall, this), _dependency2.director.on("OrientationToHorizontal", this.toHorizontal, this);
  }, e.onDisable = function () {
    _dependency2.director.off("OrientationToVertical", this.toVerticall, this), _dependency2.director.off("OrientationToHorizontal", this.toHorizontal, this);
  }, e.update = function () {}, e.addToList = function (t) {
    this.orientationToolList[t.uuid] = t;
  }, e.removeFormList = function (t) {
    delete this.orientationToolList[t.uuid];
  }, i.getInstance = function () {
    if (_dependency2.director.getScene()) {
      var t = _dependency2.find("OrientationToolManager");
      if (null == t) {
        var o = _dependency2.director.getScene().getChildByName("Canvas");
        if (null == o) return;
        (t = new _dependency2.Node("OrientationToolManager")).setParent(o.parent), t.addComponent(i);
      }
      return t.getComponent(i);
    }
  }, e.toVerticall = function () {
    for (var t in this.orientationToolList) this.orientationToolList.hasOwnProperty(t) && _dependency2.isValid(this.orientationToolList[t]) && this.orientationToolList[t].toVerticall();
  }, e.toHorizontal = function () {
    for (var t in this.orientationToolList) this.orientationToolList.hasOwnProperty(t) && _dependency2.isValid(this.orientationToolList[t]) && this.orientationToolList[t].toHorizontal();
  }, e.getAllTools = function () {
    for (var t = _dependency2.director.getScene().getChildByName("Canvas").parent.getComponentsInChildren(_dependency4.default), o = 0; o < t.length; o++) t[o].isStaticNode = !0, this.orientationToolList[t[o].uuid] = t[o];
  }, e.canvasToVerticall = function () {
    var t = _dependency2.director.getScene().getChildByName("Canvas").getComponent(_dependency3.default);
    i.orientationState = E.VERTICAL, t.setCanvasSize();
  }, e.canvasToHorizontal = function () {
    var t = _dependency2.director.getScene().getChildByName("Canvas").getComponent(_dependency3.default);
    i.orientationState = E.HORIZONTAL, t.setCanvasSize();
  }, _dependency.createClass(i, null, [{
    key: "lockingOrientation",
    get: function () {
      return i._lockingOrientation;
    },
    set: function (t) {
      i._lockingOrientation = t, t || (i.orientationState === E.HORIZONTAL ? i.getInstance().toHorizontal() : i.orientationState === E.VERTICAL && i.getInstance().toVerticall());
    }
  }]), i;
}(_dependency2.Component)).orientationState = E.NONE, h._lockingOrientation = !1, f = h)) || f) || f);
_dependency2.cclegacy._RF.pop();
