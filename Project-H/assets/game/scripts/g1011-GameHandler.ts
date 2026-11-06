// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-GameHandlerBase";
import * as _dependency7 from "./g1011-GameData";
import * as _dependency8 from "./g1011-GameSender";
import * as _dependency9 from "./g1011-GameService";
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
var t, n, a, r, o, s, i, E, S, u;
_dependency2.cclegacy._RF.push({}, "afa66ZBSBRH1JEETnzfM4OU", "GameHandler", void 0), _publish("GameHandler", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(a, e), a.prototype.addListeners = function () {
    var e = this;
    this.on(_dependency5.SlotFrameworkEvent.SEND_SPIN_REQUEST, function (e) {
      var t = null == e ? void 0 : e.data,
        n = t.spinId,
        a = t.stakeVO,
        r = t.updateStake,
        o = t.spinData;
      App.senderManager.get(_dependency8.GameSender).spin(a, n, r, o);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_EXTENSION_REQUEST, function () {
      var t = e.data.getData().spinId,
        n = {
          ratioIndex: _dependency4.default.ratioIndex,
          ratioValue: _dependency4.default.ratioValue,
          stakeIndex: _dependency4.default.stakeIndex,
          stakeValue: _dependency4.default.stakeValue
        };
      App.senderManager.get(_dependency8.GameSender).extension(n, t);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_CLOSE_REQUEST, function (e) {
      var t = e.data;
      App.senderManager.get(_dependency8.GameSender).closeSpin(t);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_UPDATE_AVATAR_REQUEST, function (e) {
      var t = e.avatarId;
      App.senderManager.get(_dependency8.GameSender).updateAvatar(t);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getSlotTablePage(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_DETAIL_REQUEST, function (e) {
      var t = e.roomId;
      App.senderManager.get(_dependency8.GameSender).getSlotTableDetail({
        roomId: t
      });
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_CHANGE_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).changeSlotTable(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_LOCK_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).lockSlotTable(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_SETTING_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).setting(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_GET_BET_RECORDS_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getBetRecords(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_UPDATE_DISPLAYNAME_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).updateDisplayName(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_GET_HISTORY_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getHistoryRecords(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_GET_RANKING_LIST_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getSlotBetRanksList(e);
    }), this.on(_dependency5.SlotFrameworkEvent.SEND_GET_RANKING_REPLAY_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getSlotBetRanksReplay(e);
    });
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }, {
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency9.GameService);
    }
  }]), a;
}(_dependency6.GameHandlerBase)).module = _dependency3.EBundles[_dependency3.EBundles.g1011], _dependency2.cclegacy._RF.pop();
