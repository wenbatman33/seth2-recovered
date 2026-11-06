// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UrlUtils";
import * as _dependency4 from "../../shared/scripts/main-Config";
import * as _dependency5 from "../../shared/scripts/main-Bundles";
import * as _dependency6 from "../../shared/scripts/main-CompanyWaveEffect";
import * as _dependency7 from "../../shared/scripts/main-index";
import * as _dependency8 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-SocketModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency15 from "../../shared/scripts/slotFramework-type2";
import * as _dependency16 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency17 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency18 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency19 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency20 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency21 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency22 from "./g1004-DragonView";
import * as _dependency23 from "./g1004-HeavenlyTreasuresView";
import * as _dependency24 from "./g1004-JackpotGameView";
import * as _dependency25 from "./g1004-LuckyWealthView";
import * as _dependency26 from "./g1004-GameConfigModel";
import * as _dependency27 from "./g1004-GameData";
import * as _dependency28 from "./g1004-GameEvent";
import * as _dependency29 from "./g1004-GameSender";
import * as _dependency30 from "./g1004-types";
import * as _dependency31 from "./g1004-StateMachineManager";
import * as _dependency32 from "./g1004-IntroView";
import * as _dependency33 from "../../shared/scripts/main-state";
import * as _dependency34 from "../../shared/scripts/main-fsm";
var _export;
export { _export as calculateAutoSpin };
var _export2;
export { _export2 as needUpdateStake };
var _export3;
export { _export3 as GameState };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "calculateAutoSpin":
      _export = value;
      break;
    case "needUpdateStake":
      _export2 = value;
      break;
    case "GameState":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a, e, n, i, r, _, T, E, o, s, S, d, c, u, A, I, N, G, p, O, D, f, h, R, v, L, W, P, M, l, m, g, C, x, H, U, y, F, w, Y, b, k, B, V, K;
