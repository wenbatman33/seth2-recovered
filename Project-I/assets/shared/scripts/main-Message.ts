// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as IMessage };
var _export2;
export { _export2 as Codec };
var _export3;
export { _export3 as Message };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "IMessage":
      _export = value;
      break;
    case "Codec":
      _export2 = value;
      break;
    case "Message":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n;
_dependency2.cclegacy._RF.push({}, "9cc72ae641Axan45m+M6GpV", "Message", void 0);
var s = _publish("IMessage", function () {
  this.buffer = void 0;
});
_publish("Codec", function (e) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, e), n;
}(s)), _publish("Message", function (e) {
  var _nativeConstructor2 = n;
  function n() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor2) || this;
  }
  return _dependency.inheritsLoose(n, e), n;
}(s));
_dependency2.cclegacy._RF.pop();
