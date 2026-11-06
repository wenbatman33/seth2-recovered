System.register("chunks:///_virtual/GameState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Config.ts", "./Bundles.ts", "./UrlUtils.ts", "./index.ts", "./AutoPlayModel.ts", "./SlotFrameworkData.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./PlatformModel.ts", "./ReplayModel.ts", "./SettingsModel.ts", "./UrlModel.ts", "./type2.ts", "./CmmSlotUtils.ts", "./ObjectUtils.ts", "./NoTouchingView.ts", "./SlotTableViewL.ts", "./SlotTableViewP.ts", "./FreeGameAlertView.ts", "./GameConfigModel.ts", "./GameData.ts", "./GameSymbolID.ts", "./GameEvent.ts", "./GameSender.ts", "./types.ts", "./StateMachineManager.ts", "./ThisProjectUtils.ts", "./GameTempo.ts", "./FullComboView.ts", "./state.ts", "./fsm.ts"], function (t) {
  "use strict";

  var a, e, n, r, i, _, s, c, o, S, T, u, d, E, A, p, I, N, h, G, f, l, O, W, L, D, R, M, m, v, P, x, g, C, F, H, y, U;
  return {
    setters: [function (t) {
      a = t.createClass, e = t.createForOfIteratorHelperLoose, n = t.asyncToGenerator, r = t.regeneratorRuntime;
    }, function (t) {
      i = t.cclegacy, _ = t.tween;
    }, function (t) {
      s = t.ViewZOrder;
    }, function (t) {
      c = t.EBundles;
    }, function (t) {
      o = t.default;
    }, null, function (t) {
      S = t.default;
    }, function (t) {
      T = t.default;
    }, function (t) {
      u = t.default;
    }, function (t) {
      d = t.SlotFrameworkEvent;
    }, function (t) {
      E = t.default;
    }, function (t) {
      A = t.default;
    }, function (t) {
      p = t.default;
    }, function (t) {
      I = t.default;
    }, function (t) {
      N = t.ESpinStatus;
    }, function (t) {
      h = t.CmmSlotUtils;
    }, function (t) {
      G = t.ObjectUtils;
    }, function (t) {
      f = t.default;
    }, function (t) {
      l = t.default;
    }, function (t) {
      O = t.default;
    }, function (t) {
      W = t.FreeGameAlertView;
    }, function (t) {
      L = t.EBTM, D = t.default;
    }, function (t) {
      R = t.default;
    }, function (t) {
      M = t.EBackendSymbolID;
    }, function (t) {
      m = t.GameEvent;
    }, function (t) {
      v = t.GameSender;
    }, function (t) {
      P = t.EGameType;
    }, function (t) {
      x = t.default, g = t.EStateMachineName;
    }, function (t) {
      C = t.delay;
    }, function (t) {
      F = t.GameTempo;
    }, function (t) {
      H = t.FullComboView;
    }, function (t) {
      y = t.isState;
    }, function (t) {
      U = t.StateMachine;
    }],
    execute: function () {
      function w() {
        if (S.active && S.spinsRemaining > 0) {
          if (App.dataCenter.get(R).currentGameType === P.FREE_GAME) return;
          S.spinsRemaining--;
        }
      }
      function B() {
        var t = {
            stakeIndex: p.stakeIndex,
            ratioIndex: p.ratioIndex
          },
          a = {
            stakeIndex: u.stakeIndex,
            ratioIndex: u.ratioIndex
          },
          e = G.diffObjects(t, a);
        return Object.keys(e).length > 0;
      }
      t({
        calculateAutoSpin: w,
        needUpdateStake: B
      }), i._RF.push({}, "bc13c0OlfNBlaF6QuBQOjkW", "GameState", void 0);
      t("GameState", function () {
        function t() {
          var t,
            a,
            i,
            T,
            p,
            G,
            y,
            U,
            b,
            Y,
            k,
            J,
            K,
            V,
            Q,
            j,
            z,
            X,
            Z = this;
          this.stateMachine = null, this.MG_LOADING_STATE = {
            id: "MG_LOADING_STATE",
            initial: !0,
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: (t = n(r().mark(function t(a) {
              var e;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e = a.event, a.context, a.sharedData, e.name != m.LOAD_COMPLETE) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", Z.MG_INIT_STATE.id);
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
            onEntry: (a = n(r().mark(function t() {
              var a, e, n, i, _, S, T, u, A;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = o.hasParam("gn") && o.hasParam("t"), e = o.hasParam("spinId"), n = App.gameLoading, x.getStateName() !== g.GAME_STATE) {
                      t.next = 26;
                      break;
                    }
                    return t.next = 6, App.senderManager.get(v).initial();
                  case 6:
                    return t.next = 8, C(F.LOADING_BAR_FINISH_DELAY_TIME);
                  case 8:
                    if (Z.data.currentGameType = P.MAIN_GAME, n.hideProgressBar(), n.hideGameLogo(), App.gameLoading.complete(function () {
                      dispatch(d.CLICK_GAME_LOADING_CONFIRM_BTN);
                    }), i = E.getData(), _ = i.slotTablesOn, S = App.dataCenter.get(R).getData(), T = S.isResuming, u = "1" === I.getData().searchParams.table, !_ || T) {
                      t.next = 24;
                      break;
                    }
                    if (!u) {
                      t.next = 19;
                      break;
                    }
                    return t.abrupt("return");
                  case 19:
                    return A = h.getOrientationTarget(l, O), t.next = 22, App.uiManager.open({
                      type: A,
                      bundle: c[c.slotFramework],
                      zIndex: s.UI,
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
                    if (x.getStateName() !== g.REPLAY_STATE) {
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
                    return t.next = 33, App.senderManager.get(v).replayInInitial();
                  case 33:
                    n.complete();
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
              return x.getStateName() === g.GAME_STATE ? Z.stateMachine.currentStateId == Z.MG_INIT_STATE.id : x.getStateName() === g.REPLAY_STATE || void 0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              return a.name == m.PARSER_INIT_COMPLETED ? e.getData().isResuming ? Z.MG_WAIT_RESUME_STATE.id : Z.MG_WAIT_SPIN_STATE.id : a.name === m.PARSER_REPLAY_COMPLETED && A.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : "";
            },
            onExit: function () {}
          }, this.MG_WAIT_REPLAY_STATE = {
            id: "MG_WAIT_REPLAY_STATE",
            onEntry: (i = n(r().mark(function t(a) {
              var e;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e = a.event, a.context, a.sharedData, dispatch(d.UPDATE_SPIN_STATUS, {
                      data: N.SPINING
                    }), e.name === m.REPLAY_GAME_END || e.name === m.SHOW_BIG_WIN_END ? (dispatch(d.SHOW_REPLAY_BOARD_ALERT), dispatch(m.CLEAR_ALL_WIN_LINE)) : _(Z).delay(1.5).call(function () {
                      dispatch(m.START_SPIN, {
                        data: {
                          spinId: null
                        }
                      });
                    }).start();
                  case 3:
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
              return a.name == m.START_SPIN ? Z.MG_SPIN_STATE.id : "";
            }
          }, this.MG_WAIT_RESUME_STATE = {
            id: "MG_WAIT_RESUME_STATE",
            onEntry: (p = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_RESUME_ALERT);
                  case 2:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return p.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: (T = n(r().mark(function t(a) {
              var e, n, i, s;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e = a.event, a.context, a.sharedData, dispatch(d.UPDATE_SPIN_STATUS, {
                      data: N.SPINING
                    }), t.next = 4, new Promise(function (t) {
                      _(Z).delay(.5).call(function () {
                        t();
                      }).start();
                    });
                  case 4:
                    if (e.name != m.START_RESUME) {
                      t.next = 19;
                      break;
                    }
                    if (n = Z.data.getData(), i = n.parser.currentGameState, s = i.startFreeGame, !n.isResuming || 0 !== i.totalWinnings || !1 !== i.startFreeGame || 0 != n.parser.currentGameState.isJp.length) {
                      t.next = 12;
                      break;
                    }
                    return t.abrupt("return", Z.MG_CLOSE_SPIN_STATE.id);
                  case 12:
                    if (!((null == n ? void 0 : n.parser.currentGameState.isJp.length) > 0)) {
                      t.next = 16;
                      break;
                    }
                    return t.abrupt("return", Z.JP_WIN_STATE.id);
                  case 16:
                    if (!s) {
                      t.next = 18;
                      break;
                    }
                    return t.abrupt("return", Z.MG_SHOW_SCATTER_STATE.id);
                  case 18:
                    return t.abrupt("return", Z.MG_SHOW_WIN_SUMMARY_STATE.id);
                  case 19:
                    return t.abrupt("return", "");
                  case 20:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return T.apply(this, arguments);
            })
          }, this.MG_WAIT_SPIN_STATE = {
            id: "MG_WAIT_SPIN_STATE",
            onEntry: (G = n(r().mark(function t(a) {
              var e, n, i;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a.event, a.context, a.sharedData, dispatch(m.WAIT_SPIN_STATE), D.isSendClose = !1, !(S.active && S.spinsRemaining > 0 || S.active && -1 === S.spinsRemaining)) {
                      t.next = 13;
                      break;
                    }
                    if (Z.slotData.checkBalanceAndAlert()) {
                      t.next = 8;
                      break;
                    }
                    return dispatch(d.UPDATE_SPIN_STATUS, {
                      data: N.IDLE
                    }), t.abrupt("return");
                  case 8:
                    return (e = D.getData().nextSpinDelay) && e > 0 ? _(Z).delay(e).call(function () {
                      dispatch(m.START_SPIN, {
                        data: {
                          spinId: null
                        }
                      });
                    }).start() : dispatch(m.START_SPIN, {
                      data: {
                        spinId: null
                      }
                    }), t.abrupt("return");
                  case 13:
                    dispatch(d.UPDATE_SPIN_STATUS, {
                      data: N.IDLE
                    });
                  case 14:
                    n = Z.data.getData().parser.currentGameState.winSymbols ? Z.data.getData().parser.winSymbols : [], i = Z.data.getData().parser.currentGameState.action, Z.data.getData().parser.currentGameState.totalWinnings > 0 && n.length > 0 && "spin" == i && dispatch(m.SHOW_WIN_LINE_CYCLE);
                  case 17:
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
              return !![m.START_SPIN, m.PARSER_REPLAY_COMPLETED].includes(a.name);
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name == m.START_SPIN ? Z.MG_SPIN_STATE.id : a.name === m.PARSER_REPLAY_COMPLETED && A.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : void 0;
            }
          }, this.MG_SPIN_STATE = {
            id: "MG_SPIN_STATE",
            onEntry: (U = n(r().mark(function t(a) {
              var e, n, i, s, c;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e = a.event, a.context, a.sharedData, dispatch(m.CLEAR_ALL_WIN_LINE), Z.data.tempAnimTopMap.clear(), dispatch(d.UPDATE_SPIN_STATUS, {
                      data: N.SPINING
                    }), dispatch(d.UPDATE_USER_BALANCE, {
                      data: {
                        balance: E.amount
                      }
                    }), n = D.getData(), i = n.winAmountTime, (s = e.data.spinId) || dispatch(d.UPDATE_TOTAL_WINNINGS, {
                      data: {
                        value: 0,
                        tweenTime: i
                      }
                    }), w(), c = {
                      ratioIndex: u.ratioIndex,
                      ratioValue: u.ratioValue,
                      stakeIndex: u.stakeIndex,
                      stakeValue: u.stakeValue
                    }, dispatch(d.PLAY_SPIN_BTN_RELEASED_ANIM, null), !A.isReplay) {
                      t.next = 15;
                      break;
                    }
                    _(Z).delay(.309).call(function () {
                      dispatch(m.PARSER_SPIN_COMPLETED);
                    }).start(), t.next = 18;
                    break;
                  case 15:
                    if (!Z.data.testStaticSpinFlag) {
                      t.next = 17;
                      break;
                    }
                    return t.abrupt("return");
                  case 17:
                    dispatch(d.SEND_SPIN_REQUEST, {
                      data: {
                        spinId: s,
                        stakeVO: c,
                        updateStake: B()
                      }
                    });
                  case 18:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return U.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return !![m.PARSER_SPIN_COMPLETED].includes(a.name);
            },
            transitionTo: (y = n(r().mark(function t(a) {
              var e;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e = a.event, a.context, a.sharedData, e.name != m.PARSER_SPIN_COMPLETED) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", Z.MG_SPIN_TO_STOP_STATE.id);
                  case 3:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return y.apply(this, arguments);
            })
          }, this.MG_SPIN_TO_STOP_STATE = {
            id: "MG_SPIN_TO_STOP_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(m.SET_REEL_RESULT), dispatch(m.CAN_STOP_SPIN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              if (a.name === m.REEL_ALL_STOP) {
                if (e.getData().parser.currentGameState.startFreeGame) return Z.MG_SHOW_SCATTER_STATE.id;
                if (0 === Z.data.getData().parser.currentGameState.totalWinnings) return Z.MG_CLOSE_SPIN_STATE.id;
                var n = e.getData().parser.currentGameState.view,
                  r = e.isFullBoard(n, [M.WILD]),
                  i = Z.data.getData().parser.currentGameState,
                  _ = i.totalWinnings,
                  s = i.isJp,
                  c = (i.startFreeGame, Z.data.setBigWinReach(_));
                return s.length > 0 ? Z.JP_WIN_STATE.id : r ? Z.MG_SHOW_FULL_COMBO_STATE.id : null !== c ? Z.MG_SHOW_ALL_WIN_LINE_STATE.id : Z.MG_SHOW_WIN_SUMMARY_STATE.id;
              }
              return "";
            }
          }, this.MG_SHOW_FULL_COMBO_STATE = {
            id: "MG_SHOW_FULL_COMBO_STATE",
            onEntry: (b = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_CHARACTER_WIN), dispatch(m.SHOW_BOARD_FRAME_ANIM, {
                      complete: function () {}
                    }), dispatch(m.SHOW_SYMBOLS_WIN, {
                      complete: function () {
                        dispatch(m.SHOW_ALL_WIN_LINE), _(Z).delay(1.2).call(n(r().mark(function t() {
                          return r().wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, App.uiManager.open({
                                  type: H,
                                  bundle: Z.data.module,
                                  zIndex: s.UI,
                                  name: "FullCombo"
                                });
                              case 2:
                                dispatch(m.SHOW_FULL_COMBO);
                              case 3:
                              case "end":
                                return t.stop();
                            }
                          }, t);
                        }))).start();
                      },
                      data: !0
                    });
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return b.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              if (a.name === m.SHOW_FULL_COMBO_END) {
                var e = Z.data.getData().parser.currentGameState.totalWinnings;
                return Z.data.setBigWinReach(e) ? Z.MG_BIG_WIN_STATE.id : (dispatch(m.QUICK_STOP_TOTAL_WINNINGS, {
                  data: e
                }), dispatch(m.CLEAR_ALL_WIN_LINE), Z.MG_CLOSE_SPIN_STATE.id);
              }
              return "";
            }
          }, this.MG_SHOW_SCATTER_STATE = {
            id: "MG_SHOW_SCATTER_STATE",
            onEntry: (Y = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_SCATTER_WIN);
                  case 2:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return Y.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_SCATTER_WIN_END ? Z.MG_SHOW_WIN_SUMMARY_STATE.id : "";
            }
          }, this.MG_SHOW_WIN_SUMMARY_STATE = {
            id: "MG_SHOW_WIN_SUMMARY_STATE",
            onEntry: (k = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_CHARACTER_WIN), (Z.data.getData().parser.winSymbols ? Z.data.getData().parser.winSymbols : []).length > 0 ? (dispatch(m.SHOW_WIN_SUMMARY), dispatch(m.SHOW_TOTAL_WIN_CASH), dispatch(m.CAN_SKIP_WIN_LINE)) : dispatch(m.SHOW_WIN_SUMMARY_END);
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return k.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData, Z.data.getData().parser.currentGameState.startFreeGame);
              return a.name === m.SHOW_WIN_SUMMARY_END ? e ? (Z.data.currentGameType = P.FREE_GAME, dispatch(m.CLEAR_ALL_WIN_LINE), Z.FG_SHOW_INTRO_GAME_STATE.id) : Z.MG_CLOSE_SPIN_STATE.id : "";
            }
          }, this.MG_SHOW_ALL_WIN_LINE_STATE = {
            id: "MG_SHOW_ALL_WIN_LINE_STATE",
            onEntry: (J = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_CHARACTER_WIN), dispatch(m.SHOW_ALL_WIN_LINE), dispatch(m.SHOW_SYMBOLS_WIN, {
                      complete: function () {
                        dispatch(m.SHOW_ALL_WIN_LINE_END);
                      },
                      data: !0
                    });
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return J.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_ALL_WIN_LINE_END ? Z.MG_BIG_WIN_STATE.id : "";
            }
          }, this.MG_BIG_WIN_STATE = {
            id: "MG_BIG_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              var a = {
                winnings: Z.data.getData().parser.currentGameState.totalWinnings,
                tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level,
                isUpdateInfoBarTotalWinnings: !0
              };
              dispatch(m.SHOW_BIG_WIN, {
                data: a
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_BIG_WIN_END ? (dispatch(m.CLEAR_ALL_WIN_LINE), dispatch(m.HIDE_SYMBOLS_WIN), Z.MG_CLOSE_SPIN_STATE.id) : "";
            }
          }, this.JP_WIN_STATE = {
            id: "JP_WIN_STATE",
            onEntry: (K = n(r().mark(function t(a) {
              var e;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, (e = Z.data.getData().parser.currentGameState).totalWinnings, e.view, dispatch(m.SHOW_JP_SYMBOLS_WIN), _(Z).delay(1.5).call(function () {
                      dispatch(m.HIDE_SYMBOLS_WIN), dispatch(m.SHOW_JP, {});
                    }).start();
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return K.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_JP_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
            }
          }, this.MG_MYSTERY_JACKPOT_STATE = {
            id: "MG_MYSTERY_JACKPOT_STATE",
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              t.event, t.context, t.sharedData;
              return "";
            }
          }, this.MG_CLOSE_SPIN_STATE = {
            id: "MG_CLOSE_SPIN_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              for (var a, n = e(Z.data.getData().gameState); !(a = n()).done;) {
                var r = a.value;
                if (Z.data.isFullBoard(null == r ? void 0 : r.view, [M.WILD])) {
                  dispatch(d.STOP_AUTO_SPIN);
                  break;
                }
              }
              Z.data.getData().bonusState;
              Z.data.getData().parser.currentSpinIsEmpty && S.active && (S.spinsRemaining > 0 || -1 === S.spinsRemaining) ? _(Z).delay(1e-4).call(function () {
                dispatch(d.SEND_CLOSE_REQUEST, {
                  data: Z.data.getData().spinId
                });
              }).start() : A.isReplay ? dispatch(m.REPLAY_GAME_END) : Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(m.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(d.SEND_CLOSE_REQUEST, {
                data: Z.data.getData().spinId
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              return a.name == m.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(d.UPDATE_USER_BALANCE, {
                data: {
                  balance: E.amount
                }
              }), Z.processCloseAutoPlay(), e.getData().isResuming = !1, Z.MG_WAIT_SPIN_STATE.id) : a.name == m.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : a.name == m.START_SPIN ? Z.MG_SPIN_STATE.id : "";
            }
          }, this.FG_SHOW_INTRO_GAME_STATE = {
            id: "FG_SHOW_INTRO_GAME_STATE",
            onEntry: function () {
              dispatch(m.SHOW_TRANSITION_IN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_TRANSITION_IN_END ? Z.FG_SHOW_START_ALERT_STATE.id : "";
            }
          }, this.FG_SHOW_START_ALERT_STATE = {
            id: "FG_SHOW_START_ALERT_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              _(Z).delay(.2).call(function () {
                dispatch(m.PLAY_BTM, {
                  data: {
                    url: L.TRANSITIONS,
                    loop: !0
                  }
                });
              }).start(), App.uiManager.open({
                type: W,
                bundle: Z.data.module,
                zIndex: s.UI,
                name: "免費遊戲彈窗"
              }).then(function (t) {
                t.showIntroAlert();
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.CLICK_START_FREE_GAME ? (dispatch(m.CHANGE_GAME_STYLE, {
                data: !1
              }), Z.FG_WAIT_SPIN_STATE.id) : "";
            }
          }, this.FG_BACK_TO_MG_RUN_SCORE_STATE = {
            id: "FG_BACK_TO_MG_RUN_SCORE_STATE",
            onEntry: function (t) {
              t.event, t.context;
              var a = t.sharedData.getData().parser.currentGameState.totalWinnings;
              dispatch(d.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: a,
                  needComplete: !0
                },
                complete: function () {
                  A.isReplay ? dispatch(m.REPLAY_GAME_END) : dispatch(m.CHANGE_MG_CLOSE_SPIN_STATE);
                }
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.CHANGE_MG_CLOSE_SPIN_STATE ? (dispatch(d.UPDATE_USER_BALANCE, {
                data: {
                  balance: E.amount
                }
              }), Z.MG_WAIT_SPIN_STATE.id) : a.name === m.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
            }
          }, this.FG_BACK_MG_BIG_WIN_STATE = {
            id: "FG_BACK_MG_BIG_WIN_STATE",
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              t.event, t.context, t.sharedData;
              return "";
            }
          }, this.FG_WAIT_SPIN_STATE = {
            id: "FG_WAIT_SPIN_STATE",
            onEntry: (Q = n(r().mark(function t() {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    dispatch(m.UPDATE_FG_REMAINING), dispatch(m.CHANGE_FG_SPIN_STATE);
                  case 2:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function () {
              return Q.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: (V = n(r().mark(function t(a) {
              var e;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e = a.event, a.context, a.sharedData, e.name !== m.CHANGE_FG_SPIN_STATE) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", Z.FG_SPIN_STATE.id);
                  case 3:
                    return t.abrupt("return", "");
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return V.apply(this, arguments);
            })
          }, this.FG_SPIN_STATE = {
            id: "FG_SPIN_STATE",
            onEntry: function () {
              dispatch(m.CLEAR_ALL_WIN_LINE), Z.data.tempAnimTopMap.clear(), dispatch(m.START_SCROLL), dispatch(m.CHANGE_FG_SPIN_TO_STOP_STATE);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.CHANGE_FG_SPIN_TO_STOP_STATE ? Z.FG_SPIN_TO_STOP_STATE.id : "";
            }
          }, this.FG_SPIN_TO_STOP_STATE = {
            id: "FG_SPIN_TO_STOP_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(m.SET_REEL_RESULT), dispatch(m.CAN_STOP_SPIN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              if (a.name === m.REEL_ALL_STOP) {
                var n = e.getData().parser.currentGameState,
                  r = 0 === n.numFreeSpins;
                if (n.startFreeGame) return Z.FG_SHOW_SCATTER_WIN_STATE.id;
                if (null == Z.data.getData().parser.currentGameState.winSymbols || 0 === Z.data.getData().parser.currentGameState.winSymbols.length) return r ? Z.data.setBigWinReach(e.getData().parser.currentGameState.totalWinnings) ? Z.FG_BIG_WIN_STATE.id : Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
                var i = e.getData().parser.currentGameState.view,
                  _ = (e.getData().parser.currentGameState.startFreeGame, e.isFullBoard(i, [M.WILD])),
                  s = Z.data.setBigWinReach(e.getData().parser.currentGameState.currentWinnings);
                return _ ? Z.FG_SHOW_FULL_COMBO_STATE.id : null != s ? Z.FG_SHOW_ALL_WIN_LINE_STATE.id : Z.FG_SHOW_WIN_SUMMARY_STATE.id;
              }
              return "";
            }
          }, this.FG_SHOW_ALL_WIN_LINE_STATE = {
            id: "FG_SHOW_ALL_WIN_LINE_STATE",
            onEntry: (j = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_CHARACTER_WIN), dispatch(m.SHOW_ALL_WIN_LINE), dispatch(m.SHOW_SYMBOLS_WIN, {
                      complete: function () {
                        dispatch(m.SHOW_ALL_WIN_LINE_END);
                      },
                      data: !0
                    });
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return j.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_ALL_WIN_LINE_END ? Z.FG_WIN_STATE.id : "";
            }
          }, this.FG_SHOW_SCATTER_WIN_STATE = {
            id: "FG_SHOW_SCATTER_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context;
              t.sharedData.getData().parser.currentGameState.startFreeGame && dispatch(m.SHOW_SCATTER_WIN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_SCATTER_WIN_END ? Z.FG_SHOW_INCREASE_REMAINING.id : "";
            }
          }, this.FG_SHOW_INCREASE_REMAINING = {
            id: "FG_SHOW_INCREASE_REMAINING",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(m.INCREASE_FG_REMAINING, {
                complete: function () {
                  dispatch(m.INCREASE_FG_REMAINING_END);
                }
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              if (a.name === m.INCREASE_FG_REMAINING_END) {
                var n = e.getData().parser.currentGameState,
                  r = n.currentWinnings,
                  i = n.winSymbols;
                return i && i.length > 0 || r > 0 ? Z.FG_SHOW_WIN_SUMMARY_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
              }
              return "";
            }
          }, this.FG_SHOW_FULL_COMBO_STATE = {
            id: "FG_SHOW_FULL_COMBO_STATE",
            onEntry: (z = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_CHARACTER_WIN), dispatch(m.SHOW_BOARD_FRAME_ANIM, {
                      complete: function () {}
                    }), dispatch(m.SHOW_SYMBOLS_WIN, {
                      complete: function () {
                        dispatch(m.SHOW_ALL_WIN_LINE), _(Z).delay(1.2).call(n(r().mark(function t() {
                          return r().wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, App.uiManager.open({
                                  type: H,
                                  bundle: Z.data.module,
                                  zIndex: s.UI,
                                  name: "FullCombo"
                                });
                              case 2:
                                dispatch(m.SHOW_FULL_COMBO);
                              case 3:
                              case "end":
                                return t.stop();
                            }
                          }, t);
                        }))).start();
                      },
                      data: !0
                    });
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return z.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              if (a.name === m.SHOW_FULL_COMBO_END) {
                var e = Z.data.getData().parser.currentGameState,
                  n = e.totalWinnings,
                  r = e.currentWinnings;
                if (Z.data.setBigWinReach(r)) return Z.FG_WIN_STATE.id;
                dispatch(m.QUICK_STOP_TOTAL_WINNINGS, {
                  data: n
                });
              }
              return "";
            }
          }, this.FG_SHOW_WIN_SUMMARY_STATE = {
            id: "FG_SHOW_WIN_SUMMARY_STATE",
            onEntry: (X = n(r().mark(function t(a) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.event, a.context, a.sharedData, dispatch(m.SHOW_CHARACTER_WIN), dispatch(m.SHOW_WIN_SUMMARY), dispatch(m.SHOW_TOTAL_WIN_CASH), dispatch(m.CAN_SKIP_WIN_LINE);
                  case 5:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return X.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              if (a.name === m.SHOW_WIN_SUMMARY_END) {
                var n = e.getData().parser.currentGameState,
                  r = n.numFreeSpins,
                  i = (n.winSymbols, n.startFreeGame, n.totalWinnings),
                  _ = e.getData().parser.currentSpinIndex,
                  s = (e.getData().gameState[_ + 1], 0 == r);
                return dispatch(m.CLEAR_ALL_WIN_LINE), s ? e.setBigWinReach(i) ? Z.FG_BIG_WIN_STATE.id : Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
              }
            }
          }, this.FG_WIN_STATE = {
            id: "FG_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              var a = {
                winnings: Z.data.getData().parser.currentGameState.currentWinnings,
                tweenTime: 5
              };
              dispatch(m.SHOW_WIN, {
                data: a
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              if (a.name === m.SHOW_WIN_END) {
                var n = e.getData().parser.currentGameState,
                  r = n.numFreeSpins,
                  i = n.totalWinnings,
                  _ = 0 === r;
                return dispatch(m.CLEAR_ALL_WIN_LINE), dispatch(m.HIDE_SYMBOLS_WIN), _ ? null !== Z.data.setBigWinReach(i) ? Z.FG_BIG_WIN_STATE.id : Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
              }
              return "";
            }
          }, this.FG_BIG_WIN_STATE = {
            id: "FG_BIG_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context;
              var a = {
                winnings: t.sharedData.getData().parser.currentGameState.totalWinnings,
                tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level,
                isUpdateInfoBarTotalWinnings: !1
              };
              dispatch(m.SHOW_BIG_WIN, {
                data: a
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              if (a.name === m.SHOW_BIG_WIN_END) {
                e.getData().parser.currentGameState.totalWinnings;
                return Z.FG_SHOW_SUMMARY_ALERT_STATE.id;
              }
              return "";
            }
          }, this.FG_SHOW_SUMMARY_ALERT_STATE = {
            id: "FG_SHOW_SUMMARY_ALERT_STATE",
            onEntry: function () {
              dispatch(m.PLAY_BTM, {
                data: {
                  url: L.TRANSITION_IN_AND_OUT
                }
              }), App.globalAudio.pauseMusic(), dispatch(m.SHOW_FG_SUMMARY_ALERT_STATE), _(Z).delay(.2).call(function () {
                dispatch(m.PLAY_BTM, {
                  data: {
                    url: L.TRANSITIONS,
                    loop: !0
                  }
                });
              }).delay(1).call(n(r().mark(function t() {
                return r().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      App.uiManager.open({
                        type: W,
                        bundle: Z.data.module,
                        zIndex: s.UI,
                        name: "免費遊戲彈窗"
                      }).then(function (t) {
                        t.showSummaryAlert();
                      });
                    case 1:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))).start();
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.CLICK_FINISH_FREE_GAME ? Z.FG_TRANSITION_OUT_STATE.id : "";
            }
          }, this.FG_TRANSITION_OUT_STATE = {
            id: "FG_TRANSITION_OUT_STATE",
            onEntry: function () {
              dispatch(m.SHOW_TRANSITION_OUT);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.SHOW_TRANSITION_OUT_END ? (dispatch(m.CHANGE_GAME_STYLE, {
                data: !0
              }), dispatch(d.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: 0
                }
              }), Z.FG_CLOSE_SPIN_STATE.id) : "";
            }
          }, this.FG_CLOSE_SPIN_STATE = {
            id: "FG_CLOSE_SPIN_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              A.isReplay ? dispatch(m.REPLAY_GAME_END) : Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(m.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(d.SEND_CLOSE_REQUEST, {
                data: Z.data.getData().spinId
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event,
                e = (t.context, t.sharedData);
              if (a.name == m.PARSER_CLOSE_SPIN_COMPLETED) {
                var n = Z.data.getData().parser.currentGameState.totalWinnings;
                Z.data.setBigWinReach(n);
                return Z.processCloseAutoPlay(), dispatch(d.UPDATE_USER_BALANCE, {
                  data: {
                    balance: E.amount
                  }
                }), e.getData().isResuming = !1, Z.MG_WAIT_SPIN_STATE.id;
              }
              return a.name == m.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
            }
          }, this.LUCKY_WEALTH_CLOSE_STATE = {
            id: "LUCKY_WEALTH_CLOSE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              A.isReplay ? dispatch(m.REPLAY_GAME_END) : (dispatch(d.STOP_AUTO_SPIN), dispatch(d.SEND_CLOSE_REQUEST, {
                data: Z.data.getData().spinId
              }));
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(d.UPDATE_USER_BALANCE, {
                data: {
                  balance: E.amount
                }
              }), Z.MG_WAIT_SPIN_STATE.id) : a.name == m.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
            }
          }, this.JP_GAME_INTRO_STATE = {
            id: "JP_GAME_INTRO_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.JACKPOT_GAME_PICK_END ? Z.JP_GAME_CLOSE_STATE.id : "";
            }
          }, this.JP_GAME_CLOSE_STATE = {
            id: "JP_GAME_CLOSE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              if (A.isReplay) return App.uiManager.close(f), void dispatch(m.REPLAY_GAME_END);
              dispatch(d.STOP_AUTO_SPIN), dispatch(d.SEND_CLOSE_REQUEST, {
                data: Z.data.getData().spinId
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(d.UPDATE_USER_BALANCE, {
                data: {
                  balance: E.amount
                }
              }), Z.MG_WAIT_SPIN_STATE.id) : a.name == m.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
            }
          }, this.BG_INTRO_ELIXIR_FURNACE_STATE = {
            id: "BG_INTRO_ELIXIR_FURNACE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(d.STOP_AUTO_SPIN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var a = t.event;
              t.context, t.sharedData;
              return a.name === m.BONUS_ELIXIR_FURNACE_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
            }
          };
        }
        var i = t.prototype;
        return i.processCloseAutoPlay = function () {
          0 === S.spinsRemaining && (S.active = !1), S.spinsRemaining <= -1 && (S.spinsRemaining = -1), S.active ? dispatch(d.SHOW_AUTO_SPIN, {
            data: !1
          }) : (dispatch(d.SHOW_AUTO_SPIN, {
            data: !0
          }), S.spinsRemaining = 0);
        }, i.GET_ALL_STATES = function () {
          var t = [];
          for (var a in this) {
            var e = this[a];
            "object" == typeof e && "function" != typeof e && y(e) && t.push(e);
          }
          return t;
        }, i.getMachine = function () {
          return null == this.stateMachine && (this.stateMachine = U.from(this.GET_ALL_STATES(), {
            sharedData: App.dataCenter.get(R)
          })), this.stateMachine;
        }, a(t, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(R);
          }
        }, {
          key: "slotData",
          get: function () {
            return App.dataCenter.get(T);
          }
        }]), t;
      }());
      i._RF.pop();
    }
  };
});
