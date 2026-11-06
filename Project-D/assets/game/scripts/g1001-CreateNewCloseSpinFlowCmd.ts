// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1001-GameData";
import * as _dependency7 from "./g1001-GameEvent";
import * as _dependency8 from "./g1001-FlowIDs";
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
var t, n, a, o, i, s, r, l, u;
_dependency2.cclegacy._RF.push({}, "a2e4cdeyshCPqF9jCh/8CFY", "CreateNewCloseSpinFlowCmd", void 0);
_publish("default", function (e) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, e);
  var i = a.prototype;
  return i.execute = function () {
    var e = this.createFlow();
    App.flowManager.registerFlow(e);
  }, i.createFlow = function () {
    var e = new App.flowManager.Flow(_dependency8.FlowIDs.CLOSE_SPIN_FLOW),
      t = this.data.getData().gameState,
      n = t.totalWinnings,
      a = t.isJp,
      i = t.noWinReward,
      r = this.data.setNewBigWinReach(n);
    if (a.length && e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_JP_WIN), _dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_JP)), i && i > 0) e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_TREASURE_VIEW, null));else if (r && !a.length) {
      var c = {
        winnings: n,
        isRoundWin: !1
      };
      e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency7.GameEvent(_dependency7.GameEvent.SHOW_BIGWIN, c));
    }
    return this.data.isOpenEarlyFlag ? e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency7.GameEvent(_dependency7.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    })) : e.add(_dependency3.FlowTrigger.AFTER_PREVIOUS, new _dependency5.SlotFrameworkEvent(_dependency5.SlotFrameworkEvent.SEND_CLOSE_REQUEST, this.data.getData().spinId, {
      autoComplete: !0
    })), e;
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), a;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
