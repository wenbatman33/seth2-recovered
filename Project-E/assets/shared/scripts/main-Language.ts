// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Macros";
import * as _dependency3 from "./main-Bundles";
var _export;
export { _export as Language };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Language":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, n, s;
_dependency.cclegacy._RF.push({}, "45ff7N6LYVJ7YlkpCoRmCEX", "Language", void 0);
var i = "using_language";
_publish("Language", function () {
  function e() {
    this.isResident = !0, this.module = null, this._components = [], this._data = {
      language: _dependency2.Macro.UNKNOWN
    }, this.delegates = new Map();
  }
  var t = e.prototype;
  return t.addDelegate = function (e) {
    e && (this.delegates.set(e.bundle, e), this.updateData(this.getLanguage()));
  }, t.updateData = function (e) {
    var t = this;
    this._data.language = e, this.delegates.forEach(function (a, n, s) {
      t._data = a.merge(e, t._data);
    });
  }, t.removeDelegate = function (e) {
    e && this.delegates.delete(e.bundle) && e.bundle != _dependency2.Macro.BUNDLE_RESOURCES && delete this._data[e.bundle];
  }, t.change = function (e) {
    var t = this;
    (console.info("Language delegates::::::::"), console.dir(this.delegates.get(_dependency3.EBundles[_dependency3.EBundles.resources])), this.delegates.size <= 0) || (this.delegates.get(_dependency3.EBundles[_dependency3.EBundles.resources]).supportLanguages.includes(e) || (console.error("語系設定錯誤，將使用繁體中文"), e = "zh-tw"), this._data && this._data.language == e || (this._data.language = e, _dependency2.Macro.ENABLE_CHANGE_LANGUAGE ? (this.delegates.forEach(function (a, n, s) {
      t._data = a.merge(e, t._data);
    }), this.onChangeLanguage()) : this.delegates.forEach(function (e, a, n) {
      t._data = e.merge(t.getLanguage(), t._data);
    }), Log.d(this.module, "當前語言:" + this._data.language)), App.storage.setItem(i, this._data.language));
  }, t.get = function (e) {
    var t = "";
    do {
      if (!e) break;
      if (e.length < 1) break;
      var a = e[0];
      if ("string" != typeof a) {
        Log.e("key error");
        break;
      }
      if (a.indexOf(_dependency2.Macro.USING_LAN_KEY) > -1) {
        var s = a.split(".");
        if (s.length < 2) {
          Log.e("key error");
          break;
        }
        s.shift(), e.shift();
        for (var i = null; s.length > 0;) {
          var g = s.shift();
          if (!g) {
            Log.e("語言包不存在 : " + a), t = "";
            break;
          }
          i = i ? i[g] : this._data[g];
        }
        t = "string" == typeof i ? String.format(i, e) : i;
      } else {
        var o = e.shift();
        if ("string" == typeof o) return String.format(o, e);
        t = o;
      }
    } while (0);
    return t;
  }, t.getLanguage = function () {
    var e = this.getSupportLanguages(),
      t = App.storage.getItem(i, "zh-tw");
    return e.includes(t) ? t : "zh-tw";
  }, t.getSupportLanguages = function () {
    return this.delegates.get(_dependency3.EBundles[_dependency3.EBundles.resources]).supportLanguages;
  }, t.add = function (e) {
    -1 == this._components.indexOf(e) && this._components.push(e);
  }, t.remove = function (e) {
    var t = this._components.indexOf(e);
    t >= 0 && this._components.splice(t, 1);
  }, t.onChangeLanguage = function () {
    this._components.forEach(function (e) {
      _dependency.isValid(e) && e.forceDoLayout();
    });
  }, e;
}()).module = "【語言包】", _dependency.cclegacy._RF.pop();
