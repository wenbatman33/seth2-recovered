// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-StaticConfig";
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
var n, i, c;
_dependency.cclegacy._RF.push({}, "fe94ax4zHxIAKBHy5c0OFVK", "StaticCmd", void 0);
_publish("default", function () {
  function t() {}
  return t.getInitial = function () {
    return _dependency2.initial;
  }, t.getSpin = function () {
    return _dependency2.spin;
  }, t;
}());
_dependency.cclegacy._RF.pop();
