// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameLogic.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-Resource";
import * as __dependency_5 from "./main-ResourceLoader";
import * as __dependency_6 from "./main-Logic";
import * as __dependency_7 from "./framework-AutoPlayModel";
import * as __dependency_8 from "./framework-SlotFrameworkData";
import * as __dependency_9 from "./framework-StakeModel";
import * as __dependency_10 from "./framework-SlotFrameworkEvent";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./framework-ReplayModel";
import * as __dependency_13 from "./framework-type2";
import * as __dependency_14 from "./framework-CmmSlotUtils";
import * as __dependency_15 from "./framework-ExitUtils";
import * as __dependency_16 from "./framework-SlotTableViewL_v2";
import * as __dependency_17 from "./framework-SlotTableViewP";
import * as __dependency_18 from "./g1007-BigPrizeSignalView";
import * as __dependency_19 from "./g1007-BigWinView";
import * as __dependency_20 from "./g1007-FeatureView";
import * as __dependency_21 from "./g1007-FreeGameAlertView";
import * as __dependency_22 from "./g1007-FullCharacterView";
import * as __dependency_23 from "./g1007-JackpotGameView";
import * as __dependency_24 from "./g1007-SixPointStarView";
import * as __dependency_25 from "./g1007-TreasuresView";
import * as __dependency_26 from "./g1007-GameConfigModel";
import * as __dependency_27 from "./g1007-GameData";
import * as __dependency_28 from "./g1007-GameEvent";
import * as __dependency_29 from "./g1007-GameSender";
import * as __dependency_30 from "./g1007-StateMachineManager";
import * as __dependency_31 from "./g1007-types";
import * as __dependency_32 from "./g1007-GameView";
import * as __dependency_33 from "./main-UrlUtils";
var __export_0;
export { __export_0 as EInitName };
var __export_1;
export { __export_1 as GameLogic };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EInitName":
      __export_0 = value;
      break;
    case "GameLogic":
      __export_1 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, a, r, i, s, o, c, u, _, E, f, p, S, A, h, d, I, T, N, R, l, M, O, P, w, L, g, C, D, m, x, G, y, W, v, U, k, B, F, b;
