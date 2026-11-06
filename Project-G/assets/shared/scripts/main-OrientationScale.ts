// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t;
_dependency.cclegacy._RF.push({}, "2a74dcwEtJCiaps97NoauKQ", "OrientationScale", void 0), _dependency.cclegacy._RF.pop();
