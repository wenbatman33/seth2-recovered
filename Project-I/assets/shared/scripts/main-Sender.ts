// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventProcessor";
import * as _dependency4 from "./main-Macros";
import * as _dependency5 from "./main-Message";
var _export;
export { _export as Sender };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Sender":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, s, n, i, o;
_dependency2.cclegacy._RF.push({}, "88af3+km/JPIL5D0tRyJFj+", "Sender", void 0), _publish("Sender", function (e) {
  var _nativeConstructor = s;
  function s() {
    for (var t, s = arguments.length, n = new Array(s), i = 0; i < s; i++) n[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).module = "", t;
  }
  _dependency.inheritsLoose(s, e);
  var n = s.prototype;
  return n.send = function (e, t, s) {
    e instanceof _dependency5.Message ? this.service && this.service.send && this.service.send(e) : this.service.send(e, t, s);
  }, n.sendWithoutCheck = function (e, t, s) {
    e instanceof _dependency5.Message ? this.service && this.service.sendWithoutCheck && this.service.sendWithoutCheck(e) : this.service.sendWithoutCheck(e, t, s);
  }, n.debug = function () {
    Log.d(this.module);
  }, n.destory = function () {
    this.onDestroy();
  }, n.init = function () {
    this.onLoad();
  }, s;
}(_dependency3.EventProcessor)).module = _dependency4.Macro.UNKNOWN, _dependency2.cclegacy._RF.pop();
