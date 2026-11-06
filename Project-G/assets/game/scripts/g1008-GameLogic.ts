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
import * as _dependency12 from "./g1008-ParseResponse";
import * as _dependency13 from "./g1008-BigwinView";
import * as _dependency14 from "./g1008-FreeGameAlertView";
import * as _dependency15 from "./g1008-GameData";
import * as _dependency16 from "./g1008-GameEvent";
import * as _dependency17 from "./g1008-GameSender";
import * as _dependency18 from "./g1008-types";
import * as _dependency19 from "./g1008-GameView";
import * as _dependency20 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency21 from "./g1008-BuyFeatureView";
import * as _dependency22 from "./g1008-FlowIDs";
import * as _dependency23 from "./g1008-GameConfigModel";
import * as _dependency24 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency25 from "./g1008-TreasuresView";
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
var e, a, n, i, r, o, l, s, u, c, p, d, E, A, _, f, S, I, y, g, T, R, m, h, L, P, v, w, O, D, C, N, b, F;
_dependency2.cclegacy._RF.push({}, "f8f24pR/MBLvLWB2QRhXDQW", "GameLogic", void 0);
_publish("GameLogic", function (t) {
  var _nativeConstructor = r;
  function r() {
    for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++) n[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).loader = new _dependency7.default(), e.earlySpinDelayingEvent = null, e.earlySpinDelayingSetTimeout = null, e.earlyIntervalId = 1, e.fgPlayLogIntervalId = -1, e;
  }
  _dependency.inheritsLoose(r, t);
  var E = r.prototype;
  return E.onLoad = function (e) {
    t.prototype.onLoad.call(this, e), this._init();
  }, E.onDestroy = function () {
    this.loader.unLoadResources(), this.data.clear(), t.prototype.onDestroy.call(this);
  }, E.start = function () {
    App.senderManager.get(_dependency17.GameSender).init();
  }, E.reset = function () {
    _dependency2.Tween.stopAll(), App.flowManager.killAllFlow(), App.uiManager.closeExcept([]), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency26.ESpinStatus.IDLE
    }), this.removeAllEvents();
  }, E._init = function () {
    this.loadResources();
  }, E.loadResources = function () {
    this.loader.getLoadResources = function () {
      return [];
    }, this.loader.onLoadComplete = function (t) {
      _dependency6.Resource.LoaderError.SUCCESS;
    }, this.loader.loadResources();
  }, E.setGameType = function (t) {
    var e;
    this.data.currentGameType = "spin" === (null == (e = t.engine.gameState) ? void 0 : e.action) ? _dependency18.EGameType.MAIN_GAME : _dependency18.EGameType.FREE_GAME;
  }, E.addEvents = function () {
    var t = this;
    this.on(_dependency1.SlotFrameworkEvent.INIT_RESPONSE, function (t) {
      t.engine.gameState.length ? _dependency12.default.parseNewInit(t) : _dependency12.default.parseInit(t);
    }), this.on(_dependency1.SlotFrameworkEvent.SPIN_RESPONSE, function (t) {
      dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: t.engine.spinId
        }
      });
      var e = _dependency10.default.amount;
      _dependency10.default.getData().theme && "xin-star" == _dependency10.default.getData().theme && (e = _dependency10.default.betAmount), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: e
        }
      }), _dependency12.default.parseNewSpin(t);
    }), this.on(_dependency1.SlotFrameworkEvent.EARLY_SPIN_RESPONSE, function (t) {
      _dependency12.default.parseEarlySpin(t);
    }), this.on(_dependency1.SlotFrameworkEvent.EARLY_CLOSE_RESPONSE, function (t) {
      _dependency12.default.tempEarlyClose(t);
    }), this.on(_dependency1.SlotFrameworkEvent.CLOSE_RESPONSE, function (t) {
      _dependency12.default.parseCloseSpin(t);
    }), this.on(_dependency1.SlotFrameworkEvent.REPLAY_RESPONSE, function (t) {
      _dependency12.default.parseReplay(t);
    }), this.on(_dependency1.SlotFrameworkEvent.REPLAY_AGAIN, function (t) {
      _dependency12.default.parseReplayAgain(t);
    }), this.on(_dependency1.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, function (t) {
      if ("xin-star" == _dependency10.default.getData().theme) {
        var e = {
            text: App.getLanguage("disconnectXinStar", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
            confirmCb: function (t) {
              a();
            },
            bbrCb: function (t) {},
            needCloseAlert: !1,
            tag: _dependency3.ViewZOrder.TopErrorAlert,
            titleisHidden: !0,
            expandisHidden: !0,
            confirmisHidden: !0
          },
          a = function () {
            _dependency5.ExitUtils.exit();
          };
        App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
      } else {
        var n = {
            text: App.getLanguage("disconnect", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
            confirmCb: function (t) {
              i();
            },
            bbrCb: function (t) {},
            needCloseAlert: !1,
            tag: _dependency3.ViewZOrder.TopErrorAlert
          },
          i = function () {
            _dependency5.ExitUtils.exit();
          };
        App.gameAlert.show(n, _dependency3.ViewZOrder.TopErrorAlert);
      }
    }), this.on(_dependency1.SlotFrameworkEvent.WARN_RESPONSE, function (t) {
      if ("xin-star" == _dependency10.default.getData().theme) {
        var e = {
            text: App.getLanguage("disconnectXinStar", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
            confirmCb: function (t) {
              a();
            },
            bbrCb: function (t) {},
            needCloseAlert: !1,
            tag: _dependency3.ViewZOrder.TopErrorAlert,
            titleisHidden: !0,
            expandisHidden: !0,
            confirmisHidden: !0
          },
          a = function () {
            _dependency5.ExitUtils.exit();
          };
        App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
      } else {
        var n = {
            text: t.message,
            confirmCb: function (t) {
              i();
            },
            bbrCb: function (t) {},
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
      t.view.init();
    }), this.on(_dependency16.GameEvent.PARSER_SPIN_COMPLETED, function () {
      dispatch(_dependency16.GameEvent.CREATE_STOP_SPIN_FLOW);
    }), this.on(_dependency16.GameEvent.START_QUICK_STOP, function () {
      _dependency2.Tween.stopAllByTarget(t);
    }), this.on(_dependency16.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function () {
      t.data.getIsFGFinish() || dispatch(_dependency16.GameEvent.SPIN_CLOSED_FLOW);
    }), this.on(_dependency16.GameEvent.QUICK_STOP_TOTAL_WINNINGS, function (t) {
      dispatch(_dependency1.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: t.data
      });
    }), this.on(_dependency16.GameEvent.SPIN_START, function () {}), this.on(_dependency16.GameEvent.SPIN_CLOSED, function () {}), this.on(_dependency1.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, function (t) {
      var e = t.data,
        a = _dependency10.default.getData().player.settings.autoPlay.numberOfPlays[e];
      _dependency9.default.active = !0, _dependency9.default.spinsRemaining = a, _dependency9.default.active && dispatch(_dependency16.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          cheat: null
        }
      });
    }), this.on(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN, function () {
      if (_dependency9.default.active = !1, _dependency9.default.spinsRemaining = 0, App.flowManager.killOneFlow(_dependency22.FlowIDs.EARLY_SPIN_FLOW), t.data.isEarlyCloseFlag = !1, t.data.isEarlyFlag = !1, t.data.isSendOutEarlyFlag) null == t.data.earlyData ? Log.w("已送出預跑但還未收到資料") : (Log.w("已送出預跑且收到資料"), clearInterval(t.earlyIntervalId), t.earlyIntervalId > -1 && (t.earlyIntervalId = -1, dispatch(_dependency16.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          cheat: null,
          earlySpin: !0
        }
      })));else {
        Log.w("尚未送出可直接取消預跑"), t.data.delayEarlyTween && (t.data.delayEarlyTween.stop(), t.data.delayEarlyTween.removeSelf());
        var e = !1;
        t.earlyIntervalId > -1 && (e = !0, clearInterval(t.earlyIntervalId), t.earlyIntervalId = -1), t.data.isOpenEarlyFlag && (t.data.isOpenEarlyFlag = !1, t.data.isSendClose || (Log.w("還未結算:::::::::::"), e && dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: t.data.getData().spinId
        })));
      }
    }), this.on(_dependency16.GameEvent.EARLY_SPIN_DELAYING, function (e) {
      t.earlySpinDelayingEvent = e;
      t.data.earlySpinDelaying = !0;
      var a = _dependency23.default.quickStopCount,
        n = _dependency23.default.isTurbo;
      clearTimeout(t.earlySpinDelayingSetTimeout), 1 === a || n ? (clearTimeout(t.earlySpinDelayingSetTimeout), e.complete(), t.data.earlySpinDelaying = !1) : t.earlySpinDelayingSetTimeout = setTimeout(function () {
        e.complete(), t.data.earlySpinDelaying = !1;
      }, 1875);
    }), this.on(_dependency16.GameEvent.SET_EARLY_SPIN_DELAYING_COMPLETED, function () {
      t.earlySpinDelayingEvent && t.earlySpinDelayingEvent.complete();
    }), this.on(_dependency16.GameEvent.AUTO_SPIN_STATUS, function () {}), this.once(_dependency1.SlotFrameworkEvent.SWIPE_UP, function () {
      _dependency11.default.isComplete() && (App.gameAlert.isCurrentShow(_dependency3.ViewZOrder.TopErrorAlert) || App.gameLoading.complete());
    }), this.on(_dependency16.GameEvent.EARLY_DATA_PARSER_TO_SPIN_DATA, function () {
      var e = t.data.earlyData;
      Log.w("EARLY_DATA_PARSER_TO_SPIN_DATA::::", e);
      var a = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var n = e.platform.player.balance.updatedAt;
        _dependency10.default.updateBalance(a, n);
      } else _dependency10.default.amount = e.platform.player.balance.amount;
      null != e.platform.player.balance.betAmount && (_dependency10.default.betAmount = e.platform.player.balance.betAmount), _dependency12.default.parseNewEarlySpin(e), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: e.engine.spinId
        }
      });
      var i = _dependency10.default.amount;
      _dependency10.default.getData().theme && "xin-star" == _dependency10.default.getData().theme && (i = _dependency10.default.betAmount), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: i
        }
      }), dispatch(_dependency16.GameEvent.PARSER_SPIN_COMPLETED);
    }), this.on(_dependency16.GameEvent.EARLY_CLOSE_DATA_PARSER_TO_DATA, function () {
      var e = t.data.earlyCloseData;
      t.data.isEarlyCloseFlag = !1;
      var a = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var n = e.platform.player.balance.updatedAt;
        _dependency10.default.updateBalance(a, n);
      } else _dependency10.default.amount = e.platform.player.balance.amount;
      dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency10.default.amount
        }
      }), dispatch(_dependency16.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), t.data.earlyCloseData = null;
    }), this.on(_dependency16.GameEvent.WAIT_EARLY_DATA_RETRY, function (e) {
      var a = 0;
      t.data.waitEarlyDataRetryInterval = setInterval(function () {
        var n = t.data,
          i = n.isEarlyFlag,
          r = n.earlyData;
        if (++a > 333) {
          Log.e("EARLY_DATA timeout " + 30 * a / 1e3 + "s"), clearInterval(t.data.waitEarlyDataRetryInterval);
          var o = {
              text: "early spin" + App.getLanguage("timeoutError", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
              confirmCb: function (t) {
                l();
              },
              bbrCb: function (t) {},
              needCloseAlert: !1,
              code: "front",
              tag: _dependency3.ViewZOrder.TopErrorAlert
            },
            l = function () {
              _dependency5.ExitUtils.exit();
            };
          App.gameAlert.show(o, _dependency3.ViewZOrder.TopErrorAlert);
        }
        i && r && (e.complete(), clearInterval(t.data.waitEarlyDataRetryInterval));
      }, 30);
    }), this.on(_dependency16.GameEvent.WAIT_EARLY_SPIN_RESPONSE, function () {
      null == t.data.earlyData && t.data.isOpenEarlyFlag && (t.earlyIntervalId = setInterval(function () {
        t.data.earlyData && (clearInterval(t.earlyIntervalId), dispatch(_dependency16.GameEvent.CREATE_SPIN_FLOW, {
          data: {
            spinId: null,
            cheat: null,
            earlySpin: !0
          }
        }), t.earlyIntervalId = -1);
      }, 100));
    }), this.on(_dependency16.GameEvent.KILL_WAIT_EARLY_DATA_RETRY_INTERVAL, function (e) {
      clearInterval(t.data.waitEarlyDataRetryInterval);
    }), this.on(_dependency16.GameEvent.KILL_WAIT_EARLY_CLOSE_DATA_RETRY_INTERVAL, function (e) {
      clearInterval(t.data.waitEarlyCloseDataRetryInterval);
    }), this.on(_dependency16.GameEvent.WAIT_EARLY_CLOSE_DATA_RETRY, function (e) {
      var a = 0;
      t.data.waitEarlyCloseDataRetryInterval = setInterval(function () {
        var n = t.data,
          i = n.isEarlyCloseFlag,
          r = n.earlyCloseData;
        if (a++, Log.d("wait close", a), a > 333) {
          Log.e("EARLY_CLOSE_DATA timeout " + 30 * a / 1e3 + "s"), clearInterval(t.data.waitEarlyCloseDataRetryInterval);
          var o = {
              text: "early close" + App.getLanguage("timeoutError", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
              confirmCb: function (t) {
                l();
              },
              bbrCb: function (t) {},
              needCloseAlert: !1,
              code: "front",
              tag: _dependency3.ViewZOrder.TopErrorAlert
            },
            l = function () {
              _dependency5.ExitUtils.exit();
            };
          App.gameAlert.show(o, _dependency3.ViewZOrder.TopErrorAlert);
        }
        i && r && (e.complete(), clearInterval(t.data.waitEarlyCloseDataRetryInterval));
      }, 30);
    }), this.on(_dependency16.GameEvent.SHOW_BIGWIN, function (e) {
      var i = e.data,
        r = t.data.getData().parser.bigwinReach.level,
        o = _dependency20.default.getData(),
        u = o.smallPrizeDelay,
        c = o.bigPrizeDelay,
        p = i.isRoundWin ? 0 : r <= 3 ? u : c;
      App.globalAudio.isMusicOn = !1, _dependency2.tween(t).bindNodeState(false).delay(p).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function a() {
        return _dependency.regeneratorRuntime().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return App.globalAudio.isMusicOn = !0, a.next = 3, App.uiManager.open({
                type: _dependency13.BigwinView,
                bundle: t.data.module,
                zIndex: _dependency3.ViewZOrder.UI,
                name: "BIG WIN"
              });
            case 3:
              a.sent.showBigwin(e.complete, e.data);
            case 5:
            case "end":
              return a.stop();
          }
        }, a);
      }))).start();
    }), this.on(_dependency16.GameEvent.SHOW_TREASURE_VIEW, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(a) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return App.globalAudio.pauseMusic(), e.next = 3, App.uiManager.open({
              type: _dependency25.TreasuresView,
              bundle: t.data.module,
              zIndex: _dependency3.ViewZOrder.UI,
              name: "BIG WIN"
            });
          case 3:
            e.sent.showTreasureWin(a.complete);
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency16.GameEvent.SHOW_FG_INTRO_ALERT, function (e) {
      App.uiManager.open({
        type: _dependency14.FreeGameAlertView,
        bundle: t.data.module,
        zIndex: _dependency3.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (t) {
        t.showIntroAlert();
      });
    }), this.on(_dependency16.GameEvent.SHOW_FG_SUMMARY_ALERT, function (e) {
      App.uiManager.open({
        type: _dependency14.FreeGameAlertView,
        bundle: t.data.module,
        zIndex: _dependency3.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (t) {
        t.showSummaryAlert(e.complete);
      });
    }), this.on(_dependency16.GameEvent.OPEN_FEATURE_POPUP, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(a) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, App.uiManager.open({
              type: _dependency21.BuyFeatureView,
              bundle: t.bundle,
              zIndex: _dependency3.ViewZOrder.UI,
              name: "購買免費遊戲"
            });
          case 2:
            e.sent.openPopup();
          case 4:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency16.GameEvent.PARSER_REPLAY_COMPLETED, function (e) {
      e ? t.view.initReplay() : t.view.againReplayUpdateAmount(), dispatch(_dependency16.GameEvent.CREATE_REPLAY_FLOW);
    }), this.on(_dependency1.SlotFrameworkEvent.REPLAY_NEXT_SPIN, function () {
      _dependency24.default.index++;
      var e = _dependency24.default.index,
        a = _dependency24.default.getData().betData.theResult[e];
      t.data.setReplayCurrentView(a), dispatch(_dependency16.GameEvent.CREATE_REPLAY_STOP_SPIN_FLOW);
    }), this.on(_dependency16.GameEvent.FG_START_COUNT_FOR_PLAY_LOG, function () {
      t.fgPlayLogIntervalId = setInterval(function () {
        dispatch(_dependency16.GameEvent.FG_UPDATE_SETTING_FOR_PLAY_LOG, {
          type: "game",
          data: {}
        });
      }, 3e4);
    }), this.on(_dependency16.GameEvent.FG_STOP_COUNT_FOR_PLAY_LOG, function () {
      clearInterval(t.fgPlayLogIntervalId);
    }), this.on(_dependency16.GameEvent.PROCESS_REPLAY_IN_GAME, function (e) {
      t.view.reset(), _dependency2.tween(t).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency19.default,
                bundle: t.bundle,
                args: _dependency15.EInitName.INIT_REPLAY
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency16.GameEvent.RESET_AND_OPEN_GAME_VIEW, function (e) {
      _dependency24.default.reset();
      var i = e.data;
      t.view.reset(), _dependency2.tween(t).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency19.default,
                bundle: t.bundle,
                args: i
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency16.GameEvent.SHAKE_NODE, function (e) {
      t.view.shakeView();
    }), this.on(_dependency16.GameEvent.PLAY_BGM, function (e) {
      t.view.playBGM(e.data);
    }), this.on(_dependency16.GameEvent.PLAY_BTM, function (e) {
      var a = e.data,
        n = a.url,
        i = a.loop;
      t.view.playBTM(n, i);
    }), this.on(_dependency16.GameEvent.STOP_BTM, function (e) {
      t.view.stopBTM(e.data);
    }), this.on(_dependency16.GameEvent.MUSIC_VOLUME_MULTIPLE, function (e) {
      t.view.mutipleMusicVolume(e.data);
    }), this.on(_dependency1.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, function (e) {
      t.view.buyFeatureSpin(e.data);
    }), this.on(_dependency16.GameEvent.REPLAY_START_QUICK_STOP, function () {
      t.view.replayQuickStop();
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
