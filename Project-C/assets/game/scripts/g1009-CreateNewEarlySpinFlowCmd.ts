// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Flow";
import * as _dependency4 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency5 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency6 from "./g1009-GameData";
import * as _dependency7 from "./g1009-FlowIDs";
import * as _dependency8 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "./g1009-types";
import * as _dependency0 from "../../shared/scripts/main-Bundles";
import * as _dependency1 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-type2";
import * as _dependency12 from "../../shared/scripts/slotFramework-MathUtil";
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
var e, a, n, i, o, r, s, u, l, c, f, d, p, g, w;
_dependency2.cclegacy._RF.push({}, "3fafbScPZpNLLTFiwsYNj/7", "CreateNewEarlySpinFlowCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, t);
  var o = n.prototype;
  return o.execute = function (t) {
    var e = this.createFlow(t);
    App.flowManager.registerFlow(e);
  }, o.createFlow = function (t) {
    return this.createMgFlow(t);
  }, o.createMgFlow = function (t) {
    var e = new App.flowManager.Flow(_dependency7.FlowIDs.EARLY_SPIN_FLOW),
      a = t.data.data,
      n = (a.spinId, a.test),
      o = {
        ratioIndex: _dependency5.default.ratioIndex,
        ratioValue: _dependency5.default.ratioValue,
        stakeIndex: _dependency5.default.stakeIndex,
        stakeValue: _dependency5.default.stakeValue
      };
    if (0 === _dependency10.default.getData().player.balance.amount && this.data.currentGameType === _dependency9.EGameType.MAIN_GAME) return this.data.isOpenEarlyFlag = !1, e;
    if (!this.checkBalance() && this.data.currentGameType === _dependency9.EGameType.MAIN_GAME) {
      this.data.isOpenEarlyFlag = !1;
      var s = {
          text: App.getLanguage("insufficientFund", [], _dependency0.EBundles[_dependency0.EBundles.wrapper]),
          confirmCb: function () {
            d();
          },
          bbrCb: function () {
            d();
          }
        },
        d = function () {
          dispatch(_dependency8.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: _dependency11.ESpinStatus.IDLE
          });
        };
      return setTimeout(function () {
        App.gameAlert.show(s);
      }, 500), dispatch(_dependency8.SlotFrameworkEvent.STOP_AUTO_SPIN), e;
    }
    return e.add(_dependency3.FlowTrigger.CONCURRENT, new _dependency8.SlotFrameworkEvent(_dependency8.SlotFrameworkEvent.SEND_EARLY_SPIN_REQUEST, {
      spinId: "",
      stakeVO: o,
      test: n,
      forceClose: this.data.getData().spinId
    }, {
      autoComplete: !0
    })), e;
  }, o.checkBalance = function () {
    var t = {
        ratioIndex: _dependency5.default.ratioIndex,
        ratioValue: _dependency5.default.ratioValue,
        stakeIndex: _dependency5.default.stakeIndex,
        stakeValue: _dependency5.default.stakeValue
      },
      e = t.stakeValue,
      a = t.ratioValue,
      n = _dependency1.default.getData().winlineDefs.length,
      i = _dependency12.default.multiply(a, e, n);
    return _dependency10.default.getData().player.balance.amount - i >= 0;
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), n;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
