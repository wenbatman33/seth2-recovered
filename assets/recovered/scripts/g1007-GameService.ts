// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameService.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-res-type";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./framework-GameServiceBase";
import * as __dependency_6 from "./framework-PlatformModel";
var __export_0;
export { __export_0 as GameService };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameService":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, n, c, s, i, o;
__dependency_1.cclegacy._RF.push({}, "fadb6TsgPdDyYe5QNyS1mdD", "GameService", void 0), __publish("GameService", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || this.constructor) || this;
  }
  return __dependency_0.inheritsLoose(a, e), a.prototype.addSocketListeners = function () {
    this.on("echo", function (e) {}), this.on("warning", function (e) {
      dispatch(__dependency_4.SlotFrameworkEvent.WARN_RESPONSE, e);
    }), this.on("error", function (e) {
      dispatch(__dependency_4.SlotFrameworkEvent.ERROR_RESPONSE, e);
    }), this.on("notify", function (e) {
      switch (e.type) {
        case __dependency_2.ENotifyTypes.BALANCE:
          var t = e;
          __dependency_6.default.updateBalance(t.balance, t.updatedAt), dispatch(__dependency_4.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
            data: {
              balance: __dependency_6.default.amount
            }
          });
          break;
        case __dependency_2.ENotifyTypes.JACKPOT_UPDATE:
          dispatch(__dependency_4.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, {
            data: e
          });
          break;
        case __dependency_2.ENotifyTypes.SYSTEM:
          dispatch(__dependency_4.SlotFrameworkEvent.NOTIFY_SYSTEM_RESPONSE, {
            data: e
          });
          break;
        case __dependency_2.ENotifyTypes.JACKPOT_UPDATE:
        case __dependency_2.ENotifyTypes.BIG_WIN:
        case __dependency_2.ENotifyTypes.SUPER_WIN:
        case __dependency_2.ENotifyTypes.MEGA_WIN:
        case __dependency_2.ENotifyTypes.ULTRA_WIN:
        case __dependency_2.ENotifyTypes.LEGENDARY_WIN:
        case __dependency_2.ENotifyTypes.JP_MINI:
        case __dependency_2.ENotifyTypes.JP_MINOR:
        case __dependency_2.ENotifyTypes.JP_MAJOR:
        case __dependency_2.ENotifyTypes.JP_GRAND:
          dispatch(__dependency_4.SlotFrameworkEvent.NOTIFY_PRIZE_RESPONSE, {
            data: e
          });
      }
    }), this.on("slotTableUpdated", function (e) {
      dispatch(__dependency_4.SlotFrameworkEvent.SLOT_TABLES_UPDATED_RESPONSE, e);
    });
  }, a;
}(__dependency_5.GameServiceBase)).module = __dependency_3.EBundles[__dependency_3.EBundles.g1007], __dependency_1.cclegacy._RF.pop();
