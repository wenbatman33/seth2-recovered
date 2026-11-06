// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-SingletonExtends";
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
var e, n, s;
_dependency2.cclegacy._RF.push({}, "dbf57v1L3lAxp72/q6V4+wd", "RegisterCommands", void 0);
_publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, t), n.prototype.execute = function () {}, n;
}(_dependency3.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
