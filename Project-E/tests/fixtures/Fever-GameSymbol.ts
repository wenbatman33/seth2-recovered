// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-SpriteSymbolItem";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1012-GameSymbolID";
import * as _dependency6 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1012-GameConfigModel";
import * as _dependency9 from "./g1012-GameEvent";
import * as _dependency0 from "./g1012-GameData";
var _export;
export { _export as GameSymbol };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSymbol":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, o, s, r, l, m, c, u, p, h, f, d, y, S, b, v, g, A, k, D, T;
var P, _, C, I, L, N, E, x, z, W, w, G, M, F, O, R, H, B;
_dependency2.cclegacy._RF.push({}, "8e979vGeGxLAKpkmaR9oR6e", "GameSymbol", void 0);
var U = _dependency2._decorator.ccclass,
  j = _dependency2._decorator.property,
  K = _dependency2._decorator.executeInEditMode;
_publish("GameSymbol", (P = U("GameSymbol"), _ = K(), C = j({
  type: _dependency2.CCInteger,
  override: !0
}), I = j({
  type: _dependency2.CCInteger,
  override: !0
}), L = j({
  type: _dependency2.SpriteFrame,
  tooltip: "放入對應圖片。通常[0]會是空，其餘會與後端symbolID對齊",
  override: !0
}), N = j({
  type: _dependency2.Node,
  override: !0
}), E = _dependency4.inject("anim", _dependency2.Node), x = _dependency4.inject("frame", _dependency2.Node), z = _dependency4.inject("transformAnim", _dependency2.Node), P(W = _((G = _dependency.applyDecoratedDescriptor((w = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "id", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "zIndex", M, _dependency.assertThisInitialized(e)), e.isExplode = !1, _dependency.initializerDefineProperty(e, "spriteFrames", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "staticSymbol", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "anim", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "frame", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "transformAnim", B, _dependency.assertThisInitialized(e)), e.originalParent = null, e.originalPoistion = _dependency2.v3(0, 0, 0), e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.start = function () {
    this.frame && (this.frame.active = !1);
  }, s.setSymbol = function (t, e, i) {
    if (void 0 === e && (e = !1), void 0 === i && (i = !0), this.staticSymbol.active = !0, this.isExplode = e, this.node.zIndex = this.zIndex, i && (this.originalParent = this.node.parent, this.originalPoistion = this.node.worldPosition), this.anim.active = !1, this.anim.getComponent(_dependency2.sp.Skeleton).clearTracks(), this.anim.getComponent(_dependency2.sp.Skeleton).setToSetupPose(), this.anim.getComponent(_dependency2.sp.Skeleton).setCompleteListener(null), this.frame.active = !1, this.id = t, this.staticSymbol) {
      var n = this.spriteFrames[t];
      n && (this.staticSymbol.getComponent(_dependency2.Sprite).spriteFrame = n);
    }
  }, s.init = function () {}, s.getSymbolAnimation = function (t) {
    var e = this.id,
      i = {
        skeletonDataName: "",
        animation: ""
      },
      n = _dependency6.default.zeroPad(e, 2);
    return i.skeletonDataName = "A_symbol_" + n, i.animation = "win", i;
  }, s.getFrameAnimation = function () {
    var t,
      e = this.id;
    return e < 2 ? t = "symbol_frame_C" : e < 5 ? t = "symbol_frame_A" : e < 9 && (t = "symbol_frame_B"), t;
  }, s.getTransformAnimation = function (t) {
    var e;
    return t < 2 ? e = this.data.is30TimesAnd5Trans() ? "trans_01_2" : "trans_01" : t < 9 && (e = this.data.is30TimesAnd5Trans() ? "trans_02_2" : "trans_02"), e;
  }, s.reset = function () {
    this.anim.active = !1, this.frame.active = !1, this.data.tempAnimTopMap.get(this.node.uuid) && (this.setOriginParent(), this.data.tempAnimTopMap.delete(this.node.uuid));
  }, s.setOriginParent = function () {
    this.anim && (this.anim.getComponent(_dependency2.sp.Skeleton).setCompleteListener(null), this.frame.active = !1, this.staticSymbol.active = !0, this.anim.active = !1);
    this.originalParent && this.node.setParent(this.originalParent), this.originalPoistion && this.node.setWorldPosition(this.originalPoistion);
  }, s.setScale = function () {}, s.unuse = function () {
    this.frame.active = !1, this.staticSymbol.active = !0, this.anim && (this.anim.active = !1);
  }, s.reuse = function () {}, s.playWinAnim = function (t, e, i) {
    var n = this;
    t && dispatch(_dependency9.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW, {
      data: this.node
    }), this.anim.active = !0, this.staticSymbol.active = !1;
    var a = this.anim.getComponent(_dependency2.sp.Skeleton),
      o = this.getSymbolAnimation(_dependency5.ESymbolAnimType.WIN),
      s = o.animation,
      r = o.skeletonDataName,
      l = _dependency8.default.getData().filePaths.symbolsSkeletonData;
    this.id !== _dependency5.EBackendSymbolID.SCATTER && this.id !== _dependency5.EBackendSymbolID.WILD && (this.frame.active = !0);
    var m = _dependency7.LoadUtils.getDirSkeleton(this.data.module, l, r);
    a.skeletonData = m, a.clearTracks(), a.setToSetupPose(), a.timeScale = _dependency8.default.getData().tempoConfig.symbolWinTimeScale;
    a.setAnimation(0, s, !1);
    a.setCompleteListener(function () {
      a.setCompleteListener(null), a.findAnimation("loop") && a.setAnimation(0, "loop", !0), n.id == _dependency5.EBackendSymbolID.WILD && (n.frame.active = !0), e && e();
    });
  }, s.playScatterWinAnim = function (t, e) {
    var i = this;
    void 0 === e && (e = .8), this.staticSymbol.active = !1, this.anim.active = !0;
    var n = this.anim.getComponent(_dependency2.sp.Skeleton),
      a = this.getSymbolAnimation(_dependency5.ESymbolAnimType.WIN),
      o = a.animation,
      s = a.skeletonDataName,
      r = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      l = _dependency7.LoadUtils.getDirSkeleton(this.data.module, r, s);
    n.skeletonData = l, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, o, !1), n.setCompleteListener(function () {
      n.setAnimation(0, "loop", !1), n.setCompleteListener(function () {}), i.scheduleOnce(function () {
        t && t();
      }, e);
    });
  }, s.playBonusWinAnim = function (t) {
    this.playScatterWinAnim(t, 1.5);
  }, s.playHitAnim = function (t) {
    this.anim.active = !0;
    var e = this.anim.getComponent(_dependency2.sp.Skeleton),
      i = this.getSymbolAnimation(_dependency5.ESymbolAnimType.HIT).skeletonDataName,
      n = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      a = _dependency7.LoadUtils.getDirSkeleton(this.data.module, n, i);
    e.skeletonData = a, e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, "loop", !1), e.setCompleteListener(function () {
      t && t();
    });
  }, s.playScatterHitAnim = function (t) {
    this.anim.active = !0;
    var e = this.anim.getComponent(_dependency2.sp.Skeleton),
      i = this.getSymbolAnimation(_dependency5.ESymbolAnimType.HIT).skeletonDataName,
      n = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      a = _dependency7.LoadUtils.getDirSkeleton(this.data.module, n, i);
    e.skeletonData = a, e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, "tease", !1), e.setCompleteListener(function () {
      e.findAnimation("loop") && e.setAnimation(0, "loop", !0), t && t();
    });
  }, s.playWildHitAnim = function (t) {
    this.anim.active = !0;
    var e = this.anim.getComponent(_dependency2.sp.Skeleton),
      i = this.getSymbolAnimation(_dependency5.ESymbolAnimType.HIT).skeletonDataName,
      n = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      a = _dependency7.LoadUtils.getDirSkeleton(this.data.module, n, i);
    e.skeletonData = a, e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, "loop", !0), e.setCompleteListener(function () {
      t && t();
    });
  }, s.shake = function () {
    for (var t, e = this, i = this.node.position.clone(), n = _dependency2.tween(this.node).bindNodeState(false), a = 0; a < 4; a++) n = n.then((t = void 0, t = new _dependency2.Vec3(5 * (Math.random() - .5), 5 * (Math.random() - .5), 0), _dependency2.tween().bindNodeState(false).to(.03, {
      x: i.x + t.x,
      y: i.y + t.y
    }).to(.03, {
      x: i.x,
      y: i.y
    })));
    n.call(function () {
      e.node.setPosition(i);
    }).start();
  }, s.hideSymbolAnime = function () {
    this.frame.active = !1, this.anim.active = !1, this.staticSymbol.active = !0;
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency9.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT, function () {
      t.data.tempAnimTopMap.get(t.node.uuid) && (t.setOriginParent(), t.data.tempAnimTopMap.delete(t.node.uuid), t.frame.active = !1);
    }), this.on(_dependency9.GameEvent.SKIP_WIN_LINE, function () {});
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency3.SpriteSymbolItem)).prototype, "id", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), M = _dependency.applyDecoratedDescriptor(w.prototype, "zIndex", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), F = _dependency.applyDecoratedDescriptor(w.prototype, "spriteFrames", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), O = _dependency.applyDecoratedDescriptor(w.prototype, "staticSymbol", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(w.prototype, "anim", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(w.prototype, "frame", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(w.prototype, "transformAnim", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = w)) || W) || W));
_dependency2.cclegacy._RF.pop();
