// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Handler";
var _export;
export { _export as GameHandlerBase };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameHandlerBase":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, a;
_dependency2.cclegacy._RF.push({}, "a2568b8i0JMv5ca8wauYMiN", "GameHandlerBase", void 0);
_publish("GameHandlerBase", function (e) {
  var _nativeConstructor = t;
  function t() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(t, e);
  var a = t.prototype;
  return a.onLoad = function () {
    e.prototype.onLoad.call(this), this.addListeners();
  }, a.addListeners = function () {}, t;
}(_dependency3.Handler));
_dependency2.cclegacy._RF.pop();
