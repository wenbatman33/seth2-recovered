// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-OrientationToolManager";
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
var n, i, e, o, a, r, s, l, c, g, h, u, T, O, v, R;
var d;
_dependency2.cclegacy._RF.push({}, "8cf72h3f2JJHLQwAWa9DhBz", "OrientationCanvas", void 0);
var f = _dependency2._decorator.ccclass,
  I = (_dependency2._decorator.property, _dependency2._decorator.menu);
_publish("default", f(d = I("自訂工具/直橫版/OrientationCanvas")(d = function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).orientationToolManager = null, n.isChanging = !1, n.onResize = n.canvasResize.bind(_dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(o, t);
  var a = o.prototype;
  return a.onLoad = function () {
    this.orientationToolManager = _dependency3.default.getInstance();
  }, a.start = function () {
    this.orientationToolManager && this.initOrientation(), window.addEventListener("resize", this.onResize);
  }, a.onDestroy = function () {
    _dependency3.default.orientationState = _dependency3.ORIENTATION_TYPE.NONE, window.removeEventListener("resize", this.onResize);
  }, a.initOrientation = function () {
    for (var t in _dependency2.sys.isMobile ? 180 === this.orientationAngle || 0 === this.orientationAngle ? _dependency3.default.orientationState = _dependency3.ORIENTATION_TYPE.VERTICAL : _dependency3.default.orientationState = _dependency3.ORIENTATION_TYPE.HORIZONTAL : window.innerWidth >= window.innerHeight ? _dependency3.default.orientationState = _dependency3.ORIENTATION_TYPE.HORIZONTAL : _dependency3.default.orientationState = _dependency3.ORIENTATION_TYPE.VERTICAL, this.setCanvasSize(), this.orientationToolManager.orientationToolList) _dependency3.default.orientationState === _dependency3.ORIENTATION_TYPE.HORIZONTAL ? this.orientationToolManager.orientationToolList[t].toHorizontal() : this.orientationToolManager.orientationToolList[t].toVerticall();
  }, a.setCanvasSize = function () {
    var t = _dependency2.director.getScene().getChildByName("Canvas"),
      n = t.getComponent(_dependency2.UITransform).contentSize,
      i = n.width,
      e = n.height,
      o = n.x,
      a = n.y;
    if (_dependency3.default.orientationState === _dependency3.ORIENTATION_TYPE.HORIZONTAL) {
      if (_dependency2.view.setOrientation(_dependency2.macro.ORIENTATION_LANDSCAPE), i < e) {
        var r = [e, i];
        i = r[0], e = r[1];
        var u = [a, o];
        o = u[0], a = u[1];
      }
    } else if (_dependency2.view.setOrientation(_dependency2.macro.ORIENTATION_PORTRAIT), e < i) {
      var T = [e, i];
      i = T[0], e = T[1];
      var R = [a, o];
      o = R[0], a = R[1];
    }
    t.getComponent(_dependency2.UITransform).setContentSize(i, e), t.setPosition(o, a);
    var d = _dependency3.default.orientationState === _dependency3.ORIENTATION_TYPE.HORIZONTAL ? 1280 : 720,
      f = _dependency3.default.orientationState === _dependency3.ORIENTATION_TYPE.HORIZONTAL ? 720 : 1280;
    _dependency2.view.setDesignResolutionSize(d, f, _dependency2.ResolutionPolicy.SHOW_ALL);
    var I = _dependency2.view.getDesignResolutionSize().height > _dependency2.view.getDesignResolutionSize().width,
      S = _dependency2.view.getDesignResolutionSize().width > _dependency2.view.getDesignResolutionSize().height,
      L = null;
    I && S ? L = _dependency2.ResolutionPolicy.SHOW_ALL : I && !S ? L = _dependency2.ResolutionPolicy.FIXED_WIDTH : !I && S && (L = _dependency2.ResolutionPolicy.FIXED_HEIGHT), _dependency2.view.setResolutionPolicy(L), this.isChanging = !1;
  }, a.canvasResize = function () {
    var t = this;
    this.scheduleOnce(function () {
      if (_dependency2.sys.isMobile) {
        if (t.isChanging || _dependency3.default.lockingOrientation) return;
        for (var n in t.isChanging = !0, t.switchCanvas(), t.orientationToolManager.orientationToolList) t.orientationToolManager.orientationToolList[n].canvasResize();
        _dependency2.director.emit(_dependency3.ORIENTATION_EVENT.RESIZE);
      }
      _dependency2.director.emit(_dependency3.ORIENTATION_EVENT.WIDGET_RESIZE), t.node.getComponentsInChildren(_dependency2.Widget).forEach(function (t) {
        t.enabled && t.updateAlignment();
      });
    });
  }, a.switchCanvas = function () {
    window.innerWidth >= window.innerHeight ? _dependency3.default.orientationState = _dependency3.ORIENTATION_TYPE.HORIZONTAL : _dependency3.default.orientationState = _dependency3.ORIENTATION_TYPE.VERTICAL, this.setCanvasSize();
  }, _dependency.createClass(o, [{
    key: "orientationAngle",
    get: function () {
      var t, n;
      return (null == (t = screen) || null == (n = t.orientation) ? void 0 : n.angle) || window.orientation;
    }
  }]), o;
}(_dependency2.Component)) || d) || d);
_dependency2.cclegacy._RF.pop();
