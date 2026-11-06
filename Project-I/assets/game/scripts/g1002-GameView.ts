// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-CmmUtils";
import * as _dependency6 from "../../shared/scripts/main-AdapterEvent";
import * as _dependency7 from "../../shared/scripts/main-GameViewBase";
import * as _dependency8 from "../../shared/scripts/main-Decorators";
import * as _dependency9 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency0 from "../../shared/scripts/main-WrapperData";
import * as _dependency1 from "../../shared/scripts/slotFramework-PrizeNotify";
import * as _dependency10 from "../../shared/scripts/slotFramework-InfoBarController";
import * as _dependency11 from "../../shared/scripts/slotFramework-InfoBarPController";
import * as _dependency12 from "../../shared/scripts/slotFramework-SpinBarControllerLandScape";
import * as _dependency13 from "../../shared/scripts/slotFramework-SpinBarPController";
import * as _dependency14 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency15 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency16 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency17 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency18 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency19 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency20 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency21 from "../../shared/scripts/slotFramework-type2";
import * as _dependency22 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency23 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency24 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency25 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency26 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency27 from "./g1002-ReplayUIViewP";
import * as _dependency28 from "./g1002-GameConfigModel";
import * as _dependency29 from "./g1002-GameData";
import * as _dependency30 from "./g1002-GameEvent";
import * as _dependency31 from "./g1002-GameLogic";
import * as _dependency32 from "./g1002-StaticData";
import * as _dependency33 from "./g1002-StateMachineManager";
import * as _dependency34 from "./g1002-types";
import * as _dependency35 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, o, s, r, u, l, c, p, d, f, h, S, _, A, E, T, m, g, I, N, b, P, y, C, L, M, w, O, D, R, v, G, B, U, V, k, W, F, H, x, Y, z, K, q, Q, Z, j, X, J, $, tt, et, nt, it, at, ot;
var st, rt, ut, lt, ct, pt, dt, ft, ht, St, _t, At, Et, Tt, mt, gt, It, Nt, bt, Pt, yt, Ct, Lt, Mt;
_dependency2.cclegacy._RF.push({}, "d9550wUMZ1MsqPLIGmeXbB9", "GameView", void 0);
var wt = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (st = wt("GameView"), rt = _dependency8.inject("content", _dependency2.Node), ut = _dependency8.inject("content/gameLayer", _dependency2.Node), lt = _dependency8.inject("content/uiLayer", _dependency2.Node), ct = _dependency8.inject("content/uiLayer/leftContent", _dependency2.Node), pt = _dependency8.inject("content/gameLayer/ReelView", _dependency2.Node), dt = _dependency8.inject("content/gameLayer/SymbolView", _dependency2.Node), ft = _dependency8.inject("content/gameLayer/buyFeatureBtn", _dependency2.Node), ht = _dependency8.inject("content/gameLayer/frontAnimContent", _dependency2.Node), St = _dependency8.inject("content/uiLayer/version", _dependency2.Label), _t = _dependency8.inject("content/uiLayer/os", _dependency2.Label), st(((Mt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "content", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameLayer", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "uiLayer", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "leftContent", It, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ReelView", Nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "SymbolView", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "buyFeatureBtn", Pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "frontAnimContent", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "version", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "os", Lt, _dependency.assertThisInitialized(e)), e.slotUIMap = new Map(), e.isCanSkipWinLine = !1, e.extensionSchedule = null, e.cachedGameViewName = null, e.BALANCE_NOT_ENOUGH_ALERT = {
      text: App.getLanguage("insufficientFund", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
      confirmCb: function () {
        return e.showAutoSpinBtn();
      },
      bbrCb: function () {
        return e.showAutoSpinBtn();
      }
    }, e.BALANCE_IS_ZERO_ALERT = {
      text: App.getLanguage("insufficientFundError", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
      confirmCb: function () {
        return e.showAutoSpinBtn();
      },
      bbrCb: function () {
        return e.showAutoSpinBtn();
      }
    }, e.resumeDispatched = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var u = e.prototype;
  return u.getGameViewName = function () {
    return this.cachedGameViewName || (this.cachedGameViewName = _dependency5.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0]), this.cachedGameViewName;
  }, u.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, u.start = function () {
    this.beforeInit();
  }, u.onDestroy = function () {
    this.removeEvents();
  }, e.getPrefabUrl = function () {
    return "prefabs/GameView";
  }, u.reset = function () {
    t.prototype.reset.call(this);
  }, u.beforeInit = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e, n;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.args) {
              t.next = 3;
              break;
            }
            return t.abrupt("return");
          case 3:
            if (e !== _dependency31.EInitName.INIT_GAME) {
              t.next = 18;
              break;
            }
            _dependency19.default.isReplay = !1, _dependency33.default.setCurrentState(_dependency33.EStateMachineName.GAME_STATE), _dependency28.default.setIsTurbo(_dependency18.default.getData().player.settings.advancedSettings.turbo), this.init(), n = _dependency24.default.transposeArray(this.data.getData().gameState[this.data.getData().gameState.length - 1].view), dispatch(_dependency30.GameEvent.SET_SYMBOL_VIEW, {
              data: n
            }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
              data: {
                balance: _dependency18.default.amount
              }
            }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: 0
              }
            }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_STAKE), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
              data: {
                spinId: ""
              }
            }), dispatch(_dependency16.SlotFrameworkEvent.SET_DISPLAY_NAME), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), t.next = 25;
            break;
          case 18:
            if (e !== _dependency31.EInitName.INIT_REPLAY) {
              t.next = 25;
              break;
            }
            return _dependency19.default.isReplay = !0, _dependency33.default.setCurrentState(_dependency33.EStateMachineName.REPLAY_STATE), t.next = 23, _dependency33.default.getMachine().forceToAsync(_dependency33.default.state.MG_INIT_STATE.id);
          case 23:
            dispatch(_dependency30.GameEvent.PARSER_REPLAY_COMPLETED, this.data.tempReplayResponse), this.initReplay();
          case 25:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), u.init = function () {
    this.getGameViewName(), this.initCompleted(), this.setUI(), this.initAudio(), this.setEventTouch(), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.quickStop, this);
  }, u.initReplay = function () {
    _dependency19.default.replayMode === _dependency19.EReplayMode.RANKING_REPLAY && dispatch(_dependency16.SlotFrameworkEvent.HIDE_SPIN_BAR), this.initCompleted(), this.initAudio(), this.setReplayUI(), this.buyFeatureBtn.active = !1, this.setVersion("v" + this.data.GAME_VERSION), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      data: {
        balance: _dependency18.default.amount
      }
    }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_STAKE), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: ""
      }
    }), dispatch(_dependency16.SlotFrameworkEvent.SET_DISPLAY_NAME), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), _dependency28.default.setIsTurbo(!1), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.quickStop, this);
  }, u.setReplayUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      i = [{
        path: _dependency22.CmmSlotUtils.getOrientationTarget(n, e),
        component: _dependency22.CmmSlotUtils.getOrientationTarget(_dependency10.default, _dependency11.default),
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
      }];
    this.addSlotUI(i), App.uiManager.open({
      type: _dependency27.default,
      bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
      zIndex: _dependency3.ViewZOrder.ReplayUI,
      name: "replay UI層"
    });
  }, u.setUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      i = t.spinBarPPrefab,
      a = t.spinBarPrefab,
      o = [{
        path: _dependency22.CmmSlotUtils.getOrientationTarget(n, e),
        component: _dependency22.CmmSlotUtils.getOrientationTarget(_dependency10.default, _dependency11.default),
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
      }, {
        path: _dependency22.CmmSlotUtils.getOrientationTarget(a, i),
        component: _dependency22.CmmSlotUtils.getOrientationTarget(_dependency12.default, _dependency13.default),
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
      }, {
        path: "prefabs/component/PrizeNotify",
        component: _dependency1.PrizeNotify,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
      }];
    this.addSlotUI(o), this.setSlotUIData();
  }, u.addSlotUI = function (t) {
    var e = this;
    t.forEach(function (t) {
      var n = t.path,
        i = t.component,
        a = t.bundle,
        o = App.cache.get(a, n).data,
        s = _dependency2.instantiate(o);
      if (e.slotUIMap.set(s.name, s), s.addComponent(i), e.uiLayer.addChild(s), i == _dependency1.PrizeNotify) {
        s.getComponent(_dependency2.Widget).enabled = !1;
        var r = s.getChildByName("content");
        if (r) {
          var u = r.getComponent(_dependency2.Widget);
          u && (u.enabled = !1), r.setPosition(_dependency2.v3(255, 312, 0));
        }
      }
    });
  }, u.setSlotUIData = function () {
    var t = this;
    if (App.dataCenter.get(_dependency0.default).orientation === _dependency6.EOrientationType.LANDSCAPE) ;else {
      var e = this.uiLayer.getComponentInChildren(_dependency13.default);
      e.addSpinEventTouch(this.name, function () {
        t.spin();
      }), e.addQuickStopEventTouch(function () {
        _dependency19.default.isReplay ? t.replayQuickStop() : (_dependency28.default.isCanStop || t.isCanSkipWinLine || _dependency28.default.isCanSkipTotalWinCash) && t.quickStop();
      }), e.initTurbo(_dependency28.default.isTurbo), e.addTurboEventTouch(_dependency28.default);
      var n = _dependency28.default.isTurbo ? 3 : 0;
      _dependency9.ReelDataSettingObj.setSpeedIndex(n), this.setVersion("v" + this.data.GAME_VERSION);
      var i = _dependency28.default.getData().filePaths,
        a = i.common,
        o = i.font,
        s = i.localeSpriteFrame,
        r = i.spinSkeleton,
        u = App.cache.get(this.bundle, r).data[0],
        l = {
          normal: _dependency23.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_normal"),
          pressed: _dependency23.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_pressed"),
          hover: _dependency23.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_normal"),
          disabled: _dependency23.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_disabled")
        },
        c = {
          font: _dependency23.LoadUtils.getDirSp(this.bundle, o, "countup_07"),
          fontSize: 30,
          fontPos: new _dependency2.Vec3(0, 0, 0)
        };
      e.setSpinBtnData(u, null, l, c), e.setRuleAssets({
        bundle: this.bundle,
        background: a,
        rules: s,
        excludeIndexes: [11]
      });
    }
  }, u.keyDown = function (t) {
    t.keyCode;
  }, u.setEventTouch = function () {
    this.onI(_dependency2.Input.EventType.KEY_DOWN, this.keyDown), _dependency5.CmmUtils.addBtnClickEvent(this.buyFeatureBtn, function () {
      App.dataCenter.get(_dependency14.default).getData().spinStatus !== _dependency21.ESpinStatus.SPINING && (dispatch(_dependency30.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency28.EBTM.BUY_FEATUREFG_CLICK
        }
      }), dispatch(_dependency30.GameEvent.OPEN_FEATURE_POPUP));
    });
  }, u.shakeView = function (t) {
    var e = this,
      n = t.data,
      i = n.time,
      a = n.multiple,
      o = n.repeat,
      s = [this.ReelView, this.SymbolView, this.node],
      r = _dependency2.tween().bindNodeState(false).to(i, {
        position: new _dependency2.Vec3(-3 * a, -6 * a, 0)
      }).to(i, {
        position: new _dependency2.Vec3(5 * a, 5 * a, 0)
      }).to(i, {
        position: new _dependency2.Vec3(-2 * a, -8 * a, 0)
      }).to(i, {
        position: new _dependency2.Vec3(8 * a, -10 * a, 0)
      }).to(i, {
        position: new _dependency2.Vec3(-3 * a, 10 * a, 0)
      }).to(i, {
        position: new _dependency2.Vec3(3 * a, -5 * a, 0)
      }).to(i, {
        position: new _dependency2.Vec3(-4 * a, 8 * a, 0)
      });
    s.forEach(function (n) {
      _dependency2.tween(n).bindNodeState(false).delay(.3).to(i, {
        position: new _dependency2.Vec3(6 * a, 7 * a, 0)
      }).to(i, {
        position: new _dependency2.Vec3(13 * a, 3 * a, 0)
      }).then(r).repeat(o).to(i, {
        position: new _dependency2.Vec3(0, 0, 0)
      }).call(function () {
        e.node.position = new _dependency2.Vec3(0, 0, 0), t.complete && t.complete();
      }).then(r).repeat(4).start();
    });
  }, u.playBGM = function (t) {
    this.audioHelper.playMusic(t, this.bundle);
  }, u.playBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playEffect(t, this.bundle, e);
  }, u.playRepeatBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playRepeatEffect(t, this.bundle, e);
  }, u.stopBTM = function (t) {
    this.audioHelper.stopEffect(t, this.bundle);
  }, u.initAudio = function () {
    var t, e;
    if (_dependency35.default.hasParam("spinId")) return App.globalAudio.musicVolume = 0, void (App.globalAudio.effectVolume = 0);
    App.globalAudio.musicVolume = null != (t = _dependency20.default.backgroundVolume) ? t : 1, App.globalAudio.effectVolume = null != (e = _dependency20.default.effectVolume) ? e : 1;
  }, u.setAllInteractable = function (t) {
    this.buyFeatureBtn.getComponent(_dependency2.Button).interactable = t;
  }, u.addEvents = function () {
    var t = this;
    this.on(_dependency30.GameEvent.CHANGE_GAME_STYLE, function (e) {
      var n = e.data;
      _dependency19.default.isReplay || (n ? dispatch(_dependency16.SlotFrameworkEvent.SHOW_SPIN_BAR) : dispatch(_dependency16.SlotFrameworkEvent.HIDE_SPIN_BAR), t.buyFeatureBtn.active = n);
    }), this.on(_dependency30.GameEvent.SHAKE_NODE, function (e) {
      t.shakeView(e);
    }), this.on(_dependency30.GameEvent.PLAY_BGM, function (e) {
      t.playBGM(e.data);
    }), this.on(_dependency30.GameEvent.CAN_STOP_SPIN, function (t) {
      _dependency28.default.isCanStop = !0;
    }), this.on(_dependency30.GameEvent.PLAY_BTM, function (e) {
      var n = e.data,
        i = n.url,
        a = n.loop;
      t.playBTM(i, a);
    }), this.on(_dependency30.GameEvent.PLAY_REPEAT_BTM, function (e) {
      var n = e.data,
        i = n.url,
        a = n.loop;
      t.playRepeatBTM(i, a);
    }), this.on(_dependency30.GameEvent.STOP_BTM, function (e) {
      t.stopBTM(e.data);
    }), this.on(_dependency30.GameEvent.MUSIC_VOLUME_MULTIPLE, function (e) {
      t.mutipleMusicVolume(e.data);
    }), this.on(_dependency16.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, function (e) {
      t.buyFeatureSpin(e.data);
    }), this.on(_dependency30.GameEvent.REEL_ALL_STOP, function (t) {
      _dependency28.default.isCanStop = !1;
    }), this.on(_dependency16.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      var n = e.data,
        i = _dependency21.ESpinStatus.SPINING === n;
      t.setAllInteractable(!i);
    }), this.on(_dependency30.GameEvent.CAN_SKIP_TOTAL_WIN_CASH, function () {
      _dependency28.default.isCanSkipTotalWinCash = !0;
    }), this.on(_dependency30.GameEvent.SHOW_TOTAL_WIN_CASH_END, function () {
      _dependency28.default.isCanSkipTotalWinCash = !1;
    }), this.on(_dependency30.GameEvent.CAN_SKIP_WIN_LINE, function () {
      t.isCanSkipWinLine = !0;
    }), this.on(_dependency30.GameEvent.SHOW_WIN_LINE_END, function () {
      t.isCanSkipWinLine = !1;
    });
  }, u.removeEvents = function () {
    this.off(_dependency30.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency30.GameEvent.SHAKE_NODE), this.off(_dependency30.GameEvent.PLAY_BGM), this.off(_dependency30.GameEvent.CAN_STOP_SPIN), this.off(_dependency30.GameEvent.PLAY_BTM), this.off(_dependency30.GameEvent.PLAY_REPEAT_BTM), this.off(_dependency30.GameEvent.STOP_BTM), this.off(_dependency30.GameEvent.MUSIC_VOLUME_MULTIPLE), this.off(_dependency16.SlotFrameworkEvent.BUY_FEATURE_RESPONSE), this.off(_dependency30.GameEvent.REEL_ALL_STOP), this.off(_dependency16.SlotFrameworkEvent.UPDATE_SPIN_STATUS), this.off(_dependency30.GameEvent.CAN_SKIP_WIN_LINE), this.offI(_dependency2.Input.EventType.KEY_DOWN, this.keyDown);
  }, u.buyFeatureSpin = function (t) {
    dispatch(_dependency30.GameEvent.CLOSE_FEATURE_POPUP), dispatch(_dependency30.GameEvent.START_SPIN, {
      data: {
        spinId: t
      }
    }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    });
  }, u.showResumeAlert = function () {
    var t = this,
      e = {
        text: App.getLanguage("wrapper1", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
        bbrColor: new _dependency2.Color(0, 0, 0, 255),
        confirmCb: function (e) {
          t.resumeDispatched || (t.resumeDispatched = !0, dispatch(_dependency30.GameEvent.START_RESUME));
        }
      };
    App.gameAlert.show(e), App.uiManager.close(_dependency22.CmmSlotUtils.getOrientationTarget(_dependency25.default, _dependency26.default));
  }, u.createTestBtn = function () {}, u.showAutoSpinBtn = function () {
    dispatch(_dependency16.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    });
  }, u.isMainGameAndNotResuming = function () {
    return this.data.currentGameType === _dependency34.EGameType.MAIN_GAME && !this.data.getData().isResuming;
  }, u.spin = function () {
    if (!App.gameAlert.currentPanel && App.uiManager.IsOnlyGameViewOpen(this.getGameViewName()) && _dependency33.default.getMachine().currentStateId === _dependency33.default.state.MG_WAIT_SPIN_STATE.id) {
      if (this.isMainGameAndNotResuming()) {
        if (0 === _dependency18.default.getData().player.balance.amount) return void App.gameAlert.show(this.BALANCE_IS_ZERO_ALERT);
        if (!this.checkBalance()) return App.gameAlert.show(this.BALANCE_NOT_ENOUGH_ALERT), void dispatch(_dependency16.SlotFrameworkEvent.STOP_AUTO_SPIN);
      }
      dispatch(_dependency30.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      });
    }
  }, u.quickStop = function () {
    if (!App.gameAlert.currentPanel) if (_dependency33.default.getMachine().currentStateId == _dependency33.default.state.MG_SHOW_WIN_LINE_STATE.id || _dependency33.default.getMachine().currentStateId == _dependency33.default.state.FG_SHOW_WIN_LINE_STATE.id) this.isCanSkipWinLine && dispatch(_dependency30.GameEvent.SKIP_WIN_LINE);else if (_dependency33.default.getMachine().currentStateId == _dependency33.default.state.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE.id) _dependency28.default.isCanSkipTotalWinCash && (dispatch(_dependency30.GameEvent.SKIP_SHOW_TOTAL_WIN_CASH), _dependency28.default.isSendClose || (dispatch(_dependency16.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
      data: this.data.getData().spinId
    }), _dependency28.default.isSendClose = !0));else {
      var t = App.dataCenter.get(_dependency14.default).getData().spinStatus,
        e = this.getGameViewName();
      if (!_dependency19.default.isReplay) if (!App.uiManager.IsOnlyGameViewOpen(e)) return;
      if (t !== _dependency21.ESpinStatus.SPINING) return;
      [_dependency33.default.state.FG_SPIN_TO_STOP_STATE.id, _dependency33.default.state.MG_SPIN_TO_STOP_STATE.id].includes(_dependency33.default.getMachine().currentStateId) && _dependency28.default.isCanStop && (dispatch(_dependency30.GameEvent.STOP_SPIN), _dependency28.default.isCanStop = !1);
    }
  }, u.replayQuickStop = function () {
    if (_dependency33.default.getMachine().currentStateId == _dependency33.default.state.MG_SHOW_WIN_LINE_STATE.id || _dependency33.default.getMachine().currentStateId == _dependency33.default.state.FG_SHOW_WIN_LINE_STATE.id) this.isCanSkipWinLine && dispatch(_dependency30.GameEvent.SKIP_WIN_LINE);else {
      var t = App.dataCenter.get(_dependency14.default).getData().spinStatus;
      this.getGameViewName();
      if (t !== _dependency21.ESpinStatus.SPINING) return;
      [_dependency33.default.state.FG_SPIN_TO_STOP_STATE.id, _dependency33.default.state.MG_SPIN_TO_STOP_STATE.id].includes(_dependency33.default.getMachine().currentStateId) && _dependency28.default.isCanStop && (dispatch(_dependency30.GameEvent.STOP_SPIN), _dependency28.default.isCanStop = !1);
    }
  }, u.mutipleMusicVolume = function (t) {
    App.globalAudio.musicVolume = App.globalAudio.musicVolume * t;
  }, u.initCompleted = function () {
    var t = this.data.getData().isResuming,
      e = "spin" == this.data.getData().parser.currentGameState.action,
      n = e ? _dependency28.EBGM.MAINGAME : _dependency28.EBGM.FREEGAME;
    t ? (this.playBGM(n), dispatch(_dependency30.GameEvent.CHANGE_GAME_STYLE, {
      data: e
    })) : (this.playBGM(_dependency28.EBGM.MAINGAME), dispatch(_dependency30.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    }));
  }, u.checkBalance = function () {
    var t = {
        ratioIndex: _dependency15.default.ratioIndex,
        ratioValue: _dependency15.default.ratioValue,
        stakeIndex: _dependency15.default.stakeIndex,
        stakeValue: _dependency15.default.stakeValue
      },
      e = t.stakeValue,
      n = t.ratioValue,
      i = _dependency17.default.getData().winlineDefs.length,
      a = _dependency24.default.multiply(n, e, i);
    return _dependency18.default.getData().player.balance.amount - a >= 0;
  }, u.showTest = function () {
    this.leftContent.active = !this.leftContent.active;
  }, u.setVersion = function (t) {
    this.version.string = t, this.os.node.active = !1;
  }, u.startExtensionSchedule = function () {
    this.extensionSchedule ? this.unschedule(this.extensionSchedule) : this.extensionSchedule = function () {
      dispatch(_dependency16.SlotFrameworkEvent.SEND_EXTENSION_REQUEST);
    }, this.scheduleOnce(this.extensionSchedule, 420);
  }, u.killExtensionSchedule = function () {
    this.extensionSchedule && (this.unschedule(this.extensionSchedule), this.extensionSchedule = null);
  }, u.playCircleAnim = function () {
    var t = App.cache.get(this.data.module, _dependency28.default.getData().filePaths.circleAnimPrefab).data,
      e = _dependency2.instantiate(t);
    this.frontAnimContent.addChild(e);
  }, u.playSymbolTransHaloAnim = function () {
    var t = App.cache.get(this.data.module, _dependency28.default.getData().filePaths.symbolTransHaloAnimPrefab).data,
      e = _dependency2.instantiate(t);
    this.frontAnimContent.addChild(e);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency29.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency14.default);
    }
  }]), e;
}(_dependency7.default)).logicType = _dependency31.GameLogic, Tt = _dependency.applyDecoratedDescriptor((Et = Mt).prototype, "content", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(Et.prototype, "gameLayer", [ut], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(Et.prototype, "uiLayer", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), It = _dependency.applyDecoratedDescriptor(Et.prototype, "leftContent", [ct], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Nt = _dependency.applyDecoratedDescriptor(Et.prototype, "ReelView", [pt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(Et.prototype, "SymbolView", [dt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Pt = _dependency.applyDecoratedDescriptor(Et.prototype, "buyFeatureBtn", [ft], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(Et.prototype, "frontAnimContent", [ht], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(Et.prototype, "version", [St], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Lt = _dependency.applyDecoratedDescriptor(Et.prototype, "os", [_t], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = Et)) || At));
_dependency2.cclegacy._RF.pop();
