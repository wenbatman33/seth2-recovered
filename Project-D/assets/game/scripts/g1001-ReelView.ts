// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency6 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency7 from "./g1001-GameConfigModel";
import * as _dependency8 from "./g1001-GameData";
import * as _dependency9 from "./g1001-GameEvent";
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
var n, e, i, o, a, r, s, u, c, l, d, f, g, m, p, h, w, b, y, _, A, T, F, E;
var I, v, N, B, S, W, R, C, D, M, G, O, L, P, z, U, x, k, q, V, H, j, Y, J, K, Q, X, Z;
_publish("WIN_BOARD_ANIME_NAME", void 0), _dependency2.cclegacy._RF.push({}, "757ddeEppJHu7hyS1q9PSNz", "ReelView", void 0), function (t) {
  t.MG_IDLE = "mg_idle", t.FG_IDLE = "fg_idle", t.MG_WIN = "mg_win", t.FG_WIN = "fg_win";
}(Z || (Z = _publish("WIN_BOARD_ANIME_NAME", {})));
var $ = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("ReelView", (I = $("ReelView"), v = _dependency4.inject("bgEffect", _dependency2.sp.Skeleton), N = _dependency4.inject("bgContent/bgLeft", _dependency2.Sprite), B = _dependency4.inject("bgContent/bgRight", _dependency2.Sprite), S = _dependency4.inject("winboard/bg", _dependency2.Sprite), W = _dependency4.inject("winboard/spine", _dependency2.sp.Skeleton), R = _dependency4.inject("winboard/winnings/winAmount", _dependency2.Label), C = _dependency4.inject("winboard/winnings/cross", _dependency2.Label), D = _dependency4.inject("winboard/winnings/times", _dependency2.Label), M = _dependency4.inject("fgRemaining", _dependency2.Node), G = _dependency4.inject("fgRemaining/remaining", _dependency2.Label), O = _dependency4.inject("winboard/fontNode/font", _dependency2.Sprite), L = _dependency4.inject("winboard/fontNode", _dependency2.UIOpacity), I((U = _dependency.applyDecoratedDescriptor((z = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "bgEffect", U, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgLeft", x, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgRight", k, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "winboardBg", q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "spine", V, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "winAmount", H, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "cross", j, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "times", Y, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "fgRemaining", J, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "remaining", K, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "winBoardFont", Q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "fontNodeOpacity", X, _dependency.assertThisInitialized(n)), n.curWinBoardFontIndex = 0, n.curTimes = 0, n.fontNodeOpacityTween = null, n.winAmountTween = null, n.increaseCounts = 0, n.isMg = !0, n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    _dependency7.default.useProEffect || (this.bgEffect.node.active = !1), this.winAmount.node.active = !1, this.winBoardFont.node.parent.active = !0, this.playWinBoardFontTween(!0);
  }, r.setBgSprite = function (t) {
    var n = t ? "mg_reel" : "fg_reel";
    this.isMg = t;
    var e = t ? "mg_winboard" : "fg_winboard",
      i = this.data.getCommonSpriteFrame(n),
      o = this.data.getCommonSpriteFrame(e);
    this.bgLeft.spriteFrame = this.bgRight.spriteFrame = i, this.winboardBg.spriteFrame = o;
    var a = t ? Z.MG_IDLE : Z.FG_IDLE;
    this.spine && (this.spine.clearTracks(), this.spine.setToSetupPose(), this.spine.setAnimation(0, a, !0));
  }, r.setFgElements = function (t) {
    var n = this.data.getData().gameState.freeGameCount;
    this.fgRemaining.active = !t, this.remaining.string = null == n ? void 0 : n.toString(), _dependency7.default.useProEffect && (this.bgEffect.node.active = !t);
  }, r.updateWinAmount = function (t) {
    var n = t.value,
      e = t.tweenTime,
      i = this.data.getData().definition.digital,
      o = _dependency7.default.getData().winAmountTime,
      a = {
        label: this.winAmount,
        start: parseFloat(this.winAmount.string.replace(/,/g, "")),
        end: n,
        tweenTime: e || o,
        digital: i,
        useThousandsSeparator: !0,
        callback: function () {}
      };
    n ? (this.winAmountTween = _dependency5.CmmSlotUtils.tweenNum(a), this.winAmount.node.active = !0, this.winBoardFont.node.active = !1) : (this.winAmount.string = "0", this.winAmount.node.active = !1, this.winBoardFont.node.active = !0);
  }, r.quickStopWinAmount = function (t) {
    this.winAmountTween && this.winAmountTween.stop(), this.winAmount.string = _dependency5.CmmSlotUtils.formatNumber(t);
  }, r.updateFgRemaining = function () {
    var t = this.data.getData().gameState.freeGameCount;
    Number(this.remaining.string) != t && this.playBounceTween(this.remaining.node), this.remaining.string = t.toString();
  }, r.IncreaseFgRemaining = function (t) {
    var n = this,
      e = this.data.getData().definition.extraFgRounds,
      i = this.remaining.color;
    this.increaseCounts++;
    var o = 1 + .05 * this.increaseCounts,
      a = 1 - .02 * this.increaseCounts;
    _dependency2.tween(this.remaining.node).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(o, o, 1)
    }, {
      onComplete: function () {
        n.remaining.string = (Number(n.remaining.string) + 1).toString();
      },
      easing: "quintIn"
    }).to(.05, {
      scale: new _dependency2.Vec3(a, a, 1)
    }, {
      easing: "quintIn"
    }).call(function () {
      n.increaseCounts == e ? (n.increaseCounts = 0, n.scheduleOnce(function () {
        t();
      }, 1), _dependency2.tween(n.remaining.node).bindNodeState(false).to(.1, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: "quintIn"
      }).start()) : n.increaseCounts < e && n.IncreaseFgRemaining(t);
    }).start(), _dependency2.tween(i).bindNodeState(false).to(.1, {
      a: 130
    }, {
      easing: "quintIn"
    }).to(.05, {
      a: 255
    }, {
      easing: "quintIn"
    }).start();
  }, r.playWinBoardAnime = function (t) {
    var n = this,
      e = t ? Z.MG_WIN : Z.FG_WIN;
    this.spine && (this.spine.clearTracks(), this.spine.setToSetupPose(), this.spine.setAnimation(0, e, !1), this.spine.setCompleteListener(function () {
      var e = t ? Z.MG_IDLE : Z.FG_IDLE;
      n.spine.setCompleteListener(function () {}), n.spine.clearTracks(), n.spine.setToSetupPose(), n.spine.setAnimation(0, e, !0);
    }));
  }, r.playWinBoardFontTween = function (t) {
    var n = this,
      e = t ? [1, 2, 3, 4] : [5, 2, 3, 4];
    this.unschedule(this.fontNodeOpacityTween), this.fontNodeOpacityTween = null, this.curWinBoardFontIndex = 0, this.setWinBoardFont(e[this.curWinBoardFontIndex]), this.fontNodeOpacityTween = function () {
      _dependency2.tween(n.fontNodeOpacity).bindNodeState(false).to(1, {
        opacity: 0
      }, {
        easing: "fade",
        onComplete: function () {
          n.curWinBoardFontIndex == e.length - 1 ? n.curWinBoardFontIndex = 0 : n.curWinBoardFontIndex++, n.setWinBoardFont(e[n.curWinBoardFontIndex]);
        }
      }).to(1, {
        opacity: 255
      }, {
        easing: "fade"
      }).start();
    }, this.schedule(this.fontNodeOpacityTween, 5, _dependency2.macro.REPEAT_FOREVER, 3);
  }, r.setWinBoardFont = function (t) {
    var n = "mg_font_winboard_0" + _dependency6.default.zeroPad(t, 1);
    2 == t && _dependency0.default.getData().theme && "xin-star" == _dependency0.default.getData().theme && (n += "_01"), this.winBoardFont.spriteFrame = this.data.getLocaleSpriteFrame(n);
  }, r.expandWinnings = function () {
    this.times.string = "", this.curTimes = 0, this.times.color.set(255, 255, 255, 255), this.cross.color.set(255, 255, 255, 255), this.cross.node.active = !0, this.times.node.active = !0;
  }, r.mergeWinnings = function (t) {
    var n = this,
      e = this.data.getData().gameState,
      i = e.totalWinnings,
      o = e.roundWinnings,
      a = "freeSpin" == e.action,
      r = a ? o : i;
    _dependency2.tween(this.winAmount.node).bindNodeState(false).delay(.4).to(.4, {
      position: new _dependency2.Vec3(0, 3, 0)
    }, {
      onComplete: function () {
        n.winAmount.string = _dependency5.CmmSlotUtils.formatNumber(r), n.playBounceTween(n.winAmount.node, t), dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency7.EBTM.SCORE
          }
        }), a && dispatch(_dependency9.GameEvent.UPDATE_FG_TOTAL_TIMES, {
          data: n.curTimes
        });
      }
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(.75).call(function () {
      n.playWinBoardAnime(n.isMg);
    }).start(), _dependency2.tween(this.times.node).bindNodeState(false).delay(.4).to(.4, {
      position: new _dependency2.Vec3(0, 17, 0)
    }, {
      onStart: function () {
        n.playFadeOut(n.times);
      }
    }).start(), _dependency2.tween(this.cross.node).bindNodeState(false).delay(.4).to(.4, {
      position: new _dependency2.Vec3(0, 12, 0)
    }, {
      onStart: function () {
        n.playFadeOut(n.cross);
      }
    }).start();
  }, r.playBounceTween = function (t, n) {
    _dependency2.tween(t).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.5, 1.5, 1.5)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        n && n();
      }
    }).start();
  }, r.playFadeOut = function (t) {
    _dependency2.tween(t.color).bindNodeState(false).to(.4, {
      a: 0
    }, {
      onComplete: function () {
        t.node.active = !1;
      }
    }).start();
  }, r.updateTimes = function (t) {
    this.curTimes += t, this.times.string = this.curTimes.toString(), this.times.forceDoLayout();
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency9.GameEvent.UPDATE_WIN_AMOUNT, function (n) {
      t.updateWinAmount(n.data);
    }), this.on(_dependency9.GameEvent.QUICK_STOP_WIN_AMOUNT, function (n) {
      t.quickStopWinAmount(n.data);
    }), this.on(_dependency9.GameEvent.CHANGE_GAME_STYLE, function (n) {
      t.setBgSprite(n.data), t.setFgElements(n.data), t.playWinBoardFontTween(n.data);
    }), this.on(_dependency9.GameEvent.UPDATE_FG_REMAINING, function (n) {
      t.updateFgRemaining();
    }), this.on(_dependency9.GameEvent.INCREASE_FG_REMAINING, function (n) {
      t.IncreaseFgRemaining(n.complete);
    }), this.on(_dependency9.GameEvent.EXPAND_WIN_AMOUNT, function (n) {
      t.expandWinnings();
    }), this.on(_dependency9.GameEvent.UPDATE_TIMES, function (n) {
      t.playBounceTween(t.times.node), t.updateTimes(n.data);
    }), this.on(_dependency9.GameEvent.MERGE_WIN_AMOUNT, function (n) {
      t.mergeWinnings(n.data);
    });
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), n;
}(_dependency3.default)).prototype, "bgEffect", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(z.prototype, "bgLeft", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(z.prototype, "bgRight", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(z.prototype, "winboardBg", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(z.prototype, "spine", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(z.prototype, "winAmount", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(z.prototype, "cross", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(z.prototype, "times", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(z.prototype, "fgRemaining", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(z.prototype, "remaining", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(z.prototype, "winBoardFont", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(z.prototype, "fontNodeOpacity", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = z)) || P));
_dependency2.cclegacy._RF.pop();
