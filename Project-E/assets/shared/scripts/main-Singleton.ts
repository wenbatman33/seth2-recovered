// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SingletonT";
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
var t, e, i, c;
_dependency2.cclegacy._RF.push({}, "6524eDwP+pOxIVce9Jvkz7a", "Singleton", void 0), _publish("default", function (n) {
  var _nativeConstructor = i;
  function i() {
    for (var t, e = arguments.length, i = new Array(e), c = 0; c < e; c++) i[c] = arguments[c];
    return (t = Reflect.construct(n, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).module = "【單列管理器】", t;
  }
  return _dependency.inheritsLoose(i, n), _dependency.createClass(i, null, [{
    key: "instance",
    get: function () {
      return this._instance || (this._instance = new i());
    }
  }]), i;
}(_dependency3.SingletonT))._instance = null, _dependency2.cclegacy._RF.pop();
