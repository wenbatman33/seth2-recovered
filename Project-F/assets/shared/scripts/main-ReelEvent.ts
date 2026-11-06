// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as SingleReelEvents };
var _export2;
export { _export2 as ReelControllerEvents };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingleReelEvents":
      _export = value;
      break;
    case "ReelControllerEvents":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var E;
_dependency.cclegacy._RF.push({}, "81688XI/bRNsY7pH+OYtEQP", "ReelEvent", void 0);
var R = "SINGLE_REEL_",
  _ = (_publish("SingleReelEvents", {
    START_SPIN: R + "START_SPIN",
    START_EXPECT: R + "START_EXPECT",
    END_SCROLL: R + "END_SCROLL",
    FINISH: R + "FINISH"
  }), "REEL_CONTROLLER_");
_publish("ReelControllerEvents", {
  FINISH_EVENT: _ + "FINISH_EVENT",
  START_NORMAL_SCROLL_EVENT: _ + "START_NORMAL_SCROLL_EVENT"
});
_dependency.cclegacy._RF.pop();
