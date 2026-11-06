System.register("chunks:///_virtual/GameSender.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Config.ts", "./Bundles.ts", "./ServerModel.ts", "./CmmUtils.ts", "./Http.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./DefinitionModel.ts", "./GameStateModel.ts", "./InitialModel.ts", "./PlatformModel.ts", "./ReplayModel.ts", "./SettingsModel.ts", "./SlotTableModel.ts", "./SocketModel.ts", "./GameSenderBase.ts", "./type2.ts", "./NoTouchingView.ts", "./StaticData.ts", "./GameData.ts", "./GameEvent.ts", "./StateMachineManager.ts", "./GameService.ts", "./GameConfigModel.ts"], function (t) {
  "use strict";

  var e, n, o, a, s, i, m, r, b, u, d, y, w, p, E, l, I, c, S, f, g, T, R, v, A, C, P, _, h, L, k;
  return {
    setters: [function (t) {
      e = t.inheritsLoose, n = t.extends, o = t.createClass;
    }, function (t) {
      a = t.cclegacy, s = t.sys;
    }, function (t) {
      i = t.ViewZOrder;
    }, function (t) {
      m = t.EBundles;
    }, function (t) {
      r = t.default, b = t.EServerMode;
    }, function (t) {
      u = t.CmmUtils;
    }, function (t) {
      d = t.Http;
    }, function (t) {
      y = t.default;
    }, function (t) {
      w = t.SlotFrameworkEvent;
    }, function (t) {
      p = t.default;
    }, function (t) {
      E = t.default;
    }, function (t) {
      l = t.default;
    }, function (t) {
      I = t.default;
    }, function (t) {
      c = t.default, S = t.EReplayMode;
    }, function (t) {
      f = t.default;
    }, function (t) {
      g = t.default;
    }, function (t) {
      T = t.default;
    }, function (t) {
      R = t.GameSenderBase;
    }, function (t) {
      v = t.ESocketRequestName;
    }, function (t) {
      A = t.default;
    }, function (t) {
      C = t.spin2;
    }, function (t) {
      P = t.default;
    }, function (t) {
      _ = t.GameEvent;
    }, function (t) {
      h = t.default;
    }, function (t) {
      L = t.GameService;
    }, function (t) {
      k = t.default;
    }],
    execute: function () {
      a._RF.push({}, "de4daFVPG9C44RwvlkkmNMv", "GameSender", void 0), t("GameSender", function (t) {
        function a() {
          for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (e = t.call.apply(t, [this].concat(o)) || this).originToken = "", e;
        }
        e(a, t);
        var R = a.prototype;
        return R.initial = function () {
          var t = this;
          if (r.mode === b.STATIC) {
            var e = this.getInitialResponse();
            return this.setToken(e), p.setData(e.engine.definition), E.setData(e.engine.gameState), I.setData(e.platform), f.setData(e.platform.player.settings), l.setData(e), y.init({
              stakeList: e.platform.game.stakeValues,
              stakeIndex: e.platform.player.settings.stakeIndex,
              ratioList: e.platform.game.ratioValues,
              ratioIndex: e.platform.player.settings.ratioIndex,
              numWinlines: e.engine.definition.winlineDefs.length
            }), void dispatch(w.INIT_RESPONSE, e);
          }
          var n = {
            token: T.currentToken,
            clientType: u.getClientType(),
            deviceInfo: {
              browser: {
                name: s.browserType,
                version: s.browserVersion
              },
              os: {
                name: s.os,
                version: s.osVersion,
                versionName: s.osMainVersion
              },
              platform: {
                type: s.platform
              },
              engine: {
                name: "cocos creator 3.7.2"
              }
            }
          };
          return new Promise(function (e, o) {
            t.send("initial", n, function (n) {
              if (n.status == d.ServerStatus.SUCCESS) {
                if (n.code) return Log.e("NETWORK_ERROR: ", n), void t.showAlert(n.message, {
                  needCloseAlert: !1,
                  code: null == n ? void 0 : n.code
                });
                try {
                  t.setToken(n), p.setData(n.engine.definition), E.setData(n.engine.gameState), I.setData(n.platform), f.setData(n.platform.player.settings), l.setData(n), y.init({
                    stakeList: n.platform.game.stakeValues,
                    stakeIndex: n.platform.player.settings.stakeIndex,
                    ratioList: n.platform.game.ratioValues,
                    ratioIndex: n.platform.player.settings.ratioIndex,
                    numWinlines: n.engine.definition.winlineDefs.length
                  }), dispatch(w.INIT_RESPONSE, n), e();
                } catch (t) {
                  var o = {
                    title: App.getLanguage("alertHint", [], m[m.slotFramework]),
                    text: "initial data error",
                    bbrCb: function () {},
                    needCloseAlert: !1,
                    code: t
                  };
                  App.gameAlert.show(o);
                }
              } else Log.e("NETWORK_ERROR: ", n), t.showAlert(n.message, {
                needCloseAlert: !1,
                code: null == n ? void 0 : n.code
              });
            });
          });
        }, R.spin = function (t, e, o) {
          var a = this;
          if (r.mode !== b.STATIC) {
            var s = n({
              request: v.SPIN
            }, t, {
              updateStake: o
            }, e && {
              spinId: e
            });
            this.send(s.request, s, function (t) {
              if (t.status == d.ServerStatus.SUCCESS) {
                a.originToken = t.token, a.setToken(t), E.setData(t.engine.gameState);
                var e = t.platform.player.balance.amount;
                if (t.platform.player.balance.updatedAt) {
                  var n = t.platform.player.balance.updatedAt;
                  I.updateBalance(e, n);
                } else I.amount = t.platform.player.balance.amount;
                dispatch(w.SPIN_RESPONSE, t);
              } else Log.e("NETWORK_ERROR: ", t), a.showAlert(t.message, {
                needCloseAlert: !1,
                code: t.code
              });
            });
          } else setTimeout(function () {
            var t = a.getNoWinSpinResponse();
            a.setToken(t), E.setData(t.engine.gameState), I.amount = t.platform.player.balance.amount, dispatch(w.SPIN_RESPONSE, t);
          }, 1);
        }, R.closeSpin = function (t) {
          var e = this;
          if (r.mode === b.STATIC) {
            var n = this.getCloseSpinResponse(),
              o = n.platform.player.balance.amount;
            if (n.platform.player.balance.updatedAt) {
              var a = n.platform.player.balance.updatedAt;
              I.updateBalance(o, a);
            } else I.amount = n.platform.player.balance.amount;
            return this.data.getData().isResuming && (this.data.getData().isResuming = !1), void dispatch(w.CLOSE_RESPONSE, n);
          }
          if (!k.isSendClose) {
            var s = {
              request: v.CLOSE_SPIN,
              spinId: t
            };
            this.send(s.request, s, function (t) {
              if (t.status == d.ServerStatus.SUCCESS) {
                e.setToken(t);
                var n = t.platform.player.balance.amount;
                if (t.platform.player.balance.updatedAt) {
                  var o = t.platform.player.balance.updatedAt;
                  I.updateBalance(n, o);
                } else I.amount = t.platform.player.balance.amount;
                e.data.getData().isResuming && (e.data.getData().isResuming = !1), dispatch(w.CLOSE_RESPONSE, t);
              } else Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
                needCloseAlert: !1,
                code: t.code
              });
            });
          }
        }, R.setting = function (t) {
          var e = this,
            o = n({
              request: v.UPDATE_SETTINGS
            }, t);
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS ? e.setToken(t) : Log.e("update setting NETWORK_ERROR: ", t);
          });
        }, R.getBetRecords = function (t) {
          var e = this,
            o = n({
              request: v.GET_BET_RECORDS
            }, t);
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS ? (e.setToken(t), dispatch(w.BET_RECORDS_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
              needCloseAlert: !1,
              code: t.code
            }));
          });
        }, R.getHistoryRecords = function (t) {
          var e = this,
            o = n({
              request: v.GET_USER_REPORT
            }, t);
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS ? (e.setToken(t), dispatch(w.GET_HISTORY_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
              needCloseAlert: !1,
              code: t.code
            }));
          });
        }, R.getSlotBetRanksList = function (t) {
          var e = this,
            o = n({
              request: v.GET_SLOT_BET_RANKS_LIST,
              action: "list"
            }, t);
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS ? (e.setToken(t), dispatch(w.GET_RANKING_LIST_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
              needCloseAlert: !1,
              code: t.code
            }));
          });
        }, R.getSlotBetRanksReplay = function (t) {
          var e = this,
            o = n({
              request: v.GET_SLOT_BET_RANKS_REPLAY,
              action: "replay"
            }, t);
          if (h.getMachine().currentStateId === h.state.MG_WAIT_SPIN_STATE.id) return new Promise(function (t, n) {
            e.send(o.request, o, function (n) {
              if (c.replayMode = S.RANKING_REPLAY, n.status == d.ServerStatus.SUCCESS) {
                e.data.saveOriginGameData(), e.data.setReplayInitData(n), I.getData().player.displayName = n.betData.replayMeta.displayName, I.amount = n.betData.replayMeta.amount;
                var o = n.betData.replayMeta,
                  a = o.ratioIndex,
                  s = o.stakeIndex,
                  i = o.ratioValues,
                  m = o.stakeValues;
                y.init({
                  stakeIndex: s,
                  ratioIndex: a,
                  stakeList: m,
                  ratioList: i,
                  numWinlines: p.getData().winlineDefs.length
                });
                var r = n.betData.replayMeta,
                  b = r.avatarUrl,
                  u = r.avatarId;
                I.getData().player.avatar = u, I.getData().player.avatarUrl = b, dispatch(w.UPDATE_AVATAR_COMPLETED_RESPONSE), dispatch(_.PROCESS_REPLAY_IN_GAME, {
                  data: n
                }), t();
              } else Log.e("NETWORK_ERROR: ", n), e.showAlert(n.message, {
                needCloseAlert: !1
              });
            });
          });
          App.uiManager.close(A);
          var a = {
            text: "請等待遊戲結束後，再進行重播",
            confirmCb: function () {
              dispatch(w.PLAY_CLICK_BTM);
            },
            bbrCb: function () {
              dispatch(w.PLAY_CLICK_BTM);
            },
            needCloseAlert: !0,
            tag: i.Tips
          };
          App.gameAlert.show(a, i.Tips);
        }, R.getSlotTablePage = function (t) {
          var e = this,
            o = n({
              request: v.GET_SLOT_TABLES
            }, t);
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS ? (e.setToken(t), g.setData(t), dispatch(w.SLOT_TABLE_PAGE_DATA_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
              needCloseAlert: !1,
              code: t.code
            }));
          });
        }, R.getSlotTableDetail = function (t) {
          var e = this,
            o = n({
              request: v.GET_SLOT_TABLE_DETAIL
            }, t);
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS ? (e.setToken(t), g.setData(t), dispatch(w.SLOT_TABLE_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
              needCloseAlert: !1,
              code: t.code
            }));
          });
        }, R.changeSlotTable = function (t) {
          var e = this,
            o = n({
              request: v.UPDATE_SLOT_TABLE
            }, t);
          this.send(o.request, o, function (t) {
            if (t.status !== d.ServerStatus.BACKEND_ERROR) {
              if (e.setToken(t), t.status !== d.ServerStatus.NOT_MODIFIED) {
                var n = new URLSearchParams(window.location.search);
                n.set("table", "1");
                var o = window.location.pathname + "?" + n.toString();
                window.location.href = o;
              } else App.gameAlert.show({
                text: t.message,
                confirmCb: function () {
                  dispatch(w.SYNC_SOLT_TABLES);
                },
                bbrCb: function () {}
              }, i.TopErrorAlert);
            } else e.showAlert(t.message, {
              needCloseAlert: !1,
              code: t.code
            });
          });
        }, R.lockSlotTable = function (t) {
          var e = this,
            o = n({
              request: v.LOCK_SLOT_TABLE
            }, t);
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS ? (e.setToken(t), dispatch(w.LOCK_SLOT_TABLE_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
              needCloseAlert: !1,
              code: t.code
            }));
          });
        }, R.buyFeature = function (t) {
          var e = this,
            o = n({
              request: v.SPIN,
              action: "buyFeature",
              clientType: "web"
            }, t, {
              updateStake: !0
            });
          this.send(o.request, o, function (t) {
            if (t.status == d.ServerStatus.SUCCESS) {
              e.setToken(t);
              t.engine.gameState.spinId;
              dispatch(w.BUY_FEATURE_RESPONSE, {
                data: t.engine.gameState.spinId
              });
            } else Log.e("NETWORK_ERROR: ", t), App.gameAlert.show({
              text: t.message,
              confirmCb: function () {
                dispatch(_.CLOSE_FEATURE_POPUP);
              },
              bbrCb: function () {
                dispatch(_.CLOSE_FEATURE_POPUP);
              }
            });
          });
        }, R.updateAvatar = function (t) {
          var e = this,
            n = {
              request: v.UPDATE_AVATAR,
              avatarId: t
            };
          this.send(n.request, n, function (t) {
            if (t.status == d.ServerStatus.SUCCESS) {
              e.setToken(t);
              var n = t.data,
                o = n.avatarId,
                a = n.avatarUrl;
              I.getData().player.avatar = o, I.getData().player.avatarUrl = a, dispatch(w.UPDATE_AVATAR_COMPLETED_RESPONSE);
            } else Log.e("NETWORK_ERROR: ", t);
          });
        }, R.updateDisplayName = function (t) {
          var e = this,
            n = {
              request: v.UPDATE_DISPLAYNAME,
              displayName: t
            };
          this.send(n.request, n, function (n) {
            e.setToken(n), n.status !== d.ServerStatus.REQUEST_ERROR ? (I.getData().player.displayName = t, dispatch(w.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(w.SET_DISPLAYNAME_TIP, n.message);
          });
        }, R.replayInInitial = function () {
          var t = this,
            e = new URL(window.location.href).searchParams.get("spinId"),
            o = {
              request: v.REPLAY,
              spinId: e
            };
          return new Promise(function (e, a) {
            t.send(o.request, o, function (o) {
              if (o.status == d.ServerStatus.SUCCESS) {
                c.replayMode = S.URL_REPLAY, t.data.setReplayInitData(o);
                var a = n({}, o.definition, {
                  isDemo: !1
                });
                p.setData(a), I.getData().player.displayName = o.betData.replayMeta.displayName, I.amount = o.betData.replayMeta.amount;
                var s = o.betData.replayMeta,
                  i = s.ratioIndex,
                  m = s.stakeIndex,
                  r = s.ratioValues,
                  b = s.stakeValues;
                y.init({
                  stakeIndex: m,
                  ratioIndex: i,
                  stakeList: b,
                  ratioList: r,
                  numWinlines: o.definition.winlineDefs.length
                });
                var u = o.betData.replayMeta,
                  w = u.avatarUrl,
                  E = u.avatarId;
                I.getData().player.avatar = E, I.getData().player.avatarUrl = w, dispatch(_.PARSER_REPLAY_COMPLETED, o), e();
              } else Log.e("NETWORK_ERROR: ", o), t.showAlert(o.message, {
                needCloseAlert: !1
              });
            });
          });
        }, R.replayInGame = function (t) {
          var e = this;
          if (h.getMachine().currentStateId === h.state.MG_WAIT_SPIN_STATE.id) return new Promise(function (t, o) {
            (function (o) {
              if (c.replayMode = S.RANKING_REPLAY, o.status == d.ServerStatus.SUCCESS) {
                e.data.saveOriginGameData(), e.data.setReplayInitData(o);
                var a = n({}, o.definition, {
                  isDemo: !1
                });
                p.setData(a), I.getData().player.displayName = o.betData.replayMeta.displayName, I.amount = o.betData.replayMeta.amount;
                var s = o.betData.replayMeta,
                  i = s.ratioIndex,
                  m = s.stakeIndex,
                  r = s.ratioValues,
                  b = s.stakeValues;
                y.init({
                  stakeIndex: m,
                  ratioIndex: i,
                  stakeList: b,
                  ratioList: r,
                  numWinlines: o.definition.winlineDefs.length
                });
                var u = o.betData.replayMeta,
                  w = u.avatarUrl,
                  E = u.avatarId;
                I.getData().player.avatar = E, I.getData().player.avatarUrl = w, dispatch(_.PROCESS_REPLAY_IN_GAME, {
                  data: o
                }), t();
              } else Log.e("NETWORK_ERROR: ", o), e.showAlert(o.message, {
                needCloseAlert: !1
              });
            })(C);
          });
          var o = {
            text: "請等待遊戲結束後，再進行重播",
            confirmCb: function () {
              dispatch(w.PLAY_CLICK_BTM);
            },
            bbrCb: function () {
              dispatch(w.PLAY_CLICK_BTM);
            },
            needCloseAlert: !0,
            tag: i.Tips
          };
          App.gameAlert.show(o, i.Tips);
        }, R.extension = function (t, e) {
          var o = n({
            request: v.EXTENSION
          }, t, {
            spinId: e
          });
          this.send(o.request, o, function (t) {
            t.status == d.ServerStatus.SUCCESS || Log.e("NETWORK_ERROR: ", t);
          });
        }, R.getInitialResponse = function () {
          return {
            status: 200,
            message: "ok",
            token: "60418254be93433fb7b7bc7c2ad33de4",
            engine: {
              definition: {
                oddsList: {
                  2: {
                    3: 10,
                    4: 35,
                    5: 125,
                    15: 2500
                  },
                  3: {
                    3: 7,
                    4: 23,
                    5: 80,
                    15: 1600
                  },
                  4: {
                    3: 5,
                    4: 15,
                    5: 50,
                    15: 1e3
                  },
                  5: {
                    3: 4,
                    4: 12,
                    5: 40,
                    15: 800
                  },
                  6: {
                    3: 3,
                    4: 8,
                    5: 25,
                    15: 500
                  },
                  7: {
                    3: 2,
                    4: 6,
                    5: 20,
                    15: 400
                  },
                  8: {
                    3: 2,
                    4: 6,
                    5: 20,
                    15: 400
                  }
                },
                symbolDefs: [{
                  symbol: 1,
                  displayName: "WILD"
                }, {
                  symbol: 2,
                  displayName: "S1"
                }, {
                  symbol: 3,
                  displayName: "S2"
                }, {
                  symbol: 4,
                  displayName: "S3"
                }, {
                  symbol: 5,
                  displayName: "S4"
                }, {
                  symbol: 6,
                  displayName: "S5"
                }, {
                  symbol: 7,
                  displayName: "S6"
                }, {
                  symbol: 8,
                  displayName: "S7"
                }, {
                  symbol: 9,
                  displayName: "SCATTER"
                }, {
                  symbol: 10,
                  displayName: "BONUS"
                }],
                winOddsTypes: {
                  win: 20,
                  bigWin: 20,
                  superWin: 50,
                  megaWin: 100,
                  ultraWin: 500,
                  legendaryWin: 2e3
                },
                winlineDefs: [{
                  order: "0",
                  line: [5, 6, 7, 8, 9]
                }, {
                  order: "1",
                  line: [0, 1, 2, 3, 4]
                }, {
                  order: "2",
                  line: [10, 11, 12, 13, 14]
                }, {
                  order: "3",
                  line: [0, 6, 12, 8, 4]
                }, {
                  order: "4",
                  line: [10, 6, 2, 8, 14]
                }, {
                  order: "5",
                  line: [5, 1, 2, 3, 9]
                }, {
                  order: "6",
                  line: [5, 11, 12, 13, 9]
                }, {
                  order: "7",
                  line: [0, 1, 7, 13, 14]
                }, {
                  order: "8",
                  line: [10, 11, 7, 3, 4]
                }, {
                  order: "9",
                  line: [5, 11, 7, 3, 9]
                }, {
                  order: "10",
                  line: [5, 1, 7, 13, 9]
                }, {
                  order: "11",
                  line: [0, 6, 7, 8, 4]
                }, {
                  order: "12",
                  line: [10, 6, 7, 8, 14]
                }, {
                  order: "13",
                  line: [0, 6, 2, 8, 4]
                }, {
                  order: "14",
                  line: [10, 6, 12, 8, 14]
                }, {
                  order: "15",
                  line: [5, 6, 2, 8, 9]
                }, {
                  order: "16",
                  line: [5, 6, 12, 8, 9]
                }, {
                  order: "17",
                  line: [0, 1, 12, 3, 4]
                }, {
                  order: "18",
                  line: [10, 11, 2, 13, 14]
                }, {
                  order: "19",
                  line: [0, 11, 12, 13, 4]
                }],
                extraFgRounds: 10,
                dragonLevels: {
                  low: 1,
                  medium: 2,
                  high: 3
                },
                autoConfirmTime: 0,
                autoSpinInterval: .5,
                prizeAutoNextDelay: 5,
                smallPrizeDelay: .5,
                bigPrizeDelay: 1,
                buyFeature: [{
                  feature: "freeGame",
                  featureRate: 100,
                  featureIndex: 0
                }, {
                  feature: "buyFullCombo",
                  featureRate: 100,
                  featureIndex: 1
                }, {
                  feature: "elixirFurnace",
                  featureRate: 200,
                  featureIndex: 2
                }],
                digital: 2,
                isDemo: !1,
                jpDefs: {
                  "jp-mini": 50,
                  "jp-minor": 200
                },
                isLuckyMoment: !1
              },
              gameState: [{
                action: "spin",
                totalStake: 1,
                view: [[6, 5, 3, 7, 8], [4, 5, 7, 7, 3], [7, 6, 8, 8, 7]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 0,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: 0,
                totalViews: 1,
                currentView: 0,
                spinId: "66c32df816014c9a6d63a090"
              }],
              spinId: "66c32df816014c9a6d63a090"
            },
            platform: {
              game: {
                stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ratioValues: [.05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10],
                stakeKeyCounts: 0
              },
              player: {
                name: "emma12345678",
                displayName: "一袋米扛幾樓",
                displayNameBlockTime: null,
                uid: 942,
                avatar: "0",
                avatarUrl: "https://play.riversense.tw/avatars/0.png",
                nameDisplayOn: !1,
                balance: {
                  currency: "TWD",
                  amount: 6878811.56,
                  gemAmount: 3587
                },
                settings: {
                  advancedSettings: {
                    sounds: {
                      background: !0,
                      effect: !0,
                      backgroundVolume: .42,
                      effectVolume: .43
                    },
                    notify: !0,
                    turbo: !1
                  },
                  autoPlay: {
                    numberOfPlays: [10, 50, 100, 200, 500, -1],
                    stopOnBalance: !1,
                    stopOnFreeSpin: !1,
                    stopOnWinMultiplierValue: 20,
                    stopOnWinMultiplier: !0,
                    stopOnJackpot: !0
                  },
                  stakeIndex: 0,
                  ratioIndex: 7
                },
                clientSettings: null
              },
              gemSystem: 0,
              jackpotOn: !0,
              table: {
                number: 1,
                roomId: 137224,
                status: "Full",
                detail: {
                  mgCounts: [3, 4, 0, 12, 1, 1, 0, 5, 45, 2],
                  dayWin: 11630893.55,
                  dayBet: 4246811,
                  hourWin: 40113.8,
                  hourBet: 400821,
                  todayWin: 11481911.85,
                  todayBet: 4215818
                },
                lock: {
                  expiredDef: 3600,
                  resetDef: 86400,
                  time: 0,
                  count: 0,
                  roomId: null
                }
              },
              tables: [{
                win: 40113.8,
                bet: 400821,
                today: {
                  win: 11481911.85,
                  bet: 4215818
                },
                gameId: 121,
                operatorId: 106,
                roomId: 137224,
                status: "Full",
                number: 1,
                user: {
                  userId: 942,
                  username: "emma12345678",
                  operatorId: 106
                }
              }, {
                win: 13577.300000000001,
                bet: 612,
                today: {
                  win: 2465085.5500000017,
                  bet: 188964
                },
                roomId: 137225,
                status: "Empty",
                number: 2
              }, {
                win: 286.85,
                bet: 122,
                today: {
                  win: 1046558.3999999999,
                  bet: 55382
                },
                roomId: 137226,
                status: "Empty",
                number: 3
              }, {
                win: 22234.85,
                bet: 84956,
                today: {
                  win: 342875.08699999994,
                  bet: 109677
                },
                roomId: 137227,
                status: "Empty",
                number: 4
              }, {
                win: 471.45000000000005,
                bet: 616,
                today: {
                  win: 292337.8,
                  bet: 61133
                },
                roomId: 137228,
                status: "Empty",
                number: 5
              }, {
                win: 413.65,
                bet: 805,
                today: {
                  win: 782578.2500000001,
                  bet: 17696
                },
                roomId: 137229,
                status: "Empty",
                number: 6
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 101381.25,
                  bet: 20721
                },
                roomId: 137230,
                status: "Empty",
                number: 7
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 2147.3,
                  bet: 1
                },
                roomId: 137231,
                status: "Empty",
                number: 8
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137232,
                status: "Empty",
                number: 9
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137233,
                status: "Empty",
                number: 10
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137234,
                status: "Empty",
                number: 11
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137235,
                status: "Empty",
                number: 12
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137236,
                status: "Empty",
                number: 13
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137237,
                status: "Empty",
                number: 14
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137238,
                status: "Empty",
                number: 15
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137239,
                status: "Empty",
                number: 16
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137240,
                status: "Empty",
                number: 17
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137241,
                status: "Empty",
                number: 18
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137242,
                status: "Empty",
                number: 19
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137243,
                status: "Empty",
                number: 20
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137244,
                status: "Empty",
                number: 21
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137245,
                status: "Empty",
                number: 22
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137246,
                status: "Empty",
                number: 23
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137247,
                status: "Empty",
                number: 24
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 200
                },
                roomId: 137248,
                status: "Empty",
                number: 25
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137249,
                status: "Empty",
                number: 26
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137250,
                status: "Empty",
                number: 27
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137251,
                status: "Empty",
                number: 28
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137252,
                status: "Empty",
                number: 29
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137253,
                status: "Empty",
                number: 30
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137254,
                status: "Empty",
                number: 31
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137255,
                status: "Empty",
                number: 32
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137256,
                status: "Empty",
                number: 33
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137257,
                status: "Empty",
                number: 34
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137258,
                status: "Empty",
                number: 35
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137259,
                status: "Empty",
                number: 36
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 2610.4,
                  bet: 1
                },
                roomId: 137260,
                status: "Empty",
                number: 37
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137261,
                status: "Empty",
                number: 38
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137262,
                status: "Empty",
                number: 39
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137263,
                status: "Empty",
                number: 40
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137264,
                status: "Empty",
                number: 41
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 2773.45,
                  bet: 1
                },
                roomId: 137265,
                status: "Empty",
                number: 42
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137266,
                status: "Empty",
                number: 43
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137267,
                status: "Empty",
                number: 44
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137268,
                status: "Empty",
                number: 45
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137269,
                status: "Empty",
                number: 46
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137270,
                status: "Empty",
                number: 47
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137271,
                status: "Empty",
                number: 48
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137272,
                status: "Empty",
                number: 49
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137273,
                status: "Empty",
                number: 50
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137274,
                status: "Empty",
                number: 51
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137275,
                status: "Empty",
                number: 52
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137276,
                status: "Empty",
                number: 53
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137277,
                status: "Empty",
                number: 54
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137278,
                status: "Empty",
                number: 55
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137279,
                status: "Empty",
                number: 56
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137280,
                status: "Empty",
                number: 57
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137281,
                status: "Empty",
                number: 58
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137282,
                status: "Empty",
                number: 59
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137283,
                status: "Empty",
                number: 60
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137284,
                status: "Empty",
                number: 61
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137285,
                status: "Empty",
                number: 62
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137286,
                status: "Empty",
                number: 63
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137287,
                status: "Empty",
                number: 64
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137288,
                status: "Empty",
                number: 65
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137289,
                status: "Empty",
                number: 66
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137290,
                status: "Empty",
                number: 67
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137291,
                status: "Empty",
                number: 68
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137292,
                status: "Empty",
                number: 69
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137293,
                status: "Empty",
                number: 70
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137294,
                status: "Empty",
                number: 71
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137295,
                status: "Empty",
                number: 72
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137296,
                status: "Empty",
                number: 73
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137297,
                status: "Empty",
                number: 74
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137298,
                status: "Empty",
                number: 75
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137299,
                status: "Empty",
                number: 76
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137300,
                status: "Empty",
                number: 77
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137301,
                status: "Empty",
                number: 78
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137302,
                status: "Empty",
                number: 79
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137303,
                status: "Empty",
                number: 80
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137304,
                status: "Empty",
                number: 81
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137305,
                status: "Empty",
                number: 82
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137306,
                status: "Empty",
                number: 83
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137307,
                status: "Empty",
                number: 84
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137308,
                status: "Empty",
                number: 85
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137309,
                status: "Empty",
                number: 86
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137310,
                status: "Empty",
                number: 87
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137311,
                status: "Empty",
                number: 88
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137312,
                status: "Empty",
                number: 89
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137313,
                status: "Empty",
                number: 90
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137314,
                status: "Empty",
                number: 91
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137315,
                status: "Empty",
                number: 92
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137316,
                status: "Empty",
                number: 93
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137317,
                status: "Empty",
                number: 94
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137318,
                status: "Empty",
                number: 95
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137319,
                status: "Empty",
                number: 96
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137320,
                status: "Empty",
                number: 97
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137321,
                status: "Empty",
                number: 98
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137322,
                status: "Empty",
                number: 99
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137323,
                status: "Empty",
                number: 100
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137324,
                status: "Empty",
                number: 101
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137325,
                status: "Empty",
                number: 102
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137326,
                status: "Empty",
                number: 103
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137327,
                status: "Empty",
                number: 104
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137328,
                status: "Empty",
                number: 105
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137329,
                status: "Empty",
                number: 106
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137330,
                status: "Empty",
                number: 107
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137331,
                status: "Empty",
                number: 108
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137332,
                status: "Empty",
                number: 109
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137333,
                status: "Empty",
                number: 110
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137334,
                status: "Empty",
                number: 111
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137335,
                status: "Empty",
                number: 112
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137336,
                status: "Empty",
                number: 113
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137337,
                status: "Empty",
                number: 114
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137338,
                status: "Empty",
                number: 115
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137339,
                status: "Empty",
                number: 116
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137340,
                status: "Empty",
                number: 117
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137341,
                status: "Empty",
                number: 118
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137342,
                status: "Empty",
                number: 119
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137343,
                status: "Empty",
                number: 120
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137344,
                status: "Empty",
                number: 121
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137345,
                status: "Empty",
                number: 122
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137346,
                status: "Empty",
                number: 123
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137347,
                status: "Empty",
                number: 124
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137348,
                status: "Empty",
                number: 125
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137349,
                status: "Empty",
                number: 126
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137350,
                status: "Empty",
                number: 127
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137351,
                status: "Empty",
                number: 128
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137352,
                status: "Empty",
                number: 129
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137353,
                status: "Empty",
                number: 130
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137354,
                status: "Empty",
                number: 131
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137355,
                status: "Empty",
                number: 132
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137356,
                status: "Empty",
                number: 133
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137357,
                status: "Empty",
                number: 134
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137358,
                status: "Empty",
                number: 135
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137359,
                status: "Empty",
                number: 136
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137360,
                status: "Empty",
                number: 137
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137361,
                status: "Empty",
                number: 138
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137362,
                status: "Empty",
                number: 139
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137363,
                status: "Empty",
                number: 140
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137364,
                status: "Empty",
                number: 141
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137365,
                status: "Empty",
                number: 142
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137366,
                status: "Empty",
                number: 143
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137367,
                status: "Empty",
                number: 144
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137368,
                status: "Empty",
                number: 145
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137369,
                status: "Empty",
                number: 146
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137370,
                status: "Empty",
                number: 147
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137371,
                status: "Empty",
                number: 148
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137372,
                status: "Empty",
                number: 149
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137373,
                status: "Empty",
                number: 150
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137374,
                status: "Empty",
                number: 151
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137375,
                status: "Empty",
                number: 152
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137376,
                status: "Empty",
                number: 153
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137377,
                status: "Empty",
                number: 154
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137378,
                status: "Empty",
                number: 155
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137379,
                status: "Empty",
                number: 156
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137380,
                status: "Empty",
                number: 157
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137381,
                status: "Empty",
                number: 158
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137382,
                status: "Empty",
                number: 159
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137383,
                status: "Empty",
                number: 160
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137384,
                status: "Empty",
                number: 161
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137385,
                status: "Empty",
                number: 162
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137386,
                status: "Empty",
                number: 163
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137387,
                status: "Empty",
                number: 164
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137388,
                status: "Empty",
                number: 165
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137389,
                status: "Empty",
                number: 166
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137390,
                status: "Empty",
                number: 167
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137391,
                status: "Empty",
                number: 168
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137392,
                status: "Empty",
                number: 169
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137393,
                status: "Empty",
                number: 170
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137394,
                status: "Empty",
                number: 171
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137395,
                status: "Empty",
                number: 172
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137396,
                status: "Empty",
                number: 173
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137397,
                status: "Empty",
                number: 174
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137398,
                status: "Empty",
                number: 175
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137399,
                status: "Empty",
                number: 176
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137400,
                status: "Empty",
                number: 177
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137401,
                status: "Empty",
                number: 178
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137402,
                status: "Empty",
                number: 179
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137403,
                status: "Empty",
                number: 180
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137404,
                status: "Empty",
                number: 181
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137405,
                status: "Empty",
                number: 182
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137406,
                status: "Empty",
                number: 183
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137407,
                status: "Empty",
                number: 184
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137408,
                status: "Empty",
                number: 185
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137409,
                status: "Empty",
                number: 186
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137410,
                status: "Empty",
                number: 187
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137411,
                status: "Empty",
                number: 188
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137412,
                status: "Empty",
                number: 189
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137413,
                status: "Empty",
                number: 190
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137414,
                status: "Empty",
                number: 191
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137415,
                status: "Empty",
                number: 192
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137416,
                status: "Empty",
                number: 193
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137417,
                status: "Empty",
                number: 194
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137418,
                status: "Empty",
                number: 195
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137419,
                status: "Empty",
                number: 196
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137420,
                status: "Empty",
                number: 197
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137421,
                status: "Empty",
                number: 198
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137422,
                status: "Empty",
                number: 199
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137423,
                status: "Empty",
                number: 200
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137424,
                status: "Empty",
                number: 201
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137425,
                status: "Empty",
                number: 202
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137426,
                status: "Empty",
                number: 203
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137427,
                status: "Empty",
                number: 204
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137428,
                status: "Empty",
                number: 205
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137429,
                status: "Empty",
                number: 206
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137430,
                status: "Empty",
                number: 207
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137431,
                status: "Empty",
                number: 208
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137432,
                status: "Empty",
                number: 209
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137433,
                status: "Empty",
                number: 210
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137434,
                status: "Empty",
                number: 211
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137435,
                status: "Empty",
                number: 212
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137436,
                status: "Empty",
                number: 213
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137437,
                status: "Empty",
                number: 214
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137438,
                status: "Empty",
                number: 215
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137439,
                status: "Empty",
                number: 216
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137440,
                status: "Empty",
                number: 217
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137441,
                status: "Empty",
                number: 218
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137442,
                status: "Empty",
                number: 219
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137443,
                status: "Empty",
                number: 220
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137444,
                status: "Empty",
                number: 221
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137445,
                status: "Empty",
                number: 222
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137446,
                status: "Empty",
                number: 223
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137447,
                status: "Empty",
                number: 224
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137448,
                status: "Empty",
                number: 225
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137449,
                status: "Empty",
                number: 226
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137450,
                status: "Empty",
                number: 227
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137451,
                status: "Empty",
                number: 228
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137452,
                status: "Empty",
                number: 229
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137453,
                status: "Empty",
                number: 230
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137454,
                status: "Empty",
                number: 231
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137455,
                status: "Empty",
                number: 232
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137456,
                status: "Empty",
                number: 233
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137457,
                status: "Empty",
                number: 234
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137458,
                status: "Empty",
                number: 235
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137459,
                status: "Empty",
                number: 236
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137460,
                status: "Empty",
                number: 237
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137461,
                status: "Empty",
                number: 238
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137462,
                status: "Empty",
                number: 239
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137463,
                status: "Empty",
                number: 240
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137464,
                status: "Empty",
                number: 241
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137465,
                status: "Empty",
                number: 242
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137466,
                status: "Empty",
                number: 243
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137467,
                status: "Empty",
                number: 244
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137468,
                status: "Empty",
                number: 245
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137469,
                status: "Empty",
                number: 246
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137470,
                status: "Empty",
                number: 247
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137471,
                status: "Empty",
                number: 248
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137472,
                status: "Empty",
                number: 249
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137473,
                status: "Empty",
                number: 250
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137474,
                status: "Empty",
                number: 251
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137475,
                status: "Empty",
                number: 252
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137476,
                status: "Empty",
                number: 253
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137477,
                status: "Empty",
                number: 254
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137478,
                status: "Empty",
                number: 255
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137479,
                status: "Empty",
                number: 256
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137480,
                status: "Empty",
                number: 257
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137481,
                status: "Empty",
                number: 258
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137482,
                status: "Empty",
                number: 259
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137483,
                status: "Empty",
                number: 260
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137484,
                status: "Empty",
                number: 261
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137485,
                status: "Empty",
                number: 262
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137486,
                status: "Empty",
                number: 263
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137487,
                status: "Empty",
                number: 264
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137488,
                status: "Empty",
                number: 265
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137489,
                status: "Empty",
                number: 266
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137490,
                status: "Empty",
                number: 267
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137491,
                status: "Empty",
                number: 268
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137492,
                status: "Empty",
                number: 269
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137493,
                status: "Empty",
                number: 270
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137494,
                status: "Empty",
                number: 271
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137495,
                status: "Empty",
                number: 272
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137496,
                status: "Empty",
                number: 273
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137497,
                status: "Empty",
                number: 274
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137498,
                status: "Empty",
                number: 275
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137499,
                status: "Empty",
                number: 276
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137500,
                status: "Empty",
                number: 277
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137501,
                status: "Empty",
                number: 278
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137502,
                status: "Empty",
                number: 279
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137503,
                status: "Empty",
                number: 280
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137504,
                status: "Empty",
                number: 281
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137505,
                status: "Empty",
                number: 282
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137506,
                status: "Empty",
                number: 283
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137507,
                status: "Empty",
                number: 284
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137508,
                status: "Empty",
                number: 285
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137509,
                status: "Empty",
                number: 286
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137510,
                status: "Empty",
                number: 287
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137511,
                status: "Empty",
                number: 288
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137512,
                status: "Empty",
                number: 289
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137513,
                status: "Empty",
                number: 290
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137514,
                status: "Empty",
                number: 291
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137515,
                status: "Empty",
                number: 292
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137516,
                status: "Empty",
                number: 293
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137517,
                status: "Empty",
                number: 294
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137518,
                status: "Empty",
                number: 295
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137519,
                status: "Empty",
                number: 296
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137520,
                status: "Empty",
                number: 297
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137521,
                status: "Empty",
                number: 298
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137522,
                status: "Empty",
                number: 299
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137523,
                status: "Empty",
                number: 300
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137524,
                status: "Empty",
                number: 301
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137525,
                status: "Empty",
                number: 302
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137526,
                status: "Empty",
                number: 303
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137527,
                status: "Empty",
                number: 304
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137528,
                status: "Empty",
                number: 305
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137529,
                status: "Empty",
                number: 306
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137530,
                status: "Empty",
                number: 307
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137531,
                status: "Empty",
                number: 308
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137532,
                status: "Empty",
                number: 309
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137533,
                status: "Empty",
                number: 310
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137534,
                status: "Empty",
                number: 311
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137535,
                status: "Empty",
                number: 312
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137536,
                status: "Empty",
                number: 313
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137537,
                status: "Empty",
                number: 314
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137538,
                status: "Empty",
                number: 315
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137539,
                status: "Empty",
                number: 316
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137540,
                status: "Empty",
                number: 317
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137541,
                status: "Empty",
                number: 318
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137542,
                status: "Empty",
                number: 319
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137543,
                status: "Empty",
                number: 320
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137544,
                status: "Empty",
                number: 321
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137545,
                status: "Empty",
                number: 322
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137546,
                status: "Empty",
                number: 323
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 10282.95,
                  bet: 511
                },
                roomId: 137547,
                status: "Empty",
                number: 324
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137548,
                status: "Empty",
                number: 325
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137549,
                status: "Empty",
                number: 326
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137550,
                status: "Empty",
                number: 327
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137551,
                status: "Empty",
                number: 328
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137552,
                status: "Empty",
                number: 329
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137553,
                status: "Empty",
                number: 330
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137554,
                status: "Empty",
                number: 331
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137555,
                status: "Empty",
                number: 332
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137556,
                status: "Empty",
                number: 333
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137557,
                status: "Empty",
                number: 334
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137558,
                status: "Empty",
                number: 335
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137559,
                status: "Empty",
                number: 336
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137560,
                status: "Empty",
                number: 337
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137561,
                status: "Empty",
                number: 338
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137562,
                status: "Empty",
                number: 339
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137563,
                status: "Empty",
                number: 340
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137564,
                status: "Empty",
                number: 341
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137565,
                status: "Empty",
                number: 342
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137566,
                status: "Empty",
                number: 343
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137567,
                status: "Empty",
                number: 344
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137568,
                status: "Empty",
                number: 345
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137569,
                status: "Empty",
                number: 346
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137570,
                status: "Empty",
                number: 347
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137571,
                status: "Empty",
                number: 348
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137572,
                status: "Empty",
                number: 349
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137573,
                status: "Empty",
                number: 350
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137574,
                status: "Empty",
                number: 351
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137575,
                status: "Empty",
                number: 352
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137576,
                status: "Empty",
                number: 353
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137577,
                status: "Empty",
                number: 354
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137578,
                status: "Empty",
                number: 355
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137579,
                status: "Empty",
                number: 356
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137580,
                status: "Empty",
                number: 357
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137581,
                status: "Empty",
                number: 358
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137582,
                status: "Empty",
                number: 359
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137583,
                status: "Empty",
                number: 360
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137584,
                status: "Empty",
                number: 361
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137585,
                status: "Empty",
                number: 362
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137586,
                status: "Empty",
                number: 363
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137587,
                status: "Empty",
                number: 364
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137588,
                status: "Empty",
                number: 365
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137589,
                status: "Empty",
                number: 366
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137590,
                status: "Empty",
                number: 367
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137591,
                status: "Empty",
                number: 368
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137592,
                status: "Empty",
                number: 369
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137593,
                status: "Empty",
                number: 370
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137594,
                status: "Empty",
                number: 371
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137595,
                status: "Empty",
                number: 372
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137596,
                status: "Empty",
                number: 373
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 12268.35,
                  bet: 15
                },
                roomId: 137597,
                status: "Empty",
                number: 374
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137598,
                status: "Empty",
                number: 375
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137599,
                status: "Empty",
                number: 376
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137600,
                status: "Empty",
                number: 377
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137601,
                status: "Empty",
                number: 378
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137602,
                status: "Empty",
                number: 379
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137603,
                status: "Empty",
                number: 380
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137604,
                status: "Empty",
                number: 381
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137605,
                status: "Empty",
                number: 382
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137606,
                status: "Empty",
                number: 383
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137607,
                status: "Empty",
                number: 384
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137608,
                status: "Empty",
                number: 385
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137609,
                status: "Empty",
                number: 386
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137610,
                status: "Empty",
                number: 387
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137611,
                status: "Empty",
                number: 388
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137612,
                status: "Empty",
                number: 389
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137613,
                status: "Empty",
                number: 390
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137614,
                status: "Empty",
                number: 391
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137615,
                status: "Empty",
                number: 392
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137616,
                status: "Empty",
                number: 393
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137617,
                status: "Empty",
                number: 394
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137618,
                status: "Empty",
                number: 395
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137619,
                status: "Empty",
                number: 396
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137620,
                status: "Empty",
                number: 397
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137621,
                status: "Empty",
                number: 398
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137622,
                status: "Empty",
                number: 399
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137623,
                status: "Empty",
                number: 400
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137624,
                status: "Empty",
                number: 401
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137625,
                status: "Empty",
                number: 402
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137626,
                status: "Empty",
                number: 403
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137627,
                status: "Empty",
                number: 404
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137628,
                status: "Empty",
                number: 405
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137629,
                status: "Empty",
                number: 406
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137630,
                status: "Empty",
                number: 407
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137631,
                status: "Empty",
                number: 408
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137632,
                status: "Empty",
                number: 409
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137633,
                status: "Empty",
                number: 410
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137634,
                status: "Empty",
                number: 411
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137635,
                status: "Empty",
                number: 412
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137636,
                status: "Empty",
                number: 413
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137637,
                status: "Empty",
                number: 414
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137638,
                status: "Empty",
                number: 415
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137639,
                status: "Empty",
                number: 416
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137640,
                status: "Empty",
                number: 417
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137641,
                status: "Empty",
                number: 418
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137642,
                status: "Empty",
                number: 419
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137643,
                status: "Empty",
                number: 420
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137644,
                status: "Empty",
                number: 421
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137645,
                status: "Empty",
                number: 422
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137646,
                status: "Empty",
                number: 423
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137647,
                status: "Empty",
                number: 424
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137648,
                status: "Empty",
                number: 425
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137649,
                status: "Empty",
                number: 426
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137650,
                status: "Empty",
                number: 427
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137651,
                status: "Empty",
                number: 428
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137652,
                status: "Empty",
                number: 429
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137653,
                status: "Empty",
                number: 430
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137654,
                status: "Empty",
                number: 431
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137655,
                status: "Empty",
                number: 432
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137656,
                status: "Empty",
                number: 433
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137657,
                status: "Empty",
                number: 434
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137658,
                status: "Empty",
                number: 435
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137659,
                status: "Empty",
                number: 436
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137660,
                status: "Empty",
                number: 437
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137661,
                status: "Empty",
                number: 438
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137662,
                status: "Empty",
                number: 439
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137663,
                status: "Empty",
                number: 440
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137664,
                status: "Empty",
                number: 441
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137665,
                status: "Empty",
                number: 442
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137666,
                status: "Empty",
                number: 443
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137667,
                status: "Empty",
                number: 444
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137668,
                status: "Empty",
                number: 445
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137669,
                status: "Empty",
                number: 446
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137670,
                status: "Empty",
                number: 447
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137671,
                status: "Empty",
                number: 448
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137672,
                status: "Empty",
                number: 449
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137673,
                status: "Empty",
                number: 450
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137674,
                status: "Empty",
                number: 451
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137675,
                status: "Empty",
                number: 452
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137676,
                status: "Empty",
                number: 453
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137677,
                status: "Empty",
                number: 454
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137678,
                status: "Empty",
                number: 455
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137679,
                status: "Empty",
                number: 456
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137680,
                status: "Empty",
                number: 457
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137681,
                status: "Empty",
                number: 458
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137682,
                status: "Empty",
                number: 459
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137683,
                status: "Empty",
                number: 460
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137684,
                status: "Empty",
                number: 461
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137685,
                status: "Empty",
                number: 462
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137686,
                status: "Empty",
                number: 463
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137687,
                status: "Empty",
                number: 464
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137688,
                status: "Empty",
                number: 465
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137689,
                status: "Empty",
                number: 466
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137690,
                status: "Empty",
                number: 467
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137691,
                status: "Empty",
                number: 468
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137692,
                status: "Empty",
                number: 469
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137693,
                status: "Empty",
                number: 470
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137694,
                status: "Empty",
                number: 471
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137695,
                status: "Empty",
                number: 472
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137696,
                status: "Empty",
                number: 473
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137697,
                status: "Empty",
                number: 474
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137698,
                status: "Empty",
                number: 475
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137699,
                status: "Empty",
                number: 476
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137700,
                status: "Empty",
                number: 477
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137701,
                status: "Empty",
                number: 478
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137702,
                status: "Empty",
                number: 479
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137703,
                status: "Empty",
                number: 480
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137704,
                status: "Empty",
                number: 481
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137705,
                status: "Empty",
                number: 482
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137706,
                status: "Empty",
                number: 483
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137707,
                status: "Empty",
                number: 484
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137708,
                status: "Empty",
                number: 485
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137709,
                status: "Empty",
                number: 486
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137710,
                status: "Empty",
                number: 487
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137711,
                status: "Empty",
                number: 488
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137712,
                status: "Empty",
                number: 489
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137713,
                status: "Empty",
                number: 490
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137714,
                status: "Empty",
                number: 491
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137715,
                status: "Empty",
                number: 492
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137716,
                status: "Empty",
                number: 493
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137717,
                status: "Empty",
                number: 494
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137718,
                status: "Empty",
                number: 495
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137719,
                status: "Empty",
                number: 496
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137720,
                status: "Empty",
                number: 497
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137721,
                status: "Empty",
                number: 498
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137722,
                status: "Empty",
                number: 499
              }, {
                win: 0,
                bet: 0,
                today: {
                  win: 0,
                  bet: 0
                },
                roomId: 137723,
                status: "Empty",
                number: 500
              }],
              slotTablesOn: !0,
              slotTableUpdated: 1,
              avatars: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19", "a20", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
            },
            isResuming: !1,
            resumptionType: "",
            eventName: "initial"
          };
        }, R.getNoWinSpinResponse = function () {
          return {
            status: 200,
            message: "ok",
            eventName: "spin",
            token: "d209c5228422428ba9e30a5a04138b6b",
            engine: {
              gameState: [{
                action: "spin",
                totalStake: 1,
                spinId: "",
                timesSymbols: [],
                timesUpgrade: [],
                view: [[5, 2, 3, 7, 8], [3, 5, 3, 7, 2], [3, 6, 8, 8, 3]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 0,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: 0,
                totalViews: 1,
                currentView: 0
              }],
              spinId: "66c32df816014c9a6d63a090"
            },
            platform: {
              game: {
                stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ratioValues: [.05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10]
              },
              player: {
                uid: 854,
                balance: {
                  currency: "TWD",
                  amount: 10002119.48,
                  gemAmount: 0
                }
              }
            }
          };
        }, R.getBonusSpinResponse = function () {
          return {
            status: 200,
            message: "ok",
            eventName: "spin",
            token: "12eb625aa1a549cbb9f323edf8d1c4f1",
            engine: {
              gameState: [{
                action: "spin",
                totalStake: 100,
                view: [[10, 7, 8, 4, 5], [2, 5, 10, 8, 6], [2, 8, 4, 2, 3]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 0,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: 0,
                totalViews: 1,
                currentView: 0
              }],
              spinId: "66c35eaa16014c9a6d63ab7d",
              bonusState: {
                isBonus: !0,
                isFinish: !1,
                bonusType: "elixirFurnace",
                action: "purify",
                actionValues: [0, 1, 2, 3, 4, 5, 6, 7],
                purifyValues: []
              }
            },
            platform: {
              game: {
                stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ratioValues: [.05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10]
              },
              player: {
                uid: 942,
                balance: {
                  currency: "TWD",
                  amount: 6858786.56
                }
              }
            }
          };
        }, R.getFreeGameSpinResponse = function () {
          return {
            status: 200,
            message: "ok",
            eventName: "spin",
            token: "8a62adfe6fba416f95e2b5a69f5d7ae3",
            engine: {
              gameState: [{
                action: "spin",
                totalStake: 1,
                view: [[4, 6, 1, 6, 2], [5, 7, 5, 1, 9], [9, 8, 9, 6, 7]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !0,
                freeGameCount: 10,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: 0,
                totalViews: 14,
                currentView: 0
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[6, 7, 8, 2, 9], [4, 2, 2, 6, 4], [5, 3, 6, 1, 4]],
                transformInfo: {
                  toWild: [],
                  toSymbol: [{
                    position: 2,
                    newSymbol: 7
                  }, {
                    position: 6,
                    newSymbol: 7
                  }, {
                    position: 10,
                    newSymbol: 7
                  }]
                },
                resultView: [[6, 7, 7, 2, 9], [4, 7, 2, 6, 4], [7, 3, 6, 1, 4]],
                winSymbols: [{
                  symbol: 7,
                  symbolPos: [10, 6, 2],
                  winLine: 4,
                  winnings: .1
                }],
                posTransform: [{
                  beforePos: 5,
                  afterPos: 10
                }, {
                  beforePos: 1,
                  afterPos: 6
                }, {
                  beforePos: 0,
                  afterPos: 5
                }],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 9,
                isJp: "",
                roundWinnings: .1,
                totalWinnings: .1,
                totalViews: 14,
                currentView: 1
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[3, 7, 7, 2, 9], [6, 7, 2, 6, 4], [4, 3, 6, 1, 4]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 2,
                startFreeGame: !1,
                freeGameCount: 9,
                isJp: "",
                roundWinnings: .1,
                totalWinnings: .1,
                totalViews: 14,
                currentView: 2
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[6, 4, 3, 5, 5], [7, 6, 9, 2, 2], [4, 8, 2, 5, 9]],
                transformInfo: {
                  toWild: [{
                    position: 2,
                    newSymbol: 1
                  }, {
                    position: 3,
                    newSymbol: 1
                  }, {
                    position: 13,
                    newSymbol: 1
                  }],
                  toSymbol: []
                },
                resultView: [[6, 4, 1, 1, 5], [7, 6, 9, 2, 2], [4, 8, 2, 1, 9]],
                winSymbols: [{
                  symbol: 6,
                  symbolPos: [0, 6, 2],
                  winLine: 13,
                  winnings: .15
                }],
                posTransform: [{
                  beforePos: 1,
                  afterPos: 6
                }],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 8,
                isJp: "",
                roundWinnings: .15,
                totalWinnings: .25,
                totalViews: 14,
                currentView: 3
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[8, 2, 6, 1, 5], [7, 4, 9, 2, 2], [4, 8, 2, 1, 9]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 2,
                startFreeGame: !1,
                freeGameCount: 8,
                isJp: "",
                roundWinnings: .15,
                totalWinnings: .25,
                totalViews: 14,
                currentView: 4
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[5, 8, 8, 7, 3], [7, 5, 8, 3, 4], [3, 8, 6, 8, 4]],
                transformInfo: {
                  toWild: [{
                    position: 1,
                    newSymbol: 1
                  }],
                  toSymbol: []
                },
                resultView: [[5, 1, 8, 7, 3], [7, 5, 8, 3, 4], [3, 8, 6, 8, 4]],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 7,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: .25,
                totalViews: 14,
                currentView: 5
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[5, 2, 7, 8, 3], [5, 7, 7, 4, 7], [4, 5, 3, 8, 8]],
                transformInfo: {
                  toWild: [{
                    position: 1,
                    newSymbol: 1
                  }, {
                    position: 3,
                    newSymbol: 1
                  }, {
                    position: 6,
                    newSymbol: 1
                  }, {
                    position: 13,
                    newSymbol: 1
                  }],
                  toSymbol: []
                },
                resultView: [[5, 1, 7, 1, 3], [5, 1, 7, 4, 7], [4, 5, 3, 1, 8]],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 6,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: .25,
                totalViews: 14,
                currentView: 6
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[7, 2, 1, 4, 7], [4, 2, 1, 6, 3], [4, 8, 5, 3, 5]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 5,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: .25,
                totalViews: 14,
                currentView: 7
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[8, 6, 5, 3, 4], [6, 3, 3, 3, 4], [7, 7, 8, 5, 4]],
                transformInfo: {
                  toWild: [{
                    position: 2,
                    newSymbol: 1
                  }, {
                    position: 8,
                    newSymbol: 1
                  }, {
                    position: 13,
                    newSymbol: 1
                  }],
                  toSymbol: []
                },
                resultView: [[8, 6, 1, 3, 4], [6, 3, 3, 1, 4], [7, 7, 8, 1, 4]],
                winSymbols: [{
                  symbol: 6,
                  symbolPos: [5, 1, 2],
                  winLine: 5,
                  winnings: .15
                }, {
                  symbol: 7,
                  symbolPos: [10, 11, 2, 13],
                  winLine: 18,
                  winnings: .3
                }],
                posTransform: [{
                  beforePos: 8,
                  afterPos: 13
                }, {
                  beforePos: 6,
                  afterPos: 11
                }, {
                  beforePos: 3,
                  afterPos: 8
                }, {
                  beforePos: 0,
                  afterPos: 10
                }],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 4,
                isJp: "",
                roundWinnings: .45,
                totalWinnings: .7,
                totalViews: 14,
                currentView: 8
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[4, 1, 2, 3, 4], [4, 2, 3, 3, 4], [8, 3, 8, 1, 4]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 2,
                startFreeGame: !1,
                freeGameCount: 4,
                isJp: "",
                roundWinnings: .45,
                totalWinnings: .7,
                totalViews: 14,
                currentView: 9
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[7, 7, 3, 2, 5], [5, 2, 2, 4, 8], [8, 4, 4, 3, 4]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 3,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: .7,
                totalViews: 14,
                currentView: 10
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[6, 1, 5, 1, 3], [6, 1, 5, 7, 5], [9, 6, 3, 1, 4]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 2,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: .7,
                totalViews: 14,
                currentView: 11
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[4, 2, 7, 2, 3], [7, 8, 7, 8, 2], [7, 5, 7, 2, 8]],
                transformInfo: {
                  toWild: [],
                  toSymbol: [{
                    position: 1,
                    newSymbol: 3
                  }, {
                    position: 8,
                    newSymbol: 3
                  }, {
                    position: 11,
                    newSymbol: 3
                  }, {
                    position: 14,
                    newSymbol: 3
                  }]
                },
                resultView: [[4, 3, 7, 2, 3], [7, 8, 7, 3, 2], [7, 3, 7, 2, 3]],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 1,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: .7,
                totalViews: 14,
                currentView: 12
              }, {
                action: "freeSpin",
                totalStake: 1,
                view: [[7, 3, 6, 8, 7], [7, 5, 7, 8, 6], [7, 2, 9, 8, 5]],
                transformInfo: {
                  toWild: [{
                    position: 3,
                    newSymbol: 1
                  }],
                  toSymbol: []
                },
                resultView: [[7, 3, 6, 1, 7], [7, 5, 7, 8, 6], [7, 2, 9, 8, 5]],
                winSymbols: [],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 0,
                isJp: "",
                roundWinnings: 0,
                totalWinnings: .7,
                totalViews: 14,
                currentView: 13
              }],
              spinId: "66c59e273b84ac8683998401"
            },
            platform: {
              game: {
                stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ratioValues: [.05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10]
              },
              player: {
                uid: 937,
                balance: {
                  currency: "TWD",
                  amount: 99344.68
                }
              }
            }
          };
        }, R.getFullExpectWinSpinResponse = function () {
          return {
            status: 200,
            message: "ok",
            eventName: "spin",
            token: "6a0f479227a842399c26ecda59c164b9",
            engine: {
              gameState: [{
                action: "spin",
                totalStake: 1,
                view: [[4, 4, 4, 4, 4], [4, 4, 4, 4, 4], [4, 4, 4, 4, 4]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [[4, 4, 4, 4, 4], [4, 4, 4, 4, 4], [4, 4, 4, 4, 4]],
                winSymbols: [{
                  symbol: 4,
                  symbolPos: [5, 6, 7, 8, 9],
                  winLine: 0,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [0, 1, 2, 3, 4],
                  winLine: 1,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [10, 11, 12, 13, 14],
                  winLine: 2,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [0, 6, 12, 8, 4],
                  winLine: 3,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [10, 6, 2, 8, 14],
                  winLine: 4,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [5, 1, 2, 3, 9],
                  winLine: 5,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [5, 11, 12, 13, 9],
                  winLine: 6,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [0, 1, 7, 13, 14],
                  winLine: 7,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [10, 11, 7, 3, 4],
                  winLine: 8,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [5, 11, 7, 3, 9],
                  winLine: 9,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [5, 1, 7, 13, 9],
                  winLine: 10,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [0, 6, 7, 8, 4],
                  winLine: 11,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [10, 6, 7, 8, 14],
                  winLine: 12,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [0, 6, 2, 8, 4],
                  winLine: 13,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [10, 6, 12, 8, 14],
                  winLine: 14,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [5, 6, 2, 8, 9],
                  winLine: 15,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [5, 6, 12, 8, 9],
                  winLine: 16,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [0, 1, 12, 3, 4],
                  winLine: 17,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [10, 11, 2, 13, 14],
                  winLine: 18,
                  winnings: 2.5
                }, {
                  symbol: 4,
                  symbolPos: [0, 11, 12, 13, 4],
                  winLine: 19,
                  winnings: 2.5
                }],
                posTransform: [],
                currentTimes: 1,
                startFreeGame: !1,
                freeGameCount: 0,
                roundWinnings: 50,
                totalWinnings: 50,
                totalViews: 2,
                currentView: 0
              }, {
                action: "spin",
                totalStake: 1,
                view: [[4, 3, 4, 6, 7], [7, 7, 3, 7, 3], [4, 6, 6, 3, 6]],
                transformInfo: {
                  toWild: [],
                  toSymbol: []
                },
                resultView: [[4, 3, 4, 6, 7], [7, 7, 3, 7, 3], [4, 6, 6, 3, 6]],
                winSymbols: [],
                posTransform: [],
                currentTimes: 2,
                startFreeGame: !1,
                freeGameCount: 0,
                roundWinnings: 50,
                totalWinnings: 50,
                totalViews: 2,
                currentView: 1
              }],
              spinId: "66cbf864cd328a9d0acbd91c"
            },
            platform: {
              game: {
                stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ratioValues: [.05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10]
              },
              player: {
                uid: 1378,
                balance: {
                  currency: "TWD",
                  amount: 1001199.2
                }
              }
            }
          };
        }, R.getCloseSpinResponse = function () {
          return {
            status: 200,
            message: "OK",
            eventName: "closeSpin",
            winType: null,
            extraInfoType: null,
            token: "166263918f1a4f828e3c1308e16d8cce",
            platform: {
              game: {
                stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ratioValues: [.05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10]
              },
              player: {
                uid: 1377,
                hasGem: 0,
                balance: {
                  currency: "TWD",
                  amount: 1012092.24,
                  gemAmount: 0
                }
              }
            },
            engine: {
              gameState: []
            }
          };
        }, o(a, [{
          key: "service",
          get: function () {
            return App.serviceManager.get(L);
          }
        }, {
          key: "data",
          get: function () {
            return App.dataCenter.get(P);
          }
        }]), a;
      }(R)).module = m[m.g1012], a._RF.pop();
    }
  };
});
