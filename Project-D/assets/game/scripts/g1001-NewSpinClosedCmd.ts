// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-type2";
import * as _dependency0 from "./g1001-GameConfigModel";
import * as _dependency1 from "./g1001-GameData";
import * as _dependency10 from "./g1001-GameEvent";
import * as _dependency11 from "./g1001-types";
import * as _dependency12 from "./g1001-FlowIDs";
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
var e, a, n, i, l, s, o, u, c, r, d, p, S, E, f;
_dependency2.cclegacy._RF.push({}, "842849+OWlCJpbUtFn7tRWW", "NewSpinClosedCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, t);
  var l = n.prototype;
  return l.execute = function () {
    dispatch(_dependency10.GameEvent.SPIN_CLOSED), _dependency0.default.quickStopCount = 0;
    var t = this.createFlow();
    App.flowManager.registerFlow(t);
  }, l.createFlow = function () {
    var t = new App.flowManager.Flow(_dependency12.FlowIDs.SPIN_CLOSED_FLOW),
      e = this.data.getData().parser.newTimesSymbols,
      a = _dependency0.default.getData(),
      n = a.hasTimesSymbolsDelay,
      l = a.nextSpinDelay,
      o = e.length ? n : l,
      p = this.data.currSpinData,
      _ = p.currentView,
      m = p.totalViews;
    return this.data.getData().isResuming = !1, this.calculateAutoSpin(), _ === m - 1 && this.data.currentGameType === _dependency11.EGameType.FREE_GAME ? dispatch(_dependency7.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency9.ESpinStatus.SPINING
    }) : dispatch(_dependency7.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency5.default.active ? _dependency9.ESpinStatus.SPINING : _dependency9.ESpinStatus.IDLE
    }), t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency10.GameEvent(_dependency7.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      balance: _dependency8.default.amount
    }, {
      autoComplete: !0
    })), _dependency5.default.active && (_dependency5.default.spinsRemaining > 0 || -1 === _dependency5.default.spinsRemaining) ? this.data.isOpenEarlyFlag ? null == this.data.earlyData ? t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency10.GameEvent(_dependency10.GameEvent.WAIT_EARLY_SPIN_RESPONSE, null, {
      autoComplete: !0
    })) : t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency10.GameEvent(_dependency10.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      cheat: null,
      earlySpin: !0
    }, {
      autoComplete: !0,
      delay: o
    })) : t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency10.GameEvent(_dependency10.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      cheat: null
    }, {
      autoComplete: !0,
      delay: o
    })) : this.data.earlyData && this.data.isSendOutEarlyFlag && t.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency10.GameEvent(_dependency10.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      cheat: null,
      earlySpin: !0
    }, {
      autoComplete: !0,
      delay: o
    })), t;
  }, l.calculateAutoSpin = function () {
    0 === _dependency5.default.spinsRemaining && (_dependency5.default.active = !1, dispatch(_dependency7.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    })), _dependency5.default.spinsRemaining <= -1 && (_dependency5.default.spinsRemaining = -1), _dependency5.default.active ? dispatch(_dependency7.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(_dependency7.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), _dependency5.default.spinsRemaining = 0);
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency1.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), n;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
