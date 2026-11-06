// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EReelStatus };
var _export2;
export { _export2 as EScrollDirection };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EReelStatus":
      _export = value;
      break;
    case "EScrollDirection":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var R;
var N, O;
_publish({
  EReelStatus: void 0,
  EScrollDirection: void 0
}), _dependency.cclegacy._RF.push({}, "fd84au6EUlFf4T53oRzTowz", "ReelEnum", void 0), function (S) {
  S[S.NONE = 0] = "NONE", S[S.FINISH = 1] = "FINISH", S[S.LOOP_SCROLLING = 2] = "LOOP_SCROLLING", S[S.SCROLLING = 3] = "SCROLLING", S[S.END_SCROLL = 4] = "END_SCROLL", S[S.STOPPING = 5] = "STOPPING", S[S.DIRECT_SHOW_STOP = 6] = "DIRECT_SHOW_STOP", S[S.START_SPIN = 7] = "START_SPIN", S[S.ROUND_START = 8] = "ROUND_START", S[S.WAITING = 9] = "WAITING";
}(N || (N = _publish("EReelStatus", {}))), function (S) {
  S[S.UP = 0] = "UP", S[S.DOWN = 1] = "DOWN", S[S.LEFT = 2] = "LEFT", S[S.RIGHT = 3] = "RIGHT";
}(O || (O = _publish("EScrollDirection", {}))), _dependency.cclegacy._RF.pop();
