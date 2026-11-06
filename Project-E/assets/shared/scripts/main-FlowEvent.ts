// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseEvent";
var _export;
export { _export as FlowEvent };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FlowEvent":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, o;
_dependency2.cclegacy._RF.push({}, "b115ctfVDBOXI3fhj1Fquw9", "FlowEvent", void 0);
_publish("FlowEvent", function (e) {
  var _nativeConstructor = n;
  function n(t, n, o) {
    var u;
    return (u = Reflect.construct(e, [t, n], new.target || _nativeConstructor) || this).autoComplete = !1, u.delay = void 0, o ? (u.autoComplete = o.autoComplete, u.delay = o.delay) : u.delay = 0, u;
  }
  return _dependency.inheritsLoose(n, e), n;
}(_dependency3.BaseEvent));
_dependency2.cclegacy._RF.pop();
