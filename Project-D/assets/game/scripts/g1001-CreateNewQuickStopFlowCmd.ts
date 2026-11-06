// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1001-GameConfigModel";
import * as _dependency7 from "./g1001-GameData";
import * as _dependency8 from "./g1001-GameEvent";
import * as _dependency9 from "./g1001-FlowIDs";
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
var t, n, a, o, l, i, u, S, r, s, _;
_dependency2.cclegacy._RF.push({}, "645683LrqRECJ5QV1iYUn9c", "CreateNewQuickStopFlowCmd", void 0);
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
      App.flowManager.killFlow(_dependency9.FlowIDs.STOP_SPIN_FLOW), App.flowManager.registerFlow(e), _dependency6.default.canQuickStop = !1, _dependency6.default.canQuickStopEarlySpin = !1;
    }
  }, l.createFlow = function () {
    var e = new App.flowManager.Flow(_dependency9.FlowIDs.QUICK_STOP_FLOW),
      t = this.data.getData().parser.newTimesSymbols;
    return e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.START_QUICK_STOP)), t.length && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.GameEvent(_dependency8.GameEvent.SPEED_CHARACTER_FIRE_UP, null, {
      autoComplete: !0
    })), e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_QUICK_IN_ANIM)), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t = this.data.getData().gameState,
      n = t.winSymbols,
      a = t.totalWinnings,
      l = t.timesSymbols,
      r = t.timesUpgrade,
      _ = t.action,
      w = t.roundWinnings,
      c = this.data.preSpinData,
      E = null == c ? void 0 : c.winSymbols.length,
      d = "freeSpin" == _,
      p = d ? w : a,
      T = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      O = E && !n.length && l.length,
      C = d ? w : a,
      m = this.data.setNewBigWinReach(C),
      I = _dependency6.default.getData().winAmountTime;
    n.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: T
    }), new _dependency8.GameEvent(_dependency8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: p
    }, {
      autoComplete: !0
    }), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: I
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_BTM, {
      url: _dependency6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_SYMBOLS_WIN), new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_FULL_COMBO), new _dependency8.GameEvent(_dependency8.GameEvent.REMOVE_SYMBOLS, null, {
      delay: .5
    }), new _dependency8.GameEvent(_dependency8.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), r.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), O && (m ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency8.GameEvent(_dependency8.GameEvent.SHOW_TIMES_MOVING, null, {
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
      tweenTime: I
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
