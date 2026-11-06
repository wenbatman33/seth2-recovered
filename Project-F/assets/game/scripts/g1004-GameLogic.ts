// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/slotFramework-ExitUtils";
import * as _dependency6 from "../../shared/scripts/main-Logic";
import * as _dependency7 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-ReadyBundleModel";
import * as _dependency10 from "./g1004-GameData";
import * as _dependency11 from "./g1004-GameEvent";
import * as _dependency12 from "./g1004-GameSender";
import * as _dependency13 from "./g1004-GameView";
import * as _dependency14 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency15 from "./g1004-GameConfigModel";
import * as _dependency16 from "./g1004-BuyFeatureView";
import * as _dependency17 from "./g1004-BigWinShowView";
import * as _dependency18 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency19 from "./g1004-StateMachineManager";
import * as _dependency20 from "../../shared/scripts/slotFramework-type2";
import * as _dependency21 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as EInitName };
var _export2;
export { _export2 as GameLogic };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EInitName":
      _export = value;
      break;
    case "GameLogic":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t, s, i, r, _, a, o, c, E, f, S, u, A, N, T, h, p, O, I, R, d, P, M, L, w, C, D, l, g, W, G;
var H;
_publish("EInitName", void 0), _dependency2.cclegacy._RF.push({}, "b126ehy3QZFiLg5Cf5/yzAz", "GameLogic", void 0), function (n) {
  n.INIT_GAME = "init_game", n.INIT_REPLAY = "init_replay";
}(H || (H = _publish("EInitName", {})));
_publish("GameLogic", function (n) {
  var _nativeConstructor = r;
  function r() {
    return Reflect.construct(n, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(r, n);
  var S = r.prototype;
  return S.onDestroy = function () {
    this.data.clear(), n.prototype.onDestroy.call(this);
  }, S.start = function () {
    App.senderManager.get(_dependency12.GameSender).init();
  }, S.reset = function () {
    _dependency2.Tween.stopAll(), gsap.globalTimeline.clear(), gsap.globalTimeline.kill(), App.uiManager.closeExcept([]), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !1), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency20.ESpinStatus.IDLE
    }), this.removeEvents();
  }, S.addEvents = function () {
    var n = this;
    this.on(_dependency11.GameEvent.LOAD_COMPLETE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.LOAD_COMPLETE));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.START_RESUME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.START_RESUME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.START_FORTUNE_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.START_FORTUNE_GAME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.HEAVENLY_TREASURES_RESULT_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.HEAVENLY_TREASURES_RESULT_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.START_LUCKY_WEALTH_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.START_LUCKY_WEALTH_GAME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.DROP_TREASURE_RESULT_RESP, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.DROP_TREASURE_RESULT_RESP));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_SYMBOLS_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_SYMBOLS_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_WIN_LINE_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_WIN_LINE_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_DROP_SYMBOL_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_DROP_SYMBOL_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_SYMBOL_TRANSFORM_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_SYMBOL_TRANSFORM_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_SCATTER_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_SCATTER_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_JACKPOT_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_JACKPOT_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.INCREASE_FG_REMAINING_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.INCREASE_FG_REMAINING_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_TOTAL_WIN_CASH_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_TOTAL_WIN_CASH_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_FG_ROUND_WIN_CASH_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_FG_ROUND_WIN_CASH_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_BIG_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_BIG_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.SHOW_BONUS_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_BONUS_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.LUCKY_WEALTH_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.LUCKY_WEALTH_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            setTimeout(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
              return _dependency.regeneratorRuntime().wrap(function (n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return dispatch(_dependency11.GameEvent.NEXT_SPIN), n.next = 3, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE));
                  case 3:
                  case "end":
                    return n.stop();
                }
              }, n);
            })), _dependency15.default.isTurbo ? 50 : 500);
          case 1:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.NEXT_SPIN, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            Log.d("%c NEXT_SPIN ", _dependency18.getKeyStyle(_dependency18.KeyStyle.Manager)), n.data.setNextSpinData();
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency9.SlotFrameworkEvent.INIT_RESPONSE, function (e) {
      n.data.setInitData(e), _dependency15.default.setData(e);
    }), this.on(_dependency9.SlotFrameworkEvent.SPIN_RESPONSE, function (e) {
      dispatch(_dependency9.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: e.engine.spinId
        }
      }), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency0.default.amount
        }
      }), n.data.setSpinData(e), dispatch(_dependency11.GameEvent.PARSER_SPIN_COMPLETED);
    }), this.on(_dependency11.GameEvent.JACKPOT_GAME_PICK_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.JACKPOT_GAME_PICK_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency9.SlotFrameworkEvent.CLOSE_RESPONSE, function (e) {
      n.data.reset(), dispatch(_dependency11.GameEvent.PARSER_CLOSE_SPIN_COMPLETED);
    }), this.on(_dependency9.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, function (n) {
      var e = {
          text: App.getLanguage("disconnect", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
          confirmCb: function (n) {
            t();
          },
          bbrCb: function (n) {},
          needCloseAlert: !1,
          tag: _dependency3.ViewZOrder.TopErrorAlert,
          isDisableBlockInput: _dependency21.default.isReplay && _dependency2.game.isPaused()
        },
        t = function () {
          _dependency5.ExitUtils.exit();
        };
      App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
    }), this.on(_dependency9.SlotFrameworkEvent.WARN_RESPONSE, function (n) {
      var e = {
          text: n.message,
          confirmCb: function (n) {
            t();
          },
          bbrCb: function (n) {},
          needCloseAlert: !1,
          tag: _dependency3.ViewZOrder.TopErrorAlert
        },
        t = function () {
          _dependency5.ExitUtils.exit();
        };
      App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
    }), this.on(_dependency11.GameEvent.QUICK_STOP_TOTAL_WINNINGS, function (n) {
      dispatch(_dependency9.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: n.data
      });
    }), this.on(_dependency9.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, function (n) {
      var e = n.data,
        t = _dependency0.default.getData().player.settings.autoPlay.numberOfPlays[e];
      _dependency7.default.active = !0, _dependency7.default.spinsRemaining = t, dispatch(_dependency11.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      });
    }), this.on(_dependency11.GameEvent.PARSER_INIT_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n.view.init(), n.addSlotUIEvents(), e.next = 4, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.PARSER_INIT_COMPLETED));
          case 4:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency11.GameEvent.START_SPIN, function (n) {
      dispatch(_dependency11.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency15.EBTM.SPIN
        }
      }), _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.START_SPIN, n.data));
    }), this.on(_dependency11.GameEvent.STOP_SPIN, function (n) {
      Log.d("％c STOP_SPIN ", _dependency18.getKeyStyle(_dependency18.KeyStyle.Notify)), _dependency19.default.getMachine().currentStateId != _dependency19.default.state.MG_SPIN_TO_STOP_STATE.id && _dependency19.default.getMachine().currentStateId != _dependency19.default.state.FG_SPIN_TO_STOP_STATE.id || dispatch(_dependency11.GameEvent.START_QUICK_STOP);
    }), this.on(_dependency11.GameEvent.PARSER_SPIN_COMPLETED, function () {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.PARSER_SPIN_COMPLETED));
    }), this.on(_dependency11.GameEvent.REEL_ALL_STOP, function () {
      Log.d("%c REEL_ALL_STOP", _dependency18.getKeyStyle(_dependency18.KeyStyle.Notify)), _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.REEL_ALL_STOP));
    }), this.on(_dependency11.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function () {
      _dependency19.default.getMachine().currentStateId !== _dependency19.default.state.MG_WAIT_SPIN_STATE.id && _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.PARSER_CLOSE_SPIN_COMPLETED));
    }), this.on(_dependency9.SlotFrameworkEvent.STOP_AUTO_SPIN, function () {
      _dependency7.default.active = !1, _dependency7.default.spinsRemaining = 0;
    }), this.once(_dependency9.SlotFrameworkEvent.SWIPE_UP, function () {
      _dependency1.default.isComplete() && (App.gameAlert.isCurrentShow(_dependency3.ViewZOrder.TopErrorAlert) || App.gameLoading.complete());
    }), this.on(_dependency11.GameEvent.SHOW_BIG_WIN, function (e) {
      var i = e.data,
        r = i.winnings,
        _ = i.tweenTime,
        a = n.data.getData().parser.bigWinReach.level,
        E = _dependency14.default.getData(),
        f = E.smallPrizeDelay,
        S = E.bigPrizeDelay,
        u = a <= 3 ? f : S;
      App.globalAudio.isMusicOn = !1, _dependency2.tween(n).bindNodeState(false).delay(1 * u).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return App.globalAudio.isMusicOn = !0, e.next = 3, App.uiManager.open({
                type: _dependency17.BigWinShowView,
                bundle: n.data.module,
                zIndex: _dependency3.ViewZOrder.UI,
                name: "BIG WIN"
              });
            case 3:
              e.sent.showBigWin(r, _);
            case 5:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency11.GameEvent.OPEN_FEATURE_POPUP, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, App.uiManager.open({
              type: _dependency16.BuyFeatureView,
              bundle: n.bundle,
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
    }))), this.on(_dependency11.GameEvent.CLICK_START_FREE_GAME, function (n) {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.CLICK_START_FREE_GAME));
    }), this.on(_dependency11.GameEvent.CHANGE_FG_SPIN_STATE, function (n) {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.CHANGE_FG_SPIN_STATE));
    }), this.on(_dependency11.GameEvent.CHANGE_FG_WAIT_SPIN_STATE, function (n) {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.CHANGE_FG_WAIT_SPIN_STATE));
    }), this.on(_dependency11.GameEvent.CHANGE_FG_SUMMARY_ALERT_STATE, function (n) {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.CHANGE_FG_SUMMARY_ALERT_STATE));
    }), this.on(_dependency11.GameEvent.CLICK_FINISH_FREE_GAME, function (n) {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.CLICK_FINISH_FREE_GAME));
    }), this.on(_dependency11.GameEvent.SHOW_TRANSITION_OUT_END, function (n) {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_TRANSITION_OUT_END));
    }), this.on(_dependency11.GameEvent.SHOW_TRANSITION_IN_END, function (n) {
      _dependency19.default.getMachine().send(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_TRANSITION_IN_END));
    }), this.on(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM, function () {
      dispatch(_dependency11.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency15.EBTM.CLICK
        }
      });
    }), this.on(_dependency11.GameEvent.SHOW_RESUME_ALERT, function () {
      n.view.showResumeAlert();
    }), this.on(_dependency9.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      dispatch(_dependency9.SlotFrameworkEvent.UPDATE_STAKE);
    }), this.on(_dependency11.GameEvent.SHOW_DRAGON_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.SHOW_DRAGON_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.PROCESS_REPLAY_IN_GAME, function (e) {
      n.data.tempReplayResponse = e.data, n.view.reset(), _dependency2.tween(n).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency13.default,
                bundle: n.bundle,
                args: H.INIT_REPLAY
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency11.GameEvent.RESET_AND_OPEN_GAME_VIEW, function (e) {
      var i = e.data;
      n.view.reset(), _dependency2.tween(n).bindNodeState(false).delay(1).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency13.default,
                bundle: n.bundle,
                args: i
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency11.GameEvent.PARSER_REPLAY_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return _dependency21.default.replayMode === _dependency21.EReplayMode.URL_REPLAY && n.view.initReplay(), e.next = 3, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.PARSER_REPLAY_COMPLETED));
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency11.GameEvent.REPLAY_GAME_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency19.default.getMachine().sendAsync(new _dependency11.GameEvent(_dependency11.GameEvent.REPLAY_GAME_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency11.GameEvent.REPLAY_START_QUICK_STOP, function (e) {
      n.view.quickStop();
    });
  }, S.addSlotUIEvents = function () {}, S.removeEvents = function () {
    this.off(_dependency11.GameEvent.LOAD_COMPLETE), this.off(_dependency11.GameEvent.START_RESUME), this.off(_dependency11.GameEvent.START_FORTUNE_GAME), this.off(_dependency11.GameEvent.HEAVENLY_TREASURES_RESULT_END), this.off(_dependency11.GameEvent.START_LUCKY_WEALTH_GAME), this.off(_dependency11.GameEvent.DROP_TREASURE_RESULT_RESP), this.off(_dependency11.GameEvent.SHOW_SYMBOLS_WIN_END), this.off(_dependency11.GameEvent.SHOW_WIN_LINE_END), this.off(_dependency11.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END), this.off(_dependency11.GameEvent.SHOW_DROP_SYMBOL_END), this.off(_dependency11.GameEvent.SHOW_SYMBOL_TRANSFORM_END), this.off(_dependency11.GameEvent.SHOW_SCATTER_WIN_END), this.off(_dependency11.GameEvent.INCREASE_FG_REMAINING_END), this.off(_dependency11.GameEvent.SHOW_TOTAL_WIN_CASH_END), this.off(_dependency11.GameEvent.SHOW_FG_ROUND_WIN_CASH_END), this.off(_dependency11.GameEvent.SHOW_WIN_END), this.off(_dependency11.GameEvent.SHOW_BIG_WIN_END), this.off(_dependency11.GameEvent.SHOW_BONUS_WIN_END), this.off(_dependency11.GameEvent.LUCKY_WEALTH_END), this.off(_dependency11.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE), this.off(_dependency11.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE), this.off(_dependency11.GameEvent.NEXT_SPIN), this.off(_dependency9.SlotFrameworkEvent.INIT_RESPONSE), this.off(_dependency9.SlotFrameworkEvent.SPIN_RESPONSE), this.off(_dependency11.GameEvent.SHOW_DRAGON_END), this.off(_dependency11.GameEvent.JACKPOT_GAME_PICK_END), this.off(_dependency11.GameEvent.REPLAY_GAME_END), this.off(_dependency9.SlotFrameworkEvent.CLOSE_RESPONSE), this.off(_dependency9.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE), this.off(_dependency9.SlotFrameworkEvent.WARN_RESPONSE), this.off(_dependency11.GameEvent.QUICK_STOP_TOTAL_WINNINGS), this.off(_dependency9.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT), this.off(_dependency11.GameEvent.PARSER_INIT_COMPLETED), this.off(_dependency11.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency11.GameEvent.START_SPIN), this.off(_dependency11.GameEvent.STOP_SPIN), this.off(_dependency11.GameEvent.REPLAY_START_QUICK_STOP), this.off(_dependency11.GameEvent.PARSER_SPIN_COMPLETED), this.off(_dependency11.GameEvent.REEL_ALL_STOP), this.off(_dependency11.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), this.off(_dependency9.SlotFrameworkEvent.STOP_AUTO_SPIN), this.off(_dependency9.SlotFrameworkEvent.SWIPE_UP), this.off(_dependency11.GameEvent.SHOW_WIN), this.off(_dependency11.GameEvent.SHOW_BIG_WIN), this.off(_dependency11.GameEvent.OPEN_FEATURE_POPUP), this.off(_dependency11.GameEvent.CLICK_START_FREE_GAME), this.off(_dependency11.GameEvent.CHANGE_FG_SPIN_STATE), this.off(_dependency11.GameEvent.CHANGE_FG_SUMMARY_ALERT_STATE), this.off(_dependency11.GameEvent.CLICK_FINISH_FREE_GAME), this.off(_dependency11.GameEvent.SHOW_TRANSITION_OUT_END), this.off(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM), this.off(_dependency11.GameEvent.SHOW_RESUME_ALERT), this.off(_dependency11.GameEvent.SHOW_TRANSITION_IN_END), this.off(_dependency11.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END), this.off(_dependency9.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(_dependency11.GameEvent.PROCESS_REPLAY_IN_GAME), this.off(_dependency11.GameEvent.RESET_AND_OPEN_GAME_VIEW), this.off(_dependency11.GameEvent.SHOW_JACKPOT_WIN_END), this.off(_dependency11.GameEvent.CHANGE_FG_WAIT_SPIN_STATE);
  }, _dependency.createClass(r, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency10.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), r;
}(_dependency6.Logic));
_dependency2.cclegacy._RF.pop();
