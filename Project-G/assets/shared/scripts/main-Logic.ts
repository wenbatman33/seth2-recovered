// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventProcessor";
import * as _dependency4 from "./main-Macros";
var _export;
export { _export as Logic };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Logic":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, o, n, i, s, c;
_dependency2.cclegacy._RF.push({}, "4b9a0iaVZFD/KeijOJgJv2B", "Logic", void 0), _publish("Logic", function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var e, o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).module = _dependency4.Macro.UNKNOWN, e.gameView = null, e;
  }
  _dependency.inheritsLoose(n, t);
  var s = n.prototype;
  return s.reset = function (t) {}, s.onLoad = function (e) {
    this.gameView = e, t.prototype.onLoad.call(this, e);
  }, s.update = function (t) {}, s.destory = function () {
    this.onDestroy();
  }, s.debug = function () {
    Log.d(this.module + " : " + _dependency2.js.getClassName(this));
  }, _dependency.createClass(n, [{
    key: "bundle",
    get: function () {
      return this.module;
    }
  }]), n;
}(_dependency3.EventProcessor)).module = _dependency4.Macro.UNKNOWN, _dependency2.cclegacy._RF.pop();
