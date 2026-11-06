// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-res-type";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-GameServiceBase";
import * as _dependency7 from "./g1009-GameData";
import * as _dependency8 from "../../shared/scripts/slotFramework-PlatformModel";
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
var e, a, n, s, c, o, i, r, u;
_dependency2.cclegacy._RF.push({}, "46b28pe9U9I5ZdY9xfVIQ+3", "GameService", void 0), _publish("GameService", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, t), n.prototype.addSocketListeners = function () {
    var t = this;
    this.on("echo", function (t) {}), this.on("warning", function (t) {
      dispatch(_dependency5.SlotFrameworkEvent.WARN_RESPONSE, t);
    }), this.on("error", function (t) {
      dispatch(_dependency5.SlotFrameworkEvent.ERROR_RESPONSE, t);
    }), this.on("notify", function (e) {
      switch (e.type) {
        case _dependency3.ENotifyTypes.BALANCE:
          var a = e;
          _dependency8.default.updateBalance(a.balance, a.updatedAt), dispatch(_dependency5.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
            data: {
              balance: _dependency8.default.amount
            }
          });
          break;
        case _dependency3.ENotifyTypes.JACKPOT_UPDATE:
          t.slotData.tempJpPools = {
            "jp-mini": e.data["jp-mini"],
            "jp-minor": e.data["jp-minor"],
            "jp-major": e.data["jp-major"],
            "jp-grand": e.data["jp-grand"]
          }, dispatch(_dependency5.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, {
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
    }), this.on("slotTableUpdated", function (t) {
      dispatch(_dependency5.SlotFrameworkEvent.SLOT_TABLES_UPDATED_RESPONSE, t);
    });
  }, _dependency.createClass(n, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), n;
}(_dependency6.GameServiceBase)).module = App.dataCenter.get(_dependency7.default).module, _dependency2.cclegacy._RF.pop();
