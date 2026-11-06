// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency6 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency7 from "./g1008-GameConfigModel";
import * as _dependency8 from "./g1008-GameData";
import * as _dependency9 from "./g1008-GameEvent";
import * as _dependency0 from "../../shared/scripts/slotFramework-PlatformModel";
var _export;
export { _export as WIN_BOARD_ANIME_NAME };
var _export2;
export { _export2 as ReelView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WIN_BOARD_ANIME_NAME":
      _export = value;
      break;
    case "ReelView":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, e, i, o, a, r, s, u, c, l, d, f, m, g, p, h, w, b, y, A, _, T, F, E, I;
var v, N, B, W, C, S, D, M, R, G, O, P, L, U, z, x, k, q, V, Y, j, H, K, Q, X, J;
_publish("WIN_BOARD_ANIME_NAME", void 0), _dependency2.cclegacy._RF.push({}, "b142500qahFPrYBUsi8nPP9", "ReelView", void 0), function (n) {
  n.MG_IDLE = "mg_idle", n.FG_IDLE = "fg_idle", n.MG_WIN = "mg_win", n.FG_WIN = "fg_win";
}(J || (J = _publish("WIN_BOARD_ANIME_NAME", {})));
var Z = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("ReelView", (v = Z("ReelView"), N = _dependency4.inject("bgEffect", _dependency2.sp.Skeleton), B = _dependency4.inject("bgContent", _dependency2.Sprite), W = _dependency4.inject("winboard/bg", _dependency2.Sprite), C = _dependency4.inject("winboard/spine", _dependency2.sp.Skeleton), S = _dependency4.inject("winboard/winnings/winAmount", _dependency2.Label), D = _dependency4.inject("winboard/winnings/cross", _dependency2.Label), M = _dependency4.inject("winboard/winnings/times", _dependency2.Label), R = _dependency4.inject("fgRemaining", _dependency2.Node), G = _dependency4.inject("fgRemaining/remaining", _dependency2.Label), O = _dependency4.inject("winboard/fontNode/font", _dependency2.Sprite), P = _dependency4.inject("winboard/fontNode", _dependency2.UIOpacity), v((z = _dependency.applyDecoratedDescriptor((U = function (n) {
  var _nativeConstructor = t;
  function t() {
    for (var t, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
    return t = Reflect.construct(n, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "bgEffect", z, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "bgContent", x, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "winboardBg", k, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "spine", q, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "winAmount", V, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "cross", Y, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "times", j, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "fgRemaining", H, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "remaining", K, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "winBoardFont", Q, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "fontNodeOpacity", X, _dependency.assertThisInitialized(t)), t.curWinBoardFontIndex = 0, t.curTimes = 0, t.fontNodeOpacityTween = null, t.winAmountTween = null, t.increaseCounts = 0, t.isMg = !0, t;
  }
  _dependency.inheritsLoose(t, n);
  var r = t.prototype;
  return r.onLoad = function () {
    n.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    n.prototype.onDestroy.call(this);
  }, r.init = function () {
    _dependency7.default.useProEffect || (this.bgEffect.node.active = !1), this.winAmount.node.active = !1, this.winBoardFont.node.parent.active = !0, this.playWinBoardFontTween(!0);
  }, r.setBgSprite = function (n) {
    var t = n ? "mg_reel" : "fg_reel";
    this.isMg = n;
    var e = n ? "mg_winboard" : "fg_winboard",
      i = this.data.getCommonSpriteFrame(t),
      o = this.data.getCommonSpriteFrame(e);
    this.bgContent.spriteFrame = this.bgContent.spriteFrame = i, this.winboardBg.spriteFrame = o;
    var a = n ? J.MG_IDLE : J.FG_IDLE;
    this.spine && (this.spine.clearTracks(), this.spine.setToSetupPose(), this.spine.setAnimation(0, a, !0));
  }, r.setFgElements = function (n) {
    var t = this.data.getData().gameState.freeGameCount;
    this.fgRemaining.active = !n, this.remaining.string = null == t ? void 0 : t.toString(), _dependency7.default.useProEffect && (this.bgEffect.node.active = !n);
  }, r.updateWinAmount = function (n) {
    var t = n.value,
      e = n.tweenTime,
      i = this.data.getData().definition.digital,
      o = _dependency7.default.getData().winAmountTime,
      a = {
        label: this.winAmount,
        start: parseFloat(this.winAmount.string.replace(/,/g, "")),
        end: t,
        tweenTime: e || o,
        digital: i,
        useThousandsSeparator: !0,
        callback: function () {}
      };
    t ? (this.winAmountTween = _dependency5.CmmSlotUtils.tweenNum(a), this.winAmount.node.active = !0, this.winBoardFont.node.active = !1) : (this.winAmount.string = "0", this.winAmount.node.active = !1, this.winBoardFont.node.active = !0);
  }, r.quickStopWinAmount = function (n) {
    this.winAmountTween && this.winAmountTween.stop(), this.winAmount.string = _dependency5.CmmSlotUtils.formatNumber(n);
  }, r.updateFgRemaining = function () {
    var n = this.data.getData().gameState.freeGameCount;
    Number(this.remaining.string) != n && this.playBounceTween(this.remaining.node), this.remaining.string = n.toString();
  }, r.IncreaseFgRemaining = function (n) {
    var t = this,
      e = this.data.getData().definition.extraFgRounds,
      i = this.remaining.color;
    this.increaseCounts++;
    var o = 1 + .05 * this.increaseCounts,
      a = 1 - .02 * this.increaseCounts;
    _dependency2.tween(this.remaining.node).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(o, o, 1)
    }, {
      onComplete: function () {
        t.remaining.string = (Number(t.remaining.string) + 1).toString();
      },
      easing: "quintIn"
    }).to(.05, {
      scale: new _dependency2.Vec3(a, a, 1)
    }, {
      easing: "quintIn"
    }).call(function () {
      t.increaseCounts == e ? (t.increaseCounts = 0, t.scheduleOnce(function () {
        n();
      }, 1), _dependency2.tween(t.remaining.node).bindNodeState(false).to(.1, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: "quintIn"
      }).start()) : t.increaseCounts < e && t.IncreaseFgRemaining(n);
    }).start(), _dependency2.tween(i).bindNodeState(false).to(.1, {
      a: 130
    }, {
      easing: "quintIn"
    }).to(.05, {
      a: 255
    }, {
      easing: "quintIn"
    }).start();
  }, r.playWinBoardAnime = function (n) {
    var t = this,
      e = n ? J.MG_WIN : J.FG_WIN;
    this.spine && (this.spine.clearTracks(), this.spine.setToSetupPose(), this.spine.setAnimation(0, e, !1), this.spine.setCompleteListener(function () {
      var e = n ? J.MG_IDLE : J.FG_IDLE;
      t.spine.setCompleteListener(function () {}), t.spine.clearTracks(), t.spine.setToSetupPose(), t.spine.setAnimation(0, e, !0);
    }));
  }, r.playWinBoardFontTween = function (n) {
    var t = this,
      e = n ? [1, 2, 3, 4] : [5, 2, 3, 4];
    this.unschedule(this.fontNodeOpacityTween), this.fontNodeOpacityTween = null, this.curWinBoardFontIndex = 0, this.setWinBoardFont(e[this.curWinBoardFontIndex]), this.fontNodeOpacityTween = function () {
      _dependency2.tween(t.fontNodeOpacity).bindNodeState(false).to(1, {
        opacity: 0
      }, {
        easing: "fade",
        onComplete: function () {
          t.curWinBoardFontIndex == e.length - 1 ? t.curWinBoardFontIndex = 0 : t.curWinBoardFontIndex++, t.setWinBoardFont(e[t.curWinBoardFontIndex]);
        }
      }).to(1, {
        opacity: 255
      }, {
        easing: "fade"
      }).start();
    }, this.schedule(this.fontNodeOpacityTween, 5, _dependency2.macro.REPEAT_FOREVER, 3);
  }, r.setWinBoardFont = function (n) {
    var t = "mg_font_winboard_0" + _dependency6.default.zeroPad(n, 1);
    2 == n && _dependency0.default.getData().theme && "xin-star" == _dependency0.default.getData().theme && (t += "_01"), this.winBoardFont.spriteFrame = this.data.getLocaleSpriteFrame(t);
  }, r.expandWinnings = function () {
    this.times.string = "", this.curTimes = 0, this.times.color.set(255, 255, 255, 255), this.cross.color.set(255, 255, 255, 255), this.cross.node.active = !0, this.times.node.active = !0;
    var n = .5 * this.winAmount.node.getComponent(_dependency2.UITransform).width + 18;
    this.cross.node.setPosition(new _dependency2.Vec3(n, 296, 0));
  }, r.mergeWinnings = function (n) {
    var t = this,
      e = this.data.getData().gameState,
      i = e.totalWinnings,
      o = e.roundWinnings,
      a = "freeSpin" == e.action,
      r = a ? o : i;
    _dependency2.tween(this.winAmount.node).bindNodeState(false).delay(.4).to(.4, {
      position: new _dependency2.Vec3(0, 288, 0)
    }, {
      onComplete: function () {
        t.winAmount.string = _dependency5.CmmSlotUtils.formatNumber(r), t.playBounceTween(t.winAmount.node, n), dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency7.EBTM.SCORE
          }
        }), a && dispatch(_dependency9.GameEvent.UPDATE_FG_TOTAL_TIMES, {
          data: t.curTimes
        });
      }
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(.75).call(function () {
      t.playWinBoardAnime(t.isMg);
    }).start(), _dependency2.tween(this.times.node).bindNodeState(false).delay(.4).to(.4, {
      position: new _dependency2.Vec3(0, 296, 0)
    }, {
      onStart: function () {
        t.playFadeOut(t.times);
      }
    }).start(), _dependency2.tween(this.cross.node).bindNodeState(false).delay(.4).to(.4, {
      position: new _dependency2.Vec3(0, 296, 0)
    }, {
      onStart: function () {
        t.playFadeOut(t.cross);
      }
    }).start();
  }, r.playBounceTween = function (n, t) {
    _dependency2.tween(n).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.5, 1.5, 1.5)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        t && t();
      }
    }).start();
  }, r.playFadeOut = function (n) {
    _dependency2.tween(n.color).bindNodeState(false).to(.4, {
      a: 0
    }, {
      onComplete: function () {
        n.node.active = !1;
      }
    }).start();
  }, r.updateTimes = function (n) {
    this.curTimes += n, this.times.string = this.curTimes.toString(), this.times.forceDoLayout();
  }, r.reset = function () {}, r.setData = function (n) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var n = this;
    this.on(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, function (t) {
      n.updateWinAmount(t.data);
    }), this.on(_dependency9.GameEvent.QUICK_STOP_WIN_AMOUNT, function (t) {
      n.quickStopWinAmount(t.data);
    }), this.on(_dependency9.GameEvent.CHANGE_GAME_STYLE, function (t) {
      n.setBgSprite(t.data), n.setFgElements(t.data), n.playWinBoardFontTween(t.data);
    }), this.on(_dependency9.GameEvent.UPDATE_FG_REMAINING, function (t) {
      n.updateFgRemaining();
    }), this.on(_dependency9.GameEvent.INCREASE_FG_REMAINING, function (t) {
      n.IncreaseFgRemaining(t.complete);
    }), this.on(_dependency9.GameEvent.EXPAND_WIN_AMOUNT, function (t) {
      n.expandWinnings();
    }), this.on(_dependency9.GameEvent.UPDATE_TIMES, function (t) {
      n.playBounceTween(n.times.node), n.updateTimes(t.data);
    }), this.on(_dependency9.GameEvent.MERGE_WIN_AMOUNT, function (t) {
      n.mergeWinnings(t.data);
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "bgEffect", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(U.prototype, "bgContent", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(U.prototype, "winboardBg", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(U.prototype, "spine", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(U.prototype, "winAmount", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(U.prototype, "cross", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(U.prototype, "times", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(U.prototype, "fgRemaining", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(U.prototype, "remaining", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(U.prototype, "winBoardFont", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(U.prototype, "fontNodeOpacity", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = U)) || L));
_dependency2.cclegacy._RF.pop();
