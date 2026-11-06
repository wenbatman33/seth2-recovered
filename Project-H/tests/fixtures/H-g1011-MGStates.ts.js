System.register("chunks:///_virtual/MGStates.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Config.ts", "./Bundles.ts", "./ServerModel.ts", "./UrlUtils.ts", "./AutoPlayModel.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./PlatformModel.ts", "./ReplayModel.ts", "./UrlModel.ts", "./type2.ts", "./CmmSlotUtils.ts", "./LogUtils.ts", "./SlotTableViewL.ts", "./SlotTableViewP.ts", "./GameConfigModel.ts", "./GameData.ts", "./GameTempo.ts", "./GameEvent.ts", "./GameSender.ts", "./types.ts", "./ThisProjectUtils.ts", "./StateFactory.ts", "./StateHelpers.ts", "./StateMachineManager.ts", "./StateId.ts", "./FullComboView.ts"], function (t) {
  "use strict";

  var a, e, n, i, r, _, s, S, o, c, u, d, E, I, T, p, l, N, A, L, f, M, m, O, G, P, W, R, g, h, D, C, v, U, y, H, b, B;
  return {
    setters: [function (t) {
      a = t.asyncToGenerator, e = t.regeneratorRuntime, n = t.createForOfIteratorHelperLoose;
    }, function (t) {
      i = t.cclegacy, r = t.tween;
    }, function (t) {
      _ = t.ViewZOrder;
    }, function (t) {
      s = t.EBundles;
    }, function (t) {
      S = t.default, o = t.EServerMode;
    }, function (t) {
      c = t.default;
    }, function (t) {
      u = t.default;
    }, function (t) {
      d = t.default;
    }, function (t) {
      E = t.SlotFrameworkEvent;
    }, function (t) {
      I = t.default;
    }, function (t) {
      T = t.default;
    }, function (t) {
      p = t.default;
    }, function (t) {
      l = t.ESpinStatus;
    }, function (t) {
      N = t.CmmSlotUtils;
    }, function (t) {
      A = t.getKeyStyle, L = t.KeyStyle;
    }, function (t) {
      f = t.default;
    }, function (t) {
      M = t.default;
    }, function (t) {
      m = t.default, O = t.EBTM;
    }, function (t) {
      G = t.default;
    }, function (t) {
      P = t.GameTempo;
    }, function (t) {
      W = t.GameEvent;
    }, function (t) {
      R = t.GameSender;
    }, function (t) {
      g = t.EBonusType, h = t.EGameType;
    }, function (t) {
      D = t.delay;
    }, function (t) {
      C = t.defineState;
    }, function (t) {
      v = t.calculateAutoSpin, U = t.needUpdateStake;
    }, function (t) {
      y = t.default, H = t.EStateMachineName;
    }, function (t) {
      b = t.StateId;
    }, function (t) {
      B = t.FullComboView;
    }],
    execute: function () {
      t("createMgStates", function (t) {
        return [C({
          id: b.MG_LOADING,
          initial: !0,
          transitionTo: function (t) {
            if (t.event.name == W.LOAD_COMPLETE) return b.MG_INIT;
          }
        }), C({
          id: b.MG_INIT,
          onEntry: (Y = a(e().mark(function a() {
            var n, i, r, u, d, T, l, m, O;
            return e().wrap(function (a) {
              for (;;) switch (a.prev = a.next) {
                case 0:
                  if (Log.d("%c MG_INIT_STATE ", A(L.Core)), n = c.hasParam("gn") && c.hasParam("t"), i = c.hasParam("spinId"), r = App.gameLoading, y.getStateName() !== H.GAME_STATE) {
                    a.next = 25;
                    break;
                  }
                  return a.next = 7, App.senderManager.get(R).initial();
                case 7:
                  return a.next = 9, D(P.LOADING_BAR_FINISH_DELAY_TIME);
                case 9:
                  if (t.data.currentGameType = h.MAIN_GAME, r.hideProgressBar(), r.hideGameLogo(), App.gameLoading.complete(function () {
                    dispatch(E.CLICK_GAME_LOADING_CONFIRM_BTN);
                  }), u = I.getData(), d = u.slotTablesOn, T = App.dataCenter.get(G).getData(), l = T.isResuming, m = "1" === p.getData().searchParams.table, !d || l || S.mode === o.STATIC) {
                    a.next = 23;
                    break;
                  }
                  if (!m) {
                    a.next = 20;
                    break;
                  }
                  return a.abrupt("return");
                case 20:
                  return O = N.getOrientationTarget(f, M), a.next = 23, App.uiManager.open({
                    type: O,
                    bundle: s[s.slotFramework],
                    zIndex: _.UI,
                    name: "機台選擇2",
                    args: !0
                  });
                case 23:
                  a.next = 33;
                  break;
                case 25:
                  if (y.getStateName() !== H.REPLAY_STATE) {
                    a.next = 33;
                    break;
                  }
                  if (!n) {
                    a.next = 29;
                    break;
                  }
                  a.next = 33;
                  break;
                case 29:
                  if (!i) {
                    a.next = 33;
                    break;
                  }
                  return a.next = 32, App.senderManager.get(R).replayInInitial();
                case 32:
                  r.complete();
                case 33:
                case "end":
                  return a.stop();
              }
            }, a);
          })), function () {
            return Y.apply(this, arguments);
          }),
          transitionGuard: function () {
            return y.getStateName() === H.GAME_STATE ? t.stateMachine.currentStateId == b.MG_INIT : y.getStateName() === H.REPLAY_STATE || void 0;
          },
          transitionTo: function (t) {
            var a = t.event,
              e = t.sharedData;
            return a.name == W.PARSER_INIT_COMPLETED ? e.getData().isResuming ? b.MG_WAIT_RESUME : b.MG_WAIT_SPIN : a.name === W.PARSER_REPLAY_COMPLETED && T.isReplay ? b.MG_WAIT_REPLAY : void 0;
          }
        }), C({
          id: b.MG_WAIT_REPLAY,
          onEntry: function (a) {
            var e = a.event;
            dispatch(E.UPDATE_SPIN_STATUS, {
              data: l.SPINING
            }), e.name === W.REPLAY_GAME_END || e.name === W.SHOW_BIG_WIN_END ? (dispatch(W.CHANGE_GAME_STYLE, {
              data: !0
            }), dispatch(E.SHOW_REPLAY_BOARD_ALERT), dispatch(W.CLEAR_ALL_WIN_LINE)) : r(t).delay(1.5).call(function () {
              dispatch(W.START_SPIN, {
                data: {
                  spinId: null
                }
              });
            }).start();
          },
          transitionTo: function (t) {
            if (t.event.name == W.START_SPIN) return b.MG_SPIN;
          }
        }), C({
          id: b.MG_WAIT_RESUME,
          onEntry: function () {
            dispatch(W.SHOW_RESUME_ALERT);
          },
          transitionTo: function (a) {
            if (a.event.name == W.START_RESUME) {
              var e;
              dispatch(E.UPDATE_SPIN_STATUS, {
                data: l.SPINING
              });
              var n = t.data.getData(),
                i = n.parser.currentGameState,
                r = i.startFreeGame,
                _ = i.totalWinnings;
              i.view;
              if (n.isResuming && 0 === _ && !1 === i.startFreeGame && !n.bonusState) return b.MG_CLOSE_SPIN;
              if ((null == n || null == (e = n.bonusState) ? void 0 : e.bonusType) === g.LUCKY_WEALTH) return b.MG_CLOSE_SPIN;
              if ((null == n ? void 0 : n.parser.currentGameState.isJp.length) > 0) return b.JP_WIN;
              if (r) return b.MG_SHOW_SCATTER;
              var s = t.data.setBigWinReach(_);
              return i.fullCombo ? b.MG_SHOW_FULL_COMBO : s ? b.MG_BIG_WIN : b.MG_SHOW_WIN_SUMMARY;
            }
          }
        }), C({
          id: b.MG_WAIT_SPIN,
          onEntry: function (a) {
            var e = a.sharedData;
            if (Log.d("%c MG_WAIT_SPIN_STATE ", A(L.Core)), dispatch(W.WAIT_SPIN_STATE), m.isSendClose = !1, u.active && u.spinsRemaining > 0 || u.active && -1 === u.spinsRemaining) {
              if (!t.slotData.checkBalanceAndAlert()) return void dispatch(E.UPDATE_SPIN_STATUS, {
                data: l.IDLE
              });
              var n = m.getData().nextSpinDelay;
              n > 0 ? r(t).delay(n).call(function () {
                dispatch(W.START_SPIN, {
                  data: {
                    spinId: null
                  }
                });
              }).start() : dispatch(W.START_SPIN, {
                data: {
                  spinId: null
                }
              });
            } else {
              var i = e.getData().parser.currentGameState.winSymbols ? e.getData().parser.winSymbols : [],
                _ = e.getData().parser.currentGameState.action;
              e.getData().parser.currentGameState.totalWinnings > 0 && i.length > 0 && "spin" == _ && dispatch(W.SHOW_WIN_LINE_CYCLE), dispatch(E.UPDATE_SPIN_STATUS, {
                data: l.IDLE
              });
            }
          },
          transitionGuard: function (t) {
            var a = t.event;
            return [W.START_SPIN, W.PARSER_REPLAY_COMPLETED].includes(a.name);
          },
          transitionTo: function (t) {
            var a = t.event;
            return a.name == W.START_SPIN ? b.MG_SPIN : a.name === W.PARSER_REPLAY_COMPLETED && T.isReplay ? b.MG_WAIT_REPLAY : void 0;
          }
        }), C({
          id: b.MG_SPIN,
          onEntry: function (a) {
            var e = a.event;
            dispatch(W.STOP_WILD, {}), dispatch(E.UPDATE_SPIN_STATUS, {
              data: l.SPINING
            }), dispatch(E.UPDATE_USER_BALANCE, {
              data: {
                balance: I.amount
              }
            });
            var n = m.getData().winAmountTime,
              i = e.data,
              _ = i.spinId,
              s = i.spinData;
            _ || dispatch(E.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: 0,
                tweenTime: n
              }
            }), v();
            var S = {
              ratioIndex: d.ratioIndex,
              ratioValue: d.ratioValue,
              stakeIndex: d.stakeIndex,
              stakeValue: d.stakeValue
            };
            if (dispatch(E.PLAY_SPIN_BTN_RELEASED_ANIM, null), T.isReplay) r(t).delay(.309).call(function () {
              dispatch(W.PARSER_SPIN_COMPLETED);
            }).start();else {
              if (t.data.testStaticSpinFlag) return;
              dispatch(E.SEND_SPIN_REQUEST, {
                data: {
                  spinId: _,
                  stakeVO: S,
                  updateStake: U(),
                  spinData: s
                }
              });
            }
          },
          transitionGuard: function (t) {
            var a = t.event;
            return [W.PARSER_SPIN_COMPLETED].includes(a.name);
          },
          transitionTo: function (t) {
            if (t.event.name == W.PARSER_SPIN_COMPLETED) return b.MG_SPIN_TO_STOP;
          }
        }), C({
          id: b.MG_SPIN_TO_STOP,
          onEntry: function () {
            dispatch(W.HIDE_SYMBOLS_WIN), dispatch(W.SET_REEL_RESULT), dispatch(W.CAN_STOP_SPIN);
          },
          transitionTo: function (a) {
            var e = a.event,
              n = a.sharedData;
            if (e.name === W.REEL_ALL_STOP) {
              if (dispatch(W.STOP_BTM, {
                data: O.REEL_SCROLL
              }), n.getData().parser.currentGameState.startFreeGame) return b.MG_SHOW_SCATTER;
              if (0 === t.data.getData().parser.currentGameState.totalWinnings) return b.MG_CLOSE_SPIN;
              var i = n.getData().parser.currentGameState,
                r = i.totalWinnings,
                _ = i.isJp,
                s = i.fullCombo,
                S = t.data.setBigWinReach(r);
              return _.length > 0 ? b.JP_WIN : s ? b.MG_SHOW_FULL_COMBO : null !== S ? b.MG_SHOW_ALL_WIN_LINE : b.MG_SHOW_WIN_SUMMARY;
            }
          }
        }), C({
          id: b.MG_SHOW_FULL_COMBO,
          onEntry: function () {
            dispatch(W.SHOW_BOARD_FRAME_ANIM, {
              complete: function () {}
            }), dispatch(W.SHOW_SYMBOLS_WIN, {
              complete: function () {
                dispatch(W.SHOW_ALL_WIN_LINE), r(t).delay(1.2).call(a(e().mark(function a() {
                  return e().wrap(function (a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, App.uiManager.open({
                          type: B,
                          bundle: t.data.module,
                          zIndex: _.UI,
                          name: "FullCombo"
                        });
                      case 2:
                        dispatch(W.SHOW_FULL_COMBO);
                      case 3:
                      case "end":
                        return a.stop();
                    }
                  }, a);
                }))).start();
              },
              data: !0
            });
          },
          transitionTo: function (a) {
            if (a.event.name === W.SHOW_FULL_COMBO_END) {
              var e = t.data.getData().parser.currentGameState.totalWinnings;
              return t.data.setBigWinReach(e) ? b.MG_BIG_WIN : (dispatch(W.QUICK_STOP_TOTAL_WINNINGS, {
                data: e
              }), dispatch(W.CLEAR_ALL_WIN_LINE), b.MG_CLOSE_SPIN);
            }
          }
        }), C({
          id: b.MG_BIG_WIN,
          onEntry: function () {
            dispatch(W.CLEAR_ALL_WIN_LINE), dispatch(W.HIDE_SYMBOLS_WIN);
            var a = {
              winnings: t.data.getData().parser.currentGameState.totalWinnings,
              tweenTime: 5 + 3 * t.data.getData().parser.bigwinReach.level,
              isUpdateInfoBarTotalWinnings: !0
            };
            dispatch(W.SHOW_BIG_WIN, {
              data: a
            });
          },
          transitionTo: function (t) {
            if (t.event.name === W.SHOW_BIG_WIN_END) return b.MG_CLOSE_SPIN;
          }
        }), C({
          id: b.MG_MYSTERY_JACKPOT,
          transitionGuard: function () {
            return !1;
          }
        }), C({
          id: b.MG_CLOSE_SPIN,
          onEntry: (i = a(e().mark(function a() {
            var i, _, s;
            return e().wrap(function (a) {
              for (;;) switch (a.prev = a.next) {
                case 0:
                  i = n(t.data.getData().gameState);
                case 1:
                  if ((_ = i()).done) {
                    a.next = 8;
                    break;
                  }
                  if (null == (s = _.value) || !s.fullCombo) {
                    a.next = 6;
                    break;
                  }
                  return dispatch(E.STOP_AUTO_SPIN), a.abrupt("break", 8);
                case 6:
                  a.next = 1;
                  break;
                case 8:
                  if (!(t.data.getData().parser.currentSpinIsEmpty && u.active && (u.spinsRemaining > 0 || -1 === u.spinsRemaining))) {
                    a.next = 11;
                    break;
                  }
                  return r(t).delay(0).call(function () {
                    dispatch(E.SEND_CLOSE_REQUEST, {
                      data: t.data.getData().spinId
                    });
                  }).start(), a.abrupt("return");
                case 11:
                  if (!T.isReplay) {
                    a.next = 14;
                    break;
                  }
                  return dispatch(W.REPLAY_GAME_END), a.abrupt("return");
                case 14:
                  t.data.testStaticSpinFlag ? (t.data.testStaticSpinFlag = !1, dispatch(W.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(E.SEND_CLOSE_REQUEST, {
                    data: t.data.getData().spinId
                  });
                case 15:
                case "end":
                  return a.stop();
              }
            }, a);
          })), function () {
            return i.apply(this, arguments);
          }),
          transitionTo: function (a) {
            var e = a.event,
              n = a.sharedData;
            return e.name == W.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(W.HIDE_SYMBOLS_WIN), dispatch(E.UPDATE_USER_BALANCE, {
              data: {
                balance: I.amount
              }
            }), t.processCloseAutoPlay(), t.data.tempAnimTopMap.clear(), n.getData().isResuming = !1, b.MG_WAIT_SPIN) : e.name == W.START_FORTUNE_GAME ? b.DROP_TREASURE_INTRO : e.name == W.START_JACKPOT_GAME ? b.JP_GAME_INTRO : e.name == W.START_LUCKY_WEALTH_GAME ? b.LUCKY_WEALTH_INTRO : e.name == W.REPLAY_GAME_END ? b.MG_WAIT_REPLAY : e.name == W.START_SPIN ? b.MG_SPIN : void 0;
          }
        }), C({
          id: b.JP_WIN,
          onEntry: function () {
            dispatch(W.SHOW_JP_SYMBOLS_WIN), r(t).delay(1.5).call(function () {
              dispatch(W.HIDE_SYMBOLS_WIN), dispatch(W.SHOW_JP, {});
            }).start();
          },
          transitionTo: function (t) {
            if (t.event.name === W.SHOW_JP_END) return b.MG_CLOSE_SPIN;
          }
        }), C({
          id: b.MG_SHOW_SCATTER,
          onEntry: function () {
            dispatch(W.SHOW_SCATTER_WIN);
          },
          transitionTo: function (a) {
            if (a.event.name === W.SHOW_SCATTER_WIN_END) {
              var e = t.data.getData().parser.currentGameState,
                n = e.totalWinnings - (e.currentWinnings || 0);
              return n > 0 && dispatch(E.QUICK_STOP_TOTAL_WINNINGS, {
                data: n
              }), b.MG_SHOW_WIN_SUMMARY;
            }
          }
        }), C({
          id: b.MG_SHOW_WIN_SUMMARY,
          onEntry: function () {
            var a = t.data.getData().parser.winSymbols ? t.data.getData().parser.winSymbols : [],
              e = t.data.getData().parser.currentGameState,
              n = e.totalWinnings,
              i = e.startFreeGame;
            a.length > 0 ? (dispatch(W.SHOW_WIN_SUMMARY), dispatch(W.SHOW_TOTAL_WIN_CASH), dispatch(W.CAN_SKIP_WIN_LINE)) : n > 0 && i ? dispatch(E.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: n,
                needComplete: !0
              },
              complete: function () {
                dispatch(W.SHOW_WIN_SUMMARY_END);
              }
            }) : (n > 0 && dispatch(E.QUICK_STOP_TOTAL_WINNINGS, {
              data: n
            }), dispatch(W.SHOW_WIN_SUMMARY_END));
          },
          transitionTo: function (a) {
            var e = a.event,
              n = t.data.getData().parser.currentGameState.startFreeGame;
            if (e.name === W.SHOW_WIN_SUMMARY_END) return n ? (t.data.currentGameType = h.FREE_GAME, dispatch(W.CLEAR_ALL_WIN_LINE), b.FG_SHOW_START_ALERT) : (dispatch(W.CLEAR_ALL_WIN_LINE), dispatch(W.SHOW_WIN_LINE_CYCLE_END), b.MG_CLOSE_SPIN);
          }
        }), C({
          id: b.MG_SHOW_ALL_WIN_LINE,
          onEntry: function () {
            dispatch(W.SHOW_ALL_WIN_LINE), dispatch(W.SHOW_SYMBOLS_WIN_ON_LINE, {
              complete: function () {
                dispatch(W.SHOW_ALL_WIN_LINE_END);
              },
              data: t.data.getData().parser.winSymbols
            });
          },
          transitionTo: function (t) {
            if (t.event.name === W.SHOW_ALL_WIN_LINE_END) return b.MG_BIG_WIN;
          }
        })];
        var i;
        var Y;
      }), i._RF.push({}, "8c305bWcmRHGJdBlocgMXX4", "MGStates", void 0), i._RF.pop();
    }
  };
});
