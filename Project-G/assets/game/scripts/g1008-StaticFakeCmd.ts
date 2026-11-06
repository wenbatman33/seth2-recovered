// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
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
var c;
_dependency.cclegacy._RF.push({}, "884a326zwhFWIWLziSXYYnx", "StaticFakeCmd", void 0);
_publish("default", function () {});
_dependency.cclegacy._RF.pop();
