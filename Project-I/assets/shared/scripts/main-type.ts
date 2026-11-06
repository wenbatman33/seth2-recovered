// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EBtnStatus };
var _export2;
export { _export2 as EDebugLogLevel };
var _export3;
export { _export3 as ELocalStorageKey };
var _export4;
export { _export4 as ESocketRequestName };
var _export5;
export { _export5 as ESpinStatus };
var _export6;
export { _export6 as ETableStatus };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBtnStatus":
      _export = value;
      break;
    case "EDebugLogLevel":
      _export2 = value;
      break;
    case "ELocalStorageKey":
      _export3 = value;
      break;
    case "ESocketRequestName":
      _export4 = value;
      break;
    case "ESpinStatus":
      _export5 = value;
      break;
    case "ETableStatus":
      _export6 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t;
var E, S, o, a, T, n;
_publish({
  EBtnStatus: void 0,
  EDebugLogLevel: void 0,
  ELocalStorageKey: void 0,
  ESocketRequestName: void 0,
  ESpinStatus: void 0,
  ETableStatus: void 0
}), _dependency.cclegacy._RF.push({}, "ae65bIGW31PW4/KjN579+hd", "type", void 0), function (e) {
  e.NORMAL = "normal", e.PRESSED = "pressed", e.HOVER = "hover", e.DISABLED = "disabled";
}(E || (E = _publish("EBtnStatus", {}))), function (e) {
  e.IDLE = "idle", e.SPINING = "spining";
}(S || (S = _publish("ESpinStatus", {}))), function (e) {
  e.INITIAL = "initial", e.SPIN = "spin", e.CLOSE_SPIN = "closeSpin", e.UPDATE_SETTINGS = "updateSettings", e.GET_BET_RECORDS = "getBetRecords", e.GET_SLOT_TABLES = "getSlotTables", e.GET_SLOT_TABLE_DETAIL = "getSlotTableDetail", e.UPDATE_SLOT_TABLE = "updateSlotTable", e.LOCK_SLOT_TABLE = "lockSlotTable", e.BUY_FEATURE = "buyFeature", e.UPDATE_AVATAR = "updateAvatar", e.UPDATE_DISPLAYNAME = "updateDisplayName", e.GET_USER_REPORT = "getUserReport", e.REPLAY = "replay", e.EXTENSION = "extension", e.GET_SLOT_BET_RANKS_LIST = "slotBetranks", e.GET_SLOT_BET_RANKS_REPLAY = "slotBetranks";
}(o || (o = _publish("ESocketRequestName", {}))), function (e) {
  e.EMPTY = "Empty", e.FULL = "Full", e.LOCKED = "Locked", e.CLOSE = "Close";
}(a || (a = _publish("ETableStatus", {}))), function (e) {
  e.DEBUG = "debug", e.WARN = "warn", e.ERROR = "error", e.INFO = "info";
}(T || (T = _publish("EDebugLogLevel", {}))), n || (n = _publish("ELocalStorageKey", {})), _dependency.cclegacy._RF.pop();
