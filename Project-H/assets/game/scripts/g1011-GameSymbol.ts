// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-SpriteSymbolItem";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency6 from "./g1011-GameConfigModel";
import * as _dependency7 from "./g1011-GameEvent";
import * as _dependency8 from "./g1011-GameData";
import * as _dependency9 from "../../shared/scripts/slotFramework-MathUtil";
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
var e, i, n, a, o, s, r, m, l, c, h, p, u, S, f, d, y, g, A, b, v, _, k;
var F, P, D, L, T, E, C, W, I, M, w, R, G, z, N, x, q;
_dependency2.cclegacy._RF.push({}, "8e979vGeGxLAKpkmaR9oR6e", "GameSymbol", void 0);
var O = _dependency2._decorator.ccclass,
  Q = _dependency2._decorator.property,
  U = _dependency2._decorator.executeInEditMode;
_publish("GameSymbol", (F = O("GameSymbol"), P = U(), D = Q({
  type: _dependency2.CCInteger,
  override: !0
}), L = Q({
  type: _dependency2.CCInteger,
  override: !0
}), T = Q({
  type: _dependency2.SpriteFrame,
  tooltip: "放入對應圖片。通常[0]會是空，其餘會與後端symbolID對齊",
  override: !0
}), E = Q({
  type: _dependency2.Node,
  override: !0
}), C = _dependency4.inject("anim", _dependency2.Node), W = _dependency4.inject("frame", _dependency2.Node), F(I = P(((q = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "id", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "zIndex", R, _dependency.assertThisInitialized(e)), e.isExplode = !1, _dependency.initializerDefineProperty(e, "spriteFrames", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "staticSymbol", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "anim", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "frame", x, _dependency.assertThisInitialized(e)), e._frameSprite = null, e._frameStep = null, e.originalParent = null, e.originalPosition = _dependency2.v3(0, 0, 0), e.originalScale = _dependency2.v3(1, 1, 1), e._isWinAnimPlaying = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.start = function () {}, s.unuse = function () {
    this.hideFrame(), this.staticSymbol.active = !0, this.anim && (this.anim.active = !1);
  }, s.reuse = function () {}, s.setSymbol = function (t, e, i) {
    if (void 0 === e && (e = !1), void 0 === i && (i = !0), this.staticSymbol.active = !0, this.isExplode = e, this.node.zIndex = this.zIndex, i && (this.originalParent = this.node.parent, this.originalPosition = this.node.worldPosition, this.originalScale = this.node.scale.clone()), this.anim.active = !1, this.anim.getComponent(_dependency2.sp.Skeleton).clearTracks(), this.anim.getComponent(_dependency2.sp.Skeleton).setToSetupPose(), this.anim.getComponent(_dependency2.sp.Skeleton).setCompleteListener(null), this._isWinAnimPlaying = !1, this.hideFrame(), this.id = t, this.staticSymbol) {
      var n = this.spriteFrames[t];
      n && (this.staticSymbol.getComponent(_dependency2.Sprite).spriteFrame = n);
    }
  }, s.markWinAnimStopped = function () {
    this._isWinAnimPlaying = !1;
  }, s.getSymbolAnimation = function () {
    var t = this.id;
    return {
      skeletonDataName: "A_symbol_" + _dependency9.default.zeroPad(t, 2),
      animation: [1, 2, 3, 4, 9].includes(t) ? "loop" : "win"
    };
  }, s.hideSymbolAnime = function () {
    this.markWinAnimStopped(), this.hideFrame(), "loop" === this.getSymbolAnimation().animation ? this.playLoopAnim() : (this.anim.active = !1, this.staticSymbol.active = !0);
  }, s.reset = function () {
    this.hideFrame(), this.anim.active = !1, this.data.tempAnimTopMap.get(this.node.uuid) && (this.setOriginParent(), this.data.tempAnimTopMap.delete(this.node.uuid));
  }, s.setOriginParent = function () {
    this.node.setParent(this.originalParent, !0), this.node.setWorldPosition(this.originalPosition), this.node.setScale(this.originalScale);
  }, s.syncAnimScale = function () {
    var t = this.staticSymbol.getComponent(_dependency2.UITransform),
      e = this.anim.getComponent(_dependency2.UITransform);
    t && e && 0 !== e.width && 0 !== e.height && this.anim.setScale(.64, .64, 1);
  }, s.playWinAnim = function (t, e) {
    var i = this;
    t && dispatch(_dependency7.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW, {
      data: this.node
    }), this.staticSymbol.active = !1, this.frame.active = !0, this.playFrameSequence(), this.anim.active = !0;
    var n = this.anim.getComponent(_dependency2.sp.Skeleton),
      a = this.getSymbolAnimation().skeletonDataName,
      o = _dependency6.default.getData().filePaths.symbolsSkeletonData,
      s = _dependency5.LoadUtils.getDirSkeleton(this.data.module, o, a);
    if (!s) return Log.e("playWinAnim: skeletonData 為 null (" + a + ")，直接回呼避免卡住"), void (e && e());
    n.skeletonData = s, this.syncAnimScale(), n.clearTracks(), n.setToSetupPose(), this._isWinAnimPlaying = !0, n.setAnimation(0, "win", !1), n.setCompleteListener(function () {
      n.setCompleteListener(null), e && e(), i._isWinAnimPlaying && n.setAnimation(0, "win", !0);
    });
  }, s.playScatterWinAnim = function (t, e) {
    var i = this;
    void 0 === e && (e = .8), this.staticSymbol.active = !1, this.anim.active = !0;
    var n = this.anim.getComponent(_dependency2.sp.Skeleton),
      a = this.getSymbolAnimation(),
      o = (a.animation, a.skeletonDataName),
      s = _dependency6.default.getData().filePaths.symbolsSkeletonData,
      r = _dependency5.LoadUtils.getDirSkeleton(this.data.module, s, o);
    n.skeletonData = r, this.syncAnimScale(), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "win", !1), n.setCompleteListener(function () {
      n.setAnimation(0, "tease", !0), n.setCompleteListener(function () {}), i.scheduleOnce(function () {
        t && t();
      }, e);
    });
  }, s.playBonusWinAnim = function (t) {
    this.playScatterWinAnim(t, 1.5);
  }, s.playLandWinAnim = function () {
    this.anim.active = !0;
    var t = this.anim.getComponent(_dependency2.sp.Skeleton),
      e = this.getSymbolAnimation(),
      i = e.animation,
      n = e.skeletonDataName,
      a = _dependency6.default.getData().filePaths.symbolsSkeletonData,
      o = _dependency5.LoadUtils.getDirSkeleton(this.data.module, a, n);
    if (!o) return Log.e("playLandWinAnim: skeletonData 為 null (" + n + ")，改用待機動畫"), void this.playLoopAnim();
    t.skeletonData = o, this.syncAnimScale(), t.clearTracks(), t.setToSetupPose(), t.setCompleteListener(null), t.setAnimation(0, "win", !1), "win" !== i && t.addAnimation(0, i, !0);
  }, s.playHitAnim = function (t) {
    this.anim.active = !0;
    var e = this.anim.getComponent(_dependency2.sp.Skeleton),
      i = this.getSymbolAnimation(),
      n = i.animation,
      a = i.skeletonDataName,
      o = _dependency6.default.getData().filePaths.symbolsSkeletonData,
      s = _dependency5.LoadUtils.getDirSkeleton(this.data.module, o, a);
    e.skeletonData = s, this.syncAnimScale(), e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, n, !0), e.setCompleteListener(function () {
      e.setCompleteListener(null), t && t();
    });
  }, s.playLoopAnim = function () {
    this.markWinAnimStopped(), this.hideFrame(), this.staticSymbol.active = !1;
    var t = this.anim.getComponent(_dependency2.sp.Skeleton),
      e = this.getSymbolAnimation(),
      i = e.animation,
      n = e.skeletonDataName;
    if (this.anim.active) {
      var a = t.getCurrent(0);
      if (a && a.animation.name === i && a.loop) return;
    }
    this.anim.active = !0;
    var o = _dependency6.default.getData().filePaths.symbolsSkeletonData,
      s = _dependency5.LoadUtils.getDirSkeleton(this.data.module, o, n);
    t.skeletonData = s, this.syncAnimScale(), t.clearTracks(), t.setToSetupPose(), t.setAnimation(0, i, !0);
  }, e.getFrameSeqFrames = function (t) {
    if (e._frameSeqFrames && e._frameSeqFrames.length > 0) return e._frameSeqFrames;
    for (var i = _dependency6.default.getData().filePaths.wildFrameSpriteFrame, n = [], a = e.FRAME_SEQ_FIRST; a <= e.FRAME_SEQ_LAST; a++) {
      var o = "F_frame_" + _dependency9.default.zeroPad(a, 3);
      try {
        n.push(_dependency5.LoadUtils.getDirSp(t, i, o));
      } catch (t) {
        Log.e("GameSymbol: 找不到中獎框序列圖 " + o, t);
      }
    }
    return 0 === n.length ? Log.e("GameSymbol: " + i + " 一張都沒撈到，中獎框只會是靜止的一張") : n.length < e.FRAME_SEQ_LAST && Log.w("GameSymbol: 中獎框序列圖只撈到 " + n.length + " 張（應為 15），動畫會不完整"), e._frameSeqFrames = n, n;
  }, s.playFrameSequence = function () {
    var t = this,
      i = e.getFrameSeqFrames(this.data.module);
    if (0 === i.length) return !1;
    if (!(this._frameSprite && this._frameSprite.isValid || (this._frameSprite = this.frame.getComponent(_dependency2.Sprite), this._frameSprite))) {
      var n = this.frame.getComponent(_dependency2.sp.Skeleton);
      n && (n.clearTracks(), n.enabled = !1), this._frameSprite = this.frame.addComponent(_dependency2.Sprite), this._frameSprite.sizeMode = _dependency2.Sprite.SizeMode.RAW, Log.w("GameSymbol: frame 上沒有 Sprite，已在 runtime 補上。正解是把 GameView.prefab 裡那份舊的 GameSymbol 展開複本清掉，讓它吃 prefabs/GameSymbol 的版本（frame 已改成 Sprite）");
    }
    this.stopFrameSequence();
    var a = 0;
    return this._frameSprite.spriteFrame = i[0], this._frameStep = function () {
      a = (a + 1) % i.length, t._frameSprite.spriteFrame = i[a];
    }, this.schedule(this._frameStep, 1 / e.FRAME_SEQ_FPS), !0;
  }, s.stopFrameSequence = function () {
    this._frameStep && (this.unschedule(this._frameStep), this._frameStep = null);
  }, s.hideFrame = function () {
    this.stopFrameSequence(), this.frame.active = !1;
  }, s.playFrameAnim = function (t) {
    var e = this;
    this.frame.active = !0, this.scheduleOnce(function () {
      e.staticSymbol.active = !1, e.anim.active = !1, e.hideFrame();
    }, .2);
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
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT, function () {
      t.markWinAnimStopped(), t.data.tempAnimTopMap.get(t.node.uuid) && (t.setOriginParent(), t.data.tempAnimTopMap.delete(t.node.uuid)), t.hideFrame(), "loop" === t.getSymbolAnimation().animation ? t.playLoopAnim() : (t.anim.active = !1, t.staticSymbol.active = !0);
    }), this.on(_dependency7.GameEvent.SKIP_WIN_LINE, function () {}), this.on(_dependency7.GameEvent.SHOW_WIN_SUMMARY_END, function () {
      "loop" == t.getSymbolAnimation().animation && t.playLoopAnim();
    }), this.on(_dependency7.GameEvent.REEL_ALL_STOP, function () {
      "loop" == t.getSymbolAnimation().animation && t.playLoopAnim();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), e;
}(_dependency3.SpriteSymbolItem)).FRAME_SEQ_FIRST = 1, q.FRAME_SEQ_LAST = 15, q.FRAME_SEQ_FPS = 30, q._frameSeqFrames = null, w = _dependency.applyDecoratedDescriptor((M = q).prototype, "id", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), R = _dependency.applyDecoratedDescriptor(M.prototype, "zIndex", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), G = _dependency.applyDecoratedDescriptor(M.prototype, "spriteFrames", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), z = _dependency.applyDecoratedDescriptor(M.prototype, "staticSymbol", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(M.prototype, "anim", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(M.prototype, "frame", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = M)) || I) || I));
_dependency2.cclegacy._RF.pop();
