// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-res-type";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-GameServiceBase";
import * as _dependency7 from "../../shared/scripts/slotFramework-PlatformModel";
var _export;
export { _export as GameService };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameService":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, n, c, s, i, o;
_dependency2.cclegacy._RF.push({}, "e4208+AntFGKpVAgzLDPA+h", "GameService", void 0), _publish("GameService", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(a, e), a.prototype.addSocketListeners = function () {
    this.on("echo", function (e) {}), this.on("warning", function (e) {
      dispatch(_dependency5.SlotFrameworkEvent.WARN_RESPONSE, e);
    }), this.on("error", function (e) {
      dispatch(_dependency5.SlotFrameworkEvent.ERROR_RESPONSE, e);
    }), this.on("notify", function (e) {
      switch (e.type) {
        case _dependency3.ENotifyTypes.BALANCE:
          var t = e;
          _dependency7.default.updateBalance(t.balance, t.updatedAt), dispatch(_dependency5.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
            data: {
              balance: _dependency7.default.amount
            }
          });
          break;
        case _dependency3.ENotifyTypes.JACKPOT_UPDATE:
          dispatch(_dependency5.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, {
            data: e
          });
          break;
        case _dependency3.ENotifyTypes.SYSTEM:
          dispatch(_dependency5.SlotFrameworkEvent.NOTIFY_SYSTEM_RESPONSE, {
            data: e
          });
          break;
        case _dependency3.ENotifyTypes.JACKPOT_UPDATE:
        case _dependency3.ENotifyTypes.BIG_WIN:
        case _dependency3.ENotifyTypes.SUPER_WIN:
        case _dependency3.ENotifyTypes.MEGA_WIN:
        case _dependency3.ENotifyTypes.ULTRA_WIN:
        case _dependency3.ENotifyTypes.LEGENDARY_WIN:
        case _dependency3.ENotifyTypes.JP_MINI:
        case _dependency3.ENotifyTypes.JP_MINOR:
        case _dependency3.ENotifyTypes.JP_MAJOR:
        case _dependency3.ENotifyTypes.JP_GRAND:
          dispatch(_dependency5.SlotFrameworkEvent.NOTIFY_PRIZE_RESPONSE, {
            data: e
          });
      }
    }), this.on("slotTableUpdated", function (e) {
      dispatch(_dependency5.SlotFrameworkEvent.SLOT_TABLES_UPDATED_RESPONSE, e);
    });
  }, a;
}(_dependency6.GameServiceBase)).module = _dependency4.EBundles[_dependency4.EBundles.g1002], _dependency2.cclegacy._RF.pop();
