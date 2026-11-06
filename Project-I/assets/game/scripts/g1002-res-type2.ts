// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as ENotifyExtraInfoTypes };
var _export2;
export { _export2 as ENotifyTypes };
var _export3;
export { _export3 as ENotifyWinTypes };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ENotifyExtraInfoTypes":
      _export = value;
      break;
    case "ENotifyTypes":
      _export2 = value;
      break;
    case "ENotifyWinTypes":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n;
var e, t, N;
_publish({
  ENotifyExtraInfoTypes: void 0,
  ENotifyTypes: void 0,
  ENotifyWinTypes: void 0
}), _dependency.cclegacy._RF.push({}, "e86f8T0FANOM5J3MHlxIY8j", "res-type", void 0), function (i) {
  i.JACKPOT_UPDATE = "jackpotUpdate", i.SYSTEM = "system", i.BIG_WIN = "bigWin", i.SUPER_WIN = "superWin", i.MEGA_WIN = "megaWin", i.ULTRA_WIN = "ultraWin", i.LEGENDARY_WIN = "legendaryWin", i.JP_MINI = "jp-mini", i.JP_MINOR = "jp-minor", i.JP_MAJOR = "jp-major", i.JP_GRAND = "jp-grand";
}(e || (e = _publish("ENotifyTypes", {}))), function (i) {
  i.ELIXIR_FURNACE = "elixirFurnace", i.LUCKY_WEALTH = "luckyWealth", i.FORTUNE_LANDING = "fortuneLanding", i.LUCKY_WEALTH_2 = "luckyWealth2";
}(t || (t = _publish("ENotifyExtraInfoTypes", {}))), function (i) {
  i.BIG_WIN = "bigWin", i.SUPER_WIN = "superWin", i.MEGA_WIN = "megaWin", i.ULTRA_WIN = "ultraWin", i.LEGENDARY_WIN = "legendaryWin", i.JP_MINI = "jp-mini", i.JP_MINOR = "jp-minor", i.JP_MAJOR = "jp-major", i.JP_GRAND = "jp-grand", i.NO_WIN_REWARD = "noWinReward";
}(N || (N = _publish("ENotifyWinTypes", {}))), _dependency.cclegacy._RF.pop();
