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
import * as _dependency11 from "../../shared/scripts/slotFramework-ReadyBundleModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-type2";
import * as _dependency14 from "../../shared/scripts/slotFramework-ExitUtils";
import * as _dependency15 from "./g1012-BigwinView";
import * as _dependency16 from "./g1012-WinView";
import * as _dependency17 from "./g1012-GameConfigModel";
import * as _dependency18 from "./g1012-GameData";
import * as _dependency19 from "./g1012-GameEvent";
import * as _dependency20 from "./g1012-GameSender";
import * as _dependency21 from "./g1012-StateMachineManager";
import * as _dependency22 from "./g1012-GameView";
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
var e, t, s, r, i, a, o, c, _, E, u, f, S, A, T, N, h, p, R, d, I, O, M, w, P, L, l, C, D, g, W, m;
var x;
_publish("EInitName", void 0), _dependency2.cclegacy._RF.push({}, "b126ehy3QZFiLg5Cf5/yzAz", "GameLogic", void 0), function (n) {
  n.INIT_GAME = "init_game", n.INIT_REPLAY = "init_replay";
}(x || (x = _publish("EInitName", {})));
_publish("GameLogic", function (n) {
  var _nativeConstructor = i;
  function i() {
    for (var e, t = arguments.length, s = new Array(t), r = 0; r < t; r++) s[r] = arguments[r];
    return (e = Reflect.construct(n, [this].concat(s).slice(1), new.target || _nativeConstructor) || this).loader = new _dependency6.default(), e.earlySpinDelayingEvent = null, e.earlySpinDelayingSetTimeout = null, e;
  }
  _dependency.inheritsLoose(i, n);
  var S = i.prototype;
  return S.onLoad = function (e) {
    n.prototype.onLoad.call(this, e), this._init();
  }, S.onDestroy = function () {
    this.loader.unLoadResources(), this.data.clear(), n.prototype.onDestroy.call(this);
  }, S.start = function () {
    App.senderManager.get(_dependency20.GameSender).init();
  }, S.reset = function () {
    _dependency2.Tween.stopAll(), gsap.globalTimeline.clear(), gsap.globalTimeline.kill(), App.uiManager.closeExcept([]), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !1), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency13.ESpinStatus.IDLE
    }), this.removeEvents();
  }, S._init = function () {
    this.loadResources();
  }, S.loadResources = function () {
    this.loader.getLoadResources = function () {
      return [];
    }, this.loader.onLoadComplete = function (n) {
      _dependency5.Resource.LoaderError.SUCCESS;
    }, this.loader.loadResources();
  }, S.setGameType = function (n) {}, S.addEvents = function () {
    var n = this;
    this.on(_dependency19.GameEvent.LOAD_COMPLETE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.LOAD_COMPLETE));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.START_RESUME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.START_RESUME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.START_FORTUNE_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.START_FORTUNE_GAME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.HEAVENLY_TREASURES_RESULT_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.HEAVENLY_TREASURES_RESULT_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.START_JACKPOT_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.START_JACKPOT_GAME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.START_LUCKY_WEALTH_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.START_LUCKY_WEALTH_GAME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.DROP_TREASURE_RESULT_RESP, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.DROP_TREASURE_RESULT_RESP));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_SYMBOLS_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_SYMBOLS_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_WIN_SUMMARY_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_WIN_SUMMARY_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_ALL_WIN_LINE_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_ALL_WIN_LINE_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_JP_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_JP_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_BOARD_FRAME_ANIM_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_BOARD_FRAME_ANIM_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_FULL_COMBO_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_FULL_COMBO_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_SYMBOL_TRANSFORM_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_SYMBOL_TRANSFORM_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_SCATTER_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_SCATTER_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.INCREASE_FG_REMAINING_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.INCREASE_FG_REMAINING_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_FG_ROUND_WIN_CASH_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_FG_ROUND_WIN_CASH_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_BIG_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_BIG_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_BONUS_WIN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_BONUS_WIN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.LUCKY_WEALTH_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.LUCKY_WEALTH_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(r) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            n.data.setNextSpinData(), _dependency2.tween(n).bindNodeState(false).delay(.05).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
              return _dependency.regeneratorRuntime().wrap(function (n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return dispatch(_dependency19.GameEvent.NEXT_SPIN), n.next = 3, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE));
                  case 3:
                  case "end":
                    return n.stop();
                }
              }, n);
            }))).start();
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency19.GameEvent.NEXT_SPIN, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency0.SlotFrameworkEvent.INIT_RESPONSE, function (e) {
      var t;
      (n.data.setInitData(e), _dependency17.default.setData(e), n.setGameType(e), dispatch(_dependency19.GameEvent.PARSER_INIT_COMPLETED), e.isResuming) && dispatch(_dependency19.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, {
        data: null == (t = e.engine.definition) ? void 0 : t.isLuckyMoment
      });
    }), this.on(_dependency0.SlotFrameworkEvent.SPIN_RESPONSE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
              data: {
                spinId: t.engine.spinId
              }
            }), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
              data: {
                balance: _dependency10.default.amount
              }
            }), dispatch(_dependency19.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, {
              data: t.engine.isLuckyMoment
            }), n.data.setSpinData(t), n.setGameType(t), dispatch(_dependency19.GameEvent.PARSER_SPIN_COMPLETED);
          case 6:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency19.GameEvent.JACKPOT_GAME_PICK_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.JACKPOT_GAME_PICK_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.REPLAY_GAME_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.REPLAY_GAME_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency0.SlotFrameworkEvent.CLOSE_RESPONSE, function (e) {
      n.data.reset(), dispatch(_dependency19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED);
    }), this.on(_dependency0.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, function (n) {
      var e = {
          text: App.getLanguage("disconnect", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
          confirmCb: function (n) {
            t();
          },
          bbrCb: function (n) {},
          needCloseAlert: !1,
          tag: _dependency3.ViewZOrder.TopErrorAlert,
          isDisableBlockInput: _dependency12.default.isReplay && _dependency2.game.isPaused()
        },
        t = function () {
          _dependency14.ExitUtils.exit();
        };
      App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
    }), this.on(_dependency0.SlotFrameworkEvent.WARN_RESPONSE, function (n) {
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
          _dependency14.ExitUtils.exit();
        };
      App.gameAlert.show(e, _dependency3.ViewZOrder.TopErrorAlert);
    }), this.on(_dependency19.GameEvent.QUICK_STOP_TOTAL_WINNINGS, function (n) {
      dispatch(_dependency0.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: n.data
      });
    }), this.on(_dependency0.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, function (n) {
      var e = n.data,
        t = _dependency10.default.getData().player.settings.autoPlay.numberOfPlays[e];
      _dependency8.default.active = !0, _dependency8.default.spinsRemaining = t, _dependency8.default.active && dispatch(_dependency19.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      });
    }), this.on(_dependency19.GameEvent.PARSER_INIT_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n.view.init(), n.addSlotUIEvents(), e.next = 4, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.PARSER_INIT_COMPLETED));
          case 4:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency19.GameEvent.PARSER_REPLAY_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return _dependency12.default.replayMode === _dependency12.EReplayMode.URL_REPLAY && n.view.initReplay(), e.next = 3, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.PARSER_REPLAY_COMPLETED));
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency19.GameEvent.START_EXTENSION_SCHEDULE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            n.view.startExtensionSchedule();
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency19.GameEvent.KILL_EXTENSION_SCHEDULE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            n.view.killExtensionSchedule();
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency19.GameEvent.START_SPIN, function (n) {
      _dependency21.default.getMachine().send(new _dependency19.GameEvent(_dependency19.GameEvent.START_SPIN, n.data));
    }), this.on(_dependency19.GameEvent.STOP_SPIN, function (n) {
      _dependency21.default.getMachine().currentStateId != _dependency21.default.state.MG_SPIN_TO_STOP_STATE.id && _dependency21.default.getMachine().currentStateId != _dependency21.default.state.FG_SPIN_TO_STOP_STATE.id || dispatch(_dependency19.GameEvent.START_QUICK_STOP);
    }), this.on(_dependency19.GameEvent.REPLAY_START_QUICK_STOP, function (e) {
      n.view.replayQuickStop();
    }), this.on(_dependency19.GameEvent.PARSER_SPIN_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.PARSER_SPIN_COMPLETED));
          case 1:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.REEL_ALL_STOP, function () {
      _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.REEL_ALL_STOP));
    }), this.on(_dependency19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (_dependency21.default.getMachine().currentStateId === _dependency21.default.state.MG_WAIT_SPIN_STATE.id) {
              n.next = 3;
              break;
            }
            return n.next = 3, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED));
          case 3:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN, function () {
      _dependency8.default.active = !1, _dependency8.default.spinsRemaining = 0;
    }), this.once(_dependency0.SlotFrameworkEvent.SWIPE_UP, function () {
      _dependency11.default.isComplete() && (App.gameAlert.isCurrentShow(_dependency3.ViewZOrder.TopErrorAlert) || App.gameLoading.complete());
    }), this.on(_dependency19.GameEvent.SHOW_WIN, function (e) {
      var r = e.data,
        i = r.winnings,
        a = r.tweenTime;
      App.globalAudio.isMusicOn = !1, _dependency2.tween(n).bindNodeState(false).delay(0).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return App.globalAudio.isMusicOn = !0, e.next = 3, App.uiManager.open({
                type: _dependency16.WinView,
                bundle: n.data.module,
                zIndex: _dependency3.ViewZOrder.UI,
                name: "WIN"
              });
            case 3:
              e.sent.showWin(i, a);
            case 5:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency19.GameEvent.SHOW_BIG_WIN, function (e) {
      var r = e.data,
        i = r.winnings,
        a = r.tweenTime,
        c = r.isUpdateInfoBarTotalWinnings,
        E = n.data.getData().parser.bigwinReach.level,
        u = _dependency1.default.getData(),
        f = u.smallPrizeDelay,
        S = u.bigPrizeDelay,
        A = E <= 3 ? f : S;
      App.globalAudio.isMusicOn = !1, _dependency2.tween(n).bindNodeState(false).delay(A).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return App.globalAudio.isMusicOn = !0, e.next = 3, App.uiManager.open({
                type: _dependency15.BigwinView,
                bundle: n.data.module,
                zIndex: _dependency3.ViewZOrder.UI,
                name: "BIG WIN"
              });
            case 3:
              e.sent.showBigwin(i, a, c);
            case 5:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency19.GameEvent.CLICK_START_FREE_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.CLICK_START_FREE_GAME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.CHANGE_FG_SPIN_STATE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.CHANGE_FG_SPIN_STATE));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.CHANGE_FG_SUMMARY_ALERT_STATE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.CHANGE_FG_SUMMARY_ALERT_STATE));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.CLICK_FINISH_FREE_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.CLICK_FINISH_FREE_GAME));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency19.GameEvent.SHOW_TRANSITION_OUT_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_TRANSITION_OUT_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM, function () {
      dispatch(_dependency19.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency17.EBTM.CLICK
        }
      });
    }), this.on(_dependency19.GameEvent.SHOW_RESUME_ALERT, function () {
      n.view.showResumeAlert();
    }), this.on(_dependency19.GameEvent.SHOW_TRANSITION_IN_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(e) {
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, _dependency21.default.getMachine().sendAsync(new _dependency19.GameEvent(_dependency19.GameEvent.SHOW_TRANSITION_IN_END));
          case 2:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(_dependency0.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      dispatch(_dependency0.SlotFrameworkEvent.UPDATE_STAKE);
    }), this.on(_dependency19.GameEvent.PROCESS_REPLAY_IN_GAME, function (e) {
      n.data.tempReplayResponse = e.data, n.view.reset(), _dependency2.tween(n).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency22.default,
                bundle: n.bundle,
                args: x.INIT_REPLAY
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency19.GameEvent.RESET_AND_OPEN_GAME_VIEW, function (e) {
      var r = e.data;
      n.view.reset(), _dependency2.tween(n).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, App.uiManager.open({
                type: _dependency22.default,
                bundle: n.bundle,
                args: r
              });
            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }))).start();
    }), this.on(_dependency19.GameEvent.PLAY_SYMBOL_TRANS_HALO_ANIM, function () {
      n.view.playSymbolTransHaloAnim();
    });
  }, S.addSlotUIEvents = function () {}, S.removeEvents = function () {
    this.off(_dependency19.GameEvent.LOAD_COMPLETE), this.off(_dependency19.GameEvent.START_RESUME), this.off(_dependency19.GameEvent.START_FORTUNE_GAME), this.off(_dependency19.GameEvent.HEAVENLY_TREASURES_RESULT_END), this.off(_dependency19.GameEvent.START_JACKPOT_GAME), this.off(_dependency19.GameEvent.START_LUCKY_WEALTH_GAME), this.off(_dependency19.GameEvent.DROP_TREASURE_RESULT_RESP), this.off(_dependency19.GameEvent.SHOW_SYMBOLS_WIN_END), this.off(_dependency19.GameEvent.SHOW_WIN_SUMMARY_END), this.off(_dependency19.GameEvent.SHOW_BOARD_FRAME_ANIM_END), this.off(_dependency19.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END), this.off(_dependency19.GameEvent.SHOW_DROP_SYMBOL_END), this.off(_dependency19.GameEvent.SHOW_SYMBOL_TRANSFORM_END), this.off(_dependency19.GameEvent.SHOW_SCATTER_WIN_END), this.off(_dependency19.GameEvent.INCREASE_FG_REMAINING_END), this.off(_dependency19.GameEvent.SHOW_TOTAL_WIN_CASH_END), this.off(_dependency19.GameEvent.SHOW_FG_ROUND_WIN_CASH_END), this.off(_dependency19.GameEvent.SHOW_WIN_END), this.off(_dependency19.GameEvent.SHOW_BIG_WIN_END), this.off(_dependency19.GameEvent.SHOW_BONUS_WIN_END), this.off(_dependency19.GameEvent.LUCKY_WEALTH_END), this.off(_dependency19.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE), this.off(_dependency19.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE), this.off(_dependency19.GameEvent.NEXT_SPIN), this.off(_dependency0.SlotFrameworkEvent.INIT_RESPONSE), this.off(_dependency0.SlotFrameworkEvent.SPIN_RESPONSE), this.off(_dependency19.GameEvent.SHOW_DRAGON_END), this.off(_dependency19.GameEvent.JACKPOT_GAME_PICK_END), this.off(_dependency19.GameEvent.BONUS_ELIXIR_FURNACE_END), this.off(_dependency19.GameEvent.REPLAY_GAME_END), this.off(_dependency0.SlotFrameworkEvent.CLOSE_RESPONSE), this.off(_dependency0.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE), this.off(_dependency0.SlotFrameworkEvent.WARN_RESPONSE), this.off(_dependency19.GameEvent.QUICK_STOP_TOTAL_WINNINGS), this.off(_dependency0.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT), this.off(_dependency19.GameEvent.PARSER_INIT_COMPLETED), this.off(_dependency19.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency19.GameEvent.START_EXTENSION_SCHEDULE), this.off(_dependency19.GameEvent.KILL_EXTENSION_SCHEDULE), this.off(_dependency19.GameEvent.START_SPIN), this.off(_dependency19.GameEvent.STOP_SPIN), this.off(_dependency19.GameEvent.REPLAY_START_QUICK_STOP), this.off(_dependency19.GameEvent.PARSER_SPIN_COMPLETED), this.off(_dependency19.GameEvent.REEL_ALL_STOP), this.off(_dependency19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), this.off(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN), this.off(_dependency0.SlotFrameworkEvent.SWIPE_UP), this.off(_dependency19.GameEvent.SHOW_WIN), this.off(_dependency19.GameEvent.SHOW_BIG_WIN), this.off(_dependency19.GameEvent.OPEN_FEATURE_POPUP), this.off(_dependency19.GameEvent.CLICK_START_FREE_GAME), this.off(_dependency19.GameEvent.CHANGE_FG_SPIN_STATE), this.off(_dependency19.GameEvent.CHANGE_FG_SUMMARY_ALERT_STATE), this.off(_dependency19.GameEvent.CLICK_FINISH_FREE_GAME), this.off(_dependency19.GameEvent.SHOW_TRANSITION_OUT_END), this.off(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM), this.off(_dependency19.GameEvent.SHOW_RESUME_ALERT), this.off(_dependency19.GameEvent.SHOW_TRANSITION_IN_END), this.off(_dependency19.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END), this.off(_dependency0.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(_dependency19.GameEvent.PROCESS_REPLAY_IN_GAME), this.off(_dependency19.GameEvent.RESET_AND_OPEN_GAME_VIEW), this.off(_dependency19.GameEvent.PLAY_CIRCLE_ANIM), this.off(_dependency19.GameEvent.PLAY_SYMBOL_TRANS_HALO_ANIM);
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency18.default);
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
  }]), i;
}(_dependency7.Logic));
_dependency2.cclegacy._RF.pop();
