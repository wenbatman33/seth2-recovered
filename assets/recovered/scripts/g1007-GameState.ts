// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameState.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-UrlUtils";
import * as __dependency_5 from "./main-index";
import * as __dependency_6 from "./framework-AutoPlayModel";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-StakeModel";
import * as __dependency_9 from "./framework-SlotFrameworkEvent";
import * as __dependency_10 from "./framework-PlatformModel";
import * as __dependency_11 from "./framework-ReplayModel";
import * as __dependency_12 from "./framework-SettingsModel";
import * as __dependency_13 from "./framework-UrlModel";
import * as __dependency_14 from "./framework-type2";
import * as __dependency_15 from "./framework-ObjectUtils";
import * as __dependency_16 from "./g1007-IntroView";
import * as __dependency_17 from "./g1007-GameConfigModel";
import * as __dependency_18 from "./g1007-GameData";
import * as __dependency_19 from "./g1007-GameEvent";
import * as __dependency_20 from "./g1007-GameSender";
import * as __dependency_21 from "./g1007-types";
import * as __dependency_22 from "./g1007-StateMachineManager";
import * as __dependency_23 from "./framework-CmmSlotUtils";
import * as __dependency_24 from "./main-state";
import * as __dependency_25 from "./main-fsm";
var __export_0;
export { __export_0 as calculateAutoSpin };
var __export_1;
export { __export_1 as needUpdateStake };
var __export_2;
export { __export_2 as GameState };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "calculateAutoSpin":
      __export_0 = value;
      break;
    case "needUpdateStake":
      __export_1 = value;
      break;
    case "GameState":
      __export_2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, a, _, r, i, E, S, T, s, c, o, d, u, A, I, N, O, h, M, R, G, p, D, L, f, P, v, l, W, m;
