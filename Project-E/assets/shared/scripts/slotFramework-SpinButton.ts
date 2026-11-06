// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmmUtils";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-AutoPlayModel";
import * as _dependency7 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "./slotFramework-type2";
var _export;
export { _export as AutoPlayOption };
var _export2;
export { _export2 as SpinButton };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "AutoPlayOption":
      _export = value;
      break;
    case "SpinButton":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, r, s, a, l, u, p, c, h, S, f, d, A, v, E, m, b, g;
var w, C, L, D, N, R, O, z, M, T, y;
_publish("AutoPlayOption", void 0), _dependency2.cclegacy._RF.push({}, "7f25dXUMy5Drp+CtXSwPjLU", "SpinButton", void 0);
var I,
  P,
  B = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.HOVER = "hover", t.RELEASED = "released", t.NORMAL = "normal", t.PRESSED = "pressed", t.DISABLED = "disabled";
}(I || (I = {})), function (t) {
  t[t.INFINITY = -1] = "INFINITY", t[t.ADVANCED = 0] = "ADVANCED";
}(P || (P = _publish("AutoPlayOption", {})));
_publish("SpinButton", (w = B("SpinButton"), C = _dependency5.inject("Button", _dependency2.Node), L = _dependency5.inject("Button/text", _dependency2.Node), D = _dependency5.inject("spine", _dependency2.Node), N = _dependency5.inject("arrow", _dependency2.Node), w((z = _dependency.applyDecoratedDescriptor((O = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "button", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "text", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spine", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrow", y, _dependency.assertThisInitialized(e)), e.BASE_SPEED = 100, e.HIGH_SPEED = 500, e.arrowSpriteMap = new Map(), e.speed = e.BASE_SPEED, e.arrowAngle = 0, e.timeout = void 0, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {}, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.update = function (t) {
    this.arrow.angle = this.arrowAngle -= this.speed * t, this.arrowAngle < -360 && (this.arrowAngle = 0);
  }, r.setEventTouch = function () {
    var t = this;
    this.button.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.button.getComponent(_dependency2.Button).interactable && (t.setArrowSprite(_dependency8.EBtnStatus.PRESSED), t.setAnimation(I.PRESSED));
    }), this.button.on(_dependency2.NodeEventType.TOUCH_CANCEL, function () {
      t.button.getComponent(_dependency2.Button).interactable && (t.setArrowSprite(_dependency8.EBtnStatus.NORMAL), t.setAnimation(I.NORMAL, !0));
    }), this.button.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.button.getComponent(_dependency2.Button).interactable && (t.setArrowSprite(_dependency8.EBtnStatus.NORMAL), t.setAnimation(I.NORMAL, !0));
    }), this.button.on(_dependency2.NodeEventType.MOUSE_ENTER, function () {
      t.button.getComponent(_dependency2.Button).interactable && (t.setArrowSprite(_dependency8.EBtnStatus.HOVER), t.setAnimation(I.HOVER));
    }), this.button.on(_dependency2.NodeEventType.MOUSE_LEAVE, function () {
      t.button.getComponent(_dependency2.Button).interactable && (t.setArrowSprite(_dependency8.EBtnStatus.NORMAL), t.setAnimation(I.NORMAL, !0));
    });
  }, r.setAnimation = function (t, e, n) {
    void 0 === e && (e = !1);
    var i = this.spine.getComponent(_dependency2.sp.Skeleton);
    i.setAnimation(0, t, e), i.setCompleteListener(function () {
      n && n();
    });
  }, r.playSpineReleasedAnim = function () {
    var t = this;
    this.setAnimation(I.RELEASED, !1, function () {
      t.setAnimation(I.NORMAL);
    });
  }, r.setButton = function (t, e) {
    var n = this.button.getComponent(_dependency2.Button);
    if (n.normalSprite = null, n.pressedSprite = null, n.hoverSprite = null, n.disabledSprite = null, e) {
      var i = this.button.getComponent(_dependency2.Sprite),
        o = this.button.getComponent(_dependency2.UITransform);
      if (this.button) switch (n.transition = t, t) {
        case _dependency2.Button.Transition.NONE:
          break;
        case _dependency2.Button.Transition.COLOR:
          var r = e,
            s = r.normal,
            a = r.pressed,
            u = r.hover,
            S = r.disabled,
            f = r.bgSprite;
          n.normalColor = new _dependency2.Color(s), n.pressedColor = new _dependency2.Color(a), n.hoverColor = new _dependency2.Color(u), n.disabledColor = new _dependency2.Color(S), i.spriteFrame = f, o.setContentSize(f.width, f.height);
          break;
        case _dependency2.Button.Transition.SPRITE:
          var d = e,
            A = d.normal,
            v = d.pressed,
            E = d.hover,
            m = d.disabled;
          n.normalSprite = A, n.pressedSprite = v, n.hoverSprite = E, n.disabledSprite = m, o.setContentSize(A.originalSize.width, A.originalSize.height);
          break;
        case _dependency2.Button.Transition.SCALE:
          var b = e,
            g = b.zoomScale,
            w = b.duration;
          n.zoomScale = g, n.duration = w;
      } else Log.e("Button not found");
    }
  }, r.setArrow = function (t) {
    if (t) {
      var e = this.arrow.getComponent(_dependency2.UITransform),
        n = t.normal,
        i = t.pressed,
        o = t.hover,
        r = t.disabled;
      this.arrowSpriteMap.set(_dependency8.EBtnStatus.NORMAL, n), this.arrowSpriteMap.set(_dependency8.EBtnStatus.PRESSED, i), this.arrowSpriteMap.set(_dependency8.EBtnStatus.HOVER, o), this.arrowSpriteMap.set(_dependency8.EBtnStatus.DISABLED, r), this.setArrowSprite(_dependency8.EBtnStatus.NORMAL), this.setAnimation(I.NORMAL), e.setContentSize(n.originalSize.width, n.originalSize.height);
    }
  }, r.setArrowSprite = function (t) {
    this.arrow.getComponent(_dependency2.Sprite).spriteFrame = this.arrowSpriteMap.get(t);
  }, r.speedUp = function () {
    var t = this;
    this.timeout && clearTimeout(this.timeout), this.speed = this.HIGH_SPEED, this.timeout = setTimeout(function () {
      t.speed = t.BASE_SPEED;
    }, 800);
  }, r.init = function () {
    this.setEventTouch();
  }, r.setData = function (t, e, n, i, o) {
    void 0 === o && (o = 1);
    var r = this.spine.getComponent(_dependency2.sp.Skeleton);
    this.spine.setScale(_dependency2.v3(o, o, 0)), r.skeletonData = t, r.setAnimation(0, I.NORMAL, !1), this.setButton(_dependency2.Button.Transition.SPRITE, e), this.setArrow(n), this.setArtFont(i);
  }, r.setArtFont = function (t) {
    if (t) {
      var e = t.font,
        n = t.fontSize,
        i = t.fontPos,
        o = t.fontSpacingX,
        r = this.text.getComponent(_dependency2.Label);
      r.font = e, r.fontSize = n, r.lineHeight = n, o && (r.spacingX = o), this.text.setPosition(i);
    }
  }, r.setColor = function (t) {
    this.button.getComponent(_dependency2.Sprite).color = new _dependency2.Color(t);
  }, r.setLabel = function (t, e) {
    var n = this.text.getComponent(_dependency2.Label);
    n.string = t, void 0 !== (null == e ? void 0 : e.fontSize) && (n.fontSize = e.fontSize), void 0 !== (null == e ? void 0 : e.fontSize) && (n.lineHeight = e.fontSize), void 0 !== (null == e ? void 0 : e.fontSize) && (n.fontSize = e.fontSize, n.lineHeight = e.fontSize, this.text.getComponent(_dependency2.UITransform).height = e.fontSize), void 0 !== (null == e ? void 0 : e.active) && (this.text.active = e.active);
  }, r.reset = function () {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.labelActive = function (t) {
    this.text.active = t;
  }, r.setInteractable = function (t) {
    var e = t ? I.NORMAL : I.DISABLED;
    this.button.getComponent(_dependency2.Button).interactable = t, this.setArrowSprite(t ? _dependency8.EBtnStatus.NORMAL : _dependency8.EBtnStatus.DISABLED), this.setAnimation(e, t);
  }, r.addClickEvent = function (t) {
    _dependency3.CmmUtils.addBtnClickEvent(this.button, function () {
      t && t();
    });
  }, r.syncArrowAngle = function (t) {
    this.arrowAngle = t, this.arrow.angle = t;
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency7.SlotFrameworkEvent.SET_AUTO_SPIN_COUNT, function (t) {
      var n = t.data;
      if (n > P.INFINITY) {
        var i = n;
        i = -1 === i ? 0 : i, e.setLabel("" + i, {
          active: !0
        });
      } else e.setLabel("∞", {
        active: !0
      });
      _dependency6.default.active || e.setLabel("", {
        active: !1
      });
    }), this.on(_dependency7.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, function () {
      e.playSpineReleasedAnim(), e.speedUp();
    });
  }, e;
}(_dependency4.default)).prototype, "button", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(O.prototype, "text", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = _dependency.applyDecoratedDescriptor(O.prototype, "spine", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = _dependency.applyDecoratedDescriptor(O.prototype, "arrow", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = O)) || R));
_dependency2.cclegacy._RF.pop();
