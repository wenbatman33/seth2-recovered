// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/types.js
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EBonusStateAction };
var __export_1;
export { __export_1 as EBonusType };
var __export_2;
export { __export_2 as EFeature };
var __export_3;
export { __export_3 as EGameType };
var __export_4;
export { __export_4 as EJackpotType };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBonusStateAction":
      __export_0 = value;
      break;
    case "EBonusType":
      __export_1 = value;
      break;
    case "EFeature":
      __export_2 = value;
      break;
    case "EGameType":
      __export_3 = value;
      break;
    case "EJackpotType":
      __export_4 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t;
var n, o, E, a, c;
__publish({
  EBonusStateAction: void 0,
  EBonusType: void 0,
  EFeature: void 0,
  EGameType: void 0,
  EJackpotType: void 0
}), __dependency_0.cclegacy._RF.push({}, "386817doQ1NAaYfSFZOAr1j", "types", void 0), function (e) {
  e.MAIN_GAME = "mainGame", e.FREE_GAME = "freeGame";
}(n || (n = __publish("EGameType", {}))), function (e) {
  e.LUCK_OR_BAD_LUCK = "luckOrBadLuck", e.SUPER_FREE_GAME = "superFreeGame", e.FREE_GAME = "freeGame", e.THE_WRATH_OF_HADES = "theWrathOfHades", e.THE_POWER_OF_HADES = "thePowerOfHades";
}(o || (o = __publish("EFeature", {}))), function (e) {
  e.JP_GAME = "jpGame", e.NO_WIN_REWARD = "noWinReward";
}(E || (E = __publish("EBonusType", {}))), function (e) {
  e.MINI = "jp-mini", e.MINOR = "jp-minor", e.MAJOR = "jp-major", e.GRAND = "jp-grand";
}(a || (a = __publish("EJackpotType", {}))), function (e) {
  e.COLLECT = "collect";
}(c || (c = __publish("EBonusStateAction", {}))), __dependency_0.cclegacy._RF.pop();
