// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EOrientationType };
var _export2;
export { _export2 as AdapterEvent };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EOrientationType":
      _export = value;
      break;
    case "AdapterEvent":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
var n;
_publish("EOrientationType", void 0), _dependency.cclegacy._RF.push({}, "d9a7aD7569KrqVOg8LRk4nF", "AdapterEvent", void 0), _publish("AdapterEvent", function () {}).ORIENTATION = "AdapterEvent:ORIENTATION", function (t) {
  t[t.LANDSCAPE = 0] = "LANDSCAPE", t[t.PORTRAIT = 1] = "PORTRAIT";
}(n || (n = _publish("EOrientationType", {}))), _dependency.cclegacy._RF.pop();
