System.register("chunks:///_virtual/GameState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Config.ts", "./Bundles.ts", "./CompanyWaveEffect.ts", "./UrlUtils.ts", "./index.ts", "./AutoPlayModel.ts", "./SlotFrameworkData.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./PlatformModel.ts", "./ReplayModel.ts", "./SettingsModel.ts", "./SocketModel.ts", "./UrlModel.ts", "./type2.ts", "./CmmSlotUtils.ts", "./ObjectUtils.ts", "./NoTouchingView.ts", "./SlotTableViewL.ts", "./SlotTableViewP.ts", "./BonusGameView.ts", "./DragonView.ts", "./FreeGameAlertView.ts", "./HeavenlyTreasuresView.ts", "./IntroView.ts", "./JackpotGameView.ts", "./LuckyWealthView.ts", "./GameConfigModel.ts", "./GameData.ts", "./GameSymbolID.ts", "./GameEvent.ts", "./GameSender.ts", "./types.ts", "./StateMachineManager.ts", "./state.ts", "./fsm.ts"], function (t) {
  "use strict";

  var e, a, n, r, i, _, o, s, T, S, E, d, c, u, A, N, I, O, p, G, D, f, h, R, v, M, l, L, W, m, P, g, C, x, F, H, U, y, B, w, b, Y, k, V, K, J, X;
  return {
    setters: [function (t) {
      e = t.createClass, a = t.createForOfIteratorHelperLoose, n = t.asyncToGenerator, r = t.regeneratorRuntime;
    }, function (t) {
      i = t.cclegacy, _ = t.tween, o = t.v3, s = t.Tween;
    }, function (t) {
      T = t.ViewZOrder;
    }, function (t) {
      S = t.EBundles;
    }, function (t) {
      E = t.CompanyWaveEffect;
    }, function (t) {
      d = t.default;
    }, null, function (t) {
      c = t.default;
    }, function (t) {
      u = t.default;
    }, function (t) {
      A = t.default;
    }, function (t) {
      N = t.SlotFrameworkEvent;
    }, function (t) {
      I = t.default;
    }, function (t) {
      O = t.default;
    }, function (t) {
      p = t.default;
    }, function (t) {
      G = t.default;
    }, function (t) {
      D = t.default;
    }, function (t) {
      f = t.ESpinStatus;
    }, function (t) {
      h = t.CmmSlotUtils;
    }, function (t) {
      R = t.ObjectUtils;
    }, function (t) {
      v = t.default;
    }, function (t) {
      M = t.default;
    }, function (t) {
      l = t.default;
    }, function (t) {
      L = t.BonusGameView;
    }, function (t) {
      W = t.default;
    }, function (t) {
      m = t.FreeGameAlertView;
    }, function (t) {
      P = t.HeavenlyTreasuresView;
    }, function (t) {
      g = t.IntroView;
    }, function (t) {
      C = t.JackpotGameView;
    }, function (t) {
      x = t.default;
    }, function (t) {
      F = t.default, H = t.EBTM;
    }, function (t) {
      U = t.default;
    }, function (t) {
      y = t.EBackendSymbolID;
    }, function (t) {
      B = t.GameEvent;
    }, function (t) {
      w = t.GameSender;
    }, function (t) {
      b = t.EGameType, Y = t.EBonusType, k = t.BonusStateAction;
    }, function (t) {
      V = t.default, K = t.EStateMachineName;
    }, function (t) {
      J = t.isState;
    }, function (t) {
      X = t.StateMachine;
    }],
    execute: function () {
      function z() {
        if (c.active && c.spinsRemaining > 0) {
          if (App.dataCenter.get(U).currentGameType === b.FREE_GAME) return;
          c.spinsRemaining--;
        }
      }
      function Q() {
        var t = {
            stakeIndex: p.stakeIndex,
            ratioIndex: p.ratioIndex
          },
          e = {
            stakeIndex: A.stakeIndex,
            ratioIndex: A.ratioIndex
          },
          a = R.diffObjects(t, e);
        return Object.keys(a).length > 0;
      }
      t({
        calculateAutoSpin: z,
        needUpdateStake: Q
      }), i._RF.push({}, "bc13c0OlfNBlaF6QuBQOjkW", "GameState", void 0);
      t("GameState", function () {
        function t() {
          var t,
            e,
            i,
            u,
            p,
            R,
            b,
            J,
            X,
            j,
            q,
            Z = this;
          this.stateMachine = null, this.MG_LOADING_STATE = {
            id: "MG_LOADING_STATE",
            initial: !0,
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: (t = n(r().mark(function t(e) {
              var a;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = e.event, e.context, e.sharedData, a.name != B.LOAD_COMPLETE) {
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
            })), function (e) {
              return t.apply(this, arguments);
            })
          }, this.MG_INIT_STATE = {
            id: "MG_INIT_STATE",
            onEntry: (e = n(r().mark(function t() {
              var e, a, n, i, _, o, s, E, c;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e = d.hasParam("gn") && d.hasParam("t"), a = d.hasParam("spinId"), n = App.gameLoading, V.getStateName() !== K.GAME_STATE) {
                      t.next = 23;
                      break;
                    }
                    return t.next = 6, App.senderManager.get(w).initial();
                  case 6:
                    if (n.hideProgressBar(), n.hideGameLogo(), App.uiManager.open({
                      type: g,
                      bundle: S[S.g1002],
                      zIndex: T.UILoading,
                      name: "Intro"
                    }), i = I.getData(), _ = i.slotTablesOn, o = App.dataCenter.get(U).getData(), s = o.isResuming, E = "1" === D.getData().searchParams.table, !_ || s) {
                      t.next = 21;
                      break;
                    }
                    if (!E) {
                      t.next = 16;
                      break;
                    }
                    return t.abrupt("return");
                  case 16:
                    return c = h.getOrientationTarget(M, l), t.next = 19, App.uiManager.open({
                      type: c,
                      bundle: S[S.slotFramework],
                      zIndex: T.UI,
                      name: "機台選擇2",
                      args: !0
                    });
                  case 19:
                    t.next = 21;
                    break;
                  case 21:
                    t.next = 31;
                    break;
                  case 23:
                    if (V.getStateName() !== K.REPLAY_STATE) {
                      t.next = 31;
                      break;
                    }
                    if (!e) {
                      t.next = 27;
                      break;
                    }
                    t.next = 31;
                    break;
                  case 27:
                    if (!a) {
                      t.next = 31;
                      break;
                    }
                    return t.next = 30, App.senderManager.get(w).replayInInitial();
                  case 30:
                    n.complete();
                  case 31:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function () {
              return e.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return V.getStateName() === K.GAME_STATE ? Z.stateMachine.currentStateId == Z.MG_INIT_STATE.id : V.getStateName() === K.REPLAY_STATE || void 0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              return e.name == B.PARSER_INIT_COMPLETED ? a.getData().isResuming ? Z.MG_WAIT_RESUME_STATE.id : Z.MG_WAIT_SPIN_STATE.id : e.name === B.PARSER_REPLAY_COMPLETED && O.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : "";
            },
            onExit: function () {}
          }, this.MG_WAIT_REPLAY_STATE = {
            id: "MG_WAIT_REPLAY_STATE",
            onEntry: (i = n(r().mark(function t(e) {
              var a;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a = e.event, e.context, e.sharedData, dispatch(B.RESET_TIMES), dispatch(N.UPDATE_SPIN_STATUS, {
                      data: f.SPINING
                    }), a.name === B.REPLAY_GAME_END || a.name === B.SHOW_BIG_WIN_END ? dispatch(N.SHOW_REPLAY_BOARD_ALERT) : _(Z).delay(1.5).call(function () {
                      dispatch(B.START_SPIN, {
                        data: {
                          spinId: null
                        }
                      });
                    }).start();
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
              var e = t.event;
              t.context, t.sharedData;
              return e.name == B.START_SPIN ? Z.MG_SPIN_STATE.id : "";
            }
          }, this.MG_WAIT_RESUME_STATE = {
            id: "MG_WAIT_RESUME_STATE",
            onEntry: (p = n(r().mark(function t(e) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.event, e.context, e.sharedData, dispatch(B.SHOW_RESUME_ALERT), dispatch(B.RESET_TIMES);
                  case 3:
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
            transitionTo: (u = n(r().mark(function t(e) {
              var a, n, i, o, s, T, S, E;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = e.event, e.context, e.sharedData, dispatch(N.UPDATE_SPIN_STATUS, {
                      data: f.SPINING
                    }), t.next = 4, new Promise(function (t) {
                      _(Z).delay(.5).call(function () {
                        t();
                      }).start();
                    });
                  case 4:
                    if (a.name != B.START_RESUME) {
                      t.next = 17;
                      break;
                    }
                    if (o = Z.data.getData(), s = o.parser.currentGameState, !o.isResuming || 0 !== s.totalWinnings || !1 !== s.startFreeGame || o.bonusState) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt("return", Z.MG_CLOSE_SPIN_STATE.id);
                  case 11:
                    if ((null == o || null == (n = o.bonusState) ? void 0 : n.bonusType) !== Y.LUCKY_WEALTH) {
                      t.next = 13;
                      break;
                    }
                    return t.abrupt("return", Z.MG_CLOSE_SPIN_STATE.id);
                  case 13:
                    if (T = null == (i = Z.data.getData().parser.currentGameState) ? void 0 : i.transformInfo, S = T.toSymbol, E = T.toWild, !(S.length > 0 || E.length > 0)) {
                      t.next = 16;
                      break;
                    }
                    return t.abrupt("return", Z.MG_SHOW_SYMBOL_TRANSFORM_STATE.id);
                  case 16:
                    return t.abrupt("return", Z.MG_SHOW_ALL_WIN_STATE.id);
                  case 17:
                    return t.abrupt("return", "");
                  case 18:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return u.apply(this, arguments);
            })
          }, this.MG_WAIT_SPIN_STATE = {
            id: "MG_WAIT_SPIN_STATE",
            onEntry: (R = n(r().mark(function t(e) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e.event, e.context, e.sharedData, dispatch(B.RESET_TIMES), F.isSendClose = !1, !(c.active && c.spinsRemaining > 0 || c.active && -1 === c.spinsRemaining)) {
                      t.next = 9;
                      break;
                    }
                    if (Z.slotData.checkBalanceAndAlert(function () {
                      dispatch(N.UPDATE_SPIN_STATUS, {
                        data: f.IDLE
                      });
                    })) {
                      t.next = 7;
                      break;
                    }
                    return t.abrupt("return");
                  case 7:
                    return dispatch(B.START_SPIN, {
                      data: {
                        spinId: null
                      }
                    }), t.abrupt("return");
                  case 9:
                    dispatch(N.UPDATE_SPIN_STATUS, {
                      data: f.IDLE
                    });
                  case 10:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return R.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return !![B.START_SPIN, B.PARSER_REPLAY_COMPLETED].includes(e.name);
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name == B.START_SPIN ? Z.MG_SPIN_STATE.id : e.name === B.PARSER_REPLAY_COMPLETED && O.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : void 0;
            }
          }, this.MG_SPIN_STATE = {
            id: "MG_SPIN_STATE",
            onEntry: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              dispatch(N.UPDATE_SPIN_STATUS, {
                data: f.SPINING
              }), dispatch(N.UPDATE_USER_BALANCE, {
                data: {
                  balance: I.amount
                }
              });
              var a = F.getData().winAmountTime,
                n = e.data.spinId;
              n || dispatch(N.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: 0,
                  tweenTime: a
                }
              }), z();
              var r = {
                ratioIndex: A.ratioIndex,
                ratioValue: A.ratioValue,
                stakeIndex: A.stakeIndex,
                stakeValue: A.stakeValue
              };
              if (dispatch(N.PLAY_SPIN_BTN_RELEASED_ANIM, null), O.isReplay) _(Z).delay(.309).call(function () {
                dispatch(B.PARSER_SPIN_COMPLETED);
              }).start();else {
                if (Z.data.testStaticSpinFlag) return;
                dispatch(N.SEND_SPIN_REQUEST, {
                  data: {
                    spinId: n,
                    stakeVO: r,
                    updateStake: Q()
                  }
                });
              }
            },
            transitionGuard: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return !![B.PARSER_SPIN_COMPLETED].includes(e.name);
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name == B.PARSER_SPIN_COMPLETED) return a.getData().parser.currentGameState.dragonLevel ? Z.DRAGON_STATE.id : Z.MG_SPIN_TO_STOP_STATE.id;
            }
          }, this.DRAGON_STATE = {
            id: "DRAGON_STATE",
            onEntry: function (t) {
              t.event, t.context;
              var e = t.sharedData;
              App.uiManager.effectCamera && (App.uiManager.effectCamera.node.active = !0), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !0, App.uiManager.addView(App.uiManager.effectRoot, T.UI));
              var a,
                n = e.getData().parser,
                r = n.currentSpinIndex,
                i = n.currentGameState;
              a = Z.getMachine().previous.id === Z.FG_EXPLODE_AND_DELETE_STATE.id || Z.getMachine().previous.id === Z.MG_EXPLODE_AND_DELETE_STATE.id ? e.getData().gameState[r + 1].dragonLevel : i.dragonLevel;
              var d = App.uiManager.effectRoot.getComponent(E),
                c = [void 0, .1, .1, .5],
                u = [void 0, .1, .1, .3],
                A = [void 0, void 0, void 0, .2],
                N = [void 0, 40, 40, 50],
                I = [void 0, 40, 40, 50],
                O = [void 0, void 0, void 0, 50],
                p = [void 0, .9, 1.2, .8],
                G = [void 0, .9, 1.2, 1.2],
                D = [void 0, void 0, void 0, 1.8],
                f = [void 0, 30, 1, 30],
                h = [void 0, 30, 1, 30],
                R = [void 0, void 0, void 0, 30],
                v = [void 0, .05, .075, .075],
                M = [void 0, .05, .075, .075],
                l = [void 0, void 0, void 0, .075],
                L = [void 0, 1, 1, 1],
                m = [void 0, 1, 1, 1],
                P = [void 0, void 0, void 0, 1],
                g = [void 0, o(0, 420, 0), o(-360, 520, 0), o(300, 620, 0)],
                C = [void 0, o(0, 20, 0), o(-100, 80, 0), o(150, -460, 0)],
                x = [void 0, void 0, void 0, o(0, -560, 0)],
                F = [void 0, .45, .05, .01],
                H = [void 0, 1.85, 2.2, 1],
                U = [void 0, void 0, void 0, 1.5];
              d.startW = c[a], d.waveAmplitude = v[a], d.waveFrequency = f[a], s.stopAllByTarget(Z), _(Z).delay(F[a]).call(function () {
                d.waveProp.w = 200, d.waveDistance = N[a], d.waveSpeed = p[a], d.waveStrength = L[a], d.startWaveEffect(g[a]);
              }).start(), App.uiManager.open({
                type: W,
                bundle: S[S.g1002],
                zIndex: T.UI,
                name: "金龍UIView",
                args: a
              }), _(Z).delay(H[a]).call(function () {
                d.waveProp.w = 200, d.startW = u[a], d.waveFrequency = h[a], d.waveAmplitude = M[a], d.waveDistance = I[a], d.waveSpeed = G[a], d.waveStrength = m[a], d.startWaveEffect(C[a]);
              }).start(), null != U[a] && _(Z).delay(U[a]).call(function () {
                d.waveProp.w = 200, d.waveSpeed = D[a], d.startW = A[a], d.waveDistance = O[a], d.waveStrength = P[a], d.waveAmplitude = l[a], d.waveFrequency = R[a], d.startWaveEffect(x[a]);
              }).start();
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (App.uiManager.effectCamera && (App.uiManager.effectCamera.node.active = !1), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !1), Z.getMachine().previous.id === Z.MG_EXPLODE_AND_DELETE_STATE.id) return Z.MG_DROP_SYMBOL_STATE.id;
              if (Z.getMachine().previous.id === Z.FG_EXPLODE_AND_DELETE_STATE.id) return Z.FG_DROP_SYMBOL_STATE.id;
              if (e.name === B.SHOW_DRAGON_END) switch (a.getData().parser.currentGameState.action) {
                case "spin":
                  return Z.MG_SPIN_TO_STOP_STATE.id;
                case "freeSpin":
                  return Z.FG_SPIN_TO_STOP_STATE.id;
              }
              return "";
            }
          }, this.MG_SPIN_TO_STOP_STATE = {
            id: "MG_SPIN_TO_STOP_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SET_REEL_RESULT), dispatch(B.CAN_STOP_SPIN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name === B.REEL_ALL_STOP) {
                var n;
                if (dispatch(B.STOP_BTM, {
                  data: H.REEL_SCROLL
                }), a.getData().parser.currentGameState.startFreeGame) return Z.MG_SHOW_ALL_WIN_STATE.id;
                var r = a.getData().bonusState;
                if (r && r.bonusType === Y.ELIXIR_FURNACE) return Z.MG_SHOW_ALL_WIN_STATE.id;
                var i = null == (n = Z.data.getData().parser.currentGameState) ? void 0 : n.transformInfo,
                  _ = i.toSymbol,
                  o = i.toWild;
                if (_.length > 0 || o.length > 0) return Z.MG_SHOW_SYMBOL_TRANSFORM_STATE.id;
                if (0 === Z.data.getData().parser.currentGameState.totalWinnings) return Z.MG_CLOSE_SPIN_STATE.id;
                if (F.isTurbo) return Z.MG_EXPLODE_AND_DELETE_STATE.id;
                var s = a.getData().parser.currentGameState.resultView;
                return a.isFullBoard(s) ? Z.MG_SHOW_FULL_COMBO_STATE.id : Z.MG_SHOW_WIN_LINE_STATE.id;
              }
              return "";
            }
          }, this.MG_SHOW_SYMBOL_TRANSFORM_STATE = {
            id: "MG_SHOW_SYMBOL_TRANSFORM_STATE",
            onEntry: function (t) {
              t.event, t.context;
              if (t.sharedData.getData().parser.toSymbolWildVO.symbol === y.WILD) {
                dispatch(B.PLAY_MG_SON_CHARACTER_CHANGE_SYMBOL_ANIM);
                var e = Z.data.is30TimesAnd5Trans() ? 1.2 : 0;
                _(Z).delay(e).call(function () {
                  dispatch(B.SHOW_SYMBOL_TRANSFORM);
                }).start();
              } else dispatch(B.PLAY_MG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM), dispatch(B.SHOW_SYMBOL_TRANSFORM);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name === B.SHOW_SYMBOL_TRANSFORM_END) {
                var n = a.getData().parser.currentGameState.resultView;
                return a.isFullBoard(n) ? Z.MG_SHOW_FULL_COMBO_STATE.id : Z.MG_SHOW_WIN_LINE_STATE.id;
              }
              return "";
            }
          }, this.MG_SHOW_ALL_WIN_STATE = {
            id: "MG_SHOW_ALL_WIN_STATE",
            onEntry: (b = n(r().mark(function t(e) {
              var a, n;
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e.event, e.context, !(a = e.sharedData).getData().parser.currentGameState.startFreeGame) {
                      t.next = 4;
                      break;
                    }
                    return dispatch(B.SHOW_SCATTER_WIN), t.abrupt("return");
                  case 4:
                    if (null == (n = a.getData().bonusState) || !n.isBonus) {
                      t.next = 16;
                      break;
                    }
                    Log.d("%c bonusState", "color:#999900", a.getData().bonusState), t.t0 = a.getData().bonusState.bonusType, t.next = t.t0 === Y.ELIXIR_FURNACE ? 10 : t.t0 === Y.JP_GAME ? 12 : 14;
                    break;
                  case 10:
                    return dispatch(B.SHOW_BONUS_WIN), t.abrupt("break", 14);
                  case 12:
                    return dispatch(B.START_JACKPOT_GAME), t.abrupt("break", 14);
                  case 14:
                    t.next = 17;
                    break;
                  case 16:
                    dispatch(B.SHOW_SYMBOLS_WIN, {
                      complete: function () {
                        dispatch(B.SHOW_SYMBOLS_WIN_END);
                      }
                    });
                  case 17:
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
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_SYMBOLS_WIN_END ? Z.MG_SHOW_WIN_LINE_STATE.id : e.name === B.SHOW_SCATTER_WIN_END ? Z.FG_SHOW_INTRO_GAME_STATE.id : e.name === B.SHOW_BONUS_WIN_END ? Z.BG_INTRO_ELIXIR_FURNACE_STATE.id : e.name === B.START_JACKPOT_GAME ? Z.JP_GAME_INTRO_STATE.id : "";
            }
          }, this.MG_SHOW_FULL_COMBO_STATE = {
            id: "MG_SHOW_FULL_COMBO_STATE",
            onEntry: (J = n(r().mark(function t(e) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.event, e.context, e.sharedData, dispatch(B.SHOW_SYMBOLS_WIN, {
                      complete: function () {}
                    }), dispatch(B.SHOW_BOARD_FRAME_ANIM, {
                      complete: function () {
                        _(Z).delay(.5).call(n(r().mark(function t() {
                          return r().wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                dispatch(B.SHOW_BOARD_FRAME_ANIM_END);
                              case 1:
                              case "end":
                                return t.stop();
                            }
                          }, t);
                        }))).start();
                      }
                    });
                  case 3:
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
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_BOARD_FRAME_ANIM_END ? Z.MG_SHOW_WIN_LINE_STATE.id : "";
            }
          }, this.MG_SHOW_WIN_LINE_STATE = {
            id: "MG_SHOW_WIN_LINE_STATE",
            onEntry: (X = n(r().mark(function t(e) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.event, e.context, e.sharedData, dispatch(B.SHOW_WIN_LINE), dispatch(B.CAN_SKIP_WIN_LINE);
                  case 3:
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
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_WIN_LINE_END ? Z.MG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE.id : "";
            }
          }, this.MG_EXPLODE_AND_DELETE_STATE = {
            id: "MG_EXPLODE_AND_DELETE_STATE",
            onEntry: function (t) {
              t.event, t.context;
              var e = t.sharedData;
              if (F.isTurbo) {
                e.getData().parser.currentGameState.winSymbols.some(function (t) {
                  return [1, 2, 3, 4].includes(t.symbol);
                }) && dispatch(B.PLAY_SON_CHARACTER_WIN_ANIM), e.getData().parser.currentGameState.winSymbols.some(function (t) {
                  return [5, 6, 7, 8].includes(t.symbol);
                }) && dispatch(B.PLAY_TWO_CHARACTER_WIN_ANIM);
                var a = Z.data.getData().parser.currentGameState.totalWinnings,
                  n = F.getData().winAmountTime;
                dispatch(N.UPDATE_TOTAL_WINNINGS, {
                  data: {
                    value: a,
                    tweenTime: n
                  }
                });
              }
              dispatch(B.SHOW_SYMBOLS_FRAME_OUT);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name == B.SHOW_SYMBOLS_FRAME_OUT_END) {
                dispatch(B.UPDATE_TIMES);
                var n = a.getData().parser,
                  r = (n.currentGameState, n.currentSpinIndex),
                  i = a.getData().gameState[r + 1];
                return i.dragonLevel && 1 !== i.currentTimes ? Z.DRAGON_STATE.id : Z.MG_DROP_SYMBOL_STATE.id;
              }
              return "";
            }
          }, this.MG_DROP_SYMBOL_STATE = {
            id: "MG_DROP_SYMBOL_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SHOW_DROP_SYMBOL);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name == B.SHOW_DROP_SYMBOL_END) {
                var n = a.getData().parser.currentGameState,
                  r = n.currentView,
                  i = n.totalViews,
                  _ = (n.totalWinnings, n.startFreeGame);
                if (r + 1 === i) return Z.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE.id;
                if (_) return Z.MG_SHOW_ALL_WIN_STATE.id;
                var o,
                  s = null == (o = Z.data.getData().parser.currentGameState) ? void 0 : o.transformInfo,
                  T = s.toSymbol,
                  S = s.toWild;
                if (T.length > 0 || S.length > 0) return Z.MG_SHOW_SYMBOL_TRANSFORM_STATE.id;
                if (F.isTurbo) return Z.MG_EXPLODE_AND_DELETE_STATE.id;
                var E = a.getData().parser.currentGameState.resultView;
                return a.isFullBoard(E) ? Z.MG_SHOW_FULL_COMBO_STATE.id : Z.MG_SHOW_WIN_LINE_STATE.id;
              }
              return "";
            }
          }, this.MG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE = {
            id: "MG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SHOW_CURRENT_VIEW_WIN_CASH);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name == B.SHOW_CURRENT_VIEW_WIN_CASH_END ? Z.MG_EXPLODE_AND_DELETE_STATE.id : "";
            }
          }, this.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE = {
            id: "MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE",
            onEntry: function (t) {
              t.event, t.context;
              var e = t.sharedData.getData().parser.currentGameState.totalWinnings,
                a = F.getData().winAmountTime;
              dispatch(N.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: e,
                  tweenTime: a
                }
              }), Z.data.setBigWinReach(e) ? dispatch(B.SHOW_TOTAL_WIN_CASH_END) : dispatch(B.SHOW_TOTAL_WIN_CASH);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              if (e.name == B.SHOW_TOTAL_WIN_CASH_END) {
                var a = Z.data.getData().parser.currentGameState.totalWinnings;
                return Z.data.setBigWinReach(a) ? Z.MG_BIG_WIN_STATE.id : Z.MG_CLOSE_SPIN_STATE.id;
              }
              return "";
            }
          }, this.MG_BIG_WIN_STATE = {
            id: "MG_BIG_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              var e = {
                winnings: Z.data.getData().parser.currentGameState.totalWinnings,
                tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level
              };
              dispatch(B.SHOW_BIG_WIN, {
                data: e
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_BIG_WIN_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
            }
          }, this.MG_DROP_TREASURE_STATE = {
            id: "MG_DROP_TREASURE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              App.uiManager.open({
                type: P,
                bundle: Z.data.module,
                zIndex: T.UI,
                name: "天降奇寶"
              }), dispatch(N.HIDE_REPLAY_INFO_BAR);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.HEAVENLY_TREASURES_RESULT_END ? Z.DROP_TREASURE_CLOSE_STATE.id : "";
            }
          }, this.DROP_TREASURE_CLOSE_STATE = {
            id: "DROP_TREASURE_CLOSE_STATE",
            onEntry: function () {
              if (O.isReplay) dispatch(B.REPLAY_GAME_END);else {
                dispatch(N.STOP_AUTO_SPIN);
                var t = {
                  bonusType: Y.FORTUNE_LANDING,
                  action: k.FINISH,
                  ratioIndex: A.ratioIndex,
                  ratioValue: A.ratioValue,
                  stakeIndex: A.stakeIndex,
                  stakeValue: A.stakeValue,
                  spinId: Z.data.getData().spinId,
                  token: G.currentToken,
                  clientType: "web"
                };
                App.senderManager.get(w).sendFortuneLandingFinishReq(t);
              }
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.DROP_TREASURE_RESULT_RESP ? (dispatch(N.UPDATE_USER_BALANCE, {
                data: {
                  balance: I.amount
                }
              }), Z.MG_WAIT_SPIN_STATE.id) : e.name == B.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
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
              for (var e, n = a(Z.data.getData().gameState); !(e = n()).done;) {
                var r = e.value;
                if (Z.data.isFullBoard(null == r ? void 0 : r.resultView)) {
                  dispatch(N.STOP_AUTO_SPIN);
                  break;
                }
              }
              var i = Z.data.getData().bonusState;
              if (i && i.bonusType != Y.ELIXIR_FURNACE) switch (i.bonusType) {
                case Y.FORTUNE_LANDING:
                  dispatch(B.START_FORTUNE_GAME);
                  break;
                case Y.JP_GAME:
                  dispatch(B.START_JACKPOT_GAME);
                  break;
                case Y.LUCKY_WEALTH:
                  dispatch(B.START_LUCKY_WEALTH_GAME);
              } else {
                if (Z.data.getData().parser.currentSpinIsEmpty && c.active && (c.spinsRemaining > 0 || -1 === c.spinsRemaining)) return void _(Z).delay(.3).call(function () {
                  dispatch(N.SEND_CLOSE_REQUEST, {
                    data: Z.data.getData().spinId
                  });
                }).start();
                if (O.isReplay) return void dispatch(B.REPLAY_GAME_END);
                Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(B.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(N.SEND_CLOSE_REQUEST, {
                  data: Z.data.getData().spinId
                });
              }
              dispatch(B.RESET_TIMES);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              return e.name == B.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(N.UPDATE_USER_BALANCE, {
                data: {
                  balance: I.amount
                }
              }), Z.processCloseAutoPlay(), Z.data.tempAnimTopMap.clear(), a.getData().isResuming = !1, Z.MG_WAIT_SPIN_STATE.id) : e.name == B.START_FORTUNE_GAME ? Z.MG_DROP_TREASURE_STATE.id : e.name == B.START_JACKPOT_GAME ? Z.JP_GAME_INTRO_STATE.id : e.name == B.START_LUCKY_WEALTH_GAME ? Z.LUCKY_WEALTH_INTRO.id : e.name == B.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : e.name == B.START_SPIN ? Z.MG_SPIN_STATE.id : "";
            }
          }, this.FG_CLOSE_SPIN_STATE = {
            id: "FG_CLOSE_SPIN_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              O.isReplay ? dispatch(B.PARSER_CLOSE_SPIN_COMPLETED) : (Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(B.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(N.SEND_CLOSE_REQUEST, {
                data: Z.data.getData().spinId
              }), dispatch(B.RESET_TIMES));
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name == B.PARSER_CLOSE_SPIN_COMPLETED) {
                var n = Z.data.getData().parser.currentGameState.totalWinnings,
                  r = Z.data.setBigWinReach(n);
                return Z.processCloseAutoPlay(), Z.data.tempAnimTopMap.clear(), a.getData().isResuming = !1, r ? Z.FG_BIG_WIN_STATE.id : Z.FG_BACK_TO_MG_RUN_SCORE_STATE.id;
              }
              return "";
            }
          }, this.FG_SHOW_START_ALERT_STATE = {
            id: "FG_SHOW_START_ALERT_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              App.uiManager.open({
                type: m,
                bundle: Z.data.module,
                zIndex: T.UI,
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
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.CLICK_START_FREE_GAME ? (dispatch(B.CHANGE_GAME_STYLE, {
                data: !1
              }), dispatch(B.UPDATE_TIMES), Z.FG_WAIT_SPIN_STATE.id) : "";
            }
          }, this.FG_SHOW_INTRO_GAME_STATE = {
            id: "FG_SHOW_INTRO_GAME_STATE",
            onEntry: function () {
              dispatch(B.SHOW_TRANSITION_IN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_TRANSITION_IN_END ? Z.FG_SHOW_START_ALERT_STATE.id : "";
            }
          }, this.FG_SHOW_SUMMARY_ALERT_STATE = {
            id: "FG_SHOW_SUMMARY_ALERT_STATE",
            onEntry: function () {
              _(Z).delay(1).call(n(r().mark(function t() {
                return r().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      App.uiManager.open({
                        type: m,
                        bundle: Z.data.module,
                        zIndex: T.UI,
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
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.CLICK_FINISH_FREE_GAME ? Z.FG_TRANSITION_OUT_STATE.id : "";
            }
          }, this.FG_TRANSITION_OUT_STATE = {
            id: "FG_TRANSITION_OUT_STATE",
            onEntry: function () {
              dispatch(B.SHOW_TRANSITION_OUT);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_TRANSITION_OUT_END ? (dispatch(B.CHANGE_GAME_STYLE, {
                data: !0
              }), dispatch(N.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: 0
                }
              }), Z.FG_CLOSE_SPIN_STATE.id) : "";
            }
          }, this.FG_BACK_TO_MG_RUN_SCORE_STATE = {
            id: "FG_BACK_TO_MG_RUN_SCORE_STATE",
            onEntry: function (t) {
              t.event, t.context;
              var e = t.sharedData.getData().parser.currentGameState.totalWinnings;
              dispatch(N.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: e,
                  needComplete: !0
                },
                complete: function () {
                  O.isReplay ? dispatch(B.REPLAY_GAME_END) : dispatch(B.CHANGE_MG_CLOSE_SPIN_STATE);
                }
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.CHANGE_MG_CLOSE_SPIN_STATE ? (dispatch(N.UPDATE_USER_BALANCE, {
                data: {
                  balance: I.amount
                }
              }), Z.MG_WAIT_SPIN_STATE.id) : e.name === B.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
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
            onEntry: function () {
              dispatch(B.UPDATE_TIMES), dispatch(B.UPDATE_FG_REMAINING), dispatch(B.CHANGE_FG_SPIN_STATE);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.CHANGE_FG_SPIN_STATE ? Z.FG_SPIN_STATE.id : "";
            }
          }, this.FG_SPIN_STATE = {
            id: "FG_SPIN_STATE",
            onEntry: function () {
              dispatch(B.START_SCROLL), dispatch(B.CHANGE_FG_SPIN_TO_STOP_STATE);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              return e.name === B.CHANGE_FG_SPIN_TO_STOP_STATE ? a.getData().parser.currentGameState.dragonLevel ? Z.DRAGON_STATE.id : Z.FG_SPIN_TO_STOP_STATE.id : "";
            }
          }, this.FG_SPIN_TO_STOP_STATE = {
            id: "FG_SPIN_TO_STOP_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SET_REEL_RESULT), dispatch(B.CAN_STOP_SPIN);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name === B.REEL_ALL_STOP) {
                var n;
                dispatch(B.STOP_BTM, {
                  data: H.REEL_SCROLL
                });
                var r = a.getData().parser.currentGameState;
                if (r.currentView + 1 === r.totalViews) return Z.FG_SHOW_SUMMARY_ALERT_STATE.id;
                if (a.getData().parser.currentGameState.startFreeGame) return Z.FG_SHOW_ALL_WIN_STATE.id;
                var i = null == (n = Z.data.getData().parser.currentGameState) ? void 0 : n.transformInfo,
                  _ = i.toSymbol,
                  o = i.toWild;
                if (_.length > 0 || o.length > 0) return Z.FG_SHOW_SYMBOL_TRANSFORM_STATE.id;
                if (0 === Z.data.getData().parser.currentGameState.winSymbols.length) return Z.FG_WAIT_SPIN_STATE.id;
                var s = a.getData().parser.currentGameState.resultView;
                return a.isFullBoard(s) ? Z.FG_SHOW_FULL_COMBO_STATE.id : Z.FG_SHOW_WIN_LINE_STATE.id;
              }
              return "";
            }
          }, this.FG_SHOW_SYMBOL_TRANSFORM_STATE = {
            id: "FG_SHOW_SYMBOL_TRANSFORM_STATE",
            onEntry: function (t) {
              t.event, t.context;
              if (t.sharedData.getData().parser.toSymbolWildVO.symbol === y.WILD) {
                dispatch(B.PLAY_FG_SON_CHARACTER_CHANGE_SYMBOL_ANIM);
                var e = Z.data.is30TimesAnd5Trans() ? 1.2 : 0;
                _(Z).delay(e).call(function () {
                  dispatch(B.SHOW_SYMBOL_TRANSFORM);
                }).start();
              } else dispatch(B.PLAY_FG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM), dispatch(B.SHOW_SYMBOL_TRANSFORM);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name === B.SHOW_SYMBOL_TRANSFORM_END) {
                if (0 === a.getData().parser.currentGameState.winSymbols.length) return Z.FG_WAIT_SPIN_STATE.id;
                var n = a.getData().parser.currentGameState.resultView;
                return a.isFullBoard(n) ? Z.FG_SHOW_FULL_COMBO_STATE.id : Z.FG_SHOW_WIN_LINE_STATE.id;
              }
              return "";
            }
          }, this.FG_SHOW_ALL_WIN_STATE = {
            id: "FG_SHOW_ALL_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context;
              t.sharedData.getData().parser.currentGameState.startFreeGame ? dispatch(B.SHOW_SCATTER_WIN) : dispatch(B.SHOW_SYMBOLS_WIN, {
                complete: function () {
                  dispatch(B.SHOW_SYMBOLS_WIN_END);
                }
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_SYMBOLS_WIN_END ? Z.FG_SHOW_WIN_LINE_STATE.id : e.name === B.SHOW_SCATTER_WIN_END ? Z.FG_SHOW_INCREASE_REMAINING.id : "";
            }
          }, this.FG_SHOW_INCREASE_REMAINING = {
            id: "FG_SHOW_INCREASE_REMAINING",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.INCREASE_FG_REMAINING, {
                complete: function () {
                  dispatch(B.INCREASE_FG_REMAINING_END);
                }
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.INCREASE_FG_REMAINING_END ? Z.FG_WAIT_SPIN_STATE.id : "";
            }
          }, this.FG_SHOW_FULL_COMBO_STATE = {
            id: "FG_SHOW_FULL_COMBO_STATE",
            onEntry: (j = n(r().mark(function t(e) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.event, e.context, e.sharedData, dispatch(B.SHOW_SYMBOLS_WIN, {
                      complete: function () {}
                    }), dispatch(B.SHOW_BOARD_FRAME_ANIM, {
                      complete: function () {
                        dispatch(B.SHOW_BOARD_FRAME_ANIM_END);
                      }
                    });
                  case 3:
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
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.SHOW_BOARD_FRAME_ANIM_END ? Z.FG_SHOW_WIN_LINE_STATE.id : "";
            }
          }, this.FG_SHOW_WIN_LINE_STATE = {
            id: "FG_SHOW_WIN_LINE_STATE",
            onEntry: (q = n(r().mark(function t(e) {
              return r().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.event, e.context, e.sharedData, dispatch(B.SHOW_WIN_LINE), dispatch(B.CAN_SKIP_WIN_LINE);
                  case 3:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), function (t) {
              return q.apply(this, arguments);
            }),
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              if (e.name === B.SHOW_WIN_LINE_END) return Z.FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE.id;
            }
          }, this.FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE = {
            id: "FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SHOW_CURRENT_VIEW_WIN_CASH);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name == B.SHOW_CURRENT_VIEW_WIN_CASH_END ? Z.FG_EXPLODE_AND_DELETE_STATE.id : "";
            }
          }, this.FG_EXPLODE_AND_DELETE_STATE = {
            id: "FG_EXPLODE_AND_DELETE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SHOW_SYMBOLS_FRAME_OUT);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name == B.SHOW_SYMBOLS_FRAME_OUT_END) {
                var n = a.getData().parser.currentSpinIndex,
                  r = a.getData().gameState[n + 1];
                return dispatch(B.UPDATE_TIMES), r.dragonLevel && 1 !== r.currentTimes ? Z.DRAGON_STATE.id : Z.FG_DROP_SYMBOL_STATE.id;
              }
              return "";
            }
          }, this.FG_DROP_SYMBOL_STATE = {
            id: "FG_DROP_SYMBOL_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SHOW_DROP_SYMBOL);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name == B.SHOW_DROP_SYMBOL_END) {
                var n,
                  r = a.getData().parser.currentGameState,
                  i = r.freeGameCount,
                  _ = r.winSymbols,
                  o = r.startFreeGame,
                  s = a.getData().parser.currentSpinIndex,
                  T = a.getData().gameState[s + 1];
                if (!T || i !== T.freeGameCount) {
                  if (o) return Z.FG_SHOW_ALL_WIN_STATE.id;
                  var S = Z.data.getData().parser.currentGameState.roundWinnings;
                  return Z.data.setBigWinReach(S) ? (dispatch(B.RESET_FG_CLICK_SKIP_WIN_LINE), Z.FG_WIN_STATE.id) : Z.FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE.id;
                }
                var E = null == (n = Z.data.getData().parser.currentGameState) ? void 0 : n.transformInfo,
                  d = E.toSymbol,
                  c = E.toWild;
                if (d.length > 0 || c.length > 0) return Z.FG_SHOW_SYMBOL_TRANSFORM_STATE.id;
                if (0 === _.length) return dispatch(B.UPDATE_TIMES), Z.FG_WAIT_SPIN_STATE.id;
                var u = a.getData().parser.currentGameState.resultView;
                return a.isFullBoard(u) ? Z.FG_SHOW_FULL_COMBO_STATE.id : Z.FG_SHOW_WIN_LINE_STATE.id;
              }
              return "";
            }
          }, this.FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE = {
            id: "FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(B.SHOW_FG_ROUND_WIN_CASH);
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name == B.SHOW_FG_ROUND_WIN_CASH_END) {
                dispatch(B.UPDATE_TIMES);
                var n = a.getData().parser.currentGameState;
                return n.currentView + 1 === n.totalViews ? Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
              }
              return "";
            }
          }, this.FG_WIN_STATE = {
            id: "FG_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              var e = {
                winnings: Z.data.getData().parser.currentGameState.roundWinnings,
                tweenTime: 5
              };
              dispatch(B.SHOW_WIN, {
                data: e
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name === B.SHOW_WIN_END) {
                var n = a.getData().parser.currentGameState;
                return n.currentView + 1 === n.totalViews ? Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
              }
              return "";
            }
          }, this.FG_BIG_WIN_STATE = {
            id: "FG_BIG_WIN_STATE",
            onEntry: function (t) {
              t.event, t.context;
              var e = {
                winnings: t.sharedData.getData().parser.currentGameState.totalWinnings,
                tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level,
                isUpdateInfoBarTotalWinnings: !0
              };
              dispatch(B.SHOW_BIG_WIN, {
                data: e
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event,
                a = (t.context, t.sharedData);
              if (e.name === B.SHOW_BIG_WIN_END) {
                var n = a.getData().parser.currentGameState.totalWinnings;
                return dispatch(N.UPDATE_TOTAL_WINNINGS, {
                  data: {
                    value: n
                  }
                }), dispatch(N.UPDATE_USER_BALANCE, {
                  data: {
                    balance: I.amount
                  }
                }), O.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : Z.MG_WAIT_SPIN_STATE.id;
              }
              return "";
            }
          }, this.LUCKY_WEALTH_INTRO = {
            id: "LUCKY_WEALTH_INTRO",
            onEntry: function (t) {
              t.event, t.context;
              var e = {
                win: t.sharedData.getData().bonusState.prize
              };
              App.uiManager.open({
                type: x,
                bundle: Z.data.module,
                zIndex: T.UI,
                name: "神秘遊戲",
                args: e
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.LUCKY_WEALTH_END ? Z.LUCKY_WEALTH_CLOSE_STATE.id : "";
            }
          }, this.LUCKY_WEALTH_CLOSE_STATE = {
            id: "LUCKY_WEALTH_CLOSE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              O.isReplay ? dispatch(B.REPLAY_GAME_END) : (dispatch(N.STOP_AUTO_SPIN), dispatch(N.SEND_CLOSE_REQUEST, {
                data: Z.data.getData().spinId
              }));
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(N.UPDATE_USER_BALANCE, {
                data: {
                  balance: I.amount
                }
              }), Z.MG_WAIT_SPIN_STATE.id) : e.name == B.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
            }
          }, this.JP_GAME_INTRO_STATE = {
            id: "JP_GAME_INTRO_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              App.uiManager.open({
                type: C,
                bundle: Z.data.module,
                zIndex: T.UI,
                name: "JP遊戲"
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.JACKPOT_GAME_PICK_END ? Z.JP_GAME_CLOSE_STATE.id : "";
            }
          }, this.JP_GAME_CLOSE_STATE = {
            id: "JP_GAME_CLOSE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              if (O.isReplay) return App.uiManager.close(v), void dispatch(B.REPLAY_GAME_END);
              dispatch(N.STOP_AUTO_SPIN), dispatch(N.SEND_CLOSE_REQUEST, {
                data: Z.data.getData().spinId
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(N.UPDATE_USER_BALANCE, {
                data: {
                  balance: I.amount
                }
              }), Z.MG_WAIT_SPIN_STATE.id) : e.name == B.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
            }
          }, this.BG_INTRO_ELIXIR_FURNACE_STATE = {
            id: "BG_INTRO_ELIXIR_FURNACE_STATE",
            onEntry: function (t) {
              t.event, t.context, t.sharedData;
              dispatch(N.STOP_AUTO_SPIN), App.uiManager.open({
                type: L,
                bundle: Z.data.module,
                zIndex: T.UI,
                name: "煉丹爐"
              });
            },
            transitionGuard: function (t) {
              t.event, t.context, t.sharedData;
              return !0;
            },
            transitionTo: function (t) {
              var e = t.event;
              t.context, t.sharedData;
              return e.name === B.BONUS_ELIXIR_FURNACE_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
            }
          };
        }
        var i = t.prototype;
        return i.processCloseAutoPlay = function () {
          0 === c.spinsRemaining && (c.active = !1), c.spinsRemaining <= -1 && (c.spinsRemaining = -1), c.active ? dispatch(N.SHOW_AUTO_SPIN, {
            data: !1
          }) : (dispatch(N.SHOW_AUTO_SPIN, {
            data: !0
          }), c.spinsRemaining = 0);
        }, i.GET_ALL_STATES = function () {
          var t = [];
          for (var e in this) {
            var a = this[e];
            "object" == typeof a && "function" != typeof a && J(a) && t.push(a);
          }
          return t;
        }, i.getMachine = function () {
          return null == this.stateMachine && (this.stateMachine = X.from(this.GET_ALL_STATES(), {
            sharedData: App.dataCenter.get(U)
          })), this.stateMachine;
        }, e(t, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(U);
          }
        }, {
          key: "slotData",
          get: function () {
            return App.dataCenter.get(u);
          }
        }]), t;
      }());
      i._RF.pop();
    }
  };
});
