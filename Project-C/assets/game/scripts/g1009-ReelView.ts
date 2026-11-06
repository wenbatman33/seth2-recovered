// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency6 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency7 from "./g1009-GameConfigModel";
import * as _dependency8 from "./g1009-GameData";
import * as _dependency9 from "./g1009-GameEvent";
import * as _dependency0 from "./g1009-types";
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
var n, i, e, o, a, r, s, u, c, l, d, g, f, m, p, h, w, _, S, A, F, b, E, y;
var T, I, N, B, v, G, W, M, D, R, C, O, L, P, U, z, x, k, q, V, Y, j, H, Q;
_publish("WIN_BOARD_ANIME_NAME", void 0), _dependency2.cclegacy._RF.push({}, "762716NSQRJn7FWkS+bGv0A", "ReelView", void 0), function (t) {
  t.MG_IDLE = "mg_idle", t.MG_WIN = "mg_win", t.FG_IDLE = "fg_idle", t.FG_WIN = "fg_win", t.SFG_IDLE = "sfg_idle", t.SFG_WIN = "sfg_win";
}(Q || (Q = _publish("WIN_BOARD_ANIME_NAME", {})));
var J = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("ReelView", (T = J("ReelView"), I = _dependency4.inject("bgEffect", _dependency2.sp.Skeleton), N = _dependency4.inject("bgContent/bgSprite", _dependency2.Sprite), B = _dependency4.inject("winboard/spine", _dependency2.sp.Skeleton), v = _dependency4.inject("winboard/winnings/winAmount", _dependency2.Label), G = _dependency4.inject("winboard/winnings/cross", _dependency2.Label), W = _dependency4.inject("winboard/winnings/times", _dependency2.Label), M = _dependency4.inject("fgRemaining", _dependency2.Node), D = _dependency4.inject("fgRemaining/remaining", _dependency2.Label), R = _dependency4.inject("winboard/fontNode/font", _dependency2.Sprite), C = _dependency4.inject("winboard/fontNode", _dependency2.UIOpacity), T((P = _dependency.applyDecoratedDescriptor((L = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "bgEffect", P, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgSprite", U, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "winBoardSpine", z, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "winAmount", x, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "cross", k, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "times", q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "fgRemaining", V, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "remaining", Y, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "winBoardFont", j, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "fontNodeOpacity", H, _dependency.assertThisInitialized(n)), n.curWinBoardFontIndex = 0, n.curTimes = 0, n.fontNodeOpacityTween = null, n.winAmountTween = null, n.increaseCounts = 0, n.isMg = !0, n;
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
    _dependency7.default.useProEffect || (this.bgEffect.node.active = !1), this.winAmount.node.active = !1, this.winBoardFont.node.parent.active = !0;
  }, r.setBgSprite = function () {
    var t = this.data.getData().gameState.isGoldenFg,
      n = this.isMg ? "mg_frame" : t ? "nfg_frame" : "fg_frame",
      i = this.data.getCommonSpriteFrame(n);
    this.bgSprite.spriteFrame = i;
  }, r.setWinBoard = function () {
    var t = this.data.getData().gameState.isGoldenFg,
      n = this.isMg ? Q.MG_IDLE : t ? Q.SFG_IDLE : Q.FG_IDLE;
    this.winBoardSpine.setAnimation(0, n, !1);
  }, r.setFgElements = function () {
    var t = this.data.getData().gameState.freeGameCount;
    this.fgRemaining.active = !this.isMg, this.remaining.string = null == t ? void 0 : t.toString(), _dependency7.default.useProEffect && (this.bgEffect.node.active = !this.isMg);
  }, r.updateWinAmount = function (t) {
    var n = t.value,
      i = t.tweenTime,
      e = this.data.getData().definition.digital,
      o = _dependency7.default.getData().winAmountTime,
      a = {
        label: this.winAmount,
        start: parseFloat(this.winAmount.string.replace(/,/g, "")),
        end: n,
        tweenTime: i || o,
        digital: e,
        useThousandsSeparator: !0,
        callback: function () {
          dispatch(_dependency9.GameEvent.STOP_BTM, {
            data: _dependency7.EBTM.COUNTING
          });
        }
      };
    n ? (this.winAmountTween = _dependency5.CmmSlotUtils.tweenNum(a), this.winAmount.node.active = !0, this.winBoardFont.node.active = !1) : (this.winAmount.string = "0", this.winAmount.node.active = !1, this.winBoardFont.node.active = !0);
  }, r.quickStopWinAmount = function (t) {
    this.winAmountTween && this.winAmountTween.stop(), this.winAmount.string = _dependency5.CmmSlotUtils.formatNumber(t);
  }, r.updateFgRemaining = function () {
    var t = this.data.getData().gameState.freeGameCount;
    Number(this.remaining.string) != t && this.playBounceTween(this.remaining.node), this.remaining.string = t.toString();
  }, r.IncreaseFgRemaining = function (t) {
    var n = this,
      i = this.data.getData().definition.extraFgRounds,
      e = this.remaining.color;
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
      n.increaseCounts == i ? (n.increaseCounts = 0, n.scheduleOnce(function () {
        t();
      }, 1), _dependency2.tween(n.remaining.node).bindNodeState(false).to(.1, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: "quintIn"
      }).start()) : n.increaseCounts < i && n.IncreaseFgRemaining(t);
    }).start(), _dependency2.tween(e).bindNodeState(false).to(.1, {
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
      i = this.data.getData().gameState.isGoldenFg,
      e = t ? Q.MG_WIN : i ? Q.SFG_WIN : Q.FG_WIN;
    this.winBoardSpine && (this.winBoardSpine.clearTracks(), this.winBoardSpine.setToSetupPose(), this.winBoardSpine.setAnimation(0, e, !1), this.winBoardSpine.setCompleteListener(function () {
      var e = t ? Q.MG_IDLE : i ? Q.SFG_IDLE : Q.FG_IDLE;
      n.winBoardSpine.clearTracks(), n.winBoardSpine.setToSetupPose(), n.winBoardSpine.setAnimation(0, e, !0), n.winBoardSpine.setCompleteListener(null);
    }));
  }, r.playWinBoardFontTween = function () {
    var t = this,
      n = this.data.getData().gameState.isGoldenFg,
      i = this.isMg ? [7, 6, 1, 3, 4] : n ? [8, 7, 3, 4] : [5, 2, 3, 4];
    this.unschedule(this.fontNodeOpacityTween), this.fontNodeOpacityTween = null, this.curWinBoardFontIndex = 0, this.setWinBoardFont(i[this.curWinBoardFontIndex]), this.fontNodeOpacityTween = function () {
      _dependency2.tween(t.fontNodeOpacity).bindNodeState(false).to(1, {
        opacity: 0
      }, {
        easing: "fade",
        onComplete: function () {
          t.curWinBoardFontIndex == i.length - 1 ? t.curWinBoardFontIndex = 0 : t.curWinBoardFontIndex++, t.setWinBoardFont(i[t.curWinBoardFontIndex]);
        }
      }).to(1, {
        opacity: 255
      }, {
        easing: "fade"
      }).start();
    }, this.schedule(this.fontNodeOpacityTween, 5, _dependency2.macro.REPEAT_FOREVER, 3);
  }, r.setWinBoardFont = function (t) {
    var n = "mg_font_winboard_0" + _dependency6.default.zeroPad(t, 1);
    this.winBoardFont.spriteFrame = this.data.getLocaleSpriteFrame(n);
  }, r.expandWinnings = function () {
    this.times.string = "", this.curTimes = 0, this.times.color.set(255, 255, 255, 255), this.cross.color.set(255, 255, 255, 255), this.cross.node.active = !0, this.times.node.active = !0;
  }, r.mergeWinnings = function (t) {
    var n = this,
      i = this.data.getData().gameState,
      e = i.totalWinnings,
      o = i.roundWinnings,
      a = i.action,
      r = a == _dependency0.EActionType.FREE_GAME,
      s = a == _dependency0.EActionType.SUPER_GAME,
      u = r ? o : e;
    0 == r && (u = s ? o : e), _dependency2.tween(this.winAmount.node).bindNodeState(false).delay(.5).to(.5, {
      position: new _dependency2.Vec3(0, 0, 0)
    }, {
      onComplete: function () {
        n.winAmount.string = _dependency5.CmmSlotUtils.formatNumber(u), n.playBounceTween(n.winAmount.node, t), dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency7.EBTM.SCORE
          }
        }), r && dispatch(_dependency9.GameEvent.UPDATE_FG_TOTAL_TIMES, {
          data: n.curTimes
        });
      }
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(.95).call(function () {
      n.playWinBoardAnime(n.isMg);
    }).start(), _dependency2.tween(this.times.node).bindNodeState(false).delay(.5).to(.5, {
      position: new _dependency2.Vec3(0, 0, 0)
    }, {
      onStart: function () {
        n.playFadeOut(n.times);
      }
    }).start(), _dependency2.tween(this.cross.node).bindNodeState(false).delay(.5).to(.5, {
      position: new _dependency2.Vec3(0, 0, 0)
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
    _dependency2.tween(t.color).bindNodeState(false).to(.5, {
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
      var i = n.data;
      t.isMg = i, t.setBgSprite(), t.setWinBoard(), t.setFgElements(), t.playWinBoardFontTween();
    }), this.on(_dependency9.GameEvent.UPDATE_FG_REMAINING, function (n) {
      t.updateFgRemaining();
    }), this.on(_dependency9.GameEvent.INCREASE_FG_REMAINING, function (n) {
      t.IncreaseFgRemaining(n.complete), dispatch(_dependency9.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency7.EBTM.FG_REMAINING
        }
      });
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
}(_dependency3.default)).prototype, "bgEffect", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(L.prototype, "bgSprite", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(L.prototype, "winBoardSpine", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(L.prototype, "winAmount", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(L.prototype, "cross", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(L.prototype, "times", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(L.prototype, "fgRemaining", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(L.prototype, "remaining", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(L.prototype, "winBoardFont", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(L.prototype, "fontNodeOpacity", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = L)) || O));
_dependency2.cclegacy._RF.pop();
