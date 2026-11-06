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
var t, n, a, l, o, i, s, S, _, r, E, d;
_dependency2.cclegacy._RF.push({}, "4a9c9MYrNlMJ5WLUGil7VwC", "CreateNewStopSpinFlowCmd", void 0);
_publish("default", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, e);
  var o = a.prototype;
  return o.execute = function () {
    var e = this.createFlow();
    App.flowManager.registerFlow(e);
  }, o.createFlow = function () {
    var e = new App.flowManager.Flow(_dependency0.FlowIDs.STOP_SPIN_FLOW),
      t = this.data.preSpinData,
      n = this.data.getData().parser.newTimesSymbols,
      a = this.data.currSpinData,
      o = a.currentView,
      i = a.action,
      S = a.currentTimes;
    null == t.winSymbols && (t.winSymbols = []);
    var _ = t.winSymbols.length;
    return this.data.isOpenEarlyFlag && this.createEarlySpinFlow(), "freeSpin" == i && (dispatch(_dependency8.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency8.GameEvent.UPDATE_FG_TOTAL_TIMES, {
      data: S
    })), n.length && this.showCharacterFireFlow(e), 0 !== o && _ ? this.newSymBolsInFlow(e) : (this.data.getData().parser.isHaveLockSymbol && dispatch(_dependency8.GameEvent.SHOW_TIMES_STAGE), o > 0 ? (_dependency6.default.canQuickStop = !0, e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_OUT_ANIM))) : _dependency6.default.canQuickStop = !0, this.allSymbolsInFlow(e)), this.ShowWinFlow(e), e;
  }, o.showCharacterFireFlow = function (e) {
    e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_CHARACTER_FIRE, null, {
      autoComplete: !0
    }));
  }, o.allSymbolsInFlow = function (e) {
    e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_IN_ANIM));
  }, o.newSymBolsInFlow = function (e) {
    var t = this.data.getData().parser.newTimesSymbols.length ? .3 : 0;
    e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, null, {
      delay: t
    }));
  }, o.ShowWinFlow = function (e) {
    var t = this.data.getData().gameState,
      n = t.winSymbols,
      a = t.totalWinnings,
      o = t.timesSymbols,
      _ = t.timesUpgrade,
      d = void 0 === _ ? [] : _,
      u = t.action,
      w = t.roundWinnings,
      T = t.splitList,
      I = t.maleTotemLevel,
      c = void 0 === I ? 0 : I,
      p = t.femaleTotemLevel,
      O = void 0 === p ? 0 : p,
      m = this.data.preSpinData,
      A = null == m ? void 0 : m.winSymbols.length,
      F = u == _dependency9.EActionType.FREE_GAME,
      R = u == _dependency9.EActionType.SUPER_GAME,
      h = F ? w : a;
    0 == F && (h = R ? w : a);
    var N = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      g = A && !n.length && o.length,
      M = F ? w : a,
      C = this.data.setNewBigWinReach(M),
      L = _dependency6.default.getData(),
      P = L.winAmountTime,
      y = L.showTimesMoveDelay,
      W = .5;
    (O > 0 || c > 0) && (W = 0), n && n.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: N
    }), new _dependency8.GameEvent(_dependency8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: h
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: P
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_WIN), new _dependency8.GameEvent(_dependency8.GameEvent.REMOVE_SYMBOLS, null, {
      delay: W
    })), O > 0 && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WOMEN_LOCK_ANIM, O)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_LOCK, {}))), null != T && T.length > 0 ? (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_MEN_SPLIT_ANIM, T[0])), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SPLIT_FIRE_BALL, null, {
      autoComplete: !0
    })), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_A, {})), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), d && d.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), g && (C ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: y
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: y
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      needComplete: !0,
      tweenTime: P
    }))), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.CREATE_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, o.createEarlySpinFlow = function () {
    var e = {
      data: {
        spinId: this.data.getData().gameState.spinId,
        test: null
      }
    };
    dispatch(_dependency8.GameEvent.CREATE_EARLY_SPIN_FLOW, {
      data: e
    });
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
