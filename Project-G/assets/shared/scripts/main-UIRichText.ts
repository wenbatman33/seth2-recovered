// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
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
var e, i, r, n, o, a, u, p, s, l;
var c, y, g, h, d, f, _, b, m, D, v;
_dependency2.cclegacy._RF.push({}, "c60049vLz5LvZDBP64ObpCM", "UIRichText", void 0);
var L = _dependency2._decorator.ccclass,
  w = _dependency2._decorator.property,
  O = _dependency2._decorator.menu,
  k = _dependency2.Enum(App.Bundles);
_publish("default", (c = O("Quick渲染元件/UIRichText"), y = w({
  displayName: "語言包所在Bundle",
  type: k,
  tooltip: "語言包所在bundle"
}), g = w({
  displayName: "語言包Key",
  tooltip: "所在Bundle中語言包的key,如果語言包在Bundle內，請先用injectLanguageData裝飾語言包資料代理類"
}), h = w({
  displayName: "語言包附加引數",
  tooltip: "附加引數，如果語言包中有 xx{0}{1},有兩個佔位的引數需要替換",
  type: _dependency2.CCString
}), d = w({
  displayName: "是否啟用多語言",
  tooltip: "是否啟用多語言,預設為啟用"
}), L(f = c((b = _dependency.applyDecoratedDescriptor((_ = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "_lan", b, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_bundle", m, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_params", D, _dependency.assertThisInitialized(e)), e._isDirty = !0, _dependency.initializerDefineProperty(e, "_mult", v, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this), App.language.add(this), this.update(0);
  }, a.onDestroy = function () {
    App.language.remove(this), t.prototype.onDestroy.call(this);
  }, a.update = function (e) {
    t.prototype.update && t.prototype.update.call(this, e), this._isDirty && (this.forceDoLayout(), this._isDirty = !1);
  }, a.forceDoLayout = function () {
    if (this.isUseMultilingual) {
      var t = this.bundle,
        e = k[t],
        i = App.getLanguage(this.language, this.params, e);
      this.string = i;
    }
  }, _dependency.createClass(e, [{
    key: "bundle",
    get: function () {
      return this._bundle;
    },
    set: function (t) {
      this._bundle != t && (this._bundle = t, this._isDirty = !0);
    }
  }, {
    key: "language",
    get: function () {
      return this._lan;
    },
    set: function (t) {
      this.language != t && (this._lan = t, this._isDirty = !0);
    }
  }, {
    key: "params",
    get: function () {
      return this._params;
    },
    set: function (t) {
      this._params = t, this._isDirty = !0;
    }
  }, {
    key: "isUseMultilingual",
    get: function () {
      return this._mult;
    },
    set: function (t) {
      t != this._mult && (this._mult = t, this._isDirty = !0);
    }
  }]), e;
}(_dependency2.RichText)).prototype, "_lan", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), m = _dependency.applyDecoratedDescriptor(_.prototype, "_bundle", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return k.resources;
  }
}), D = _dependency.applyDecoratedDescriptor(_.prototype, "_params", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), v = _dependency.applyDecoratedDescriptor(_.prototype, "_mult", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), _dependency.applyDecoratedDescriptor(_.prototype, "bundle", [y], Object.getOwnPropertyDescriptor(_.prototype, "bundle"), _.prototype), _dependency.applyDecoratedDescriptor(_.prototype, "language", [g], Object.getOwnPropertyDescriptor(_.prototype, "language"), _.prototype), _dependency.applyDecoratedDescriptor(_.prototype, "params", [h], Object.getOwnPropertyDescriptor(_.prototype, "params"), _.prototype), _dependency.applyDecoratedDescriptor(_.prototype, "isUseMultilingual", [d], Object.getOwnPropertyDescriptor(_.prototype, "isUseMultilingual"), _.prototype), f = _)) || f) || f));
_dependency2.cclegacy._RF.pop();
