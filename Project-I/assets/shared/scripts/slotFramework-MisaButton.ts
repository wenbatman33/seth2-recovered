// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as Transition };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Transition":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, e, o, r, n, s, l, a, u, c, p, h, m, b;
var C, S, f, d, v, E, g, O, y, R, T, w, N, _, I, H, D, P, z, L, F, U, M, k, A, B, V, j, x, q, G, J, K, Q, W, X, Y, Z, $, tt, it, et, ot;
_publish("Transition", void 0), _dependency2.cclegacy._RF.push({}, "a275307MrROfautDC4hrIz3", "MisaButton", void 0);
var rt,
  nt,
  st = _dependency2._decorator.ccclass,
  lt = _dependency2._decorator.property,
  at = _dependency2._decorator.menu,
  ut = _dependency2._decorator.executeInEditMode;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.COLOR = 1] = "COLOR", t[t.SPRITE = 2] = "SPRITE";
}(rt || (rt = _publish("Transition", {}))), _dependency2.Enum(rt), function (t) {
  t.NORMAL = "normal", t.HOVER = "hover", t.PRESSED = "pressed", t.DISABLED = "disabled";
}(nt || (nt = {}));
_publish("default", (C = at("MisaButton"), S = lt({
  tooltip: "按鍵是否啟用"
}), f = lt({
  type: rt,
  tooltip: "按鍵變化類型"
}), d = lt({
  visible: function () {
    return this.transition == rt.COLOR;
  }
}), v = lt({
  visible: function () {
    return this.transition == rt.COLOR;
  }
}), E = lt({
  visible: function () {
    return this.transition == rt.COLOR;
  }
}), g = lt({
  visible: function () {
    return this.transition == rt.COLOR;
  }
}), O = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), y = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), R = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), T = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), w = lt({
  type: _dependency2.Node,
  tooltip: "前景Icon節點"
}), N = lt({
  tooltip: "前景圖片使用不同於背景的顏色設定"
}), _ = lt({
  visible: function () {
    return this.transition == rt.COLOR && this.isCustomIconColor;
  }
}), I = lt({
  visible: function () {
    return this.transition == rt.COLOR && this.isCustomIconColor;
  }
}), H = lt({
  visible: function () {
    return this.transition == rt.COLOR && this.isCustomIconColor;
  }
}), D = lt({
  visible: function () {
    return this.transition == rt.COLOR && this.isCustomIconColor;
  }
}), P = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), z = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), L = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), F = lt({
  type: _dependency2.SpriteFrame,
  visible: function () {
    return this.transition == rt.SPRITE;
  }
}), st(U = C(U = ut((k = _dependency.applyDecoratedDescriptor((M = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++) n[s] = arguments[s];
    return i = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "_interactable", k, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "transition", A, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "normalColor", B, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "pressedColor", V, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "hoverColor", j, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "disabledColor", x, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "_normalSprite", q, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "pressedSprite", G, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "hoverSprite", J, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "disabledSprite", K, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "iconNode", Q, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "isCustomIconColor", W, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customNormalColor", X, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customPressedColor", Y, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customHoverColor", Z, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customDisabledColor", $, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customNormalSprite", tt, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customPressedSprite", it, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customHoverSprite", et, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "customDisabledSprite", ot, _dependency.assertThisInitialized(i)), i.bgComSprite = null, i.iconComSprite = null, i.isHover = !1, i;
  }
  _dependency.inheritsLoose(i, t);
  var s = i.prototype;
  return s.start = function () {
    this._interactable && this.listenerOn(!0), this.normalSprite = this.node.getComponent(_dependency2.Sprite).spriteFrame;
  }, s.listenerOn = function (t) {
    t ? (this.node.on(_dependency2.NodeEventType.TOUCH_START, this.buttonEvent, this), this.node.on(_dependency2.NodeEventType.TOUCH_END, this.buttonEvent, this), this.node.on(_dependency2.NodeEventType.MOUSE_ENTER, this.buttonEvent, this), this.node.on(_dependency2.NodeEventType.MOUSE_LEAVE, this.buttonEvent, this)) : (this.node.off(_dependency2.NodeEventType.TOUCH_START, this.buttonEvent, this), this.node.off(_dependency2.NodeEventType.TOUCH_END, this.buttonEvent, this), this.node.off(_dependency2.NodeEventType.MOUSE_ENTER, this.buttonEvent, this), this.node.off(_dependency2.NodeEventType.MOUSE_LEAVE, this.buttonEvent, this)), this.buttonDisable(t);
  }, s.buttonEvent = function (t) {
    var i;
    switch (this.bgComSprite = this.node.getComponent(_dependency2.Sprite), this.iconComSprite = null == (i = this.iconNode) ? void 0 : i.getComponent(_dependency2.Sprite), this.transition) {
      case rt.COLOR:
        this.changeColor(t);
        break;
      case rt.SPRITE:
        this.changeSprite(t);
    }
  }, s.buttonDisable = function (t) {
    var i;
    switch (this.bgComSprite = this.node.getComponent(_dependency2.Sprite), this.iconComSprite = null == (i = this.iconNode) ? void 0 : i.getComponent(_dependency2.Sprite), this.transition) {
      case rt.COLOR:
        this.changeDisableColor(t);
        break;
      case rt.SPRITE:
        this.changeDisableSprite(t);
    }
  }, s.changeColor = function (t) {
    switch (t.type) {
      case _dependency2.NodeEventType.TOUCH_START:
        this.bgComSprite.color = this.pressedColor, this.iconComSprite.color = this.isCustomIconColor ? this.customPressedColor : this.pressedColor;
        break;
      case _dependency2.NodeEventType.TOUCH_END:
        this.isHover ? (this.bgComSprite.color = this.hoverColor, this.iconComSprite.color = this.isCustomIconColor ? this.customHoverColor : this.hoverColor) : (this.bgComSprite.color = this.normalColor, this.iconComSprite.color = this.isCustomIconColor ? this.customNormalColor : this.normalColor);
        break;
      case _dependency2.NodeEventType.MOUSE_ENTER:
        this.isHover = !0, this.bgComSprite.color = this.hoverColor, this.iconComSprite.color = this.isCustomIconColor ? this.customHoverColor : this.hoverColor;
        break;
      case _dependency2.NodeEventType.MOUSE_LEAVE:
        this.isHover = !1, this.bgComSprite.color = this.normalColor, this.iconComSprite.color = this.isCustomIconColor ? this.customNormalColor : this.normalColor;
    }
  }, s.changeDisableColor = function (t) {
    t ? (this.bgComSprite.color = this.normalColor, this.iconComSprite.color = this.isCustomIconColor ? this.customNormalColor : this.normalColor) : (this.bgComSprite.color = this.disabledColor, this.iconComSprite.color = this.isCustomIconColor ? this.customDisabledColor : this.disabledColor);
  }, s.changeSprite = function (t) {
    switch (t.type) {
      case _dependency2.NodeEventType.TOUCH_START:
        this.pressedSprite && (this.bgComSprite.spriteFrame = this.pressedSprite), this.customPressedSprite && (this.iconComSprite.spriteFrame = this.customPressedSprite);
        break;
      case _dependency2.NodeEventType.TOUCH_END:
        this.isHover ? (this.hoverSprite && (this.bgComSprite.spriteFrame = this.hoverSprite), this.customHoverSprite && (this.iconComSprite.spriteFrame = this.customHoverSprite)) : (this.normalSprite && (this.bgComSprite.spriteFrame = this.normalSprite), this.customNormalSprite && (this.iconComSprite.spriteFrame = this.customNormalSprite));
        break;
      case _dependency2.NodeEventType.MOUSE_ENTER:
        this.isHover = !0, this.hoverSprite && (this.bgComSprite.spriteFrame = this.hoverSprite), this.customHoverSprite && (this.iconComSprite.spriteFrame = this.customHoverSprite);
        break;
      case _dependency2.NodeEventType.MOUSE_LEAVE:
        this.isHover = !1, this.normalSprite && (this.bgComSprite.spriteFrame = this.normalSprite), this.customNormalSprite && (this.iconComSprite.spriteFrame = this.customNormalSprite);
    }
  }, s.changeDisableSprite = function (t) {
    t ? (this.normalSprite && (this.bgComSprite.spriteFrame = this.normalSprite), this.customNormalSprite && (this.iconComSprite.spriteFrame = this.customNormalSprite)) : (this.disabledSprite && (this.bgComSprite.spriteFrame = this.disabledSprite), this.customDisabledSprite && (this.iconComSprite.spriteFrame = this.customDisabledSprite));
  }, _dependency.createClass(i, [{
    key: "interactable",
    get: function () {
      return this._interactable;
    },
    set: function (t) {
      this._interactable !== t && (this._interactable = t, this.listenerOn(this._interactable));
    }
  }, {
    key: "normalSprite",
    get: function () {
      return this._normalSprite;
    },
    set: function (t) {
      this._normalSprite = t;
    }
  }]), i;
}(_dependency2.Component)).prototype, "_interactable", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), _dependency.applyDecoratedDescriptor(M.prototype, "interactable", [S], Object.getOwnPropertyDescriptor(M.prototype, "interactable"), M.prototype), A = _dependency.applyDecoratedDescriptor(M.prototype, "transition", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return rt.NONE;
  }
}), B = _dependency.applyDecoratedDescriptor(M.prototype, "normalColor", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(255, 255, 255, 255);
  }
}), V = _dependency.applyDecoratedDescriptor(M.prototype, "pressedColor", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(255, 230, 180, 255);
  }
}), j = _dependency.applyDecoratedDescriptor(M.prototype, "hoverColor", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(255, 230, 180, 255);
  }
}), x = _dependency.applyDecoratedDescriptor(M.prototype, "disabledColor", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(115, 115, 115, 255);
  }
}), q = _dependency.applyDecoratedDescriptor(M.prototype, "_normalSprite", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _dependency.applyDecoratedDescriptor(M.prototype, "normalSprite", [O], Object.getOwnPropertyDescriptor(M.prototype, "normalSprite"), M.prototype), G = _dependency.applyDecoratedDescriptor(M.prototype, "pressedSprite", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(M.prototype, "hoverSprite", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(M.prototype, "disabledSprite", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(M.prototype, "iconNode", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(M.prototype, "isCustomIconColor", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), X = _dependency.applyDecoratedDescriptor(M.prototype, "customNormalColor", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(255, 214, 128, 255);
  }
}), Y = _dependency.applyDecoratedDescriptor(M.prototype, "customPressedColor", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(255, 185, 40, 255);
  }
}), Z = _dependency.applyDecoratedDescriptor(M.prototype, "customHoverColor", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(255, 230, 180, 255);
  }
}), $ = _dependency.applyDecoratedDescriptor(M.prototype, "customDisabledColor", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Color(124, 124, 124, 255);
  }
}), tt = _dependency.applyDecoratedDescriptor(M.prototype, "customNormalSprite", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(M.prototype, "customPressedSprite", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(M.prototype, "customHoverSprite", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(M.prototype, "customDisabledSprite", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = M)) || U) || U) || U));
_dependency2.cclegacy._RF.pop();
