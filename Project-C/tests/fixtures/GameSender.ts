// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-ServerModel";
import * as _dependency5 from "../../shared/scripts/main-CmmUtils";
import * as _dependency6 from "../../shared/scripts/main-Http";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "./g1009-GameService";
import * as _dependency9 from "../../shared/scripts/slotFramework-type2";
import * as _dependency0 from "../../shared/scripts/main-Config";
import * as _dependency1 from "../../shared/scripts/slotFramework-GameSenderBase";
import * as _dependency10 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-GameStateModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-InitialModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency15 from "../../shared/scripts/slotFramework-SlotTableModel";
import * as _dependency16 from "../../shared/scripts/slotFramework-SocketModel";
import * as _dependency17 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency18 from "../../shared/scripts/slotFramework-UrlUtils2";
import * as _dependency19 from "./g1009-GameData";
import * as _dependency20 from "./g1009-GameConfigModel";
import * as _dependency21 from "./g1009-GameEvent";
import * as _dependency22 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency23 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency24 from "../../shared/scripts/slotFramework-LogUtils";
var _export;
export { _export as GameSender };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSender":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, s, n, o, r, i, l, u, S, d, c, p, E, f, R, m, T, g, h, A, _, O, C, v, L, P, N, D, y, b, I, w, q, k, U;
_dependency2.cclegacy._RF.push({}, "fbe8fGj+GJDzq2bvbdH7aMn", "GameSender", void 0), _publish("GameSender", function (e) {
  var _nativeConstructor = r;
  function r() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(r, e);
  var g = r.prototype;
  return g.initial = function () {
    var e = this;
    if (_dependency4.default.mode !== _dependency4.EServerMode.STATIC) {
      var t = {
        token: _dependency16.default.currentToken,
        clientType: _dependency5.CmmUtils.getClientType(),
        deviceInfo: {
          browser: {
            name: _dependency2.sys.browserType,
            version: _dependency2.sys.browserVersion
          },
          os: {
            name: _dependency2.sys.os,
            version: _dependency2.sys.osVersion,
            versionName: _dependency2.sys.osMainVersion
          },
          platform: {
            type: _dependency2.sys.platform
          },
          engine: {
            name: "cocos creator 3.7.2"
          }
        }
      };
      return new Promise(function (a, s) {
        e.send("initial", t, function (t) {
          if (t.status == _dependency6.Http.ServerStatus.SUCCESS) {
            if (t.code) return Log.e("NETWORK_ERROR: ", t), void e.showAlert(t.message, {
              needCloseAlert: !1,
              code: null == t ? void 0 : t.code
            });
            try {
              e.setToken(t), _dependency10.default.setData(t.engine.definition), _dependency11.default.setData(t.engine.gameState), _dependency13.default.setData(t.platform), _dependency14.default.setData(t.platform.player.settings), _dependency12.default.setData(t), dispatch(_dependency7.SlotFrameworkEvent.INIT_RESPONSE, t), a();
            } catch (e) {
              var s = {
                title: App.getLanguage("alertHint", [], _dependency3.EBundles[_dependency3.EBundles.slotFramework]),
                text: "initial data error",
                bbrCb: function () {},
                needCloseAlert: !1,
                code: e
              };
              App.gameAlert.show(s);
            }
          } else Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
            needCloseAlert: !1,
            code: null == t ? void 0 : t.code
          });
        });
      });
    }
  }, g.spin = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t, s, n, r) {
      var i,
        l,
        d,
        E,
        T,
        g = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (!n) {
              e.next = 5;
              break;
            }
            return i = n.type, (l = _dependency20.default.getData().filePaths.testSpinDatas) && (d = App.cache.get(_dependency19.default.module, l).data) && d.length > 0 && (_dependency4.default.mode = _dependency4.EServerMode.STATIC, Log.e("fake spin data:::::::", d[i].json, i, d), E = d[i].json, _dependency11.default.setData(E.engine.gameState), _dependency13.default.amount = E.platform.player.balance.amount, dispatch(_dependency7.SlotFrameworkEvent.SPIN_RESPONSE, E)), e.abrupt("return");
          case 5:
            T = _dependency.extends({
              request: _dependency9.ESocketRequestName.SPIN
            }, t, {
              updateStake: r
            }, s && {
              spinId: s
            }, {
              pools: {
                "jp-mini": this.slotData.tempJpPools["jp-mini"],
                "jp-minor": this.slotData.tempJpPools["jp-minor"],
                "jp-major": this.slotData.tempJpPools["jp-major"],
                "jp-grand": this.slotData.tempJpPools["jp-grand"]
              }
            }), this.send(T.request, T, function (e) {
              if (e.status == _dependency6.Http.ServerStatus.SUCCESS) {
                g.setToken(e), _dependency11.default.setData(e.engine.gameState);
                var t = e.platform.player.balance.amount;
                if (e.platform.player.balance.updatedAt) {
                  var a = e.platform.player.balance.updatedAt;
                  _dependency13.default.updateBalance(t, a);
                } else _dependency13.default.amount = e.platform.player.balance.amount;
                dispatch(_dependency7.SlotFrameworkEvent.SPIN_RESPONSE, e);
              } else if (e.status == _dependency6.Http.ServerStatus.ERROR_SPIN_ONE_MORE) {
                var n, o, r, i;
                g.setToken(e), dispatch(_dependency7.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                  data: _dependency9.ESpinStatus.IDLE
                }), Log.e("後端->前端 多打了一次spin"), g.debugLog({
                  id: s || g.data.getData().gameState.spinId,
                  level: _dependency9.EDebugLogLevel.ERROR,
                  message: "後端->前端 多打了一次spin",
                  data: {
                    requestVO: T,
                    currentData: null == (n = g.data) || null == (o = n.getData()) ? void 0 : o.gameState,
                    preData: null == (r = g.data) || null == (i = r.preData) ? void 0 : i.gameState
                  }
                });
              } else Log.e("NETWORK_ERROR: ", e), g.showAlert(e.message, {
                needCloseAlert: !1,
                code: e.code
              });
            });
          case 7:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, a, s, n) {
      return e.apply(this, arguments);
    };
  }(), g.earlySpin = function (e, t, s, n, o) {
    var r = this;
    if (_dependency4.default.mode !== _dependency4.EServerMode.STATIC) {
      var i = _dependency.extends({
        request: _dependency9.ESocketRequestName.SPIN
      }, e, {
        updateStake: n
      }, t && {
        spinId: t
      }, {
        forceClose: o,
        pools: {
          "jp-mini": this.slotData.tempJpPools["jp-mini"],
          "jp-minor": this.slotData.tempJpPools["jp-minor"],
          "jp-major": this.slotData.tempJpPools["jp-major"],
          "jp-grand": this.slotData.tempJpPools["jp-grand"]
        }
      });
      Log.w("early request::::::::::", i, o), this.send(i.request, i, function (e) {
        e.status == _dependency6.Http.ServerStatus.SUCCESS ? (r.setToken(e), dispatch(_dependency7.SlotFrameworkEvent.EARLY_SPIN_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), r.showAlert(e.message, {
          needCloseAlert: !1,
          code: e.code
        }));
      });
    }
  }, g.closeSpin = function (e) {
    var t = this;
    if (_dependency4.default.mode != _dependency4.EServerMode.STATIC) {
      var a = {
        request: _dependency9.ESocketRequestName.CLOSE_SPIN,
        spinId: e
      };
      this.send(a.request, a, function (e) {
        if (e.status == _dependency6.Http.ServerStatus.SUCCESS) {
          t.setToken(e);
          var a = e.platform.player.balance.amount;
          if (e.platform.player.balance.updatedAt) {
            var s = e.platform.player.balance.updatedAt;
            _dependency13.default.updateBalance(a, s);
          } else _dependency13.default.amount = e.platform.player.balance.amount;
          dispatch(_dependency7.SlotFrameworkEvent.CLOSE_RESPONSE, e);
        } else Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1,
          code: e.code
        });
      });
    } else {
      var s = _dependency20.default.getData().filePaths.testCloseSpinDatas;
      if (s) {
        var n = App.cache.get(_dependency19.default.module, s).data;
        if (n && n.length > 0) {
          var o = n[0].json;
          _dependency13.default.amount = o.platform.player.balance.amount, dispatch(_dependency7.SlotFrameworkEvent.CLOSE_RESPONSE, o), _dependency4.default.mode = _dependency4.EServerMode.ONLINE;
        }
      }
    }
  }, g.earlyCloseSpin = function (e, t) {
    var a = this,
      s = {
        request: _dependency9.ESocketRequestName.CLOSE_SPIN,
        spinId: e
      };
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (a.setToken(e), t && t(), dispatch(_dependency7.SlotFrameworkEvent.EARLY_CLOSE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), a.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.setting = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.UPDATE_SETTINGS
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? t.setToken(e) : Log.e("update setting NETWORK_ERROR: ", e);
    });
  }, g.getBetRecords = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.GET_BET_RECORDS
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency7.SlotFrameworkEvent.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.getHistoryRecords = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.GET_USER_REPORT
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency7.SlotFrameworkEvent.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.getSlotTablePage = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency15.default.setData(e), dispatch(_dependency7.SlotFrameworkEvent.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.getSlotTableData = function () {
    var e = this,
      t = {
        request: _dependency9.ESocketRequestName.GET_SLOT_TABLES
      };
    this.send(t.request, t, function (t) {
      t.status == _dependency6.Http.ServerStatus.SUCCESS ? (e.setToken(t), _dependency15.default.setData(t), dispatch(_dependency7.SlotFrameworkEvent.SLOT_TABLES_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
        needCloseAlert: !1,
        code: t.code
      }));
    });
  }, g.getSlotTable = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency15.default.setData(e), dispatch(_dependency7.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.getSlotTableDetail = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.GET_SLOT_TABLE_DETAIL
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency15.default.setData(e), dispatch(_dependency7.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.changeSlotTable = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.UPDATE_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      if (e.status !== _dependency6.Http.ServerStatus.BACKEND_ERROR) {
        if (t.setToken(e), e.status !== _dependency6.Http.ServerStatus.NOT_MODIFIED) {
          var a = new URLSearchParams(window.location.search);
          a.set("table", "1");
          var s = window.location.pathname + "?" + a.toString();
          window.location.href = s;
        } else App.gameAlert.show({
          text: e.message,
          confirmCb: function () {
            dispatch(_dependency7.SlotFrameworkEvent.SYNC_SOLT_TABLES);
          },
          bbrCb: function () {}
        }, _dependency0.ViewZOrder.TopErrorAlert);
      } else t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      });
    });
  }, g.lockSlotTable = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.LOCK_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency7.SlotFrameworkEvent.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.buyFeature = function (e, t, s) {
    var n = this,
      o = _dependency.extends({
        request: _dependency9.ESocketRequestName.SPIN,
        action: "buyFeature",
        clientType: "web",
        featureIndex: s,
        featureValue: _dependency10.default.getData().buyFeature[s].feature
      }, e, {
        updateStake: !0,
        pools: {
          "jp-mini": this.slotData.tempJpPools["jp-mini"],
          "jp-minor": this.slotData.tempJpPools["jp-minor"],
          "jp-major": this.slotData.tempJpPools["jp-major"],
          "jp-grand": this.slotData.tempJpPools["jp-grand"]
        }
      });
    console.log("%c buyFeature ", _dependency24.getKeyStyle(_dependency24.KeyStyle.Request), o), this.send(o.request, o, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (n.setToken(e), dispatch(_dependency7.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, {
        data: e.engine.gameState.spinId
      })) : (Log.e("NETWORK_ERROR: ", e), App.gameAlert.show({
        text: e.message,
        confirmCb: function () {},
        bbrCb: function () {}
      }));
    });
  }, g.updateAvatar = function (e) {
    var t = {
      request: _dependency9.ESocketRequestName.UPDATE_AVATAR,
      avatarId: e
    };
    this.send(t.request, t), _dependency13.default.getData().player.avatar = e, _dependency13.default.getData().player.avatarUrl = _dependency18.default.GetAvatarUrl(e), dispatch(_dependency7.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE);
  }, g.updateDisplayName = function (e) {
    var t = this,
      a = {
        request: _dependency9.ESocketRequestName.UPDATE_DISPLAYNAME,
        displayName: e
      };
    this.send(a.request, a, function (a) {
      t.setToken(a), a.status !== _dependency6.Http.ServerStatus.REQUEST_ERROR ? (_dependency13.default.getData().player.displayName = e, dispatch(_dependency7.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(_dependency7.SlotFrameworkEvent.SET_DISPLAYNAME_TIP, a.message);
    });
  }, g.replay = function () {
    var e = this,
      t = new URL(window.location.href).searchParams.get("spinId"),
      a = {
        request: _dependency9.ESocketRequestName.REPLAY,
        spinId: t
      };
    this.send(a.request, a, function (t) {
      t.status == _dependency6.Http.ServerStatus.SUCCESS ? (_dependency17.default.setData(t), _dependency10.default.setData(t.definition), dispatch(_dependency7.SlotFrameworkEvent.REPLAY_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
        needCloseAlert: !1
      }));
    });
  }, g.getSlotBetRanksList = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.GET_SLOT_BET_RANKS_LIST,
        action: "list"
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency6.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency7.SlotFrameworkEvent.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, g.getSlotBetRanksReplay = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency9.ESocketRequestName.GET_SLOT_BET_RANKS_REPLAY,
        action: "replay"
      }, e);
    if (App.dataCenter.get(_dependency22.default).getData().spinStatus === _dependency9.ESpinStatus.IDLE) return new Promise(function (e, a) {
      t.send(s.request, s, function (a) {
        _dependency17.default.replayMode = _dependency17.EReplayMode.RANKING_REPLAY, a.status == _dependency6.Http.ServerStatus.SUCCESS ? (_dependency17.default.isReplay = !0, t.data.saveOriginGameData(), _dependency17.default.setData(a), a.definition && _dependency10.default.setData(a.definition), dispatch(_dependency7.SlotFrameworkEvent.REPLAY_RESPONSE, a), dispatch(_dependency21.GameEvent.PROCESS_REPLAY_IN_GAME, {
          data: a
        }), e()) : (Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
          needCloseAlert: !1
        }));
      });
    });
    App.uiManager.close(_dependency23.default);
    var n = {
      text: "請等待遊戲結束後，再進行重播",
      confirmCb: function () {
        dispatch(_dependency7.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      bbrCb: function () {
        dispatch(_dependency7.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      needCloseAlert: !0,
      tag: _dependency0.ViewZOrder.Tips
    };
    App.gameAlert.show(n, _dependency0.ViewZOrder.Tips);
  }, _dependency.createClass(r, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency8.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency19.default);
    }
  }]), r;
}(_dependency1.GameSenderBase)).module = App.dataCenter.get(_dependency19.default).module, _dependency2.cclegacy._RF.pop();
