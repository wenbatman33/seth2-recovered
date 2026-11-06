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
var t, n, a, o, l, i, s, u, r, d, E, S, _, w;
_dependency2.cclegacy._RF.push({}, "9ce3e+jBxZD6amGmhDzG0jA", "CreateNewResumeFlowCmd", void 0);
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
    var e = new App.flowManager.Flow(_dependency10.FlowIDs.RESUME_FLOW);
    return dispatch(_dependency6.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: this.data.getData().spinId
      }
    }), dispatch(_dependency6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency7.ESpinStatus.SPINING
    }), dispatch(_dependency0.GameEvent.UPDATE_GAME_TYPE, {
      data: this.data.currentGameType
    }), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t = this.data.getData().gameState,
      n = t.winSymbols,
      a = t.totalWinnings,
      l = t.timesSymbols,
      i = t.timesUpgrade,
      u = void 0 === i ? [] : i,
      E = t.action,
      w = t.roundWinnings,
      T = t.femaleTotemLevel,
      c = void 0 === T ? 0 : T,
      m = t.maleTotemLevel,
      p = void 0 === m ? 0 : m,
      A = this.data.preSpinData,
      I = null == A ? void 0 : A.winSymbols.length,
      O = E == _dependency1.EActionType.FREE_GAME,
      g = E == _dependency1.EActionType.SUPER_GAME,
      R = O ? w : a;
    0 == O && (R = g ? w : a);
    var f = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      F = I && !n.length && l.length,
      h = O ? w : a,
      N = this.data.setNewBigWinReach(h),
      M = _dependency8.default.getData(),
      P = M.winAmountTime,
      C = M.showTimesMoveDelay,
      U = .5;
    (c > 0 || p > 0) && (U = 0), n && n.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: f
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: R
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: P
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency8.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SYMBOLS_WIN), new _dependency0.GameEvent(_dependency0.GameEvent.REMOVE_SYMBOLS, null, {
      delay: U
    })), c > 0 && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_WOMEN_LOCK_ANIM, c)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_LOCK, {}))), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), u && u.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), F && (N ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: C
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: C
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency8.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      needComplete: !0,
      tweenTime: P
    }))), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.CREATE_SPIN_COMPLETE_FLOW, null, {
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
