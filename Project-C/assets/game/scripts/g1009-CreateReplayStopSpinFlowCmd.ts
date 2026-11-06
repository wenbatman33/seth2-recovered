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
var e, a, n, l, o, i, s, S, _, r, m, d;
_dependency2.cclegacy._RF.push({}, "33bc1aT7X5DL4Rwi+S7PC6B", "CreateReplayStopSpinFlowCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, t);
  var o = n.prototype;
  return o.execute = function () {
    var t = this.createFlow();
    App.flowManager.registerFlow(t);
  }, o.createFlow = function () {
    var t,
      e = new App.flowManager.Flow(_dependency0.FlowIDs.REPLAY_STOP_SPIN_FLOW),
      a = this.data.preData,
      n = this.data.getData().parser.newTimesSymbols,
      o = this.data.getData().gameState,
      S = o.currentView,
      _ = o.action,
      E = o.currentTimes;
    null == a.gameState.winSymbols && (a.gameState.winSymbols = []);
    var u = null == (t = a.gameState) ? void 0 : t.winSymbols.length;
    if (_ == _dependency9.EActionType.FREE_GAME) {
      if (dispatch(_dependency8.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency8.GameEvent.UPDATE_FG_TOTAL_TIMES, {
        data: E
      }), "freeSpin" == this.data.getData().gameState.action && this.data.preData.gameState.winSymbols && 0 == this.data.preData.gameState.winSymbols.length) {
        if (this.data.preData.gameState.freeGameCount != this.data.getData().gameState.freeGameCount) for (var T = this.data.preData.gameState.timesSymbols.slice(), w = 0; w < T.length; w++) {
          var p = T[w];
          1 == p.lock && dispatch(_dependency8.GameEvent.TIMES_LOCK_OUT, p.symbolPos);
        }
        this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0;
      }
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency5.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    if (_ == _dependency9.EActionType.SUPER_GAME) {
      if (this.data.getData().gameState.action == _dependency9.EActionType.SUPER_GAME && this.data.preData.gameState.winSymbols && 0 == this.data.preData.gameState.winSymbols.length) {
        if (this.data.preData.gameState.superMainGameCount != this.data.getData().gameState.superMainGameCount) for (var g = this.data.preData.gameState.timesSymbols.slice(), c = 0; c < g.length; c++) {
          var h = g[c];
          1 == h.lock && dispatch(_dependency8.GameEvent.TIMES_LOCK_OUT, h.symbolPos);
        }
        this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0;
      }
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency5.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    return n.length && this.showCharacterFireFlow(e), 0 !== S && u ? this.newSymBolsInFlow(e) : (this.data.getData().parser.isHaveLockSymbol && dispatch(_dependency8.GameEvent.SHOW_TIMES_STAGE), _dependency6.default.canQuickStop = !0, this.allSymbolsInFlow(e)), this.ShowWinFlow(e), e;
  }, o.showCharacterFireFlow = function (t) {
    t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_CHARACTER_FIRE, null, {
      autoComplete: !0
    }));
  }, o.allSymbolsInFlow = function (t) {
    t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_OUT_ANIM), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_IN_ANIM));
  }, o.newSymBolsInFlow = function (t) {
    var e = this.data.getData().parser.newTimesSymbols.length ? .3 : 0;
    t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, null, {
      delay: e
    }));
  }, o.ShowWinFlow = function (t) {
    var e,
      a = this.data.getData().gameState,
      n = a.winSymbols,
      o = a.totalWinnings,
      _ = a.timesSymbols,
      d = a.timesUpgrade,
      E = void 0 === d ? [] : d,
      u = a.action,
      T = a.roundWinnings,
      w = a.splitList,
      p = a.femaleTotemLevel,
      g = void 0 === p ? 0 : p,
      c = a.maleTotemLevel,
      h = void 0 === c ? 0 : c,
      R = null == (e = this.data.preData.gameState) ? void 0 : e.winSymbols.length,
      I = u == _dependency9.EActionType.FREE_GAME,
      O = u == _dependency9.EActionType.SUPER_GAME,
      A = I ? T : o;
    0 == I && (A = O ? T : o);
    var C = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      N = R && !n.length && _.length,
      M = I ? T : o,
      F = this.data.setBigWinReach(M),
      y = _dependency6.default.getData(),
      D = y.winAmountTime,
      L = y.showTimesMoveDelay,
      P = .5;
    (g > 0 || h > 0) && (P = 0), n && n.length && (t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: C
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: A
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      tweenTime: D
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_WIN), new _dependency8.GameEvent(_dependency8.GameEvent.REMOVE_SYMBOLS, null, {
      delay: P
    })), g > 0 && (t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WOMEN_LOCK_ANIM, g)), this.data.getData().parser.lockTimesSymbols.size > 0 && t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_LOCK, {}))), null != w && w.length > 0 ? (t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_MEN_SPLIT_ANIM, w[0])), t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SPLIT_FIRE_BALL, null, {
      autoComplete: !0
    })), t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_A, {})), t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), E && E.length && t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), N && (F ? t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: L
    })) : t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: L
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      needComplete: !0,
      tweenTime: D
    }, {
      autoComplete: !0
    }))), t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), n;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
