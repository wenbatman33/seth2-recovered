// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency9 from "./g1001-GameConfigModel";
import * as _dependency0 from "./g1001-GameData";
import * as _dependency1 from "./g1001-GameEvent";
import * as _dependency10 from "./g1001-types";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency12 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as BigwinView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BigwinView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, o, s, l, c, h, u, r, d, p, f, _, w, m, g, B, O, A, N, S, T, y, C, W, E, L;
var b, P, I, M, R, v, U, D, F, G, k, V, z, H, K;
_dependency2.cclegacy._RF.push({}, "a74e4O3qV9BN4tXak+yb7nf", "BigwinView", void 0);
var Y,
  Z = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", t[t.SHOW_BUGWIN_NUMBER = 2] = "SHOW_BUGWIN_NUMBER", t[t.SHOW_BUGWIN_NUMBER_END = 3] = "SHOW_BUGWIN_NUMBER_END", t[t.BIGWIN_COMPLETED = 4] = "BIGWIN_COMPLETED";
}(Y || (Y = {}));
_publish("BigwinView", (b = Z("BigwinView"), P = _dependency4.inject("alert", _dependency2.Node), I = _dependency4.inject("alert/effectBg", _dependency2.sp.Skeleton), M = _dependency4.inject("alert/effectFont", _dependency2.sp.Skeleton), R = _dependency4.inject("alert/totalWin", _dependency2.Label), v = _dependency4.inject("alert/fireworks", _dependency2.sp.Skeleton), U = _dependency4.inject("alert/coinSprays", _dependency2.Node), b((G = _dependency.applyDecoratedDescriptor((F = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectFont", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fireworks", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinSprays", K, _dependency.assertThisInitialized(e)), e.bigwinFontFileNames = ["w_big", "w_super", "w_mega", "w_ultra", "w_legend"], e.completedCB = null, e.tweenNumTween = null, e.bigwinVO = null, e.playBigFontLoop = null, e.showWinStatus = Y.NONE, e.playPrizeLoopBtmSchedule = null, e.playPrizeVoiceBtmSchedule = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    this.stopAllMusicAndSchedule(), t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency12.default.getViewModeParam() + "/BigwinView";
  }, s.init = function () {
    this.enabledKeyDown = !0;
  }, s.show = function (e) {
    t.prototype.show.call(this), this.closeNodes();
  }, s.onClose = function () {
    this.unscheduleAllCallbacks(), _dependency2.Tween.stopAllByTarget(this), this.closeNodes(), this.stopAllMusicAndSchedule(), App.globalAudio.resumeMusic(), this.close();
  }, s.stopAllMusicAndSchedule = function () {
    dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.WIN_LOOP
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.SMALL_PRIZE_IN
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.ULTRA_IN
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.LEGEND_IN
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.S_PRIZE_LOOP
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.L_PRIZE_LOOP
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.FIREWORKS
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.BIG_VOCAL
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.SUPER_VOCAL
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.MEGA_VOCAL
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.ULTRA_VOCAL
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.LEGENDARY_VOCAL
    }), this.unschedule(this.playPrizeLoopBtmSchedule), this.unschedule(this.playPrizeVoiceBtmSchedule);
  }, s.closeNodes = function () {
    this.effectBg.node.active = !1, this.effectFont.node.active = !1, this.totalWin.node.active = !1, this.fireworks.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this), _dependency9.default.stopOnBigwinPrize && (_dependency5.default.active = !1);
  }, s.playAnimation = function (t, e) {
    var i = this,
      n = 0 != t,
      a = t >= 4,
      o = this.bigwinVO.isRoundWin,
      s = 0;
    App.globalAudio.pauseMusic(), n && !o ? a ? (this.showFireworks(), 4 == t ? (dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.ULTRA_IN
      }
    }), s = 2) : 5 == t && (dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.LEGEND_IN
      }
    }), s = 2.5), this.scheduleOnce(function () {
      i.playBigwin(t - 1, e);
    }, s)) : this.playBigwin(t - 1, e) : (this.playWin(e), this.showCoinSpray(), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.WIN_LOOP,
        loop: !0
      }
    }));
  }, s.playWin = function (t) {
    var e = this,
      i = _dependency9.default.getData().bigwinAutoCloseTime;
    this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.effectFont.skeletonData = this.data.getGameAlertSpine("w_win"), this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      e.effectFont.setAnimation(0, "loop", !1), e.playBigFontLoop = function () {
        e.effectFont.setAnimation(0, "loop", !1);
      }, e.schedule(e.playBigFontLoop, 2.5, _dependency2.macro.REPEAT_FOREVER, 0), e.effectFont.setCompleteListener(null);
    }), this.effectBg.skeletonData = this.data.getGameAlertSpine("w_win_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setAnimation(0, "loop", !0);
    }), this.scheduleOnce(this.showWinResult, i + t);
  }, s.playBigwin = function (t, e) {
    var i = this,
      n = _dependency9.default.getData().bigwinAutoCloseTime,
      a = this.bigwinFontFileNames[t],
      o = (this.data.getData().parser.bigwinReach.level, this.bigwinVO.isFgOut),
      s = 2.5;
    3 == t ? s = 2.3 : 4 == t && (s = 2), this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.effectFont.skeletonData = this.data.getGameAlertSpine(a), this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      i.effectFont.setAnimation(0, "loop", !1), i.playBigFontLoop = function () {
        i.effectFont.setAnimation(0, "loop", !1);
      }, i.schedule(i.playBigFontLoop, 2.5, _dependency2.macro.REPEAT_FOREVER, 0), i.effectFont.setCompleteListener(null);
    }), this.effectBg.skeletonData = this.data.getGameAlertSpine(a + "_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      i.effectBg.setAnimation(0, "loop", !0);
    }), t < 3 && dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.SMALL_PRIZE_IN
      }
    }), this.playWinBtm(t), this.playPrizeLoopBtmSchedule = function () {
      var e = t < 3 ? _dependency9.EBTM.S_PRIZE_LOOP : _dependency9.EBTM.L_PRIZE_LOOP;
      i.showCoinSpray(), dispatch(_dependency1.GameEvent.PLAY_BTM, {
        data: {
          url: e,
          loop: !0
        }
      });
    }, this.scheduleOnce(this.playPrizeLoopBtmSchedule, s), n && !o && this.scheduleOnce(this.showWinResult, n + s + e), _dependency11.default.isReplay ? o ? this.scheduleOnce(this.showWinResult, n + s + e) : this.scheduleOnce(this.addClickAlertCompleteCb, e + s) : o ? this.scheduleOnce(function () {
      i.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
        return i.showWinResult();
      }, n + s + e);
    }, n + s + e) : this.scheduleOnce(this.addClickAlertCompleteCb, e + s);
  }, s.addClickAlertCompleteCb = function () {
    this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.completedCB);
    var t = _dependency9.default.getData().bigwinAutoCloseTime;
    this.scheduleOnce(this.completedCB, t), this.unschedule(this.addClickAlertCompleteCb);
  }, s.playWinBtm = function (t) {
    var e,
      i = 0;
    switch (t) {
      case 0:
        e = _dependency9.EBTM.BIG_VOCAL, i = 1.2;
        break;
      case 1:
        e = _dependency9.EBTM.SUPER_VOCAL, i = .8;
        break;
      case 2:
        e = _dependency9.EBTM.MEGA_VOCAL, i = .9;
        break;
      case 3:
        e = _dependency9.EBTM.ULTRA_VOCAL, i = .9;
        break;
      case 4:
        e = _dependency9.EBTM.LEGENDARY_VOCAL, i = 0;
    }
    this.playPrizeVoiceBtmSchedule = function () {
      dispatch(_dependency1.GameEvent.PLAY_BTM, {
        data: {
          url: e
        }
      });
    }, this.scheduleOnce(this.playPrizeVoiceBtmSchedule, i);
  }, s.playBounceTween = function (t, e) {
    _dependency2.tween(t).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.8, 1.8, 1.8)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, s.showFireworks = function () {
    this.fireworks.node.active = !0, this.fireworks.setAnimation(0, "fireworks", !0), this.fireworks.timeScale = 1.5;
  }, s.showCoinSpray = function () {
    var t = this,
      e = this.coinSprays.getComponentsInChildren(_dependency2.sp.Skeleton);
    this.coinSprays.active = !0;
    for (var i = function () {
        var i = e[n];
        0 == n ? (i.node.active = !0, i.setAnimation(0, "coin_01", !1)) : 1 == n ? t.scheduleOnce(function () {
          i.node.active = !0, i.setAnimation(0, "coin_02", !1);
        }, 1.3) : t.scheduleOnce(function () {
          var t = _dependency8.default.getRandomNumber(3, 6);
          i.node.active = !0, i.setAnimation(0, "radom_0" + t, !1), i.setCompleteListener(function () {
            var t = _dependency8.default.getRandomNumber(3, 6);
            i.setAnimation(0, "radom_0" + t, !1);
          });
        }, 2.8 + .5 * (n - 2));
      }, n = 0; n < e.length; n++) i();
  }, s.showWinResult = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = e.totalWinnings,
      n = e.roundWinnings,
      a = this.data.currentGameType == _dependency10.EGameType.MAIN_GAME,
      o = (this.data.getData().parser.bigwinReach.level, this.bigwinVO.isFgOut);
    this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = _dependency7.CmmSlotUtils.formatNumber(this.bigwinVO.winnings), this.playBounceTween(this.totalWin.node), this.unschedule(this.playBigFontLoop), dispatch(_dependency1.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: i
    }), dispatch(_dependency1.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: a ? i : n
    }), this.unschedule(this.showWinResult), this.showWinStatus = Y.SHOW_BUGWIN_NUMBER_END, this.bigwinVO.isRoundWin ? this.scheduleOnce(this.completedCB, 1) : o ? _dependency11.default.isReplay ? (this.stopAllMusicAndSchedule(), this.completedCB()) : this.scheduleOnce(function () {
      t.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
        t.stopAllMusicAndSchedule(), t.completedCB();
      });
    }, 1) : this.addClickAlertCompleteCb();
  }, s.showBigwin = function (t, e) {
    var i = this,
      n = this.data.getData().gameState,
      a = n.totalWinnings,
      o = n.roundWinnings,
      s = this.data.currentGameType == _dependency10.EGameType.MAIN_GAME,
      l = this.data.getData().definition.digital,
      c = this.data.getData().parser.bigwinReach.level,
      h = e.winnings,
      u = e.isRoundWin,
      d = 5 + 3 * c,
      p = c >= 4 && !u ? 4.5 : 2.7,
      f = {
        label: this.totalWin,
        start: 0,
        end: h,
        tweenTime: d,
        digital: l,
        useThousandsSeparator: !0
      };
    (u || 0 == c) && (p = 0), this.bigwinVO = e, this.showWinStatus = Y.SHOW_BIGWIN, this.completedCB = function () {
      i.unscheduleAllCallbacks(), i.showWinStatus = Y.BIGWIN_COMPLETED, i.tweenNumTween && i.tweenNumTween.stop(), dispatch(_dependency1.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: a
      }), dispatch(_dependency1.GameEvent.QUICK_STOP_WIN_AMOUNT, {
        data: s ? a : o
      }), t(), i.onClose(), i.unschedule(i.playBigFontLoop);
    }, this.playAnimation(c, d), this.scheduleOnce(function () {
      i.showWinStatus = Y.SHOW_BUGWIN_NUMBER, i.totalWin.node.active = !0, i.tweenNumTween = _dependency7.CmmSlotUtils.tweenNum(f), i.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
        i.showWinResult();
      }, i), dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: a,
          tweenTime: d
        }
      }), dispatch(_dependency1.GameEvent.UPDATE_WIN_AMOUNT, {
        data: {
          value: h,
          tweenTime: d
        }
      });
    }, p);
  }, s.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.showWinStatus) {
      case Y.SHOW_BUGWIN_NUMBER:
        this.showWinResult(), this.showWinStatus = Y.SHOW_BUGWIN_NUMBER_END;
        break;
      case Y.SHOW_BUGWIN_NUMBER_END:
        this.showWinStatus = Y.BIGWIN_COMPLETED, this.scheduleOnce(this.completedCB, .5);
    }
  }, s.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(F.prototype, "effectBg", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(F.prototype, "effectFont", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(F.prototype, "totalWin", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(F.prototype, "fireworks", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(F.prototype, "coinSprays", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = F)) || D));
_dependency2.cclegacy._RF.pop();
