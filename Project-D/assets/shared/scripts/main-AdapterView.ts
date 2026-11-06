// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Adapter";
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
var a, t, i, s, r, n, f, o;
var c, u;
_dependency2.cclegacy._RF.push({}, "32b0fpgPcJGb4F0BalFuE1g", "AdapterView", void 0);
var A = _dependency2._decorator.ccclass,
  h = (_dependency2._decorator.property, _dependency2._decorator.executeInEditMode),
  d = _dependency2._decorator.menu;
_publish("default", A(c = h(!0)(c = d("Quick適配元件/AdapterView")(((u = function (e) {
  var _nativeConstructor = i;
  function i() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(i, e), i.prototype.onChangeSize = function () {
    i.safeArea = null, this.node && (this.width = i.safeArea.safeAreaWidth / i.safeArea.designPxToScreenPxRatio, this.height = i.safeArea.safeAreaHeight / i.safeArea.designPxToScreenPxRatio, this.node.setPosition(_dependency2.v3(i.safeArea.safeAreaXOffset / i.safeArea.designPxToScreenPxRatio, i.safeArea.safeAreaYOffset / i.safeArea.designPxToScreenPxRatio)));
  }, i.screenPxToDesignPx = function (e) {
    return e / this.safeArea.designPxToScreenPxRatio;
  }, i.designPxToScreenPx = function (e) {
    return e * this.safeArea.designPxToScreenPxRatio;
  }, _dependency.createClass(i, null, [{
    key: "safeArea",
    get: function () {
      if (null == this._safeArea || null == this._safeArea) {
        var e = _dependency2.screen.windowSize.width,
          a = _dependency2.screen.windowSize.height,
          t = _dependency2.view.getVisibleSize().width,
          i = _dependency2.view.getVisibleSize().height,
          s = Math.min(e / t, a / i),
          r = e - 0 - 0,
          o = a - 0 - 0;
        this._safeArea = {
          screenWidth: e,
          screenHeight: a,
          safeAreaWidth: r,
          safeAreaHeight: o,
          safeAreaMarginTop: 0,
          safeAreaMarginBottom: 0,
          safeAreaMarginLeft: 0,
          safeAreaMarginRight: 0,
          safeAreaXOffset: 0,
          safeAreaYOffset: 0,
          designPxToScreenPxRatio: s
        };
      }
      return this._safeArea;
    },
    set: function (e) {
      this._safeArea = e;
    }
  }]), i;
}(_dependency3.Adapter))._safeArea = null, c = u)) || c) || c) || c);
_dependency2.cclegacy._RF.pop();
