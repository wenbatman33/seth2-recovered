// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-ProtoMessage";
var _export;
export { _export as CmmProto };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CmmProto":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o, e, n;
_dependency2.cclegacy._RF.push({}, "b35e78QVExCGoTgRGudayLT", "CmmProto", void 0);
_publish("CmmProto", function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var o, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return (o = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).cmd = "", o.mainCmd = 0, o.subCmd = 0, o;
  }
  return _dependency.inheritsLoose(e, t), e;
}(_dependency3.ProtoMessage));
_dependency2.cclegacy._RF.pop();
