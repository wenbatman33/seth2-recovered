// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./g1001-GameConfigModel";
import * as _dependency8 from "./g1001-GameData";
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
var t, n, a, l, o, i, s, r, u, S, _, d;
_dependency2.cclegacy._RF.push({}, "7eeefpAoA1J4bTTlBHH8evo", "CreateReplayStopSpinFlowCmd", void 0);
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
    var e,
      t = new App.flowManager.Flow(_dependency0.FlowIDs.REPLAY_STOP_SPIN_FLOW),
      n = this.data.preData,
      a = this.data.getData().parser.newTimesSymbols,
      l = this.data.getData().gameState,
      o = l.currentView,
      i = l.action,
      s = l.currentTimes,
      u = null == (e = n.gameState) ? void 0 : e.winSymbols.length;
    return "freeSpin" == i && (dispatch(_dependency9.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency9.GameEvent.UPDATE_FG_TOTAL_TIMES, {
      data: s
    })), a.length && this.showCharacterFireFlow(t), 0 !== o && u ? this.newSymBolsInFlow(t) : (_dependency7.default.canQuickStop = !0, this.allSymbolsInFlow(t)), this.ShowWinFlow(t), t;
  }, o.showCharacterFireFlow = function (e) {
    e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_CHARACTER_FIRE, null, {
      autoComplete: !0
    }));
  }, o.allSymbolsInFlow = function (e) {
    e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SYMBOLS_OUT_ANIM), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SYMBOLS_IN_ANIM));
  }, o.newSymBolsInFlow = function (e) {
    var t = this.data.getData().parser.newTimesSymbols.length ? .3 : 0;
    e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, null, {
      delay: t
    }));
  }, o.ShowWinFlow = function (e) {
    var t,
      n = this.data.getData().gameState,
      a = n.winSymbols,
      o = n.totalWinnings,
      i = n.timesSymbols,
      S = n.timesUpgrade,
      d = n.action,
      w = n.roundWinnings,
      c = null == (t = this.data.preData.gameState) ? void 0 : t.winSymbols.length,
      p = "freeSpin" == d,
      E = p ? w : o,
      m = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      T = c && !a.length && i.length,
      g = p ? w : o,
      O = this.data.setBigWinReach(g),
      I = _dependency7.default.getData().winAmountTime;
    a.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: m
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: E
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      tweenTime: I
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SYMBOLS_WIN), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FULL_COMBO), new _dependency9.GameEvent(_dependency9.GameEvent.REMOVE_SYMBOLS, null, {
      delay: .5
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), S.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), T && (O ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      needComplete: !0,
      tweenTime: I
    }, {
      autoComplete: !0
    }))), e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, o.createEarlySpinFlow = function () {
    if (_dependency5.default.active && (_dependency5.default.spinsRemaining > 1 || -1 === _dependency5.default.spinsRemaining)) {
      if (0 !== this.data.getData().gameState.totalWinnings) return;
      var e = {
        data: {
          spinId: this.data.getData().gameState.spinId
        }
      };
      dispatch(_dependency9.GameEvent.CREATE_EARLY_SPIN_FLOW, {
        data: e
      });
    }
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
