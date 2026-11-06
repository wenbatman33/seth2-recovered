// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-OnlyEventComponent";
var _export;
export { _export as BaseModel };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BaseModel":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o;
_dependency2.cclegacy._RF.push({}, "750232jb11PsIMtQrrhFUkO", "BaseModel", void 0);
_publish("BaseModel", function (t) {
  var _nativeConstructor = o;
  _dependency.inheritsLoose(o, t);
  var n = o.prototype;
  function o() {
    var e;
    return (e = Reflect.construct(t, [], new.target || _nativeConstructor) || this).data = void 0, e;
  }
  return n.getData = function () {
    return this.data;
  }, n.setData = function (t) {
    this.data = t;
  }, o;
}(_dependency3.default));
_dependency2.cclegacy._RF.pop();
