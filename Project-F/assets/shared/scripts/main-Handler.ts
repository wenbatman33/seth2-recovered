// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventProcessor";
import * as _dependency4 from "./main-Macros";
var _export;
export { _export as Handler };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Handler":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, o, r, s;
_dependency2.cclegacy._RF.push({}, "5e9ffPDWfxKL7ScegSeKBG6", "Handler", void 0), _publish("Handler", function (e) {
  var _nativeConstructor = o;
  function o() {
    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._module = _dependency4.Macro.UNKNOWN, t;
  }
  _dependency.inheritsLoose(o, e);
  var r = o.prototype;
  return r.onS = function (e, t, n, o) {
    void 0 === o && (o = !0);
    var r = this.service;
    r && r.addListener && r.addListener(e, n, t, o, this);
  }, r.offS = function (e) {
    var t = this.service;
    t && t.removeListeners && t.removeListeners(this, e);
  }, r.onDestroy = function () {
    this.offS(), e.prototype.onDestroy.call(this);
  }, r.debug = function () {
    Log.d(this.module);
  }, r.destory = function () {
    this.onDestroy();
  }, r.init = function () {
    this.onLoad();
  }, _dependency.createClass(o, [{
    key: "module",
    get: function () {
      return this._module;
    },
    set: function (e) {
      this._module = e;
    }
  }]), o;
}(_dependency3.EventProcessor)).module = _dependency4.Macro.UNKNOWN, _dependency2.cclegacy._RF.pop();
