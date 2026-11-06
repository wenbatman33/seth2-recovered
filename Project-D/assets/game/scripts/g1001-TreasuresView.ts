// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "./g1001-GameEvent";
import * as _dependency5 from "./g1001-GameConfigModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "../../shared/scripts/main-Decorators";
import * as _dependency8 from "./g1001-GameData";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency1 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as TreasuresView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TreasuresView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, o, s, l, c, r, u, h, d, p, f, _, T, S, m, w, B, N, O, g, y, W;
var A, P, C, b, I, E, M, U, v, L, D, R, G, k, V;
_dependency2.cclegacy._RF.push({}, "8aa14oMcU9NkqZLu7MuIsrF", "TreasuresView", void 0);
var H,
  z = _dependency2._decorator.ccclass,
  F = _dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", t[t.SHOW_BUGWIN_NUMBER = 2] = "SHOW_BUGWIN_NUMBER", t[t.SHOW_BUGWIN_NUMBER_END = 3] = "SHOW_BUGWIN_NUMBER_END", t[t.BIGWIN_COMPLETED = 4] = "BIGWIN_COMPLETED";
}(H || (H = {}));
_publish("TreasuresView", (A = z("TreasuresView"), P = _dependency7.inject("alert", _dependency2.Node), C = F(_dependency2.Node), b = _dependency7.inject("alert/effectBg", _dependency2.sp.Skeleton), I = _dependency7.inject("alert/totalWin", _dependency2.Label), E = _dependency7.inject("alert/fireworks", _dependency2.sp.Skeleton), M = _dependency7.inject("alert/coinSprays", _dependency2.Node), A((L = _dependency.applyDecoratedDescriptor((v = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", L, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fireworks", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinSprays", V, _dependency.assertThisInitialized(e)), e.bigwinFontFileNames = ["w_big", "w_super", "w_mega", "w_ultra", "w_legend"], e.complete = null, e.completedCB = null, e.tweenNumTween = null, e.bigwinVO = null, e.playBigFontLoop = null, e.showWinStatus = H.NONE, e.playPrizeLoopBtmSchedule = null, e.playPrizeVoiceBtmSchedule = null, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/" + _dependency1.default.getViewModeParam() + "/TreasuresView";
  };
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    this.stopAllMusicAndSchedule(), t.prototype.onDestroy.call(this);
  }, s.init = function () {
    this.enabledKeyDown = !0;
  }, s.show = function (e) {
    t.prototype.show.call(this);
  }, s.onClose = function () {
    this.unscheduleAllCallbacks(), _dependency2.Tween.stopAllByTarget(this), this.closeNodes(), this.stopAllMusicAndSchedule(), App.globalAudio.isMusicOn = !0, App.globalAudio.resumeMusic();
    var t = this.data.getData().gameState.noWinReward;
    dispatch(_dependency4.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: t
    }), dispatch(_dependency4.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: t
    }), this.close();
  }, s.stopAllMusicAndSchedule = function () {
    dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.JP_POPUP_IN_2
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.JP_POPUP_LOOP_2
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.ULTRA_IN
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.LEGEND_IN
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.S_PRIZE_LOOP
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.L_PRIZE_LOOP
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.FIREWORKS
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.BIG_VOCAL
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.SUPER_VOCAL
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.MEGA_VOCAL
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.ULTRA_VOCAL
    }), dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.LEGENDARY_VOCAL
    }), this.unschedule(this.playPrizeLoopBtmSchedule), this.unschedule(this.playPrizeVoiceBtmSchedule);
  }, s.closeNodes = function () {
    this.bbr && (this.bbr.active = !1), this.effectBg.node.active = !1, this.totalWin.node.active = !1, this.fireworks.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this);
  }, s.playAnimation = function (t) {
    App.globalAudio.pauseMusic(), this.playWin(t);
  }, s.playWin = function (t) {
    var e = this,
      i = _dependency5.default.getData().bigwinAutoCloseTime;
    this.effectBg.node.active = !0, this.effectBg.clearTracks(), this.effectBg.setToSetupPose(), dispatch(_dependency4.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.JP_POPUP_IN_2,
        loop: !1
      }
    }), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setCompleteListener(null), e.effectBg.setAnimation(0, "open", !1), _dependency2.tween(e).bindNodeState(false).delay(.5).call(function () {
        dispatch(_dependency4.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency5.EBTM.JP_POPUP_LOOP_2,
            loop: !0
          }
        }), e.playCoinSprayAndRunScore();
      }).start(), e.effectBg.setCompleteListener(function () {
        e.effectBg.setCompleteListener(null), e.effectBg.setAnimation(0, "loop", !0);
      });
    }), this.scheduleOnce(this.showWinResult, i + t);
  }, s.playCoinSprayAndRunScore = function () {
    var t = this,
      e = this.data.getData().gameState.noWinReward,
      i = this.data.getData().definition.digital;
    dispatch(_dependency9.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: e,
        tweenTime: 8
      }
    }), dispatch(_dependency4.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: e,
        tweenTime: 8
      }
    }), this.showCoinSpray();
    var n = {
      label: this.totalWin,
      start: 0,
      end: e,
      tweenTime: 8,
      digital: i,
      useThousandsSeparator: !0
    };
    this.showWinStatus = H.SHOW_BUGWIN_NUMBER, this.totalWin.node.active = !0, this.tweenNumTween = _dependency6.CmmSlotUtils.tweenNum(n), this.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
      t.showWinResult();
    }, this);
  }, s.addClickAlertCompleteCb = function () {
    this.unschedule(this.addClickAlertCompleteCb), this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.completedCB);
    var t = _dependency5.default.getData().bigwinAutoCloseTime;
    this.scheduleOnce(this.completedCB, t);
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
  }, s.showCoinSpray = function () {
    var t = this,
      e = this.coinSprays.getComponentsInChildren(_dependency2.sp.Skeleton);
    this.coinSprays.active = !0;
    for (var i = function () {
        var i = e[n];
        0 == n ? (i.node.active = !0, i.setAnimation(0, "coin_01", !1)) : 1 == n ? t.scheduleOnce(function () {
          i.node.active = !0, i.setAnimation(0, "coin_02", !1);
        }, 1.3) : t.scheduleOnce(function () {
          var t = _dependency0.default.getRandomNumber(3, 6);
          i.node.active = !0, i.setAnimation(0, "radom_0" + t, !1), i.setCompleteListener(function () {
            var t = _dependency0.default.getRandomNumber(3, 6);
            i.setAnimation(0, "radom_0" + t, !1);
          });
        }, 2.8 + .5 * (n - 2));
      }, n = 0; n < e.length; n++) i();
  }, s.showWinResult = function () {
    var t = this.data.getData().gameState.noWinReward;
    _dependency2.Tween.stopAllByTarget(this), this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = _dependency6.CmmSlotUtils.formatNumber(t), this.playBounceTween(this.totalWin.node), this.unschedule(this.playBigFontLoop), dispatch(_dependency4.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: t
    }), dispatch(_dependency4.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: t
    }), this.unschedule(this.showWinResult), this.addClickAlertCompleteCb();
  }, s.showTreasureWin = function (t) {
    var e = this;
    this.totalWin.string = "0.00", this.showWinStatus = H.SHOW_BIGWIN, this.completedCB = function () {
      e.showWinStatus = H.BIGWIN_COMPLETED, t(), e.onClose(), e.unschedule(e.playBigFontLoop);
    }, App.globalAudio.pauseMusic(), App.globalAudio.isMusicOn = !1, _dependency2.tween(this).bindNodeState(false).delay(1).call(function () {
      e.bbr.active = !0, _dependency2.tween(e).bindNodeState(false).delay(1).call(function () {
        e.playAnimation(8);
      }).start();
    }).start();
  }, s.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.showWinStatus) {
      case H.SHOW_BUGWIN_NUMBER:
        this.showWinStatus = H.SHOW_BUGWIN_NUMBER_END;
        break;
      case H.SHOW_BUGWIN_NUMBER_END:
        this.showWinStatus = H.BIGWIN_COMPLETED, this.scheduleOnce(this.completedCB, .5);
    }
  }, s.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(v.prototype, "bbr", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(v.prototype, "effectBg", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(v.prototype, "totalWin", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(v.prototype, "fireworks", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(v.prototype, "coinSprays", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = v)) || U));
_dependency2.cclegacy._RF.pop();
