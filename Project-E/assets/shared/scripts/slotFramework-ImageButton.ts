// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Decorators";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./main-WrapperData";
var _export;
export { _export as ImageButton };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ImageButton":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o, i, r, a, s, l, c, u, b, h, p, d, f, v, C, g, m;
var S, _, w, y, z, E, L, T, B;
_dependency2.cclegacy._RF.push({}, "5db9fyh7ZZDu7mcogzGjWnq", "ImageButton", void 0);
var I = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("ImageButton", (S = I("ImageButton"), _ = _dependency3.inject("Button", _dependency2.Node), w = _dependency3.inject("Button/text", _dependency2.Node), y = _dependency3.inject("Button/font", _dependency2.Node), S((L = _dependency.applyDecoratedDescriptor((E = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "button", L, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "text", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "font", B, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.setLabelColor = function (t) {
    var e = this.text.getComponent(_dependency2.Label);
    e && (e.color = new _dependency2.Color(t));
  }, a.setLabelEventTouch = function () {
    var t = this,
      e = this.data.colorConfig,
      n = e.btn_label_normal,
      o = e.btn_label_hover,
      i = e.btn_label_pressed,
      r = (e.btn_label_disable, this.button.getComponent(_dependency2.Button));
    this.button.on(_dependency2.NodeEventType.MOUSE_ENTER, function () {
      r.interactable && t.setLabelColor(o);
    }, this), this.button.on(_dependency2.NodeEventType.MOUSE_LEAVE, function () {
      r.interactable && t.setLabelColor(n);
    }, this), this.button.on(_dependency2.NodeEventType.TOUCH_START, function () {
      r.interactable && t.setLabelColor(i);
    }, this);
  }, a.init = function () {
    this.setLabelEventTouch(), this.show();
  }, a.setButton = function (t, e) {
    var n = this.button.getComponent(_dependency2.Button),
      o = this.button.getComponent(_dependency2.Sprite),
      i = this.button.getComponent(_dependency2.UITransform);
    if (this.button) switch (n.transition = t, t) {
      case _dependency2.Button.Transition.NONE:
        break;
      case _dependency2.Button.Transition.COLOR:
        var r = e,
          a = r.normal,
          s = r.pressed,
          l = r.hover,
          b = r.disabled,
          d = r.bgSprite,
          f = r.contentSize;
        n.normalColor = new _dependency2.Color(a), n.pressedColor = new _dependency2.Color(s), n.hoverColor = new _dependency2.Color(l), n.disabledColor = new _dependency2.Color(b), o.spriteFrame = d;
        var v = f ? f.width : d.width,
          C = f ? f.height : d.height;
        i.setContentSize(v, C), this.node.getComponent(_dependency2.UITransform).setContentSize(v, C);
        break;
      case _dependency2.Button.Transition.SPRITE:
        var g = e,
          m = g.normal,
          S = g.pressed,
          _ = g.hover,
          w = g.disabled;
        n.normalSprite = m, n.pressedSprite = S, n.hoverSprite = _, n.disabledSprite = w, i.setContentSize(m.width, m.height);
        break;
      case _dependency2.Button.Transition.SCALE:
        var y = e,
          z = y.zoomScale,
          E = y.duration;
        n.zoomScale = z, n.duration = E;
    } else Log.e("Button not found");
  }, a.setColor = function (t) {
    var e = this.button.getComponent(_dependency2.Sprite);
    e && (e.color = new _dependency2.Color(t));
  }, a.setLabel = function (t, e) {
    var n = this.text.getComponent(_dependency2.Label);
    n.string = t, void 0 !== (null == e ? void 0 : e.fontSize) && (n.fontSize = e.fontSize), void 0 !== (null == e ? void 0 : e.active) && (this.text.active = e.active), void 0 !== (null == e ? void 0 : e.color) && (n.color = new _dependency2.Color(e.color)), void 0 !== (null == e ? void 0 : e.isBold) && (n.isBold = e.isBold);
  }, a.setFont = function (t, e) {
    this.font.getComponent(_dependency2.Sprite).spriteFrame = t, this.font.active = !0, e.position && this.font.setPosition(e.position);
  }, a.reset = function () {}, a.show = function () {
    var t = this.node.getComponent(_dependency2.UIOpacity);
    t.opacity = 0, this.node.active = !0, _dependency2.tween(t).bindNodeState(false).to(.3, {
      opacity: 255
    }).start();
  }, a.hide = function () {
    this.node.active = !1;
  }, a.labelActive = function (t) {
    this.text.active = t;
  }, a.setInteractable = function (t) {
    var e = this.data.colorConfig,
      n = e.btn_label_normal,
      o = e.btn_label_disable;
    this.button.getComponent(_dependency2.Button).interactable = t, this.setLabelColor(t ? n : o);
  }, a.addClickEvent = function (t) {
    this.button.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t && t();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "button", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = _dependency.applyDecoratedDescriptor(E.prototype, "text", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(E.prototype, "font", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = E)) || z));
_dependency2.cclegacy._RF.pop();
