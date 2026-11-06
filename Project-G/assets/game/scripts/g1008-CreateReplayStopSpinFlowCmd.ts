// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./g1008-GameConfigModel";
import * as _dependency8 from "./g1008-GameData";
import * as _dependency9 from "./g1008-GameEvent";
import * as _dependency0 from "./g1008-FlowIDs";
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
var e, n, a, l, o, i, s, u, S, r, _, d;
_dependency2.cclegacy._RF.push({}, "a5836A1hSFFub6bjiMIKgzZ", "CreateReplayStopSpinFlowCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, t);
  var o = a.prototype;
  return o.execute = function () {
    var t = this.createFlow();
    App.flowManager.registerFlow(t);
  }, o.createFlow = function () {
    var t,
      e = new App.flowManager.Flow(_dependency0.FlowIDs.REPLAY_STOP_SPIN_FLOW),
      n = this.data.preData,
      a = this.data.getData().parser.newTimesSymbols,
      l = this.data.getData().gameState,
      o = l.currentView,
      i = l.action,
      s = l.currentTimes,
      S = null == (t = n.gameState) ? void 0 : t.winSymbols.length;
    return "freeSpin" == i && (dispatch(_dependency9.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency9.GameEvent.UPDATE_FG_TOTAL_TIMES, {
      data: s
    })), a.length && this.showCharacterFireFlow(e), 0 !== o && S ? this.newSymBolsInFlow(e) : (_dependency7.default.canQuickStop = !0, this.allSymbolsInFlow(e)), this.ShowWinFlow(e), e;
  }, o.showCharacterFireFlow = function (t) {
    t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_CHARACTER_FIRE, null, {
      autoComplete: !0
    }));
  }, o.allSymbolsInFlow = function (t) {
    t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SYMBOLS_OUT_ANIM), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SYMBOLS_IN_ANIM));
  }, o.newSymBolsInFlow = function (t) {
    var e = this.data.getData().parser.newTimesSymbols.length ? .3 : 0;
    t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, null, {
      delay: e
    }));
  }, o.ShowWinFlow = function (t) {
    var e,
      n = this.data.getData().gameState,
      a = n.winSymbols,
      o = n.totalWinnings,
      i = n.timesSymbols,
      r = n.timesUpgrade,
      d = n.action,
      w = n.roundWinnings,
      c = null == (e = this.data.preData.gameState) ? void 0 : e.winSymbols.length,
      E = "freeSpin" == d,
      m = E ? w : o,
      p = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      T = c && !a.length && i.length,
      g = E ? w : o,
      I = this.data.setBigWinReach(g),
      O = _dependency7.default.getData().winAmountTime;
    a.length && (t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: p
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: m
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      tweenTime: O
    }, {
      autoComplete: !0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_SYMBOLS_WIN), new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_FULL_COMBO), new _dependency9.GameEvent(_dependency9.GameEvent.REMOVE_SYMBOLS, null, {
      delay: 0
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), r.length && t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), T && (I ? t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    })) : t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency9.GameEvent(_dependency9.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    }), new _dependency9.GameEvent(_dependency9.GameEvent.PLAY_BTM, {
      url: _dependency7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      needComplete: !0,
      tweenTime: O
    }, {
      autoComplete: !0
    }))), t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, o.createEarlySpinFlow = function () {
    if (_dependency5.default.active && (_dependency5.default.spinsRemaining > 1 || -1 === _dependency5.default.spinsRemaining)) {
      if (0 !== this.data.getData().gameState.totalWinnings) return;
      var t = {
        data: {
          spinId: this.data.getData().gameState.spinId
        }
      };
      dispatch(_dependency9.GameEvent.CREATE_EARLY_SPIN_FLOW, {
        data: t
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
