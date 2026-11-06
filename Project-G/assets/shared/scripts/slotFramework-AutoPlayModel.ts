// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
import * as _dependency4 from "./slotFramework-SlotFrameworkEvent";
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
var n, e, i, s, a;
_dependency2.cclegacy._RF.push({}, "6f832sx8eBFsZhkdE7kaAEA", "AutoPlayModel", void 0);
var c = function (t) {
  var _nativeConstructor = i;
  function i() {
    var n;
    return (n = Reflect.construct(t, [], new.target || _nativeConstructor) || this).data = {
      active: !1,
      spinsRemaining: 0
    }, n;
  }
  return _dependency.inheritsLoose(i, t), i.Instance = function () {
    return this._instance || (this._instance = new i());
  }, _dependency.createClass(i, [{
    key: "active",
    get: function () {
      return this.data.active;
    },
    set: function (t) {
      this.data.active = t;
    }
  }, {
    key: "spinsRemaining",
    get: function () {
      return this.data.spinsRemaining;
    },
    set: function (t) {
      this.data.spinsRemaining = t, dispatch(_dependency4.SlotFrameworkEvent.SET_AUTO_SPIN_COUNT, {
        data: this.data.spinsRemaining
      });
    }
  }]), i;
}(_dependency3.BaseModel);
c._instance = null;
_publish("default", c.Instance());
_dependency2.cclegacy._RF.pop();
