// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-LanguageDelegate";
import * as _dependency4 from "./g1008-GameData";
import * as _dependency5 from "./g1008-GameLanguages";
var _export;
export { _export as GameLanguage };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameLanguage":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, u, i, o;
var r;
_dependency2.cclegacy._RF.push({}, "b756e7aJ7hCZYLrs6k0Yx7z", "GameLanguage", void 0);
_publish("GameLanguage", _dependency3.injectLanguageData(r = function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var t, n = arguments.length, a = new Array(n), u = 0; u < n; u++) a[u] = arguments[u];
    return (t = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this).bundle = _dependency4.default.module, t;
  }
  return _dependency.inheritsLoose(n, e), n.prototype.init = function () {
    this.importLanguages(_dependency5);
  }, n;
}(_dependency3.LanguageDelegate)) || r);
_dependency2.cclegacy._RF.pop();
