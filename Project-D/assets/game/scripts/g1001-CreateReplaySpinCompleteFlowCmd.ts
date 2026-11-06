// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1001-GameConfigModel";
import * as _dependency7 from "./g1001-GameData";
import * as _dependency8 from "./g1001-GameSymbolID";
import * as _dependency9 from "./g1001-GameEvent";
import * as _dependency0 from "./g1001-FlowIDs";
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
var t, n, a, l, i, o, u, s, w, _, r, T;
_dependency2.cclegacy._RF.push({}, "e02dbGSjjpLrIJ1Z8i8uqWd", "CreateReplaySpinCompleteFlowCmd", void 0);
_publish("default", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, e);
  var i = a.prototype;
  return i.execute = function () {
    this.createFlow();
  }, i.createFlow = function () {
    var e = this.data.getData().gameState,
      t = e.currentView,
      n = e.totalViews,
      a = e.startFreeGame,
      l = e.action,
      i = t + 1 === n,
      o = i && "freeSpin" == l;
    a ? this.showFreeGameIntroFlow() : i ? o ? this.freeGameFinishFlow() : this.closeSpinFlow() : this.nextSpinFlow();
  }, i.showFreeGameIntroFlow = function () {
    var e = new App.flowManager.Flow(_dependency0.FlowIDs.REPLAY_SHOW_FG_INTRO_FLOW),
      t = this.data.getData().gameState.totalWinnings,
      n = this.data.setBigWinReach(t),
      a = _dependency6.default.getData().winAmountTime;
    if (n) {
      var i = {
        winnings: t,
        isRoundWin: !0
      };
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .3
      }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_BIGWIN, i, {
        delay: 1
      }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_INTRO_ALERT, null, {
        autoComplete: !0,
        delay: 1
      }));
    } else e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: !0,
      tweenTime: a
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, i.nextSpinFlow = function () {
    var e = new App.flowManager.Flow(_dependency0.FlowIDs.REPLAY_NEXT_SPIN_FLOW),
      t = this.data.getData().parser,
      n = t.newTimesSymbols,
      a = t.view1D,
      i = this.data.getData().gameState,
      s = i.winSymbols,
      w = i.roundWinnings,
      d = i.action,
      E = i.currentView,
      N = _dependency6.default.getData(),
      R = N.hasTimesSymbolsDelay,
      S = N.nextSpinDelay,
      A = n.length ? R : S;
    if (s.length) e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.REPLAY_NEXT_SPIN));else if ("freeSpin" == d) {
      if (this.data.setBigWinReach(w)) {
        var p = {
          winnings: w,
          isRoundWin: !0
        };
        e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency5.SlotFrameworkEvent(_dependency9.GameEvent.SHOW_BIGWIN, p, {
          delay: .5
        }));
      }
      a.filter(function (e) {
        return e == _dependency8.EBackendSymbolID.SCATTER;
      }).length >= 3 && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .8
      }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.INCREASE_FG_REMAINING)), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.CREATE_REPLAY_SPIN_FLOW, null, {
        autoComplete: !0,
        delay: A
      }));
    }
    s.length || 0 !== E || e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.REPLAY_NEXT_SPIN)), App.flowManager.registerFlow(e);
  }, i.freeGameFinishFlow = function () {
    var e = new App.flowManager.Flow(_dependency0.FlowIDs.REPLAY_SHOW_FG_SUMMARY_FLOW),
      t = this.data.getData().gameState,
      n = t.totalWinnings,
      a = t.roundWinnings,
      i = this.data.setBigWinReach(a),
      w = this.data.setBigWinReach(n),
      _ = _dependency6.default.getData().winAmountTime;
    if (i) {
      var d = {
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
        tweenTime: _
      }, {
        autoComplete: !0
      }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_BIGWIN, d));
    }
    if (w) {
      var E = {
        winnings: n,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
        delay: 1
      }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 1.8
      }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: _
      }, {
        autoComplete: !0
      }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_BIGWIN, E), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .3
      }));
    } else e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
      delay: 1
    }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: _
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
      tweenTime: _
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .3
    }));
    App.flowManager.registerFlow(e);
  }, i.closeSpinFlow = function () {
    dispatch(_dependency9.GameEvent.CREATE_REPLAY_CLOSE_SPIN_FLOW);
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
