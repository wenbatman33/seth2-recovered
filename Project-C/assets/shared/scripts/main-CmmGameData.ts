// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-Macros";
var _export;
export { _export as CmmGameData };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CmmGameData":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, u;
_dependency2.cclegacy._RF.push({}, "d55efPk0fFLs4iHgadE7nfW", "CmmGameData", void 0), _publish("CmmGameData", function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var n, e = arguments.length, o = new Array(e), u = 0; u < e; u++) o[u] = arguments[u];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).module = "", n;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.init = function () {}, o.destory = function () {}, o.clear = function () {}, o.debug = function () {
    Log.d("" + this.module);
  }, e;
}(_dependency3.default)).module = _dependency4.Macro.UNKNOWN, _dependency2.cclegacy._RF.pop();
