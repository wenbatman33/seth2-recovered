// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1009-GameConfigModel";
import * as _dependency6 from "./g1009-GameData";
import * as _dependency7 from "./g1009-GameSymbolID";
import * as _dependency8 from "./g1009-GameEvent";
import * as _dependency9 from "./g1009-types";
var _export;
export { _export as Symbol };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Symbol":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, s, o, a, l, m, r, p, c, S, h, u, y, b, d, A, f, v, T, g;
var _, L, I, k, D, P, E, O, B, C, M, R, w, W, z, x, F, N, Y, G, H, J, U, j, K, X, q;
_dependency2.cclegacy._RF.push({}, "8b5c9+5tJdDm7rTkzFhpnhS", "Symbol", void 0);
var Q = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("Symbol", (_ = Q("Symbol"), L = _dependency4.inject("frame", _dependency2.sp.Skeleton), I = _dependency4.inject("symbolSprite", _dependency2.Sprite), k = _dependency4.inject("upgrade", _dependency2.sp.Skeleton), D = _dependency4.inject("symbolOut", _dependency2.sp.Skeleton), P = _dependency4.inject("times", _dependency2.Label), E = _dependency4.inject("timesSplitA/times_A", _dependency2.Label), O = _dependency4.inject("timesSplitA/symbolSprite_A", _dependency2.Sprite), B = _dependency4.inject("symbolAnimation", _dependency2.sp.Skeleton), C = _dependency4.inject("timesSplitA", _dependency2.sp.Skeleton), M = _dependency4.inject("timesSplitB", _dependency2.sp.Skeleton), R = _dependency4.inject("timesLock", _dependency2.sp.Skeleton), w = _dependency4.inject("timesStage", _dependency2.sp.Skeleton), _((x = _dependency.applyDecoratedDescriptor((z = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "frameSpine", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolSprite", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "upgradeAnimation", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolOutSpine", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "times", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "times_A", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolSprite_A", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolAnimation", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "timesSplitASpine", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "timesSplitBSpine", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "timesLockSpine", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "timesStageSpine", q, _dependency.assertThisInitialized(e)), e.symbolID = null, e.posId = null, e.isRare = null, e.isTimeSymbol = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {}, a.start = function () {
    this.node.layer = _dependency2.Layers.Enum.UI_2D;
  }, a.onDestroy = function () {}, a.update = function (t) {}, a.setSymbolSprite = function (t) {
    var e = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0"),
      i = this.data.getSymbolSpriteFrame(e);
    this.symbolSprite.spriteFrame = i, this.symbolSprite.node.active = !0;
  }, a.setSymbolSpriteSplit = function (t) {
    var e = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0"),
      i = this.data.getSymbolSpriteFrame(e);
    this.symbolSprite_A.spriteFrame = i, this.symbolSprite_A.node.active = !1;
  }, a.setIsRare = function () {
    var t = this,
      e = this.data.getData().gameState.timesSymbols,
      i = void 0 === e ? [] : e;
    if (i && i.length > 0) {
      var n = i.find(function (e) {
        return e.isRare && e.symbolPos == t.posId;
      });
      this.isRare = !!n;
    } else this.isRare = !1;
  }, a.setTimesText = function (t) {
    this.times.node.active = !0, this.times.string = t ? t + "x" : "", this.times_A && (this.times_A.node.active = !0, this.times_A.string = t ? t + "x" : "");
  }, a.setTimesTextSplit = function (t) {
    this.times.node.active = !1, this.times.string = t ? t + "x" : "", this.times_A.node.active = !0, this.times_A.string = t ? t + "x" : "", 0 == this.times_A.node.parent.active && (this.times_A.node.parent.active = !0);
  }, a.reset = function () {
    _dependency2.Tween.stopAllByTarget(this), _dependency2.Tween.stopAllByTarget(this.node), this.isRare = !1, this.symbolAnimation.node.active = !1, this.frameSpine.node.active = !1, this.symbolOutSpine.node.active = !1, this.symbolSprite.node.active = !0, this.timesSplitASpine.node.active = !1, this.timesSplitBSpine.node.active = !1, this.timesLockSpine.node.active = !1, this.timesStageSpine.node.active = !1, this.symbolAnimation && this.symbolAnimation.setCompleteListener(null), this.symbolOutSpine && this.symbolOutSpine.setCompleteListener(null), this.timesLockSpine && this.timesLockSpine.setCompleteListener(null);
  }, a.setData = function (t) {
    var e = t.symbolId,
      i = t.posId,
      n = t.isTimesSymbol;
    this.isTimeSymbol = n, this.name = "" + i, this.posId = i, this.symbolID = e, this.isRare = !1, n && this.setIsRare(), this.setSymbolSprite(e), this.setSymbolSpriteSplit(e), this.times.node.active = !1, this.times_A.node.active = !1;
  }, a.recycleSymbol = function () {
    this.hide(), this.reset(), App.pool.getPool(_dependency9.EPool.SYMBOL_POOL).put(this.node);
  }, a.playLoopAnim = function () {
    var t = this;
    _dependency5.default.useProEffect && this.scheduleOnce(function () {
      t.playAnim(t.symbolID, _dependency7.ESymbolAnimType.LOOP, !0);
    }, 0);
  }, a.playWinAnim = function (t) {
    var e = this.data.getData().gameState,
      i = e.femaleTotemLevel,
      n = void 0 === i ? 0 : i,
      s = e.maleTotemLevel,
      o = void 0 === s ? 0 : s,
      a = 1;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1), n > 0 && (a = this.getWomenTotemWinDelay(n)), o > 0 && (a = this.getManTotemWinDelay(o)), this.scheduleOnce(function () {
      t && t();
    }, a), this.frameSpine.node.active = !0, this.frameSpine.setAnimation(0, "win", !0);
  }, a.playSymbolHitBtm = function () {
    dispatch(_dependency8.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.SYMBOL_HIT
      }
    });
  }, a.playScatterInBtm = function () {
    dispatch(_dependency8.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.SCATTER_IN
      }
    });
  }, a.playSPGScatterInBtm = function () {
    dispatch(_dependency8.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.SPG_SCATTER_IN
      }
    });
  }, a.playScatterInBtmFast = function () {
    dispatch(_dependency8.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.SCATTER_IN_X2
      }
    });
  }, a.playSPGScatterInBtmFast = function () {
    dispatch(_dependency8.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.SPG_SCATTER_IN_X2
      }
    });
  }, a.playScatterInAnim = function () {
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.IN, !1);
  }, a.playJackpotInAnim = function () {
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.IN, !1);
  }, a.playScatterWinAnim = function (t) {
    var e = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1, function () {
      e.playAnim(e.symbolID, _dependency7.ESymbolAnimType.LOOP, !0), t && t();
    });
  }, a.playJpWinAnim = function (t) {
    var e = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1, function () {
      e.playAnim(e.symbolID, _dependency7.ESymbolAnimType.LOOP, !0), t && t();
    });
  }, a.getWomenTotemWinDelay = function (t) {
    var e = 0;
    switch (t) {
      case 1:
        e = 1.265;
        break;
      case 2:
        e = 1.629;
        break;
      case 3:
        e = 2.227;
    }
    return e;
  }, a.getManTotemWinDelay = function (t) {
    var e = 0;
    switch (t) {
      case 1:
        e = 1.264;
        break;
      case 2:
        e = 1.631;
        break;
      case 3:
        e = 2.232;
    }
    return e;
  }, a.playTotemWinAnim = function (t, e) {
    var i = this;
    _dependency2.Tween.stopAllByTarget(this), this.symbolID == _dependency7.EBackendSymbolID.WOMEN_TOTEM ? _dependency2.tween(this).bindNodeState(false).delay(0).call(function () {
      var n = i.isRare ? i.symbolID.toString().padStart(2, "0") + "_01" : "" + i.symbolID.toString().padStart(2, "0");
      i.symbolAnimation.node.active = !0, i.symbolSprite.node.active = !1, i.symbolSprite_A.node.active = !1, i.frameSpine.node.active = !1, i.symbolOutSpine.node.active = !1, i.symbolAnimation.skeletonData = i.data.getSymbolAnimSpine(n), i.symbolAnimation.clearTracks(), i.symbolAnimation.setToSetupPose(), i.symbolAnimation.setCompleteListener(null), i.symbolAnimation.setAnimation(0, "lv" + e, !1), i.symbolAnimation.node.active = !0, i.symbolAnimation.setCompleteListener(function () {
        t && t(), i.recycleSymbol(), i.symbolAnimation.setCompleteListener(null);
      });
    }).start() : this.symbolID == _dependency7.EBackendSymbolID.MEN_TOTEM ? _dependency2.tween(this).bindNodeState(false).delay(0).call(function () {
      var n = i.isRare ? i.symbolID.toString().padStart(2, "0") + "_01" : "" + i.symbolID.toString().padStart(2, "0");
      i.symbolAnimation.node.active = !0, i.symbolSprite.node.active = !1, i.symbolSprite_A.node.active = !1, i.frameSpine.node.active = !1, i.symbolOutSpine.node.active = !1, i.symbolAnimation.skeletonData = i.data.getSymbolAnimSpine(n), i.symbolAnimation.clearTracks(), i.symbolAnimation.setToSetupPose(), i.symbolAnimation.setCompleteListener(null), i.symbolAnimation.setAnimation(0, "lv" + e, !1), i.symbolAnimation.setCompleteListener(function () {
        t && t(), i.recycleSymbol(), i.symbolAnimation.setCompleteListener(null);
      });
    }).start() : this.playAnim(this.symbolID, "lv" + e, !1, t);
  }, a.playTotemHitAnim = function () {
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.HIT, !1);
  }, a.playOutAnim = function () {
    var t = this;
    this.symbolID != _dependency7.EBackendSymbolID.WOMEN_TOTEM && this.symbolID != _dependency7.EBackendSymbolID.MEN_TOTEM && _dependency2.tween(this).bindNodeState(false).delay(.13).call(function () {
      t.symbolAnimation.node.active = !1, t.symbolSprite.node.active = !1, t.symbolSprite_A.node.active = !1, t.frameSpine.node.active = !1, t.symbolOutSpine.node.active = !0, t.symbolOutSpine.clearTracks(), t.symbolOutSpine.setToSetupPose(), t.symbolOutSpine.setCompleteListener(null), t.symbolOutSpine.setAnimation(0, "out", !1), t.symbolOutSpine.setCompleteListener(function () {
        t.recycleSymbol();
      });
    }).start();
  }, a.showSplitA_Anim = function (t) {
    var e = this;
    this.frameSpine.node.active = !1, this.symbolAnimation.node.active = !1, this.frameSpine.node.active = !1, this.timesSplitASpine.clearTracks(), this.timesSplitASpine.setToSetupPose(), this.timesSplitASpine.node.active = !0, this.symbolSprite_A.node.active = !0, this.times_A.node.active = !0, this.timesSplitASpine.setEventListener(null), this.timesSplitASpine.setAnimation(0, "split_A", !1), this.timesSplitASpine.setEventListener(function (i, n) {
      "split_B" == n.data.name && e.scheduleOnce(function () {
        dispatch(_dependency8.GameEvent.SHOW_TIMES_B, {
          complete: t
        });
      }, .7), e.timesSplitASpine.setEventListener(null);
    });
  }, a.playSplitBtm = function () {
    var t = this.data.getData().gameState.maleTotemLevel,
      e = void 0 === t ? 0 : t,
      i = _dependency5.EBTM.TIMES_SPLIT_Lv1;
    switch (e) {
      case 1:
        i = _dependency5.EBTM.TIMES_SPLIT_Lv1;
        break;
      case 2:
        i = _dependency5.EBTM.TIMES_SPLIT_Lv2;
        break;
      case 3:
        i = _dependency5.EBTM.TIMES_SPLIT_Lv3;
    }
    dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: i
      }
    });
  }, a.showSplitB_Anim = function (t) {
    var e = this;
    this.closeTimesSymbol(), this.frameSpine.node.active = !1, this.symbolAnimation.node.active = !1, this.timesSplitBSpine.node.active = !0, this.timesSplitBSpine.clearTracks(), this.timesSplitBSpine.setToSetupPose(), this.timesSplitBSpine.setAnimation(0, "split_B", !1), this.timesSplitBSpine.setCompleteListener(function () {
      t && t(), e.timesSplitBSpine.setCompleteListener(null);
    }), _dependency2.tween(this).bindNodeState(false).delay(.4).call(function () {
      e.initTimesSymbol(e.posId), e.showTimesSymbol();
    }).start();
  }, a.showTimesStage_Anim = function (t, e, i) {
    var n = this;
    void 0 === i && (i = !1);
    var s = "lv1",
      o = 1;
    switch (t) {
      case 1:
      case 0:
      case 2:
        o = 1, s = "lv1", 0 == this.isRare && (s += "_normal");
        break;
      case 3:
      case 4:
        o = 2, s = "lv2", 0 == this.isRare && (s += "_normal");
        break;
      case 5:
      case 6:
      case 7:
        o = 3, s = "lv3", 0 == this.isRare && (s += "_normal");
    }
    this.timesLockSpine.clearTracks(), this.timesLockSpine.setToSetupPose(), i && dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.TIMES_LOCK
      }
    }), this.timesLockSpine.setAnimation(0, "lock_0" + o, !1), this.timesLockSpine.setCompleteListener(function () {
      n.timesLockSpine.setCompleteListener(null), e && e(), n.timesLockSpine.setAnimation(0, "loop_0" + o, !0), n.frameSpine.node.active = !1, n.timesStageSpine.clearTracks(), n.timesStageSpine.setToSetupPose(), n.timesStageSpine.node.active = !0, n.timesStageSpine.setAnimation(0, s, !0), n.timesStageSpine.setCompleteListener(function () {
        n.timesStageSpine.setCompleteListener(null), e && e();
      });
    });
  }, a.showTimesLock_Anim = function (t, e) {
    this.frameSpine.node.active = !1, this.timesLockSpine.clearTracks(), this.timesLockSpine.setToSetupPose(), this.timesLockSpine.node.active = !0, this.showTimesStage_Anim(t, e), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.TIMES_LOCK
      }
    });
  }, a.initTimesSymbol = function (t) {
    var e = this.data.getData().gameState.timesSymbols;
    if (e.length && null != e) {
      var i = e.find(function (e) {
        return e.symbolPos == t;
      });
      if (null != i) {
        var n = i.symbol,
          s = i.times;
        this.setSymbolSprite(n), this.setTimesText(s);
      }
    }
  }, a.openTimesSymbol = function (t) {
    var e = this.data.getData().parser.newTimesSymbols;
    if (e.length) {
      var i = e.find(function (e) {
        return e.symbolPos == t;
      });
      if (null != i) {
        var n = i.symbol,
          s = i.times,
          o = i.symbolPos;
        if (this.setSymbolSprite(n), this.setTimesText(s), null != this.data.getData().gameState.splitList && this.data.getData().gameState.splitList.length > 0) {
          for (var a = this.data.getData().gameState.splitList.slice(), l = !1, m = 0; m < a.length; m++) {
            if (a[m].to.slice().indexOf(o) > -1) {
              l = !0;
              break;
            }
          }
          l && this.setTimesTextSplit(s);
        }
      }
    }
  }, a.playTimesSymbolsUpgrade = function (t) {
    var e = this,
      i = t.afterSymbol,
      n = t.afterTimes,
      s = this.data.getData().gameState.splitList;
    this.timesSplitBSpine.node.active = !1, this.timesSplitASpine.node.active = !1, this.symbolID = i, this.showTimesSymbol(), this.unscheduleAllCallbacks(), this.upgradeAnimation.node.active = !0, this.upgradeAnimation.clearTracks(), this.upgradeAnimation.setToSetupPose(), this.upgradeAnimation.setCompleteListener(null), this.upgradeAnimation.setAnimation(0, "transition", !1), this.upgradeAnimation.setCompleteListener(function () {
      e.upgradeAnimation.node.active = !1;
    }), this.scheduleOnce(function () {
      null != s && s.length > 0 ? e.setTimesTextSplit(n) : e.setTimesText(n);
    }, .5), this.scheduleOnce(function () {
      dispatch(_dependency8.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency5.EBTM.TIMES_SYMBOL_UPGRADE
        }
      });
    }, .2);
  }, a.closeTimesSymbol = function () {
    this.times.node.active = !1, this.times_A.node.active = !1, this.symbolSprite.node.active = !1, this.symbolSprite_A.node.active = !1;
  }, a.showTimesSymbol = function () {
    this.times.node.active = !0, this.times_A.node.active = !1, this.symbolSprite.node.active = !0, this.symbolSprite_A.node.active = !1;
  }, a.closeTimesLabel = function () {
    this.times.node.active = !1, this.times_A.node.active = !1;
  }, a.cloneLockAnime = function () {
    if (this.data.getData().parser.lockTimesSymbols.has(this.posId)) {
      var t,
        e = "lv1";
      switch (this.data.getData().parser.lockTimesSymbols.get(this.posId).lock) {
        case 1:
        case 0:
        case 2:
          t = 1, e = "lv1", 0 == this.isRare && (e += "_normal");
          break;
        case 3:
        case 4:
          t = 2, e = "lv2", 0 == this.isRare && (e += "_normal");
          break;
        case 5:
        case 6:
          t = 3, e = "lv3", 0 == this.isRare && (e += "_normal");
      }
      this.timesLockSpine.setAnimation(0, "loop_0" + t, !0), this.timesStageSpine.clearTracks(), this.timesStageSpine.setToSetupPose(), this.timesStageSpine.node.active = !0, this.timesStageSpine.setAnimation(0, e, !0);
    }
  }, a.playTimesSymbolsFunction = function () {
    var t = this.isRare ? this.symbolID.toString().padStart(2, "0") + "_01" : "" + this.symbolID.toString().padStart(2, "0"),
      e = this.data.getSymbolSpriteFrame(t);
    this.symbolSprite.node.active = !1, this.symbolSprite_A.node.active = !1, this.symbolSprite.spriteFrame = e, this.symbolSprite_A.spriteFrame = e, this.symbolAnimation.node.active = !0, this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(t), this.symbolAnimation.setAnimation(0, "function", !1);
  }, a.playAnim = function (t, e, i, n) {
    var s = this,
      o = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0");
    this.symbolAnimation.node.active = !0, this.symbolSprite.node.active = !1, this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(o), this.symbolAnimation.clearTracks(), this.symbolAnimation.setToSetupPose(), this.symbolAnimation.setAnimation(0, e, i), this.symbolAnimation.setCompleteListener(null), this.symbolAnimation.setCompleteListener(function (t) {
      n && !t.loop && n(), s.symbolAnimation.setCompleteListener(null);
    });
  }, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "frameSpine", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(z.prototype, "symbolSprite", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(z.prototype, "upgradeAnimation", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(z.prototype, "symbolOutSpine", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(z.prototype, "times", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(z.prototype, "times_A", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(z.prototype, "symbolSprite_A", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(z.prototype, "symbolAnimation", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(z.prototype, "timesSplitASpine", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(z.prototype, "timesSplitBSpine", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(z.prototype, "timesLockSpine", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(z.prototype, "timesStageSpine", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = z)) || W));
_dependency2.cclegacy._RF.pop();
