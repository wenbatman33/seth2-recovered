// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventProcessor";
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
var o, t, e;
_dependency2.cclegacy._RF.push({}, "24e04JAXKRMNLoiugTF7LV6", "CommandManager", void 0), _publish("default", function (n) {
  var _nativeConstructor = t;
  function t() {
    for (var o, t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
    return (o = Reflect.construct(n, [this].concat(e).slice(1), new.target || _nativeConstructor) || this).module = null, o.commandMap = new Map(), o;
  }
  _dependency.inheritsLoose(t, n);
  var e = t.prototype;
  return e.addCommand = function (n, o) {
    this.commandMap.has(n) || (this.on(n, function (n) {
      o.execute(n);
    }), this.commandMap.set(n, o));
  }, e.removeCommand = function (n) {
    this.off(n), this.commandMap.delete(n);
  }, e.debug = function () {
    Log.d("-------command命令資訊-------"), this.commandMap.forEach(function (n, o) {
      Log.d(o);
    });
  }, t;
}(_dependency3.EventProcessor)).module = "【command 命令管理】", _dependency2.cclegacy._RF.pop();
