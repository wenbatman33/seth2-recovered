// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "../../shared/scripts/slotFramework-GameHandlerBase";
import * as _dependency6 from "./g1004-GameSender";
import * as _dependency7 from "./g1004-GameService";
var _export;
export { _export as GameHandler };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameHandler":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, a, r, o, s, E, i;
_dependency2.cclegacy._RF.push({}, "afa66ZBSBRH1JEETnzfM4OU", "GameHandler", void 0), _publish("GameHandler", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(a, e), a.prototype.addListeners = function () {
    this.on(_dependency4.SlotFrameworkEvent.SEND_SPIN_REQUEST, function (e) {
      var n = null == e ? void 0 : e.data,
        t = n.spinId,
        a = n.stakeVO,
        r = n.updateStake,
        o = n.spinData;
      App.senderManager.get(_dependency6.GameSender).spin(a, t, r, o);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_CLOSE_REQUEST, function (e) {
      var n = e.data;
      App.senderManager.get(_dependency6.GameSender).closeSpin(n);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_UPDATE_AVATAR_REQUEST, function (e) {
      var n = e.avatarId;
      App.senderManager.get(_dependency6.GameSender).updateAvatar(n);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_SLOT_TABLES_DATA_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).getSlotTables(0);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).getSlotTablePage(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_DETAIL_REQUEST, function (e) {
      var n = e.roomId;
      App.senderManager.get(_dependency6.GameSender).getSlotTableDetail({
        roomId: n
      });
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_CHANGE_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).changeSlotTable(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_LOCK_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).lockSlotTable(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_SETTING_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).setting(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_BET_RECORDS_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).getBetRecords(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_UPDATE_DISPLAYNAME_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).updateDisplayName(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_HISTORY_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).getHistoryRecords(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_RANKING_LIST_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).getSlotBetRanksList(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_RANKING_REPLAY_REQUEST, function (e) {
      App.senderManager.get(_dependency6.GameSender).getSlotBetRanksReplay(e);
    });
  }, _dependency.createClass(a, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency7.GameService);
    }
  }]), a;
}(_dependency5.GameHandlerBase)).module = _dependency3.EBundles[_dependency3.EBundles.g1004], _dependency2.cclegacy._RF.pop();
