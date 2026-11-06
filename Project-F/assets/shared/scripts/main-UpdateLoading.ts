// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Loading";
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
var n, e, i;
_dependency2.cclegacy._RF.push({}, "634b97zYMlAP5z8Buea/nWN", "UpdateLoading", void 0), _publish("default", function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var n, e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
    return (n = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).module = null, n;
  }
  _dependency.inheritsLoose(e, t);
  var i = e.prototype;
  return i.show = function (t, n, e) {
    return this.timeOutCb = void 0, this._show(999), this._content = [], "string" == typeof t && this._content.push(t), this;
  }, i.startShowContent = function () {
    this.text.string = this._content[0];
  }, i.updateProgress = function (t) {
    if (this.text) {
      if (null == t || null == t || Number.isNaN(t) || t < 0) return void this.hide();
      t >= 0 && t <= 100 && (this.text.string = App.getLanguage("loadingProgress", [t]));
    }
  }, e;
}(_dependency3.default)).module = "【UpdateLoading】", _dependency2.cclegacy._RF.pop();
