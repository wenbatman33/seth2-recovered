// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/FreeGameAlertView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-AutoPlayModel";
import * as __dependency_6 from "./framework-ReplayModel";
import * as __dependency_7 from "./framework-CmmSlotUtils";
import * as __dependency_8 from "./framework-LoadUtils";
import * as __dependency_9 from "./g1007-GameConfigModel";
import * as __dependency_10 from "./g1007-GameData";
import * as __dependency_11 from "./g1007-GameEvent";
import * as __dependency_12 from "./g1007-types";
var __export_0;
export { __export_0 as FreeGameAlertView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FreeGameAlertView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, r, o, s, l, c, u, h, f, p, d, m, _, T, A, E, S, g, G, y, C, F, b, R, N, w, M, O, W, I;
var v, k, D, L, U, P, B, H, z, K, Y, x, V, j, q, J, Q, X, Z, $, tt, et, it, nt, at;
__dependency_1.cclegacy._RF.push({}, "ede6duM3A1CD7foMpVEsq9s", "FreeGameAlertView", void 0);
var rt,
  ot = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.WAIT_TO_START = 1] = "WAIT_TO_START", t[t.START_FREE_GAME = 2] = "START_FREE_GAME", t[t.RUN_SCORE = 3] = "RUN_SCORE", t[t.RUN_SCORE_END = 4] = "RUN_SCORE_END", t[t.FINISH_FREE_GAME = 5] = "FINISH_FREE_GAME";
}(rt || (rt = {}));
__publish("FreeGameAlertView", (v = ot("Hades_FreeGameAlertView"), k = __dependency_4.inject("alert", __dependency_1.Node), D = __dependency_4.inject("alert/intro", __dependency_1.Node), L = __dependency_4.inject("alert/intro/content", __dependency_1.Node), U = __dependency_4.inject("alert/summary", __dependency_1.Node), P = __dependency_4.inject("alert/intro/content/fgTimes", __dependency_1.Label), B = __dependency_4.inject("alert/intro/content/clickFontSprite", __dependency_1.Sprite), H = __dependency_4.inject("alert/intro/content/titleFontSprite", __dependency_1.Sprite), z = __dependency_4.inject("alert/summary/fgWin_01", __dependency_1.Label), K = __dependency_4.inject("alert/summary/fgWin", __dependency_1.Label), Y = __dependency_4.inject("alert/summary/totalWinSpine", __dependency_1.sp.Skeleton), x = __dependency_4.inject("alert/summary/btnCollect", __dependency_1.Node), v((q = __dependency_0.applyDecoratedDescriptor((j = function (t) {
  function e() {
    for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "alert", q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "intro", J, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "introContent", Q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "summary", X, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "fgTimes", Z, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "clickFontSprite", $, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "titleFontSprite", tt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "fgWinWhite", et, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "fgWin", it, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "totalWinSpine", nt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "btnCollect", at, __dependency_0.assertThisInitialized(e)), e.finishFGCallback = null, e.freeGameAlertStatus = rt.NONE, e.summaryTweenTag = __dependency_2.CmmUtils.hashCode("summaryTween"), e;
  }
  __dependency_0.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    var e = this;
    t.prototype.onLoad.call(this), this.introContent.getComponent(__dependency_1.UIOpacity).opacity = 0, this.on(__dependency_11.GameEvent.SHAKE_GAME_ANIM, function (t) {
      var i = t.data.index;
      e.playShakeAnim(i);
    });
  }, l.start = function () {
    this.init();
  }, l.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/FreeGameAlertView";
  }, l.init = function () {
    var t = this;
    this.enabledKeyUp = !0, this.setData(), __dependency_2.CmmUtils.addBtnClickEvent(this.btnCollect, function () {
      t.finishFGCallback && t.finishFGCallback();
    }), this.on(__dependency_11.GameEvent.FG_INTRO_01_END, function () {
      t.transition01End();
    }), this.on(__dependency_11.GameEvent.FG_INTRO_02_END, function () {
      t.transition02End();
    }), this.on(__dependency_11.GameEvent.FG_INTRO_03_END, function () {
      t.transition03End();
    }), this.on(__dependency_11.GameEvent.FG_INTRO_04_END, function () {
      t.transition04End();
    });
  }, l.playShakeAnim = function (t) {
    var e = this,
      i = this.node.getComponent(__dependency_1.Animation);
    this.node.getComponent(__dependency_1.Animation).play("shock_t0" + t), i.on(__dependency_1.Animation.EventType.LASTFRAME, function () {
      e.node.getComponent(__dependency_1.Animation).stop();
    }, this);
  }, l.setData = function () {
    var t = __dependency_9.default.getData().filePaths.localeSpriteFrame;
    this.titleFontSprite.spriteFrame = __dependency_8.LoadUtils.getDirSp(this.data.module, t, "t_font_01"), this.clickFontSprite.spriteFrame = __dependency_8.LoadUtils.getDirSp(this.data.module, t, "t_font_02");
  }, l.setClickFontTween = function () {
    var t = this.clickFontSprite.node.getComponent(__dependency_1.UIOpacity);
    t.opacity = 0, __dependency_1.tween(t).bindNodeState(false).repeatForever(__dependency_1.tween().bindNodeState(false).to(.5, {
      opacity: 255
    }).to(.5, {
      opacity: 70
    })).start();
  }, l.showIntroTransition = function () {
    var t = this;
    dispatch(__dependency_11.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_9.EBTM.BTM_FG_TRANSITION_SPIN
      }
    }), dispatch(__dependency_11.GameEvent.FG_INTRO_02_START), dispatch(__dependency_11.GameEvent.SHAKE_GAME_ANIM, {
      data: {
        index: 2
      }
    }), __dependency_1.tween(this.introContent).bindNodeState(false).delay(1).call(function () {
      __dependency_2.CmmUtils.fadeOutTween(t.introContent, .3, function () {
        t.introContent.getComponent(__dependency_1.UIOpacity).opacity = 0;
      });
    }).start(), this.scheduleOnce(function () {
      dispatch(__dependency_11.GameEvent.CHANGE_GAME_STYLE, {
        data: !1
      }), dispatch(__dependency_11.GameEvent.PLAY_BGM, {
        data: __dependency_9.EBGM.FREE_GAME
      });
    }, 1);
  }, l.transition02End = function () {
    var t = this;
    __dependency_2.CmmUtils.fadeOutTween(this.node, .2, function () {
      dispatch(__dependency_11.GameEvent.CLICK_START_FREE_GAME), t.close();
    });
  }, l.startFreeGame = function () {
    this.data.currentGameType = __dependency_12.EGameType.FREE_GAME, this.freeGameAlertStatus = rt.START_FREE_GAME, this.data.originTurbo = __dependency_9.default.isTurbo, __dependency_9.default.setIsTurbo(!1, !1), this.unschedule(this.startFreeGame), this.alert.targetOff(this), this.showIntroTransition();
  }, l.closeTotalWinSpine = function () {
    this.fgWin.string = "", this.fgWinWhite.string = "", this.fgWinWhite.node.active = !0, this.summary.active = !0, this.totalWinSpine.clearTracks(), this.totalWinSpine.setToSetupPose(), this.totalWinSpine.node.active = !1;
  }, l.finishFreeGame = function () {
    this.btnCollect.active = !1, dispatch(__dependency_11.GameEvent.SHAKE_GAME_ANIM, {
      data: {
        index: 4
      }
    }), this.closeTotalWinSpine(), this.data.currentGameType = __dependency_12.EGameType.MAIN_GAME, this.freeGameAlertStatus = rt.FINISH_FREE_GAME, __dependency_9.default.stopOnFg && (__dependency_5.default.active = !1), __dependency_9.default.setIsTurbo(this.data.originTurbo ? this.data.originTurbo : __dependency_9.default.isTurbo, !1), dispatch(__dependency_11.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    }), dispatch(__dependency_11.GameEvent.PLAY_BGM, {
      data: __dependency_9.EBGM.MAIN_GAME
    }), dispatch(__dependency_11.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_9.EBTM.BTM_FG_RESULT_TRANSITION_OPEN
      }
    }), dispatch(__dependency_11.GameEvent.FG_INTRO_04_START);
  }, l.transition04End = function () {
    this.unschedule(this.finishFreeGame), this.alert.targetOff(this), this.close();
  }, l.onKeyUp = function (e) {
    if (t.prototype.onKeyUp.call(this, e), e.keyCode === __dependency_1.KeyCode.SPACE) switch (this.freeGameAlertStatus) {
      case rt.WAIT_TO_START:
        this.startFreeGame();
        break;
      case rt.RUN_SCORE:
      case rt.RUN_SCORE_END:
        this.finishFGCallback();
    }
  }, l.showIntroAlert = function () {
    var t = this;
    this.introContent.getComponent(__dependency_1.UIOpacity).opacity = 0;
    var e = this.data.getData().parser.currentGameState.freeGameCount;
    dispatch(__dependency_11.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_9.EBTM.Btm_FG_TRANSITION
      }
    }), this.fgTimes.string = e.toString(), dispatch(__dependency_11.GameEvent.SHAKE_GAME_ANIM, {
      data: {
        index: 1
      }
    }), this.introContent.getComponent(__dependency_1.UIOpacity).opacity = 0, __dependency_1.tween(this.introContent).bindNodeState(false).delay(1).call(function () {
      __dependency_2.CmmUtils.fadeInTween(t.introContent, .3);
    }).start(), dispatch(__dependency_11.GameEvent.PLAY_BGM, {
      data: __dependency_9.EBGM.FG_ALERT
    });
  }, l.transition01End = function () {
    var t = __dependency_9.default.getData(),
      e = t.fgAlertAutoCloseTime,
      i = t.replayAutoCloseTime,
      n = __dependency_6.default.isReplay;
    this.setClickFontTween(), this.freeGameAlertStatus = rt.WAIT_TO_START, this.alert.once(__dependency_1.NodeEventType.TOUCH_END, this.startFreeGame, this), n && this.scheduleOnce(this.startFreeGame, i), e && this.scheduleOnce(this.startFreeGame, e);
  }, l.closeTransitionSpine = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, __dependency_7.CmmSlotUtils.delayTime(1.6);
          case 2:
            dispatch(__dependency_11.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_9.EBTM.BTM_FG_RESULT_TRANSITION_CLOSE
              }
            }), this.introContent.getComponent(__dependency_1.UIOpacity).opacity = 0, dispatch(__dependency_11.GameEvent.FG_INTRO_03_START), dispatch(__dependency_11.GameEvent.SHAKE_GAME_ANIM, {
              data: {
                index: 3
              }
            });
          case 6:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.transition03End = function () {
    this.showSummaryAlert();
  }, l.showSummaryAlert = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        i,
        n,
        a,
        r,
        o,
        l,
        c,
        u,
        f,
        d,
        _ = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return dispatch(__dependency_11.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_9.EBTM.FG_RESULT
              }
            }), t.next = 3, __dependency_7.CmmSlotUtils.delayTime(.6);
          case 3:
            e = this.data.getData(), i = e.gameState, n = __dependency_9.default.getData(), a = n.fgAlertAutoCloseTime, r = n.replayAutoCloseTime, o = this.data.getData().definition.digital, l = __dependency_6.default.isReplay, c = i[i.length - 1].totalWinnings, u = {
              label: this.fgWin,
              start: 0,
              end: Number(__dependency_7.CmmSlotUtils.formatNumber(c, !1, !1, o)),
              tweenTime: 7,
              digital: o,
              useThousandsSeparator: !0,
              tag: this.summaryTweenTag,
              callback: function () {
                _.freeGameAlertStatus = rt.RUN_SCORE_END, l && _.scheduleOnce(_.finishFGCallback, r), a && _.scheduleOnce(_.finishFGCallback, a);
              }
            }, f = {
              label: this.fgWinWhite,
              start: 0,
              end: Number(__dependency_7.CmmSlotUtils.formatNumber(c, !1, !1, o)),
              tweenTime: 7,
              digital: o,
              useThousandsSeparator: !0,
              tag: this.summaryTweenTag,
              callback: function () {
                _.freeGameAlertStatus = rt.RUN_SCORE_END, l && _.scheduleOnce(_.finishFGCallback, r), a && _.scheduleOnce(_.finishFGCallback, a);
              }
            }, this.fgWin.string = "0", this.fgWinWhite.string = "0", this.summary.active = !0, this.totalWinSpine.clearTracks(), this.totalWinSpine.setToSetupPose(), this.totalWinSpine.setAnimation(0, "in", !1), this.totalWinSpine.setCompleteListener(function () {
              _.totalWinSpine.setAnimation(0, "loop", !0), _.totalWinSpine.setCompleteListener(null), _.freeGameAlertStatus = rt.RUN_SCORE, _.alert.once(__dependency_1.NodeEventType.TOUCH_END, _.finishFGCallback, _);
            }), this.fgWin.node.scale = new __dependency_1.Vec3(0, 0, 0), __dependency_1.tween(this.fgWin.node).bindNodeState(false).delay(.15).call(function () {
              __dependency_7.CmmSlotUtils.tweenNum(u);
            }).to(.2, {
              scale: new __dependency_1.Vec3(1.3, 1.3, 1)
            }).to(.3, {
              scale: new __dependency_1.Vec3(1, 1, 1)
            }).start(), this.btnCollect.scale = new __dependency_1.Vec3(0, 0, 0), __dependency_1.tween(this.btnCollect).bindNodeState(false).delay(.15).to(.25, {
              scale: new __dependency_1.Vec3(1, 1, 1)
            }).start(), this.fgWinWhite.node.scale = new __dependency_1.Vec3(0, 0, 0), __dependency_1.tween(this.fgWinWhite.node).bindNodeState(false).delay(.15).call(function () {
              __dependency_7.CmmSlotUtils.tweenNum(f);
            }).to(.2, {
              scale: new __dependency_1.Vec3(1.3, 1.3, 1)
            }).to(.3, {
              scale: new __dependency_1.Vec3(1, 1, 1)
            }).start(), d = this.fgWinWhite.getComponent(__dependency_1.UIOpacity), __dependency_1.tween(d).bindNodeState(false).delay(.6).to(.6, {
              opacity: 0
            }).start(), App.globalAudio.pauseMusic(), this.finishFGCallback = function () {
              _.freeGameAlertStatus === rt.RUN_SCORE ? _.directShowResult() : _.freeGameAlertStatus === rt.RUN_SCORE_END && (_.finishFreeGame(), _.unschedule(_.finishFGCallback));
            };
          case 27:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.directShowResult = function () {
    var t = this.data.getData().gameState,
      e = __dependency_9.default.getData(),
      i = e.fgAlertAutoCloseTime,
      n = e.replayAutoCloseTime,
      a = __dependency_6.default.isReplay,
      r = t[t.length - 1].totalWinnings;
    __dependency_1.Tween.stopAllByTag(this.summaryTweenTag), this.freeGameAlertStatus = rt.RUN_SCORE_END, this.fgWin.string = __dependency_7.CmmSlotUtils.formatNumber(r), this.fgWinWhite.node.active = !1, this.alert.once(__dependency_1.NodeEventType.TOUCH_END, this.finishFGCallback, this), a && this.scheduleOnce(this.finishFGCallback, n), i && this.scheduleOnce(this.finishFGCallback, i), dispatch(__dependency_11.GameEvent.STOP_BTM, {
      data: __dependency_9.EBTM.FG_RESULT
    }), dispatch(__dependency_11.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_9.EBTM.FG_RESULT_END
      }
    });
  }, l.shakeGameLayer = function () {
    dispatch(__dependency_11.GameEvent.SHAKE_GAME_LAYER);
    var t = new __dependency_1.Vec3(0, 0, 0);
    this.node.getPosition(t);
    for (var e = 15, i = __dependency_1.tween(this.node).bindNodeState(false), n = 0; n < 8; n++) {
      var a = (2 * Math.random() - 1) * e,
        r = (2 * Math.random() - 1) * e;
      i = i.to(.02, {
        position: new __dependency_1.Vec3(t.x + a, t.y + r, 0)
      }), e *= .85;
    }
    i.to(.02, {
      position: t
    }).start();
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_10.default);
    }
  }, {
    key: "closeAction",
    get: function () {
      var t = this;
      return this.freeGameAlertStatus === rt.FINISH_FREE_GAME ? function (e) {
        App.utils.fadeOutView(t.node, function () {
          dispatch(__dependency_11.GameEvent.CLICK_FINISH_FREE_GAME), e();
        });
      } : null;
    }
  }]), e;
}(__dependency_3.default)).prototype, "alert", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __dependency_0.applyDecoratedDescriptor(j.prototype, "intro", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __dependency_0.applyDecoratedDescriptor(j.prototype, "introContent", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __dependency_0.applyDecoratedDescriptor(j.prototype, "summary", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __dependency_0.applyDecoratedDescriptor(j.prototype, "fgTimes", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __dependency_0.applyDecoratedDescriptor(j.prototype, "clickFontSprite", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = __dependency_0.applyDecoratedDescriptor(j.prototype, "titleFontSprite", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = __dependency_0.applyDecoratedDescriptor(j.prototype, "fgWinWhite", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = __dependency_0.applyDecoratedDescriptor(j.prototype, "fgWin", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = __dependency_0.applyDecoratedDescriptor(j.prototype, "totalWinSpine", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = __dependency_0.applyDecoratedDescriptor(j.prototype, "btnCollect", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = j)) || V));
__dependency_1.cclegacy._RF.pop();