function x() {
  if (__dependency_6.default.active && __dependency_6.default.spinsRemaining > 0) {
    if (App.dataCenter.get(__dependency_18.default).currentGameType === __dependency_21.EGameType.FREE_GAME) return;
    __dependency_6.default.spinsRemaining--;
  }
}
function C() {
  var t = {
      stakeIndex: __dependency_12.default.stakeIndex,
      ratioIndex: __dependency_12.default.ratioIndex
    },
    n = {
      stakeIndex: __dependency_8.default.stakeIndex,
      ratioIndex: __dependency_8.default.ratioIndex
    },
    e = __dependency_15.ObjectUtils.diffObjects(t, n);
  return Object.keys(e).length > 0;
}
__publish({
  calculateAutoSpin: x,
  needUpdateStake: C
}), __dependency_1.cclegacy._RF.push({}, "964543iy3JA7LDMvKlyENzS", "GameState", void 0);
__publish("GameState", function () {
  function t() {
    var t,
      n,
      _,
      s,
      A,
      O,
      L,
      W,
      m,
      H,
      U,
      y,
      B,
      F,
      Y,
      g = this;
    this.stateMachine = null, this.isFGResetMultiple = !1, this.checkSymbolsOutInterval = null, this.checkHoldSpaceInterval = null, this.MG_LOADING_STATE = {
      id: "MG_LOADING_STATE",
      initial: !0,
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.LOAD_COMPLETE].includes(n.name);
      },
      transitionTo: (t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        var e;
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = n.event, n.context, n.sharedData, e.name != __dependency_19.GameEvent.LOAD_COMPLETE) {
                t.next = 3;
                break;
              }
              return t.abrupt("return", g.MG_INIT_STATE.id);
            case 3:
              return t.abrupt("return", "");
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (n) {
        return t.apply(this, arguments);
      })
    }, this.MG_INIT_STATE = {
      id: "MG_INIT_STATE",
      onEntry: (n = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
        var n, e, _, r, T, s, c, o;
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (n = __dependency_4.default.hasParam("gn") && __dependency_4.default.hasParam("t"), e = __dependency_4.default.hasParam("spinId"), _ = App.gameLoading, __dependency_22.default.getStateName() !== __dependency_22.EStateMachineName.GAME_STATE) {
                t.next = 16;
                break;
              }
              return t.next = 6, App.senderManager.get(__dependency_20.GameSender).initial();
            case 6:
              _.hideProgressBar(), _.hideGameLogo(), App.uiManager.open({
                type: __dependency_16.IntroView,
                bundle: __dependency_3.EBundles[__dependency_3.EBundles.g1007],
                zIndex: __dependency_2.ViewZOrder.UILoading,
                name: "Intro"
              }), r = __dependency_10.default.getData(), T = r.slotTablesOn, s = App.dataCenter.get(__dependency_18.default).getData(), c = s.isResuming, o = "1" === __dependency_13.default.getData().searchParams.table, !T || c || o || dispatch(__dependency_19.GameEvent.OPEN_SLOT_TABLE), t.next = 24;
              break;
            case 16:
              if (__dependency_22.default.getStateName() !== __dependency_22.EStateMachineName.REPLAY_STATE) {
                t.next = 24;
                break;
              }
              if (!n) {
                t.next = 20;
                break;
              }
              t.next = 24;
              break;
            case 20:
              if (!e) {
                t.next = 24;
                break;
              }
              return t.next = 23, App.senderManager.get(__dependency_20.GameSender).replayInInitial();
            case 23:
              _.complete();
            case 24:
            case "end":
              return t.stop();
          }
        }, t);
      })), function () {
        return n.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return __dependency_22.default.getStateName() === __dependency_22.EStateMachineName.GAME_STATE ? g.stateMachine.currentStateId === g.MG_INIT_STATE.id : __dependency_22.default.getStateName() === __dependency_22.EStateMachineName.REPLAY_STATE || void 0;
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name == __dependency_19.GameEvent.PARSER_INIT_COMPLETED ? g.data.getData().isResuming ? g.MG_WAIT_RESUME_STATE.id : g.MG_WAIT_SPIN_STATE.id : n.name === __dependency_19.GameEvent.PARSER_REPLAY_COMPLETED && __dependency_11.default.isReplay ? g.MG_WAIT_REPLAY_STATE.id : "";
      },
      onExit: function () {}
    }, this.MG_WAIT_REPLAY_STATE = {
      id: "MG_WAIT_REPLAY_STATE",
      onEntry: (_ = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        var e;
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e = n.event, n.context, n.sharedData, e.name === __dependency_19.GameEvent.REPLAY_GAME_END || g.isFGResetMultiple ? dispatch(__dependency_9.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT) : __dependency_1.tween(g).bindNodeState(false).delay(1.5).call(function () {
                dispatch(__dependency_19.GameEvent.NEXT_SPIN), dispatch(__dependency_19.GameEvent.START_SPIN, {
                  data: {
                    spinId: null
                  }
                });
              }).start(), dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: __dependency_14.ESpinStatus.SPINING
              });
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return _.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.START_SPIN].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name == __dependency_19.GameEvent.START_SPIN ? g.MG_SPIN_STATE.id : "";
      }
    }, this.MG_WAIT_RESUME_STATE = {
      id: "MG_WAIT_RESUME_STATE",
      onEntry: (A = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.SHOW_RESUME_ALERT);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return A.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.START_RESUME].includes(n.name);
      },
      transitionTo: (s = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        var e, _, r, i;
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = n.event, n.context, n.sharedData, e.name != __dependency_19.GameEvent.START_RESUME) {
                t.next = 11;
                break;
              }
              if (_ = g.data.getData().parser.currentGameState, r = _.startFreeGame, i = _.winSymbols, dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: __dependency_14.ESpinStatus.SPINING
              }), !r) {
                t.next = 6;
                break;
              }
              return t.abrupt("return", g.MG_SHOW_WIN_STATE.id);
            case 6:
              if (!i.length) {
                t.next = 10;
                break;
              }
              return t.abrupt("return", g.MG_SHOW_WIN_STATE.id);
            case 10:
              return t.abrupt("return", g.MG_RESET_MULTIPLE_STATE.id);
            case 11:
              return t.abrupt("return", "");
            case 12:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return s.apply(this, arguments);
      })
    }, this.MG_WAIT_SPIN_STATE = {
      id: "MG_WAIT_SPIN_STATE",
      onEntry: (O = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (n.event, n.context, n.sharedData, !__dependency_6.default.active) {
                t.next = 4;
                break;
              }
              return __dependency_17.default.isHoldSpaceDown ? (dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: __dependency_14.ESpinStatus.SPINING
              }), g.checkHoldSpaceIsFalse(function () {
                dispatch(__dependency_19.GameEvent.SEND_AUTO_SPIN_REQUEST);
              })) : setTimeout(function () {
                dispatch(__dependency_19.GameEvent.SEND_AUTO_SPIN_REQUEST);
              }, 1), t.abrupt("return");
            case 4:
              g.checkHoldSpaceIsFalse(function () {
                g.stateMachine.currentStateId == g.MG_WAIT_SPIN_STATE.id && dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                  data: __dependency_14.ESpinStatus.IDLE
                });
              });
            case 5:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return O.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.START_SPIN].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name == __dependency_19.GameEvent.START_SPIN ? g.MG_SPIN_STATE.id : "";
      }
    }, this.MG_SPIN_STATE = {
      id: "MG_SPIN_STATE",
      onEntry: function (t) {
        var n = t.event,
          e = (t.context, t.sharedData, __dependency_17.default.getData()),
          a = e.winAmountTime,
          _ = e.isXtraBetOn,
          i = n.data,
          E = i.spinId,
          S = i.spinData,
          T = {
            ratioIndex: __dependency_8.default.ratioIndex,
            ratioValue: __dependency_8.default.ratioValue,
            stakeIndex: __dependency_8.default.stakeIndex,
            stakeValue: __dependency_8.default.stakeValue
          };
        E || dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: 0,
            tweenTime: a
          }
        }), dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
          data: __dependency_14.ESpinStatus.SPINING
        }), dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: __dependency_10.default.amount
          }
        }), dispatch(__dependency_9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM), dispatch(__dependency_19.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_17.EBTM.SPIN
          }
        }), x(), __dependency_11.default.isReplay ? __dependency_1.tween(g).bindNodeState(false).delay(.3).call(function () {
          dispatch(__dependency_19.GameEvent.PARSER_SPIN_COMPLETED);
        }).start() : dispatch(__dependency_9.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
          data: {
            spinId: E,
            stakeVO: T,
            isXtraBetOn: _,
            updateStake: C(),
            spinData: S
          }
        }), dispatch(__dependency_19.GameEvent.SYMBOLS_OUT);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.PARSER_SPIN_COMPLETED].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name == __dependency_19.GameEvent.PARSER_SPIN_COMPLETED ? g.MG_SPIN_TO_STOP_STATE.id : "";
      }
    }, this.MG_SPIN_TO_STOP_STATE = {
      id: "MG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        g.sendSymbolsOutEnd();
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SYMBOLS_OUT_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.SYMBOLS_OUT_END) {
          var e = g.data.checkIsSpecifyMultiple(),
            a = g.data.checkIsEmptySpinWithJP();
          return g.data.checkIsBigPrize() ? g.SHOW_BIG_PRIZE_SIGNAL_STATE.id : e ? g.MOVE_TO_SPECIFY_MULTIPLE_STATE.id : a ? g.SHOW_JP_GAME_STAR_STATE.id : g.MG_SYMBOLS_IN_STATE.id;
        }
        return "";
      }
    }, this.CREATE_GROUP_SYMBOLS_STATE = {
      id: "CREATE_GROUP_SYMBOLS_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var n = g.data.getData().newGroupSymbols;
        n.some(function (t) {
          return 5 === t.size;
        }) ? dispatch(__dependency_19.GameEvent.SHOW_FULL_CHARACTER_VIEW) : (dispatch(__dependency_19.GameEvent.SHOW_CH_TRANS_ANIM), dispatch(__dependency_19.GameEvent.SHOW_BOARD_TRANS_ANIM));
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.CREATE_GROUP_SYMBOLS_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.CREATE_GROUP_SYMBOLS_END) {
          var e = g.data.getData().parser.currentGameState,
            a = e.winSymbols,
            _ = e.startFreeGame,
            r = e.currentView + 1 === e.totalViews,
            i = g.data.checkIsMG();
          return a.length ? i ? g.MG_SHOW_WIN_STATE.id : g.FG_SHOW_WIN_STATE.id : _ ? i ? g.SCATTER_WIN_AND_SHOW_INTRO_GAME_STATE.id : g.SCATTER_WIN_AND_SHOW_INCREASE_REMAINING_STATE.id : i ? g.MG_RESET_MULTIPLE_STATE.id : r ? g.FG_SHOW_SUMMARY_ALERT_STATE.id : g.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.SCATTER_WIN_AND_SHOW_INTRO_GAME_STATE = {
      id: "SCATTER_WIN_AND_SHOW_INTRO_GAME_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SHOW_SCATTER_WIN), dispatch(__dependency_19.GameEvent.RESET_MULTIPLE);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SHOW_SCATTER_WIN_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.SHOW_SCATTER_WIN_END ? g.FG_SHOW_INTRO_ALERT_STATE.id : "";
      }
    }, this.SCATTER_WIN_AND_SHOW_INCREASE_REMAINING_STATE = {
      id: "SCATTER_WIN_AND_SHOW_INCREASE_REMAINING_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SHOW_SCATTER_WIN);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SHOW_SCATTER_WIN_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.SHOW_SCATTER_WIN_END ? g.FG_SHOW_INCREASE_REMAINING.id : "";
      }
    }, this.MG_SHOW_WIN_STATE = {
      id: "MG_SHOW_WIN_STATE",
      onEntry: (L = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        var e, _, r, i, E, S, T, s;
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (n.event, n.context, n.sharedData, e = g.data.getData(), _ = e.bonusState, !g.data.getData().parser.currentGameState.startFreeGame) {
                t.next = 7;
                break;
              }
              return dispatch(__dependency_19.GameEvent.SHOW_SCATTER_WIN), dispatch(__dependency_19.GameEvent.RESET_MULTIPLE), t.abrupt("return");
            case 7:
              if ((null == _ ? void 0 : _.bonusType) != __dependency_21.EBonusType.JP_GAME) {
                t.next = 11;
                break;
              }
              dispatch(__dependency_19.GameEvent.SHOW_JACKPOT_WIN), t.next = 34;
              break;
            case 11:
              return r = g.data.getMultipleWinnings(), i = g.data.setBigWinReach(r), t.next = 15, __dependency_23.CmmSlotUtils.delayTime(.4);
            case 15:
              return dispatch(__dependency_19.GameEvent.SHOW_SYMBOLS_WIN), t.next = 18, __dependency_23.CmmSlotUtils.delayTime(.618);
            case 18:
              if (!i) {
                t.next = 24;
                break;
              }
              return t.next = 21, __dependency_23.CmmSlotUtils.delayTime(1);
            case 21:
              dispatch(__dependency_19.GameEvent.SHOW_BIG_WIN), t.next = 34;
              break;
            case 24:
              if (E = __dependency_8.default.totalStake, S = g.data.getData().parser.currentGameState, T = S.currentTimes, s = S.bonusTimes, !(g.data.getWinningsSum() * (T > s ? T : s) < 1.2 * E)) {
                t.next = 31;
                break;
              }
              t.next = 33;
              break;
            case 31:
              return t.next = 33, __dependency_23.CmmSlotUtils.delayTime(1);
            case 33:
              dispatch(__dependency_19.GameEvent.SHOW_WIN_SCORE);
            case 34:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return L.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SHOW_WIN_SCORE_END, __dependency_19.GameEvent.SHOW_SCATTER_WIN_END, __dependency_19.GameEvent.SHOW_JACKPOT_WIN_END, __dependency_19.GameEvent.SHOW_BIG_WIN_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.SHOW_WIN_SCORE_END) return g.REMOVE_WIN_SYMBOLS_STATE.id;
        if (n.name === __dependency_19.GameEvent.SHOW_SCATTER_WIN_END) return g.FG_SHOW_INTRO_ALERT_STATE.id;
        if (n.name === __dependency_19.GameEvent.SHOW_JACKPOT_WIN_END) return g.JP_GAME_INTRO_STATE.id;
        if (n.name === __dependency_19.GameEvent.SHOW_BIG_WIN_END) {
          var e = g.data.getData().parser.currentGameState.totalWinnings;
          return dispatch(__dependency_9.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
            data: e
          }), g.REMOVE_WIN_SYMBOLS_STATE.id;
        }
        return "";
      }
    }, this.REMOVE_WIN_SYMBOLS_STATE = {
      id: "REMOVE_WIN_SYMBOLS_STATE",
      onEntry: (W = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.REMOVE_WIN_SYMBOLS);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return W.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.REMOVE_WIN_SYMBOLS_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return null != g.data.getData().parser.currentGameState.randomWildPos ? g.CREATE_RANDOM_WILD_STATE.id : n.name === __dependency_19.GameEvent.REMOVE_WIN_SYMBOLS_END ? g.MOVE_MULTIPLE_TIMES_STATE.id : "";
      }
    }, this.CREATE_RANDOM_WILD_STATE = {
      id: "CREATE_RANDOM_WILD_STATE",
      onEntry: (m = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.CREATE_RANDOM_WILD);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return m.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.CREATE_RANDOM_WILD_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.CREATE_RANDOM_WILD_END ? g.MOVE_MULTIPLE_TIMES_STATE.id : "";
      }
    }, this.MOVE_MULTIPLE_TIMES_STATE = {
      id: "MOVE_MULTIPLE_TIMES_STATE",
      onEntry: (H = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.MOVE_MULTIPLE);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return H.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.MOVE_MULTIPLE_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.MOVE_MULTIPLE_END ? g.CURRENT_SYMBOLS_FALL_STATE.id : "";
      }
    }, this.CURRENT_SYMBOLS_FALL_STATE = {
      id: "CURRENT_SYMBOLS_FALL_STATE",
      onEntry: (U = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.CURRENT_SYMBOLS_FALL);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return U.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.CURRENT_SYMBOLS_FALL_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.CURRENT_SYMBOLS_FALL_END ? g.SYMBOLS_RECHARGE_STATE.id : "";
      }
    }, this.SYMBOLS_RECHARGE_STATE = {
      id: "SYMBOLS_RECHARGE_STATE",
      onEntry: (y = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.NEXT_SPIN), dispatch(__dependency_19.GameEvent.SYMBOLS_RECHARGE);
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return y.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SYMBOLS_RECHARGE_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event,
          e = (t.context, t.sharedData, g.data.getData().newGroupSymbols),
          a = g.data.getData().parser.currentGameState,
          _ = a.winSymbols,
          r = a.currentView,
          i = a.totalViews,
          E = a.startFreeGame;
        if (n.name === __dependency_19.GameEvent.SYMBOLS_RECHARGE_END) {
          var S = r + 1 === i,
            T = g.data.checkIsMG();
          return e.length ? g.CREATE_GROUP_SYMBOLS_STATE.id : _.length ? T ? g.MG_SHOW_WIN_STATE.id : g.FG_SHOW_WIN_STATE.id : T ? E ? g.MG_SHOW_WIN_STATE.id : g.MG_RESET_MULTIPLE_STATE.id : E ? g.FG_SHOW_WIN_STATE.id : S ? g.FG_SHOW_SUMMARY_ALERT_STATE.id : g.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.MG_RESET_MULTIPLE_STATE = {
      id: "MG_RESET_MULTIPLE_STATE",
      onEntry: (B = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.RESET_MULTIPLE);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return B.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.RESET_MULTIPLE_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.RESET_MULTIPLE_END ? g.MG_CLOSE_SPIN_STATE.id : "";
      }
    }, this.FG_RESET_MULTIPLE_STATE = {
      id: "FG_RESET_MULTIPLE_STATE",
      onEntry: (F = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              n.event, n.context, n.sharedData, dispatch(__dependency_19.GameEvent.RESET_MULTIPLE);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return F.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.RESET_MULTIPLE_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.RESET_MULTIPLE_END ? __dependency_11.default.isReplay ? (g.isFGResetMultiple = !0, g.MG_WAIT_REPLAY_STATE.id) : g.MG_WAIT_SPIN_STATE.id : "";
      }
    }, this.MOVE_TO_SPECIFY_MULTIPLE_STATE = {
      id: "MOVE_TO_SPECIFY_MULTIPLE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SHOW_CH_STRIKE_ANIM), dispatch(__dependency_19.GameEvent.SHOW_BOARD_STRIKE_ANIM);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END ? g.MG_SYMBOLS_IN_STATE.id : "";
      }
    }, this.FG_MOVE_TO_SPECIFY_MULTIPLE_STATE = {
      id: "FG_MOVE_TO_SPECIFY_MULTIPLE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SHOW_CH_STRIKE_ANIM), dispatch(__dependency_19.GameEvent.SHOW_BOARD_STRIKE_ANIM);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END ? g.FG_SYMBOLS_IN_STATE.id : "";
      }
    }, this.SHOW_JP_GAME_STAR_STATE = {
      id: "SHOW_JP_GAME_STAR_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SHOW_SIX_POINT_STAR);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SHOW_JP_GAME_STAR_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.SHOW_JP_GAME_STAR_END ? g.MG_SYMBOLS_IN_STATE.id : "";
      }
    }, this.SHOW_BIG_PRIZE_SIGNAL_STATE = {
      id: "SHOW_BIG_PRIZE_SIGNAL_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SHOW_BIG_PRIZE_SIGNAL);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SHOW_BIG_PRIZE_SIGNAL_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.SHOW_BIG_PRIZE_SIGNAL_END) {
          var e = g.data.checkIsSpecifyMultiple(),
            a = g.data.checkIsEmptySpinWithJP();
          return e ? g.MOVE_TO_SPECIFY_MULTIPLE_STATE.id : a ? g.SHOW_JP_GAME_STAR_STATE.id : g.MG_SYMBOLS_IN_STATE.id;
        }
        return "";
      }
    }, this.MG_SYMBOLS_IN_STATE = {
      id: "MG_SYMBOLS_IN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SYMBOLS_IN);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SYMBOLS_IN_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.SYMBOLS_IN_END) {
          var e = g.data.getData().newGroupSymbols,
            a = g.data.getData().parser.currentGameState,
            _ = a.startFreeGame,
            r = a.winSymbols;
          return e.length ? g.CREATE_GROUP_SYMBOLS_STATE.id : _ || r.length ? g.MG_SHOW_WIN_STATE.id : g.MG_RESET_MULTIPLE_STATE.id;
        }
        return "";
      }
    }, this.MG_CLOSE_SPIN_STATE = {
      id: "MG_CLOSE_SPIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var n = g.data.getData().bonusState;
        if ((null == n ? void 0 : n.bonusType) == __dependency_21.EBonusType.JP_GAME) dispatch(__dependency_19.GameEvent.SHOW_JACKPOT_WIN);else if ((null == n ? void 0 : n.bonusType) == __dependency_21.EBonusType.NO_WIN_REWARD) dispatch(__dependency_19.GameEvent.SHOW_TREASURE_VIEW);else {
          if (__dependency_11.default.isReplay) return void dispatch(__dependency_19.GameEvent.REPLAY_GAME_END);
          dispatch(__dependency_9.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
            data: g.data.getData().spinId
          });
        }
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, __dependency_19.GameEvent.SHOW_JACKPOT_WIN_END, __dependency_19.GameEvent.SHOW_TREASURE_VIEW_END, __dependency_19.GameEvent.REPLAY_GAME_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name == __dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: __dependency_10.default.amount
          }
        }), g.processCloseAutoPlay(), g.data.getData().isResuming = !1, g.MG_WAIT_SPIN_STATE.id) : n.name === __dependency_19.GameEvent.SHOW_JACKPOT_WIN_END ? g.JP_GAME_INTRO_STATE.id : n.name === __dependency_19.GameEvent.SHOW_TREASURE_VIEW_END ? g.NO_WIN_REWARD_CLOSE_STATE.id : n.name === __dependency_19.GameEvent.REPLAY_GAME_END ? g.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.FG_CLOSE_SPIN_STATE = {
      id: "FG_CLOSE_SPIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        __dependency_11.default.isReplay ? dispatch(__dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED) : dispatch(__dependency_9.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: g.data.getData().spinId
        });
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name == __dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: __dependency_10.default.amount
          }
        }), g.processCloseAutoPlay(), g.data.getData().isResuming = !1, g.FG_RESET_MULTIPLE_STATE.id) : "";
      }
    }, this.FG_SHOW_INTRO_ALERT_STATE = {
      id: "FG_SHOW_INTRO_ALERT_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SHOW_FG_INTRO_ALERT);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.CLICK_START_FREE_GAME].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.CLICK_START_FREE_GAME ? g.FG_WAIT_SPIN_STATE.id : "";
      }
    }, this.FG_SHOW_SUMMARY_ALERT_STATE = {
      id: "FG_SHOW_SUMMARY_ALERT_STATE",
      onEntry: function () {
        dispatch(__dependency_19.GameEvent.SHOW_FG_SUMMARY_ALERT);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.CLICK_FINISH_FREE_GAME].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.CLICK_FINISH_FREE_GAME) {
          var e = g.data.getData().parser.currentGameState.totalWinnings;
          return g.data.setBigWinReach(e) ? g.SHOW_TOTAL_BIGWIN_STATE.id : g.FG_CLOSE_SPIN_STATE.id;
        }
        return "";
      }
    }, this.SHOW_TOTAL_BIGWIN_STATE = {
      id: "SHOW_TOTAL_BIGWIN_STATE",
      onEntry: function () {
        dispatch(__dependency_19.GameEvent.RESET_MULTIPLE), dispatch(__dependency_19.GameEvent.SHOW_TOTAL_BIG_WIN);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SHOW_BIG_WIN_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.SHOW_BIG_WIN_END ? g.FG_CLOSE_SPIN_STATE.id : "";
      }
    }, this.FG_WAIT_SPIN_STATE = {
      id: "FG_WAIT_SPIN_STATE",
      onEntry: function () {
        dispatch(__dependency_19.GameEvent.UPDATE_FG_REMAINING), dispatch(__dependency_19.GameEvent.CHANGE_FG_SPIN_STATE), dispatch(__dependency_9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.CHANGE_FG_SPIN_STATE].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.CHANGE_FG_SPIN_STATE ? g.FG_SPIN_TO_STOP_STATE.id : "";
      }
    }, this.FG_SPIN_TO_STOP_STATE = {
      id: "FG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        setTimeout(function () {
          dispatch(__dependency_19.GameEvent.NEXT_SPIN), dispatch(__dependency_19.GameEvent.SYMBOLS_OUT), g.sendSymbolsOutEnd(), __dependency_17.default.isHoldSpaceDown && setTimeout(function () {
            dispatch(__dependency_19.GameEvent.START_QUICK_STOP);
          }, 350);
        }, 400);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SYMBOLS_OUT_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.SYMBOLS_OUT_END ? g.data.checkIsSpecifyMultiple() ? g.FG_MOVE_TO_SPECIFY_MULTIPLE_STATE.id : g.FG_SYMBOLS_IN_STATE.id : "";
      }
    }, this.FG_SYMBOLS_IN_STATE = {
      id: "FG_SYMBOLS_IN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.SYMBOLS_IN);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SYMBOLS_IN_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.SYMBOLS_IN_END) {
          var e = g.data.getData().newGroupSymbols,
            a = g.data.getData().parser.currentGameState,
            _ = a.startFreeGame,
            r = a.winSymbols,
            i = a.currentView + 1 === a.totalViews;
          return e.length ? g.CREATE_GROUP_SYMBOLS_STATE.id : i ? g.FG_SHOW_SUMMARY_ALERT_STATE.id : _ || r.length ? g.FG_SHOW_WIN_STATE.id : g.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_WIN_STATE = {
      id: "FG_SHOW_WIN_STATE",
      onEntry: (Y = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
        var e, _;
        return __dependency_0.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (n.event, n.context, n.sharedData, !g.data.getData().parser.currentGameState.startFreeGame) {
                t.next = 6;
                break;
              }
              dispatch(__dependency_19.GameEvent.SHOW_SCATTER_WIN), t.next = 14;
              break;
            case 6:
              return e = g.data.getMultipleWinnings(), _ = g.data.setBigWinReach(e), t.next = 10, __dependency_23.CmmSlotUtils.delayTime(.4);
            case 10:
              return dispatch(__dependency_19.GameEvent.SHOW_SYMBOLS_WIN), t.next = 13, __dependency_23.CmmSlotUtils.delayTime(.618);
            case 13:
              _ ? dispatch(__dependency_19.GameEvent.SHOW_BIG_WIN) : dispatch(__dependency_19.GameEvent.SHOW_WIN_SCORE);
            case 14:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return Y.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.SHOW_WIN_SCORE_END, __dependency_19.GameEvent.SHOW_SCATTER_WIN_END, __dependency_19.GameEvent.SHOW_BIG_WIN_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        if (n.name === __dependency_19.GameEvent.SHOW_WIN_SCORE_END) return g.REMOVE_WIN_SYMBOLS_STATE.id;
        if (n.name === __dependency_19.GameEvent.SHOW_SCATTER_WIN_END) return g.FG_SHOW_INCREASE_REMAINING.id;
        if (n.name === __dependency_19.GameEvent.SHOW_BIG_WIN_END) {
          var e = g.data.getData().parser.currentGameState.totalWinnings;
          return dispatch(__dependency_9.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
            data: e
          }), g.REMOVE_WIN_SYMBOLS_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_INCREASE_REMAINING = {
      id: "FG_SHOW_INCREASE_REMAINING",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.INCREASE_FG_REMAINING);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.INCREASE_FG_REMAINING_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.INCREASE_FG_REMAINING_END ? g.FG_WAIT_SPIN_STATE.id : "";
      }
    }, this.JP_GAME_INTRO_STATE = {
      id: "JP_GAME_INTRO_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(__dependency_19.GameEvent.OPEN_JACKPOT_GAME_VIEW);
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.JACKPOT_GAME_PICK_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.JACKPOT_GAME_PICK_END ? g.JP_GAME_CLOSE_STATE.id : "";
      }
    }, this.JP_GAME_CLOSE_STATE = {
      id: "JP_GAME_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        __dependency_11.default.isReplay ? dispatch(__dependency_19.GameEvent.REPLAY_GAME_END) : (dispatch(__dependency_9.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(__dependency_9.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: g.data.getData().spinId
        }));
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, __dependency_19.GameEvent.REPLAY_GAME_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: __dependency_10.default.amount
          }
        }), g.MG_WAIT_SPIN_STATE.id) : n.name === __dependency_19.GameEvent.REPLAY_GAME_END ? g.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.NO_WIN_REWARD_CLOSE_STATE = {
      id: "NO_WIN_REWARD_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        __dependency_11.default.isReplay ? dispatch(__dependency_19.GameEvent.REPLAY_GAME_END) : (dispatch(__dependency_9.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(__dependency_9.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: g.data.getData().spinId
        }));
      },
      transitionGuard: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return [__dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, __dependency_19.GameEvent.REPLAY_GAME_END].includes(n.name);
      },
      transitionTo: function (t) {
        var n = t.event;
        t.context, t.sharedData;
        return n.name === __dependency_19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: __dependency_10.default.amount
          }
        }), g.MG_WAIT_SPIN_STATE.id) : n.name === __dependency_19.GameEvent.REPLAY_GAME_END ? g.MG_WAIT_REPLAY_STATE.id : "";
      }
    };
  }
  var _ = t.prototype;
  return _.processCloseAutoPlay = function () {
    0 === __dependency_6.default.spinsRemaining && (__dependency_6.default.active = !1), __dependency_6.default.spinsRemaining <= -1 && (__dependency_6.default.spinsRemaining = -1), __dependency_6.default.active ? dispatch(__dependency_9.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(__dependency_9.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), __dependency_6.default.spinsRemaining = 0);
  }, _.sendSymbolsOutEnd = function () {
    var t = this;
    this.checkSymbolsOutInterval = setInterval(function () {
      __dependency_17.default.symbolsOutResolved && (__dependency_17.default.symbolsOutResolved = !1, dispatch(__dependency_19.GameEvent.SYMBOLS_OUT_END), clearInterval(t.checkSymbolsOutInterval));
    }, 1);
  }, _.checkHoldSpaceIsFalse = function (t) {
    var n = this;
    clearInterval(this.checkHoldSpaceInterval), this.checkHoldSpaceInterval = setInterval(function () {
      __dependency_17.default.isHoldSpaceDown || (t && t(), clearInterval(n.checkHoldSpaceInterval));
    }, 10);
  }, _.GET_ALL_STATES = function () {
    var t = [];
    for (var n in this) {
      var e = this[n];
      "object" == typeof e && "function" != typeof e && __dependency_24.isState(e) && t.push(e);
    }
    return t;
  }, _.getMachine = function () {
    return null == this.stateMachine && (this.stateMachine = __dependency_25.StateMachine.from(this.GET_ALL_STATES(), {
      sharedData: App.dataCenter.get(__dependency_18.default)
    })), this.stateMachine;
  }, __dependency_0.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_18.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_7.default);
    }
  }]), t;
}());
__dependency_1.cclegacy._RF.pop();
// Optional isolated QA observation; no polling or change to state transitions.
const __getLocalGameMachine=__export_2.prototype.getMachine;
__export_2.prototype.getMachine=function(...args){const machine=__getLocalGameMachine.apply(this,args);if(globalThis.__hadesLocalState&&!machine.__localObserved){machine.__localObserved=true;machine.subscribe(state=>globalThis.__hadesLocalState?.(state.currentStateId));}return machine;};
