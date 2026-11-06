// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1008-GameConfigModel";
import * as _dependency7 from "./g1008-GameData";
import * as _dependency8 from "./g1008-GameEvent";
import * as _dependency9 from "./g1008-FlowIDs";
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
var t, n, a, l, o, i, s, r, S, u, w;
_dependency2.cclegacy._RF.push({}, "90727EdaaVJFr8DoFwOgfCF", "CreateNewStopSpinFlowCmd", void 0);
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
    var e = new App.flowManager.Flow(_dependency9.FlowIDs.STOP_SPIN_FLOW),
      t = this.data.preSpinData,
      n = this.data.getData().parser.newTimesSymbols,
      a = this.data.currSpinData,
      o = a.currentView,
      i = a.action,
      r = a.currentTimes,
      S = t.winSymbols.length;
    return this.data.isOpenEarlyFlag && this.createEarlySpinFlow(), "freeSpin" == i && (dispatch(_dependency8.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency8.GameEvent.UPDATE_FG_TOTAL_TIMES, {
      data: r
    })), n.length && this.showCharacterFireFlow(e), 0 !== o && S ? this.newSymBolsInFlow(e) : (o > 0 ? (_dependency6.default.canQuickStop = !0, e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_OUT_ANIM))) : _dependency6.default.canQuickStop = !0, this.allSymbolsInFlow(e)), this.ShowWinFlow(e), e;
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
      S = t.timesUpgrade,
      w = t.action,
      _ = t.roundWinnings,
      d = this.data.preSpinData,
      c = null == d ? void 0 : d.winSymbols.length,
      E = "freeSpin" == w,
      p = E ? _ : a,
      F = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      T = c && !n.length && o.length,
      O = E ? _ : a,
      I = this.data.setNewBigWinReach(O),
      h = _dependency6.default.getData().winAmountTime;
    n.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: F
    }), new _dependency8.GameEvent(_dependency8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: p
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: h
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_WIN), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_FULL_COMBO), new _dependency8.GameEvent(_dependency8.GameEvent.REMOVE_SYMBOLS, null, {
      delay: 0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), S.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), T && (I ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      needComplete: !0,
      tweenTime: h
    }))), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.CREATE_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, o.createEarlySpinFlow = function () {
    var e = {
      data: {
        spinId: this.data.getData().gameState.spinId,
        cheat: null
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
