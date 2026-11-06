// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EActionType };
var _export2;
export { _export2 as EGameType };
var _export3;
export { _export3 as EPool };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EActionType":
      _export = value;
      break;
    case "EGameType":
      _export2 = value;
      break;
    case "EPool":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n;
var o, t, i;
_publish({
  EActionType: void 0,
  EGameType: void 0,
  EPool: void 0
}), _dependency.cclegacy._RF.push({}, "591d7zNLMlNN42kISbf19kO", "types", void 0), function (e) {
  e.SYMBOL_POOL = "symbolPool";
}(o || (o = _publish("EPool", {}))), function (e) {
  e.MAIN_GAME = "mainGame", e.FREE_GAME = "freeGame";
}(t || (t = _publish("EGameType", {}))), function (e) {
  e.SPIN = "spin", e.FREE_GAME = "freeSpin", e.SUPER_GAME = "superSpin";
}(i || (i = _publish("EActionType", {}))), _dependency.cclegacy._RF.pop();
