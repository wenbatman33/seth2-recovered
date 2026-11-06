// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
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
var i, e, n, s, o, u, a, c, h, r, l;
_dependency2.cclegacy._RF.push({}, "12c4eqKidlCLJ2tu1NcSFWA", "UILoading", void 0), _publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.node = null, this.delay = 0, this.content = null, this.text = null, this._uiName = null, this._contentOpacity = null, this._timerId = -1;
  }
  var e = t.prototype;
  return e.show = function (t, i) {
    this.delay = null == t || null == t || t < 0 ? _dependency3.Config.LOAD_VIEW_DELAY : t, this._uiName = i || "", this._show();
  }, e._show = function () {
    var t;
    this.node || (this.node = _dependency2.instantiate(this.prefab)), this.node.removeFromParent(), App.uiManager.addView(this.node, _dependency3.ViewZOrder.UILoading), this.node.position = _dependency2.Vec3.ZERO, this.content = _dependency2.find("content", this.node), _dependency2.Tween.stopAllByTarget(this.contentOpacity), this.text = null == (t = _dependency2.find("text", this.content)) ? void 0 : t.getComponent(_dependency2.Label), this.text.string = "0%", this.contentOpacity.opacity = 0, this.delay > 0 && _dependency2.tween(this.contentOpacity).bindNodeState(false).delay(this.delay).set({
      opacity: 255
    }).start(), this.startTimeOutTimer(_dependency3.Config.LOAD_VIEW_TIME_OUT), this.node.active = !0;
  }, e.startTimeOutTimer = function (t) {
    var i = this;
    this.stopTimeOutTimer(), t && (this._timerId = setTimeout(function () {
      App.tips.show("加载界面" + (i._uiName ? i._uiName : "") + "超时，请重试"), i.hide();
    }, 1e3 * t));
  }, e.stopTimeOutTimer = function () {
    clearTimeout(this._timerId), this._timerId = -1;
  }, e.hide = function () {
    this.stopTimeOutTimer(), this.node && (_dependency2.Tween.stopAllByTarget(this.content), this.node.active = !1);
  }, e.updateProgress = function (t) {
    if (this.text) {
      if (null == t || null == t || Number.isNaN(t)) return void this.hide();
      t >= 0 && t <= 100 && (this.text.string = t + "%");
    }
  }, _dependency.createClass(t, [{
    key: "prefab",
    get: function () {
      return App.uiManager.getScenePrefab("UILoading");
    }
  }, {
    key: "contentOpacity",
    get: function () {
      return this._contentOpacity ? this._contentOpacity : this.content.getComponent(_dependency2.UIOpacity);
    }
  }]), t;
}()).module = "【UILoading】", _dependency2.cclegacy._RF.pop();
