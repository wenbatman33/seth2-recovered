// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-JpBarControllerBase";
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
var t, e, o, n;
var c;
_dependency2.cclegacy._RF.push({}, "3943bAtRoFBdYHv/kbH8NCD", "JpBarControllerL", void 0);
var l = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", l("JpBarControllerL")(c = function (r) {
  var _nativeConstructor = e;
  function e() {
    return Reflect.construct(r, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(e, r), e;
}(_dependency3.default)) || c);
_dependency2.cclegacy._RF.pop();
