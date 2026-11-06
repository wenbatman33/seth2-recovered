// @ts-nocheck
// Project-C simulation hooks v1; original nonlocal behavior retained.
;
import { continueAfterLocalJackpot as __projectCContinueAfterJackpot } from "../backend/LocalJackpotContinuation";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./g1009-GameConfigModel";
import * as _dependency8 from "./g1009-GameData";
import * as _dependency9 from "./g1009-GameSymbolID";
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
var t, n, a, l, o, i, u, _, w, T, s, E, S, N;
_dependency2.cclegacy._RF.push({}, "697faiNcK1JOrV7PVrRi3Nn", "CreateNewSpinCompleteFlowCmd", void 0);
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
    const stage = this.data.currSpinData;
    const normalClose = stage.currentView + 1 === stage.totalViews && stage.action === 'spin' && !stage.startFreeGame;
    const proceed = () => {
      var e = this.data.currSpinData,
        t = e.currentView,
        n = e.totalViews,
        a = e.startFreeGame,
        l = e.action,
        o = t + 1 === n,
        i = o && l == _dependency1.EActionType.FREE_GAME,
        u = o && l == _dependency1.EActionType.SUPER_GAME;
      a && l !== _dependency1.EActionType.SUPER_GAME ? this.showFreeGameIntroFlow() : o ? i ? this.freeGameFinishFlow() : u ? this.superMainGameFinishFlow() : this.closeSpinFlow() : this.nextSpinFlow();
    };
    if (__projectCContinueAfterJackpot(stage, normalClose, dispatch, _dependency0.GameEvent, proceed)) return;
    proceed();
  }, o.showFreeGameIntroFlow = function () {
    var e = new App.flowManager.Flow(_dependency10.FlowIDs.SHOW_FG_INTRO_FLOW),
      t = this.data.currSpinData.totalWinnings,
      n = this.data.setNewBigWinReach(t),
      a = _dependency7.default.getData().winAmountTime;
    if (n) {
      var o = {
        winnings: t,
        isRoundWin: !0
      };
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .3
      }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, o, {
        delay: 1
      }), new _dependency0.GameEvent(_dependency0.GameEvent.HIDE_DARK, null, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_INTRO_ALERT, null, {
        autoComplete: !0,
        delay: 1
      }));
    } else e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: !0,
      tweenTime: a
    }), new _dependency0.GameEvent(_dependency0.GameEvent.HIDE_DARK, null, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.nextSpinFlow = function () {
    var e = new App.flowManager.Flow(_dependency10.FlowIDs.NEXT_SPIN_FLOW),
      t = this.data.getData().parser,
      n = t.newTimesSymbols,
      a = t.view1D,
      o = this.data.currSpinData,
      w = o.spinId,
      T = o.winSymbols,
      S = o.roundWinnings,
      r = o.action,
      p = _dependency7.default.getData(),
      C = p.hasTimesSymbolsDelay,
      A = p.nextSpinDelay,
      O = n.length ? C : A;
    if (null == T && (T = []), T.length) {
      _dependency5.default.ratioIndex, _dependency5.default.ratioValue, _dependency5.default.stakeIndex, _dependency5.default.stakeValue;
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.CREATE_SPIN_FLOW, {
        spinId: w,
        test: null,
        next: !0
      }, {
        autoComplete: !0,
        delay: O
      }));
    } else {
      if ("freeSpin" == r) {
        if (this.data.setNewBigWinReach(S)) {
          var d = {
            winnings: S,
            isRoundWin: !0
          };
          e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency6.SlotFrameworkEvent(_dependency0.GameEvent.SHOW_BIGWIN, d, {
            delay: .5
          }));
        }
        (o.localRules === true ? Number.isInteger(o.localExtraFreeRounds) && o.localExtraFreeRounds > 0 : a.filter(function (e) {
          return e == _dependency9.EBackendSymbolID.SCATTER || e == _dependency9.EBackendSymbolID.GOLD_SCATTER;
        }).length >= 3) && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SCATTER_WIN, null, {
          delay: .8
        }), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.INCREASE_FG_REMAINING), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.HIDE_DARK, null, {
          autoComplete: !0
        }));
      }
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.CREATE_SPIN_FLOW, {
        spinId: w,
        test: null,
        next: !0
      }, {
        autoComplete: !0,
        delay: O
      }));
    }
    App.flowManager.registerFlow(e);
  }, o.freeGameFinishFlow = function () {
    var e = new App.flowManager.Flow(_dependency10.FlowIDs.SHOW_FG_SUMMARY_FLOW),
      t = this.data.currSpinData,
      n = t.totalWinnings,
      a = t.roundWinnings,
      o = this.data.getData().spinId,
      i = this.data.setNewBigWinReach(a),
      T = this.data.setNewBigWinReach(n),
      s = _dependency7.default.getData().winAmountTime;
    if (i) {
      var S = {
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
        tweenTime: s
      }, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, S));
    }
    if (T) {
      var r = {
        winnings: n,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
        delay: 1
      }), new _dependency0.GameEvent(_dependency0.GameEvent.TIMES_LOCK_ALLOUT, null, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 1.8
      }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: s
      }, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, r), new _dependency0.GameEvent(_dependency0.GameEvent.SPIN_CLOSED_FLOW, null, {
        autoComplete: !0
      }));
    } else e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
      delay: 1
    }), new _dependency0.GameEvent(_dependency0.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: s
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0,
      delay: 1.8
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: n > 0,
      tweenTime: s
    }, {
      autoComplete: !(n > 0)
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.superMainGameFinishFlow = function () {
    var e = new App.flowManager.Flow(_dependency10.FlowIDs.SHOW_SUPER_MG_SUMMARY_FLOW),
      t = this.data.currSpinData,
      n = t.totalWinnings,
      a = t.roundWinnings,
      o = this.data.getData().spinId,
      i = this.data.setNewBigWinReach(a),
      T = this.data.setNewBigWinReach(n),
      s = _dependency7.default.getData().winAmountTime;
    if (i) {
      var S = {
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
        tweenTime: s
      }, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, S));
    }
    if (T) {
      var r = {
        winnings: n,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.TIMES_LOCK_ALLOUT, null, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: .3
      }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: s
      }, {
        autoComplete: !0
      }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_BIGWIN, r), new _dependency0.GameEvent(_dependency0.GameEvent.SPIN_CLOSED_FLOW, null, {
        autoComplete: !0
      }));
    } else n > 0 ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: s
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0,
      delay: .3
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: !0,
      tweenTime: s
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.closeSpinFlow = function () {
    dispatch(_dependency0.GameEvent.CREATE_CLOSE_SPIN_FLOW);
  }, o.resetEarlyData = function () {
    this.data.isEarlyFlag = !1, this.data.earlyData = null, this.data.isEarlyCloseFlag = !1, this.data.earlyCloseData = null;
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
