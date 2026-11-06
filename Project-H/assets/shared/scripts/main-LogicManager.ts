// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SingletonT";
var _export;
export { _export as LogicManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LogicManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o;
_dependency2.cclegacy._RF.push({}, "ed32aE8EBlBeKkWhJ7/xI6h", "LogicManager", void 0), _publish("LogicManager", function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).module = null, e;
  }
  return _dependency.inheritsLoose(n, t), n.prototype.get = function (e, n) {
    return void 0 === n && (n = !1), t.prototype.get.call(this, e, n);
  }, n;
}(_dependency3.SingletonT)).module = "【邏輯管理器】", _dependency2.cclegacy._RF.pop();
