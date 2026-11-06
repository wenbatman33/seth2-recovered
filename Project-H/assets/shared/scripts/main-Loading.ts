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
var e, n, i, o, s, h, r, u, c, d;
_dependency2.cclegacy._RF.push({}, "2db47kDx9lIeLy2MbGZbrmp", "Loading", void 0), _publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.node = null, this._timeOutCb = void 0, this._content = [], this._showContentIndex = 0, this._timerId = -1, this.text = null;
  }
  var n = t.prototype;
  return n.show = function (t, e, n) {
    return void 0 === n && (n = _dependency3.Config.LOADING_TIME_OUT), this._timeOutCb = e, Array.isArray(t) ? this._content = t : (this._content = [], this._content.push(t)), this._show(n), this;
  }, n._show = function (t) {
    var e;
    this.prefab && (this.node || (this.node = _dependency2.instantiate(this.prefab)), this.node.removeFromParent(), App.uiManager.addView(this.node, _dependency3.ViewZOrder.Loading), this.node.position = _dependency2.Vec3.ZERO, this.text = null == (e = _dependency2.find("content/text", this.node)) ? void 0 : e.getComponent(_dependency2.Label), this._showContentIndex = 0, this.startShowContent(), this.startTimeOutTimer(t), this.node.active = !0);
  }, n.startShowContent = function () {
    var t = this;
    1 == this._content.length ? this.text.string = this._content[0] : (this.stopShowContent(), _dependency2.tween(this.text.node).bindNodeState(false).call(function () {
      t.text.string = t._content[t._showContentIndex];
    }).delay(_dependency3.Config.LOADING_CONTENT_CHANGE_INTERVAL).call(function () {
      t._showContentIndex++, t._showContentIndex >= t._content.length && (t._showContentIndex = 0), t.startShowContent();
    }).start());
  }, n.stopShowContent = function () {
    this.text && _dependency2.Tween.stopAllByTarget(this.text.node);
  }, n.startTimeOutTimer = function (t) {
    var e = this;
    t > 0 && (this._timerId = setTimeout(function () {
      e._timeOutCb && e._timeOutCb(), e.hide();
    }, 1e3 * t));
  }, n.stopTimeOutTimer = function () {
    this._timeOutCb = void 0, clearTimeout(this._timerId), this._timerId = -1;
  }, n.hide = function () {
    this.stopShowContent(), this.stopTimeOutTimer(), this.node && (this.node.active = !1);
  }, _dependency.createClass(t, [{
    key: "prefab",
    get: function () {
      return App.uiManager.getScenePrefab("Loading");
    }
  }, {
    key: "timeOutCb",
    get: function () {
      return this._timeOutCb;
    },
    set: function (t) {
      this._timeOutCb = t;
    }
  }]), t;
}()).module = "【Loading】", _dependency2.cclegacy._RF.pop();
