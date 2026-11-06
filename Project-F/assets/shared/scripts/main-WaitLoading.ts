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
var e, i, n, o, a;
_dependency2.cclegacy._RF.push({}, "4318dP9CP9JZbUPX3+mNgLm", "WaitLoading", void 0), _publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.node = null, this.intervalId = -1;
  }
  var i = t.prototype;
  return i.show = function () {
    var t = this;
    return this._show(), this.intervalId = setInterval(function () {
      null != App.gameLoading && null != App.gameLoading.node && App.gameLoading.node.active && (App.waitLoading.hide(), clearInterval(t.intervalId));
    }, .3), this;
  }, i._show = function () {
    this.prefab && (this.node || (this.node = _dependency2.instantiate(this.prefab)), this.node.removeFromParent(), App.uiManager.addView(this.node, _dependency3.ViewZOrder.WaitLoading), this.node.position = _dependency2.Vec3.ZERO, this.node.active = !0);
  }, i.hide = function () {
    this.node && (this.node.active = !1);
  }, i.isActive = function () {
    return !!this.node && this.node.active;
  }, _dependency.createClass(t, [{
    key: "prefab",
    get: function () {
      return App.uiManager.getScenePrefab("WaitLoading");
    }
  }]), t;
}()).module = "【WaitLoading】", _dependency2.cclegacy._RF.pop();
