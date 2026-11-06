// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as FlowIDs };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FlowIDs":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var O;
var L;
_publish("FlowIDs", void 0), _dependency.cclegacy._RF.push({}, "ef0c0deI5FLlYNOqHyX3PsA", "FlowIDs", void 0), function (_) {
  _.UNKNOWN = "UNKNOWN", _.SPIN_FLOW = "SPIN_FLOW", _.STOP_SPIN_FLOW = "STOP_SPIN_FLOW", _.CLOSE_SPIN_FLOW = "CLOSE_SPIN_FLOW", _.SPIN_CLOSED_FLOW = "SPIN_CLOSED_FLOW", _.RESUME_FLOW = "RESUME_FLOW", _.QUICK_STOP_FLOW = "QUICK_STOP_FLOW", _.EARLY_SPIN_FLOW = "EARLY_SPIN_FLOW", _.NEXT_SPIN_FLOW = "NEXT_SPIN_FLOW", _.SHOW_FG_INTRO_FLOW = "SHOW_FG_INTRO_FLOW", _.SHOW_FG_SUMMARY_FLOW = "SHOW_FG_SUMMARY_FLOW", _.EMPTY_SPIN_FLOW = "EMPTY_SPIN_FLOW", _.QUICK_STOP_EMPTY_FLOW = "QUICK_STOP_EMPTY_FLOW", _.REPLAY_SPIN_FLOW = "REPLAY_SPIN_FLOW", _.REPLAY_STOP_SPIN_FLOW = " REPLAY_STOP_SPIN_FLOW", _.REPLAY_CLOSE_SPIN_FLOW = "REPLAY_CLOSE_SPIN_FLOW", _.REPLAY_RESUME_FLOW = "REPLAY_RESUME_FLOW", _.REPLAY_QUICK_STOP_FLOW = "REPLAY_QUICK_STOP_FLOW", _.REPLAY_NEXT_SPIN_FLOW = "REPLAY_NEXT_SPIN_FLOW", _.REPLAY_SHOW_FG_INTRO_FLOW = "REPLAY_SHOW_FG_INTRO_FLOW", _.REPLAY_SHOW_FG_SUMMARY_FLOW = "REPLAY_SHOW_FG_SUMMARY_FLOW";
}(L || (L = _publish("FlowIDs", {}))), _dependency.cclegacy._RF.pop();
