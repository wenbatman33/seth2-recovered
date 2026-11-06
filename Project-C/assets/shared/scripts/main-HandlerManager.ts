// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SingletonT";
var _export;
export { _export as HandlerManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HandlerManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t, r;
_dependency2.cclegacy._RF.push({}, "11e9a84A9hCHpeO57mkvw5P", "HandlerManager", void 0), _publish("HandlerManager", function (n) {
  var _nativeConstructor = t;
  function t() {
    for (var e, t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
    return (e = Reflect.construct(n, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).module = null, e;
  }
  return _dependency.inheritsLoose(t, n), t;
}(_dependency3.SingletonT)).module = "【Handler管理器】", _dependency2.cclegacy._RF.pop();
