// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-LanguageDelegate";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./main-WrapperLanguages";
var _export;
export { _export as WrapperLanguage };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WrapperLanguage":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, a, r, u, i;
var s;
_dependency2.cclegacy._RF.push({}, "145c16Ty1VF5psCT5CUSYwT", "WrapperLanguage", void 0);
_publish("WrapperLanguage", _dependency3.injectLanguageData(s = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var n, t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
    return (n = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this).bundle = _dependency4.EBundles[_dependency4.EBundles.wrapper], n;
  }
  return _dependency.inheritsLoose(t, e), t.prototype.init = function () {
    this.importLanguages(_dependency5);
  }, t;
}(_dependency3.LanguageDelegate)) || s);
_dependency2.cclegacy._RF.pop();
