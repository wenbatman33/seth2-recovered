// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/BackgroundView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-LoadUtils";
import * as __dependency_6 from "./g1007-GameConfigModel";
import * as __dependency_7 from "./g1007-GameData";
import * as __dependency_8 from "./g1007-GameEvent";
import * as __dependency_9 from "./g1007-types";
var __export_0;
export { __export_0 as BackgroundView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BackgroundView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, r, a, o, s, u, l, c, g, m, p, f, h, b, d, y, _, C, S, E, G;
var F, R, B, v, A, M, w, T, D, L, I, P, N, k, z, H, O, U, V;
__dependency_1.cclegacy._RF.push({}, "4f34drWfR9MvoV2Hv5zuluz", "BackgroundView", void 0);
var q = __dependency_1._decorator.ccclass,
  x = __dependency_1._decorator.property;
__publish("BackgroundView", (F = q("Hades_BackgroundView"), R = __dependency_4.inject("bg", __dependency_1.Sprite), B = __dependency_4.inject("bgSpine", __dependency_1.sp.Skeleton), v = __dependency_4.inject("remainingContent", __dependency_1.Node), A = __dependency_4.inject("remainingContent/bg", __dependency_1.Sprite), M = __dependency_4.inject("remainingContent/remaining", __dependency_1.Label), w = __dependency_4.inject("symbolMerge", __dependency_1.sp.Skeleton), T = x(__dependency_1.SpriteFrame), D = x(__dependency_1.Sprite), F((P = __dependency_0.applyDecoratedDescriptor((I = function (e) {
  function t() {
    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(t, "bg", P, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "bgSpine", N, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "remainingContent", k, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "remainingBgSprite", z, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "remaining", H, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "symbolMerge", O, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "bgBlurSpriteFrames", U, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "bgBlur", V, __dependency_0.assertThisInitialized(t)), t.increaseCounts = 0, t.totalFGCounts = 0, t.currentFGCounts = 0, t.extraFgRounds = 0, t.currentGameType = "", t;
  }
  __dependency_0.inheritsLoose(t, e);
  var o = t.prototype;
  return o.onLoad = function () {
    e.prototype.onLoad.call(this), this.symbolMerge.clearTracks(), this.symbolMerge.setToSetupPose(), this.symbolMerge.node.active = !1;
  }, o.start = function () {}, o.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, o.setRemaining = function () {
    var e = this.data.getData().parser.currentGameState.freeGameCount;
    this.increaseCounts = 0, this.currentFGCounts = 0, this.totalFGCounts = e, this.remaining.string = this.currentFGCounts + "/" + this.totalFGCounts, this.setRemainingBg();
  }, o.setBg = function (e) {
    var t = __dependency_6.default.getData().filePaths.common,
      n = e ? "mg_bg" : "fg_bg",
      i = __dependency_5.LoadUtils.getDirSp(this.data.module, t, n);
    this.bg.spriteFrame = i;
  }, o.setBgBlur = function (e) {
    this.bgBlur.spriteFrame = e ? this.bgBlurSpriteFrames[0] : this.bgBlurSpriteFrames[1];
  }, o.setBgAnim = function (e) {
    var t = this,
      n = e ? "mg" : "fg";
    this.currentGameType !== n && (this.bgSpine.clearTracks(), this.bgSpine.setToSetupPose(), this.bgSpine.setAnimation(0, n + "_tras", !1), this.bgSpine.setCompleteListener(function () {
      t.bgSpine.setCompleteListener(null), t.bgSpine.setAnimation(0, n, !0);
    })), this.currentGameType = n;
  }, o.setRemainingBg = function () {
    var e,
      t = this.data.getData().buyFeatureType,
      n = __dependency_6.default.getData().filePaths.common,
      i = ((e = {})[__dependency_9.EFeature.LUCK_OR_BAD_LUCK] = "f_btn_01", e[__dependency_9.EFeature.SUPER_FREE_GAME] = "f_btn_02", e[__dependency_9.EFeature.FREE_GAME] = "f_btn_03", e[__dependency_9.EFeature.THE_WRATH_OF_HADES] = "f_btn_04", e[__dependency_9.EFeature.THE_POWER_OF_HADES] = "f_btn_05", e),
      r = [__dependency_9.EFeature.LUCK_OR_BAD_LUCK, __dependency_9.EFeature.SUPER_FREE_GAME],
      a = i[__dependency_9.EFeature.FREE_GAME];
    t.length && r.includes(t) && (a = i[t]);
    var o = __dependency_5.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], n, a + "_normal");
    this.remainingBgSprite.spriteFrame = o;
  }, o.setRemainingActive = function (e) {
    this.remainingContent.active = !e;
  }, o.updateRemaining = function () {
    this.currentFGCounts++, this.remaining.string = this.currentFGCounts + "/" + this.totalFGCounts;
  }, o.increaseRemaining = function () {
    var e = this,
      t = this.data.getData().parser.currentGameState.freeGameCount,
      n = this.remaining.color;
    0 == this.increaseCounts && (this.extraFgRounds = t - (this.totalFGCounts - this.currentFGCounts)), this.increaseCounts++;
    var i = 1 + .05 * this.increaseCounts,
      r = 1 - .02 * this.increaseCounts;
    __dependency_1.tween(this.remaining.node).bindNodeState(false).to(.1, {
      scale: new __dependency_1.Vec3(i, i, 1)
    }, {
      onComplete: function () {
        e.totalFGCounts++, e.remaining.string = e.currentFGCounts + "/" + e.totalFGCounts;
      },
      easing: __dependency_1.easing.quintIn
    }).to(.05, {
      scale: new __dependency_1.Vec3(r, r, 1)
    }, {
      easing: __dependency_1.easing.quintIn
    }).call(function () {
      e.increaseCounts == e.extraFgRounds ? (e.increaseCounts = 0, __dependency_1.tween(e.remaining.node).bindNodeState(false).to(.1, {
        scale: new __dependency_1.Vec3(1, 1, 1)
      }, {
        easing: __dependency_1.easing.quintIn
      }).start(), e.scheduleOnce(function () {
        dispatch(__dependency_8.GameEvent.INCREASE_FG_REMAINING_END);
      }, 1)) : e.increaseCounts < e.extraFgRounds && e.increaseRemaining();
    }).start(), __dependency_1.tween(n).bindNodeState(false).to(.1, {
      a: 130
    }, {
      easing: __dependency_1.easing.quintIn
    }).to(.05, {
      a: 255
    }, {
      easing: __dependency_1.easing.quintIn
    }).start();
  }, o.playBounceTween = function (e, t) {
    __dependency_1.tween(e).bindNodeState(false).to(.1, {
      scale: new __dependency_1.Vec3(1.5, 1.5, 1.5)
    }).delay(.01).to(.1, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        t && t();
      }
    }).start();
  }, o.showSignLighting = function () {
    var e = this;
    this.symbolMerge.node.active = !0, this.symbolMerge.clearTracks(), this.symbolMerge.setToSetupPose(), this.symbolMerge.setAnimation(0, "sign_reel_bk", !1), this.symbolMerge.setCompleteListener(function () {
      e.symbolMerge.setCompleteListener(null), e.symbolMerge.clearTracks(), e.symbolMerge.setToSetupPose(), e.symbolMerge.node.active = !1;
    });
  }, o.updateByGameStyle = function (e) {
    this.setBgAnim(e), this.setBgBlur(e), this.setRemainingActive(e), !e && this.setRemaining();
  }, o.reset = function () {}, o.setData = function (e) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var e = this;
    this.on(__dependency_8.GameEvent.PARSER_INIT_COMPLETED, function () {
      e.updateByGameStyle(!0);
    }), this.on(__dependency_8.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      e.updateByGameStyle(!0);
    }), this.on(__dependency_8.GameEvent.CHANGE_GAME_STYLE, function (t) {
      e.updateByGameStyle(t.data);
    }), this.on(__dependency_8.GameEvent.UPDATE_FG_REMAINING, function () {
      e.updateRemaining(), e.playBounceTween(e.remaining.node);
    }), this.on(__dependency_8.GameEvent.INCREASE_FG_REMAINING, function () {
      e.increaseRemaining();
    }), this.on(__dependency_8.GameEvent.SHOW_SIGN_LIGHTING, function () {
      e.showSignLighting();
    });
  }, __dependency_0.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_7.default);
    }
  }]), t;
}(__dependency_3.default)).prototype, "bg", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = __dependency_0.applyDecoratedDescriptor(I.prototype, "bgSpine", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = __dependency_0.applyDecoratedDescriptor(I.prototype, "remainingContent", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = __dependency_0.applyDecoratedDescriptor(I.prototype, "remainingBgSprite", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __dependency_0.applyDecoratedDescriptor(I.prototype, "remaining", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __dependency_0.applyDecoratedDescriptor(I.prototype, "symbolMerge", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = __dependency_0.applyDecoratedDescriptor(I.prototype, "bgBlurSpriteFrames", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), V = __dependency_0.applyDecoratedDescriptor(I.prototype, "bgBlur", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = I)) || L));
__dependency_1.cclegacy._RF.pop();

// Responsive host compatibility: keep the original raster backdrop covering
// tall windows while leaving the horizontal gameplay panel unchanged.
const __originalHadesBackdropLoad = __export_0.prototype.onLoad;
const __originalHadesBackdropDestroy = __export_0.prototype.onDestroy;
__export_0.prototype.onLoad = function (...args) {
  __originalHadesBackdropLoad.apply(this, args);
  this.__fitLocalBackdrop = () => {
    const sprite = this.bgBlur, frame = __dependency_1.screen.windowSize;
    if (!sprite || frame.width <= 0 || frame.height <= 0) return;
    const image = sprite.node.getComponent(__dependency_1.UITransform);
    const panel = sprite.node.parent.getComponent(__dependency_1.UITransform);
    if (!image || !panel || image.height <= 0) return;
    const scale = Math.max(1, panel.width * frame.height / frame.width / image.height);
    sprite.node.setScale(scale, scale, 1);
  };
  __dependency_1.screen.on('window-resize', this.__fitLocalBackdrop, this);
  this.__fitLocalBackdrop();
};
__export_0.prototype.onDestroy = function (...args) {
  __dependency_1.screen.off('window-resize', this.__fitLocalBackdrop, this);
  return __originalHadesBackdropDestroy.apply(this, args);
};
