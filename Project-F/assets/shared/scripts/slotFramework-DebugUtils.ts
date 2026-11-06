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
var t;
_dependency.cclegacy._RF.push({}, "d545a3dF9BMcZokVI2bty4x", "DebugUtils", void 0);
_publish("default", function () {
  function e() {}
  return e.calculateDifferences = function (e) {
    var t = [],
      n = void 0,
      c = void 0;
    e.forEach(function (e, u) {
      if (void 0 !== n) {
        var o = {
          key: c + " -> " + u,
          value: e - n
        };
        t.push(o);
      }
      n = e, c = u;
    }), console.log("keys: ", e.keys()), console.warn("差值計算: ", t, t.map(function (e) {
      return e.value;
    }));
  }, e;
}());
_dependency.cclegacy._RF.pop();
