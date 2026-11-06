// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1009-GameConfigModel";
import * as _dependency7 from "./g1009-GameData";
import * as _dependency8 from "./g1009-GameEvent";
import * as _dependency9 from "./g1009-types";
import * as _dependency0 from "./g1009-FlowIDs";
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
var t, n, a, o, l, i, S, _, u, s, E, d;
_dependency2.cclegacy._RF.push({}, "56e07hhX4RJ5bzs0r+E/8sP", "CreateReplayQuickStopFlowCmd", void 0);
_publish("default", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, e);
  var l = a.prototype;
  return l.execute = function () {
    if (_dependency6.default.quickStopCount++, _dependency6.default.canQuickStop && !_dependency6.default.isTurbo) {
      _dependency6.default.quickStopCount++;
      var e = this.createFlow();
      App.flowManager.killFlow(_dependency0.FlowIDs.REPLAY_STOP_SPIN_FLOW), App.flowManager.registerFlow(e), _dependency6.default.canQuickStop = !1, _dependency6.default.canQuickStopEarlySpin = !1;
    }
  }, l.createFlow = function () {
    var e = new App.flowManager.Flow(_dependency0.FlowIDs.REPLAY_QUICK_STOP_FLOW),
      t = this.data.getData().parser.newTimesSymbols;
    return e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.START_QUICK_STOP)), t.length > 0 && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SPEED_CHARACTER_FIRE_UP, null, {
      autoComplete: !0
    })), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_QUICK_IN_ANIM)), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t,
      n = this.data.getData().gameState,
      a = n.winSymbols,
      l = n.totalWinnings,
      u = n.timesSymbols,
      d = n.timesUpgrade,
      r = void 0 === d ? [] : d,
      T = n.action,
      w = n.roundWinnings,
      R = n.splitList,
      p = n.femaleTotemLevel,
      I = void 0 === p ? 0 : p,
      O = n.maleTotemLevel,
      c = void 0 === O ? 0 : O,
      A = null == (t = this.data.preData.gameState) ? void 0 : t.winSymbols.length,
      m = "freeSpin" == T,
      C = T == _dependency9.EActionType.SUPER_GAME,
      P = m ? w : l;
    0 == m && (P = C ? w : l);
    var F = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      g = A && !a.length && u.length,
      L = m ? w : l,
      M = this.data.setBigWinReach(L),
      N = _dependency6.default.getData(),
      U = N.winAmountTime,
      f = N.showTimesMoveDelay,
      h = .5;
    (I > 0 || c > 0) && (h = 0), a && a.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: F
    }), new _dependency8.GameEvent(_dependency8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: P
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: l,
      tweenTime: U
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_WIN), new _dependency8.GameEvent(_dependency8.GameEvent.REMOVE_SYMBOLS, null, {
      delay: h
    })), I > 0 && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WOMEN_LOCK_ANIM, I)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_LOCK, {}))), null != R && R.length > 0 ? (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_MEN_SPLIT_ANIM, R[0])), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SPLIT_FIRE_BALL, null, {
      autoComplete: !0
    })), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_A, {})), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), r && r.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), g && (M ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: f
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: f
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: l,
      needComplete: !0,
      tweenTime: U
    }))), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
