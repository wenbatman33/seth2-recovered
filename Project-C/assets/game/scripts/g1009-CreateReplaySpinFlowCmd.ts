// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "./g1009-GameData";
import * as _dependency9 from "./g1009-GameEvent";
import * as _dependency0 from "./g1009-types";
import * as _dependency1 from "./g1009-FlowIDs";
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
var e, n, o, a, i, r, u, s, l, c, p, f;
_dependency2.cclegacy._RF.push({}, "fc1d3HHsS5NCZoLEcIy7sDw", "CreateReplaySpinFlowCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(o, t);
  var i = o.prototype;
  return i.execute = function (t) {
    var e = this.createSpinFlow(t);
    App.flowManager.registerFlow(e);
  }, i.createSpinFlow = function (t) {
    var e = new App.flowManager.Flow(_dependency1.FlowIDs.REPLAY_SPIN_FLOW);
    return this.firstSpinFlow(e, t), e;
  }, i.firstSpinFlow = function (t, e) {
    this.calculateAutoSpin(), t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency9.GameEvent(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    })), t.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency7.SlotFrameworkEvent(_dependency7.SlotFrameworkEvent.REPLAY_NEXT_SPIN));
  }, i.calculateAutoSpin = function () {
    if (_dependency5.default.active && _dependency5.default.spinsRemaining > 0) {
      if (this.data.currentGameType === _dependency0.EGameType.FREE_GAME) return;
      _dependency5.default.spinsRemaining--;
    }
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), o;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
