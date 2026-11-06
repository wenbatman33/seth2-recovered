// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as defineState };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "defineState":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, r;
_publish("defineState", function (t) {
  var r;
  return _dependency.extends({}, t, {
    transitionGuard: null != (r = t.transitionGuard) ? r : function () {
      return !0;
    },
    transitionTo: function (n) {
      var r = null == t.transitionTo ? void 0 : t.transitionTo(n);
      return r instanceof Promise ? r.then(function (t) {
        return null != t ? t : "";
      }) : null != r ? r : "";
    }
  });
}), _dependency2.cclegacy._RF.push({}, "934d713uR5Nyo4dLtKaG+oQ", "StateFactory", void 0), _dependency2.cclegacy._RF.pop();
