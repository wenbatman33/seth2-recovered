System.register("chunks:///_virtual/GameSender.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bundles.ts", "./ServerModel.ts", "./CmmUtils.ts", "./Http.ts", "./SlotFrameworkEvent.ts", "./GameService.ts", "./type2.ts", "./Config.ts", "./GameSenderBase.ts", "./DefinitionModel.ts", "./GameStateModel.ts", "./InitialModel.ts", "./PlatformModel.ts", "./SettingsModel.ts", "./SlotTableModel.ts", "./SocketModel.ts", "./ReplayModel.ts", "./UrlUtils2.ts", "./GameData.ts", "./GameEvent.ts", "./NoTouchingView.ts", "./SlotFrameworkData.ts", "./LogUtils.ts", "./StaticData.ts", "./StakeModel.ts"], function (e) {
  "use strict";

  var t, a, s, n, r, o, i, u, l, S, d, c, p, E, f, R, m, g, T, A, _, h, O, v, L, C, N, P, y, D, I, b, w, k, q, U, G;
  return {
    setters: [function (e) {
      t = e.inheritsLoose, a = e.extends, s = e.createClass;
    }, function (e) {
      n = e.cclegacy, r = e.sys, o = e.tween;
    }, function (e) {
      i = e.EBundles;
    }, function (e) {
      u = e.default, l = e.EServerMode;
    }, function (e) {
      S = e.CmmUtils;
    }, function (e) {
      d = e.Http;
    }, function (e) {
      c = e.SlotFrameworkEvent;
    }, function (e) {
      p = e.GameService;
    }, function (e) {
      E = e.ESocketRequestName, f = e.ESpinStatus, R = e.EDebugLogLevel;
    }, function (e) {
      m = e.ViewZOrder;
    }, function (e) {
      g = e.GameSenderBase;
    }, function (e) {
      T = e.default;
    }, function (e) {
      A = e.default;
    }, function (e) {
      _ = e.default;
    }, function (e) {
      h = e.default;
    }, function (e) {
      O = e.default;
    }, function (e) {
      v = e.default;
    }, function (e) {
      L = e.default;
    }, function (e) {
      C = e.default, N = e.EReplayMode;
    }, function (e) {
      P = e.default;
    }, function (e) {
      y = e.default;
    }, function (e) {
      D = e.GameEvent;
    }, function (e) {
      I = e.default;
    }, function (e) {
      b = e.default;
    }, function (e) {
      w = e.getKeyStyle, k = e.KeyStyle;
    }, function (e) {
      q = e.timesComboSpin, U = e.initialData;
    }, function (e) {
      G = e.default;
    }],
    execute: function () {
      n._RF.push({}, "bba38uNns5KPZNAYhrOaLuL", "GameSender", void 0), e("GameSender", function (e) {
        function n() {
          return e.apply(this, arguments) || this;
        }
        t(n, e);
        var g = n.prototype;
        return g.initial = function () {
          var e = this;
          if (u.mode === l.STATIC) {
            var t = U;
            return this.setToken(t), T.setData(t.engine.definition), A.setData(t.engine.gameState), h.setData(t.platform), O.setData(t.platform.player.settings), _.setData(t), G.init({
              stakeList: t.platform.game.stakeValues,
              stakeIndex: t.platform.player.settings.stakeIndex,
              ratioList: t.platform.game.ratioValues,
              ratioIndex: t.platform.player.settings.ratioIndex,
              numWinlines: t.engine.definition.winlineDefs.length
            }), dispatch(c.INIT_RESPONSE, t), new Promise(function (e, t) {
              e();
            });
          }
          var a = {
            token: L.currentToken,
            clientType: S.getClientType(),
            deviceInfo: {
              browser: {
                name: r.browserType,
                version: r.browserVersion
              },
              os: {
                name: r.os,
                version: r.osVersion,
                versionName: r.osMainVersion
              },
              platform: {
                type: r.platform
              },
              engine: {
                name: "cocos creator 3.7.2"
              }
            }
          };
          return new Promise(function (t, s) {
            e.send("initial", a, function (a) {
              if (a.status == d.ServerStatus.SUCCESS) {
                if (a.code) return Log.e("NETWORK_ERROR: ", a), void e.responsShowAlert(a.message, null == a ? void 0 : a.code);
                try {
                  e.setToken(a), T.setData(a.engine.definition), A.setData(a.engine.gameState), h.setData(a.platform), O.setData(a.platform.player.settings), _.setData(a), dispatch(c.INIT_RESPONSE, a), t();
                } catch (e) {
                  var s = {
                    title: App.getLanguage("alertHint", [], i[i.slotFramework]),
                    text: "initial data error",
                    bbrCb: function () {},
                    needCloseAlert: !1,
                    code: e
                  };
                  App.gameAlert.show(s);
                }
              } else Log.e("NETWORK_ERROR: ", a), e.responsShowAlert(a.message, null == a ? void 0 : a.code);
            });
          });
        }, g.responsShowAlert = function (e, t) {
          if ("xin-star" == h.getData().theme) {
            var a = App.getLanguage("disconnectXinStar", [], i[i.wrapper]);
            this.showAlert(a, {
              needCloseAlert: !1,
              code: t,
              titleisHidden: !0,
              expandisHidden: !0,
              confirmisHidden: !0
            });
          } else this.showAlert(e, {
            needCloseAlert: !1,
            code: t
          });
        }, g.spin = function (e, t, s, n) {
          var r = this;
          if (u.mode !== l.STATIC) {
            var i = a({
              request: E.SPIN
            }, e, {
              updateStake: n
            }, t && {
              spinId: t
            }, s && {
              cheat: s
            });
            this.send(i.request, i, function (e) {
              if (e.status == d.ServerStatus.SUCCESS) {
                Log.d("%c SPIN_RESP", w(k.Response), e), r.setToken(e), A.setData(e.engine.gameState);
                var a = e.platform.player.balance.amount;
                if (e.platform.player.balance.updatedAt) {
                  var s = e.platform.player.balance.updatedAt;
                  h.updateBalance(a, s);
                } else h.amount = e.platform.player.balance.amount;
                null != e.platform.player.balance.betAmount && (h.betAmount = e.platform.player.balance.betAmount), dispatch(c.SPIN_RESPONSE, e);
              } else if (e.status == d.ServerStatus.ERROR_SPIN_ONE_MORE) {
                var n, o, u, l;
                r.setToken(e), dispatch(c.UPDATE_SPIN_STATUS, {
                  data: f.IDLE
                }), Log.e("後端->前端 多打了一次spin"), r.debugLog({
                  id: t || r.data.getData().gameState.spinId,
                  level: R.ERROR,
                  message: "後端->前端 多打了一次spin",
                  data: {
                    requestVO: i,
                    currentData: null == (n = r.data) || null == (o = n.getData()) ? void 0 : o.gameState,
                    preData: null == (u = r.data) || null == (l = u.preData) ? void 0 : l.gameState
                  }
                });
              } else Log.e("NETWORK_ERROR: ", e), r.responsShowAlert(e.message, null == e ? void 0 : e.code);
            });
          } else o(this).delay(.1).call(function () {
            var e = JSON.parse(JSON.stringify(q));
            Log.d("%c SPIN_RESP", w(k.Manager), e), A.setData(e.engine.gameState);
            var t = e.platform.player.balance.amount;
            if (e.platform.player.balance.updatedAt) {
              var a = e.platform.player.balance.updatedAt;
              h.updateBalance(t, a);
            } else h.amount = e.platform.player.balance.amount;
            dispatch(c.SPIN_RESPONSE, e);
          }).start();
        }, g.earlySpin = function (e, t, s, n) {
          var r = this;
          if (u.mode !== l.STATIC) {
            var o = a({
              request: E.SPIN
            }, e, {
              updateStake: s
            }, t && {
              spinId: t
            }, {
              forceClose: n
            });
            Log.w("early request::::::::::", o, n), this.send(o.request, o, function (e) {
              e.status == d.ServerStatus.SUCCESS ? (r.setToken(e), dispatch(c.EARLY_SPIN_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), r.responsShowAlert(e.message, e.code));
            });
          }
        }, g.closeSpin = function (e) {
          var t = this;
          if (u.mode !== l.STATIC) {
            var a = {
              request: E.CLOSE_SPIN,
              spinId: e
            };
            this.send(a.request, a, function (e) {
              if (e.status == d.ServerStatus.SUCCESS) {
                t.setToken(e);
                var a = e.platform.player.balance.amount;
                if (e.platform.player.balance.updatedAt) {
                  var s = e.platform.player.balance.updatedAt;
                  h.updateBalance(a, s);
                } else h.amount = e.platform.player.balance.amount;
                dispatch(c.CLOSE_RESPONSE, e);
              } else Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code);
            });
          } else o(this).delay(.1).call(function () {
            dispatch(c.CLOSE_RESPONSE);
          }).start();
        }, g.earlyCloseSpin = function (e, t) {
          var a = this,
            s = {
              request: E.CLOSE_SPIN,
              spinId: e
            };
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (a.setToken(e), t && t(), dispatch(c.EARLY_CLOSE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), a.responsShowAlert(e.message, e.code));
          });
        }, g.setting = function (e) {
          var t = this,
            s = a({
              request: E.UPDATE_SETTINGS
            }, e);
          this.send(s.request, s, function (e) {
            if (e.status != d.ServerStatus.SUCCESS) return Log.e("update setting NETWORK_ERROR: ", e), void dispatch(D.FG_STOP_COUNT_FOR_PLAY_LOG);
            t.setToken(e);
          });
        }, g.getBetRecords = function (e) {
          var t = this,
            s = a({
              request: E.GET_BET_RECORDS
            }, e);
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(c.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, g.getHistoryRecords = function (e) {
          var t = this,
            s = a({
              request: E.GET_USER_REPORT
            }, e);
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(c.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, g.getSlotTablePage = function (e) {
          var t = this,
            s = a({
              request: E.GET_SLOT_TABLES
            }, e);
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (t.setToken(e), v.setData(e), dispatch(c.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, g.getSlotTable = function (e) {
          var t = this,
            s = a({
              request: E.GET_SLOT_TABLES
            }, e);
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (t.setToken(e), v.setData(e), dispatch(c.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, g.getSlotTableDetail = function (e) {
          var t = this,
            s = a({
              request: E.GET_SLOT_TABLE_DETAIL
            }, e);
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (t.setToken(e), v.setData(e), dispatch(c.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, g.changeSlotTable = function (e) {
          var t = this,
            s = a({
              request: E.UPDATE_SLOT_TABLE
            }, e);
          this.send(s.request, s, function (e) {
            if (e.status !== d.ServerStatus.BACKEND_ERROR) {
              if (t.setToken(e), e.status !== d.ServerStatus.NOT_MODIFIED) {
                var a = new URLSearchParams(window.location.search);
                a.set("table", "1");
                var s = window.location.pathname + "?" + a.toString();
                window.location.href = s;
              } else App.gameAlert.show({
                text: e.message,
                confirmCb: function () {
                  dispatch(c.SYNC_SOLT_TABLES);
                },
                bbrCb: function () {}
              }, m.TopErrorAlert);
            } else t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            });
          });
        }, g.lockSlotTable = function (e) {
          var t = this,
            s = a({
              request: E.LOCK_SLOT_TABLE
            }, e);
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(c.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, g.buyFeature = function (e, t) {
          var s = this,
            n = a({
              request: E.SPIN,
              action: "buyFeature",
              clientType: "web",
              featureIndex: 0,
              featureValue: "freeGame"
            }, e, {
              updateStake: !0
            });
          this.send(n.request, n, function (e) {
            if (e.status == d.ServerStatus.SUCCESS) s.setToken(e), dispatch(c.BUY_FEATURE_RESPONSE, {
              data: e.engine.gameState.spinId
            });else if (Log.e("NETWORK_ERROR: ", e), "xin-star" == h.getData().theme) {
              var t = App.getLanguage("disconnectXinStar", [], i[i.wrapper]);
              s.showAlert(t, {
                needCloseAlert: !1,
                code: e.code,
                titleisHidden: !0,
                expandisHidden: !0,
                confirmisHidden: !0
              });
            } else App.gameAlert.show({
              text: e.message,
              confirmCb: function () {},
              bbrCb: function () {}
            });
          });
        }, g.updateAvatar = function (e) {
          var t = {
            request: E.UPDATE_AVATAR,
            avatarId: e
          };
          this.send(t.request, t), h.getData().player.avatar = e, h.getData().player.avatarUrl = P.GetAvatarUrl(e), dispatch(c.UPDATE_AVATAR_COMPLETED_RESPONSE);
        }, g.updateDisplayName = function (e) {
          var t = this,
            a = {
              request: E.UPDATE_DISPLAYNAME,
              displayName: e
            };
          this.send(a.request, a, function (a) {
            t.setToken(a), a.status !== d.ServerStatus.REQUEST_ERROR ? (h.getData().player.displayName = e, dispatch(c.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(c.SET_DISPLAYNAME_TIP, a.message);
          });
        }, g.replay = function () {
          var e = this,
            t = new URL(window.location.href).searchParams.get("spinId"),
            a = {
              request: E.REPLAY,
              spinId: t
            };
          this.send(a.request, a, function (t) {
            t.status == d.ServerStatus.SUCCESS ? (C.setData(t), T.setData(t.definition), dispatch(c.REPLAY_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.responsShowAlert(t.message));
          });
        }, g.getSlotBetRanksList = function (e) {
          var t = this,
            s = a({
              request: E.GET_SLOT_BET_RANKS_LIST,
              action: "list"
            }, e);
          this.send(s.request, s, function (e) {
            e.status == d.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(c.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, g.getSlotBetRanksReplay = function (e) {
          var t = this,
            s = a({
              request: E.GET_SLOT_BET_RANKS_REPLAY,
              action: "replay"
            }, e);
          if (App.dataCenter.get(b).getData().spinStatus === f.IDLE) return new Promise(function (e, a) {
            t.send(s.request, s, function (a) {
              C.replayMode = N.RANKING_REPLAY, a.status == d.ServerStatus.SUCCESS ? (C.isReplay = !0, t.data.saveOriginGameData(), C.setData(a), h.getData().player.displayName = a.betData.replayMeta.displayName, h.amount = a.betData.replayMeta.amount, a.definition && T.setData(a.definition), dispatch(c.REPLAY_RESPONSE, a), dispatch(D.PROCESS_REPLAY_IN_GAME, {
                data: a
              }), e()) : (Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
                needCloseAlert: !1
              }));
            });
          });
          App.uiManager.close(I);
          var n = {
            text: "請等待遊戲結束後，再進行重播",
            confirmCb: function () {
              dispatch(c.PLAY_CLICK_BTM);
            },
            bbrCb: function () {
              dispatch(c.PLAY_CLICK_BTM);
            },
            needCloseAlert: !0,
            tag: m.Tips
          };
          App.gameAlert.show(n, m.Tips);
        }, s(n, [{
          key: "service",
          get: function () {
            return App.serviceManager.get(p);
          }
        }, {
          key: "data",
          get: function () {
            return App.dataCenter.get(y);
          }
        }]), n;
      }(g)).module = i[i.g1008], n._RF.pop();
    }
  };
});
