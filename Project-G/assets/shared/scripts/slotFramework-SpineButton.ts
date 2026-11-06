// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Decorators";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./slotFramework-type2";
import * as _dependency6 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./slotFramework-SpinButton";
import * as _dependency8 from "./slotFramework-AutoPlayModel";
var _export;
export { _export as SpineButton };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpineButton":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, s, r, a, u, l, p, c, h, f, S, A, E, v, d, m, b, g;
var w, R, D, L, C, O, _, T, M, N, z;
_dependency2.cclegacy._RF.push({}, "47bb7uo3gpEBbmoCv+eFm2+", "SpineButton", void 0);
var y,
  B = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.HOVER = "hover", t.RELEASED = "released", t.NORMAL = "normal", t.PRESSED = "pressed", t.DISABLED = "disabled";
}(y || (y = {}));
_publish("SpineButton", (w = B("SpineButton"), R = _dependency3.inject("spineBtn", _dependency2.Node), D = _dependency3.inject("spineBtn/image", _dependency2.Sprite), L = _dependency3.inject("spineBtn/text", _dependency2.Node), C = _dependency3.inject("arrow", _dependency2.Node), w((T = _dependency.applyDecoratedDescriptor((_ = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "spine", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "image", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "text", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrow", z, _dependency.assertThisInitialized(e)), e.arrowSpriteMap = new Map(), e.BASE_SPEED = 100, e.HIGH_SPEED = 500, e.speed = e.BASE_SPEED, e.angle = 0, e.timeout = void 0, e.button = null, e._status = void 0, e.isEnableArrowAtAutoSpinToAlpha = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.update = function (t) {
    this.arrow.angle = this.angle -= this.speed * t, this.angle < -360 && (this.angle = 0);
  }, r.setEventTouch = function () {
    var t = this;
    this.node.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.status = _dependency5.EBtnStatus.PRESSED, t.setAnimation(y.PRESSED, !1);
    }), this.node.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.status = _dependency5.EBtnStatus.DISABLED, t.setAnimation(y.RELEASED, !1, function () {
        t.setAnimation(y.NORMAL, !0);
      });
    }), this.node.on(_dependency2.NodeEventType.TOUCH_CANCEL, function () {
      t.status = _dependency5.EBtnStatus.NORMAL, t.setAnimation(y.NORMAL, !0);
    }), this.node.on(_dependency2.NodeEventType.MOUSE_ENTER, function () {
      t.button.getComponent(_dependency2.Button).interactable && (t.setArrowSprite(_dependency5.EBtnStatus.HOVER), t.setAnimation(y.HOVER));
    }), this.node.on(_dependency2.NodeEventType.MOUSE_LEAVE, function () {
      t.button.getComponent(_dependency2.Button).interactable && (t.setArrowSprite(_dependency5.EBtnStatus.NORMAL), t.setAnimation(y.NORMAL));
    });
  }, r.init = function () {
    this.button = this.getComponent(_dependency2.Button), this.setEventTouch();
  }, r.setSpineData = function (t) {
    var e = this.spine.getComponent(_dependency2.sp.Skeleton);
    e.skeletonData = t, e.setAnimation(0, y.HOVER, !0);
  }, r.setAnimation = function (t, e, n) {
    void 0 === e && (e = !1);
    var i = this.spine.getComponent(_dependency2.sp.Skeleton);
    i.setAnimation(0, t, e), i.setCompleteListener(function () {
      n && n();
    });
  }, r.playSpineReleasedAnim = function () {
    var t = this;
    this.setAnimation(y.RELEASED, !1, function () {
      t.setAnimation(y.HOVER, !0);
    }), this.speedUp();
  }, r.setLabel = function (t, e) {
    var n = this.text.getComponent(_dependency2.Label);
    n.string = t, void 0 !== (null == e ? void 0 : e.fontSize) && (n.fontSize = e.fontSize), void 0 !== (null == e ? void 0 : e.fontSize) && (n.lineHeight = e.fontSize), void 0 !== (null == e ? void 0 : e.fontSize) && (n.fontSize = e.fontSize, n.lineHeight = e.fontSize, this.text.getComponent(_dependency2.UITransform).height = e.fontSize), void 0 !== (null == e ? void 0 : e.active) && (this.text.active = e.active);
  }, r.reset = function () {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.labelActive = function (t) {
    this.text.active = t;
  }, r.setData = function (t, e, n) {
    var i = this.spine.getComponent(_dependency2.sp.Skeleton);
    i.skeletonData = t, i.setAnimation(0, y.NORMAL, !0), this.setArrow(e), this.setArtFont(n);
  }, r.setArrow = function (t) {
    if (t) {
      var e = this.arrow.getComponent(_dependency2.UITransform),
        n = t.normal,
        i = t.pressed,
        o = t.hover,
        s = t.disabled;
      this.arrowSpriteMap.set(_dependency5.EBtnStatus.NORMAL, n), this.arrowSpriteMap.set(_dependency5.EBtnStatus.PRESSED, i), this.arrowSpriteMap.set(_dependency5.EBtnStatus.HOVER, o), this.arrowSpriteMap.set(_dependency5.EBtnStatus.DISABLED, s), this.setArrowSprite(_dependency5.EBtnStatus.NORMAL), e.setContentSize(n.originalSize.width, n.originalSize.height);
    }
  }, r.setArrowSprite = function (t) {
    this.arrow.getComponent(_dependency2.Sprite).spriteFrame = this.arrowSpriteMap.get(t);
  }, r.speedUp = function () {
    var t = this;
    this.timeout && clearTimeout(this.timeout), this.speed = this.HIGH_SPEED, this.timeout = setTimeout(function () {
      t.speed = t.BASE_SPEED;
    }, 800);
  }, r.setArtFont = function (t) {
    if (t) {
      var e = t.font,
        n = t.fontSize,
        i = t.fontPos,
        o = this.text.getComponent(_dependency2.Label);
      o.font = e, o.fontSize = n, o.lineHeight = n, this.text.setPosition(i);
    }
  }, r.setInteractable = function (t) {
    this.button && (this.button.interactable = t), this.setArrowSprite(_dependency5.EBtnStatus.NORMAL);
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency6.SlotFrameworkEvent.SET_AUTO_SPIN_COUNT, function (t) {
      var n = t.data;
      if (n > _dependency7.AutoPlayOption.INFINITY) {
        var i = n;
        i = -1 === i ? 0 : i, e.setLabel("" + i, {
          active: !0
        });
      } else e.setLabel("∞", {
        active: !0
      });
      _dependency8.default.active || e.setLabel("", {
        active: !1
      }), e.isEnableArrowAtAutoSpinToAlpha && e.isEnableArrowAlpha(_dependency8.default.active);
    }), this.on(_dependency6.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, function () {
      e.playSpineReleasedAnim();
    });
  }, r.setAutoSpinCountToTop = function () {
    this.text.parent = this.node;
  }, r.isEnableArrowAlpha = function (t) {
    this.arrow.getComponent(_dependency2.Sprite).color = new _dependency2.Color(255, 255, 255, t ? 128 : 255);
  }, r.setArrowAtAutoSpinAlpha = function (t) {
    this.isEnableArrowAtAutoSpinToAlpha = t;
  }, _dependency.createClass(e, [{
    key: "status",
    get: function () {
      return this._status;
    },
    set: function (t) {
      this._status = t;
    }
  }]), e;
}(_dependency4.default)).prototype, "spine", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(_.prototype, "image", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(_.prototype, "text", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(_.prototype, "arrow", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _)) || O));
_dependency2.cclegacy._RF.pop();
