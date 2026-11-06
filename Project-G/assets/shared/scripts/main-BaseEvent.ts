// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as BaseEvent };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BaseEvent":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
_dependency.cclegacy._RF.push({}, "1e915HrXdhM+ZB0zWT8k5Cv", "BaseEvent", void 0);
_publish("BaseEvent", function (t, e) {
  this.complete = void 0, this.name = void 0, this.data = void 0, this.name = t, this.data = e;
});
_dependency.cclegacy._RF.pop();
