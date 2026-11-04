// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/ReplayState.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-index";
import * as __dependency_3 from "../../shared/scripts/framework-SlotFrameworkData";
import * as __dependency_4 from "./g1007-GameData";
import * as __dependency_5 from "./g1007-GameState";
import * as __dependency_6 from "../../shared/scripts/main-fsm";
var __export_0;
export { __export_0 as ReplayState };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReplayState":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, r, i, s, u;
__dependency_1.cclegacy._RF.push({}, "1e605pimb9Hr75wUHLMXFHu", "ReplayState", void 0);
__publish("ReplayState", function (t) {
  function n() {
    for (var e, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || this.constructor) || this).stateMachine = null, e;
  }
  return __dependency_0.inheritsLoose(n, t), n.prototype.getMachine = function () {
    return null == this.stateMachine && (this.stateMachine = __dependency_6.StateMachine.from(this.GET_ALL_STATES(), {
      sharedData: App.dataCenter.get(__dependency_4.default)
    })), this.stateMachine;
  }, __dependency_0.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_4.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_3.default);
    }
  }]), n;
}(__dependency_5.GameState));
__dependency_1.cclegacy._RF.pop();
