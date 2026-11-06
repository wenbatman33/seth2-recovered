// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as injectColorData };
var _export2;
export { _export2 as ColorProxy };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "injectColorData":
      _export = value;
      break;
    case "ColorProxy":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o;
_publish("injectColorData", function (t) {}), _dependency.cclegacy._RF.push({}, "dce5fFimkxGyYeB+PcKCJ9U", "ColorProxy", void 0);
_publish("ColorProxy", function () {
  function t() {
    this.bundle = void 0, this.datas = new Map(), this.init();
  }
  var o = t.prototype;
  return o.add = function (t) {
    t.mode ? this.datas.set(t.mode, t) : this.datas.set("enum", t);
  }, o.merge = function (t, o) {
    var e = this.datas.get(t);
    return e && (o[this.bundle] = e.data), o;
  }, o.importColors = function (t) {
    for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
      var e = t[o];
      this.add(e);
    }
  }, t;
}());
_dependency.cclegacy._RF.pop();
