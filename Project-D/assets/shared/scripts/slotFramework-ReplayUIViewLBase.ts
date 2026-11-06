// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-ReplayUIViewBase";
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
var t, r, i, n;
var u;
_dependency2.cclegacy._RF.push({}, "e3c62a91KBJToQFMKtafZoN", "ReplayUIViewLBase", void 0);
var a = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", a("AutoSpinView")(u = function (e) {
  var _nativeConstructor = r;
  function r() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(r, e), r.getPrefabUrl = function () {
    return "prefabs/ui/ReplayUIViewL";
  }, r;
}(_dependency3.default)) || u);
_dependency2.cclegacy._RF.pop();
