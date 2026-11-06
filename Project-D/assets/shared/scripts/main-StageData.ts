// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Update";
import * as _dependency4 from "./main-CmmGameData";
import * as _dependency5 from "./main-Macros";
import * as _dependency6 from "./main-Bundles";
var _export;
export { _export as StageData };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "StageData":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, s, r, a, i, c;
_dependency2.cclegacy._RF.push({}, "c284cIfNW5DV5M9KCSAIfPf", "StageData", void 0), _publish("StageData", function (e) {
  var _nativeConstructor = s;
  function s() {
    for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(s).slice(1), new.target || _nativeConstructor) || this)._sceneStack = [], t._where = _dependency5.Macro.UNKNOWN, t._entrys = new Map(), t._games = [], t;
  }
  _dependency.inheritsLoose(s, e);
  var a = s.prototype;
  return a.init = function () {
    var t = this;
    e.prototype.init.call(this);
    var n = App.getLanguage("bundles"),
      s = Object.keys(n);
    this._entrys.clear(), s.forEach(function (e) {
      var s = n[e],
        a = new _dependency3.Update.Config("bundles." + e + ".name", e);
      t._entrys.set(e, a), e != _dependency6.EBundles[_dependency6.EBundles.wrapper] && e != _dependency5.Macro.BUNDLE_RESOURCES && t._games.push({
        name: s.name,
        sort: s.sort,
        language: "bundles." + e + ".name",
        bundle: e
      });
    }), this._games.sort(function (e, t) {
      return e.sort - t.sort;
    });
  }, a.isLoginStage = function (e) {
    return e ? e == _dependency5.Macro.BUNDLE_RESOURCES : this.where == _dependency5.Macro.BUNDLE_RESOURCES;
  }, a.isWrapperStage = function (e) {
    return e ? e == _dependency6.EBundles[_dependency6.EBundles.wrapper] : this.where == _dependency6.EBundles[_dependency6.EBundles.wrapper];
  }, a.getEntry = function (e) {
    return this._entrys.get(e);
  }, a.push = function (e) {
    for (var t = 0, n = this._sceneStack.length - 1; n >= 0; n--) {
      if (this._sceneStack[n] == e) {
        t = this._sceneStack.length - n;
        break;
      }
    }
    for (; t > 0;) this._sceneStack.pop(), t--;
    this._sceneStack.push(e), Log.d(this.module + "壓入場景 : " + e), Log.d(this.module + "當前場景堆疊 : " + this._sceneStack.toString());
  }, _dependency.createClass(s, [{
    key: "where",
    get: function () {
      return this._where;
    },
    set: function (e) {
      Log.d("" + this.module + this._where + " ==> " + e);
      var t = this._where;
      this._where = e, t != e && this.push(e);
    }
  }, {
    key: "games",
    get: function () {
      return this._games;
    }
  }, {
    key: "prevWhere",
    get: function () {
      var e = void 0;
      return this._sceneStack.length >= 2 && (e = this._sceneStack[this._sceneStack.length - 2]), Log.d(this.module + "獲取的上一場景 : " + e), e;
    }
  }]), s;
}(_dependency4.CmmGameData)).module = "【Stage資料】", _dependency2.cclegacy._RF.pop();
