// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameHandler.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-Bundles";
import * as __dependency_3 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_4 from "../../shared/scripts/framework-GameHandlerBase";
import * as __dependency_5 from "./g1007-GameSender";
import * as __dependency_6 from "./g1007-GameService";
var __export_0;
export { __export_0 as GameHandler };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameHandler":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, a, r, o, s, i, E;
__dependency_1.cclegacy._RF.push({}, "a4eedtwoF1LOazfDQd9Hf2y", "GameHandler", void 0), __publish("GameHandler", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || this.constructor) || this;
  }
  return __dependency_0.inheritsLoose(a, e), a.prototype.addListeners = function () {
    this.on(__dependency_3.SlotFrameworkEvent.SEND_SPIN_REQUEST, function (e) {
      var n = null == e ? void 0 : e.data,
        t = n.spinId,
        a = n.stakeVO,
        r = n.updateStake,
        o = n.isXtraBetOn,
        s = n.spinData;
      App.senderManager.get(__dependency_5.GameSender).spin(a, o, t, r, s);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_CLOSE_REQUEST, function (e) {
      var n = e.data;
      App.senderManager.get(__dependency_5.GameSender).closeSpin(n);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_UPDATE_AVATAR_REQUEST, function (e) {
      var n = e.avatarId;
      App.senderManager.get(__dependency_5.GameSender).updateAvatar(n);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).getSlotTablePage(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_DETAIL_REQUEST, function (e) {
      var n = e.roomId;
      App.senderManager.get(__dependency_5.GameSender).getSlotTableDetail({
        roomId: n
      });
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_CHANGE_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).changeSlotTable(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_LOCK_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).lockSlotTable(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_SETTING_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).setting(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_BET_RECORDS_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).getBetRecords(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_UPDATE_DISPLAYNAME_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).updateDisplayName(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_HISTORY_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).getHistoryRecords(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_RANKING_LIST_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).getSlotBetRanksList(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_RANKING_REPLAY_REQUEST, function (e) {
      App.senderManager.get(__dependency_5.GameSender).getSlotBetRanksReplay(e);
    });
  }, __dependency_0.createClass(a, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(__dependency_6.GameService);
    }
  }]), a;
}(__dependency_4.GameHandlerBase)).module = __dependency_2.EBundles[__dependency_2.EBundles.g1007], __dependency_1.cclegacy._RF.pop();
