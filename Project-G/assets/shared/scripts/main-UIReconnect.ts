// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Loading";
var _export;
export { _export as UIReconnect };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "UIReconnect":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, o;
_dependency2.cclegacy._RF.push({}, "eea64oh+bZBb7iXTe4r2WC1", "UIReconnect", void 0), _publish("UIReconnect", function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var t, n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).module = null, t.isResident = !0, t;
  }
  _dependency.inheritsLoose(n, e);
  var o = n.prototype;
  return o.startTimeOutTimer = function (e) {}, o.stopTimeOutTimer = function () {}, n;
}(_dependency3.default)).module = "【重連提示】", _dependency2.cclegacy._RF.pop();
