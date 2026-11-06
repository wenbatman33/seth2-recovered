// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-index";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency5 from "./g1002-GameData";
import * as _dependency6 from "./g1002-GameState";
import * as _dependency7 from "../../shared/scripts/main-fsm";
var _export;
export { _export as ReplayState };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReplayState":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, r, i, s, c;
_dependency2.cclegacy._RF.push({}, "0732bdRX15HMakehKf4Rgz0", "ReplayState", void 0);
_publish("ReplayState", function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var e, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).stateMachine = null, e;
  }
  return _dependency.inheritsLoose(n, t), n.prototype.getMachine = function () {
    return null == this.stateMachine && (this.stateMachine = _dependency7.StateMachine.from(this.GET_ALL_STATES(), {
      sharedData: App.dataCenter.get(_dependency5.default)
    })), this.stateMachine;
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), n;
}(_dependency6.GameState));
_dependency2.cclegacy._RF.pop();
