// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Flow";
var _export;
export { _export as FlowManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FlowManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o, l;
_dependency.cclegacy._RF.push({}, "3d4c4EHqDxJSYCJxxKnXK1x", "FlowManager", void 0), _publish("FlowManager", function () {
  function t() {
    this.module = null, this.Flow = _dependency2.default, this.flowsMap = new Map();
  }
  var o = t.prototype;
  return o.registerFlow = function (t) {
    this.flowsMap.get(t.flowId) ? this.flowsMap.get(t.flowId).push(t) : this.flowsMap.set(t.flowId, [t]), t.start();
  }, o.getFlow = function (t) {
    return this.flowsMap.get(t) ? this.flowsMap.get(t)[0] : null;
  }, o.killFlow = function (t) {
    var o = this.flowsMap.get(t);
    o && (o.reverse(), o.forEach(function (t) {
      t.kill();
    }), this.flowsMap.clear());
  }, o.killAllFlow = function () {
    this.flowsMap.forEach(function (t, o) {
      t.forEach(function (t) {
        t.kill();
      });
    }), this.flowsMap.clear();
  }, o.killOneFlow = function (t) {
    var o = this.flowsMap.get(t);
    if (o) {
      for (var l = 0; l < o.length; l++) o[l].kill();
      this.flowsMap.delete(t);
    }
  }, o.debug = function () {
    Log.d("-------Flow流程快取資訊-------"), this.flowsMap.forEach(function (t, o) {
      Log.d(o);
    });
  }, t;
}()).module = "【flow 流程管理】", _dependency.cclegacy._RF.pop();
