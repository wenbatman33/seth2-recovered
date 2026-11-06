// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
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
var n;
_dependency.cclegacy._RF.push({}, "a6c08V+ZSRPWbgvzyDEx52J", "OnlyEventComponent", void 0);
_publish("default", function () {
  function t() {
    this._events = new Map();
  }
  var n = t.prototype;
  return n.on = function (t, n) {
    this._events.has(t) ? Log.e(t + " 重複註冊") : (App.dispatcher.on(t, n, this), this._events.set(t, n));
  }, n.off = function (t) {
    this._events.has(t) && (App.dispatcher.off(t, this), this._events.delete(t));
  }, n.addEvents = function () {}, n.onLoad = function () {
    this.addEvents();
  }, n.onDestroy = function () {
    var t = this;
    this._events.forEach(function (n, e) {
      App.dispatcher.off(e, t);
    }), this._events.clear();
  }, t;
}());
_dependency.cclegacy._RF.pop();
