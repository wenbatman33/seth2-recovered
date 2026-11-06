// @ts-nocheck
import {continueAfterLocalJackpot as __continueAfterLocalJackpot} from "../backend/LocalJackpotContinuation";
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./g1008-GameConfigModel";
import * as _dependency8 from "./g1008-GameData";
import * as _dependency9 from "./g1008-GameSymbolID";
import * as _dependency0 from "./g1008-GameEvent";
import * as _dependency1 from "./g1008-FlowIDs";
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
var n, t, a, l, o, i, u, s, w, _, r, T, S;
_dependency2.cclegacy._RF.push({}, "7f1caBhxRdPlacoytrwVlgJ", "CreateNewSpinCompleteFlowCmd", void 0);
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
    var e = this.data.currSpinData,
      n = e.currentView,
      t = e.totalViews,
      a = e.startFreeGame,
      l = e.action,
      o = n + 1 === t,
      i = o && "freeSpin" == l;
    var owner = this;
    var proceed = function () { a ? owner.showFreeGameIntroFlow() : o ? i ? owner.freeGameFinishFlow() : owner.closeSpinFlow() : owner.nextSpinFlow(); };
    if (__continueAfterLocalJackpot(e, o && !i && !a, dispatch, _dependency0.GameEvent, proceed)) return;
    proceed();
  }, o.showFreeGameIntroFlow = function () {
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.SHOW_FG_INTRO_FLOW),
      n = this.data.currSpinData.totalWinnings,
      t = this.data.setNewBigWinReach(n),
      a = _dependency7.default.getData().winAmountTime;
    if (t) {
      var o = {
        winnings: n,
        isRoundWin: !0
      };
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .3
      }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, o, {
        delay: 1
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_INTRO_ALERT, null, {
        autoComplete: !0,
        delay: 1
      }));
    } else e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: !0,
      tweenTime: a
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0,
      delay: .6
    }));
    App.flowManager.registerFlow(e);
  }, o.nextSpinFlow = function () {
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.NEXT_SPIN_FLOW),
      n = this.data.getData().parser,
      t = n.newTimesSymbols,
      a = n.view1D,
      o = this.data.currSpinData,
      w = o.spinId,
      _ = o.winSymbols,
      d = o.roundWinnings,
      N = o.action,
      p = _dependency7.default.getData(),
      E = p.hasTimesSymbolsDelay,
      O = p.nextSpinDelay,
      I = t.length ? E : O;
    if (_.length) {
      _dependency5.default.ratioIndex, _dependency5.default.ratioValue, _dependency5.default.stakeIndex, _dependency5.default.stakeValue;
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.CREATE_SPIN_FLOW, {
        spinId: w,
        cheat: null,
        next: !0
      }, {
        autoComplete: !0,
        delay: I
      }));
    } else {
      if ("freeSpin" == N) {
        if (this.data.setNewBigWinReach(d)) {
          var C = {
            winnings: d,
            isRoundWin: !0
          };
          e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency6.SlotFrameworkEvent(_dependency0.GameEvent.SHOW_BIGWIN, C, {
            delay: .5
          }));
        }
        a.filter(function (e) {
          return e == _dependency9.EBackendSymbolID.SCATTER;
        }).length >= 3 && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SCATTER_WIN, null, {
          delay: .8
        }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.INCREASE_FG_REMAINING));
      }
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.CREATE_SPIN_FLOW, {
        spinId: w,
        cheat: null,
        next: !0
      }, {
        autoComplete: !0,
        delay: I
      }));
    }
    App.flowManager.registerFlow(e);
  }, o.freeGameFinishFlow = function () {
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.SHOW_FG_SUMMARY_FLOW),
      n = this.data.currSpinData,
      t = n.totalWinnings,
      a = n.roundWinnings,
      o = this.data.getData().spinId,
      i = this.data.setNewBigWinReach(a),
      _ = this.data.setNewBigWinReach(t),
      r = _dependency7.default.getData().winAmountTime;
    if (i) {
      var d = {
        winnings: a,
        isRoundWin: !0
      };
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 2.5
      }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: r
      }, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, d));
    }
    if (_) {
      var N = {
        winnings: t,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.FG_STOP_COUNT_FOR_PLAY_LOG, null, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
        delay: 1
      }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 1.8
      }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: r
      }, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, N), new _dependency0.GameEvent(_dependency0.GameEvent.SPIN_CLOSED_FLOW, null, {
        autoComplete: !0
      }));
    } else e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.FG_STOP_COUNT_FOR_PLAY_LOG, null, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
      delay: 1
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: r
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0,
      delay: 1.8
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: !0,
      tweenTime: r
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.closeSpinFlow = function () {
    dispatch(_dependency0.GameEvent.CREATE_CLOSE_SPIN_FLOW);
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
