// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-LanguageZH";
import * as _dependency4 from "./main-LanguageEN";
import * as _dependency5 from "./main-LanguageCN";
import * as _dependency6 from "./main-LanguageVN";
import * as _dependency7 from "./main-Macros";
import * as _dependency8 from "./main-LanguageDelegate";
import * as _dependency9 from "./main-Bundles";
import * as _dependency0 from "./main-LanguageTH";
import * as _dependency1 from "./main-LanguageTR";
var _export;
export { _export as CommonLanguage };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CommonLanguage":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a, e, t, u, s, g, d, o, i, c, l, r;
_dependency2.cclegacy._RF.push({}, "495989qswZParhGpu1PcGUI", "CommonLanguage", void 0);
_publish("CommonLanguage", function (n) {
  var _nativeConstructor = t;
  function t() {
    for (var a, e = arguments.length, t = new Array(e), u = 0; u < e; u++) t[u] = arguments[u];
    return (a = Reflect.construct(n, [this].concat(t).slice(1), new.target || _nativeConstructor) || this).bundle = _dependency7.Macro.BUNDLE_RESOURCES, a;
  }
  _dependency.inheritsLoose(t, n);
  var i = t.prototype;
  return i.init = function () {
    this.mergeBundles(), this.add(_dependency4.LanguageEN), this.add(_dependency3.LanguageZH), this.add(_dependency5.LanguageCN), this.add(_dependency6.LanguageVN), this.add(_dependency0.LanguageTH), this.add(_dependency1.LanguageTR);
  }, i.mergeBundles = function () {
    _dependency4.LanguageEN.data.bundles = _dependency.extends({}, _dependency9.Bundles.bundles), _dependency3.LanguageZH.data.bundles = _dependency.extends({}, _dependency9.Bundles.bundles), _dependency5.LanguageCN.data.bundles = _dependency.extends({}, _dependency9.Bundles.bundles), _dependency6.LanguageVN.data.bundles = _dependency.extends({}, _dependency9.Bundles.bundles), _dependency0.LanguageTH.data.bundles = _dependency.extends({}, _dependency9.Bundles.bundles), _dependency1.LanguageTR.data.bundles = _dependency.extends({}, _dependency9.Bundles.bundles);
  }, t;
}(_dependency8.LanguageDelegate));
_dependency2.cclegacy._RF.pop();
