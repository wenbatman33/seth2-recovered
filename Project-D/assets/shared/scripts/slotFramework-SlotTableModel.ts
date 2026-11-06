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
var t, e, l;
_dependency2.cclegacy._RF.push({}, "b7116jTPJlFUJ/xo+LmaS+n", "SlotTableModel", void 0);
var u = function (n) {
  var _nativeConstructor = e;
  function e() {
    var t;
    return (t = Reflect.construct(n, [], new.target || _nativeConstructor) || this).data = {
      bet: null,
      number: null,
      roomId: null,
      status: null,
      win: null
    }, t;
  }
  return _dependency.inheritsLoose(e, n), e.Instance = function () {
    return this._instance || (this._instance = new e());
  }, e;
}(_dependency3.BaseModel);
u._instance = null;
_publish("default", u.Instance());
_dependency2.cclegacy._RF.pop();
