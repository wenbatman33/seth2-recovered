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
var e, n, i, s;
_dependency2.cclegacy._RF.push({}, "f51e2eQyQ9DX4AnIonRHuFB", "DefinitionModel", void 0);
var a = function (t) {
  var _nativeConstructor = i;
  function i() {
    return Reflect.construct(t, [], new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(i, t), i.Instance = function () {
    return this._instance || (this._instance = new i());
  }, i.prototype.setData = function (e) {
    var i, s;
    t.prototype.setData.call(this, e), this.data = _dependency.extends({}, this.data, {
      smallPrizeDelay: null != (i = this.data.smallPrizeDelay) ? i : 0,
      bigPrizeDelay: null != (s = this.data.bigPrizeDelay) ? s : 1.2
    });
  }, i;
}(_dependency3.BaseModel);
a._instance = null;
_publish("default", a.Instance());
_dependency2.cclegacy._RF.pop();
