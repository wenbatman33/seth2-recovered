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
var t;
_dependency.cclegacy._RF.push({}, "42f90NVoY9ILa2yvM+nUK5q", "GlobalModel", void 0);
var n = _publish("GlobalModel", function () {
  function e() {}
  return e.GetCurrSpinData = function () {
    return e.GameStates && e.GameStates.length > 0 && e.GameStates[e.currSpinIndex] || null;
  }, e;
}());
n.InitialResponse = void 0, n.GameStates = [], n.Platform = void 0, n.SpinResponse = void 0, n.currSpinIndex = 0, n.isInit = !1, _dependency.cclegacy._RF.pop();
