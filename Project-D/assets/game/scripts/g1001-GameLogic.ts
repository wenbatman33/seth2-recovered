// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/slotFramework-ExitUtils";
import * as _dependency6 from "../../shared/scripts/main-Resource";
import * as _dependency7 from "../../shared/scripts/main-ResourceLoader";
import * as _dependency8 from "../../shared/scripts/main-Logic";
import * as _dependency9 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency1 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReadyBundleModel";
import * as _dependency12 from "./g1001-ParseResponse";
import * as _dependency13 from "./g1001-BigwinView";
import * as _dependency14 from "./g1001-FreeGameAlertView";
import * as _dependency15 from "./g1001-GameData";
import * as _dependency16 from "./g1001-GameEvent";
import * as _dependency17 from "./g1001-GameSender";
import * as _dependency18 from "./g1001-types";
import * as _dependency19 from "./g1001-GameView";
import * as _dependency20 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency21 from "./g1001-BuyFeatureView";
import * as _dependency22 from "./g1001-FlowIDs";
import * as _dependency23 from "./g1001-GameConfigModel";
import * as _dependency24 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency25 from "./g1001-TreasuresView";
import * as _dependency26 from "../../shared/scripts/slotFramework-type2";
var _export;
export { _export as GameLogic };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameLogic":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, n, i, r, o, l, s, u, c, p, d, E, A, _, f, S, I, y, g, T, R, h, m, L, P, v, w, O, D, C, N, b, F, M;
_dependency2.cclegacy._RF.push({}, "027089BVJJH+5Y/iJBPx/JG", "GameLogic", void 0);
_publish("GameLogic", function (e) {
  var _nativeConstructor = r;
  function r() {
    for (var t, a = arguments.length, n = new Array(a), i = 0; i < a; i++) n[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).loader = new _dependency7.default(), t.earlySpinDelayingEvent = null, t.earlySpinDelayingSetTimeout = null, t.earlyIntervalId = 1, t.fgPlayLogIntervalId = -1, t;
  }
  _dependency.inheritsLoose(r, e);
  var A = r.prototype;
  return A.onLoad = function (t) {
    e.prototype.onLoad.call(this, t), this._init();
  }, A.onDestroy = function () {
    this.loader.unLoadResources(), this.data.clear(), e.prototype.onDestroy.call(this);
  }, A.start = function () {
    App.senderManager.get(_dependency17.GameSender).init();
  }, A.reset = function () {
    _dependency2.Tween.stopAll(), App.flowManager.killAllFlow(), App.uiManager.closeExcept([]), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency26.ESpinStatus.IDLE
    }), this.removeAllEvents();
  }, A._init = function () {
    this.loadResources();
  }, A.loadResources = function () {
    this.loader.getLoadResources = function () {
      return [];
    }, this.loader.onLoadComplete = function (e) {
      _dependency6.Resource.LoaderError.SUCCESS;
    }, this.loader.loadResources();
  }, A.setGameType = function (e) {
    var t;
    this.data.currentGameType = "spin" === (null == (t = e.engine.gameState) ? void 0 : t.action) ? _dependency18.EGameType.MAIN_GAME : _dependency18.EGameType.FREE_GAME;
  }, A.addEvents = function () {
    var e = this;
    this.on(_dependency1.SlotFrameworkEvent.INIT_RESPONSE, function (e) {
      e.engine.gameState.length ? _dependency12.default.parseNewInit(e) : _dependency12.default.parseInit(e);
    }), this.on(_dependency1.SlotFrameworkEvent.SPIN_RESPONSE, function (e) {
      dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: e.engine.spinId
        }
      });
      var t = _dependency10.default.amount;
      _dependency10.default.getData().theme && "xin-star" == _dependency10.default.getData().theme && (t = _dependency10.default.betAmount), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: t
        }
      }), _dependency12.default.parseNewSpin(e);
    }), this.on(_dependency1.SlotFrameworkEvent.EARLY_SPIN_RESPONSE, function (e) {
      _dependency12.default.parseEarlySpin(e);
    }), this.on(_dependency1.SlotFrameworkEvent.EARLY_CLOSE_RESPONSE, function (e) {
      _dependency12.default.tempEarlyClose(e);
    }), this.on(_dependency1.SlotFrameworkEvent.CLOSE_RESPONSE, function (e) {
      _dependency12.default.parseCloseSpin(e);
    }), this.on(_dependency1.SlotFrameworkEvent.REPLAY_RESPONSE, function (e) {
      _dependency12.default.parseReplay(e);
    }), this.on(_dependency1.SlotFrameworkEvent.REPLAY_AGAIN, function (e) {
      _dependency12.default.parseReplayAgain(e);
    }), this.on(_dependency1.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, function (e) {
      if ("xin-star" == _dependency10.default.getData().theme) {
        var t = {
            text: App.getLanguage("disconnectXinStar", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
            confirmCb: function (e) {
              a();
            },
            bbrCb: function (e) {},
            needCloseAlert: !1,
            tag: _dependency3.ViewZOrder.TopErrorAlert,
            titleisHidden: !0,
            expandisHidden: !0,
            confirmisHidden: !0
          },
          a = function () {
            _dependency5.ExitUtils.exit();
          };
        App.gameAlert.show(t, _dependency3.ViewZOrder.TopErrorAlert);
      } else {
        var n = {
            text: App.getLanguage("disconnect", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
            confirmCb: function (e) {
              i();
            },
            bbrCb: function (e) {},
            needCloseAlert: !1,
            tag: _dependency3.ViewZOrder.TopErrorAlert,
            isDisableBlockInput: _dependency24.default.isReplay && _dependency2.game.isPaused()
          },
          i = function () {
            _dependency5.ExitUtils.exit();
          };
        App.gameAlert.show(n, _dependency3.ViewZOrder.TopErrorAlert);
      }
    }), this.on(_dependency1.SlotFrameworkEvent.WARN_RESPONSE, function (e) {
      if ("xin-star" == _dependency10.default.getData().theme) {
        var t = {
            text: App.getLanguage("disconnectXinStar", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
            confirmCb: function (e) {
              a();
            },
            bbrCb: function (e) {},
            needCloseAlert: !1,
            tag: _dependency3.ViewZOrder.TopErrorAlert,
            titleisHidden: !0,
            expandisHidden: !0,
            confirmisHidden: !0
          },
          a = function () {
            _dependency5.ExitUtils.exit();
          };
        App.gameAlert.show(t, _dependency3.ViewZOrder.TopErrorAlert);
      } else {
        var n = {
            text: e.message,
            confirmCb: function (e) {
              i();
            },
            bbrCb: function (e) {},
            needCloseAlert: !1,
            tag: _dependency3.ViewZOrder.TopErrorAlert
          },
          i = function () {
            _dependency5.ExitUtils.exit();
          };
        App.gameAlert.show(n, _dependency3.ViewZOrder.TopErrorAlert);
      }
      dispatch(_dependency16.GameEvent.FG_STOP_COUNT_FOR_PLAY_LOG);
    }), this.on(_dependency1.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      e.view.init();
    }), this.on(_dependency16.GameEvent.PARSER_SPIN_COMPLETED, function () {
      dispatch(_dependency16.GameEvent.CREATE_STOP_SPIN_FLOW);
    }), this.on(_dependency16.GameEvent.START_QUICK_STOP, function () {
      _dependency2.Tween.stopAllByTarget(e);
    }), this.on(_dependency16.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function () {
      e.data.getIsFGFinish() || dispatch(_dependency16.GameEvent.SPIN_CLOSED_FLOW);
    }), this.on(_dependency16.GameEvent.QUICK_STOP_TOTAL_WINNINGS, function (e) {
      dispatch(_dependency1.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: e.data
      });
    }), this.on(_dependency16.GameEvent.SPIN_START, function () {}), this.on(_dependency16.GameEvent.SPIN_CLOSED, function () {}), this.on(_dependency1.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, function (e) {
      var t = e.data,
        a = _dependency10.default.getData().player.settings.autoPlay.numberOfPlays[t];
      _dependency9.default.active = !0, _dependency9.default.spinsRemaining = a, _dependency9.default.active && dispatch(_dependency16.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          cheat: null
        }
      });
    }), this.on(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN, function () {
      if (_dependency9.default.active = !1, _dependency9.default.spinsRemaining = 0, App.flowManager.killOneFlow(_dependency22.FlowIDs.EARLY_SPIN_FLOW), e.data.isEarlyCloseFlag = !1, e.data.isEarlyFlag = !1, e.data.isSendOutEarlyFlag) null == e.data.earlyData ? Log.w("已送出預跑但還未收到資料") : (Log.w("已送出預跑且收到資料"), clearInterval(e.earlyIntervalId), e.earlyIntervalId > -1 && (e.earlyIntervalId = -1, dispatch(_dependency16.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          cheat: null,
          earlySpin: !0
        }
      })));else {
        Log.w("尚未送出可直接取消預跑"), e.data.delayEarlyTween && (e.data.delayEarlyTween.stop(), e.data.delayEarlyTween.removeSelf());
        var t = !1;
        e.earlyIntervalId > -1 && (t = !0, clearInterval(e.earlyIntervalId), e.earlyIntervalId = -1), e.data.isOpenEarlyFlag && (e.data.isOpenEarlyFlag = !1, e.data.isSendClose || (Log.w("還未結算:::::::::::"), t && dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: e.data.getData().spinId
        })));
      }
    }), this.on(_dependency16.GameEvent.EARLY_SPIN_DELAYING, function (t) {
      e.earlySpinDelayingEvent = t;
      e.data.earlySpinDelaying = !0;
      var a = _dependency23.default.quickStopCount,
        n = _dependency23.default.isTurbo;
      clearTimeout(e.earlySpinDelayingSetTimeout), 1 === a || n ? (clearTimeout(e.earlySpinDelayingSetTimeout), t.complete(), e.data.earlySpinDelaying = !1) : e.earlySpinDelayingSetTimeout = setTimeout(function () {
        t.complete(), e.data.earlySpinDelaying = !1;
      }, 1875);
    }), this.on(_dependency16.GameEvent.SET_EARLY_SPIN_DELAYING_COMPLETED, function () {
      e.earlySpinDelayingEvent && e.earlySpinDelayingEvent.complete();
    }), this.on(_dependency16.GameEvent.AUTO_SPIN_STATUS, function () {}), this.once(_dependency1.SlotFrameworkEvent.SWIPE_UP, function () {
      _dependency11.default.isComplete() && (App.gameAlert.isCurrentShow(_dependency3.ViewZOrder.TopErrorAlert) || App.gameLoading.complete());
    }), this.on(_dependency16.GameEvent.EARLY_DATA_PARSER_TO_SPIN_DATA, function () {
      var t = e.data.earlyData;
      Log.w("EARLY_DATA_PARSER_TO_SPIN_DATA::::", t);
      var a = t.platform.player.balance.amount;
      if (t.platform.player.balance.updatedAt) {
        var n = t.platform.player.balance.updatedAt;
        _dependency10.default.updateBalance(a, n);
      } else _dependency10.default.amount = a;
      null != t.platform.player.balance.betAmount && (_dependency10.default.betAmount = t.platform.player.balance.betAmount), _dependency12.default.parseNewEarlySpin(t), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: t.engine.spinId
        }
      });
      var i = _dependency10.default.amount;
      _dependency10.default.getData().theme && "xin-star" == _dependency10.default.getData().theme && (i = _dependency10.default.betAmount), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: i
        }
      }), dispatch(_dependency16.GameEvent.PARSER_SPIN_COMPLETED);
    }), this.on(_dependency16.GameEvent.EARLY_CLOSE_DATA_PARSER_TO_DATA, function () {
      var t = e.data.earlyCloseData;
      e.data.isEarlyCloseFlag = !1;
      var a = t.platform.player.balance.amount;
      if (t.platform.player.balance.updatedAt) {
        var n = t.platform.player.balance.updatedAt;
        _dependency10.default.updateBalance(a, n);
      } else _dependency10.default.amount = a;
      dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency10.default.amount
        }
      }), dispatch(_dependency16.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), e.data.earlyCloseData = null;
    }), this.on(_dependency16.GameEvent.WAIT_EARLY_DATA_RETRY, function (t) {
      var a = 0;
      e.data.waitEarlyDataRetryInterval = setInterval(function () {
        var n = e.data,
          i = n.isEarlyFlag,
          r = n.earlyData;
        if (++a > 333) {
          Log.e("EARLY_DATA timeout " + 30 * a / 1e3 + "s"), clearInterval(e.data.waitEarlyDataRetryInterval);
          var o = {
              text: "early spin" + App.getLanguage("timeoutError", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
              confirmCb: function (e) {
                l();
              },
              bbrCb: function (e) {},
              needCloseAlert: !1,
              code: "front",
              tag: _dependency3.ViewZOrder.TopErrorAlert
            },
            l = function () {
              _dependency5.ExitUtils.exit();
            };
          App.gameAlert.show(o, _dependency3.ViewZOrder.TopErrorAlert);
        }
        i && r && (t.complete(), clearInterval(e.data.waitEarlyDataRetryInterval));
      }, 30);
    }), this.on(_dependency16.GameEvent.WAIT_EARLY_SPIN_RESPONSE, function () {
      null == e.data.earlyData && e.data.isOpenEarlyFlag && (e.earlyIntervalId = setInterval(function () {
        e.data.earlyData && (clearInterval(e.earlyIntervalId), dispatch(_dependency16.GameEvent.CREATE_SPIN_FLOW, {
          data: {
            spinId: null,
            cheat: null,
            earlySpin: !0
          }
        }), e.earlyIntervalId = -1);
      }, 100));
    }), this.on(_dependency16.GameEvent.KILL_WAIT_EARLY_DATA_RETRY_INTERVAL, function (t) {
      clearInterval(e.data.waitEarlyDataRetryInterval);
    }), this.on(_dependency16.GameEvent.KILL_WAIT_EARLY_CLOSE_DATA_RETRY_INTERVAL, function (t) {
      clearInterval(e.data.waitEarlyCloseDataRetryInterval);
    }), this.on(_dependency16.GameEvent.WAIT_EARLY_CLOSE_DATA_RETRY, function (t) {
      var a = 0;
      e.data.waitEarlyCloseDataRetryInterval = setInterval(function () {
        var n = e.data,
          i = n.isEarlyCloseFlag,
          r = n.earlyCloseData;
        if (a++, Log.d("wait close", a), a > 333) {
          Log.e("EARLY_CLOSE_DATA timeout " + 30 * a / 1e3 + "s"), clearInterval(e.data.waitEarlyCloseDataRetryInterval);
          var o = {
              text: "early close" + App.getLanguage("timeoutError", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
              confirmCb: function (e) {
                l();
              },
              bbrCb: function (e) {},
              needCloseAlert: !1,
              code: "front",
              tag: _dependency3.ViewZOrder.TopErrorAlert
            },
            l = function () {
              _dependency5.ExitUtils.exit();
            };
          App.gameAlert.show(o, _dependency3.ViewZOrder.TopErrorAlert);
        }
        i && r && (t.complete(), clearInterval(e.data.waitEarlyCloseDataRetryInterval));
      }, 30);
    }), this.on(_dependency16.GameEvent.SHOW_BIGWIN, function (t) {
      var i = t.data,
        r = e.data.getData().parser.bigwinReach.level,
        o = _dependency20.default.getData(),
        l = o.smallPrizeDelay,
        p = o.bigPrizeDelay,
        d = i.isRoundWin ? 0 : r <= 3 ? l : p;
      App.globalAudio.isMusicOn = !1, _dependency2.tween(e).bindNodeState(false).delay(d).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return App.globalAudio.isMusicOn = !0, e.next = 3, App.uiManager.open({
                type: _dependency13.BigwinView,
                bundle: _dependency4.EBundles[_dependency4.EBundles.g1001],
                zIndex: _dependency3.ViewZOrder.UI,
                name: "BIG WIN"
              });
            case 3:
              e.sent.showBigwin(t.complete, t.data);
            case 5:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency16.GameEvent.SHOW_TREASURE_VIEW, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return App.globalAudio.pauseMusic(), e.next = 3, App.uiManager.open({
              type: _dependency25.TreasuresView,
              bundle: _dependency4.EBundles[_dependency4.EBundles.g1001],
              zIndex: _dependency3.ViewZOrder.UI,
              name: "BIG WIN"
            });
          case 3:
            e.sent.showTreasureWin(t.complete);
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency16.GameEvent.SHOW_FG_INTRO_ALERT, function (e) {
      App.uiManager.open({
        type: _dependency14.FreeGameAlertView,
        bundle: _dependency4.EBundles[_dependency4.EBundles.g1001],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (e) {
        e.showIntroAlert();
      });
    }), this.on(_dependency16.GameEvent.SHOW_FG_SUMMARY_ALERT, function (e) {
      App.uiManager.open({
        type: _dependency14.FreeGameAlertView,
        bundle: _dependency4.EBundles[_dependency4.EBundles.g1001],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (t) {
        t.showSummaryAlert(e.complete);
      });
    }), this.on(_dependency16.GameEvent.OPEN_FEATURE_POPUP, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, App.uiManager.open({
              type: _dependency21.BuyFeatureView,
              bundle: e.bundle,
              zIndex: _dependency3.ViewZOrder.UI,
              name: "購買免費遊戲"
            });
          case 2:
            t.sent.openPopup();
          case 4:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency16.GameEvent.PARSER_REPLAY_COMPLETED, function (t) {
      t ? e.view.initReplay() : e.view.againReplayUpdateAmount(), dispatch(_dependency16.GameEvent.CREATE_REPLAY_FLOW);
    }), this.on(_dependency1.SlotFrameworkEvent.REPLAY_NEXT_SPIN, function () {
      _dependency24.default.index++;
      var t = _dependency24.default.index,
        a = _dependency24.default.getData().betData.theResult[t];
      e.data.setReplayCurrentView(a), dispatch(_dependency16.GameEvent.CREATE_REPLAY_STOP_SPIN_FLOW);
    }), this.on(_dependency16.GameEvent.FG_START_COUNT_FOR_PLAY_LOG, function () {
      e.fgPlayLogIntervalId = setInterval(function () {
        dispatch(_dependency16.GameEvent.FG_UPDATE_SETTING_FOR_PLAY_LOG, {
          type: "game",
          data: {}
        });
      }, 3e4);
    }), this.on(_dependency16.GameEvent.FG_STOP_COUNT_FOR_PLAY_LOG, function () {
      clearInterval(e.fgPlayLogIntervalId);
    }), this.on(_dependency16.GameEvent.PROCESS_REPLAY_IN_GAME, function (t) {
      e.view.reset(), _dependency2.tween(e).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, App.uiManager.open({
                type: _dependency19.default,
                bundle: e.bundle,
                args: _dependency15.EInitName.INIT_REPLAY
              });
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      }))).start();
    }), this.on(_dependency16.GameEvent.RESET_AND_OPEN_GAME_VIEW, function (t) {
      _dependency24.default.reset();
      var i = t.data;
      e.view.reset(), _dependency2.tween(e).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, App.uiManager.open({
                type: _dependency19.default,
                bundle: e.bundle,
                args: i
              });
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      }))).start();
    }), this.on(_dependency16.GameEvent.SHAKE_NODE, function (t) {
      e.view.shakeView();
    }), this.on(_dependency16.GameEvent.PLAY_BGM, function (t) {
      e.view.playBGM(t.data);
    }), this.on(_dependency16.GameEvent.PLAY_BTM, function (t) {
      var a = t.data,
        n = a.url,
        i = a.loop;
      e.view.playBTM(n, i);
    }), this.on(_dependency16.GameEvent.STOP_BTM, function (t) {
      e.view.stopBTM(t.data);
    }), this.on(_dependency16.GameEvent.MUSIC_VOLUME_MULTIPLE, function (t) {
      e.view.mutipleMusicVolume(t.data);
    }), this.on(_dependency1.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, function (t) {
      e.view.buyFeatureSpin(t.data);
    }), this.on(_dependency16.GameEvent.REPLAY_START_QUICK_STOP, function () {
      e.view.replayQuickStop();
    });
  }, _dependency.createClass(r, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency15.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), r;
}(_dependency8.Logic));
_dependency2.cclegacy._RF.pop();
