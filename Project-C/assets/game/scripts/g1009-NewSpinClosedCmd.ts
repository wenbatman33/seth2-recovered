// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency4 from "../../shared/scripts/main-Flow";
import * as _dependency5 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency6 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency8 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-type2";
import * as _dependency1 from "./g1009-GameConfigModel";
import * as _dependency10 from "./g1009-GameData";
import * as _dependency11 from "./g1009-GameEvent";
import * as _dependency12 from "./g1009-types";
import * as _dependency13 from "./g1009-FlowIDs";
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
var e, a, n, i, s, l, o, u, c, d, S, r, p, E, _, f, g, A;
_dependency2.cclegacy._RF.push({}, "b7266ebgdVCMpdqbAbDprdB", "NewSpinClosedCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, t);
  var o = n.prototype;
  return o.execute = function () {
    dispatch(_dependency11.GameEvent.SPIN_CLOSED), _dependency1.default.quickStopCount = 0;
    var t = this.createFlow();
    App.flowManager.registerFlow(t);
  }, o.createFlow = function () {
    var t = new App.flowManager.Flow(_dependency13.FlowIDs.SPIN_CLOSED_FLOW),
      e = this.data.getData().parser.newTimesSymbols,
      a = _dependency1.default.getData(),
      n = a.hasTimesSymbolsDelay,
      o = a.nextSpinDelay,
      c = e.length ? n : o,
      E = this.data.getData().gameState,
      m = E.currentView,
      T = E.totalViews,
      y = E.action;
    this.data.getData().isResuming = !1, this.calculateAutoSpin(), m === T - 1 && this.data.currentGameType === _dependency12.EGameType.FREE_GAME ? dispatch(_dependency8.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency0.ESpinStatus.SPINING
    }) : m === T - 1 && y == _dependency12.EActionType.SUPER_GAME ? dispatch(_dependency8.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency0.ESpinStatus.IDLE
    }) : (console.log("%c UPDATE_SPIN_STATUS", _dependency3.getKeyStyle(_dependency3.KeyStyle.Notify), _dependency6.default.active), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency6.default.active ? _dependency0.ESpinStatus.SPINING : _dependency0.ESpinStatus.IDLE
    }));
    var I = _dependency9.default.amount;
    return t.add(_dependency4.FlowTrigger.CONCURRENT, new _dependency11.GameEvent(_dependency8.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      balance: I
    }, {
      autoComplete: !0
    })), _dependency6.default.active && (_dependency6.default.spinsRemaining > 0 || -1 === _dependency6.default.spinsRemaining) ? this.data.isOpenEarlyFlag ? null == this.data.earlyData ? t.add(_dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency11.GameEvent(_dependency11.GameEvent.WAIT_EARLY_SPIN_RESPONSE, null, {
      autoComplete: !0
    })) : t.add(_dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency11.GameEvent(_dependency11.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      test: null,
      earlySpin: !0
    }, {
      autoComplete: !0,
      delay: c
    })) : t.add(_dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency11.GameEvent(_dependency11.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      test: null
    }, {
      autoComplete: !0,
      delay: c
    })) : this.data.earlyData && this.data.isSendOutEarlyFlag && t.add(_dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency11.GameEvent(_dependency11.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      test: null,
      earlySpin: !0
    }, {
      autoComplete: !0,
      delay: c
    })), t;
  }, o.calculateAutoSpin = function () {
    0 === _dependency6.default.spinsRemaining && (_dependency6.default.active = !1, dispatch(_dependency8.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    })), _dependency6.default.spinsRemaining <= -1 && (_dependency6.default.spinsRemaining = -1), _dependency6.default.active ? dispatch(_dependency8.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(_dependency8.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), _dependency6.default.spinsRemaining = 0);
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency10.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), n;
}(_dependency5.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
