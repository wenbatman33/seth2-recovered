// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1009-GameConfigModel";
import * as _dependency7 from "./g1009-GameData";
import * as _dependency8 from "./g1009-GameSymbolID";
import * as _dependency9 from "./g1009-GameEvent";
import * as _dependency0 from "./g1009-types";
import * as _dependency1 from "./g1009-FlowIDs";
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
var t, n, a, l, o, i, u, _, E, T, w, s, R;
_dependency2.cclegacy._RF.push({}, "57330YYsfRILrJ0/s8Fp42d", "CreateReplaySpinCompleteFlowCmd", void 0);
_publish("default", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, e);
  var o = a.prototype;
  return o.execute = function () {
    this.createFlow();
  }, o.createFlow = function () {
    var e = this.data.getData().gameState,
      t = e.currentView,
      n = e.totalViews,
      a = e.startFreeGame,
      l = e.action,
      o = t + 1 === n,
      i = o && l == _dependency0.EActionType.FREE_GAME;
    o && _dependency0.EActionType.SUPER_GAME;
    a && l !== _dependency0.EActionType.SUPER_GAME ? this.showFreeGameIntroFlow() : o ? i ? this.freeGameFinishFlow() : this.closeSpinFlow() : this.nextSpinFlow();
  }, o.showFreeGameIntroFlow = function () {
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.REPLAY_SHOW_FG_INTRO_FLOW),
      t = this.data.getData().gameState,
      n = t.totalWinnings,
      a = t.isGoldenFg,
      o = this.data.setBigWinReach(n),
      E = _dependency6.default.getData().winAmountTime;
    if (o) {
      var T = {
        winnings: n,
        isRoundWin: !0
      };
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .3
      }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_BIGWIN, T, {
        delay: 1
      }), new _dependency9.GameEvent(_dependency9.GameEvent.HIDE_DARK, null, {
        autoComplete: !0
      }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_INTRO_ALERT, null, {
        autoComplete: !0,
        delay: 1
      }));
    } else a ? e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: !0,
      tweenTime: E
    }), new _dependency9.GameEvent(_dependency9.GameEvent.HIDE_DARK, null, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0
    })) : e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: !0,
      tweenTime: E
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.HIDE_DARK, null, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.nextSpinFlow = function () {
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.REPLAY_NEXT_SPIN_FLOW),
      t = this.data.getData().parser,
      n = t.newTimesSymbols,
      a = t.view1D,
      o = this.data.getData().gameState,
      _ = o.winSymbols,
      E = o.roundWinnings,
      A = o.action,
      N = o.currentView,
      r = _dependency6.default.getData(),
      S = r.hasTimesSymbolsDelay,
      d = r.nextSpinDelay,
      C = n.length ? S : d;
    if (null == _ && (_ = []), _.length) e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.REPLAY_NEXT_SPIN));else if (A == _dependency0.EActionType.FREE_GAME || A == _dependency0.EActionType.SUPER_GAME) {
      if (this.data.setBigWinReach(E)) {
        var I = {
          winnings: E,
          isRoundWin: !0
        };
        e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency5.SlotFrameworkEvent(_dependency9.GameEvent.SHOW_BIGWIN, I, {
          delay: .5
        }));
      }
      a.filter(function (e) {
        return e == _dependency8.EBackendSymbolID.SCATTER || e == _dependency8.EBackendSymbolID.GOLD_SCATTER;
      }).length >= 3 && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .8
      }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.INCREASE_FG_REMAINING), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.HIDE_DARK, null, {
        autoComplete: !0
      })), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.CREATE_REPLAY_SPIN_FLOW, null, {
        autoComplete: !0,
        delay: C
      }));
    }
    _.length || 0 !== N || e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.REPLAY_NEXT_SPIN)), App.flowManager.registerFlow(e);
  }, o.freeGameFinishFlow = function () {
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.REPLAY_SHOW_FG_SUMMARY_FLOW),
      t = this.data.getData().gameState,
      n = t.totalWinnings,
      a = t.roundWinnings,
      o = this.data.setBigWinReach(a),
      E = this.data.setBigWinReach(n),
      T = _dependency6.default.getData().winAmountTime;
    if (o) {
      var s = {
        winnings: a,
        isRoundWin: !0
      };
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 2.5
      }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: T
      }, {
        autoComplete: !0
      }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_BIGWIN, s));
    }
    if (E) {
      var A = {
        winnings: n,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
        delay: 1
      }), new _dependency9.GameEvent(_dependency9.GameEvent.TIMES_LOCK_ALLOUT, null, {
        autoComplete: !0
      }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 1.8
      }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: T
      }, {
        autoComplete: !0
      }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_BIGWIN, A), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .3
      }));
    } else e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
      delay: 1
    }), new _dependency9.GameEvent(_dependency9.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: T
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0,
      delay: 1.8
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: !0,
      tweenTime: T
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .3
    }));
    App.flowManager.registerFlow(e);
  }, o.closeSpinFlow = function () {
    dispatch(_dependency9.GameEvent.CREATE_REPLAY_CLOSE_SPIN_FLOW);
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
