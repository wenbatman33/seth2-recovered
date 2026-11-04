// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/JackpotGameView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_3 from "../../shared/scripts/main-UIView";
import * as __dependency_4 from "../../shared/scripts/main-Decorators";
import * as __dependency_5 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_6 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_7 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_8 from "../../shared/scripts/framework-SocketModel";
import * as __dependency_9 from "../../shared/scripts/framework-CmmSlotUtils";
import * as __dependency_10 from "../../shared/scripts/framework-LoadUtils";
import * as __dependency_11 from "../../shared/scripts/framework-MathUtil";
import * as __dependency_12 from "./g1007-GameConfigModel";
import * as __dependency_13 from "./g1007-GameData";
import * as __dependency_14 from "./g1007-GameEvent";
import * as __dependency_15 from "./g1007-GameSender";
import * as __dependency_16 from "./g1007-types";
var __export_0;
export { __export_0 as JackpotGameView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "JackpotGameView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, o, s, r, c, l, u, p, h, d, f, m, S, g, k, T, v, _, y, P, w, O, W, C, E, N, b, L, M, I, A, R, D, B;
var J, x, G, U, H, V, z, K, Y, j, F, Q, X, q, Z, $, tt, et, nt, it;
__dependency_1.cclegacy._RF.push({}, "a47251nhIJJspDLou4b6AU1", "JackpotGameView", void 0), function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_JP_WIN = 1] = "SHOW_JP_WIN", t[t.SHOW_JP_WIN_END = 2] = "SHOW_JP_WIN_END", t[t.JP_COMPLETED = 3] = "JP_COMPLETED";
}(it || (it = {}));
var at = __dependency_1._decorator.ccclass,
  ot = __dependency_1._decorator.property;
