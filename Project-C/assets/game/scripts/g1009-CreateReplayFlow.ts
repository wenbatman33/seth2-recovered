// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-type2";
import * as _dependency8 from "./g1009-GameConfigModel";
import * as _dependency9 from "./g1009-GameData";
import * as _dependency0 from "./g1009-GameEvent";
import * as _dependency1 from "./g1009-types";
import * as _dependency10 from "./g1009-FlowIDs";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, o, l, i, s, u, E, r, d, _, S, T;
_dependency2.cclegacy._RF.push({}, "9805dLZ1RFE74QEx9PF0q30", "CreateReplayFlow", void 0);
_publish("default", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, e);
  var l = a.prototype;
  return l.execute = function () {
    var e = this.createFlow();
    App.flowManager.registerFlow(e);
  }, l.createFlow = function () {
    var e = new App.flowManager.Flow(_dependency10.FlowIDs.REPLAY_RESUME_FLOW);
    return dispatch(_dependency6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency7.ESpinStatus.SPINING
    }), dispatch(_dependency0.GameEvent.UPDATE_GAME_TYPE, {
      data: this.data.currentGameType
    }), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t,
      n = this.data.getData().gameState,
      a = n.winSymbols,
      l = n.totalWinnings,
      i = n.timesSymbols,
      u = n.timesUpgrade,
      d = void 0 === u ? [] : u,
      T = n.action,
      w = n.roundWinnings,
      c = n.femaleTotemLevel,
      p = void 0 === c ? 0 : c,
      A = n.maleTotemLevel,
      m = void 0 === A ? 0 : A,
      R = null == (t = this.data.preData.gameState) ? void 0 : t.winSymbols.length,
      O = T == _dependency1.EActionType.FREE_GAME,
      g = T == _dependency1.EActionType.SUPER_GAME;
    dispatch(_dependency0.GameEvent.CHANGE_GAME_STYLE, {
      data: !O
    });
    var I = O ? w : l;
    0 == O && (I = g ? w : l);
    var F = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      f = R && !a.length && i.length,
      N = O ? w : l,
      C = this.data.setBigWinReach(N),
      M = _dependency8.default.getData(),
      P = M.winAmountTime,
      h = M.showTimesMoveDelay,
      L = .5;
    (p > 0 || m > 0) && (L = 0), e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent("REPLAY_DELAY", null, {
      delay: .5,
      autoComplete: !0
    })), a && a.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: F
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency8.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: I
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: l,
      tweenTime: P
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SYMBOLS_WIN), new _dependency0.GameEvent(_dependency0.GameEvent.REMOVE_SYMBOLS, null, {
      delay: L
    })), p > 0 && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_WOMEN_LOCK_ANIM, p)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_LOCK, {}))), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), d && d.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), f && (C ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: h
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: h
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency8.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: l,
      needComplete: !0,
      tweenTime: P
    }))), e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
