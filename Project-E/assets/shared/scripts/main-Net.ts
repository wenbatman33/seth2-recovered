// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as Net };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Net":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
var o, n, r, c;
_publish("Net", void 0), _dependency.cclegacy._RF.push({}, "5d6ecXdPidA1pmDJolUfMzo", "Net", void 0), n = o || (o = _publish("Net", {})), function (t) {
  t[t.Unknown = 0] = "Unknown", t[t.Json = 1] = "Json", t[t.Proto = 2] = "Proto", t[t.BinaryStream = 3] = "BinaryStream";
}(r || (r = {})), n.ServiceType = r, c || (c = n.Proto || (n.Proto = {})), _dependency.cclegacy._RF.pop();
