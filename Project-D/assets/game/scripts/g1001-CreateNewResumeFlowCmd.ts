// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-type2";
import * as _dependency8 from "./g1001-GameConfigModel";
import * as _dependency9 from "./g1001-GameData";
import * as _dependency0 from "./g1001-GameEvent";
import * as _dependency1 from "./g1001-FlowIDs";
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
var t, n, a, o, l, i, u, s, r, S, d, _, w;
_dependency2.cclegacy._RF.push({}, "cb7a5aAGtVKmLOEGqORcyeo", "CreateNewResumeFlowCmd", void 0);
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
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.RESUME_FLOW);
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
      s = t.action,
      d = t.roundWinnings,
      w = this.data.preSpinData,
      E = null == w ? void 0 : w.winSymbols.length,
      c = "freeSpin" == s,
      p = c ? d : a,
      T = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      m = E && !n.length && l.length,
      I = c ? d : a,
      g = this.data.setNewBigWinReach(I),
      A = _dependency8.default.getData().winAmountTime;
    n.length && (e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: T
    }), new _dependency0.GameEvent(_dependency0.GameEvent.UPDATE_WIN_AMOUNT, {
      value: p
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: A
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency8.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_SYMBOLS_WIN), new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_FULL_COMBO), new _dependency0.GameEvent(_dependency0.GameEvent.REMOVE_SYMBOLS, null, {
      delay: .5
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), i.length && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), m && (g ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency0.GameEvent(_dependency0.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    }), new _dependency0.GameEvent(_dependency0.GameEvent.PLAY_BTM, {
      url: _dependency8.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new _dependency6.SlotFrameworkEvent(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      needComplete: !0,
      tweenTime: A
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
