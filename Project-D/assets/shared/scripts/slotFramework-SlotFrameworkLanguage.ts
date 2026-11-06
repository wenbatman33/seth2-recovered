// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-LanguageDelegate";
import * as _dependency5 from "./slotFramework-SlotFrameworkLanguages";
var _export;
export { _export as SlotFrameworkLanguage };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotFrameworkLanguage":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, o, r, u;
var i;
_dependency2.cclegacy._RF.push({}, "8afe2BEOHdF2p0xPMUdd0uV", "SlotFrameworkLanguage", void 0);
_publish("SlotFrameworkLanguage", _dependency4.injectLanguageData(i = function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).bundle = _dependency3.EBundles[_dependency3.EBundles.slotFramework], t;
  }
  return _dependency.inheritsLoose(n, e), n.prototype.init = function () {
    this.importLanguages(_dependency5);
  }, n;
}(_dependency4.LanguageDelegate)) || i);
_dependency2.cclegacy._RF.pop();
