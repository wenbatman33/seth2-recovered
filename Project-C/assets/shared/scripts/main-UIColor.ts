// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
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
var o, e, r, i, n, s, l, p, u, a, y, c, h, b;
var d, _, f, g, m, C, v, S, D, O, w, B, L, k, z, U, I, P, j, K, N;
_dependency2.cclegacy._RF.push({}, "629ee+zT9xIDIGm8vaWu1bT", "UIColor", void 0), N || (N = {});
var M = _dependency2._decorator.ccclass,
  A = _dependency2._decorator.property,
  x = _dependency2._decorator.menu,
  E = _dependency2._decorator.executeInEditMode,
  F = _dependency2.Enum(App.Bundles),
  T = App.colorManager.colorEnum;
null == (T = N) && (T = N);
var H = _dependency2.Enum(T);
_dependency2.Enum.getList(H), _dependency2.Enum.sortList(H, function (t, o) {
  return t.name > o.name ? 1 : -1;
});
_publish("default", (d = x("Quick渲染元件/UIColor"), _ = E(), f = A({
  displayName: "語言包所在Bundle",
  type: F,
  tooltip: "語言包所在bundle"
}), g = A({
  displayName: "啟用系統色票",
  tooltip: "用於 Label | Sprite 是否啟用系統色票,預設為啟用"
}), m = A({
  displayName: "顏色key",
  visible: function () {
    return this._sysColor;
  },
  type: H,
  tooltip: "顏色key"
}), C = A({
  displayName: "Button四態色票",
  tooltip: "是否啟用Button四態色票,預設為關閉"
}), v = A({
  displayName: "normal 顏色",
  visible: function () {
    return this._buttonSysColor;
  },
  type: H,
  tooltip: "normal 顏色"
}), S = A({
  displayName: "pressed 顏色",
  visible: function () {
    return this._buttonSysColor;
  },
  type: H,
  tooltip: "pressed 顏色"
}), D = A({
  displayName: "hover 顏色",
  visible: function () {
    return this._buttonSysColor;
  },
  type: H,
  tooltip: "hover 顏色"
}), O = A({
  displayName: "disabled 顏色",
  visible: function () {
    return this._buttonSysColor;
  },
  type: H,
  tooltip: "disabled 顏色"
}), M(w = d(w = _((L = _dependency.applyDecoratedDescriptor((B = function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var o, e = arguments.length, n = new Array(e), s = 0; s < e; s++) n[s] = arguments[s];
    return (o = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).targetComponent = null, o.button = null, o.toggle = null, o._isDirty = !0, _dependency.initializerDefineProperty(o, "_bundle", L, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "_sysColor", k, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "_colorKey", z, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "_buttonSysColor", U, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "_normal", I, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "_pressed", P, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "_hover", j, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "_disabled", K, _dependency.assertThisInitialized(o)), o;
  }
  _dependency.inheritsLoose(o, t);
  var l = o.prototype;
  return l.onLoad = function () {}, l.initSpriteOrLabel = function () {
    console.log("初始化 sys color"), this.targetComponent = this.node.getComponent(_dependency2.Sprite) || this.node.getComponent(_dependency2.Label), null !== this.targetComponent ? (this.node.getComponent(_dependency2.Button) && (this.button = this.node.getComponent(_dependency2.Button)), this._sysColor && (this.colorKey = this._colorKey), this._buttonSysColor && (this.normal = this._normal, this.pressed = this._pressed, this.hover = this._hover, this.disabled = this._disabled)) : Log.e("UIColor: 此component 不存在 Sprite組件 | Label組件");
  }, l.initButton = function () {
    console.log("初始化 button"), this.button = this.node.getComponent(_dependency2.Button), null !== this.button || Log.e("UIColor: 此component 不存在 Button組件");
  }, l.setColor = function (t, o) {
    try {
      for (var e, r = App.colorManager.proxys.get(_dependency3.EBundles[this.bundle]).datas.get(App.colorManager.getColorMode()).data, i = T[o].split("_"), s = i[0], l = i[1], p = t[0], u = t[1].split("."), a = p, y = _dependency.createForOfIteratorHelperLoose(u.slice(0, -1)); !(e = y()).done;) {
        a = a[e.value];
      }
      a[u[u.length - 1]] = r[s][l];
    } catch (t) {
      Log.e("分隔符號需與 動態生成enum的分隔字串同步。", t);
    }
  }, l.forceDoColor = function () {}, _dependency.createClass(o, [{
    key: "bundle",
    get: function () {
      return this._bundle;
    },
    set: function (t) {
      this._bundle != t && (this._bundle = t, this._isDirty = !0);
    }
  }, {
    key: "isUseSystemColor",
    get: function () {
      return this._sysColor;
    },
    set: function (t) {
      t != this._sysColor && (t && this.initSpriteOrLabel(), this._sysColor = t);
    }
  }, {
    key: "colorKey",
    get: function () {
      return this._colorKey;
    },
    set: function (t) {
      this._colorKey = t, this._isDirty = !0, this.setColor([this.targetComponent, "color"], t);
    }
  }, {
    key: "isUseButtonSysColor",
    get: function () {
      return this._buttonSysColor;
    },
    set: function (t) {
      t != this._buttonSysColor && (t && this.initButton(), this._buttonSysColor = t);
    }
  }, {
    key: "normal",
    get: function () {
      return this._normal;
    },
    set: function (t) {
      this._normal = t, this._isDirty = !0, this.setColor([this.button, "normalColor"], t);
    }
  }, {
    key: "pressed",
    get: function () {
      return this._pressed;
    },
    set: function (t) {
      this._pressed = t, this._isDirty = !0, this.setColor([this.button, "pressedColor"], t);
    }
  }, {
    key: "hover",
    get: function () {
      return this._hover;
    },
    set: function (t) {
      this._hover = t, this._isDirty = !0, this.setColor([this.button, "hoverColor"], t);
    }
  }, {
    key: "disabled",
    get: function () {
      return this._disabled;
    },
    set: function (t) {
      this._disabled = t, this._isDirty = !0, this.setColor([this.button, "disabledColor"], t);
    }
  }]), o;
}(_dependency2.Component)).prototype, "_bundle", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return F.resources;
  }
}), _dependency.applyDecoratedDescriptor(B.prototype, "bundle", [f], Object.getOwnPropertyDescriptor(B.prototype, "bundle"), B.prototype), k = _dependency.applyDecoratedDescriptor(B.prototype, "_sysColor", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), z = _dependency.applyDecoratedDescriptor(B.prototype, "_colorKey", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), _dependency.applyDecoratedDescriptor(B.prototype, "isUseSystemColor", [g], Object.getOwnPropertyDescriptor(B.prototype, "isUseSystemColor"), B.prototype), _dependency.applyDecoratedDescriptor(B.prototype, "colorKey", [m], Object.getOwnPropertyDescriptor(B.prototype, "colorKey"), B.prototype), U = _dependency.applyDecoratedDescriptor(B.prototype, "_buttonSysColor", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), I = _dependency.applyDecoratedDescriptor(B.prototype, "_normal", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), P = _dependency.applyDecoratedDescriptor(B.prototype, "_pressed", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), j = _dependency.applyDecoratedDescriptor(B.prototype, "_hover", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), K = _dependency.applyDecoratedDescriptor(B.prototype, "_disabled", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), _dependency.applyDecoratedDescriptor(B.prototype, "isUseButtonSysColor", [C], Object.getOwnPropertyDescriptor(B.prototype, "isUseButtonSysColor"), B.prototype), _dependency.applyDecoratedDescriptor(B.prototype, "normal", [v], Object.getOwnPropertyDescriptor(B.prototype, "normal"), B.prototype), _dependency.applyDecoratedDescriptor(B.prototype, "pressed", [S], Object.getOwnPropertyDescriptor(B.prototype, "pressed"), B.prototype), _dependency.applyDecoratedDescriptor(B.prototype, "hover", [D], Object.getOwnPropertyDescriptor(B.prototype, "hover"), B.prototype), _dependency.applyDecoratedDescriptor(B.prototype, "disabled", [O], Object.getOwnPropertyDescriptor(B.prototype, "disabled"), B.prototype), w = B)) || w) || w) || w));
_dependency2.cclegacy._RF.pop();
