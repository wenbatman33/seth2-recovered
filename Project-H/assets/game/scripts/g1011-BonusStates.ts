// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "../../shared/scripts/main-Config";
import * as _dependency3 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-SocketModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency9 from "./g1011-HeavenlyTreasuresView";
import * as _dependency0 from "./g1011-JackpotGameView";
import * as _dependency1 from "./g1011-LuckyWealthView";
import * as _dependency10 from "./g1011-GameEvent";
import * as _dependency11 from "./g1011-GameSender";
import * as _dependency12 from "./g1011-types";
import * as _dependency13 from "./g1011-StateFactory";
import * as _dependency14 from "./g1011-StateId";
var _export;
export { _export as createBonusStates };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "createBonusStates":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, a, i, o, E, u, _, s, r, d, c, A, S, f, p, T;
_publish("createBonusStates", function (t) {
  return [_dependency13.defineState({
    id: _dependency14.StateId.DROP_TREASURE_INTRO,
    onEntry: function () {
      App.uiManager.open({
        type: _dependency9.HeavenlyTreasuresView,
        bundle: t.data.module,
        zIndex: _dependency2.ViewZOrder.UI,
        name: "天降奇寶"
      }), dispatch(_dependency4.SlotFrameworkEvent.HIDE_REPLAY_INFO_BAR);
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency10.GameEvent.HEAVENLY_TREASURES_RESULT_END) return _dependency14.StateId.DROP_TREASURE_CLOSE;
    }
  }), _dependency13.defineState({
    id: _dependency14.StateId.DROP_TREASURE_CLOSE,
    onEntry: function () {
      if (_dependency6.default.isReplay) dispatch(_dependency10.GameEvent.REPLAY_GAME_END);else {
        dispatch(_dependency4.SlotFrameworkEvent.STOP_AUTO_SPIN);
        var n = {
          bonusType: _dependency12.EBonusType.FORTUNE_LANDING,
          action: _dependency12.BonusStateAction.FINISH,
          ratioIndex: _dependency3.default.ratioIndex,
          ratioValue: _dependency3.default.ratioValue,
          stakeIndex: _dependency3.default.stakeIndex,
          stakeValue: _dependency3.default.stakeValue,
          spinId: t.data.getData().spinId,
          token: _dependency7.default.currentToken,
          clientType: "web"
        };
        App.senderManager.get(_dependency11.GameSender).sendFortuneLandingFinishReq(n);
      }
    },
    transitionTo: function (t) {
      if (t.event.name == _dependency10.GameEvent.REPLAY_GAME_END) return _dependency14.StateId.MG_WAIT_REPLAY;
    }
  }), _dependency13.defineState({
    id: _dependency14.StateId.LUCKY_WEALTH_INTRO,
    onEntry: function (n) {
      var a = {
        win: n.sharedData.getData().bonusState.prize
      };
      App.uiManager.open({
        type: _dependency1.default,
        bundle: t.data.module,
        zIndex: _dependency2.ViewZOrder.UI,
        name: "神秘遊戲",
        args: a
      });
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency10.GameEvent.LUCKY_WEALTH_END) return _dependency14.StateId.LUCKY_WEALTH_CLOSE;
    }
  }), _dependency13.defineState({
    id: _dependency14.StateId.LUCKY_WEALTH_CLOSE,
    onEntry: function () {
      _dependency6.default.isReplay ? dispatch(_dependency10.GameEvent.REPLAY_GAME_END) : (dispatch(_dependency4.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency4.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
        data: t.data.getData().spinId
      }));
    },
    transitionTo: function (t) {
      var n = t.event;
      return n.name === _dependency10.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency4.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency5.default.amount
        }
      }), _dependency14.StateId.MG_WAIT_SPIN) : n.name == _dependency10.GameEvent.REPLAY_GAME_END ? _dependency14.StateId.MG_WAIT_REPLAY : void 0;
    }
  }), _dependency13.defineState({
    id: _dependency14.StateId.JP_GAME_INTRO,
    onEntry: function () {
      App.uiManager.open({
        type: _dependency0.JackpotGameView,
        bundle: t.data.module,
        zIndex: _dependency2.ViewZOrder.UI,
        name: "JP遊戲"
      });
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency10.GameEvent.JACKPOT_GAME_PICK_END) return _dependency14.StateId.JP_GAME_CLOSE;
    }
  }), _dependency13.defineState({
    id: _dependency14.StateId.JP_GAME_CLOSE,
    onEntry: function () {
      if (_dependency6.default.isReplay) return App.uiManager.close(_dependency8.default), void dispatch(_dependency10.GameEvent.REPLAY_GAME_END);
      dispatch(_dependency4.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency4.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
        data: t.data.getData().spinId
      });
    },
    transitionTo: function (t) {
      var n = t.event;
      return n.name === _dependency10.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency4.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency5.default.amount
        }
      }), _dependency14.StateId.MG_WAIT_SPIN) : n.name == _dependency10.GameEvent.REPLAY_GAME_END ? _dependency14.StateId.MG_WAIT_REPLAY : void 0;
    }
  })];
}), _dependency.cclegacy._RF.push({}, "f16d1KXmvlE3p8Iz3LVvKag", "BonusStates", void 0), _dependency.cclegacy._RF.pop();
