// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as ENotifyExtraInfoTypes };
var _export2;
export { _export2 as ENotifyTypes };
var _export3;
export { _export3 as ENotifyWinTypes };
var _export4;
export { _export4 as __runtimeStub };
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
    case "__runtimeStub":
      _export4 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n;
var l, i, t;
_publish({
  ENotifyExtraInfoTypes: void 0,
  ENotifyTypes: void 0,
  ENotifyWinTypes: void 0
}), _dependency.cclegacy._RF.push({}, "bf54bt5vtFAsZAGNYWDPO+O", "res-type", void 0), function (e) {
  e.BALANCE = "balance", e.JACKPOT_UPDATE = "jackpotUpdate", e.SYSTEM = "system", e.BIG_WIN = "bigWin", e.SUPER_WIN = "superWin", e.MEGA_WIN = "megaWin", e.ULTRA_WIN = "ultraWin", e.LEGENDARY_WIN = "legendaryWin", e.JP_MINI = "jp-mini", e.JP_MINOR = "jp-minor", e.JP_MAJOR = "jp-major", e.JP_GRAND = "jp-grand";
}(l || (l = _publish("ENotifyTypes", {}))), function (e) {
  e.BIG_WIN = "bigWin", e.SUPER_WIN = "superWin", e.MEGA_WIN = "megaWin", e.ULTRA_WIN = "ultraWin", e.LEGENDARY_WIN = "legendaryWin", e.JP_MINI = "jp-mini", e.JP_MINOR = "jp-minor", e.JP_MAJOR = "jp-major", e.JP_GRAND = "jp-grand", e.NO_WIN_REWARD = "noWinReward";
}(i || (i = _publish("ENotifyWinTypes", {}))), function (e) {
  e.ELIXIR_FURNACE = "elixirFurnace", e.LUCKY_WEALTH = "luckyWealth", e.FORTUNE_LANDING = "fortuneLanding", e.LUCKY_WEALTH_2 = "luckyWealth2";
}(t || (t = _publish("ENotifyExtraInfoTypes", {})));
_publish("__runtimeStub", {
  IInitialRes: null,
  INewInitialRes: null,
  ISpinRes: null,
  IPlatformSpin: null,
  INewSpinRes: null,
  ICloseSpinRes: null,
  IResBase: null,
  IBetRecordsRes: null,
  IHistoryRecordRes: null,
  HistoryRecordItem: null,
  IRankingRes: null,
  ISlotTablesRes: null,
  IUpdateSlotTableRes: null,
  ILockSlotTableRes: null,
  IUpdateAvatarRes: null,
  IUpdateDisplayNameRes: null,
  ENotifyTypes: {},
  ENotifyWinTypes: {},
  ENotifyExtraInfoTypes: {},
  INotifyJackpotUpdate: null,
  INotifyRes: null,
  ISlotTablesUpdatedRes: null
});
_dependency.cclegacy._RF.pop();
