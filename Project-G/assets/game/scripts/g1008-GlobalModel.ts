// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as GlobalModel };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GlobalModel":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
_dependency.cclegacy._RF.push({}, "81ada9SSY1BtaYlVG56Yk3n", "GlobalModel", void 0);
var n = _publish("GlobalModel", function () {
  function t() {}
  return t.GetCurrSpinData = function () {
    return t.GameStates && t.GameStates.length > 0 && t.GameStates[t.currSpinIndex] || null;
  }, t;
}());
n.InitialResponse = void 0, n.GameStates = [], n.Platform = void 0, n.SpinResponse = void 0, n.currSpinIndex = 0, n.isInit = !1, _dependency.cclegacy._RF.pop();
