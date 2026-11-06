// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SingletonT";
var _export;
export { _export as DataCenter };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DataCenter":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, r;
_dependency2.cclegacy._RF.push({}, "39dddWDYJJE9aqb6DTOKM/X", "DataCenter", void 0), _publish("DataCenter", function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var n, e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
    return (n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).module = null, n;
  }
  return _dependency.inheritsLoose(e, t), e;
}(_dependency3.SingletonT)).module = "【資料中心】", _dependency2.cclegacy._RF.pop();
