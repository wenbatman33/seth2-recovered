// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
import * as _dependency4 from "./main-CocosUtils";
import * as _dependency5 from "./main-Resource";
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
var e, r, i, n, o, a, s, u, p, l, c, y, g, h, m, f, _;
var b, d, D, A, w, L, v, O, k, C, R, N, S, U, B, M, P;
_dependency2.cclegacy._RF.push({}, "51a47oGgppB6ZnHntSq3PUI", "UISprite", void 0);
var j = _dependency2._decorator.ccclass,
  x = _dependency2._decorator.property,
  z = _dependency2._decorator.menu,
  F = _dependency2.Enum(App.Bundles);
_publish("default", (b = z("Quick渲染元件/UISprite"), d = x({
  displayName: "是否啟用多語言",
  tooltip: "是否啟用多語言,預設為關閉"
}), D = x({
  displayName: "語言包所在Bundle",
  visible: function () {
    return this._mult;
  },
  type: F,
  tooltip: "語言包所在bundle"
}), A = x({
  displayName: "語言包Key",
  visible: function () {
    return this._mult;
  },
  tooltip: "所在Bundle中語言包的key,如果語言包在Bundle內，請先用injectLanguageData裝飾語言包資料代理類"
}), w = x({
  displayName: "圖集資源",
  visible: function () {
    return this._mult;
  },
  tooltip: "圖集資源"
}), L = x({
  displayName: "遠端地址",
  visible: function () {
    return this._mult;
  },
  tooltip: "遠端地址"
}), v = x({
  displayName: "語言包附加引數",
  visible: function () {
    return this._mult;
  },
  tooltip: "附加引數，如果語言包中有 xx{0}{1},有兩個佔位的引數需要替換",
  type: _dependency2.CCString
}), O = x({
  displayName: "資源持有人",
  visible: function () {
    return this._mult;
  },
  tooltip: "填寫對應的 ClassName，例如:'TemplateView'。"
}), j(k = b((R = _dependency.applyDecoratedDescriptor((C = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "_lan", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_bundle", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_params", S, _dependency.assertThisInitialized(e)), e._isDirty = !0, _dependency.initializerDefineProperty(e, "_mult", U, _dependency.assertThisInitialized(e)), e.onLoadComplete = void 0, _dependency.initializerDefineProperty(e, "_user", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_lanAtlas", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_remote", P, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var u = e.prototype;
  return u.onLoad = function () {
    t.prototype.onLoad.call(this), App.language.add(this), this.update(0);
  }, u.onDestroy = function () {
    App.language.remove(this), t.prototype.onDestroy.call(this);
  }, u.update = function (e) {
    t.prototype.update && t.prototype.update.call(this, e), this._isDirty && (this.forceDoLayout(), this._isDirty = !1);
  }, u.forceDoLayout = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e,
        r,
        i,
        n,
        o,
        a = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!this.isUseMultilingual) {
              t.next = 13;
              break;
            }
            if (e = this.bundle, r = F[e], App.bundleManager.getBundle(r)) {
              t.next = 6;
              break;
            }
            return t.abrupt("return");
          case 6:
            if (i = App.getLanguage(this.language, this.params, r)) {
              t.next = 9;
              break;
            }
            return t.abrupt("return");
          case 9:
            return t.next = 11, App.uiManager.getView(this.user);
          case 11:
            n = t.sent, this.isRemote ? App.asset.remote.loadImage(i, !0).then(function (t) {
              t && _dependency4.setSpriteSpriteFrame(n, i, a, t, function (t) {
                a.onLoadComplete && a.onLoadComplete(t);
              }, _dependency3.Macro.BUNDLE_REMOTE, _dependency5.Resource.Type.Remote, !1);
            }) : this.languageAtlas.length > 0 ? (o = App.getLanguage(this.languageAtlas, [], r), App.cache.getSpriteFrameByAsync(o, i, n, _dependency4.addExtraLoadResource, r).then(function (t) {
              t && t.isTryReload || t && t.spriteFrame && _dependency4.setSpriteSpriteFrame(n, t.url, a, t.spriteFrame, function (t) {
                a.onLoadComplete && a.onLoadComplete(t);
              }, r, _dependency5.Resource.Type.Local, !1, !0);
            })) : (i += "/spriteFrame", App.cache.getCacheByAsync(i, _dependency2.SpriteFrame, r).then(function (t) {
              _dependency4.setSpriteSpriteFrame(n, i, a, t, function (t) {
                a.onLoadComplete && a.onLoadComplete(t);
              }, r);
            }));
          case 13:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), _dependency.createClass(e, [{
    key: "isUseMultilingual",
    get: function () {
      return this._mult;
    },
    set: function (t) {
      t != this._mult && (this._mult = t, this._isDirty = !0);
    }
  }, {
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
    key: "languageAtlas",
    get: function () {
      return this._lanAtlas;
    },
    set: function (t) {
      this._lanAtlas != t && (this._lanAtlas = t, this._isDirty = !0);
    }
  }, {
    key: "isRemote",
    get: function () {
      return this._remote;
    },
    set: function (t) {
      this._remote != t && (this._remote = t, this._isDirty = !0);
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
    key: "user",
    get: function () {
      return this._user;
    },
    set: function (t) {
      this._user = t;
    }
  }]), e;
}(_dependency2.Sprite)).prototype, "_lan", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), N = _dependency.applyDecoratedDescriptor(C.prototype, "_bundle", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return F.resources;
  }
}), S = _dependency.applyDecoratedDescriptor(C.prototype, "_params", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = _dependency.applyDecoratedDescriptor(C.prototype, "_mult", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), B = _dependency.applyDecoratedDescriptor(C.prototype, "_user", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return _dependency3.Macro.UNKNOWN;
  }
}), M = _dependency.applyDecoratedDescriptor(C.prototype, "_lanAtlas", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), P = _dependency.applyDecoratedDescriptor(C.prototype, "_remote", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), _dependency.applyDecoratedDescriptor(C.prototype, "isUseMultilingual", [d], Object.getOwnPropertyDescriptor(C.prototype, "isUseMultilingual"), C.prototype), _dependency.applyDecoratedDescriptor(C.prototype, "bundle", [D], Object.getOwnPropertyDescriptor(C.prototype, "bundle"), C.prototype), _dependency.applyDecoratedDescriptor(C.prototype, "language", [A], Object.getOwnPropertyDescriptor(C.prototype, "language"), C.prototype), _dependency.applyDecoratedDescriptor(C.prototype, "languageAtlas", [w], Object.getOwnPropertyDescriptor(C.prototype, "languageAtlas"), C.prototype), _dependency.applyDecoratedDescriptor(C.prototype, "isRemote", [L], Object.getOwnPropertyDescriptor(C.prototype, "isRemote"), C.prototype), _dependency.applyDecoratedDescriptor(C.prototype, "params", [v], Object.getOwnPropertyDescriptor(C.prototype, "params"), C.prototype), _dependency.applyDecoratedDescriptor(C.prototype, "user", [O], Object.getOwnPropertyDescriptor(C.prototype, "user"), C.prototype), k = C)) || k) || k));
_dependency2.cclegacy._RF.pop();
