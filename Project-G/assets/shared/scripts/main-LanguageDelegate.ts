// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as injectLanguageData };
var _export2;
export { _export2 as LanguageDelegate };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "injectLanguageData":
      _export = value;
      break;
    case "LanguageDelegate":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a;
_publish("injectLanguageData", function (t) {}), _dependency2.cclegacy._RF.push({}, "de77dZMRVZDYY4iKST+8vLn", "LanguageDelegate", void 0);
_publish("LanguageDelegate", function () {
  function t() {
    this.bundle = void 0, this.datas = new Map(), this._arrLanguages = [], this.init();
  }
  var a = t.prototype;
  return a.add = function (t) {
    this.datas.set(t.language, t), this._arrLanguages.push(t.language);
  }, a.merge = function (t, e) {
    var a = this.datas.get(t);
    return a && (e[this.bundle] = a.data), e;
  }, a.importLanguages = function (t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
      var a = t[e];
      this.add(a);
    }
  }, _dependency.createClass(t, [{
    key: "supportLanguages",
    get: function () {
      return this._arrLanguages.slice();
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();
