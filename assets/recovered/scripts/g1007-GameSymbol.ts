// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameSymbol.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./main-SymbolBase";
import * as __dependency_4 from "./framework-LoadUtils";
import * as __dependency_5 from "./g1007-SymbolView";
import * as __dependency_6 from "./g1007-GameConfigModel";
import * as __dependency_7 from "./g1007-GameData";
import * as __dependency_8 from "./g1007-GameSymbolID";
import * as __dependency_9 from "./framework-MathUtil";
import * as __dependency_10 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as GameSymbol };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSymbol":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, o, a, l, s, r, c, m, S, p, u, y, b, f, d, h, v, g, k, T, C, P, D, A, w, L, _, O;
var z, M, E, B, I, G, x, F, W, K, R, J, U, Y, j, H, N, V, q, Q;
__dependency_1.cclegacy._RF.push({}, "b93f5d7qo1Ed6M8Q8L+jhtc", "GameSymbol", void 0);
var X = __dependency_1._decorator.ccclass,
  Z = __dependency_1._decorator.property,
  $ = __dependency_1._decorator.executeInEditMode;
__publish("GameSymbol", (z = X("Hades_GameSymbol"), M = $(), E = __dependency_2.inject("staticSymbol", __dependency_1.Sprite), B = __dependency_2.inject("symbolSpine", __dependency_1.Node), I = __dependency_2.inject("transSpine", __dependency_1.Node), G = __dependency_2.inject("frameSpine", __dependency_1.Node), x = __dependency_2.inject("pieceSpine", __dependency_1.Node), F = Z({
  type: __dependency_1.CCInteger,
  override: !0
}), W = Z({
  type: __dependency_1.SpriteFrame,
  tooltip: "放入對應圖片。通常[0]會是空，其餘會與後端symbolID對齊",
  override: !0
}), K = Z({
  type: __dependency_1.Node,
  override: !0
}), z(R = M((U = __dependency_0.applyDecoratedDescriptor((J = function (e) {
  function t() {
    for (var t, n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(t, "staticSymbolSprite", U, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "symbolSpine", Y, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "transSpine", j, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "frameSpine", H, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "pieceSpine", N, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "id", V, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "spriteFrames", q, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "staticSymbol", Q, __dependency_0.assertThisInitialized(t)), t.isGroupSymbol = !1, t.frameScale = null, t.isMoveCompleted = !1, t;
  }
  __dependency_0.inheritsLoose(t, e);
  var r = t.prototype;
  return r.start = function () {}, r.setSymbol = function (e) {
    var t = this.spriteFrames[e];
    t && (this.staticSymbol.getComponent(__dependency_1.Sprite).spriteFrame = t), this.name = "" + e, this.id = e, this.staticSymbol.active = !0, this.reset();
  }, r.init = function () {}, r.reset = function () {
    this.symbolSpine.active = !1, this.frameSpine.active = !1, this.isGroupSymbol = !1, this.isMoveCompleted = !1, this.frameScale = null, this.pieceSpine.active = !1, this.setSymbolScale(1), this.node.off(__dependency_5.ESymbolEvent.STOP_SYMBOL_OUT), this.node.off(__dependency_5.ESymbolEvent.STOP_SYMBOL_IN);
  }, r.addEvents = function () {}, r.playIdleAnim = function () {
    var e = __dependency_6.default.getData().filePaths,
      t = e.normalSymbolsSkeletonData,
      n = e.groupSymbolsSkeletonData,
      i = [__dependency_8.EBackendSymbolID.JACKPOT].includes(this.id) ? t : n,
      o = __dependency_4.LoadUtils.getDirSkeleton(this.data.module, i, "symbol_" + __dependency_9.default.zeroPad(this.id)),
      a = this.symbolSpine.getComponent(__dependency_1.sp.Skeleton);
    this.id == __dependency_8.EBackendSymbolID.WILD && this.symbolSpine.setScale(new __dependency_1.Vec3(1, 1, 1)), this.symbolSpine.active = !0, this.staticSymbol.active = !1, a.skeletonData = o, a.clearTracks(), a.setToSetupPose(), a.timeScale = 1, a.setAnimation(0, "idle", !0), a.setCompleteListener(null);
  }, r.playScatterExpectAnim = function () {
    var e = __dependency_6.default.getData().filePaths.normalSymbolsSkeletonData,
      t = __dependency_4.LoadUtils.getDirSkeleton(this.data.module, e, "symbol_" + __dependency_9.default.zeroPad(this.id)),
      n = this.symbolSpine.getComponent(__dependency_1.sp.Skeleton);
    this.id == __dependency_8.EBackendSymbolID.WILD && this.symbolSpine.setScale(new __dependency_1.Vec3(1, 1, 1)), this.symbolSpine.active = !0, this.staticSymbol.active = !1, n.skeletonData = t, n.clearTracks(), n.setToSetupPose(), n.timeScale = 1, n.setAnimation(0, "expect", !0), n.setCompleteListener(null);
  }, r.playWinAnim = function (e) {
    var t = this;
    return new Promise(function (n) {
      var i = __dependency_6.default.getData().filePaths,
        o = i.normalSymbolsSkeletonData,
        a = i.groupSymbolsSkeletonData,
        l = [__dependency_8.EBackendSymbolID.JACKPOT, __dependency_8.EBackendSymbolID.SCATTER].includes(t.id) ? o : a,
        s = t.symbolSpine.getComponent(__dependency_1.sp.Skeleton),
        r = __dependency_4.LoadUtils.getDirSkeleton(t.data.module, l, "symbol_" + __dependency_9.default.zeroPad(t.id)),
        c = e ? "win_full" : "win";
      t.id == __dependency_8.EBackendSymbolID.WILD && t.symbolSpine.setScale(new __dependency_1.Vec3(1, 1, 1)), t.symbolSpine.active = !0, t.staticSymbol.active = !1, s.skeletonData = r, s.clearTracks(), s.setToSetupPose(), s.timeScale = 1, s.setAnimation(0, c, !1), s.setCompleteListener(function () {
        s.setCompleteListener(null), n();
      });
    });
  }, r.playWinToIdleAnim = function () {
    var e = this;
    return new Promise(function (t) {
      var n = __dependency_6.default.getData().filePaths,
        i = n.normalSymbolsSkeletonData,
        o = n.groupSymbolsSkeletonData,
        a = [__dependency_8.EBackendSymbolID.JACKPOT].includes(e.id) ? i : o,
        l = __dependency_4.LoadUtils.getDirSkeleton(e.data.module, a, "symbol_" + __dependency_9.default.zeroPad(e.id)),
        s = e.symbolSpine.getComponent(__dependency_1.sp.Skeleton);
      e.symbolSpine.active = !0, e.staticSymbol.active = !1, s.skeletonData = l, s.clearTracks(), s.setToSetupPose(), s.timeScale = 1, s.setMix("win", "idle", .3), s.setAnimation(0, "win", !1), s.setCompleteListener(function () {
        s.setCompleteListener(null), s.clearTracks(), s.setToSetupPose(), s.setAnimation(0, "idle", !0);
      }), e.scheduleOnce(t, 2.5);
    });
  }, r.playWinToExpectAnim = function () {
    var e = this;
    return new Promise(function (t) {
      var n = __dependency_6.default.getData().filePaths,
        i = n.normalSymbolsSkeletonData,
        o = n.groupSymbolsSkeletonData,
        a = [__dependency_8.EBackendSymbolID.JACKPOT, __dependency_8.EBackendSymbolID.SCATTER].includes(e.id) ? i : o,
        l = __dependency_4.LoadUtils.getDirSkeleton(e.data.module, a, "symbol_" + __dependency_9.default.zeroPad(e.id)),
        s = e.symbolSpine.getComponent(__dependency_1.sp.Skeleton);
      e.symbolSpine.active = !0, e.staticSymbol.active = !1, s.skeletonData = l, s.clearTracks(), s.setToSetupPose(), s.timeScale = 1, s.setMix("win", "expect", .3), s.setAnimation(0, "win", !1), s.setCompleteListener(function () {
        s.setCompleteListener(null), s.clearTracks(), s.setToSetupPose(), s.setAnimation(0, "expect", !0);
      }), e.scheduleOnce(t, 2.5);
    });
  }, r.playFrameWinAnim = function () {
    var e = this;
    return new Promise(function (t) {
      var n = e.frameSpine.getComponent(__dependency_1.sp.Skeleton);
      e.frameSpine.active = !0, e.frameSpine.setScale(e.frameScale, e.frameScale, 1), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_6.EBTM.BTM_SYMBOL_MATCH_LOCK
        }
      }), n.clearTracks(), n.setToSetupPose(), n.timeScale = .6, n.setAnimation(0, "win", !1), n.setCompleteListener(function () {
        n.setCompleteListener(null), t();
      });
    });
  }, r.playOutAnim = function () {
    var e = this;
    return new Promise(function (t) {
      var n = __dependency_6.default.getData().filePaths,
        i = n.normalSymbolsSkeletonData,
        o = n.groupSymbolsSkeletonData,
        a = [__dependency_8.EBackendSymbolID.JACKPOT, __dependency_8.EBackendSymbolID.SCATTER].includes(e.id) ? i : o,
        l = e.symbolSpine.getComponent(__dependency_1.sp.Skeleton),
        s = __dependency_4.LoadUtils.getDirSkeleton(e.data.module, a, "symbol_" + __dependency_9.default.zeroPad(e.id));
      e.symbolSpine.active = !0, e.staticSymbol.active = !1, l.skeletonData = s, l.clearTracks(), l.setToSetupPose(), l.timeScale = .1, l.setAnimation(0, "out", !1), e.scheduleOnce(t, .3);
      var r = __dependency_4.LoadUtils.getDirSkeleton(e.data.module, a, "symbol_" + __dependency_9.default.zeroPad(e.id) + "_piece");
      e.pieceSpine.active = !0, e.pieceSpine.setScale(e.symbolSpine.scale);
      var c = e.pieceSpine.getComponent(__dependency_1.sp.Skeleton);
      c.timeScale = 1, c.skeletonData = r, c.clearTracks(), c.setToSetupPose(), c.timeScale = .6, c.setAnimation(0, "out", !1), c.setCompleteListener(function () {
        c.setCompleteListener(null), c.timeScale = 1, e.recycleSymbol();
      }), __dependency_1.tween(e.symbolSpine).bindNodeState(false).delay(1.3).call(function () {
        e.symbolSpine.active = !1;
      }).start(), __dependency_1.tween(e.frameSpine).bindNodeState(false).delay(1).call(function () {
        var t = e.frameSpine.getComponent(__dependency_1.sp.Skeleton);
        t.clearTracks(), t.setToSetupPose(), t.timeScale = 1, t.setAnimation(0, "out", !1), t.setCompleteListener(function () {
          t.setCompleteListener(null), e.frameSpine.active = !1;
        });
      }).start();
    });
  }, r.playWildInAnim = function () {
    var e = this;
    return new Promise(function (t) {
      var n = __dependency_6.default.getData().filePaths.groupSymbolsSkeletonData,
        i = __dependency_4.LoadUtils.getDirSkeleton(e.data.module, n, "symbol_" + __dependency_9.default.zeroPad(e.id)),
        o = e.symbolSpine.getComponent(__dependency_1.sp.Skeleton);
      e.symbolSpine.active = !0, e.staticSymbol.active = !1, o.skeletonData = i, o.clearTracks(), o.setToSetupPose(), o.timeScale = 1, o.setAnimation(0, "in", !1), o.setCompleteListener(function () {
        o.setCompleteListener(null), o.clearTracks(), o.setToSetupPose(), o.timeScale = 1, o.setAnimation(0, "idle", !0), t();
      });
    });
  }, r.playTransHintAnim = function () {
    var e = this;
    return new Promise(function (t) {
      var n = e.transSpine.getComponent(__dependency_1.sp.Skeleton);
      e.transSpine.active = !0, e.transSpine.setScale(.4, .4, 1), n.clearTracks(), n.setToSetupPose(), n.timeScale = 1, n.setAnimation(0, "sign_symbol", !1), n.setCompleteListener(function () {
        n.setCompleteListener(null);
      }), __dependency_1.tween(e.transSpine).bindNodeState(false).delay(1).call(function () {
        t();
      }).start();
    });
  }, r.playTransInAnim = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e(t) {
      var n,
        i = this;
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = t / 10, .6, e.abrupt("return", new Promise(function (e) {
              var t = i.transSpine.getComponent(__dependency_1.sp.Skeleton);
              i.transSpine.active = !0, i.transSpine.setScale(n, n, 1), t.clearTracks(), t.setToSetupPose(), t.timeScale = 1, t.setAnimation(0, "merge", !1), __dependency_1.Tween.stopAllByTarget(i.transSpine), __dependency_1.tween(i.transSpine).bindNodeState(false).delay(.6).call(function () {
                e();
              }).start(), t.setCompleteListener(function () {
                t.setCompleteListener(null);
              });
            }));
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), r.setSymbolColor = function (e) {
    this.staticSymbolSprite.color = e, this.symbolSpine.getComponent(__dependency_1.sp.Skeleton).color = e;
  }, r.setSymbolColorByTween = function (e, t) {
    var n = this;
    return new Promise(function (i) {
      var o = n.staticSymbolSprite.color.clone();
      __dependency_1.tween(o).bindNodeState(false).to(t, {
        r: e.r,
        g: e.g,
        b: e.b,
        a: e.a
      }, {
        onUpdate: function (e) {
          n.staticSymbolSprite.color = e;
        }
      }).start(), __dependency_1.tween(n.symbolSpine.getComponent(__dependency_1.sp.Skeleton).color).bindNodeState(false).to(t, {
        r: e.r,
        g: e.b,
        b: e.b,
        a: e.a
      }).call(function () {
        i();
      }).start();
    });
  }, r.setSymbolScale = function (e) {
    this.staticSymbol.setScale(e, e, 1), this.symbolSpine.setScale(e, e, 1), this.pieceSpine.setScale(e, e, 1);
  }, r.setSymbolScaleByTween = function (e) {
    var t = this,
      n = .25,
      i = __dependency_1.v3(e, e, 1);
    return new Promise(function (e) {
      __dependency_1.tween(t.staticSymbol).bindNodeState(false).to(n, {
        scale: i
      }, {
        easing: __dependency_1.easing.backOut
      }).start(), __dependency_1.tween(t.pieceSpine).bindNodeState(false).to(n, {
        scale: i
      }, {
        easing: __dependency_1.easing.backOut
      }).start(), __dependency_1.tween(t.symbolSpine).bindNodeState(false).to(n, {
        scale: i
      }, {
        easing: __dependency_1.easing.backOut
      }).delay(.6).call(function () {
        e();
      }).start();
    });
  }, r.recycleSymbol = function () {
    this.reset(), App.pool.getPool(__dependency_5.EPool.SYMBOL_POOL).put(this.node);
  }, __dependency_0.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_7.default);
    }
  }]), t;
}(__dependency_3.SymbolBase)).prototype, "staticSymbolSprite", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = __dependency_0.applyDecoratedDescriptor(J.prototype, "symbolSpine", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __dependency_0.applyDecoratedDescriptor(J.prototype, "transSpine", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __dependency_0.applyDecoratedDescriptor(J.prototype, "frameSpine", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = __dependency_0.applyDecoratedDescriptor(J.prototype, "pieceSpine", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = __dependency_0.applyDecoratedDescriptor(J.prototype, "id", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), q = __dependency_0.applyDecoratedDescriptor(J.prototype, "spriteFrames", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Q = __dependency_0.applyDecoratedDescriptor(J.prototype, "staticSymbol", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = J)) || R) || R));
__dependency_1.cclegacy._RF.pop();
