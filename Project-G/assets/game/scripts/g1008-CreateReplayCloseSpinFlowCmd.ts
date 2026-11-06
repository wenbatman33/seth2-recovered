// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1008-GameData";
import * as _dependency7 from "./g1008-GameEvent";
import * as _dependency8 from "./g1008-FlowIDs";
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
var n, t, a, l, o, i, r, s, u;
_dependency2.cclegacy._RF.push({}, "d9d45ieDK1J54yPu2lfYKAp", "CreateReplayCloseSpinFlowCmd", void 0);
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
    var e = new App.flowManager.Flow(_dependency8.FlowIDs.REPLAY_CLOSE_SPIN_FLOW),
      n = this.data.getData().gameState,
      t = n.totalWinnings,
      a = n.isJp,
      o = n.noWinReward,
      r = this.data.setBigWinReach(t);
    if (a.length && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_JP_WIN), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_JP), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .3
    })), r && !a.length) {
      var E = {
        winnings: t,
        isRoundWin: !1
      };
      null != o && o > 0 ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_TREASURE_VIEW, null), new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .5
      })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_BIGWIN, E), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .3
      }));
    }
    return o && o > 0 && e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_TREASURE_VIEW, null)), r || a.length || e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .5
    })), e;
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
