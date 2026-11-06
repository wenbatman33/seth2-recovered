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
var e;
_dependency.cclegacy._RF.push({}, "7b33cbueq9FdpGT0ebQKKEv", "res-type", void 0), _dependency.cclegacy._RF.pop();
