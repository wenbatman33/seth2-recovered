// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as BonusStateAction };
var _export2;
export { _export2 as EBonusType };
var _export3;
export { _export3 as EGameType };
var _export4;
export { _export4 as EPool };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BonusStateAction":
      _export = value;
      break;
    case "EBonusType":
      _export2 = value;
      break;
    case "EGameType":
      _export3 = value;
      break;
    case "EPool":
      _export4 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o;
var t, n, i, c;
_publish({
  BonusStateAction: void 0,
  EBonusType: void 0,
  EGameType: void 0,
  EPool: void 0
}), _dependency.cclegacy._RF.push({}, "72878L9jepIDaUiGbJrWshQ", "types", void 0), function (e) {
  e.SYMBOL_POOL = "symbolPool";
}(t || (t = _publish("EPool", {}))), function (e) {
  e.MAIN_GAME = "mainGame", e.FREE_GAME = "freeGame";
}(n || (n = _publish("EGameType", {}))), function (e) {
  e.JP_GAME = "jpGame", e.FORTUNE_LANDING = "fortuneLanding", e.LUCKY_WEALTH = "luckyWealth";
}(i || (i = _publish("EBonusType", {}))), function (e) {
  e.PURIFY = "purify", e.GAMBLE = "gamble", e.COLLECT = "collect", e.FINISH = "finish";
}(c || (c = _publish("BonusStateAction", {}))), _dependency.cclegacy._RF.pop();
