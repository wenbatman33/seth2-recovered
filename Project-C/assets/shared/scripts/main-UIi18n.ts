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
var e, i, n, o, r, s, a, p, u, l, h, c;
var y, g, z, f, b, _, S, F, d, m, L, D, U, w, O, v, H, k, P, j;
_dependency2.cclegacy._RF.push({}, "a1c47n1NB9JY5gVe5Pf0Gpk", "UIi18n", void 0);
var N = _dependency2._decorator.ccclass,
  C = _dependency2._decorator.property,
  A = _dependency2._decorator.menu,
  B = _dependency2._decorator.executeInEditMode,
  I = _dependency2.Enum(App.Bundles);
_publish("default", (y = A("Quick渲染元件/UIi18n"), g = B(), z = C({
  displayName: "語言包所在Bundle",
  type: I,
  tooltip: "語言包所在bundle"
}), f = C({
  displayName: "語言包Key",
  tooltip: "所在Bundle中語言包的key,如果語言包在Bundle內，請先用injectLanguageData裝飾語言包資料代理類"
}), b = C({
  displayName: "語言包附加引數",
  tooltip: "附加引數，如果語言包中有 xx{0}{1},有兩個佔位的引數需要替換",
  type: _dependency2.CCString
}), _ = C({
  displayName: "是否啟用多語言",
  tooltip: "是否啟用多語言,預設為啟用"
}), S = C({
  displayName: "是否啟用字型大小",
  tooltip: "是否啟用字型大小,預設為啟用"
}), F = C({
  displayName: "是否同步行高(LineHeight)",
  visible: function () {
    return this.isUseFontSize;
  },
  tooltip: "是否同步行高,預設為啟用"
}), d = C({
  displayName: "中文 字型大小",
  type: _dependency2.CCFloat,
  visible: function () {
    return this.isUseFontSize;
  },
  tooltip: "中文 字型大小"
}), m = C({
  displayName: "其他 字型大小",
  type: _dependency2.CCFloat,
  visible: function () {
    return this.isUseFontSize;
  },
  tooltip: "中文以外的字型大小"
}), N(L = y(L = g((U = _dependency.applyDecoratedDescriptor((D = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "_lan", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_bundle", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_params", O, _dependency.assertThisInitialized(e)), e._isDirty = !0, _dependency.initializerDefineProperty(e, "_mult", v, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_isUseFontSize", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_isSyncLineHeight", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_zhFontSize", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_otherFontSize", j, _dependency.assertThisInitialized(e)), e.targetLabel = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    var t = this.node.getComponent(_dependency2.Label);
    t ? (this.targetLabel = t, App.language.add(this), this.update(0)) : Log.e("錯誤: 請確認此節點上面已掛載 Label 組件。", this);
  }, s.onDestroy = function () {
    App.language.remove(this);
  }, s.update = function (t) {
    this._isDirty && (this.forceDoLayout(), this._isDirty = !1);
  }, s.forceDoLayout = function () {
    if (this.targetLabel) {
      if (this.isUseMultilingual) {
        var t = this.bundle,
          e = I[t],
          i = App.getLanguage(this.language, this.params, e);
        this.targetLabel.string = i;
      }
      this.isUseFontSize && this.updateFontSize(), this.targetLabel.forceDoLayout();
    }
  }, s.updateFontSize = function () {
    var t = App.language.getLanguage(),
      e = this.getFontSizeForLanguage(t);
    null !== e ? (this.targetLabel.fontSize = e, this.isUseFontSize && this._isSyncLineHeight && (this.targetLabel.lineHeight = e)) : console.warn("UIFontSize: 未定義語言 " + t + " 的字型大小。");
  }, s.getFontSizeForLanguage = function (t) {
    return "zh-tw" === t || "zh-cn" === t ? this._zhFontSize : this._otherFontSize;
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
  }, {
    key: "isUseFontSize",
    get: function () {
      return this._isUseFontSize;
    },
    set: function (t) {
      if (t != this._isUseFontSize) {
        if (t) {
          var e = this.getComponent(_dependency2.Label).fontSize;
          this._zhFontSize || (this._zhFontSize = e), this._otherFontSize || (this._otherFontSize = e);
        }
        this._isUseFontSize = t, this._isDirty = !0;
      }
    }
  }, {
    key: "isSyncLineHeight",
    get: function () {
      return this._isSyncLineHeight;
    },
    set: function (t) {
      t != this._isSyncLineHeight && (this._isSyncLineHeight = t);
    }
  }, {
    key: "zhFontSize",
    get: function () {
      return this._zhFontSize;
    },
    set: function (t) {
      this._zhFontSize = t, this.targetLabel.fontSize = t, this.isUseFontSize && this._isSyncLineHeight && (this.targetLabel.lineHeight = t);
    }
  }, {
    key: "otherFontSize",
    get: function () {
      return this._otherFontSize;
    },
    set: function (t) {
      this._otherFontSize = t;
    }
  }]), e;
}(_dependency2.Component)).prototype, "_lan", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), w = _dependency.applyDecoratedDescriptor(D.prototype, "_bundle", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return I.resources;
  }
}), O = _dependency.applyDecoratedDescriptor(D.prototype, "_params", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), v = _dependency.applyDecoratedDescriptor(D.prototype, "_mult", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), _dependency.applyDecoratedDescriptor(D.prototype, "bundle", [z], Object.getOwnPropertyDescriptor(D.prototype, "bundle"), D.prototype), _dependency.applyDecoratedDescriptor(D.prototype, "language", [f], Object.getOwnPropertyDescriptor(D.prototype, "language"), D.prototype), _dependency.applyDecoratedDescriptor(D.prototype, "params", [b], Object.getOwnPropertyDescriptor(D.prototype, "params"), D.prototype), _dependency.applyDecoratedDescriptor(D.prototype, "isUseMultilingual", [_], Object.getOwnPropertyDescriptor(D.prototype, "isUseMultilingual"), D.prototype), H = _dependency.applyDecoratedDescriptor(D.prototype, "_isUseFontSize", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), k = _dependency.applyDecoratedDescriptor(D.prototype, "_isSyncLineHeight", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), P = _dependency.applyDecoratedDescriptor(D.prototype, "_zhFontSize", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), j = _dependency.applyDecoratedDescriptor(D.prototype, "_otherFontSize", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), _dependency.applyDecoratedDescriptor(D.prototype, "isUseFontSize", [S], Object.getOwnPropertyDescriptor(D.prototype, "isUseFontSize"), D.prototype), _dependency.applyDecoratedDescriptor(D.prototype, "isSyncLineHeight", [F], Object.getOwnPropertyDescriptor(D.prototype, "isSyncLineHeight"), D.prototype), _dependency.applyDecoratedDescriptor(D.prototype, "zhFontSize", [d], Object.getOwnPropertyDescriptor(D.prototype, "zhFontSize"), D.prototype), _dependency.applyDecoratedDescriptor(D.prototype, "otherFontSize", [m], Object.getOwnPropertyDescriptor(D.prototype, "otherFontSize"), D.prototype), L = D)) || L) || L) || L));
_dependency2.cclegacy._RF.pop();
