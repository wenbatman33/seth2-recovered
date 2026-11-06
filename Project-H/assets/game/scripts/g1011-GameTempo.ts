// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as GameTempo };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameTempo":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var _;
_dependency.cclegacy._RF.push({}, "c2f2d6pxAhJLZ2mziCCOJNK", "GameTempo", void 0);
var t = _publish("GameTempo", function () {});
t.LOADING_BAR_FINISH_DELAY_TIME = 1, t.SHOW_ALL_LINE_DELAY_TIME = 1, t.FUNCTION_ANIM_TO_WIN_DELAY = .5, _dependency.cclegacy._RF.pop();
