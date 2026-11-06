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
var t, n, a, o, l, i, S, _, u, E, s, d;
_dependency2.cclegacy._RF.push({}, "e929cab5CJA3bK+5qj8Mh55", "CreateNewQuickStopFlowCmd", void 0);
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
      App.flowManager.killFlow(_dependency0.FlowIDs.STOP_SPIN_FLOW), App.flowManager.registerFlow(e), _dependency6.default.canQuickStop = !1, _dependency6.default.canQuickStopEarlySpin = !1;
    }
  }, l.createFlow = function () {
    var e = new App.flowManager.Flow(_dependency0.FlowIDs.QUICK_STOP_FLOW),
      t = this.data.getData().parser.newTimesSymbols;
    return e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.START_QUICK_STOP)), t.length && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SPEED_CHARACTER_FIRE_UP, null, {
      autoComplete: !0
    })), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_QUICK_IN_ANIM)), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t = this.data.getData().gameState,
      n = t.winSymbols,
      a = t.totalWinnings,
      l = t.timesSymbols,
      u = t.timesUpgrade,
      d = void 0 === u ? [] : u,
      T = t.action,
      r = t.roundWinnings,
      w = t.splitList,
      I = t.femaleTotemLevel,
      O = void 0 === I ? 0 : I,
      c = t.maleTotemLevel,
      p = void 0 === c ? 0 : c,
      R = this.data.preSpinData,
      A = null == R ? void 0 : R.winSymbols.length,
      m = T == _dependency9.EActionType.FREE_GAME,
      C = T == _dependency9.EActionType.SUPER_GAME,
      F = m ? r : a;
    0 == m && (F = C ? r : a);
    var g = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      N = A && !n.length && l.length,
      P = m ? r : a,
      M = this.data.setNewBigWinReach(P),
      U = _dependency6.default.getData(),
      f = U.winAmountTime,
      L = U.showTimesMoveDelay,
      h = .5;
    (O > 0 || p > 0) && (h = 0), n && n.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: g
    }), new _dependency8.GameEvent(_dependency8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: F
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: f
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_WIN), new _dependency8.GameEvent(_dependency8.GameEvent.REMOVE_SYMBOLS, null, {
      delay: h
    })), O > 0 && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WOMEN_LOCK_ANIM, O)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_LOCK, {}))), null != w && w.length > 0 ? (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_MEN_SPLIT_ANIM, w[0])), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SPLIT_FIRE_BALL, null, {
      autoComplete: !0
    })), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_A, {})), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), d && d.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), N && (M ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: L
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: L
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      needComplete: !0,
      tweenTime: f
    }))), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.CREATE_SPIN_COMPLETE_FLOW, null, {
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
