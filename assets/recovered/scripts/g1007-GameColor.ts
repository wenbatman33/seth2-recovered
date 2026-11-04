// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameColor.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-ColorProxy";
import * as __dependency_3 from "./g1007-GameData";
import * as __dependency_4 from "./g1007-GameColors";
var __export_0;
export { __export_0 as GameColor };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameColor":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r, e, i, l;
var u;
__dependency_1.cclegacy._RF.push({}, "09537xaYblMx6qSLLNvm2ao", "GameColor", void 0);
__publish("GameColor", __dependency_2.injectColorData(u = function (o) {
  function n() {
    for (var t, n = arguments.length, r = new Array(n), e = 0; e < n; e++) r[e] = arguments[e];
    return (t = Reflect.construct(o, [this].concat(r).slice(1), new.target || this.constructor) || this).bundle = __dependency_3.default.module, t;
  }
  return __dependency_0.inheritsLoose(n, o), n.prototype.init = function () {
    this.importColors(l);
  }, n;
}(__dependency_2.ColorProxy)) || u);
__dependency_1.cclegacy._RF.pop();
