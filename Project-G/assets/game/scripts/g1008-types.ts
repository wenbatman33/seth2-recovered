// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EGameType };
var _export2;
export { _export2 as EPool };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EGameType":
      _export = value;
      break;
    case "EPool":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
var i, t;
_publish({
  EGameType: void 0,
  EPool: void 0
}), _dependency.cclegacy._RF.push({}, "9c105qunZtFS5myH6SQX0az", "types", void 0), function (o) {
  o.SYMBOL_POOL = "symbolPool", o.FIREBALL_POOL = "fireballPool", o.TIMES_MOVING_POOL = "timesMovingPool", o.PURPLE_TIMES_MOVING_POOL = "purpleTimesMovingPool", o.BLUE_TIMES_MOVING_POOL = "blueTimesMovingPool", o.WIN_CASH_POOL = "winCashPool";
}(i || (i = _publish("EPool", {}))), function (o) {
  o.MAIN_GAME = "mainGame", o.FREE_GAME = "freeGame";
}(t || (t = _publish("EGameType", {}))), _dependency.cclegacy._RF.pop();
