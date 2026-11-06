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
var _export5;
export { _export5 as EShockType };
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
    case "EShockType":
      _export5 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o;
var n, i, t, c, E;
_publish({
  BonusStateAction: void 0,
  EBonusType: void 0,
  EGameType: void 0,
  EPool: void 0,
  EShockType: void 0
}), _dependency.cclegacy._RF.push({}, "72878L9jepIDaUiGbJrWshQ", "types", void 0), function (e) {
  e.SYMBOL_POOL = "symbolPool";
}(n || (n = _publish("EPool", {}))), function (e) {
  e.MAIN_GAME = "mainGame", e.FREE_GAME = "freeGame";
}(i || (i = _publish("EGameType", {}))), function (e) {
  e.JP_GAME = "jpGame", e.FORTUNE_LANDING = "fortuneLanding", e.ELIXIR_FURNACE = "elixirFurnace", e.LUCKY_WEALTH = "luckyWealth";
}(t || (t = _publish("EBonusType", {}))), function (e) {
  e.PURIFY = "purify", e.GAMBLE = "gamble", e.COLLECT = "collect", e.FINISH = "finish";
}(c || (c = _publish("BonusStateAction", {}))), function (e) {
  e.GAME_VIEW = "gameView", e.REEL_VIEW = "reelView";
}(E || (E = _publish("EShockType", {}))), _dependency.cclegacy._RF.pop();
