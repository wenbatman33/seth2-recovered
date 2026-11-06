// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
var _export;
export { _export as EReadyStatus };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EReadyStatus":
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
var e, a, n;
var s;
_publish("EReadyStatus", void 0), _dependency2.cclegacy._RF.push({}, "7cb4a+S7OBDAJkrFJczd/g4", "ReadyBundleModel", void 0), function (t) {
  t[t.init = 0] = "init", t[t.loading = 1] = "loading", t[t.complete = 2] = "complete";
}(s || (s = _publish("EReadyStatus", {})));
var o = function (t) {
  var _nativeConstructor = a;
  function a() {
    var e;
    return (e = Reflect.construct(t, [], new.target || _nativeConstructor) || this).data = {
      loadCompleteMap: new Map(),
      status: null
    }, e;
  }
  _dependency.inheritsLoose(a, t), a.Instance = function () {
    return this._instance || (this._instance = new a());
  };
  var n = a.prototype;
  return n.checkComplete = function () {
    return Array.from(this.data.loadCompleteMap.values()).every(function (t) {
      return !0 === t;
    });
  }, n.init = function (t) {
    var e = this;
    this.data.status = s.init, t.forEach(function (t) {
      e.data.loadCompleteMap.set(t, !1);
    });
  }, n.setComplete = function (t) {
    this.data.status = s.loading, this.data.loadCompleteMap.set(t, !0), this.checkComplete() && (this.data.status = s.complete);
  }, n.isComplete = function () {
    return this.data.status === s.complete;
  }, n.reset = function () {
    this.data = {
      loadCompleteMap: new Map(),
      status: null
    };
  }, a;
}(_dependency3.BaseModel);
o._instance = null;
_publish("default", o.Instance());
_dependency2.cclegacy._RF.pop();
