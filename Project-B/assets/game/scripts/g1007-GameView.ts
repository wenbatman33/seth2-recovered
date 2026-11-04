// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-Config";
import * as __dependency_3 from "../../shared/scripts/main-UrlUtils";
import * as __dependency_4 from "../../shared/scripts/main-Bundles";
import * as __dependency_5 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_6 from "../../shared/scripts/main-AdapterEvent";
import * as __dependency_7 from "../../shared/scripts/main-GameViewBase";
import * as __dependency_8 from "../../shared/scripts/main-Decorators";
import * as __dependency_9 from "../../shared/scripts/main-WrapperData";
import * as __dependency_10 from "../../shared/scripts/framework-PrizeNotify";
import * as __dependency_11 from "../../shared/scripts/framework-InfoBarController";
import * as __dependency_12 from "../../shared/scripts/framework-InfoBarPController";
import * as __dependency_13 from "../../shared/scripts/framework-MenuController";
import * as __dependency_14 from "../../shared/scripts/framework-SpinBarControllerLandScape";
import * as __dependency_15 from "../../shared/scripts/framework-SpinBarPController";
import * as __dependency_16 from "../../shared/scripts/framework-SlotFrameworkData";
import * as __dependency_17 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_18 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_19 from "../../shared/scripts/framework-PlatformModel";
import * as __dependency_20 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_21 from "../../shared/scripts/framework-SettingsModel";
import * as __dependency_22 from "../../shared/scripts/framework-type2";
import * as __dependency_23 from "../../shared/scripts/framework-CmmSlotUtils";
import * as __dependency_24 from "../../shared/scripts/framework-LoadUtils";
import * as __dependency_25 from "../../shared/scripts/framework-SlotTableViewL_v2";
import * as __dependency_26 from "../../shared/scripts/framework-SlotTableViewP";
import * as __dependency_27 from "./g1007-NoBodyView";
import * as __dependency_28 from "./g1007-ReplayUIViewL";
import * as __dependency_29 from "./g1007-GameConfigModel";
import * as __dependency_30 from "./g1007-GameData";
import * as __dependency_31 from "./g1007-GameEvent";
import * as __dependency_32 from "./g1007-GameLogic";
import * as __dependency_33 from "./g1007-GameSender";
import * as __dependency_34 from "./g1007-StateMachineManager";
import * as __dependency_35 from "./g1007-types";
import * as __dependency_36 from "../../shared/scripts/framework-LogUtils";
import * as __dependency_37 from "../../shared/scripts/framework-AutoPlayModel";
import * as __dependency_38 from "../../shared/scripts/main-ResourceLoader";
import * as __dependency_39 from "./g1007-TreasuresView";
import * as __dependency_40 from "./g1007-SixPointStarView";
import * as __dependency_41 from "./g1007-BigPrizeSignalView";
import * as __dependency_42 from "./g1007-FreeGameAlertView";
import * as __dependency_43 from "./g1007-FeatureView";
import * as __dependency_44 from "./g1007-JackpotGameView";
import * as __dependency_45 from "./g1007-BigWinView";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, a, i, o, r, s, u, l, c, p, d, f, h, S, T, g, A, E, _, m, y, I, b, P, w, L, D, v, U, C, M, B, R, N, V, k, O, G, F, H, Y, x, W, z, K, q, Q, J, j, Z, X, $, tt, et, nt, at, it, ot, rt, st, ut, lt, ct, pt, dt, ft, ht, St, Tt, gt, At;
var Et, _t, mt, yt, It, bt, Pt, wt, Lt, Dt, vt, Ut, Ct, Mt, Bt, Rt, Nt, Vt;
__dependency_1.cclegacy._RF.push({}, "b643aI8rLJGoZ1qntHU2sj8", "GameView", void 0);
var kt = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("default", (Et = kt("Hades_GameView"), _t = __dependency_8.inject("content/gameLayer", __dependency_1.Node), mt = __dependency_8.inject("content/uiLayer", __dependency_1.Node), yt = __dependency_8.inject("content/gameLayer/ReelView", __dependency_1.Node), It = __dependency_8.inject("content/gameLayer/JpBarView", __dependency_1.Node), bt = __dependency_8.inject("content/uiLayer/version", __dependency_1.Label), Pt = __dependency_8.inject("content/uiLayer/leftContent", __dependency_1.Node), wt = __dependency_8.inject("content/gameLayer/BuyFeatureView/content", __dependency_1.Node), Et(((Vt = function (t) {
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "gameLayer", vt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "uiLayer", Ut, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "ReelView", Ct, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "JpBarView", Mt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "version", Bt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "leftContent", Rt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "buyFeatureViewContent", Nt, __dependency_0.assertThisInitialized(e)), e.slotUIMap = new Map(), e.slotUIConfigs = [], e.resumeDispatched = !1, e.isSpeedUp = !1, e.speedUpTimeout = null, e.waitBuyFeatureRes = !1, e.isOpenMenu = !1, e.loader = null, e;
  }
  __dependency_0.inheritsLoose(e, t);
  var u = e.prototype;
  return u.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, u.start = function () {
    var t = this;
    this.on(__dependency_31.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.delayLoadAsset();
    }), this.on(__dependency_31.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.delayLoadAsset();
    }), this.loader = new __dependency_38.default(), this.beforeInit();
  }, u.onDestroy = function () {
    this.removeEvents();
  }, u.delayLoadAsset = function () {
    var t = this,
      e = __dependency_29.default.getData().filePaths,
      n = e.transitionsSkeletonData,
      a = e.jpSummarySkeletonData,
      i = e.backgroundSkeletonData,
      o = e.btm;
    this.loader.getLoadResources = function () {
      return [{
        dir: o,
        bundle: t.bundle,
        type: __dependency_1.AudioClip
      }, {
        dir: i,
        bundle: t.bundle,
        type: __dependency_1.sp.SkeletonData
      }, {
        dir: a,
        bundle: t.bundle,
        type: __dependency_1.sp.SkeletonData
      }, {
        dir: n,
        bundle: t.bundle,
        type: __dependency_1.sp.SkeletonData
      }, {
        preloadView: __dependency_39.TreasuresView,
        bundle: t.bundle
      }, {
        preloadView: __dependency_40.SixPointStarView,
        bundle: t.bundle
      }, {
        preloadView: __dependency_41.BigPrizeSignalView,
        bundle: t.bundle
      }, {
        preloadView: __dependency_42.FreeGameAlertView,
        bundle: t.bundle
      }, {
        preloadView: __dependency_43.FeatureView,
        bundle: t.bundle
      }, {
        preloadView: __dependency_44.JackpotGameView,
        bundle: t.bundle
      }, {
        preloadView: __dependency_45.BigWinView,
        bundle: t.bundle
      }];
    }, this.loader.loadResources();
  }, e.getPrefabUrl = function () {
    return "prefabs/GameView";
  }, u.reset = function () {
    t.prototype.reset.call(this);
  }, u.beforeInit = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (Log.d("%c beforeInit", __dependency_36.getKeyStyle(__dependency_36.KeyStyle.Notify)), e = this.args) {
              t.next = 4;
              break;
            }
            return t.abrupt("return");
          case 4:
            if (e !== __dependency_32.EInitName.INIT_GAME) {
              t.next = 15;
              break;
            }
            __dependency_20.default.isReplay = !1, __dependency_34.default.setCurrentState(__dependency_34.EStateMachineName.GAME_STATE), __dependency_29.default.setIsTurbo(__dependency_19.default.getData().player.settings.advancedSettings.turbo), this.init(), this.initUIData(), dispatch(__dependency_31.GameEvent.INIT_JP_BAR), dispatch(__dependency_31.GameEvent.INIT_MULTIPLE), dispatch(__dependency_31.GameEvent.INIT_SYMBOLS), t.next = 22;
            break;
          case 15:
            if (e !== __dependency_32.EInitName.INIT_REPLAY) {
              t.next = 22;
              break;
            }
            return __dependency_20.default.isReplay = !0, __dependency_34.default.setCurrentState(__dependency_34.EStateMachineName.REPLAY_STATE), t.next = 20, __dependency_34.default.getMachine().forceToAsync(__dependency_34.default.state.MG_INIT_STATE.id);
          case 20:
            dispatch(__dependency_31.GameEvent.PARSER_REPLAY_COMPLETED), this.initReplay();
          case 22:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), u.init = function () {
    this.initAudio(), this.setUI(), this.setEventTouch(), this.gameLayer.on(__dependency_1.NodeEventType.TOUCH_END, this.onTouchGameLayer, this);
  }, u.initReplay = function () {
    __dependency_20.default.replayMode === __dependency_20.EReplayMode.RANKING_REPLAY && dispatch(__dependency_18.SlotFrameworkEvent.HIDE_SPIN_BAR), this.initAudio(), this.initUIData(), this.setReplayUI(), this.setVersion("v" + this.data.GAME_VERSION), __dependency_29.default.setIsTurbo(!1), this.gameLayer.on(__dependency_1.NodeEventType.TOUCH_END, this.onTouchGameLayer, this);
  }, u.onTouchGameLayer = function () {
    dispatch(__dependency_18.SlotFrameworkEvent.SPEED_UP), this.quickStop(), dispatch(__dependency_31.GameEvent.CLOSE_XTRA_BET_DETAIL);
  }, u.initUIData = function () {
    dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      data: {
        balance: __dependency_19.default.amount
      }
    }), dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_STAKE), dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: ""
      }
    }), dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE);
  }, u.setReplayUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      a = t.spinBarPPrefab,
      i = t.spinBarPrefab,
      o = t.menuLPrefab,
      r = t.menuPPrefab;
    this.slotUIConfigs = [{
      path: __dependency_23.CmmSlotUtils.getOrientationTarget(n, e),
      component: __dependency_23.CmmSlotUtils.getOrientationTarget(__dependency_11.default, __dependency_12.default)
    }, {
      path: __dependency_23.CmmSlotUtils.getOrientationTarget(i, a),
      component: __dependency_23.CmmSlotUtils.getOrientationTarget(__dependency_14.default, __dependency_15.default)
    }, {
      path: __dependency_23.CmmSlotUtils.getOrientationTarget(o, r),
      component: __dependency_23.CmmSlotUtils.getOrientationTarget(__dependency_13.default, __dependency_13.default)
    }, {
      path: "prefabs/component/PrizeNotify",
      component: __dependency_10.PrizeNotify
    }], this.addSlotUI(this.slotUIConfigs), App.uiManager.open({
      type: __dependency_28.default,
      bundle: __dependency_4.EBundles[__dependency_4.EBundles.slotFramework],
      zIndex: __dependency_2.ViewZOrder.ReplayUI,
      name: "replay UI層"
    });
  }, u.setUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      a = t.spinBarPPrefab,
      i = t.spinBarPrefab,
      o = t.menuLPrefab,
      r = t.menuPPrefab;
    this.slotUIConfigs = [{
      path: __dependency_23.CmmSlotUtils.getOrientationTarget(n, e),
      component: __dependency_23.CmmSlotUtils.getOrientationTarget(__dependency_11.default, __dependency_12.default)
    }, {
      path: __dependency_23.CmmSlotUtils.getOrientationTarget(i, a),
      component: __dependency_23.CmmSlotUtils.getOrientationTarget(__dependency_14.default, __dependency_15.default)
    }, {
      path: __dependency_23.CmmSlotUtils.getOrientationTarget(o, r),
      component: __dependency_23.CmmSlotUtils.getOrientationTarget(__dependency_13.default, __dependency_13.default)
    }, {
      path: "prefabs/component/PrizeNotify",
      component: __dependency_10.PrizeNotify
    }], this.addSlotUI(this.slotUIConfigs), this.setSlotUIData(), this.setVersion("v" + this.data.GAME_VERSION);
  }, u.addSlotUI = function (t) {
    var e = this;
    t.forEach(function (t) {
      var n = t.path,
        a = t.component,
        i = App.cache.get(__dependency_4.EBundles[__dependency_4.EBundles.slotFramework], n).data,
        o = __dependency_1.instantiate(i);
      e.slotUIMap.set(o.name, o), o.addComponent(a), e.uiLayer.addChild(o);
    });
    var n = this.uiLayer.getComponentInChildren(__dependency_10.PrizeNotify);
    if (n) {
      var a = n.node.getChildByName("content").getComponent(__dependency_1.Widget);
      a.isAlignTop = !0, a.left = 25, a.top = 58.5;
    }
    n.node.setParent(this.gameLayer), n.node.setSiblingIndex(this.gameLayer.children.length - 2);
  }, u.setSlotUIData = function () {
    var t = this;
    if (App.dataCenter.get(__dependency_9.default).orientation === __dependency_6.EOrientationType.LANDSCAPE) {
      var e = __dependency_29.default.getData().filePaths,
        n = e.common,
        a = e.font,
        i = e.localeSpriteFrame,
        o = e.spinSkeleton,
        r = App.cache.get(__dependency_4.EBundles[__dependency_4.EBundles.g1007], o).data[0],
        s = {
          normal: __dependency_24.LoadUtils.getDirSp(this.bundle, n, "btn_spin_icon_normal"),
          pressed: __dependency_24.LoadUtils.getDirSp(this.bundle, n, "btn_spin_icon_pressed"),
          hover: __dependency_24.LoadUtils.getDirSp(this.bundle, n, "btn_spin_icon_hover"),
          disabled: __dependency_24.LoadUtils.getDirSp(this.bundle, n, "btn_spin_icon_disabled")
        },
        u = {
          font: __dependency_24.LoadUtils.getDirSp(this.bundle, a, "countup_02"),
          fontSize: 24,
          fontPos: new __dependency_1.Vec3(0, 0, 0)
        },
        l = this.uiLayer.getComponentInChildren(__dependency_14.default),
        c = this.uiLayer.getComponentInChildren(__dependency_13.default),
        p = {
          bundle: this.bundle,
          background: n,
          rules: i
        };
      l.addSpinEventTouch(this.name, function () {
        t.spin();
      }), __dependency_20.default.isReplay ? l.addQuickStopBtnEvent(function () {
        t.replayQuickStop();
      }) : l.addSpeedUpTouchFunction(), l.initTurbo(__dependency_29.default.isTurbo), l.addTurboEventTouch(__dependency_29.default), l.stopRotate(), l.setSpinBtnData(r, null, s, u), c.setRuleAssets(p);
    }
  }, u.setEventTouch = function () {
    var t = this;
    this.onI(__dependency_1.Input.EventType.KEY_UP, function (e) {
      switch (e.keyCode) {
        case __dependency_1.KeyCode.SPACE:
          t.unscheduleAllCallbacks(), __dependency_29.default.isHoldSpaceDown = !1;
      }
    }), this.onI(__dependency_1.Input.EventType.KEY_DOWN, function (e) {
      switch (e.keyCode) {
        case __dependency_1.KeyCode.SPACE:
          if (dispatch(__dependency_18.SlotFrameworkEvent.SPEED_UP), __dependency_29.default.isHoldSpaceDown) return;
          __dependency_29.default.isHoldSpaceDown = !0, __dependency_29.default.canQuickStop && t.quickStop(), App.dataCenter.get(__dependency_30.default).currentGameType !== __dependency_35.EGameType.MAIN_GAME || t.isOpenMenu || t.schedule(function () {
            t.spin();
          }, .1);
      }
    });
  }, u.shakeView = function (t, e) {
    void 0 === e && (e = 3);
    var n = t.getPosition(),
      a = .03,
      i = .8;
    __dependency_1.tween(this.gameLayer).bindNodeState(false).repeat(e, __dependency_1.tween().bindNodeState(false).to(a, {
      position: new __dependency_1.Vec3(-7 * i, -6.4 + n.y)
    }).to(a, {
      position: new __dependency_1.Vec3(6.4, -7.2 + n.y)
    }).to(a, {
      position: new __dependency_1.Vec3(4, -7 * i + n.y)
    }).to(a, {
      position: new __dependency_1.Vec3(6 * i, 6 * i + n.y)
    }).to(a, {
      position: n
    })).start();
  }, u.shakeGameLayer = function (t) {
    var e = void 0 === t ? {} : t,
      n = e.range,
      a = void 0 === n ? .8 : n,
      i = e.duration,
      o = void 0 === i ? .03 : i,
      r = e.repeatCount,
      s = void 0 === r ? 1 : r,
      u = this.gameLayer.getPosition();
    __dependency_1.tween(this.gameLayer).bindNodeState(false).repeat(s, __dependency_1.tween().bindNodeState(false).to(o, {
      position: new __dependency_1.Vec3(-7 * a, -8 * a + u.y)
    }).to(o, {
      position: new __dependency_1.Vec3(8 * a, -9 * a + u.y)
    }).to(o, {
      position: new __dependency_1.Vec3(5 * a, -7 * a + u.y)
    }).to(o, {
      position: new __dependency_1.Vec3(6 * a, 6 * a + u.y)
    }).to(o, {
      position: u
    })).start();
  }, u.playShakeAnim = function (t) {
    var e = this,
      n = this.node.getComponent(__dependency_1.Animation);
    this.node.getComponent(__dependency_1.Animation).play("shock_t0" + t), n.on(__dependency_1.Animation.EventType.LASTFRAME, function () {
      e.node.getComponent(__dependency_1.Animation).stop();
    }, this);
  }, u.playBGM = function (t, e, n) {
    void 0 === e && (e = !0), void 0 === n && (n = 0), this.audioHelper.playMusic(t, this.bundle, e, n);
  }, u.playBTM = function (t, e, n) {
    void 0 === e && (e = !1), void 0 === n && (n = 0), this.audioHelper.playEffect(t, this.bundle, e, n);
  }, u.playRepeatBTM = function (t, e, n) {
    void 0 === e && (e = !1), void 0 === n && (n = 0), this.audioHelper.playRepeatEffect(t, this.bundle, e, n);
  }, u.stopBTM = function (t) {
    this.audioHelper.stopEffect(t, this.bundle);
  }, u.initAudio = function () {
    var t, e;
    if (__dependency_3.default.hasParam("spinId")) return App.globalAudio.musicVolume = 0, void (App.globalAudio.effectVolume = 0);
    App.globalAudio.musicVolume = null != (t = __dependency_21.default.backgroundVolume) ? t : 1, App.globalAudio.effectVolume = null != (e = __dependency_21.default.effectVolume) ? e : 1, dispatch(__dependency_31.GameEvent.PLAY_BGM, {
      data: __dependency_29.EBGM.MAIN_GAME
    });
  }, u.addEvents = function () {
    var t = this;
    this.on(__dependency_31.GameEvent.CHANGE_GAME_STYLE, function (t) {
      __dependency_20.default.isReplay || (t.data ? dispatch(__dependency_18.SlotFrameworkEvent.SHOW_SPIN_BAR) : dispatch(__dependency_18.SlotFrameworkEvent.HIDE_SPIN_BAR));
    }), this.on(__dependency_31.GameEvent.SHAKE_BOARD_VIEW, function () {
      t.shakeView(t.ReelView), t.shakeView(t.JpBarView);
    }), this.on(__dependency_31.GameEvent.SHAKE_GAME_LAYER, function (e) {
      t.shakeGameLayer(null == e ? void 0 : e.data);
    }), this.on(__dependency_31.GameEvent.SHAKE_GAME_ANIM, function (e) {
      var n = e.data.index;
      t.playShakeAnim(n);
    }), this.on(__dependency_31.GameEvent.PLAY_BGM, function (e) {
      t.playBGM(e.data);
    }), this.on(__dependency_31.GameEvent.PLAY_BTM, function (e) {
      var n = e.data,
        a = n.url,
        i = n.loop,
        o = n.currentTime;
      t.playBTM(a, i, o);
    }), this.on(__dependency_31.GameEvent.PLAY_REPEAT_BTM, function (e) {
      var n = e.data,
        a = n.url,
        i = n.loop,
        o = n.currentTime;
      t.playRepeatBTM(a, i, o);
    }), this.on(__dependency_31.GameEvent.STOP_BTM, function (e) {
      t.stopBTM(e.data);
    }), this.on(__dependency_31.GameEvent.MUSIC_VOLUME_MULTIPLE, function (e) {
      t.multipleMusicVolume(e.data);
    }), this.on(__dependency_18.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, function (e) {
      t.buyFeatureSpin(e.data);
    }), this.on(__dependency_31.GameEvent.SEND_AUTO_SPIN_REQUEST, function () {
      t.sendAutoSpinReq();
    }), this.on(__dependency_18.SlotFrameworkEvent.PLAY_CLICK_BTM, function () {
      t.playBTM(__dependency_29.EBTM.UI_CLICK);
    }), this.on(__dependency_18.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM, function () {
      t.playBTM(__dependency_29.EBTM.UI_CLOSE_CLICK);
    }), this.on(__dependency_18.SlotFrameworkEvent.VIEW_SHOW_MENU, function () {
      t.isOpenMenu = !0;
    }), this.on(__dependency_18.SlotFrameworkEvent.VIEW_HIDE_MENU, function () {
      t.isOpenMenu = !1;
    }), this.on(__dependency_31.GameEvent.CLOSE_CURRENT_FEATURE_BTN, function () {
      var e = t.uiLayer.getComponentInChildren(__dependency_14.default).spinButton;
      __dependency_1.Tween.stopAllByTarget(e), e.setScale(new __dependency_1.Vec3(1, 1, 1));
    }), this.on(__dependency_18.SlotFrameworkEvent.SET_SPIN_BTN_BY_SELECT_FEATURE, function (e) {
      var n = t.uiLayer.getComponentInChildren(__dependency_14.default).spinButton;
      e ? __dependency_1.tween(n).bindNodeState(false).repeatForever(__dependency_1.tween().bindNodeState(false).to(.6, {
        scale: new __dependency_1.Vec3(1.1, 1.1, 1)
      }).to(.6, {
        scale: new __dependency_1.Vec3(1, 1, 1)
      })).start() : (__dependency_1.Tween.stopAllByTarget(n), n.setScale(new __dependency_1.Vec3(1, 1, 1)));
    }), this.on(__dependency_18.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      if (__dependency_22.ESpinStatus.SPINING === e.data) {
        var n = t.uiLayer.getComponentInChildren(__dependency_14.default).spinButton;
        __dependency_1.Tween.stopAllByTarget(n), n.setScale(new __dependency_1.Vec3(1, 1, 1));
      }
    });
  }, u.removeEvents = function () {
    this.off(__dependency_31.GameEvent.CHANGE_GAME_STYLE), this.off(__dependency_31.GameEvent.SHAKE_BOARD_VIEW), this.off(__dependency_31.GameEvent.PLAY_BGM), this.off(__dependency_31.GameEvent.PLAY_BTM), this.off(__dependency_31.GameEvent.PLAY_REPEAT_BTM), this.off(__dependency_31.GameEvent.STOP_BTM), this.off(__dependency_31.GameEvent.MUSIC_VOLUME_MULTIPLE), this.off(__dependency_18.SlotFrameworkEvent.BUY_FEATURE_RESPONSE), this.off(__dependency_18.SlotFrameworkEvent.VIEW_SHOW_MENU), this.off(__dependency_18.SlotFrameworkEvent.VIEW_HIDE_MENU);
  }, u.buyFeatureSpin = function (t) {
    dispatch(__dependency_31.GameEvent.CLOSE_BUY_FEATURE_VIEW), dispatch(__dependency_31.GameEvent.START_SPIN, {
      data: {
        spinId: t
      }
    }), dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), this.checkHoldSpaceDownToQuickStop(), this.playBTM(__dependency_29.EBTM.SPIN), this.waitBuyFeatureRes = !1;
  }, u.checkHoldSpaceDownToQuickStop = function () {
    var t = this,
      e = __dependency_29.default.getData().quickStopDelay;
    __dependency_29.default.isHoldSpaceDown && this.scheduleOnce(function () {
      __dependency_29.default.canQuickStop && t.quickStop();
    }, e);
  }, u.spin = function () {
    var t = __dependency_5.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0];
    if (this.gameLayer.setPosition(new __dependency_1.Vec3(0, 0, 0)), App.uiManager.IsOnlyGameViewOpen(t) && __dependency_34.default.getMachine().currentStateId === __dependency_34.default.state.MG_WAIT_SPIN_STATE.id && (!this.buyFeatureViewContent.active || this.data.featureData)) {
      if (!this.data.featureData) {
        var e = __dependency_19.default.getData().player.balance.amount;
        if (0 === e || !this.checkSpinBalance()) {
          var n = 0 === e ? "insufficientFundError" : "insufficientFund";
          return __dependency_29.default.isHoldSpaceDown = !1, __dependency_29.default.isPushSpin = !1, void App.gameAlert.show({
            text: App.getLanguage(n, [], __dependency_4.EBundles[__dependency_4.EBundles.wrapper]),
            confirmCb: function () {},
            bbrCb: function () {}
          });
        }
        return dispatch(__dependency_31.GameEvent.START_SPIN, {
          data: {
            spinId: null
          }
        }), void this.checkHoldSpaceDownToQuickStop();
      }
      this.waitBuyFeatureRes || (dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
        data: __dependency_22.ESpinStatus.SPINING
      }), this.sendFeatureReq());
    }
  }, u.sendFeatureReq = function () {
    var t = __dependency_17.default.ratioIndex,
      e = __dependency_17.default.stakeIndex,
      n = __dependency_17.default.ratioValue,
      a = __dependency_17.default.stakeValue,
      i = this.data.featureData,
      o = i.feature,
      r = i.featureIndex,
      s = __dependency_19.default.getData().player.balance.amount,
      u = {
        ratioIndex: t,
        ratioValue: n,
        stakeIndex: e,
        stakeValue: a,
        featureIndex: r,
        featureValue: o
      };
    if (0 === s || !this.checkBalanceByFeature()) {
      var l = 0 === s ? "insufficientFundError" : "insufficientFund";
      __dependency_29.default.isHoldSpaceDown = !1, __dependency_29.default.isPushSpin = !1;
      var c = function () {
        dispatch(__dependency_18.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
          data: !0
        }), __dependency_34.default.getMachine().currentStateId == __dependency_34.default.state.MG_WAIT_SPIN_STATE.id && dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
          data: __dependency_22.ESpinStatus.IDLE
        });
      };
      return App.gameAlert.show({
        text: App.getLanguage(l, [], __dependency_4.EBundles[__dependency_4.EBundles.wrapper]),
        confirmCb: c,
        bbrCb: c
      }), void (__dependency_37.default.active && dispatch(__dependency_18.SlotFrameworkEvent.STOP_AUTO_SPIN));
    }
    __dependency_29.default.isPushSpin = !0, this.withholdingAmountByFeature(), App.senderManager.get(__dependency_33.GameSender).buyFeature(u), this.waitBuyFeatureRes = !0;
  }, u.checkBalanceByFeature = function () {
    var t = __dependency_17.default.getData().totalStake * this.data.featureData.featureRate;
    return __dependency_19.default.getData().player.balance.amount - t >= 0;
  }, u.checkSpinBalance = function () {
    var t = __dependency_17.default.getData().totalStake;
    return __dependency_19.default.getData().player.balance.amount - t >= 0;
  }, u.withholdingAmountByFeature = function () {
    var t = __dependency_17.default.getData().totalStake * this.data.featureData.featureRate;
    __dependency_19.default.getData().player.balance.amount -= t;
  }, u.sendAutoSpinReq = function () {
    if (this.data.featureData) this.sendFeatureReq();else {
      var t = __dependency_19.default.getData().player.balance.amount;
      if (0 === t || !this.checkSpinBalance()) {
        var e = 0 === t ? "insufficientFundError" : "insufficientFund",
          n = function () {
            dispatch(__dependency_18.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
              data: !0
            }), __dependency_34.default.getMachine().currentStateId == __dependency_34.default.state.MG_WAIT_SPIN_STATE.id && dispatch(__dependency_18.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
              data: __dependency_22.ESpinStatus.IDLE
            });
          },
          a = {
            text: App.getLanguage(e, [], __dependency_4.EBundles[__dependency_4.EBundles.wrapper]),
            confirmCb: n,
            bbrCb: n
          };
        return App.gameAlert.show(a), void dispatch(__dependency_18.SlotFrameworkEvent.STOP_AUTO_SPIN);
      }
      dispatch(__dependency_31.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      });
    }
  }, u.quickStop = function () {
    this.slotData.getData().spinStatus;
    var t = __dependency_5.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0];
    if (!__dependency_20.default.isReplay && !App.uiManager.IsOnlyGameViewOpen(t)) return;
    __dependency_22.ESpinStatus.SPINING;
  }, u.speedUpTheGame = function () {
    var t = this,
      e = __dependency_29.default.getData().turboSpeedUp;
    this.isSpeedUp || (__dependency_5.CmmUtils.setDirectorTick(e), this.isSpeedUp = !0), clearTimeout(this.speedUpTimeout), this.speedUpTimeout = setTimeout(function () {
      t.isSpeedUp = !1, __dependency_5.CmmUtils.setDirectorTick(1);
    }, 1500);
  }, u.multipleMusicVolume = function (t) {
    App.globalAudio.musicVolume = App.globalAudio.musicVolume * t;
  }, u.setVersion = function (t) {
    this.version.string = t;
  }, u.showResumeAlert = function () {
    var t = this,
      e = {
        text: App.getLanguage("wrapper1", [], __dependency_4.EBundles[__dependency_4.EBundles.wrapper]),
        bbrColor: new __dependency_1.Color(0, 0, 0, 255),
        confirmCb: function (e) {
          t.resumeDispatched || (t.resumeDispatched = !0, dispatch(__dependency_31.GameEvent.START_RESUME));
        }
      };
    App.gameAlert.show(e), App.uiManager.close(__dependency_23.CmmSlotUtils.getOrientationTarget(__dependency_25.default, __dependency_26.default));
  }, u.replayQuickStop = function () {
    this.slotData.getData().spinStatus === __dependency_22.ESpinStatus.SPINING && dispatch(__dependency_31.GameEvent.START_QUICK_STOP);
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_30.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_16.default);
    }
  }]), e;
}(__dependency_7.default)).logicType = __dependency_32.GameLogic, vt = __dependency_0.applyDecoratedDescriptor((Dt = Vt).prototype, "gameLayer", [_t], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ut = __dependency_0.applyDecoratedDescriptor(Dt.prototype, "uiLayer", [mt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = __dependency_0.applyDecoratedDescriptor(Dt.prototype, "ReelView", [yt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Mt = __dependency_0.applyDecoratedDescriptor(Dt.prototype, "JpBarView", [It], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Bt = __dependency_0.applyDecoratedDescriptor(Dt.prototype, "version", [bt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Rt = __dependency_0.applyDecoratedDescriptor(Dt.prototype, "leftContent", [Pt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Nt = __dependency_0.applyDecoratedDescriptor(Dt.prototype, "buyFeatureViewContent", [wt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Lt = Dt)) || Lt));
__dependency_1.cclegacy._RF.pop();