var V;
__publish("EInitName", void 0), __dependency_1.cclegacy._RF.push({}, "50dfbf4VS5CUJGE2urfqYsu", "GameLogic", void 0), function (e) {
  e.INIT_GAME = "init_game", e.INIT_REPLAY = "init_replay";
}(V || (V = __publish("EInitName", {})));
__publish("GameLogic", function (e) {
  function i() {
    for (var n, t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
    return (n = Reflect.construct(e, [this].concat(a).slice(1), new.target || this.constructor) || this).loader = new __dependency_5.default(), n;
  }
  __dependency_0.inheritsLoose(i, e);
  var f = i.prototype;
  return f.onLoad = function (n) {
    e.prototype.onLoad.call(this, n), this._init();
  }, f.onDestroy = function () {
    this.loader.unLoadResources(), this.data.clear(), e.prototype.onDestroy.call(this);
  }, f.start = function () {
    App.senderManager.get(__dependency_29.GameSender).init();
  }, f.reset = function () {
    __dependency_1.Tween.stopAll(), gsap.globalTimeline.clear(), gsap.globalTimeline.kill(), App.uiManager.closeExcept([]), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !1), dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_13.ESpinStatus.IDLE
    }), this.removeEvents();
  }, f._init = function () {
    this.loadResources();
  }, f.loadResources = function () {
    this.loader.getLoadResources = function () {
      return [];
    }, this.loader.onLoadComplete = function (e) {
      __dependency_4.Resource.LoaderError.SUCCESS;
    }, this.loader.loadResources();
  }, f.setGameType = function (e) {
    var n, t;
    "spin" === (null == (n = e.engine.gameState[0]) ? void 0 : n.action) ? t = __dependency_31.EGameType.MAIN_GAME : (t = __dependency_31.EGameType.FREE_GAME, this.data.previousGameType || (t = __dependency_31.EGameType.MAIN_GAME)), this.data.currentGameType = t;
  }, f.checkBalance = function () {
    var e = __dependency_9.default.totalStake;
    return __dependency_11.default.getData().player.balance.amount - e >= 0;
  }, f.withholdingAmountBySpin = function () {
    var e = __dependency_9.default.getData().totalStake,
      n = App.dataCenter.get(__dependency_27.default).getData().isResuming,
      t = __dependency_33.default.hasParam("spinId");
    n || t || (__dependency_11.default.getData().player.balance.amount -= e);
  }, f.sendFeatureReq = function () {
    var e = __dependency_9.default.ratioIndex,
      n = __dependency_9.default.stakeIndex,
      t = __dependency_9.default.ratioValue,
      a = __dependency_9.default.stakeValue,
      r = this.data.featureData,
      i = r.feature,
      s = {
        ratioIndex: e,
        ratioValue: t,
        stakeIndex: n,
        stakeValue: a,
        featureIndex: r.featureIndex,
        featureValue: i
      },
      o = __dependency_11.default.getData().player.balance.amount;
    if (0 === o || !this.checkBalanceByFeature()) {
      var c = 0 === o ? "insufficientFundError" : "insufficientFund";
      return App.gameAlert.show({
        text: App.getLanguage(c, [], __dependency_3.EBundles[__dependency_3.EBundles.wrapper]),
        confirmCb: function () {},
        bbrCb: function () {}
      }), __dependency_7.default.active = !1, __dependency_7.default.spinsRemaining = 0, void dispatch(__dependency_10.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
        data: !0
      });
    }
    this.withholdingAmountByFeature(), App.senderManager.get(__dependency_29.GameSender).buyFeature(s);
  }, f.checkBalanceByFeature = function () {
    var e = __dependency_9.default.getData().totalStake * this.data.featureData.featureRate;
    return __dependency_11.default.getData().player.balance.amount - e >= 0;
  }, f.withholdingAmountByFeature = function () {
    var e = __dependency_9.default.getData().totalStake * this.data.featureData.featureRate;
    __dependency_11.default.getData().player.balance.amount -= e;
  }, f.addEvents = function () {
    var e = this;
    this.on(__dependency_28.GameEvent.LOAD_COMPLETE, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.LOAD_COMPLETE));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.START_RESUME, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.START_RESUME));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SHOW_SCATTER_WIN_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SHOW_SCATTER_WIN_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.INCREASE_FG_REMAINING_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.INCREASE_FG_REMAINING_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SHOW_BIG_WIN_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SHOW_BIG_WIN_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.NEXT_SPIN, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            e.data.setNextSpinData();
          case 1:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_10.SlotFrameworkEvent.INIT_RESPONSE, function (n) {
      e.data.setInitData(n), __dependency_26.default.setData(n), e.setGameType(n), dispatch(__dependency_28.GameEvent.PARSER_INIT_COMPLETED);
    }), this.on(__dependency_10.SlotFrameworkEvent.SPIN_RESPONSE, function (n) {
      dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: n.engine.spinId
        }
      }), dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: __dependency_11.default.amount
        }
      }), e.data.setSpinData(n), e.setGameType(n), dispatch(__dependency_28.GameEvent.PARSER_SPIN_COMPLETED);
    }), this.on(__dependency_28.GameEvent.JACKPOT_GAME_PICK_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.JACKPOT_GAME_PICK_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_10.SlotFrameworkEvent.CLOSE_RESPONSE, function () {
      e.data.reset(), dispatch(__dependency_28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED);
    }), this.on(__dependency_10.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, function () {
      var e = {
          text: App.getLanguage("disconnect", [], __dependency_3.EBundles[__dependency_3.EBundles.wrapper]),
          confirmCb: function (e) {
            n();
          },
          bbrCb: function (e) {},
          needCloseAlert: !1,
          tag: __dependency_2.ViewZOrder.TopErrorAlert
        },
        n = function () {
          __dependency_15.ExitUtils.exit();
        };
      App.gameAlert.show(e, __dependency_2.ViewZOrder.TopErrorAlert);
    }), this.on(__dependency_10.SlotFrameworkEvent.WARN_RESPONSE, function (e) {
      var n = {
          text: e.message,
          confirmCb: function (e) {
            t();
          },
          bbrCb: function (e) {},
          needCloseAlert: !1,
          tag: __dependency_2.ViewZOrder.TopErrorAlert
        },
        t = function () {
          __dependency_15.ExitUtils.exit();
        };
      App.gameAlert.show(n, __dependency_2.ViewZOrder.TopErrorAlert);
    }), this.on(__dependency_28.GameEvent.QUICK_STOP_TOTAL_WINNINGS, function (e) {
      dispatch(__dependency_10.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: e.data
      });
    }), this.on(__dependency_10.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, function (n) {
      var t = n.data,
        a = __dependency_11.default.getData().player.settings.autoPlay.numberOfPlays[t];
      __dependency_9.default.getData().totalStake;
      __dependency_7.default.active = !0, __dependency_7.default.spinsRemaining = a, __dependency_7.default.active && (e.data.featureData ? e.sendFeatureReq() : dispatch(__dependency_28.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      }));
    }), this.on(__dependency_28.GameEvent.PARSER_INIT_COMPLETED, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return e.view.init(), n.next = 3, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.PARSER_INIT_COMPLETED));
          case 3:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.PARSER_REPLAY_COMPLETED, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return __dependency_12.default.replayMode === __dependency_12.EReplayMode.URL_REPLAY && e.view.initReplay(), n.next = 3, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.PARSER_REPLAY_COMPLETED));
          case 3:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.START_SPIN, function (n) {
      e.data.currentGameType, __dependency_31.EGameType.MAIN_GAME, e.data.getData().isResuming, __dependency_11.default.getData().player.balance.amount;
      n.data.spinId || e.withholdingAmountBySpin(), __dependency_30.default.getMachine().send(new __dependency_28.GameEvent(__dependency_28.GameEvent.START_SPIN, n.data)), dispatch(__dependency_28.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_26.EBTM.SPIN
        }
      }), dispatch(__dependency_28.GameEvent.CLOSE_XTRA_BET_DETAIL);
    }), this.on(__dependency_28.GameEvent.REPLAY_START_QUICK_STOP, function () {
      e.view.replayQuickStop();
    }), this.on(__dependency_28.GameEvent.PARSER_SPIN_COMPLETED, function () {
      __dependency_30.default.getMachine().send(new __dependency_28.GameEvent(__dependency_28.GameEvent.PARSER_SPIN_COMPLETED));
    }), this.on(__dependency_28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function () {
      __dependency_30.default.getMachine().currentStateId !== __dependency_30.default.state.MG_WAIT_SPIN_STATE.id && __dependency_30.default.getMachine().send(new __dependency_28.GameEvent(__dependency_28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED));
    }), this.on(__dependency_28.GameEvent.OPEN_SLOT_TABLE, function () {
      var e = __dependency_14.CmmSlotUtils.getOrientationTarget(__dependency_16.default, __dependency_17.default);
      App.uiManager.open({
        type: e,
        bundle: __dependency_3.EBundles[__dependency_3.EBundles.slotFramework],
        zIndex: __dependency_2.ViewZOrder.UI,
        name: "機台選擇2",
        args: !0
      });
    }), this.on(__dependency_10.SlotFrameworkEvent.STOP_AUTO_SPIN, function () {
      __dependency_7.default.active = !1, __dependency_7.default.spinsRemaining = 0;
    }), this.on(__dependency_28.GameEvent.OPEN_FEATURE_VIEW, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n(t) {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_20.FeatureView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "免費遊戲內容確認"
            });
          case 2:
            n.sent.openView(t);
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.SHOW_BIG_WIN, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n(t) {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_19.BigWinView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "BIG WIN"
            });
          case 2:
            n.sent.showWin();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.SHOW_TOTAL_BIG_WIN, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_19.BigWinView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "BIG WIN"
            });
          case 2:
            n.sent.showTotalBigWin();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.SHOW_FG_INTRO_ALERT, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_21.FreeGameAlertView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "免費遊戲彈窗"
            });
          case 2:
            n.sent.showIntroAlert();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.SHOW_FG_SUMMARY_ALERT, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_21.FreeGameAlertView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "免費遊戲彈窗"
            });
          case 2:
            n.sent.closeTransitionSpine();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.OPEN_JACKPOT_GAME_VIEW, function () {
      App.uiManager.open({
        type: __dependency_23.JackpotGameView,
        bundle: e.bundle,
        zIndex: __dependency_2.ViewZOrder.UI,
        name: "JP遊戲"
      });
    }), this.on(__dependency_28.GameEvent.SHOW_SIX_POINT_STAR, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_24.SixPointStarView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "JP六芒星"
            });
          case 2:
            n.sent.playStartAnim();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.SHOW_BIG_PRIZE_SIGNAL, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_18.BigPrizeSignalView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "大獎預告"
            });
          case 2:
            n.sent.playSignAnim();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.SHOW_TREASURE_VIEW, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_25.TreasuresView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "回獎寶箱"
            });
          case 2:
            n.sent.showTreasureWin();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.SHOW_FULL_CHARACTER_VIEW, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
      return __dependency_0.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_22.FullCharacterView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "全盤人物動畫"
            });
          case 2:
            n.sent.playAnim();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_28.GameEvent.CLICK_START_FREE_GAME, function () {
      __dependency_30.default.getMachine().send(new __dependency_28.GameEvent(__dependency_28.GameEvent.CLICK_START_FREE_GAME));
    }), this.on(__dependency_28.GameEvent.CHANGE_FG_SPIN_STATE, function () {
      __dependency_30.default.getMachine().send(new __dependency_28.GameEvent(__dependency_28.GameEvent.CHANGE_FG_SPIN_STATE));
    }), this.on(__dependency_28.GameEvent.CLICK_FINISH_FREE_GAME, function () {
      __dependency_30.default.getMachine().send(new __dependency_28.GameEvent(__dependency_28.GameEvent.CLICK_FINISH_FREE_GAME));
    }), this.on(__dependency_28.GameEvent.SHOW_RESUME_ALERT, function () {
      e.view.showResumeAlert();
    }), this.on(__dependency_10.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_STAKE);
    }), this.on(__dependency_28.GameEvent.START_JACKPOT_GAME, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.START_JACKPOT_GAME));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SYMBOLS_OUT_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SYMBOLS_OUT_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SYMBOLS_IN_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SYMBOLS_IN_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.CREATE_GROUP_SYMBOLS_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.CREATE_GROUP_SYMBOLS_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SHOW_JACKPOT_WIN_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SHOW_JACKPOT_WIN_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SHOW_WIN_SCORE_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SHOW_WIN_SCORE_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.REMOVE_WIN_SYMBOLS_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.REMOVE_WIN_SYMBOLS_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.MOVE_MULTIPLE_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.MOVE_MULTIPLE_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.CURRENT_SYMBOLS_FALL_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.CURRENT_SYMBOLS_FALL_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SYMBOLS_RECHARGE_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SYMBOLS_RECHARGE_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.CREATE_RANDOM_WILD_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.CREATE_RANDOM_WILD_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.RESET_MULTIPLE_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.RESET_MULTIPLE_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SHOW_TREASURE_VIEW_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SHOW_TREASURE_VIEW_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SHOW_JP_GAME_STAR_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SHOW_JP_GAME_STAR_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.SHOW_BIG_PRIZE_SIGNAL_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.SHOW_BIG_PRIZE_SIGNAL_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_28.GameEvent.PROCESS_REPLAY_IN_GAME, function () {
      e.view.reset(), __dependency_1.tween(e).bindNodeState(false).delay(.5).call(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
        return __dependency_0.regeneratorRuntime().wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.next = 2, App.uiManager.open({
                type: __dependency_32.default,
                bundle: e.bundle,
                args: V.INIT_REPLAY
              });
            case 2:
            case "end":
              return n.stop();
          }
        }, n);
      }))).start();
    }), this.on(__dependency_28.GameEvent.RESET_AND_OPEN_GAME_VIEW, function () {
      e.view.reset(), __dependency_1.tween(e).bindNodeState(false).delay(.5).call(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function n() {
        return __dependency_0.regeneratorRuntime().wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.next = 2, App.uiManager.open({
                type: __dependency_32.default,
                bundle: e.bundle,
                args: V.INIT_GAME
              });
            case 2:
            case "end":
              return n.stop();
          }
        }, n);
      }))).start();
    }), this.on(__dependency_28.GameEvent.REPLAY_GAME_END, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, __dependency_30.default.getMachine().sendAsync(new __dependency_28.GameEvent(__dependency_28.GameEvent.REPLAY_GAME_END));
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(__dependency_10.SlotFrameworkEvent.REPLAY_AGAIN, function () {
      dispatch(__dependency_28.GameEvent.NEXT_SPIN), dispatch(__dependency_28.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      });
    });
  }, f.removeEvents = function () {
    this.off(__dependency_10.SlotFrameworkEvent.INIT_RESPONSE), this.off(__dependency_10.SlotFrameworkEvent.SPIN_RESPONSE), this.off(__dependency_10.SlotFrameworkEvent.CLOSE_RESPONSE), this.off(__dependency_10.SlotFrameworkEvent.WARN_RESPONSE), this.off(__dependency_10.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE), this.off(__dependency_10.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT), this.off(__dependency_10.SlotFrameworkEvent.STOP_AUTO_SPIN), this.off(__dependency_10.SlotFrameworkEvent.PLAY_CLICK_BTM), this.off(__dependency_10.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(__dependency_10.SlotFrameworkEvent.REPLAY_AGAIN), this.off(__dependency_28.GameEvent.LOAD_COMPLETE), this.off(__dependency_28.GameEvent.START_RESUME), this.off(__dependency_28.GameEvent.SHOW_SCATTER_WIN_END), this.off(__dependency_28.GameEvent.INCREASE_FG_REMAINING_END), this.off(__dependency_28.GameEvent.SHOW_BIG_WIN_END), this.off(__dependency_28.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END), this.off(__dependency_28.GameEvent.NEXT_SPIN), this.off(__dependency_28.GameEvent.QUICK_STOP_TOTAL_WINNINGS), this.off(__dependency_28.GameEvent.JACKPOT_GAME_PICK_END), this.off(__dependency_28.GameEvent.PARSER_INIT_COMPLETED), this.off(__dependency_28.GameEvent.PARSER_REPLAY_COMPLETED), this.off(__dependency_28.GameEvent.START_SPIN), this.off(__dependency_28.GameEvent.REPLAY_START_QUICK_STOP), this.off(__dependency_28.GameEvent.PARSER_SPIN_COMPLETED), this.off(__dependency_28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), this.off(__dependency_28.GameEvent.OPEN_SLOT_TABLE), this.off(__dependency_28.GameEvent.OPEN_BUY_FEATURE_VIEW), this.off(__dependency_28.GameEvent.OPEN_FEATURE_VIEW), this.off(__dependency_28.GameEvent.SHOW_BIG_WIN), this.off(__dependency_28.GameEvent.SHOW_FG_INTRO_ALERT), this.off(__dependency_28.GameEvent.SHOW_FG_SUMMARY_ALERT), this.off(__dependency_28.GameEvent.OPEN_JACKPOT_GAME_VIEW), this.off(__dependency_28.GameEvent.SHOW_SIX_POINT_STAR), this.off(__dependency_28.GameEvent.SHOW_TREASURE_VIEW), this.off(__dependency_28.GameEvent.CLICK_START_FREE_GAME), this.off(__dependency_28.GameEvent.CHANGE_FG_SPIN_STATE), this.off(__dependency_28.GameEvent.CLICK_FINISH_FREE_GAME), this.off(__dependency_28.GameEvent.SHOW_RESUME_ALERT), this.off(__dependency_28.GameEvent.START_JACKPOT_GAME), this.off(__dependency_28.GameEvent.SYMBOLS_OUT_END), this.off(__dependency_28.GameEvent.SYMBOLS_IN_END), this.off(__dependency_28.GameEvent.CREATE_GROUP_SYMBOLS_END), this.off(__dependency_28.GameEvent.SHOW_JACKPOT_WIN_END), this.off(__dependency_28.GameEvent.SHOW_WIN_SCORE_END), this.off(__dependency_28.GameEvent.REMOVE_WIN_SYMBOLS_END), this.off(__dependency_28.GameEvent.MOVE_MULTIPLE_END), this.off(__dependency_28.GameEvent.CURRENT_SYMBOLS_FALL_END), this.off(__dependency_28.GameEvent.SYMBOLS_RECHARGE_END), this.off(__dependency_28.GameEvent.CREATE_RANDOM_WILD_END), this.off(__dependency_28.GameEvent.RESET_MULTIPLE_END), this.off(__dependency_28.GameEvent.SHOW_TREASURE_VIEW_END), this.off(__dependency_28.GameEvent.SHOW_JP_GAME_STAR_END), this.off(__dependency_28.GameEvent.PROCESS_REPLAY_IN_GAME), this.off(__dependency_28.GameEvent.RESET_AND_OPEN_GAME_VIEW), this.off(__dependency_28.GameEvent.REPLAY_GAME_END);
  }, __dependency_0.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_27.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_8.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), i;
}(__dependency_6.Logic));
__dependency_1.cclegacy._RF.pop();