__publish("JackpotGameView", (J = at("Hades_JackpotGameView"), x = __dependency_4.inject("aniScroll", __dependency_1.sp.Skeleton), G = __dependency_4.inject("smoke", __dependency_1.sp.Skeleton), U = __dependency_4.inject("ndResult", __dependency_1.Node), H = __dependency_4.inject("ndResult/aniWin", __dependency_1.sp.Skeleton), V = __dependency_4.inject("ndResult/txtTotalWin", __dependency_1.Label), z = __dependency_4.inject("ndResult/coinSprays", __dependency_1.Node), K = __dependency_4.inject("ndResult/bbr", __dependency_1.Node), Y = ot({
  type: __dependency_1.Node,
  tooltip: "Items",
  override: !0
}), J((Q = __dependency_0.applyDecoratedDescriptor((F = function (t) {
  function e() {
    for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "aniScroll", Q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "smoke", X, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "ndResult", q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "aniWin", Z, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "txtTotalWin", $, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "coinSprays", tt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "resultBBR", et, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "items", nt, __dependency_0.assertThisInitialized(e)), e._totalWin = 0, e.checkOpenMap = new Map(), e.boxShowTimeMap = new Map(), e.isLock = !0, e.showWinStatus = it.NONE, e.runJPWinningTweenTag = __dependency_2.CmmUtils.hashCode("runJPWinningTween"), e.closeJPViewTweenTag = __dependency_2.CmmUtils.hashCode("closeJPViewTween"), e.replayOpenSchedule = null, e;
  }
  __dependency_0.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/jackpotGame/JackpotGameView";
  };
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.start = function () {
    this.totalWin = 0, this.items.forEach(function (t) {
      t.active = !1;
    }), this.ndResult.active = !1, this.enabledKeyUp = !0, __dependency_7.default.isReplay && this.data.setReplayInitBonusData(), this.setBoxShowTimeMap(), this.setCheckOpenMap(), this.initItemStatus(), this.showScrollOpenAndLoop(), this.showSmokeOpen(), dispatch(__dependency_14.GameEvent.PLAY_BGM, {
      data: __dependency_12.EBGM.BGM_JP
    }), dispatch(__dependency_14.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_12.EBTM.JP_TRANS_IN
      }
    });
  }, l.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, l.close = function () {
    t.prototype.close.call(this);
  }, l.initItemStatus = function () {
    var t = this,
      e = this.data.getData().bonusState,
      n = 0;
    this.checkOpenMap.forEach(function (i, a) {
      var o = t.items[a],
        s = o.getChildByName("ingot").getComponent(__dependency_1.sp.Skeleton),
        r = o.getChildByName("icon").getComponent(__dependency_1.sp.Skeleton);
      o.name = a.toString(), o.active = !0, s.clearTracks(), s.setToSetupPose(), s.node.active = !1, r.clearTracks(), r.setToSetupPose(), r.node.active = !1, __dependency_1.tween(t).bindNodeState(false).delay(t.boxShowTimeMap.get(a)).call(function () {
        if (null === t.checkOpenMap.get(a)) s.node.active = !0, s.setAnimation(0, "in", !1), __dependency_7.default.isReplay || __dependency_12.default.isRankReplayMode || o.on(__dependency_1.NodeEventType.TOUCH_END, t.onOpenItemPosition, t);else {
          var e = t.items[a];
          s.node.active = !1, t.openItem(i, e), e.off(__dependency_1.NodeEventType.TOUCH_END, t.onOpenItemPosition, t);
        }
        n++;
      }).delay(.001).call(function () {
        n == t.checkOpenMap.size && s.setCompleteListener(function () {
          e.totalWinnings > 0 && !__dependency_7.default.isReplay && t.showResult(e), t.isLock = e.totalWinnings > 0, t.showIngotLoop(), __dependency_7.default.isReplay && t.replayAutoOpenItem();
        });
      }).start();
    });
  }, l.showScrollOpenAndLoop = function () {
    var t = this;
    this.aniScroll.clearTracks(), this.aniScroll.setToSetupPose(), this.aniScroll.setAnimation(0, "open", !1), this.aniScroll.setCompleteListener(function () {
      t.aniScroll.setAnimation(0, "loop", !0), t.aniScroll.setCompleteListener(null);
    });
  }, l.showSmokeOpen = function () {
    var t = this;
    this.smoke.node.active = !0, this.smoke.clearTracks(), this.smoke.setToSetupPose(), this.smoke.setAnimation(0, "open", !1), this.smoke.setCompleteListener(function () {
      t.smoke.node.active = !1;
    });
  }, l.showIngotLoop = function () {
    var t = this;
    this.checkOpenMap.forEach(function (e, n) {
      var i = t.items[n],
        a = i.getChildByName("ingot").getComponent(__dependency_1.sp.Skeleton);
      i.getChildByName("icon").getComponent(__dependency_1.sp.Skeleton).node.active || (a.setAnimation(0, "loop", !0), a.setCompleteListener(null));
    });
  }, l.setBoxShowTimeMap = function () {
    for (var t, e = this.smoke.skeletonData.getRuntimeData().findAnimation("open"), n = __dependency_0.createForOfIteratorHelperLoose(e.timelines); !(t = n()).done;) {
      var i = t.value;
      if (i instanceof __dependency_1.sp.spine.EventTimeline) for (var a = 0; a < i.frames.length; a++) {
        var s = i.events[a],
          r = Number(s.data.name) - 1,
          c = i.frames[a];
        this.boxShowTimeMap.set(r, c);
      }
    }
  }, l.setCheckOpenMap = function () {
    var t = this,
      e = this.data.getData().bonusState;
    this.checkOpenMap.clear(), this.items.forEach(function (e, n) {
      t.checkOpenMap.set(n, null);
    }), e && e.picked.forEach(function (e) {
      t.checkOpenMap.set(e.pickedPos, e);
    });
  }, l.onOpenItemPosition = function (t) {
    if (!this.isLock) {
      var e = __dependency_5.default.ratioIndex,
        n = __dependency_5.default.ratioValue,
        i = __dependency_5.default.stakeIndex,
        a = __dependency_5.default.stakeValue,
        o = t.currentTarget,
        s = {
          token: __dependency_8.default.currentToken,
          spinId: this.data.getData().spinId,
          bonusType: __dependency_16.EBonusType.JP_GAME,
          action: __dependency_16.EBonusStateAction.COLLECT,
          actionData: {
            pickedPos: Number(o.name)
          },
          ratioIndex: e,
          ratioValue: n,
          stakeIndex: i,
          stakeValue: a
        };
      this.isLock = !0, App.senderManager.get(__dependency_15.GameSender).sendJackpotGameSelectPosition(s), o.off(__dependency_1.NodeEventType.TOUCH_END, this.onOpenItemPosition, this);
    }
  }, l.updatePositions = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(e) {
      var n = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", new Promise(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(i) {
              var a, o, s, r, l;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a = 0;
                  case 1:
                    if (!(a < e.length)) {
                      t.next = 12;
                      break;
                    }
                    if (o = e[a], s = o.pickedPos, r = n.checkOpenMap.get(s), l = n.items[s], null !== r) {
                      t.next = 9;
                      break;
                    }
                    return t.next = 9, n.openItem(o, l);
                  case 9:
                    a++, t.next = 1;
                    break;
                  case 12:
                    i(!0);
                  case 13:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))));
          case 1:
          case "end":
            return t.stop();
        }
      }, t);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), l.openItem = function (t, e) {
    var n = this;
    return new Promise(function (i) {
      var a = t.pickedPos,
        o = e.getChildByName("ingot").getComponent(__dependency_1.sp.Skeleton);
      n.checkOpenMap.set(a, t), o.node.active = !0, o.clearTracks(), o.setToSetupPose(), o.setAnimation(0, "open", !1), o.setCompleteListener(function () {
        o.node.active = !1;
      }), o.setEventListener(function () {
        var n = e.getChildByName("icon").getComponent(__dependency_1.sp.Skeleton),
          a = t.category.split("jp-")[1];
        n.node.active = !0, n.node.setScale(0, 0, 0), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, a, !0), __dependency_1.tween(n.node).bindNodeState(false).to(.3, {
          scale: __dependency_1.v3(1, 1, 1)
        }).call(function () {
          i(!0);
        }).start();
      }), dispatch(__dependency_14.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_12.EBTM.JP_BOX_OPEN
        }
      });
    });
  }, l.onPickResp = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = this.data.getData().bonusState, this.isLock = !0, t.next = 4, this.updatePositions(e.picked);
          case 4:
            e.totalWinnings > 0 ? this.showResult(e) : this.isLock = !1;
          case 5:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showWinLight = function (t) {
    var e = this,
      n = !1;
    this.items.forEach(function (i, a) {
      var o,
        s = null == (o = e.checkOpenMap.get(a)) ? void 0 : o.category;
      s && t === s && (__dependency_1.tween(i).bindNodeState(false).to(.2, {
        scale: new __dependency_1.Vec3(1.2, 1.2, 1.2)
      }).start(), n || (n = !0, dispatch(__dependency_14.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_12.EBTM.JP_SELECT_COMPLETED
        }
      })));
    });
  }, l.showResult = function (t) {
    var e = this,
      n = __dependency_12.default.getData().filePaths.jpSummarySkeletonData,
      i = t.picked,
      a = i[i.length - 1].category,
      o = a.replace("-", "_"),
      s = __dependency_10.LoadUtils.getDirSkeleton(this.data.module, n, o);
    this.aniWin.node.active = !0, this.showWinLight(a), this.scheduleOnce(function () {
      e.ndResult.active = !0, e.txtTotalWin.node.active = !1, e.aniWin.skeletonData = s, e.aniWin.clearTracks(), e.aniWin.setToSetupPose(), e.aniWin.setAnimation(0, "in", !1), e.aniWin.setCompleteListener(function () {
        e.aniWin.setAnimation(0, "loop", !0), e.aniWin.setCompleteListener(null);
      }), dispatch(__dependency_14.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_12.EBTM.JP_RESULT
        }
      }), dispatch(__dependency_14.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_12.EBTM.JP_RESULT_CHEST_MONEY
        }
      }), __dependency_1.tween(e).bindNodeState(false).delay(2).call(function () {
        e.showWinStatus = it.SHOW_JP_WIN, e.txtTotalWin.node.active = !0, e.showCoinSpray(), e.resultBBR.once(__dependency_1.NodeEventType.TOUCH_END, e.directShowResult, e), dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: 0
          }
        }), dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: t.totalWinnings,
            tweenTime: 6
          }
        });
      }).to(6, {
        totalWin: t.totalWinnings
      }).call(function () {
        e.showWinStatus = it.SHOW_JP_WIN_END;
      }).tag(e.runJPWinningTweenTag).start(), __dependency_1.tween(e).bindNodeState(false).delay(9.6).call(function () {
        e.gameComplete();
      }).tag(e.closeJPViewTweenTag).start();
    }, 2);
  }, l.showCoinSpray = function () {
    var t = this,
      e = this.coinSprays.getComponentsInChildren(__dependency_1.sp.Skeleton);
    this.coinSprays.active = !0;
    for (var n = function () {
        var n = e[i];
        0 == i ? (n.node.active = !0, n.setAnimation(0, "coin_01", !1)) : 1 == i ? t.scheduleOnce(function () {
          n.node.active = !0, n.setAnimation(0, "coin_02", !1);
        }, 1.3) : t.scheduleOnce(function () {
          var t = __dependency_11.default.getRandomNumber(3, 6);
          n.node.active = !0, n.setAnimation(0, "radom_0" + t, !1), n.setCompleteListener(function () {
            var t = __dependency_11.default.getRandomNumber(3, 6);
            n.setAnimation(0, "radom_0" + t, !1);
          });
        }, 2.8 + .5 * (i - 2));
      }, i = 0; i < e.length; i++) n();
  }, l.gameComplete = function () {
    __dependency_1.Tween.stopAllByTag(this.closeJPViewTweenTag), this.showWinStatus = it.JP_COMPLETED, this.aniWin.node.active = !1, this.resultBBR.targetOff(this), dispatch(__dependency_14.GameEvent.PLAY_BGM, {
      data: __dependency_12.EBGM.MAIN_GAME
    }), dispatch(__dependency_14.GameEvent.JACKPOT_GAME_PICK_END), dispatch(__dependency_14.GameEvent.STOP_BTM, {
      data: __dependency_12.EBTM.JP_RESULT_CHEST_MONEY
    }), this.close();
  }, l.directShowResult = function () {
    var t = this,
      e = this.data.getData().bonusState;
    __dependency_1.Tween.stopAllByTag(this.runJPWinningTweenTag), this.showWinStatus = it.SHOW_JP_WIN_END, this.totalWin = e.totalWinnings, this.resultBBR.targetOff(this), dispatch(__dependency_6.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: e.totalWinnings
    }), __dependency_1.tween(this).bindNodeState(false).delay(1).call(function () {
      t.resultBBR.once(__dependency_1.NodeEventType.TOUCH_END, t.gameComplete, t);
    }).start();
  }, l.replayAutoOpenItem = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = this.data.replayData.betData.theResult.length, this.replayOpenSchedule = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
              var i;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!(n.data.getData().parser.currentSpinIndex >= e - 1)) {
                      t.next = 4;
                      break;
                    }
                    return n.unschedule(n.replayOpenSchedule), t.abrupt("return");
                  case 4:
                    return n.data.setReplayNextBonusData(), i = n.data.getData().bonusState, n.isLock = !0, t.next = 9, n.updatePositions(i.picked);
                  case 9:
                    i.totalWinnings > 0 && (n.unschedule(n.replayOpenSchedule), n.showResult(i));
                  case 10:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), this.schedule(this.replayOpenSchedule, .618);
          case 3:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.onKeyUp = function (e) {
    if (t.prototype.onKeyUp.call(this, e), e.keyCode === __dependency_1.KeyCode.SPACE) switch (this.showWinStatus) {
      case it.SHOW_JP_WIN:
        this.directShowResult();
        break;
      case it.SHOW_JP_WIN_END:
        this.gameComplete();
    }
  }, l.addEvents = function () {
    this.on(__dependency_14.GameEvent.JACKPOT_GAME_PICK_RESPONSE, this.onPickResp);
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_13.default);
    }
  }, {
    key: "totalWin",
    get: function () {
      return this._totalWin;
    },
    set: function (t) {
      this._totalWin = t, this.txtTotalWin.string = __dependency_9.CmmSlotUtils.formatNumber(this._totalWin, !0);
    }
  }]), e;
}(__dependency_3.default)).prototype, "aniScroll", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __dependency_0.applyDecoratedDescriptor(F.prototype, "smoke", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __dependency_0.applyDecoratedDescriptor(F.prototype, "ndResult", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __dependency_0.applyDecoratedDescriptor(F.prototype, "aniWin", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __dependency_0.applyDecoratedDescriptor(F.prototype, "txtTotalWin", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = __dependency_0.applyDecoratedDescriptor(F.prototype, "coinSprays", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = __dependency_0.applyDecoratedDescriptor(F.prototype, "resultBBR", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = __dependency_0.applyDecoratedDescriptor(F.prototype, "items", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), j = F)) || j));
__dependency_1.cclegacy._RF.pop();
