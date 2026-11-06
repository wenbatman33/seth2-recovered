// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
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
var e;
_dependency.cclegacy._RF.push({}, "de5b2AOED5K+LOaUiobQCy5", "Queue", void 0);
_publish("default", function () {
  function t() {
    this.temp = [];
  }
  var e = t.prototype;
  return e.Queue = function () {
    this.temp = [];
  }, e.enqueue = function (t) {
    this.temp.push(t);
  }, e.dequeue = function () {
    return this.temp.shift();
  }, e.front = function () {
    return this.temp[0];
  }, e.size = function () {
    return this.temp.length;
  }, e.isEmpty = function () {
    return 0 === this.temp.length;
  }, e.clear = function () {
    this.temp = [];
  }, t;
}());
_dependency.cclegacy._RF.pop();
