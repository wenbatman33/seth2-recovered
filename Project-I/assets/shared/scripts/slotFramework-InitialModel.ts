// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
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
var t, e, i;
_dependency2.cclegacy._RF.push({}, "3d070+e275Lhb8L24/HmHW8", "InitialModel", void 0);
var s = function (n) {
  var _nativeConstructor = e;
  function e() {
    return Reflect.construct(n, [], new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(e, n), e.Instance = function () {
    return this._instance || (this._instance = new e());
  }, e.prototype.reset = function () {}, e;
}(_dependency3.BaseModel);
s._instance = null;
_publish("default", s.Instance());
_dependency2.cclegacy._RF.pop();