function J() {
  if (_dependency8.default.active && _dependency8.default.spinsRemaining > 0) {
    if (App.dataCenter.get(_dependency27.default).currentGameType === _dependency30.EGameType.FREE_GAME) return;
    _dependency8.default.spinsRemaining--;
  }
}
function X() {
  var t = {
      stakeIndex: _dependency12.default.stakeIndex,
      ratioIndex: _dependency12.default.ratioIndex
    },
    a = {
      stakeIndex: _dependency0.default.stakeIndex,
      ratioIndex: _dependency0.default.ratioIndex
    },
    e = _dependency18.ObjectUtils.diffObjects(t, a);
  return Object.keys(e).length > 0;
}
_publish({
  calculateAutoSpin: J,
  needUpdateStake: X
}), _dependency2.cclegacy._RF.push({}, "bc13c0OlfNBlaF6QuBQOjkW", "GameState", void 0);
_publish("GameState", function () {
  function t() {
    var t,
      a,
      i,
      c,
      G,
      v,
      V,
      K,
      Q = this;
    this.stateMachine = null, this.MG_LOADING_STATE = {
      id: "MG_LOADING_STATE",
      initial: !0,
      transitionGuard: function () {
        return !0;
      },
      transitionTo: (t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = a.event, a.context, a.sharedData, e.name != _dependency28.GameEvent.LOAD_COMPLETE) {
                t.next = 3;
                break;
              }
              return t.abrupt("return", Q.MG_INIT_STATE.id);
            case 3:
              return t.abrupt("return", "");
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (a) {
        return t.apply(this, arguments);
      })
    }, this.MG_INIT_STATE = {
      id: "MG_INIT_STATE",
      onEntry: (a = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
        var a, e, i, r, _, T, S, d, c, u;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (a = _dependency3.default.hasParam("gn") && _dependency3.default.hasParam("t"), e = _dependency3.default.hasParam("spinId"), i = App, r = App.senderManager.get(_dependency29.GameSender), Log.d("%c MG_INIT_STATE", _dependency17.getKeyStyle(_dependency17.KeyStyle.Notify), _dependency31.default.getStateName()), dispatch(_dependency28.GameEvent.CHANGE_GAME_STYLE, {
                data: _dependency30.EGameType.MAIN_GAME
              }), _dependency31.default.getStateName() !== _dependency31.EStateMachineName.GAME_STATE) {
                t.next = 26;
                break;
              }
              return t.next = 9, r.initial();
            case 9:
              if (i.gameLoading.hideProgressBar(), i.gameLoading.hideGameLogo(), App.uiManager.open({
                type: _dependency32.IntroView,
                bundle: _dependency5.EBundles[_dependency5.EBundles.g1004],
                zIndex: _dependency4.ViewZOrder.UILoading,
                name: "Intro"
              }), _ = _dependency10.default.getData(), T = _.slotTablesOn, S = App.dataCenter.get(_dependency27.default).getData(), d = S.isResuming, c = "1" === _dependency14.default.getData().searchParams.table, !T || d) {
                t.next = 24;
                break;
              }
              if (!c) {
                t.next = 19;
                break;
              }
              return t.abrupt("return");
            case 19:
              return u = _dependency16.CmmSlotUtils.getOrientationTarget(_dependency20.default, _dependency21.default), t.next = 22, App.uiManager.open({
                type: u,
                bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
                zIndex: _dependency4.ViewZOrder.UI,
                name: "機台選擇2",
                args: !0
              });
            case 22:
              t.next = 24;
              break;
            case 24:
              t.next = 34;
              break;
            case 26:
              if (_dependency31.default.getStateName() !== _dependency31.EStateMachineName.REPLAY_STATE) {
                t.next = 34;
                break;
              }
              if (!a) {
                t.next = 30;
                break;
              }
              t.next = 34;
              break;
            case 30:
              if (!e) {
                t.next = 34;
                break;
              }
              return t.next = 33, r.replaySpinIDInInitial();
            case 33:
              i.gameLoading.complete();
            case 34:
            case "end":
              return t.stop();
          }
        }, t);
      })), function () {
        return a.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return Q.stateMachine.currentStateId == Q.MG_INIT_STATE.id;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        return a.name == _dependency28.GameEvent.PARSER_INIT_COMPLETED ? e.getData().isResuming ? Q.MG_WAIT_RESUME_STATE.id : Q.MG_WAIT_SPIN_STATE.id : a.name === _dependency28.GameEvent.PARSER_REPLAY_COMPLETED && _dependency11.default.isReplay ? Q.MG_WAIT_REPLAY_STATE.id : "";
      },
      onExit: function () {}
    }, this.MG_WAIT_REPLAY_STATE = {
      id: "MG_WAIT_REPLAY_STATE",
      onEntry: (i = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e = a.event, a.context, a.sharedData, dispatch(_dependency28.GameEvent.RESET_TIMES), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency15.ESpinStatus.SPINING
              }), e.name === _dependency28.GameEvent.REPLAY_GAME_END || e.name === _dependency28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT), dispatch(_dependency28.GameEvent.REPLAY_GAME_END)) : (_dependency2.tween(Q).bindNodeState(false).delay(.3).call(function () {
                dispatch(_dependency28.GameEvent.NEXT_SPIN);
              }).start(), _dependency2.tween(Q).bindNodeState(false).delay(1.5).call(function () {
                dispatch(_dependency28.GameEvent.START_SPIN, {
                  data: {
                    spinId: null
                  }
                });
              }).start());
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return i.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name == _dependency28.GameEvent.START_SPIN ? Q.MG_SPIN_STATE.id : a.name === _dependency28.GameEvent.REPLAY_GAME_END ? Q.MG_WAIT_SPIN_STATE.id : "";
      }
    }, this.MG_WAIT_RESUME_STATE = {
      id: "MG_WAIT_RESUME_STATE",
      onEntry: (c = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency28.GameEvent.SHOW_RESUME_ALERT), dispatch(_dependency28.GameEvent.RESET_TIMES), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency15.ESpinStatus.SPINING
              });
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return c.apply(this, arguments);
      }),
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        if (a.name == _dependency28.GameEvent.START_RESUME) {
          var e,
            n = Q.data.getData(),
            i = n.parser.currentGameState,
            r = i.totalWinnings,
            _ = i.startFreeGame;
          return n.isResuming && 0 === r && !1 === _ && !n.bonusState || (null == n || null == (e = n.bonusState) ? void 0 : e.bonusType) === _dependency30.EBonusType.LUCKY_WEALTH ? Q.MG_CLOSE_SPIN_STATE.id : Q.MG_SHOW_ALL_WIN_STATE.id;
        }
        return "";
      }
    }, this.MG_WAIT_SPIN_STATE = {
      id: "MG_WAIT_SPIN_STATE",
      onEntry: (G = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (a.event, a.context, e = a.sharedData, !(_dependency8.default.active && _dependency8.default.spinsRemaining > 0 || _dependency8.default.active && -1 === _dependency8.default.spinsRemaining)) {
                t.next = 7;
                break;
              }
              if (Q.slotData.checkBalanceAndAlert(function () {
                dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                  data: _dependency15.ESpinStatus.IDLE
                });
              })) {
                t.next = 5;
                break;
              }
              return t.abrupt("return");
            case 5:
              return dispatch(_dependency28.GameEvent.START_SPIN, {
                data: e
              }), t.abrupt("return");
            case 7:
              dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency15.ESpinStatus.IDLE
              });
            case 8:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return G.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return !![_dependency28.GameEvent.START_SPIN, _dependency28.GameEvent.PARSER_REPLAY_COMPLETED].includes(a.name);
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name == _dependency28.GameEvent.START_SPIN ? Q.MG_SPIN_STATE.id : a.name === _dependency28.GameEvent.PARSER_REPLAY_COMPLETED && _dependency11.default.isReplay ? Q.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.MG_SPIN_STATE = {
      id: "MG_SPIN_STATE",
      onEntry: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.PLAY_MULTI_MARQUEE), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
          data: _dependency15.ESpinStatus.SPINING
        }), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        });
        var e = _dependency26.default.getData().winAmountTime,
          n = a.data,
          i = n.spinId,
          _ = n.spinData;
        i || dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: 0,
            tweenTime: e
          }
        }), J();
        var T = {
          ratioIndex: _dependency0.default.ratioIndex,
          ratioValue: _dependency0.default.ratioValue,
          stakeIndex: _dependency0.default.stakeIndex,
          stakeValue: _dependency0.default.stakeValue
        };
        dispatch(_dependency1.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null), _dependency11.default.isReplay ? _dependency2.tween(Q).bindNodeState(false).delay(.3).call(function () {
          dispatch(_dependency28.GameEvent.PARSER_SPIN_COMPLETED);
        }).start() : dispatch(_dependency1.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
          data: {
            spinId: i,
            stakeVO: T,
            updateStake: X(),
            spinData: _
          }
        });
      },
      transitionGuard: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return !![_dependency28.GameEvent.PARSER_SPIN_COMPLETED].includes(a.name);
      },
      transitionTo: function (t) {
        var a,
          e = t.event,
          n = (t.context, t.sharedData);
        return e.name == _dependency28.GameEvent.PARSER_SPIN_COMPLETED ? null != (a = n.getData().parser.currentGameState) && a.dragonLevel ? Q.DRAGON_STATE.id : Q.MG_SPIN_TO_STOP_STATE.id : "";
      }
    }, this.MG_SPIN_TO_STOP_STATE = {
      id: "MG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.SET_REEL_RESULT), dispatch(_dependency28.GameEvent.CAN_STOP_SPIN);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        return a.name === _dependency28.GameEvent.REEL_ALL_STOP ? e.getData().parser.currentGameState.startFreeGame ? Q.MG_SHOW_ALL_WIN_STATE.id : 0 === Q.data.getData().parser.currentGameState.totalWinnings ? Q.MG_CLOSE_SPIN_STATE.id : (_dependency26.default.isTurbo, Q.MG_SHOW_ALL_WIN_STATE.id) : "";
      }
    }, this.MG_SHOW_WIN_LINE_STATE = {
      id: "MG_SHOW_WIN_LINE_STATE",
      onEntry: (v = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency28.GameEvent.SHOW_WIN_LINE), _dependency2.tween(Q).bindNodeState(false).delay(.2).call(function () {
                dispatch(_dependency28.GameEvent.CAN_SKIP_WIN_LINE);
              }).start();
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return v.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.SHOW_WIN_LINE_END ? Q.MG_EXPLODE_AND_DELETE_STATE.id : "";
      }
    }, this.MG_SHOW_ALL_WIN_STATE = {
      id: "MG_SHOW_ALL_WIN_STATE",
      onEntry: (V = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e, i;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (a.event, a.context, !(e = a.sharedData).getData().parser.currentGameState.startFreeGame) {
                t.next = 5;
                break;
              }
              return dispatch(_dependency28.GameEvent.SHOW_SCATTER_WIN), t.abrupt("return");
            case 5:
              if (!(i = e.getData().bonusState) || !i.isBonus) {
                t.next = 16;
                break;
              }
              t.t0 = i.bonusType, t.next = t.t0 === _dependency30.EBonusType.JP_GAME ? 10 : t.t0 === _dependency30.EBonusType.LUCKY_WEALTH ? 12 : 14;
              break;
            case 10:
              return dispatch(_dependency28.GameEvent.SHOW_JACKPOT_WIN), t.abrupt("break", 14);
            case 12:
              return dispatch(_dependency28.GameEvent.START_LUCKY_WEALTH_GAME), t.abrupt("break", 14);
            case 14:
              t.next = 17;
              break;
            case 16:
              dispatch(_dependency28.GameEvent.SHOW_SYMBOLS_WIN);
            case 17:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return V.apply(this, arguments);
      }),
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a,
          e = t.event;
        t.context, t.sharedData;
        return ((a = {})[_dependency28.GameEvent.SHOW_SYMBOLS_WIN_END] = Q.MG_SHOW_WIN_LINE_STATE.id, a[_dependency28.GameEvent.SHOW_SCATTER_WIN_END] = Q.FG_SHOW_INTRO_GAME_STATE.id, a[_dependency28.GameEvent.SHOW_JACKPOT_WIN_END] = Q.JP_GAME_INTRO_STATE.id, a[_dependency28.GameEvent.START_LUCKY_WEALTH_GAME] = Q.LUCKY_WEALTH_INTRO.id, a)[e.name] || "";
      }
    }, this.MG_EXPLODE_AND_DELETE_STATE = {
      id: "MG_EXPLODE_AND_DELETE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        if (_dependency26.default.isTurbo) {
          var a = Q.data.getData().parser.currentGameState.totalWinnings,
            e = _dependency26.default.getData().winAmountTime;
          dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
            data: {
              value: a,
              tweenTime: e
            }
          });
        }
        dispatch(_dependency28.GameEvent.SHOW_SYMBOLS_FRAME_OUT);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData),
          n = e.getData().parser.currentSpinIndex,
          i = e.getData().gameState[n + 1];
        return a.name == _dependency28.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END ? null != i && i.dragonLevel && 1 !== i.currentTimes ? Q.DRAGON_STATE.id : Q.MG_DROP_SYMBOL_STATE.id : "";
      }
    }, this.MG_DROP_SYMBOL_STATE = {
      id: "MG_DROP_SYMBOL_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.SHOW_DROP_SYMBOL);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name == _dependency28.GameEvent.SHOW_DROP_SYMBOL_END) {
          var n = e.getData().parser.currentGameState;
          return n.currentView + 1 === n.totalViews ? Q.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE.id : Q.MG_SHOW_ALL_WIN_STATE.id;
        }
        return "";
      }
    }, this.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE = {
      id: "MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var a = t.sharedData.getData().parser.currentGameState.totalWinnings,
          e = _dependency26.default.getData().winAmountTime;
        dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: a,
            tweenTime: e
          }
        }), dispatch(_dependency28.GameEvent.SHOW_TOTAL_WIN_CASH);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        if (a.name == _dependency28.GameEvent.SHOW_TOTAL_WIN_CASH_END) {
          var e = Q.data.getData().parser.currentGameState.totalWinnings;
          return Q.data.setBigWinReach(e) ? Q.MG_BIG_WIN_STATE.id : Q.MG_CLOSE_SPIN_STATE.id;
        }
        return "";
      }
    }, this.MG_BIG_WIN_STATE = {
      id: "MG_BIG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var a = {
          winnings: Q.data.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * Q.data.getData().parser.bigWinReach.level
        };
        dispatch(_dependency28.GameEvent.SHOW_BIG_WIN, {
          data: a
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.SHOW_BIG_WIN_END ? Q.MG_CLOSE_SPIN_STATE.id : "";
      }
    }, this.MG_DROP_TREASURE_STATE = {
      id: "MG_DROP_TREASURE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        App.uiManager.open({
          type: _dependency23.HeavenlyTreasuresView,
          bundle: Q.data.module,
          zIndex: _dependency4.ViewZOrder.UI,
          name: "天降奇寶"
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.HEAVENLY_TREASURES_RESULT_END ? Q.DROP_TREASURE_CLOSE_STATE.id : "";
      }
    }, this.DROP_TREASURE_CLOSE_STATE = {
      id: "DROP_TREASURE_CLOSE_STATE",
      onEntry: function () {
        if (_dependency11.default.isReplay) dispatch(_dependency28.GameEvent.REPLAY_GAME_END);else {
          var t = {
            bonusType: _dependency30.EBonusType.FORTUNE_LANDING,
            action: _dependency30.BonusStateAction.FINISH,
            ratioIndex: _dependency0.default.ratioIndex,
            ratioValue: _dependency0.default.ratioValue,
            stakeIndex: _dependency0.default.stakeIndex,
            stakeValue: _dependency0.default.stakeValue,
            spinId: Q.data.getData().spinId,
            token: _dependency13.default.currentToken,
            clientType: "web"
          };
          App.senderManager.get(_dependency29.GameSender).sendFortuneLandingFinishReq(t);
        }
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.DROP_TREASURE_RESULT_RESP ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Q.MG_WAIT_SPIN_STATE.id) : a.name == _dependency28.GameEvent.REPLAY_GAME_END ? Q.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.MG_CLOSE_SPIN_STATE = {
      id: "MG_CLOSE_SPIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var a = Q.data.getData().bonusState;
        if (a && a.bonusType != _dependency30.EBonusType.ELIXIR_FURNACE) switch (a.bonusType) {
          case _dependency30.EBonusType.FORTUNE_LANDING:
            dispatch(_dependency28.GameEvent.START_FORTUNE_GAME);
            break;
          case _dependency30.EBonusType.JP_GAME:
            dispatch(_dependency28.GameEvent.SHOW_JACKPOT_WIN);
            break;
          case _dependency30.EBonusType.LUCKY_WEALTH:
            dispatch(_dependency28.GameEvent.START_LUCKY_WEALTH_GAME);
        } else {
          if (_dependency11.default.isReplay) return void dispatch(_dependency28.GameEvent.REPLAY_GAME_END);
          dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
            data: Q.data.getData().spinId
          });
        }
        dispatch(_dependency28.GameEvent.RESET_TIMES);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        return a.name == _dependency28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Q.processCloseAutoPlay(), e.getData().isResuming = !1, Q.MG_WAIT_SPIN_STATE.id) : a.name == _dependency28.GameEvent.START_FORTUNE_GAME ? Q.MG_DROP_TREASURE_STATE.id : a.name == _dependency28.GameEvent.SHOW_JACKPOT_WIN_END ? Q.JP_GAME_INTRO_STATE.id : a.name == _dependency28.GameEvent.START_LUCKY_WEALTH_GAME ? Q.LUCKY_WEALTH_INTRO.id : a.name == _dependency28.GameEvent.REPLAY_GAME_END ? Q.MG_WAIT_REPLAY_STATE.id : a.name == _dependency28.GameEvent.START_SPIN ? Q.MG_SPIN_STATE.id : "";
      }
    }, this.FG_SHOW_START_ALERT_STATE = {
      id: "FG_SHOW_START_ALERT_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency28.GameEvent.SHOW_FG_SUMMARY_ALERT);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.CLICK_START_FREE_GAME ? (dispatch(_dependency28.GameEvent.CHANGE_GAME_STYLE, {
          data: _dependency30.EGameType.FREE_GAME
        }), dispatch(_dependency28.GameEvent.UPDATE_TIMES), Q.FG_WAIT_SPIN_STATE.id) : "";
      }
    }, this.FG_SHOW_INTRO_GAME_STATE = {
      id: "FG_SHOW_INTRO_GAME_STATE",
      onEntry: function () {
        dispatch(_dependency28.GameEvent.SHOW_TRANSITION_IN);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.SHOW_TRANSITION_IN_END ? (dispatch(_dependency28.GameEvent.CHANGE_GAME_STYLE, {
          data: _dependency30.EGameType.FREE_GAME
        }), dispatch(_dependency28.GameEvent.UPDATE_TIMES), Q.FG_SHOW_START_ALERT_STATE.id) : "";
      }
    }, this.FG_SHOW_SUMMARY_ALERT_STATE = {
      id: "FG_SHOW_SUMMARY_ALERT_STATE",
      onEntry: function () {
        dispatch(_dependency28.GameEvent.SHOW_FG_RESULT);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.CLICK_FINISH_FREE_GAME ? Q.FG_TRANSITION_OUT_STATE.id : "";
      }
    }, this.FG_TRANSITION_OUT_STATE = {
      id: "FG_TRANSITION_OUT_STATE",
      onEntry: function () {
        dispatch(_dependency28.GameEvent.SHOW_TRANSITION_OUT), dispatch(_dependency28.GameEvent.CHANGE_GAME_STYLE, {
          data: _dependency30.EGameType.MAIN_GAME
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency28.GameEvent.SHOW_TRANSITION_OUT_END) {
          var n = Q.data.getData().parser.currentGameState.totalWinnings,
            i = Q.data.setBigWinReach(n);
          return Q.processCloseAutoPlay(), e.getData().isResuming = !1, i ? Q.FG_END_BIG_WIN_STATE.id : Q.FG_CLOSE_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_CLOSE_SPIN_STATE = {
      id: "FG_CLOSE_SPIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        _dependency11.default.isReplay ? dispatch(_dependency28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED) : (dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Q.data.getData().spinId
        }), dispatch(_dependency28.GameEvent.RESET_TIMES));
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        return a.name == _dependency28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Q.processCloseAutoPlay(), e.getData().isResuming = !1, _dependency11.default.isReplay ? Q.MG_WAIT_REPLAY_STATE.id : Q.MG_WAIT_SPIN_STATE.id) : "";
      }
    }, this.FG_WAIT_SPIN_STATE = {
      id: "FG_WAIT_SPIN_STATE",
      onEntry: function () {
        setTimeout(function () {
          dispatch(_dependency28.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency28.GameEvent.CHANGE_FG_SPIN_STATE);
        }, 300);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.CHANGE_FG_SPIN_STATE ? Q.FG_SPIN_STATE.id : "";
      }
    }, this.FG_SPIN_STATE = {
      id: "FG_SPIN_STATE",
      onEntry: function () {
        dispatch(_dependency28.GameEvent.START_SCROLL), dispatch(_dependency28.GameEvent.PLAY_MULTI_MARQUEE), dispatch(_dependency28.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a,
          e = t.event,
          n = (t.context, t.sharedData);
        return e.name === _dependency28.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE ? null != (a = n.getData().parser.currentGameState) && a.dragonLevel ? Q.DRAGON_STATE.id : Q.FG_SPIN_TO_STOP_STATE.id : "";
      }
    }, this.FG_SPIN_TO_STOP_STATE = {
      id: "FG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.SET_REEL_RESULT), dispatch(_dependency28.GameEvent.CAN_STOP_SPIN);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name !== _dependency28.GameEvent.REEL_ALL_STOP) return "";
        var n = e.getData().parser.currentGameState,
          i = n.currentView,
          r = n.totalViews,
          _ = n.startFreeGame,
          T = n.winSymbols;
        return i + 1 === r ? Q.FG_SHOW_SUMMARY_ALERT_STATE.id : _ || T.length > 0 ? Q.FG_SHOW_ALL_WIN_STATE.id : Q.FG_WAIT_SPIN_STATE.id;
      }
    }, this.FG_SHOW_ALL_WIN_STATE = {
      id: "FG_SHOW_ALL_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context;
        t.sharedData.getData().parser.currentGameState.startFreeGame ? dispatch(_dependency28.GameEvent.SHOW_SCATTER_WIN) : dispatch(_dependency28.GameEvent.SHOW_SYMBOLS_WIN);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a,
          e = t.event;
        t.context, t.sharedData;
        return ((a = {})[_dependency28.GameEvent.SHOW_SYMBOLS_WIN_END] = Q.FG_SHOW_WIN_LINE_STATE.id, a[_dependency28.GameEvent.SHOW_SCATTER_WIN_END] = Q.FG_SHOW_INCREASE_REMAINING.id, a)[e.name] || "";
      }
    }, this.FG_SHOW_INCREASE_REMAINING = {
      id: "FG_SHOW_INCREASE_REMAINING",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.INCREASE_FG_REMAINING, {
          complete: function () {
            dispatch(_dependency28.GameEvent.INCREASE_FG_REMAINING_END);
          }
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.INCREASE_FG_REMAINING_END ? Q.FG_WAIT_SPIN_STATE.id : "";
      }
    }, this.FG_SHOW_WIN_LINE_STATE = {
      id: "FG_SHOW_WIN_LINE_STATE",
      onEntry: (K = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency28.GameEvent.SHOW_WIN_LINE), _dependency2.tween(Q).bindNodeState(false).delay(.2).call(function () {
                dispatch(_dependency28.GameEvent.CAN_SKIP_WIN_LINE);
              }).start();
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return K.apply(this, arguments);
      }),
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        if (a.name === _dependency28.GameEvent.SHOW_WIN_LINE_END) return Q.FG_EXPLODE_AND_DELETE_STATE.id;
      }
    }, this.FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE = {
      id: "FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.SHOW_ROUND_VIEW_WIN_CASH);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name == _dependency28.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END ? Q.FG_EXPLODE_AND_DELETE_STATE.id : "";
      }
    }, this.FG_EXPLODE_AND_DELETE_STATE = {
      id: "FG_EXPLODE_AND_DELETE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var a = Q.data.getData().parser.currentGameState.totalWinnings,
          e = _dependency26.default.getData().winAmountTime;
        Log.d("%c totalWinnings: ", _dependency17.getKeyStyle(_dependency17.KeyStyle.Important), a), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: a,
            tweenTime: e
          }
        }), dispatch(_dependency28.GameEvent.SHOW_SYMBOLS_FRAME_OUT);
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name == _dependency28.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END) {
          var n = e.getData().parser.currentSpinIndex,
            i = e.getData().gameState[n + 1];
          return dispatch(_dependency28.GameEvent.UPDATE_TIMES), null != i && i.dragonLevel && 1 !== i.currentTimes ? Q.DRAGON_STATE.id : Q.FG_DROP_SYMBOL_STATE.id;
        }
        return "";
      }
    }, this.FG_DROP_SYMBOL_STATE = {
      id: "FG_DROP_SYMBOL_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.SHOW_DROP_SYMBOL);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name == _dependency28.GameEvent.SHOW_DROP_SYMBOL_END) {
          var n = e.getData().parser.currentGameState,
            i = n.freeGameCount,
            r = n.winSymbols,
            _ = n.startFreeGame,
            T = e.getData().parser.currentSpinIndex,
            E = e.getData().gameState[T + 1];
          return !E || i !== E.freeGameCount ? _ ? Q.FG_SHOW_ALL_WIN_STATE.id : Q.FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE.id : 0 === r.length ? (dispatch(_dependency28.GameEvent.UPDATE_TIMES), Q.FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE.id) : Q.FG_SHOW_ALL_WIN_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE = {
      id: "FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency28.GameEvent.SHOW_TOTAL_WIN_CASH);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name == _dependency28.GameEvent.SHOW_TOTAL_WIN_CASH_END) {
          dispatch(_dependency28.GameEvent.UPDATE_TIMES);
          var n = e.getData().parser.currentGameState,
            i = n.currentView,
            r = n.totalViews,
            _ = n.roundWinnings,
            T = i + 1 === r;
          return Q.data.setBigWinReach(_) ? Q.FG_BIG_WIN_STATE.id : T ? Q.FG_SHOW_SUMMARY_ALERT_STATE.id : Q.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_BIG_WIN_STATE = {
      id: "FG_BIG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var a = {
          winnings: t.sharedData.getData().parser.currentGameState.roundWinnings,
          tweenTime: 5 + 3 * Q.data.getData().parser.bigWinReach.level
        };
        dispatch(_dependency28.GameEvent.SHOW_BIG_WIN, {
          data: a
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency28.GameEvent.SHOW_BIG_WIN_END) {
          var n = e.getData().parser.currentGameState;
          return n.currentView + 1 === n.totalViews ? Q.FG_SHOW_SUMMARY_ALERT_STATE.id : Q.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_END_BIG_WIN_STATE = {
      id: "FG_END_BIG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var a = {
          winnings: t.sharedData.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * Q.data.getData().parser.bigWinReach.level
        };
        dispatch(_dependency28.GameEvent.SHOW_BIG_WIN, {
          data: a
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.SHOW_BIG_WIN_END ? Q.FG_CLOSE_SPIN_STATE.id : "";
      }
    }, this.LUCKY_WEALTH_INTRO = {
      id: "LUCKY_WEALTH_INTRO",
      onEntry: function (t) {
        t.event, t.context;
        var a = t.sharedData;
        dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN);
        var e = {
          win: a.getData().bonusState.prize,
          tweenTime: 8
        };
        App.uiManager.open({
          type: _dependency25.default,
          bundle: Q.data.module,
          zIndex: _dependency4.ViewZOrder.UI,
          name: "神秘遊戲",
          args: e
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.LUCKY_WEALTH_END ? Q.LUCKY_WEALTH_CLOSE_STATE.id : "";
      }
    }, this.LUCKY_WEALTH_CLOSE_STATE = {
      id: "LUCKY_WEALTH_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        _dependency11.default.isReplay ? dispatch(_dependency28.GameEvent.REPLAY_GAME_END) : dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Q.data.getData().spinId
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Q.MG_WAIT_SPIN_STATE.id) : a.name == _dependency28.GameEvent.REPLAY_GAME_END ? Q.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.JP_GAME_INTRO_STATE = {
      id: "JP_GAME_INTRO_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN), App.uiManager.open({
          type: _dependency24.JackpotGameView,
          bundle: Q.data.module,
          zIndex: _dependency4.ViewZOrder.UI,
          name: "JP遊戲"
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.JACKPOT_GAME_PICK_END ? Q.JP_GAME_CLOSE_STATE.id : "";
      }
    }, this.JP_GAME_CLOSE_STATE = {
      id: "JP_GAME_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        if (_dependency11.default.isReplay) return App.uiManager.close(_dependency19.default), void dispatch(_dependency28.GameEvent.REPLAY_GAME_END);
        dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Q.data.getData().spinId
        });
      },
      transitionGuard: function () {
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency28.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Q.MG_WAIT_SPIN_STATE.id) : a.name == _dependency28.GameEvent.REPLAY_GAME_END ? Q.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.DRAGON_STATE = {
      id: "DRAGON_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var a = t.sharedData;
        App.uiManager.effectCamera && (App.uiManager.effectCamera.node.active = !0), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !0, App.uiManager.addView(App.uiManager.effectRoot, _dependency4.ViewZOrder.UI));
        var e,
          n = a.getData().parser,
          i = n.currentSpinIndex,
          E = n.currentGameState,
          s = 0;
        Q.getMachine().previous.id === Q.FG_EXPLODE_AND_DELETE_STATE.id || Q.getMachine().previous.id === Q.MG_EXPLODE_AND_DELETE_STATE.id ? s = null == (e = a.getData().gameState[i + 1]) ? void 0 : e.dragonLevel : s = E.dragonLevel;
        var d = App.uiManager.effectRoot.getComponent(_dependency6.CompanyWaveEffect),
          c = [void 0, .1, .1, .5],
          u = [void 0, .1, .1, .3],
          A = [void 0, void 0, void 0, .2],
          I = [void 0, 40, 40, 50],
          N = [void 0, 40, 40, 50],
          G = [void 0, void 0, void 0, 50],
          p = [void 0, .9, 1.2, .8],
          O = [void 0, .9, 1.2, 1.2],
          D = [void 0, void 0, void 0, 1.8],
          f = [void 0, 30, 1, 30],
          h = [void 0, 30, 1, 30],
          R = [void 0, void 0, void 0, 30],
          v = [void 0, .05, .075, .075],
          L = [void 0, .05, .075, .075],
          W = [void 0, void 0, void 0, .075],
          P = [void 0, 1, 1, 1],
          l = [void 0, 1, 1, 1],
          m = [void 0, void 0, void 0, 1],
          g = [void 0, _dependency2.v3(0, 420, 0), _dependency2.v3(-360, 520, 0), _dependency2.v3(300, 620, 0)],
          C = [void 0, _dependency2.v3(0, 20, 0), _dependency2.v3(-100, 80, 0), _dependency2.v3(150, -460, 0)],
          x = [void 0, void 0, void 0, _dependency2.v3(0, -560, 0)],
          U = [void 0, .45, .05, .01],
          y = [void 0, 1.85, 2.2, 1],
          F = [void 0, void 0, void 0, 1.5];
        d.startW = c[s], d.waveAmplitude = v[s], d.waveFrequency = f[s], _dependency2.Tween.stopAllByTarget(Q), _dependency2.tween(Q).bindNodeState(false).delay(U[s]).call(function () {
          d.waveProp.w = 200, d.waveDistance = I[s], d.waveSpeed = p[s], d.waveStrength = P[s], d.startWaveEffect(g[s]), dispatch(_dependency28.GameEvent.PLAY_SHOCK_EFFECT, {
            data: {
              type: _dependency30.EShockType.GAME_VIEW
            }
          });
        }).start(), App.uiManager.open({
          type: _dependency22.default,
          bundle: a.module,
          zIndex: _dependency4.ViewZOrder.UI,
          name: "金龍UIView",
          args: s
        }), _dependency2.tween(Q).bindNodeState(false).delay(y[s]).call(function () {
          d.waveProp.w = 200, d.startW = u[s], d.waveFrequency = h[s], d.waveAmplitude = L[s], d.waveDistance = N[s], d.waveSpeed = O[s], d.waveStrength = l[s], d.startWaveEffect(C[s]), dispatch(_dependency28.GameEvent.PLAY_SHOCK_EFFECT, {
            data: {
              type: _dependency30.EShockType.GAME_VIEW
            }
          });
        }).start(), null != F[s] && _dependency2.tween(Q).bindNodeState(false).delay(F[s]).call(function () {
          d.waveProp.w = 200, d.waveSpeed = D[s], d.startW = A[s], d.waveDistance = G[s], d.waveStrength = m[s], d.waveAmplitude = W[s], d.waveFrequency = R[s], d.startWaveEffect(x[s]), dispatch(_dependency28.GameEvent.PLAY_SHOCK_EFFECT, {
            data: {
              type: _dependency30.EShockType.GAME_VIEW
            }
          });
        }).start();
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (App.uiManager.effectCamera && (App.uiManager.effectCamera.node.active = !1), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !1), Q.getMachine().previous.id === Q.MG_EXPLODE_AND_DELETE_STATE.id) return Q.MG_DROP_SYMBOL_STATE.id;
        if (Q.getMachine().previous.id === Q.FG_EXPLODE_AND_DELETE_STATE.id) return Q.FG_DROP_SYMBOL_STATE.id;
        if (a.name === _dependency28.GameEvent.SHOW_DRAGON_END) switch (e.getData().parser.currentGameState.action) {
          case "spin":
            return Q.MG_SPIN_TO_STOP_STATE.id;
          case "freeSpin":
            return Q.FG_SPIN_TO_STOP_STATE.id;
        }
        return "";
      }
    };
  }
  var i = t.prototype;
  return i.processCloseAutoPlay = function () {
    0 === _dependency8.default.spinsRemaining && (_dependency8.default.active = !1), _dependency8.default.spinsRemaining <= -1 && (_dependency8.default.spinsRemaining = -1), _dependency8.default.active ? dispatch(_dependency1.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(_dependency1.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), _dependency8.default.spinsRemaining = 0);
  }, i.GET_ALL_STATES = function () {
    var t = [];
    for (var a in this) {
      var e = this[a];
      "object" == typeof e && "function" != typeof e && _dependency33.isState(e) && t.push(e);
    }
    return t;
  }, i.getMachine = function () {
    return null == this.stateMachine && (this.stateMachine = _dependency34.StateMachine.from(this.GET_ALL_STATES(), {
      sharedData: App.dataCenter.get(_dependency27.default)
    })), this.stateMachine;
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency27.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();

// Local simulation consumer compatibility.
import { EDITOR as __localEditor } from "cc/env";
import { installProjectFStateMachineCompatibility as __installLocalCompatibility } from "../backend/InstallStateMachineCompatibility";
if(!__localEditor)__installLocalCompatibility(_export3, _dependency28.GameEvent, dispatch);
