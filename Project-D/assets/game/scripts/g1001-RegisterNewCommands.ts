// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency4 from "./g1001-GameEvent";
import * as _dependency5 from "./g1001-CreateReplayFlow";
import * as _dependency6 from "./g1001-CreateReplaySpinCompleteFlowCmd";
import * as _dependency7 from "./g1001-CreateReplayStopSpinFlowCmd";
import * as _dependency8 from "./g1001-CreateReplaySpinFlowCmd";
import * as _dependency9 from "./g1001-CreateReplayCloseSpinFlowCmd";
import * as _dependency0 from "./g1001-CreateReplayQuickStopFlowCmd";
import * as _dependency1 from "./g1001-CreateNewSpinFlowCmd";
import * as _dependency10 from "./g1001-CreateNewStopSpinFlowCmd";
import * as _dependency11 from "./g1001-CreateNewSpinCompleteFlowCmd";
import * as _dependency12 from "./g1001-NewSpinClosedCmd";
import * as _dependency13 from "./g1001-CreateNewCloseSpinFlowCmd";
import * as _dependency14 from "./g1001-CreateNewQuickStopFlowCmd";
import * as _dependency15 from "./g1001-CreateNewResumeFlowCmd";
import * as _dependency16 from "./g1001-CreateNewEarlySpinFlowCmd";
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
var e, n, t, d, o, m, C, p, u, c, l, i, r, E, _, s, f, S;
_dependency2.cclegacy._RF.push({}, "15ea3BISCdBrqzfShcdOAw1", "RegisterNewCommands", void 0);
_publish("default", function (a) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(a, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, a), n.prototype.execute = function () {
    App.commandManager.addCommand(_dependency4.GameEvent.CREATE_SPIN_FLOW, _dependency1.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_STOP_SPIN_FLOW, _dependency10.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_SPIN_COMPLETE_FLOW, _dependency11.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_CLOSE_SPIN_FLOW, _dependency13.default), App.commandManager.addCommand(_dependency4.GameEvent.SPIN_CLOSED_FLOW, _dependency12.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_RESUME_FLOW, _dependency15.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_QUICK_STOP_FLOW, _dependency14.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_EARLY_SPIN_FLOW, _dependency16.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_REPLAY_FLOW, _dependency5.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_REPLAY_SPIN_FLOW, _dependency8.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_REPLAY_STOP_SPIN_FLOW, _dependency7.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, _dependency6.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_REPLAY_CLOSE_SPIN_FLOW, _dependency9.default), App.commandManager.addCommand(_dependency4.GameEvent.CREATE_REPLAY_QUICK_STOP_FLOW, _dependency0.default);
  }, n;
}(_dependency3.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
