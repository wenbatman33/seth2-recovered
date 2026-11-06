// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SingletonT";
var _export;
export { _export as SenderManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SenderManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, r;
_dependency2.cclegacy._RF.push({}, "99dfadiQCtCWbS1VuSqD4iM", "SenderManager", void 0), _publish("SenderManager", function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var n, t = arguments.length, r = new Array(t), u = 0; u < t; u++) r[u] = arguments[u];
    return (n = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).module = null, n;
  }
  return _dependency.inheritsLoose(t, e), t;
}(_dependency3.SingletonT)).module = "【Sender管理器】", _dependency2.cclegacy._RF.pop();
