// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-OrientationToolManager";
import * as _dependency4 from "./main-OrientationToolModule";
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
var i, t, n, o, l, a, r, s, u, h, d, p, c, M, f, m, b, g, v, y, z, w, S, C, P, k, N, V, A, I, L, T, F, R;
var D, H, O, B, x, _, E, X, W, j, J, Q, U, Y, Z, q, G, K, $, ee, ie, te, ne, oe, le, ae, re, se, ue, he, de, pe, ce, Me, fe, me, be, ge, ve, ye, ze, we, Se, Ce, Pe, ke, Ne, Ve, Ae, Ie, Le, Te, Fe;
_dependency2.cclegacy._RF.push({}, "215083TaJlLQb2Fbp1F40xO", "OrientationTool", void 0);
var Re,
  De = _dependency2._decorator.ccclass,
  He = _dependency2._decorator.property,
  Oe = _dependency2._decorator.executeInEditMode,
  Be = _dependency2._decorator.menu;
!function (e) {
  e[e.None = 0] = "None", e[e.Verticall = 1] = "Verticall", e[e.Horizontal = 2] = "Horizontal";
}(Re || (Re = {}));
_publish("default", (D = Be("自訂工具/直橫版/OrientationTool"), H = He({
  readonly: !0,
  displayName: "直橫版狀態"
}), O = He(_dependency2.CCBoolean), B = He(_dependency2.CCBoolean), x = He({
  visible: function () {
    return this.nodeModule && this.showParameter;
  },
  type: _dependency4.NodeModule
}), _ = He({
  visible: function () {
    return this.nodeModule && this.showParameter;
  },
  type: _dependency4.NodeModule
}), E = He(_dependency2.CCBoolean), X = He({
  visible: function () {
    return this.animationModule && this.showParameter;
  },
  type: _dependency4.AnimationModule
}), W = He({
  visible: function () {
    return this.animationModule && this.showParameter;
  },
  type: _dependency4.AnimationModule
}), j = He(_dependency2.CCBoolean), J = He({
  visible: function () {
    return this.spineModule && this.showParameter;
  },
  type: _dependency4.SpineModule
}), Q = He({
  visible: function () {
    return this.spineModule && this.showParameter;
  },
  type: _dependency4.SpineModule
}), U = He(_dependency2.CCBoolean), Y = He({
  visible: function () {
    return this.spriteModule && this.showParameter;
  },
  type: _dependency4.SpriteModule
}), Z = He({
  visible: function () {
    return this.spriteModule && this.showParameter;
  },
  type: _dependency4.SpriteModule
}), q = He(_dependency2.CCBoolean), G = He({
  visible: function () {
    return this.maskModule && this.showParameter;
  },
  type: _dependency4.MaskModule
}), K = He({
  visible: function () {
    return this.maskModule && this.showParameter;
  },
  type: _dependency4.MaskModule
}), $ = He(_dependency2.CCBoolean), ee = He({
  visible: function () {
    return this.labelModule && this.showParameter;
  },
  type: _dependency4.LabelModule
}), ie = He({
  visible: function () {
    return this.labelModule && this.showParameter;
  },
  type: _dependency4.LabelModule
}), te = He(_dependency2.CCBoolean), ne = He({
  visible: function () {
    return this.polygonModule && this.showParameter;
  },
  type: _dependency4.PolygonModule
}), oe = He({
  visible: function () {
    return this.polygonModule && this.showParameter;
  },
  type: _dependency4.PolygonModule
}), le = He(_dependency2.CCBoolean), ae = He({
  type: [_dependency2.Node],
  visible: function () {
    return this.particleReset;
  }
}), De(re = D(re = Oe((ue = _dependency.applyDecoratedDescriptor((se = function (e) {
  var _nativeConstructor = i;
  function i() {
    for (var i, t = arguments.length, l = new Array(t), a = 0; a < t; a++) l[a] = arguments[a];
    return i = Reflect.construct(e, [this].concat(l).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "statusDisplay", ue, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "showParameter", he, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "nodeModule", de, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "verticalNodeModule", pe, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "horizontalNodeModule", ce, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "animationModule", Me, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "verticalAnimationModule", fe, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "horizontalAnimationModule", me, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "spineModule", be, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "verticalSpineModule", ge, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "horizontalSpineModule", ve, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "spriteModule", ye, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "verticalSpriteModule", ze, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "horizontalSpriteModule", we, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "maskModule", Se, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "verticalMaskModule", Ce, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "horizontalMaskModule", Pe, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "labelModule", ke, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "verticalLabelModule", Ne, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "horizontalLabelModule", Ve, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "polygonModule", Ae, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "verticalPolygonModule", Ie, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "horizontalPolygonModule", Le, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "particleReset", Te, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "particleList", Fe, _dependency.assertThisInitialized(i)), i.canvas = null, i.mask = null, i.animation = null, i.sprite = null, i.spine = null, i.label = null, i.polygon = null, i.missSpine = !1, i.orientationMode = Re.None, i.isStaticNode = !1, i;
  }
  _dependency.inheritsLoose(i, e);
  var l = i.prototype;
  return l.start = function () {
    var e, i, t;
    (null == (e = _dependency3.default.getInstance()) || e.addToList(this), this.spriteModule) && (null == (i = this.verticalSpriteModule.spriteFrame) || i.addRef(), null == (t = this.horizontalSpriteModule.spriteFrame) || t.addRef());
  }, l.onEnable = function () {
    _dependency3.default.orientationState === _dependency3.ORIENTATION_TYPE.NONE || this.isStaticNode || this.canvasResize(), this.missSpine && (this.setSpineModule(), this.missSpine = !1);
  }, l.onDisable = function () {}, l.onDestroy = function () {
    var e, i, t;
    _dependency2.director.getScene() && _dependency2.find("OrientationToolManager") && (null == (e = _dependency3.default.getInstance()) || e.removeFormList(this));
    this.spriteModule && (null == (i = this.verticalSpriteModule.spriteFrame) || i.decRef(), null == (t = this.horizontalSpriteModule.spriteFrame) || t.decRef());
  }, l.canvasResize = function () {
    _dependency3.default.orientationState === _dependency3.ORIENTATION_TYPE.HORIZONTAL ? this.toHorizontal() : this.toVerticall(), this.resetParticle();
  }, l.updateModules = function () {}, l.resetParticle = function () {
    this.particleList.forEach(function (e) {
      if (e.active) {
        var i = e.getComponent(_dependency2.ParticleSystem);
        i && i.clear();
      }
    });
  }, l.toVerticall = function () {
    this.orientationMode = Re.Verticall, this.setModules(), this.statusDisplay = "直版";
  }, l.toHorizontal = function () {
    this.orientationMode = Re.Horizontal, this.setModules(), this.statusDisplay = "橫版";
  }, l.updateNodeModuleParameter = function (e) {
    var i = e == Re.Verticall ? this.verticalNodeModule : this.horizontalNodeModule;
    i.isInit = !0, i.nodeActive = this.node.active, i.position.set(this.node.position), i.rotation = this.node.angle, this.node.getScale(i.scale), i.size = this.node.getComponent(_dependency2.UITransform).contentSize;
  }, l.updateAnimationModule = function (e) {
    if (this.animation = this.node.getComponent(_dependency2.Animation), 0 != _dependency2.isValid(this.animation)) {
      var i = e == Re.Verticall ? this.verticalAnimationModule : this.horizontalAnimationModule;
      i.isInit = !0, i.defalutClip = this.animation.defaultClip;
    }
  }, l.updateSpineModule = function (e) {
    if (this.spine = this.node.getComponent(_dependency2.sp.Skeleton), 0 != _dependency2.isValid(this.spine)) {
      var i = e == Re.Verticall ? this.verticalSpineModule : this.horizontalSpineModule;
      i.isInit = !0, i.animationName = this.spine.animation, i.skeletonData = this.spine.skeletonData;
    }
  }, l.updateSpriteModule = function (e) {
    if (this.sprite = this.node.getComponent(_dependency2.Sprite), 0 != _dependency2.isValid(this.sprite)) {
      var i = e == Re.Verticall ? this.verticalSpriteModule : this.horizontalSpriteModule;
      i.isInit = !0, i.spriteFrame = this.sprite.spriteFrame, i.material = this.sprite.getMaterial(0);
    }
  }, l.updateMaskModule = function (e) {
    if (this.mask = this.node.getComponent(_dependency2.Mask), 0 != _dependency2.isValid(this.mask)) {
      var i = e == Re.Verticall ? this.verticalMaskModule : this.horizontalMaskModule;
      i.isInit = !0, i.spriteFrame = this.mask.spriteFrame, i.alphaThreshold = this.mask.alphaThreshold;
    }
  }, l.updateLableModule = function (e) {
    if (this.label = this.node.getComponent(_dependency2.Label), 0 != _dependency2.isValid(this.label)) {
      var i = e == Re.Verticall ? this.verticalLabelModule : this.horizontalLabelModule;
      i.isInit = !0, i.fontSize = this.label.fontSize, i.lineHeight = this.label.lineHeight, i.spacingX = this.label.spacingX, i.font = this.label.font, i.isBold = this.label.isBold;
    }
  }, l.updatePolygonModule = function (e) {
    if (this.polygon = this.node.getComponent(_dependency2.PolygonCollider2D), 0 != _dependency2.isValid(this.polygon)) {
      var i = e == Re.Verticall ? this.verticalPolygonModule : this.horizontalPolygonModule;
      i.isInit = !0, i.points = this.polygon.points;
    }
  }, l.setModules = function () {
    this.orientationMode === Re.None && (this.orientationMode = _dependency2.view.getDesignResolutionSize().height > _dependency2.view.getDesignResolutionSize().width ? Re.Verticall : Re.Horizontal), this.nodeModule && this.setNodeModule(), this.animationModule && this.setAnimationModule(), this.spineModule && this.setSpineModule(), this.spriteModule && this.setSpriteModule(), this.maskModule && this.setMaskModule(), this.labelModule && this.setLableModule(), this.polygonModule && this.setPolygonModule();
  }, l.setNodeModule = function () {
    var e = this.orientationMode == Re.Verticall ? this.verticalNodeModule : this.horizontalNodeModule;
    0 != e.isInit && (this.node.active = e.nodeActive, this.node.setPosition(e.position), this.node.getComponent(_dependency2.UITransform).setContentSize(e.size), e.richTextSyncMaxWidth && this.node.getComponent(_dependency2.RichText) && (this.node.getComponent(_dependency2.RichText).maxWidth = this.node.getComponent(_dependency2.UITransform).width), this.node.angle = e.rotation, this.node.angle = e.rotation, this.node.setScale(e.scale));
  }, l.setAnimationModule = function () {
    if (this.animation = this.node.getComponent(_dependency2.Animation), 0 != _dependency2.isValid(this.animation)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalAnimationModule : this.horizontalAnimationModule;
      if (0 != e.isInit && null != e.defalutClip) {
        for (var i = this.getNowAnimationPlayClipName(this.animation), t = this.animation.clips, n = !1, o = 0; o < t.length; o++) if (t[o] == e.defalutClip) {
          n = !0;
          break;
        }
        if (n && this.animation.addClip(e.defalutClip, e.defalutClip.name), this.animation.defaultClip = e.defalutClip, i) {
          var l = this.animation.getState(i),
            a = 0;
          _dependency2.isValid(l) && (a = l.time), this.animation.crossFade(e.defalutClip.name, a);
        }
      }
    }
  }, l.getNowAnimationPlayClipName = function (e) {
    for (var i = e.clips, t = 0; t < i.length; t++) {
      if (e.getState(i[t].name).isPlaying) return i[t].name;
    }
    return null;
  }, l.changeName = function (e, i) {
    for (var t = "", n = e.split("_"), o = 0; o < n.length - 1; o++) t += n[o] + "_";
    return t += i == Re.Verticall ? "V" : "H";
  }, l.setSpineModule = function () {
    if ((this.spine = this.node.getComponent(_dependency2.sp.Skeleton), 0 != _dependency2.isValid(this.spine)) && 0 != (this.orientationMode == Re.Verticall ? this.verticalSpineModule : this.horizontalSpineModule).isInit) {
      var e = this.spine.getCurrent(0);
      if (null != e) {
        var i = e.trackTime,
          t = this.changeName(this.spine.animation, this.orientationMode),
          n = e.listener;
        if (null != this.spine.findAnimation(t)) {
          this.spine.animation = t;
          var o = this.spine.setAnimation(0, t, e.loop);
          o.trackTime = i, o.listener = n;
        } else _dependency2.error("【錯誤】" + this.node.name + " 找不到對應animation的名稱，確認Spine的Animation名稱是否符合命名規範");
      } else this.missSpine = !0;
    }
  }, l.setSpriteModule = function () {
    if (this.sprite = this.node.getComponent(_dependency2.Sprite), 0 != _dependency2.isValid(this.sprite)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalSpriteModule : this.horizontalSpriteModule;
      0 != e.isInit && (this.sprite.spriteFrame = e.spriteFrame);
    }
  }, l.setMaskModule = function () {
    if (this.mask = this.node.getComponent(_dependency2.Mask), 0 != _dependency2.isValid(this.mask)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalMaskModule : this.horizontalMaskModule;
      0 != e.isInit && (this.mask.spriteFrame = e.spriteFrame, this.mask.alphaThreshold = e.alphaThreshold);
    }
  }, l.setLableModule = function () {
    if (this.label = this.node.getComponent(_dependency2.Label), 0 != _dependency2.isValid(this.label)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalLabelModule : this.horizontalLabelModule;
      0 != e.isInit && (this.label.fontSize = e.fontSize, this.label.lineHeight = e.lineHeight, this.label.spacingX = e.spacingX, e.font && (this.label.font = e.font), this.label.isBold = e.isBold);
    }
  }, l.setPolygonModule = function () {
    if (this.polygon = this.node.getComponent(_dependency2.PolygonCollider2D), 0 != _dependency2.isValid(this.polygon)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalPolygonModule : this.horizontalPolygonModule;
      0 != e.isInit && (this.polygon.points = e.points);
    }
  }, l.getCanvas = function () {
    if (_dependency2.director.getScene().getChildByName("Canvas")) {
      if (0 == _dependency2.isValid(this.canvas)) {
        var e = _dependency2.director.getScene().getChildByName("Canvas");
        if (0 == _dependency2.isValid(e)) return _dependency2.log("找不到Canvas"), null;
        this.canvas = e.getComponent(_dependency2.Canvas);
      }
      return this.canvas;
    }
  }, l.getNowOrientationMode = function () {
    var e = this.getCanvas();
    return 0 == _dependency2.isValid(e) ? null : _dependency2.view.getDesignResolutionSize().width > _dependency2.view.getDesignResolutionSize().height ? Re.Horizontal : Re.Verticall;
  }, i;
}(_dependency2.Component)).prototype, "statusDisplay", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), he = _dependency.applyDecoratedDescriptor(se.prototype, "showParameter", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), de = _dependency.applyDecoratedDescriptor(se.prototype, "nodeModule", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), pe = _dependency.applyDecoratedDescriptor(se.prototype, "verticalNodeModule", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.NodeModule();
  }
}), ce = _dependency.applyDecoratedDescriptor(se.prototype, "horizontalNodeModule", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.NodeModule();
  }
}), Me = _dependency.applyDecoratedDescriptor(se.prototype, "animationModule", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), fe = _dependency.applyDecoratedDescriptor(se.prototype, "verticalAnimationModule", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.AnimationModule();
  }
}), me = _dependency.applyDecoratedDescriptor(se.prototype, "horizontalAnimationModule", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.AnimationModule();
  }
}), be = _dependency.applyDecoratedDescriptor(se.prototype, "spineModule", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), ge = _dependency.applyDecoratedDescriptor(se.prototype, "verticalSpineModule", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.SpineModule();
  }
}), ve = _dependency.applyDecoratedDescriptor(se.prototype, "horizontalSpineModule", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.SpineModule();
  }
}), ye = _dependency.applyDecoratedDescriptor(se.prototype, "spriteModule", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), ze = _dependency.applyDecoratedDescriptor(se.prototype, "verticalSpriteModule", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.SpriteModule();
  }
}), we = _dependency.applyDecoratedDescriptor(se.prototype, "horizontalSpriteModule", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.SpriteModule();
  }
}), Se = _dependency.applyDecoratedDescriptor(se.prototype, "maskModule", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ce = _dependency.applyDecoratedDescriptor(se.prototype, "verticalMaskModule", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.MaskModule();
  }
}), Pe = _dependency.applyDecoratedDescriptor(se.prototype, "horizontalMaskModule", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.MaskModule();
  }
}), ke = _dependency.applyDecoratedDescriptor(se.prototype, "labelModule", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ne = _dependency.applyDecoratedDescriptor(se.prototype, "verticalLabelModule", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.LabelModule();
  }
}), Ve = _dependency.applyDecoratedDescriptor(se.prototype, "horizontalLabelModule", [ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.LabelModule();
  }
}), Ae = _dependency.applyDecoratedDescriptor(se.prototype, "polygonModule", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ie = _dependency.applyDecoratedDescriptor(se.prototype, "verticalPolygonModule", [ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.PolygonModule();
  }
}), Le = _dependency.applyDecoratedDescriptor(se.prototype, "horizontalPolygonModule", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency4.PolygonModule();
  }
}), Te = _dependency.applyDecoratedDescriptor(se.prototype, "particleReset", [le], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Fe = _dependency.applyDecoratedDescriptor(se.prototype, "particleList", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), re = se)) || re) || re) || re));
_dependency2.cclegacy._RF.pop();
