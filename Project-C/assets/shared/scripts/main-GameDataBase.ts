// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
import * as _dependency4 from "./main-CmmGameData";
var _export;
export { _export as GameDataBase };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameDataBase":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a, n, e, o;
_dependency2.cclegacy._RF.push({}, "59e54Kr71xFKJqo32ioELaM", "GameDataBase", void 0), _publish("GameDataBase", function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var a, n = arguments.length, e = new Array(n), o = 0; o < n; o++) e[o] = arguments[o];
    return (a = Reflect.construct(t, [this].concat(e).slice(1), new.target || _nativeConstructor) || this).module = "", a.data = void 0, a;
  }
  _dependency.inheritsLoose(n, t);
  var e = n.prototype;
  return e.setData = function (t) {
    this.data = t;
  }, e.getData = function () {
    return this.data;
  }, e.init = function () {
    this.addEvents();
  }, e.onDestory = function () {}, e.clear = function () {}, e.debug = function () {
    Log.d("" + this.module);
  }, n;
}(_dependency4.CmmGameData)).module = _dependency3.Macro.UNKNOWN, _dependency2.cclegacy._RF.pop();
