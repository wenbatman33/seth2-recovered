// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-AvatarViewBase";
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
var e, r, a, i;
var n;
_dependency2.cclegacy._RF.push({}, "2a265/ZdjVFkbyAkdBuaCPK", "AvatarViewL", void 0);
var u = _dependency2._decorator.ccclass;
_publish("default", u("AvatarViewL")(n = function (t) {
  var _nativeConstructor = r;
  function r() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(r, t), r.getPrefabUrl = function () {
    return "prefabs/view/AvatarViewL";
  }, r;
}(_dependency3.default)) || n);
_dependency2.cclegacy._RF.pop();
