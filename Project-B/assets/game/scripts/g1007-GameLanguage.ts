// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameLanguage.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-LanguageDelegate";
import * as __dependency_3 from "./g1007-GameData";
import * as __dependency_4 from "./g1007-GameLanguages";
var __export_0;
export { __export_0 as GameLanguage };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameLanguage":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, u, i, o;
var c;
__dependency_1.cclegacy._RF.push({}, "e9f886jaXNCqq/Z5GeE2zQ7", "GameLanguage", void 0);
__publish("GameLanguage", __dependency_2.injectLanguageData(c = function (e) {
  function n() {
    for (var t, n = arguments.length, a = new Array(n), u = 0; u < n; u++) a[u] = arguments[u];
    return (t = Reflect.construct(e, [this].concat(a).slice(1), new.target || this.constructor) || this).bundle = __dependency_3.default.module, t;
  }
  return __dependency_0.inheritsLoose(n, e), n.prototype.init = function () {
    this.importLanguages(o);
  }, n;
}(__dependency_2.LanguageDelegate)) || c);
__dependency_1.cclegacy._RF.pop();
