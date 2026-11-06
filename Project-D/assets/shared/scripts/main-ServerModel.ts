// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
var _export;
export { _export as EServerMode };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EServerMode":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r, s;
var o;
_publish("EServerMode", void 0), _dependency2.cclegacy._RF.push({}, "24183MNqbhJ2Kqy5ZQAANyA", "ServerModel", void 0), function (e) {
  e[e.STATIC = 0] = "STATIC", e[e.ONLINE = 1] = "ONLINE";
}(o || (o = _publish("EServerMode", {})));
var i = function (e) {
  var _nativeConstructor = r;
  function r() {
    var t;
    return (t = Reflect.construct(e, [], new.target || _nativeConstructor) || this).data = {
      mode: o.ONLINE
    }, t;
  }
  return _dependency.inheritsLoose(r, e), r.Instance = function () {
    return this._instance || (this._instance = new r());
  }, _dependency.createClass(r, [{
    key: "mode",
    get: function () {
      return this.data.mode;
    },
    set: function (e) {
      this.data.mode = e;
    }
  }]), r;
}(_dependency3.BaseModel);
i._instance = null;
_publish("default", i.Instance());
_dependency2.cclegacy._RF.pop();
