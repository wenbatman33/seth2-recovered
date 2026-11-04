// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/BigWinView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UIView";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./framework-CmmSlotUtils";
import * as __dependency_6 from "./g1007-GameConfigModel";
import * as __dependency_7 from "./g1007-GameData";
import * as __dependency_8 from "./g1007-GameEvent";
import * as __dependency_9 from "./framework-DefinitionModel";
var __export_0;
export { __export_0 as BigWinView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BigWinView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, a, s, r, o, l, u, c, h, p, d, m, f, v, S, g, W, N, w, T, _, L, E, I, b, A;
var D, y, B, O, R, x, G, U, k, P, M, C, z, F, H, K, V, Y, j;
__dependency_1.cclegacy._RF.push({}, "929cbQGIGxBaIgFjzfxpWPe", "BigWinView", void 0);
var Q,
  q = __dependency_1._decorator.ccclass,
  J = __dependency_1._decorator.property;
!function (e) {
  e[e.NONE = 0] = "NONE", e[e.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", e[e.RUN_SCORE = 2] = "RUN_SCORE", e[e.RUN_SCORE_END = 3] = "RUN_SCORE_END", e[e.SHOW_BIGWIN_COMPLETED = 4] = "SHOW_BIGWIN_COMPLETED";
}(Q || (Q = {}));
__publish("BigWinView", (D = q("Hades_BigWinView"), y = __dependency_3.inject("alert", __dependency_1.Node), B = __dependency_3.inject("alert/bbr", __dependency_1.Node), O = __dependency_3.inject("totalWin", __dependency_1.Label), R = __dependency_3.inject("totalBigWin", __dependency_1.Label), x = __dependency_3.inject("alert/spines/win", __dependency_1.sp.Skeleton), G = __dependency_3.inject("alert/spines/coin", __dependency_1.sp.Skeleton), U = __dependency_3.inject("multiEffect", __dependency_1.sp.Skeleton), k = J(__dependency_1.sp.SkeletonData), D((C = __dependency_0.applyDecoratedDescriptor((M = function (e) {
  function t() {
    for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
    return t = Reflect.construct(e, [this].concat(s).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(t, "alert", C, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "bbr", z, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "totalWin", F, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "totalBigWin", H, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "winSpine", K, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "coinSpine", V, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "multiEffect", Y, __dependency_0.assertThisInitialized(t)), __dependency_0.initializerDefineProperty(t, "winSkeletons", j, __dependency_0.assertThisInitialized(t)), t.tweenNumTween = null, t.currLevel = 0, t.maxLevel = 0, t.startLevel = 0, t.showWinStatus = Q.NONE, t.isTotalBigWin = !1, t.runScoreTimeMap = new Map(), t.skipDelayTime = .8, t.isSkip = !1, t.timesIndexForAnim = [], t;
  }
  __dependency_0.inheritsLoose(t, e);
  var u = t.prototype;
  return u.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, u.start = function () {
    this.init();
  }, u.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, t.getPrefabUrl = function () {
    return "prefabs/BigWinView";
  }, u.init = function () {
    var e = this.data.getData().definition.StoneMultiplierList;
    this.timesIndexForAnim = [3, 6, 9, 12, e.length - 1], this.setRunScoreTimeMap();
  }, u.setRunScoreTimeMap = function () {
    for (var e = 0; e <= 4; e++) {
      for (var t = [7.8], i = 0; i < e; i++) t.push(8);
      this.runScoreTimeMap.set(e, t);
    }
  }, u.playMultiAnim = function () {
    var e = this,
      t = this.data.getData().parser.currentGameState,
      i = t.currentTimes,
      n = t.bonusTimes,
      a = this.data.getData().definition.StoneMultiplierList,
      r = [{
        aniName: "multi_score_1",
        maxIndex: this.timesIndexForAnim[0]
      }, {
        aniName: "multi_score_2",
        maxIndex: this.timesIndexForAnim[1]
      }, {
        aniName: "multi_score_3",
        maxIndex: this.timesIndexForAnim[2]
      }, {
        aniName: "multi_score_4",
        maxIndex: this.timesIndexForAnim[3]
      }, {
        aniName: "multi_score_5",
        maxIndex: this.timesIndexForAnim[4]
      }],
      o = r[r.length - 1],
      l = i > n ? i : n,
      u = a.indexOf(l),
      c = "multi_score_1";
    if (u >= o.maxIndex) c = o.aniName;else for (var h, m = __dependency_0.createForOfIteratorHelperLoose(r); !(h = m()).done;) {
      var f = h.value;
      if (u <= f.maxIndex) {
        c = f.aniName;
        break;
      }
    }
    this.multiEffect.node.active = !0, this.multiEffect.clearTracks(), this.multiEffect.setToSetupPose(), this.multiEffect.setAnimation(0, c, !1), __dependency_1.Tween.stopAllByTarget(this.node), __dependency_1.tween(this.node).bindNodeState(false).delay(1).call(function () {
      e.totalWin.node.active = !1, dispatch(__dependency_8.GameEvent.SHAKE_GAME_LAYER);
    }).start();
  }, u.showWin = function () {
    var e = this;
    this.bbr.active = !1;
    var t = this.data.getData().definition.digital,
      i = this.data.getData().parser.currentGameState,
      n = i.currentTimes,
      a = i.bonusTimes,
      s = this.data.getWinningsSum(),
      l = n > a ? n : a;
    this.showWinStatus = Q.SHOW_BIGWIN;
    var u = __dependency_9.default.getData(),
      c = u.smallPrizeDelay,
      h = u.bigPrizeDelay,
      p = this.data.getMultipleWinnings();
    this.data.setBigWinReach(p).level;
    l > 1 && (this.totalWin.node.active = !0, this.totalWin.string = __dependency_5.CmmSlotUtils.formatNumber(s, !1, !1, t), this.totalWin.node.scale.set(0, 0, 0)), __dependency_1.tween(this.totalWin.node).bindNodeState(false).to(.5, {
      scale: __dependency_1.v3(1, 1, 1)
    }, {
      easing: __dependency_1.easing.quintIn
    }).call(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!(l > 1)) {
              t.next = 8;
              break;
            }
            return e.playMultiAnim(), dispatch(__dependency_8.GameEvent.SHOW_MULTI_BOARD_TO_WIN_EFFECT), t.next = 5, e.sleep(1);
          case 5:
            e.showBigWin(), t.next = 9;
            break;
          case 8:
            e.showBigWin();
          case 9:
          case "end":
            return t.stop();
        }
      }, t);
    }))).start();
  }, u.showBigWin = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      var t,
        i,
        n,
        a,
        s,
        l = this;
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            (t = this.data.getData().parser.currentGameState).currentTimes, t.bonusTimes, i = this.data.getWinningsSum(), n = this.data.getMultipleWinnings(), a = this.data.setBigWinReach(n), this.maxLevel = a.level, this.currLevel = 0, this.data.setBigWinReach(i), this.startLevel = 0, s = [__dependency_6.EBGM.BIGWIN, __dependency_6.EBGM.SUPER_WIN, __dependency_6.EBGM.MEGA_WIN, __dependency_6.EBGM.ULTRA_WIN, __dependency_6.EBGM.LEGEND_WIN], this.showWinStatus = Q.RUN_SCORE, this.totalWin.node.active = !1, this.alert.active = !0, this.bbr.active = !0, App.globalAudio.pauseMusic(), dispatch(__dependency_8.GameEvent.PLAY_BTM, {
              data: {
                url: s[a.level],
                currentTime: 0 == this.startLevel ? this.startLevel : 8 * this.startLevel - .2
              }
            }), this.scheduleOnce(function () {
              l.alert.on(__dependency_1.NodeEventType.TOUCH_END, function () {
                l.isSkip = !0, l.currLevel++, l.currLevel > l.maxLevel ? l.directShowResult() : (l.nextLevel(n), l.setSpineAndPlay(l.currLevel));
              }, l), l.enabledKeyUp = !0;
            }, this.skipDelayTime), this.setSpineAndPlay(this.startLevel), this.scheduleOnce(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
              return __dependency_0.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    l.totalBigWin.node.active = !0, l.bbr.active = !0, l.runScore(l.startLevel, n, l.currLevel == l.startLevel);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            })), .7);
          case 19:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), u.nextLevel = function (e) {
    this.runScore(this.currLevel, e, this.currLevel == this.startLevel);
  }, u.showTotalBigWin = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      var t,
        i,
        n,
        a,
        s,
        l,
        u,
        c = this;
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = this.data.getData().parser.currentGameState.totalWinnings, i = this.data.setBigWinReach(t), this.maxLevel = i.level, n = [__dependency_6.EBGM.BIGWIN, __dependency_6.EBGM.SUPER_WIN, __dependency_6.EBGM.MEGA_WIN, __dependency_6.EBGM.ULTRA_WIN, __dependency_6.EBGM.LEGEND_WIN], a = __dependency_9.default.getData(), s = a.smallPrizeDelay, l = a.bigPrizeDelay, u = this.maxLevel <= 3 ? s : l, e.next = 8, this.sleep(u);
          case 8:
            this.isTotalBigWin = !0, this.showWinStatus = Q.RUN_SCORE, this.totalWin.node.active = !1, this.alert.active = !0, App.globalAudio.pauseMusic(), dispatch(__dependency_8.GameEvent.PLAY_BTM, {
              data: {
                url: n[i.level]
              }
            }), dispatch(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: 0
              }
            }), this.scheduleOnce(function () {
              c.alert.on(__dependency_1.NodeEventType.TOUCH_END, function () {
                c.isSkip = !0, c.currLevel++, c.currLevel > c.maxLevel ? c.directShowResult() : (c.nextLevel(t), c.setSpineAndPlay(c.currLevel));
              }, c), c.enabledKeyUp = !0;
            }, this.skipDelayTime), this.setSpineAndPlay(0), this.startLevel = 0, this.currLevel = 0, this.scheduleOnce(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
              return __dependency_0.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    c.totalBigWin.node.active = !0, c.runScore(c.startLevel, t);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }, e);
            })), .7);
          case 20:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), u.runScore = function (e, t, i) {
    var n = this;
    void 0 === i && (i = !1);
    var a = this.data.getData().definition.digital,
      s = this.data.getData().parser.currentGameState,
      r = s.currentTimes,
      o = s.bonusTimes,
      l = s.totalStake,
      u = this.data.getData().parser.winOdds,
      c = (this.data.getWinningsSum(), this.data.setBigWinReach(t).level),
      h = r > o ? r : o,
      p = l * u[e].reachRate;
    return new Promise(function (s) {
      var r = 0,
        o = 0;
      r = 0 == e || h > 1 && i ? 0 : p, dispatch(__dependency_4.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: r
      }), o = e == c ? t : l * u[e + 1].reachRate, n.tweenNumTween && n.tweenNumTween.stop();
      var d = n.runScoreTimeMap.get(c)[e];
      n.isTotalBigWin && dispatch(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: o,
          tweenTime: d
        }
      });
      var m = {
        label: n.totalBigWin,
        start: r,
        end: o,
        tweenTime: d,
        digital: a,
        useThousandsSeparator: !0,
        callback: function () {
          e >= c ? n.directShowResult() : (n.currLevel++, n.nextLevel(t)), s();
        }
      };
      n.tweenNumTween = n.tweenNumAndUpdateAnim(m);
    });
  }, u.setSpineAndPlay = function (e) {
    var t = this;
    e > 0 && (this.coinSpine.node.active = !0, this.coinSpine.clearTracks(), this.coinSpine.setToSetupPose(), this.coinSpine.setAnimation(0, "in", !1), this.coinSpine.setCompleteListener(function () {
      t.coinSpine.setAnimation(0, "loop", !0), t.coinSpine.setCompleteListener(null);
    })), this.winSpine.skeletonData = this.winSkeletons[e], this.winSpine.node.active = !0, this.winSpine.clearTracks(), this.winSpine.setToSetupPose(), this.winSpine.setAnimation(0, "in", !1), this.winSpine.setCompleteListener(function () {
      t.winSpine.setAnimation(0, "loop", !0), t.winSpine.setCompleteListener(null);
    });
  }, u.tweenNumAndUpdateAnim = function (e) {
    var t = this,
      i = e.label,
      n = e.start,
      a = e.end,
      s = e.tweenTime,
      r = e.digital,
      o = e.useThousandsSeparator,
      l = e.callback,
      u = e.tag,
      c = {
        value: n
      },
      h = this.data.getData().parser.currentGameState.totalStake,
      p = this.data.getData().parser.winOdds;
    return __dependency_1.tween(c).bindNodeState(false).to(s, {
      value: a
    }, {
      onUpdate: function () {
        var e = p[t.currLevel + 1];
        e && c.value / h >= e.reachRate && t.setSpineAndPlay(e.level), i.string = __dependency_5.CmmSlotUtils.formatNumber(c.value, !1, o, r);
      },
      onComplete: function () {
        i.string = __dependency_5.CmmSlotUtils.formatNumber(a, !1, o, r), l && l();
      }
    }).tag(u).start();
  }, u.directShowResult = function () {
    var e = this,
      t = __dependency_6.default.getData().bigwinAutoCloseTime,
      i = void 0 === t ? 2 : t,
      n = this.data.getData().definition.digital,
      a = this.data.getData().parser.currentGameState.totalWinnings,
      s = this.data.getMultipleWinnings(),
      r = this.isTotalBigWin ? a : s,
      o = this.data.setBigWinReach(r),
      l = [__dependency_6.EBGM.BIGWIN, __dependency_6.EBGM.SUPER_WIN, __dependency_6.EBGM.MEGA_WIN, __dependency_6.EBGM.ULTRA_WIN, __dependency_6.EBGM.LEGEND_WIN],
      u = [__dependency_6.EBGM.BIGWIN_END, __dependency_6.EBGM.SUPER_WIN_END, __dependency_6.EBGM.MEGA_WIN_END, __dependency_6.EBGM.ULTRA_WIN_END, __dependency_6.EBGM.LEGEND_WIN_END];
    this.enabledKeyUp = !1, this.showWinStatus = Q.RUN_SCORE_END, this.totalBigWin.string = __dependency_5.CmmSlotUtils.formatNumber(r, !1, !0, n), __dependency_1.Tween.stopAllByTarget(this.node), this.alert.targetOff(this), this.isSkip && (dispatch(__dependency_8.GameEvent.STOP_BTM, {
      data: l[o.level]
    }), dispatch(__dependency_8.GameEvent.PLAY_BTM, {
      data: {
        url: u[o.level]
      }
    })), this.currLevel <= o.level && this.setSpineAndPlay(o.level), this.tweenNumTween && this.tweenNumTween.stop(), this.isTotalBigWin && dispatch(__dependency_4.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: a
    }), this.scheduleOnce(function () {
      e.alert.once(__dependency_1.NodeEventType.TOUCH_END, e.removeAllTween, e), e.enabledKeyUp = !0;
    }, this.skipDelayTime), null != i && this.scheduleOnce(function () {
      e.removeAllTween();
    }, i);
  }, u.removeAllTween = function () {
    this.showWinStatus = Q.SHOW_BIGWIN_COMPLETED, this.isTotalBigWin = !1, this.alert.targetOff(this), __dependency_1.Tween.stopAllByTarget(this.node), this.tweenNumTween && this.tweenNumTween.stop(), dispatch(__dependency_8.GameEvent.SHOW_BIG_WIN_END), this.enabledKeyUp = !1, this.alert.active = !1, this.totalWin.node.active = !1, this.totalBigWin.node.active = !1, App.globalAudio.resumeMusic(), this.close();
  }, u.onKeyUp = function (t) {
    if (e.prototype.onKeyUp.call(this, t), t.keyCode === __dependency_1.KeyCode.SPACE) switch (this.showWinStatus) {
      case Q.RUN_SCORE:
        if (this.isSkip = !0, this.currLevel++, this.currLevel > this.maxLevel) return void this.directShowResult();
        break;
      case Q.RUN_SCORE_END:
        this.removeAllTween();
    }
  }, u.sleep = function (e) {
    var t = this;
    return new Promise(function (i) {
      t.scheduleOnce(function () {
        i();
      }, e);
    });
  }, u.addEvents = function () {
    e.prototype.addEvents.call(this);
  }, __dependency_0.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_7.default);
    }
  }]), t;
}(__dependency_2.default)).prototype, "alert", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = __dependency_0.applyDecoratedDescriptor(M.prototype, "bbr", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = __dependency_0.applyDecoratedDescriptor(M.prototype, "totalWin", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __dependency_0.applyDecoratedDescriptor(M.prototype, "totalBigWin", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __dependency_0.applyDecoratedDescriptor(M.prototype, "winSpine", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = __dependency_0.applyDecoratedDescriptor(M.prototype, "coinSpine", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = __dependency_0.applyDecoratedDescriptor(M.prototype, "multiEffect", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __dependency_0.applyDecoratedDescriptor(M.prototype, "winSkeletons", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), P = M)) || P));
__dependency_1.cclegacy._RF.pop();
