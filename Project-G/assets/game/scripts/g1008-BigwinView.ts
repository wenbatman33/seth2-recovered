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
import * as _dependency9 from "./g1008-GameConfigModel";
import * as _dependency0 from "./g1008-GameData";
import * as _dependency1 from "./g1008-GameEvent";
import * as _dependency10 from "./g1008-types";
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
var e, i, n, a, s, o, l, c, u, r, h, d, p, f, _, w, O, m, B, S, g, N, T, A, W, y, C, E;
var L, I, b, P, M, v, R, U, D, G, k, F, V, z, H;
_dependency2.cclegacy._RF.push({}, "d4da4xA+iJNua7Er8vRDlew", "BigwinView", void 0);
var K,
  Y = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", t[t.SHOW_BUGWIN_NUMBER = 2] = "SHOW_BUGWIN_NUMBER", t[t.SHOW_BUGWIN_NUMBER_END = 3] = "SHOW_BUGWIN_NUMBER_END", t[t.BIGWIN_COMPLETED = 4] = "BIGWIN_COMPLETED";
}(K || (K = {}));
_publish("BigwinView", (L = Y("BigwinView"), I = _dependency4.inject("alert", _dependency2.Node), b = _dependency4.inject("alert/effectBg", _dependency2.sp.Skeleton), P = _dependency4.inject("alert/effectFont", _dependency2.sp.Skeleton), M = _dependency4.inject("alert/totalWin", _dependency2.Label), v = _dependency4.inject("alert/fireworks", _dependency2.sp.Skeleton), R = _dependency4.inject("alert/coinSprays", _dependency2.Node), L((G = _dependency.applyDecoratedDescriptor((D = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectFont", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fireworks", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinSprays", H, _dependency.assertThisInitialized(e)), e.bigwinFontFileNames = ["big", "super", "mega", "ultra", "legend"], e.completedCB = null, e.tweenNumTween = null, e.bigwinVO = null, e.playBigFontLoop = null, e.showWinStatus = K.NONE, e.playPrizeLoopBtmSchedule = null, e.playPrizeVoiceBtmSchedule = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    this.stopAllMusicAndSchedule(), t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency12.default.getViewModeParam() + "/BigwinView";
  }, o.init = function () {
    this.enabledKeyDown = !0;
  }, o.show = function (e) {
    t.prototype.show.call(this), this.closeNodes();
  }, o.onClose = function () {
    this.unscheduleAllCallbacks(), _dependency2.Tween.stopAllByTarget(this), this.closeNodes(), this.stopAllMusicAndSchedule(), App.globalAudio.resumeMusic(), this.close();
  }, o.stopAllMusicAndSchedule = function () {
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
  }, o.closeNodes = function () {
    this.effectBg.node.active = !1, this.effectFont.node.active = !1, this.totalWin.node.active = !1, this.fireworks.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this), _dependency9.default.stopOnBigwinPrize && (_dependency5.default.active = !1);
  }, o.playAnimation = function (t, e) {
    var i = this,
      n = 0 != t,
      a = t >= 4,
      s = this.bigwinVO.isRoundWin,
      o = 0;
    App.globalAudio.pauseMusic(), n && !s ? a ? (this.showFireworks(), 4 == t ? (dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.ULTRA_IN
      }
    }), o = 2) : 5 == t && (dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.LEGEND_IN
      }
    }), o = 2.5), this.scheduleOnce(function () {
      i.playBigwin(t - 1, e);
    }, o)) : this.playBigwin(t - 1, e) : (this.playWin(e), this.showCoinSpray(), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.WIN_LOOP,
        loop: !0
      }
    }));
  }, o.playWinSpine = function (t) {
    var e = this;
    this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.effectFont.setAnimation(0, t + "_in", !1), this.effectFont.setCompleteListener(function () {
      e.effectFont.setAnimation(0, t + "_loop", !0), e.effectFont.setCompleteListener(null);
    }), this.effectBg.setAnimation(0, t + "_in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setAnimation(0, t + "_loop", !0);
    });
  }, o.playWin = function (t) {
    var e = _dependency9.default.getData().bigwinAutoCloseTime,
      i = this.data.getFontSpriteFrame("countup_07");
    this.totalWin.font = i, this.playWinSpine("win"), this.scheduleOnce(this.showWinResult, e + t);
  }, o.playBigwin = function (t, e) {
    var i = this,
      n = _dependency9.default.getData().bigwinAutoCloseTime,
      a = this.bigwinFontFileNames[t],
      s = (this.data.getData().parser.bigwinReach.level, this.bigwinVO.isFgOut),
      o = 2.5;
    3 == t ? o = 2.3 : 4 == t && (o = 2);
    var l = this.data.getFontSpriteFrame("countup_01");
    this.totalWin.font = l, this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.playWinSpine(a), t < 3 && dispatch(_dependency1.GameEvent.PLAY_BTM, {
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
    }, this.scheduleOnce(this.playPrizeLoopBtmSchedule, o), n && !s && this.scheduleOnce(this.showWinResult, n + o + e), _dependency11.default.isReplay ? s ? this.scheduleOnce(this.showWinResult, n + o + e) : this.scheduleOnce(this.addClickAlertCompleteCb, e + o) : s ? this.scheduleOnce(function () {
      i.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
        return i.showWinResult();
      }, n + o + e);
    }, n + o + e) : this.scheduleOnce(this.addClickAlertCompleteCb, e + o);
  }, o.addClickAlertCompleteCb = function () {
    this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.completedCB);
    var t = _dependency9.default.getData().bigwinAutoCloseTime;
    this.scheduleOnce(this.completedCB, t), this.unschedule(this.addClickAlertCompleteCb);
  }, o.playWinBtm = function (t) {
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
  }, o.playBounceTween = function (t, e) {
    _dependency2.tween(t).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.8, 1.8, 1.8)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, o.showFireworks = function () {
    this.fireworks.node.active = !0, this.fireworks.setAnimation(0, "fireworks", !0), this.fireworks.timeScale = 1.5;
  }, o.showCoinSpray = function () {
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
  }, o.showWinResult = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = e.totalWinnings,
      n = e.roundWinnings,
      a = this.data.currentGameType == _dependency10.EGameType.MAIN_GAME,
      s = (this.data.getData().parser.bigwinReach.level, this.bigwinVO.isFgOut);
    this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = _dependency7.CmmSlotUtils.formatNumber(this.bigwinVO.winnings), this.playBounceTween(this.totalWin.node), this.unschedule(this.playBigFontLoop), dispatch(_dependency1.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: i
    }), dispatch(_dependency1.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: a ? i : n
    }), this.unschedule(this.showWinResult), this.showWinStatus = K.SHOW_BUGWIN_NUMBER_END, this.bigwinVO.isRoundWin ? this.scheduleOnce(this.completedCB, 1) : s ? _dependency11.default.isReplay ? (this.stopAllMusicAndSchedule(), this.completedCB()) : this.scheduleOnce(function () {
      t.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
        t.stopAllMusicAndSchedule(), t.completedCB();
      });
    }, 1) : this.addClickAlertCompleteCb();
  }, o.showBigwin = function (t, e) {
    var i = this,
      n = this.data.getData().gameState,
      a = n.totalWinnings,
      s = n.roundWinnings,
      o = this.data.currentGameType == _dependency10.EGameType.MAIN_GAME,
      l = this.data.getData().definition.digital,
      c = this.data.getData().parser.bigwinReach.level,
      u = e.winnings,
      h = e.isRoundWin,
      d = 5 + 3 * c,
      p = c >= 4 && !h ? 4.5 : 2.7,
      f = {
        label: this.totalWin,
        start: 0,
        end: u,
        tweenTime: d,
        digital: l,
        useThousandsSeparator: !0
      };
    (h || 0 == c) && (p = 0), this.bigwinVO = e, this.showWinStatus = K.SHOW_BIGWIN, this.completedCB = function () {
      i.unscheduleAllCallbacks(), i.showWinStatus = K.BIGWIN_COMPLETED, i.tweenNumTween && i.tweenNumTween.stop(), dispatch(_dependency1.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: a
      }), dispatch(_dependency1.GameEvent.QUICK_STOP_WIN_AMOUNT, {
        data: o ? a : s
      }), t(), i.onClose(), i.unschedule(i.playBigFontLoop);
    }, this.playAnimation(c, d), this.scheduleOnce(function () {
      i.showWinStatus = K.SHOW_BUGWIN_NUMBER, i.totalWin.node.active = !0, i.tweenNumTween = _dependency7.CmmSlotUtils.tweenNum(f), i.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
        i.showWinResult();
      }, i), dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: a,
          tweenTime: d
        }
      }), dispatch(_dependency1.GameEvent.UPDATE_WIN_AMOUNT, {
        data: {
          value: u,
          tweenTime: d
        }
      });
    }, p);
  }, o.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.showWinStatus) {
      case K.SHOW_BUGWIN_NUMBER:
        this.showWinResult(), this.showWinStatus = K.SHOW_BUGWIN_NUMBER_END;
        break;
      case K.SHOW_BUGWIN_NUMBER_END:
        this.showWinStatus = K.BIGWIN_COMPLETED, this.scheduleOnce(this.completedCB, .5);
    }
  }, o.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(D.prototype, "effectBg", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(D.prototype, "effectFont", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(D.prototype, "totalWin", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(D.prototype, "fireworks", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(D.prototype, "coinSprays", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = D)) || U));
_dependency2.cclegacy._RF.pop();
