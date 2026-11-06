// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency9 from "./g1012-GameConfigModel";
import * as _dependency0 from "./g1012-GameData";
import * as _dependency1 from "./g1012-GameEvent";
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
var e, i, n, a, r, o, s, l, c, u, h, p, d, m, f, v, g, S, w, N, T, A, C, W, _;
var y, B, E, R, L, b, U, D, O, I, F, P, G, M, k, H;
_dependency2.cclegacy._RF.push({}, "4ac00S/iiJDnLvHRzXNJXES", "BigwinView", void 0);
var Y,
  z = _dependency2._decorator.ccclass,
  x = _dependency2._decorator.property;
!function (t) {
  t[t.RUN_SCORE = 0] = "RUN_SCORE", t[t.RUN_SCORE_END = 1] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 2] = "WAIT_CLOSE";
}(Y || (Y = {}));
_publish("BigwinView", (y = z("BigwinView"), B = _dependency5.inject("alert", _dependency2.Node), E = _dependency5.inject("alert/totalWin", _dependency2.Label), R = _dependency5.inject("alert/character", _dependency2.sp.Skeleton), L = x(_dependency2.Node), b = x(_dependency2.sp.Skeleton), U = x(_dependency2.Node), y(((H = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", I, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "character", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrNode", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrFont", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinSprays", k, _dependency.assertThisInitialized(e)), e.arrAnimeName = ["W_bigwin", "W_superwin", "W_megawin", "in", "in"], e.arrLoopAnimeName = ["", "", "", "loop", "loop"], e.arrCharacterAnimeName = ["", "", "bigwin", "megawin", "superwin"], e.arrCharacterSounds = ["", "", _dependency9.EBTM.MEGA_CHARACTER, _dependency9.EBTM.ULTRA_CHARACTER, _dependency9.EBTM.LEGENDARY_CHARACTER], e.totalWinNumber = 0, e.completedCB = null, e.tweenNumTween = null, e.showWinStatus = null, e.playInBtmSchedule = null, e.playLoopBtmSchedule = null, e.playVoiceBtmSchedule = null, e.playLoopCoinSpraysSchedule = null, e.currBigWinBg = null, e.currBigWinFont = null, e.currBigWinCoinSpray = null, e.currLevel = 0, e.maxLevel = 0, e.startLevel = 0, e.runScoreTimeMap = new Map(), e.isTotalBigWin = !1, e.isNotifyUpdateTotalWin = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this), this.setRunScoreTimeMap();
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.setRunScoreTimeMap = function () {
    for (var t = 0; t <= 4; t++) {
      for (var e = [1], i = 0; i < t; i++) e.push(1);
      this.runScoreTimeMap.set(t, e);
    }
  }, e.getPrefabUrl = function () {
    return "prefabs/BigwinView";
  }, o.closeNodes = function () {}, o.playAnimation = function (t, e) {}, o.init = function () {
    this.setEventTouch();
  }, o.setEventTouch = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_DOWN, _dependency3.CmmUtils.debounce(function (i) {
      if (i.keyCode === _dependency2.KeyCode.SPACE) {
        if (!App.uiManager.isShow(e)) return;
        switch (t.showWinStatus) {
          case Y.RUN_SCORE:
            t.directShowResult();
            break;
          case Y.RUN_SCORE_END:
            t.removeAllTween();
            break;
          case Y.WAIT_CLOSE:
        }
      }
    }));
  }, o.showCoinSpray = function (t) {
    var e = this,
      i = t.getComponentsInChildren(_dependency2.sp.Skeleton);
    t.active = !0;
    for (var n = function () {
        var t = i[a];
        0 == a ? (t.node.active = !0, t.setAnimation(0, "coin_01", !1)) : 1 == a ? e.scheduleOnce(function () {
          t.node.active = !0, t.setAnimation(0, "coin_02", !1);
        }, 1.3) : e.scheduleOnce(function () {
          var e = _dependency8.default.getRandomNumber(3, 6);
          t.node.active = !0, t.setAnimation(0, "radom_0" + e, !1), t.setCompleteListener(function () {
            var e = _dependency8.default.getRandomNumber(3, 6);
            t.setAnimation(0, "radom_0" + e, !1);
          });
        }, 2.8 + .5 * (a - 2));
      }, a = 0; a < i.length; a++) n();
  }, o.showBigwin = function (t, i, n) {
    var a = this;
    void 0 === n && (n = !0), this.totalWinNumber = t;
    var r = this.data.setBigWinReach(t);
    r && r.level && (this.isNotifyUpdateTotalWin = n, this.currLevel = 1, this.startLevel = this.currLevel, this.maxLevel = r.level, this.setSpineAndPlay(this.currLevel - 1), App.globalAudio.pauseMusic(), this.playLoopCoinSpraysSchedule = function () {
      a.showCoinSpray(a.currBigWinCoinSpray);
    }, this.scheduleOnce(this.playLoopCoinSpraysSchedule, e.COIN_SPRAY_DELAY), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.BIG_WIN_BG,
        loop: !0
      }
    }), this.showWinStatus != Y.RUN_SCORE_END && (this.totalWin.string = "0", this.totalWin.node.active = !0, this.showWinStatus = Y.RUN_SCORE, this.runScore(this.currLevel, t, !0), this.alert.on(_dependency2.NodeEventType.TOUCH_END, function () {
      if (a.currLevel++, a.currLevel > a.maxLevel) return a.alert.targetOff(a.alert), void a.directShowResult();
      a.nextLevel(t), a.setSpineAndPlay(a.currLevel - 1);
    }, this), _dependency2.tween(this).bindNodeState(false).delay(.2).call(function () {
      dispatch(_dependency1.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency9.EBTM.BIG_WIN
        }
      });
    }).start(), this.enabledKeyUp = !0));
  }, o.directShowResult = function () {
    var t = this;
    if (_dependency2.Tween.stopAllByTarget(this.node), this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.directShowResult), this.showWinStatus = Y.RUN_SCORE_END, this.currBigWinFont) {
      this.currBigWinFont.setCompleteListener(null);
      var e = this.data.getData().parser.bigwinReach.level,
        i = this.arrLoopAnimeName[e - 1];
      i && "" !== i && this.currBigWinFont.setAnimation(0, i, !0);
    }
    this.tweenNumTween && this.tweenNumTween.stop();
    var n = this.data.getData().definition.digital;
    this.totalWin.string = _dependency7.CmmSlotUtils.formatNumber(this.totalWinNumber, !1, !0, n), this.totalWin.node.active = !0, dispatch(_dependency1.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.totalWinNumber
    }), this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.removeAllTween, this);
    var a = _dependency9.default.getData().bigwinAutoCloseTime;
    _dependency2.tween(this.node).bindNodeState(false).delay(a).call(function () {
      t.removeAllTween();
    }).start();
  }, o.removeAllTween = function () {
    this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.removeAllTween), this.tweenNumTween && this.tweenNumTween.stop(), _dependency2.Tween.stopAllByTarget(this.node), this.currBigWinFont && (this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose(), this.currBigWinFont.node.active = !1), [_dependency9.EBTM.BIG_WIN_BG, _dependency9.EBTM.BIG_WIN, _dependency9.EBTM.MEGA_CHARACTER, _dependency9.EBTM.ULTRA_CHARACTER, _dependency9.EBTM.LEGENDARY_CHARACTER].forEach(function (t) {
      dispatch(_dependency1.GameEvent.STOP_BTM, {
        data: t
      });
    }), App.globalAudio.resumeMusic(), this.coinSprays.forEach(function (t) {
      t.active = !1, t.children.forEach(function (t) {
        t.active = !1;
      });
    }), dispatch(_dependency1.GameEvent.SHOW_BIG_WIN_END), this.close();
  }, o.runScore = function (t, e, i) {
    var n = this;
    void 0 === i && (i = !1);
    var a = this.data.getData().definition.digital,
      r = this.data.getData().parser.currentGameState,
      o = (r.currentTimes, r.totalStake),
      s = this.data.getData().parser.winOdds,
      l = this.data.setBigWinReach(e).level,
      c = o * s[t].reachRate;
    return new Promise(function (r) {
      var u,
        h = 0;
      u = i ? 0 : c, n.isNotifyUpdateTotalWin && dispatch(_dependency6.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: u
      }), h = t == l ? e : o * s[t + 1].reachRate, n.tweenNumTween && n.tweenNumTween.stop();
      var p = n.runScoreTimeMap.get(l - 1)[t - 1];
      n.isTotalBigWin && n.isNotifyUpdateTotalWin && dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: h,
          tweenTime: p
        }
      });
      var d = {
        label: n.totalWin,
        start: u,
        end: h,
        tweenTime: p,
        digital: a,
        useThousandsSeparator: !0,
        callback: function () {
          t >= l ? n.directShowResult() : (n.currLevel++, n.nextLevel(e)), r();
        }
      };
      n.tweenNumTween = n.tweenNumAndUpdateAnim(d);
    });
  }, o.nextLevel = function (t) {
    this.runScore(this.currLevel, t, this.currLevel == this.startLevel);
  }, o.tweenNumAndUpdateAnim = function (t) {
    var e = this,
      i = t.label,
      n = t.start,
      a = t.end,
      r = t.tweenTime,
      o = t.digital,
      s = t.useThousandsSeparator,
      l = t.callback,
      c = t.tag,
      u = {
        value: n
      },
      h = this.data.getData().parser.currentGameState.totalStake,
      p = this.data.getData().parser.winOdds;
    return _dependency2.tween(u).bindNodeState(false).to(r, {
      value: a
    }, {
      onUpdate: function () {
        var t = p[e.currLevel + 1];
        t && u.value / h >= t.reachRate && e.setSpineAndPlay(t.level - 1), i.string = _dependency7.CmmSlotUtils.formatNumber(u.value, !1, s, o);
      },
      onComplete: function () {
        i.string = _dependency7.CmmSlotUtils.formatNumber(a, !1, s, o), l && l();
      }
    }).tag(c).start();
  }, o.setSpineAndPlay = function (t) {
    var e = this;
    this.arrFont.forEach(function (t) {
      t.node.active = !1;
    }), this.arrNode.forEach(function (t) {
      t.active = !1;
    }), this.coinSprays.forEach(function (t) {
      t.active = !1;
    }), this.character.node.active = !1, this.currBigWinFont = this.arrFont[t], this.currBigWinBg = this.arrNode[t], this.currBigWinCoinSpray = this.coinSprays[t], this.currBigWinFont.node.active = !0, this.currBigWinBg.active = !0, this.currBigWinCoinSpray.active = !0, this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose();
    var i = this.arrAnimeName[t];
    if (t >= 2) {
      this.character.node.active = !0;
      var n = this.arrCharacterAnimeName[t];
      t >= 3 ? this.character.node.setPosition(-50, -123, 0) : this.character.node.setPosition(0, 0, 0), this.character.setAnimation(0, n, !1);
      var a = this.arrCharacterSounds[t];
      dispatch(_dependency1.GameEvent.PLAY_BTM, {
        data: {
          url: a
        }
      });
    }
    this.currBigWinFont.setAnimation(0, i, !1), this.currBigWinFont.setCompleteListener(function () {
      e.currBigWinFont.setCompleteListener(null);
      var i = e.arrLoopAnimeName[t];
      "" !== i && e.currBigWinFont.setAnimation(0, i, !0);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency4.default)).COIN_SPRAY_DELAY = 2.5, I = _dependency.applyDecoratedDescriptor((O = H).prototype, "alert", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(O.prototype, "totalWin", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(O.prototype, "character", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(O.prototype, "arrNode", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), M = _dependency.applyDecoratedDescriptor(O.prototype, "arrFont", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), k = _dependency.applyDecoratedDescriptor(O.prototype, "coinSprays", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), D = O)) || D));
_dependency2.cclegacy._RF.pop();
