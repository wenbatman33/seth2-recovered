// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-Resource";
import * as _dependency6 from "../../shared/scripts/main-ResourceLoader";
import * as _dependency7 from "../../shared/scripts/main-Logic";
import * as _dependency8 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency1 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-type2";
import * as _dependency13 from "../../shared/scripts/slotFramework-ExitUtils";
import * as _dependency14 from "./g1009-ParseResponse";
import * as _dependency15 from "./g1009-FlowIDs";
import * as _dependency16 from "./g1009-BigwinView";
import * as _dependency17 from "./g1009-BuyFeatureView";
import * as _dependency18 from "./g1009-FreeGameAlertView";
import * as _dependency19 from "./g1009-TreasuresView";
import * as _dependency20 from "./g1009-GameConfigModel";
import * as _dependency21 from "./g1009-GameData";
import * as _dependency22 from "./g1009-GameEvent";
import * as _dependency23 from "./g1009-GameSender";
import * as _dependency24 from "./g1009-GameView";
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
var e, a, n, i, r, o, l, s, u, c, p, E, d, A, _, f, I, S, y, R, T, L, g, h, v, P, m, w, C, D, O, N, b, M, U;
_dependency2.cclegacy._RF.push({}, "eab18k4U4VBmL9CvuJA0z/Q", "GameLogic", void 0);
_publish("GameLogic", function (t) {
  var _nativeConstructor = r;
  function r() {
    for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++) n[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).loader = new _dependency6.default(), e.earlySpinDelayingEvent = null, e.earlySpinDelayingSetTimeout = null, e.earlyIntervalId = 1, e;
  }
  _dependency.inheritsLoose(r, t);
  var d = r.prototype;
  return d.onLoad = function (e) {
    t.prototype.onLoad.call(this, e), this._init();
  }, d.onDestroy = function () {
    this.loader.unLoadResources(), this.data.clear(), t.prototype.onDestroy.call(this);
  }, d.start = function () {
    App.senderManager.get(_dependency23.GameSender).init();
  }, d.reset = function () {
    _dependency2.Tween.stopAll(), App.flowManager.killAllFlow(), App.uiManager.closeExcept([]), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency12.ESpinStatus.IDLE
    }), this.removeAllEvents();
  }, d._init = function () {
    this.loadResources();
  }, d.loadResources = function () {
    this.loader.getLoadResources = function () {
      return [];
    }, this.loader.onLoadComplete = function (t) {
      _dependency5.Resource.LoaderError.SUCCESS;
    }, this.loader.loadResources();
  }, d.addEvents = function () {
    var t = this;
    this.on(_dependency0.SlotFrameworkEvent.INIT_RESPONSE, function (t) {
      _dependency14.default.parseNewInit(t);
    }), this.on(_dependency0.SlotFrameworkEvent.SPIN_RESPONSE, function (t) {
      dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: t.engine.spinId
        }
      }), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: t.platform.player.balance.amount
        }
      }), _dependency14.default.parseNewSpin(t);
    }), this.on(_dependency0.SlotFrameworkEvent.EARLY_SPIN_RESPONSE, function (t) {
      _dependency14.default.parseEarlySpin(t);
    }), this.on(_dependency0.SlotFrameworkEvent.EARLY_CLOSE_RESPONSE, function (t) {
      _dependency14.default.tempEarlyClose(t);
    }), this.on(_dependency0.SlotFrameworkEvent.CLOSE_RESPONSE, function (t) {
      _dependency14.default.parseCloseSpin(t);
    }), this.on(_dependency0.SlotFrameworkEvent.REPLAY_RESPONSE, function (t) {
      _dependency14.default.parseReplay(t);
    }), this.on(_dependency0.SlotFrameworkEvent.REPLAY_AGAIN, function (t) {
      _dependency14.default.parseReplayAgain(t);
    }), this.on(_dependency0.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, function (t) {
      var e = {
          text: App.getLanguage("disconnect", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
          confirmCb: function (t) {
            a();
          },
          bbrCb: function (t) {},
          needCloseAlert: !1,
          tag: _dependency3.ViewZOrder.TopErrorAlert,
          isDisableBlockInput: _dependency11.default.isReplay && _dependency2.game.isPaused()
        },
        a = function () {
          _dependency13.ExitUtils.exit();
        };
      App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
    }), this.on(_dependency0.SlotFrameworkEvent.WARN_RESPONSE, function (t) {
      var e = {
          text: t.message,
          confirmCb: function (t) {
            a();
          },
          bbrCb: function (t) {},
          needCloseAlert: !1,
          tag: _dependency3.ViewZOrder.TopErrorAlert
        },
        a = function () {
          _dependency13.ExitUtils.exit();
        };
      App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
    }), this.on(_dependency0.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      t.view.init();
    }), this.on(_dependency22.GameEvent.PARSER_SPIN_COMPLETED, function () {
      dispatch(_dependency22.GameEvent.CREATE_STOP_SPIN_FLOW);
    }), this.on(_dependency22.GameEvent.START_QUICK_STOP, function () {
      _dependency2.Tween.stopAllByTarget(t);
    }), this.on(_dependency22.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function () {
      t.data.getIsFGFinish() || t.data.getIsSuperMainGameFinish() || dispatch(_dependency22.GameEvent.SPIN_CLOSED_FLOW);
    }), this.on(_dependency22.GameEvent.QUICK_STOP_TOTAL_WINNINGS, function (t) {
      dispatch(_dependency0.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: t.data
      });
    }), this.on(_dependency22.GameEvent.SPIN_START, function () {}), this.on(_dependency22.GameEvent.SPIN_CLOSED, function () {}), this.on(_dependency0.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, function (t) {
      var e = t.data,
        a = _dependency10.default.getData().player.settings.autoPlay.numberOfPlays[e];
      _dependency8.default.active = !0, _dependency8.default.spinsRemaining = a, _dependency8.default.active && dispatch(_dependency22.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          test: null
        }
      });
    }), this.on(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN, function () {
      if (_dependency8.default.active = !1, _dependency8.default.spinsRemaining = 0, App.flowManager.killOneFlow(_dependency15.FlowIDs.EARLY_SPIN_FLOW), t.data.isEarlyCloseFlag = !1, t.data.isEarlyFlag = !1, t.data.isSendOutEarlyFlag) null == t.data.earlyData ? Log.w("已送出預跑但還未收到資料") : (Log.w("已送出預跑且收到資料"), clearInterval(t.earlyIntervalId), t.earlyIntervalId > -1 && (t.earlyIntervalId = -1, dispatch(_dependency22.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          test: null,
          earlySpin: !0
        }
      })));else {
        Log.w("尚未送出可直接取消預跑"), t.data.delayEarlyTween && (t.data.delayEarlyTween.stop(), t.data.delayEarlyTween.removeSelf());
        var e = !1;
        t.earlyIntervalId > -1 && (e = !0, clearInterval(t.earlyIntervalId), t.earlyIntervalId = -1), t.data.isOpenEarlyFlag && (t.data.isOpenEarlyFlag = !1, t.data.isSendClose || (Log.w("還未結算:::::::::::"), e && dispatch(_dependency0.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: t.data.getData().spinId
        })));
      }
    }), this.on(_dependency22.GameEvent.EARLY_SPIN_DELAYING, function (e) {
      var a = _dependency20.default.quickStopCount,
        n = _dependency20.default.isTurbo;
      t.earlySpinDelayingEvent = e, t.data.earlySpinDelaying = !0, clearTimeout(t.earlySpinDelayingSetTimeout), 1 === a || n ? (clearTimeout(t.earlySpinDelayingSetTimeout), e.complete(), t.data.earlySpinDelaying = !1) : t.earlySpinDelayingSetTimeout = setTimeout(function () {
        e.complete(), t.data.earlySpinDelaying = !1;
      }, 1875);
    }), this.on(_dependency22.GameEvent.SET_EARLY_SPIN_DELAYING_COMPLETED, function () {
      t.earlySpinDelayingEvent && t.earlySpinDelayingEvent.complete();
    }), this.on(_dependency22.GameEvent.AUTO_SPIN_STATUS, function () {}), this.on(_dependency22.GameEvent.EARLY_DATA_PARSER_TO_SPIN_DATA, function () {
      var e = t.data.earlyData;
      Log.w("EARLY_DATA_PARSER_TO_SPIN_DATA::::", e);
      var a = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var n = e.platform.player.balance.updatedAt;
        _dependency10.default.updateBalance(a, n);
      } else _dependency10.default.amount = e.platform.player.balance.amount;
      null != e.platform.player.balance.betAmount && (_dependency10.default.betAmount = e.platform.player.balance.betAmount), _dependency14.default.parseNewEarlySpin(e), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: e.engine.spinId
        }
      }), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency10.default.amount
        }
      }), dispatch(_dependency22.GameEvent.PARSER_SPIN_COMPLETED);
    }), this.on(_dependency22.GameEvent.EARLY_CLOSE_DATA_PARSER_TO_DATA, function () {
      var e = t.data.earlyCloseData;
      t.data.isEarlyCloseFlag = !1;
      var a = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var n = e.platform.player.balance.updatedAt;
        _dependency10.default.updateBalance(a, n);
      } else _dependency10.default.amount = e.platform.player.balance.amount;
      dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency10.default.amount
        }
      }), dispatch(_dependency22.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), t.data.earlyCloseData = null;
    }), this.on(_dependency22.GameEvent.WAIT_EARLY_DATA_RETRY, function (e) {
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
              _dependency13.ExitUtils.exit();
            };
          App.gameAlert.show(o, _dependency3.ViewZOrder.TopErrorAlert);
        }
        i && r && (e.complete(), clearInterval(t.data.waitEarlyDataRetryInterval));
      }, 30);
    }), this.on(_dependency22.GameEvent.WAIT_EARLY_SPIN_RESPONSE, function () {
      null == t.data.earlyData && t.data.isOpenEarlyFlag && (t.earlyIntervalId = setInterval(function () {
        t.data.earlyData && (clearInterval(t.earlyIntervalId), dispatch(_dependency22.GameEvent.CREATE_SPIN_FLOW, {
          data: {
            spinId: null,
            test: null,
            earlySpin: !0
          }
        }), t.earlyIntervalId = -1);
      }, 100));
    }), this.on(_dependency22.GameEvent.KILL_WAIT_EARLY_DATA_RETRY_INTERVAL, function (e) {
      clearInterval(t.data.waitEarlyDataRetryInterval);
    }), this.on(_dependency22.GameEvent.KILL_WAIT_EARLY_CLOSE_DATA_RETRY_INTERVAL, function (e) {
      clearInterval(t.data.waitEarlyCloseDataRetryInterval);
    }), this.on(_dependency22.GameEvent.WAIT_EARLY_CLOSE_DATA_RETRY, function (e) {
      var a = 0;
      t.data.waitEarlyCloseDataRetryInterval = setInterval(function () {
        var n = t.data,
          i = n.isEarlyCloseFlag,
          r = n.earlyCloseData;
        if (a++, Log.d("wait close", a), a > 333) {
          clearInterval(t.data.waitEarlyCloseDataRetryInterval);
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
              _dependency13.ExitUtils.exit();
            };
          App.gameAlert.show(o, _dependency3.ViewZOrder.TopErrorAlert);
        }
        i && r && (e.complete(), clearInterval(t.data.waitEarlyCloseDataRetryInterval));
      }, 30);
    }), this.on(_dependency22.GameEvent.SHOW_BIGWIN, function (e) {
      var i = e.data,
        r = t.data.getData().parser.bigwinReach.level,
        o = _dependency1.default.getData(),
        l = o.smallPrizeDelay,
        c = o.bigPrizeDelay,
        p = i.isRoundWin ? 0 : r <= 3 ? l : c;
      App.globalAudio.isMusicOn = !1, _dependency2.tween(t).bindNodeState(false).delay(p).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function a() {
        return _dependency.regeneratorRuntime().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return App.globalAudio.isMusicOn = !0, a.next = 3, App.uiManager.open({
                type: _dependency16.BigwinView,
                bundle: t.bundle,
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
    }), this.on(_dependency22.GameEvent.SHOW_FG_INTRO_ALERT, function (e) {
      App.uiManager.open({
        type: _dependency18.FreeGameAlertView,
        bundle: t.bundle,
        zIndex: _dependency3.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (t) {
        t.showIntroAlert();
      });
    }), this.on(_dependency22.GameEvent.SHOW_FG_SUMMARY_ALERT, function (e) {
      App.uiManager.open({
        type: _dependency18.FreeGameAlertView,
        bundle: t.bundle,
        zIndex: _dependency3.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (t) {
        t.showSummaryAlert(e.complete);
      });
    }), this.on(_dependency22.GameEvent.OPEN_FEATURE_POPUP, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(a) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, App.uiManager.open({
              type: _dependency17.BuyFeatureView,
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
    }))), this.on(_dependency22.GameEvent.SHOW_TREASURE_VIEW, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(a) {
      var i;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, App.uiManager.open({
              type: _dependency19.TreasuresView,
              bundle: t.bundle,
              zIndex: _dependency3.ViewZOrder.UI,
              name: "BIG WIN"
            });
          case 2:
            i = e.sent, App.globalAudio.pauseMusic(), i.showTreasureWin(a.complete);
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency22.GameEvent.PARSER_REPLAY_COMPLETED, function (e) {
      e ? (t.view.initReplay(), t.view.playBGM(_dependency20.EBGM.MAIN_GAME)) : t.view.againReplayUpdateAmount(), dispatch(_dependency22.GameEvent.CREATE_REPLAY_FLOW);
    }), this.on(_dependency0.SlotFrameworkEvent.REPLAY_NEXT_SPIN, function () {
      _dependency11.default.index++;
      var e = _dependency11.default.index,
        a = _dependency11.default.getData().betData.theResult[e];
      t.data.setReplayCurrentView(a), dispatch(_dependency22.GameEvent.CREATE_REPLAY_STOP_SPIN_FLOW);
    }), this.on(_dependency22.GameEvent.REPLAY_START_QUICK_STOP, function () {
      t.view.replayQuickStop();
    }), this.on(_dependency22.GameEvent.PROCESS_REPLAY_IN_GAME, function (e) {
      t.view.reset(), _dependency2.tween(t).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency24.default,
                bundle: t.bundle,
                args: _dependency21.EInitName.INIT_REPLAY
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency22.GameEvent.RESET_AND_OPEN_GAME_VIEW, function (e) {
      var i = e.data;
      _dependency11.default.reset(), t.view.reset(), _dependency2.tween(t).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency24.default,
                bundle: t.bundle,
                args: i
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency22.GameEvent.SHAKE_NODE, function (e) {
      t.view.shakeView();
    }), this.on(_dependency22.GameEvent.PLAY_BGM, function (e) {
      t.view.playBGM(e.data);
    }), this.on(_dependency22.GameEvent.PLAY_BTM, function (e) {
      var a = e.data,
        n = a.url,
        i = a.loop;
      t.view.playBTM(n, i);
    }), this.on(_dependency22.GameEvent.STOP_BTM, function (e) {
      t.view.stopBTM(e.data);
    }), this.on(_dependency22.GameEvent.PLAY_REPEAT_BTM, function (e) {
      var a = e.data,
        n = a.url,
        i = a.loop;
      t.view.playRepeatBTM(n, i);
    }), this.on(_dependency22.GameEvent.MUSIC_VOLUME_MULTIPLE, function (e) {
      t.view.multipleMusicVolume(e.data);
    }), this.on(_dependency0.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, function (e) {
      t.view.buyFeatureSpin(e.data);
    }), this.on(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM, function () {
      t.view.playBTM(_dependency20.EBTM.UI_CLICK);
    }), this.on(_dependency0.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM, function () {
      t.view.playBTM(_dependency20.EBTM.UI_CLOSE_CLICK);
    });
  }, _dependency.createClass(r, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency21.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), r;
}(_dependency7.Logic));
_dependency2.cclegacy._RF.pop();
