// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameSender.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-ServerModel";
import * as __dependency_3 from "../../shared/scripts/main-Config";
import * as __dependency_4 from "../../shared/scripts/main-Bundles";
import * as __dependency_5 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_6 from "../../shared/scripts/main-Http";
import * as __dependency_7 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_8 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_9 from "../../shared/scripts/framework-DefinitionModel";
import * as __dependency_10 from "../../shared/scripts/framework-GameStateModel";
import * as __dependency_11 from "../../shared/scripts/framework-InitialModel";
import * as __dependency_12 from "../../shared/scripts/framework-PlatformModel";
import * as __dependency_13 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_14 from "../../shared/scripts/framework-SettingsModel";
import * as __dependency_15 from "../../shared/scripts/framework-SlotTableModel";
import * as __dependency_16 from "../../shared/scripts/framework-SocketModel";
import * as __dependency_17 from "../../shared/scripts/framework-GameSenderBase";
import * as __dependency_18 from "../../shared/scripts/framework-type2";
import * as __dependency_19 from "../../shared/scripts/framework-LogUtils";
import * as __dependency_20 from "./g1007-GameConfigModel";
import * as __dependency_21 from "./g1007-GameData";
import * as __dependency_22 from "./g1007-StaticData";
import * as __dependency_23 from "./g1007-GameEvent";
import * as __dependency_24 from "./g1007-StateMachineManager";
import * as __dependency_25 from "./g1007-GameService";
var __export_0;
export { __export_0 as GameSender };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSender":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, s, n, r, i, o, l, u, S, d, c, p, E, f, R, m, T, g, A, _, h, v, O, C, L, y, D, I, N, P, k, b, w;
__dependency_1.cclegacy._RF.push({}, "0e6c3gZ+7RDrpDp5sL4Kk9Z", "GameSender", void 0), __publish("GameSender", function (e) {
  function n() {
    for (var t, a = arguments.length, s = new Array(a), n = 0; n < a; n++) s[n] = arguments[n];
    return (t = Reflect.construct(e, [this].concat(s).slice(1), new.target || this.constructor) || this).isOptionSpin = !1, t;
  }
  __dependency_0.inheritsLoose(n, e);
  var O = n.prototype;
  return O.initial = function () {
    var e = this;
    if (__dependency_2.default.mode === __dependency_2.EServerMode.STATIC) {
      var t = __dependency_22.initialData;
      return this.setToken(t), __dependency_9.default.setData(t.engine.definition), __dependency_10.default.setData(t.engine.gameState), __dependency_12.default.setData(t.platform), __dependency_14.default.setData(t.platform.player.settings), __dependency_11.default.setData(t), __dependency_7.default.init({
        stakeList: t.platform.game.stakeValues,
        stakeIndex: t.platform.player.settings.stakeIndex,
        ratioList: t.platform.game.ratioValues,
        ratioIndex: t.platform.player.settings.ratioIndex,
        numWinlines: 1
      }), void dispatch(__dependency_8.SlotFrameworkEvent.INIT_RESPONSE, t);
    }
    var a = {
      token: __dependency_16.default.currentToken,
      clientType: __dependency_5.CmmUtils.getClientType(),
      deviceInfo: {
        browser: {
          name: __dependency_1.sys.browserType,
          version: __dependency_1.sys.browserVersion
        },
        os: {
          name: __dependency_1.sys.os,
          version: __dependency_1.sys.osVersion,
          versionName: __dependency_1.sys.osMainVersion
        },
        platform: {
          type: __dependency_1.sys.platform
        },
        engine: {
          name: "cocos creator 3.7.2"
        }
      }
    };
    return new Promise(function (t, s) {
      e.send("initial", a, function (a) {
        if (a.status == __dependency_6.Http.ServerStatus.SUCCESS) {
          if (a.code) return Log.e("NETWORK_ERROR: ", a), void e.showAlert(a.message, {
            needCloseAlert: !1,
            code: null == a ? void 0 : a.code
          });
          try {
            e.setToken(a), __dependency_9.default.setData(a.engine.definition), __dependency_10.default.setData(a.engine.gameState), __dependency_12.default.setData(a.platform), __dependency_14.default.setData(a.platform.player.settings), __dependency_11.default.setData(a), __dependency_7.default.init({
              stakeList: a.platform.game.stakeValues,
              stakeIndex: a.platform.player.settings.stakeIndex,
              ratioList: a.platform.game.ratioValues,
              ratioIndex: a.platform.player.settings.ratioIndex,
              numWinlines: 1
            }), dispatch(__dependency_8.SlotFrameworkEvent.INIT_RESPONSE, a), t();
          } catch (e) {
            var s = {
              title: App.getLanguage("alertHint", [], __dependency_4.EBundles[__dependency_4.EBundles.slotFramework]),
              text: "initial data error",
              bbrCb: function () {},
              needCloseAlert: !1,
              code: e
            };
            App.gameAlert.show(s);
          }
        } else Log.e("NETWORK_ERROR: ", a), e.showAlert(a.message, {
          needCloseAlert: !1,
          code: null == a ? void 0 : a.code
        });
      });
    });
  }, O.spin = function (e, t, s, n, r) {
    var u = this;
    if (__dependency_2.default.mode === __dependency_2.EServerMode.STATIC || r) return this.isOptionSpin = !0, void __dependency_1.tween(this).bindNodeState(false).delay(.1).call(function () {
      var e = JSON.parse(JSON.stringify(r || __dependency_22.test));
      Log.d("%c STATIC_SPIN_RESP", __dependency_19.getKeyStyle(__dependency_19.KeyStyle.Manager), e), __dependency_10.default.setData(e.engine.gameState);
      var t = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var a = e.platform.player.balance.updatedAt;
        __dependency_12.default.updateBalance(t, a);
      } else __dependency_12.default.amount = e.platform.player.balance.amount;
      dispatch(__dependency_8.SlotFrameworkEvent.SPIN_RESPONSE, e);
    }).start();
    this.isOptionSpin = !1;
    var S = __dependency_0.extends({
      request: __dependency_18.ESocketRequestName.SPIN
    }, e, {
      updateStake: n
    }, s && {
      spinId: s
    }, {
      isXtraBetOn: t
    });
    this.send(S.request, S, function (e) {
      if (e.status == __dependency_6.Http.ServerStatus.SUCCESS) {
        u.setToken(e), __dependency_10.default.setData(e.engine.gameState);
        var t = e.platform.player.balance.amount;
        if (e.platform.player.balance.updatedAt) {
          var a = e.platform.player.balance.updatedAt;
          __dependency_12.default.updateBalance(t, a);
        } else __dependency_12.default.amount = e.platform.player.balance.amount;
        dispatch(__dependency_8.SlotFrameworkEvent.SPIN_RESPONSE, e);
      } else Log.e("NETWORK_ERROR: ", e), u.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      });
    });
  }, O.closeSpin = function (e) {
    var t = this;
    if (__dependency_2.default.mode === __dependency_2.EServerMode.STATIC || this.isOptionSpin) __dependency_1.tween(this).bindNodeState(false).delay(.1).call(function () {
      dispatch(__dependency_8.SlotFrameworkEvent.CLOSE_RESPONSE);
    }).start();else {
      var a = {
        request: __dependency_18.ESocketRequestName.CLOSE_SPIN,
        spinId: e
      };
      this.send(a.request, a, function (e) {
        if (e.status == __dependency_6.Http.ServerStatus.SUCCESS) {
          t.setToken(e);
          var a = e.platform.player.balance.amount;
          if (e.platform.player.balance.updatedAt) {
            var s = e.platform.player.balance.updatedAt;
            __dependency_12.default.updateBalance(a, s);
          } else __dependency_12.default.amount = e.platform.player.balance.amount;
          t.data.getData().isResuming && (t.data.getData().isResuming = !1), dispatch(__dependency_8.SlotFrameworkEvent.CLOSE_RESPONSE, e);
        } else Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1,
          code: e.code
        });
      });
    }
  }, O.setting = function (e) {
    var t = this;
    if (!__dependency_13.default.isReplay) {
      var s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.UPDATE_SETTINGS
      }, e);
      this.send(s.request, s, function (e) {
        e.status == __dependency_6.Http.ServerStatus.SUCCESS ? t.setToken(e) : Log.e("update setting NETWORK_ERROR: ", e);
      });
    }
  }, O.getBetRecords = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.GET_BET_RECORDS
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_8.SlotFrameworkEvent.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, O.getHistoryRecords = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.GET_USER_REPORT
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_8.SlotFrameworkEvent.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, O.getSlotBetRanksList = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.GET_SLOT_BET_RANKS_LIST,
        action: "list"
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_8.SlotFrameworkEvent.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, O.getSlotBetRanksReplay = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.GET_SLOT_BET_RANKS_REPLAY,
        action: "replay"
      }, e);
    if (__dependency_24.default.getMachine().currentStateId === __dependency_24.default.state.MG_WAIT_SPIN_STATE.id) return new Promise(function (e, a) {
      t.send(s.request, s, function (a) {
        if (__dependency_13.default.replayMode = __dependency_13.EReplayMode.RANKING_REPLAY, a.status == __dependency_6.Http.ServerStatus.SUCCESS) {
          var s = a.betData.replayMeta,
            n = s.ratioIndex,
            r = s.stakeIndex,
            i = s.ratioValues,
            o = s.stakeValues,
            l = s.avatarUrl,
            u = s.avatarId;
          t.data.saveOriginGameData(), t.data.setReplayInitData(a), __dependency_13.default.setData(a), __dependency_7.default.init({
            stakeIndex: r,
            ratioIndex: n,
            stakeList: o,
            ratioList: i,
            numWinlines: 1
          }), __dependency_12.default.amount = a.betData.replayMeta.amount, __dependency_12.default.getData().player.displayName = a.betData.replayMeta.displayName, __dependency_12.default.getData().player.avatar = u, __dependency_12.default.getData().player.avatarUrl = l, __dependency_20.default.isRankReplayMode = !0, dispatch(__dependency_8.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), dispatch(__dependency_23.GameEvent.PROCESS_REPLAY_IN_GAME, {
            data: a
          }), e();
        } else Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
          needCloseAlert: !1
        });
      });
    });
    var n = {
      text: "請等待遊戲結束後，再進行重播",
      confirmCb: function () {
        dispatch(__dependency_8.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      bbrCb: function () {
        dispatch(__dependency_8.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      needCloseAlert: !0,
      tag: __dependency_3.ViewZOrder.Tips
    };
    App.gameAlert.show(n, __dependency_3.ViewZOrder.Tips);
  }, O.getSlotTablePage = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.setToken(e), __dependency_15.default.setData(e), dispatch(__dependency_8.SlotFrameworkEvent.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, O.getSlotTableDetail = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.GET_SLOT_TABLE_DETAIL
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.setToken(e), __dependency_15.default.setData(e), dispatch(__dependency_8.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, O.changeSlotTable = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.UPDATE_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      if (e.status !== __dependency_6.Http.ServerStatus.BACKEND_ERROR) {
        if (t.setToken(e), e.status !== __dependency_6.Http.ServerStatus.NOT_MODIFIED) {
          var a = new URLSearchParams(window.location.search);
          a.set("table", "1");
          var s = window.location.pathname + "?" + a.toString();
          window.location.href = s;
        } else App.gameAlert.show({
          text: e.message,
          confirmCb: function () {
            dispatch(__dependency_8.SlotFrameworkEvent.SYNC_SOLT_TABLES);
          },
          bbrCb: function () {}
        }, __dependency_3.ViewZOrder.TopErrorAlert);
      } else t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      });
    });
  }, O.lockSlotTable = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.LOCK_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_8.SlotFrameworkEvent.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, O.buyFeature = function (e) {
    var t = this,
      s = __dependency_0.extends({
        request: __dependency_18.ESocketRequestName.SPIN,
        action: "buyFeature",
        clientType: "web"
      }, e, {
        updateStake: !0
      });
    this.send(s.request, s, function (e) {
      e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_8.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, {
        data: e.engine.gameState.spinId
      })) : (Log.e("NETWORK_ERROR: ", e), App.gameAlert.show({
        text: e.message,
        confirmCb: function () {
          dispatch(__dependency_23.GameEvent.CLOSE_BUY_FEATURE_VIEW);
        },
        bbrCb: function () {
          dispatch(__dependency_23.GameEvent.CLOSE_BUY_FEATURE_VIEW);
        }
      }));
    });
  }, O.updateAvatar = function (e) {
    var t = this,
      a = {
        request: __dependency_18.ESocketRequestName.UPDATE_AVATAR,
        avatarId: e
      };
    this.send(a.request, a, function (e) {
      if (e.status == __dependency_6.Http.ServerStatus.SUCCESS) {
        t.setToken(e);
        var a = e.data,
          s = a.avatarId,
          n = a.avatarUrl;
        __dependency_12.default.getData().player.avatar = s, __dependency_12.default.getData().player.avatarUrl = n, dispatch(__dependency_8.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE);
      } else Log.e("NETWORK_ERROR: ", e);
    });
  }, O.updateDisplayName = function (e) {
    var t = this,
      a = {
        request: __dependency_18.ESocketRequestName.UPDATE_DISPLAYNAME,
        displayName: e
      };
    this.send(a.request, a, function (a) {
      t.setToken(a), a.status !== __dependency_6.Http.ServerStatus.REQUEST_ERROR ? (__dependency_12.default.getData().player.displayName = e, dispatch(__dependency_8.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(__dependency_8.SlotFrameworkEvent.SET_DISPLAYNAME_TIP, a.message);
    });
  }, O.replayInInitial = function () {
    var e = this,
      t = new URL(window.location.href).searchParams.get("spinId"),
      s = {
        request: __dependency_18.ESocketRequestName.REPLAY,
        spinId: t
      };
    return new Promise(function (t, n) {
      e.send(s.request, s, function (s) {
        if (s.status == __dependency_6.Http.ServerStatus.SUCCESS) {
          __dependency_13.default.replayMode = __dependency_13.EReplayMode.URL_REPLAY, e.data.setReplayInitData(s);
          var n = s.betData.replayMeta,
            r = n.ratioIndex,
            i = n.stakeIndex,
            o = n.ratioValues,
            l = n.stakeValues,
            u = s.betData.replayMeta,
            S = u.avatarUrl,
            d = u.avatarId,
            E = __dependency_0.extends({}, s.definition, {
              isDemo: !1
            });
          __dependency_12.default.amount = s.betData.replayMeta.amount, __dependency_12.default.getData().player.displayName = s.betData.replayMeta.displayName, __dependency_12.default.getData().player.avatar = d, __dependency_12.default.getData().player.avatarUrl = S, __dependency_9.default.setData(E), __dependency_7.default.init({
            stakeIndex: i,
            ratioIndex: r,
            stakeList: l,
            ratioList: o,
            numWinlines: 1
          }), __dependency_13.default.setData(s), dispatch(__dependency_23.GameEvent.PARSER_REPLAY_COMPLETED), t();
        } else Log.e("NETWORK_ERROR: ", s), e.showAlert(s.message, {
          needCloseAlert: !1
        });
      });
    });
  }, O.sendJackpotGameSelectPosition = function (e) {
    var t = this;
    return new Promise(function (a) {
      t.send(__dependency_18.ESocketRequestName.SPIN, e, function (e) {
        e.status == __dependency_6.Http.ServerStatus.SUCCESS ? (t.data.getData().bonusState = e.engine.bonusState, Log.d("response : ", e), dispatch(__dependency_23.GameEvent.JACKPOT_GAME_PICK_RESPONSE, e), a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1
        }));
      });
    });
  }, __dependency_0.createClass(n, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(__dependency_25.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_21.default);
    }
  }]), n;
}(__dependency_17.GameSenderBase)).module = __dependency_4.EBundles[__dependency_4.EBundles.g1007], __dependency_1.cclegacy._RF.pop();
