// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "../../shared/scripts/slotFramework-GameHandlerBase";
import * as _dependency6 from "./g1008-GameData";
import * as _dependency7 from "./g1008-GameEvent";
import * as _dependency8 from "./g1008-GameSender";
import * as _dependency9 from "./g1008-GameService";
import * as _dependency0 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency1 from "../../shared/scripts/main-Bundles";
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
var t, n, a, s, r, o, E, i, _, S, d, l, u, c;
_dependency2.cclegacy._RF.push({}, "6f980AvXJZN977uMlLv1Td9", "GameHandler", void 0), _publish("GameHandler", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(a, e), a.prototype.addListeners = function () {
    var e = this;
    this.on(_dependency4.SlotFrameworkEvent.SEND_SPIN_REQUEST, function (e) {
      var t = null == e ? void 0 : e.data,
        n = t.spinId,
        a = t.stakeVO,
        s = t.cheat,
        r = t.updateStake;
      App.senderManager.get(_dependency8.GameSender).spin(a, n, s, r);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_EARLY_SPIN_REQUEST, function (t) {
      var n = null == t ? void 0 : t.data,
        a = n.spinId,
        o = n.stakeVO,
        E = n.forceClose;
      _dependency3.default.active && e.data.isOpenEarlyFlag && (Log.w("SEND_OUT_EARLY_SPIN_REQUEST::::::::"), e.data.earlyData = null, e.data.delayEarlyTween = _dependency2.tween(e).bindNodeState(false).delay(.4).call(function () {
        e.data.isSendOutEarlyFlag = !0, e.data.isSendClose = !0, App.senderManager.get(_dependency8.GameSender).earlySpin(o, a, !1, E);
      }).start());
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_CLOSE_REQUEST, function (t) {
      var n = t.data;
      e.data.isSendClose = !0, 1 != _dependency0.default.getData().isInstantClose ? App.senderManager.get(_dependency8.GameSender).closeSpin(n) : dispatch(_dependency4.SlotFrameworkEvent.CLOSE_RESPONSE);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_EARLY_CLOSE_REQUEST, function (e) {
      var t = e.data.spinId;
      App.senderManager.get(_dependency8.GameSender).earlyCloseSpin(t, e.complete);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_UPDATE_AVATAR_REQUEST, function (e) {
      var t = e.avatarId;
      App.senderManager.get(_dependency8.GameSender).updateAvatar(t);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getSlotTablePage(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_DETAIL_REQUEST, function (e) {
      var t = e.roomId;
      App.senderManager.get(_dependency8.GameSender).getSlotTableDetail({
        roomId: t
      });
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_CHANGE_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).changeSlotTable(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_LOCK_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).lockSlotTable(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_SETTING_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).setting(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_BET_RECORDS_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getBetRecords(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_UPDATE_DISPLAYNAME_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).updateDisplayName(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_HISTORY_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getHistoryRecords(e);
    }), this.on(_dependency7.GameEvent.FG_UPDATE_SETTING_FOR_PLAY_LOG, function (e) {
      App.senderManager.get(_dependency8.GameSender).setting(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_RANKING_LIST_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getSlotBetRanksList(e);
    }), this.on(_dependency4.SlotFrameworkEvent.SEND_GET_RANKING_REPLAY_REQUEST, function (e) {
      App.senderManager.get(_dependency8.GameSender).getSlotBetRanksReplay(e);
    }), this.on(_dependency4.SlotFrameworkEvent.REPLAY_BACK_TO_GAME, function () {
      e.data.restoreCurrentGameData(), dispatch(_dependency7.GameEvent.RESET_AND_OPEN_GAME_VIEW, {
        data: _dependency6.EInitName.INIT_GAME
      });
    });
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }, {
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency9.GameService);
    }
  }]), a;
}(_dependency5.GameHandlerBase)).module = _dependency1.EBundles[_dependency1.EBundles.g1008], _dependency2.cclegacy._RF.pop();
