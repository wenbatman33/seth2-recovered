// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-GameServiceBase";
import * as _dependency7 from "../../shared/scripts/main-res-type";
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
var t, e, n, o, s, i, r, c, p;
_dependency2.cclegacy._RF.push({}, "57d2frLwPRAOpoHMUA1m/vl", "GameService", void 0), _publish("GameService", function (a) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(a, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, a), n.prototype.addSocketListeners = function () {
    var a = this;
    this.on("echo", function (a) {}), this.on("warning", function (a) {
      a.zip && 1 == a.zip && (a.data ? a = JSON.parse(pako.inflate(a.data, {
        to: "string"
      })) : Log.e("no response data::::::::::::::::", a)), dispatch(_dependency5.SlotFrameworkEvent.WARN_RESPONSE, a);
    }), this.on("error", function (a) {
      a.zip && 1 == a.zip && (a.data ? a = JSON.parse(pako.inflate(a.data, {
        to: "string"
      })) : Log.e("no response data::::::::::::::::", a)), dispatch(_dependency5.SlotFrameworkEvent.ERROR_RESPONSE, a);
    }), this.on("notify", function (t) {
      switch (t.zip && 1 == t.zip && (t.data ? t = JSON.parse(pako.inflate(t.data, {
        to: "string"
      })) : Log.e("no response data::::::::::::::::", t)), t.type) {
        case _dependency7.ENotifyTypes.BALANCE:
          var e = t;
          _dependency8.default.updateBalance(e.balance, e.updatedAt), dispatch(_dependency5.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
            data: {
              balance: _dependency8.default.amount
            }
          });
          break;
        case _dependency7.ENotifyTypes.JACKPOT_UPDATE:
          a.slotData.tempJpPools = {
            "jp-mini": t.data["jp-mini"],
            "jp-minor": t.data["jp-minor"],
            "jp-major": t.data["jp-major"],
            "jp-grand": t.data["jp-grand"]
          }, dispatch(_dependency5.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, {
            data: t
          });
          break;
        case _dependency7.ENotifyTypes.SYSTEM:
          dispatch(_dependency5.SlotFrameworkEvent.NOTIFY_SYSTEM_RESPONSE, {
            data: t
          });
          break;
        case _dependency7.ENotifyTypes.JACKPOT_UPDATE:
        case _dependency7.ENotifyTypes.BIG_WIN:
        case _dependency7.ENotifyTypes.SUPER_WIN:
        case _dependency7.ENotifyTypes.MEGA_WIN:
        case _dependency7.ENotifyTypes.ULTRA_WIN:
        case _dependency7.ENotifyTypes.LEGENDARY_WIN:
        case _dependency7.ENotifyTypes.JP_MINI:
        case _dependency7.ENotifyTypes.JP_MINOR:
        case _dependency7.ENotifyTypes.JP_MAJOR:
        case _dependency7.ENotifyTypes.JP_GRAND:
          dispatch(_dependency5.SlotFrameworkEvent.NOTIFY_PRIZE_RESPONSE, {
            data: t
          });
      }
    }), this.on("slotTableUpdated", function (a) {
      a.zip && 1 == a.zip && (a.data ? a = JSON.parse(pako.inflate(a.data, {
        to: "string"
      })) : Log.e("no response data::::::::::::::::", a)), dispatch(_dependency5.SlotFrameworkEvent.SLOT_TABLES_UPDATED_RESPONSE, a);
    });
  }, _dependency.createClass(n, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), n;
}(_dependency6.GameServiceBase)).module = _dependency3.EBundles[_dependency3.EBundles.g1008], _dependency2.cclegacy._RF.pop();
