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
var t, e, a, s;
_dependency2.cclegacy._RF.push({}, "6bca0ezahNCG73kgC8kMpBI", "UserModel", void 0);
var c = function (n) {
  var _nativeConstructor = a;
  function a() {
    var t;
    return (t = Reflect.construct(n, [], new.target || _nativeConstructor) || this).data = {
      balance: null,
      token: null
    }, t;
  }
  return _dependency.inheritsLoose(a, n), a.Instance = function () {
    return this._instance || (this._instance = new a());
  }, a.prototype.reset = function () {
    this.data = {
      balance: null,
      token: null
    };
  }, _dependency.createClass(a, [{
    key: "balance",
    get: function () {
      return this.data.balance;
    },
    set: function (n) {
      this.data.balance = n;
    }
  }]), a;
}(_dependency3.BaseModel);
c._instance = null;
_publish("default", c.Instance());
_dependency2.cclegacy._RF.pop();
