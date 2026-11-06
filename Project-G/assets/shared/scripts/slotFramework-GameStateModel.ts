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
var e, n, s;
_dependency2.cclegacy._RF.push({}, "3c85cWr+Q1LhZUJsIPF/oWw", "GameStateModel", void 0);
var c = function (t) {
  var _nativeConstructor = n;
  function n() {
    var e;
    return (e = Reflect.construct(t, [], new.target || _nativeConstructor) || this).data = null, e;
  }
  return _dependency.inheritsLoose(n, t), n.Instance = function () {
    return this._instance || (this._instance = new n());
  }, n;
}(_dependency3.BaseModel);
c._instance = null;
_publish("default", c.Instance());
_dependency2.cclegacy._RF.pop();
