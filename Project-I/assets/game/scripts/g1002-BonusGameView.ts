// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-DropMaterials";
import * as _dependency6 from "../../shared/scripts/main-Config";
import * as _dependency7 from "./g1002-GameEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency9 from "./g1002-types";
import * as _dependency0 from "./g1002-GameData";
import * as _dependency1 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "./g1002-GameSender";
import * as _dependency11 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency12 from "./g1002-GameConfigModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency14 from "./g1002-BonusSlotMultipleGame";
import * as _dependency15 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency16 from "../../shared/scripts/main-Bundles";
import * as _dependency17 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency18 from "../../shared/scripts/main-CmmUtils";
var _export;
export { _export as BonusGameView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BonusGameView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, a, i, l, o, r, s, u, c, p, d, b, h, f, g, T, m, S, R, _, B, y, w, L, k, E, C, O, A, F, N, v, G, P, M, D;
var x, U, I, z, W, H, V, Y, q, X, Z, j, K, J, Q, $, tt, et, nt, at, it, lt, ot, rt, st, ut, ct, pt, dt, bt, ht, ft, gt, Tt, mt, St, Rt, _t, Bt, yt, wt, Lt, kt, Et, Ct, Ot, At, Ft, Nt, vt, Gt, Pt, Mt, Dt, xt, Ut, It, zt, Wt, Ht, Vt, Yt, qt, Xt, Zt, jt, Kt, Jt, Qt, $t, te, ee, ne, ae, ie;
_dependency2.cclegacy._RF.push({}, "ab67ciuyM5Ev4Xoh8mcmZCZ", "BonusGameView", void 0);
var le,
  oe = _dependency2._decorator.ccclass,
  re = _dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.RUN_SCORE = 1] = "RUN_SCORE", t[t.RUN_SCORE_END = 2] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 3] = "WAIT_CLOSE";
}(le || (le = {}));
_publish("BonusGameView", (x = oe("BonusGameView"), U = _dependency4.inject("ndTitlePopup", _dependency2.Node), I = _dependency4.inject("ndTitlePopup/bonus_transition", _dependency2.sp.Skeleton), z = _dependency4.inject("ndTitlePopup/btnStart", _dependency2.Node), W = _dependency4.inject("ndTitlePopup/btnStart/startLable", _dependency2.Sprite), H = _dependency4.inject("ndStageOneResult", _dependency2.Node), V = _dependency4.inject("ndStageOneResult/btnConfirm", _dependency2.Node), Y = _dependency4.inject("ndStageOneResult/btnConfirm/confirmLabel", _dependency2.Sprite), q = _dependency4.inject("ndStageOneResult/btnCancel", _dependency2.Node), X = _dependency4.inject("ndStageOneResult/btnCancel/cancelLabel", _dependency2.Sprite), Z = _dependency4.inject("ndStageOneResult/ndRate/txtRate", _dependency2.Label), j = _dependency4.inject("ndStageOneResult/ndRate/bg", _dependency2.Node), K = _dependency4.inject("ndStageOneResult/ndRate/win_effect", _dependency2.sp.Skeleton), J = _dependency4.inject("ndStageOneResult/ndFurnace", _dependency2.sp.Skeleton), Q = _dependency4.inject("ndStageOneResult/ndContinue", _dependency2.Sprite), $ = _dependency4.inject("ndStageOneResult/ndFurnaceTransformBG", _dependency2.sp.Skeleton), tt = _dependency4.inject("ndStageOneResult/ndHightRate", _dependency2.sp.Skeleton), et = _dependency4.inject("ndStageOneResult/ndHightRate/ndText", _dependency2.Node), nt = _dependency4.inject("ndStageOneResult/ndHightRate/ndText/txtRate", _dependency2.Label), at = _dependency4.inject("ndStageOneResult/ndHightRate/ndText/rateTitleSprite", _dependency2.Sprite), it = _dependency4.inject("ndStageResult", _dependency2.Node), lt = _dependency4.inject("ndStageResult/mask", _dependency2.Node), ot = _dependency4.inject("ndStageResult/b_font_06", _dependency2.Sprite), rt = _dependency4.inject("ndStageResult/btnBack", _dependency2.Node), st = _dependency4.inject("ndStageResult/btnBack/backLabel", _dependency2.Sprite), ut = _dependency4.inject("ndStageResult/ndTotalWin", _dependency2.Node), ct = _dependency4.inject("ndStageResult/ndTotalWin/txtTotalWin", _dependency2.Label), pt = _dependency4.inject("ndStageResult/txtRate", _dependency2.Label), dt = _dependency4.inject("ndStageResult/light", _dependency2.sp.Skeleton), bt = _dependency4.inject("ndStageResult/ndRateBall", _dependency2.sp.Skeleton), ht = re({
  type: _dependency2.sp.Skeleton
}), ft = _dependency4.inject("ndResultFail", _dependency2.Node), gt = _dependency4.inject("ndResultFail/btnBack", _dependency2.Node), Tt = _dependency4.inject("ndResultFail/ndFailTitle", _dependency2.Node), mt = _dependency4.inject("ndResultFail/ndSmoke", _dependency2.Node), St = _dependency4.inject("ndResultFail/ndPot", _dependency2.Node), Rt = _dependency4.inject("ndResultFail/btnBack/backLabel", _dependency2.Sprite), x((yt = _dependency.applyDecoratedDescriptor((Bt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(l).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "ndTitlePopup", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "titleSpine", wt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnStart", Lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startLable", kt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndStageOneResult", Et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnConfirm", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "confirmLabel", Ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnCancel", At, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "cancelLabel", Ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtTempRate", Nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rateBackground", vt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "win_effect", Gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "skeletonFurnace", Pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndContinue", Mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndFurnaceTransformBG", Dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndHightRate", xt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndText", Ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndHightTxtRate", It, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rateTitleSprite", zt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndStageResult", Wt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndStageResultBbr", Ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "b_font_06", Vt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnBack", Yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "backLabel", qt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndTotalWin", Xt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtTotalWin", Zt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtRate", jt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ballLight", Kt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rateBall", Jt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rateBallList", Qt, _dependency.assertThisInitialized(e)), e.runScoreStatus = le.NONE, e.numTween = null, e.TOTAL_RESULT_TWEEN_TAG = _dependency18.CmmUtils.hashCode("TotalResultTween"), e._winRate = 0, _dependency.initializerDefineProperty(e, "ndResultFail", $t, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnFailBack", te, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndFailTitle", ee, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndSmoke", ne, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndPot", ae, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "resultFailBackLabel", ie, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/bonusGame/BonusGameView";
  };
  var o = e.prototype;
  return o.start = function () {
    this.setData(), this.btnStart.active = !1, this.isShowTitlePopup(!0), this.ndTitlePopup.active = !0, this.ndStageOneResult.active = !1, this.ndStageResult.active = !1, this.ndResultFail.active = !1, this.initStageOneResult(), this.rateBackground.getComponent(_dependency2.UIOpacity).opacity = 0, this.txtRate.node.active = !1, this.ndTotalWin.active = !1, this.btnBack.active = !1, this.ballLight.node.active = !1, this.rateBall.node.active = !1, this.ndFailTitle.active = !1, this.ndSmoke.active = !1, this.ndSmoke.y = 202, this.ndSmoke.getComponent(_dependency2.UIOpacity).opacity = 0, this.ndPot.active = !1, this.ndPot.y = 157, this.ndPot.getComponent(_dependency2.UIOpacity).opacity = 0, this.btnFailBack.active = !1;
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.close = function () {
    dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency12.EBTM.MONEY_SCROLL
    }), this.unscheduleAllCallbacks(), this.ndStageResultBbr.targetOff(this), t.prototype.close.call(this);
  }, o.setData = function () {
    var t = _dependency12.default.getData().filePaths.localeSpriteFrame;
    this.startLable.spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "t_font_01_normal"), this.ndContinue.spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "b_font_02"), this.confirmLabel.spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "b_font_04_normal"), this.cancelLabel.spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "b_font_05_normal"), this.b_font_06.spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "b_font_06"), this.backLabel.spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "t_font_02_normal"), this.rateTitleSprite.spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "b_font_03"), this.ndFailTitle.getComponent(_dependency2.Sprite).spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "b_font_07"), this.resultFailBackLabel.getComponent(_dependency2.Sprite).spriteFrame = _dependency13.LoadUtils.getDirSp(this.bundle, t, "t_font_02_normal");
  }, o.initStageOneResult = function () {
    var t;
    this.win_effect.clearTracks(), this.win_effect.setToSetupPose(), this.win_effect.node.active = !1, this.skeletonFurnace.clearTracks(), this.skeletonFurnace.setToSetupPose(), this.skeletonFurnace.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.ndFurnaceTransformBG.clearTracks(), this.ndFurnaceTransformBG.setToSetupPose(), this.ndFurnaceTransformBG.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.ndHightRate.clearTracks(), this.ndHightRate.setToSetupPose(), this.ndHightRate.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.ndText.active = !1, this.btnConfirm.getComponent(_dependency2.UIOpacity).opacity = 0, this.btnCancel.getComponent(_dependency2.UIOpacity).opacity = 0, this.txtTempRate.node.active = !1;
    var e = this.data.getData().bonusState;
    this.ndHightTxtRate.string = (null != (t = e.biggest) ? t : 0) + "x";
  }, o.isShowTitlePopup = function (t) {
    var e,
      n,
      a = this;
    (void 0 === t && (t = !1), this.ndTitlePopup.active = t, t) ? (dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency12.EBTM.BN_TRANSITION_01,
        loop: !1
      }
    }), this.titleSpine.node.active = !0, this.titleSpine.clearTracks(), this.titleSpine.setToSetupPose(), null == (e = this.titleSpine) || e.setAnimation(0, "in", !1), null == (n = this.titleSpine) || n.setCompleteListener(function () {
      var t, e;
      null == (t = a.titleSpine) || t.setCompleteListener(null), a.btnStart.active = !0, null == (e = a.titleSpine) || e.setAnimation(0, "loop", !0);
    }), _dependency17.default.isReplay && (App.uiManager.open({
      type: _dependency15.default,
      bundle: _dependency16.EBundles[_dependency16.EBundles.slotFramework],
      zIndex: _dependency6.ViewZOrder.NoTouch,
      name: "禁止觸碰"
    }), this.scheduleOnce(function () {
      a.onShowGameStageOne();
    }, 2))) : (this.titleSpine.clearTracks(), this.titleSpine.setToSetupPose(), this.titleSpine.node.active = !1);
  }, o.onShowGameStageOne = function () {
    _dependency17.default.isReplay && (this.data.getData().parser.currentSpinIndex = 2), this.isShowTitlePopup(!1), dispatch(_dependency7.GameEvent.PLAY_BGM, {
      data: _dependency12.EBGM.BGM_BN_01
    });
    var t = this.data.getData().bonusState;
    switch (t.action) {
      case _dependency9.BonusStateAction.PURIFY:
        App.uiManager.open({
          type: _dependency5.DropMaterials,
          bundle: this.bundle,
          zIndex: _dependency6.ViewZOrder.Alert,
          name: "提煉遊戲"
        });
        break;
      case _dependency9.BonusStateAction.GAMBLE:
        t.gambleResults ? dispatch(_dependency7.GameEvent.BONUS_GAMBLE_RESP) : (this.winRate = t.purifyTimes, App.uiManager.open({
          type: _dependency14.BonusSlotMultipleGame,
          bundle: this.bundle,
          zIndex: _dependency6.ViewZOrder.Alert,
          name: "精煉遊戲"
        }));
    }
  }, o.addEvents = function () {
    var t = this;
    this.btnStart.once(_dependency2.NodeEventType.TOUCH_END, this.onShowGameStageOne, this), this.on(_dependency7.GameEvent.BONUS_GAME_COLLECT_END, function (e) {
      var n;
      App.uiManager.close(_dependency5.DropMaterials), App.uiManager.close(_dependency14.BonusSlotMultipleGame);
      var a = t.data.getData().bonusState;
      t.ndHightTxtRate.string = (null != (n = a.biggest) ? n : 0) + "x", Log.d("%c bonusState R ", "color:#ffff00", a), a.isFinish && a.totalWinnings > 0 ? t.showTotalResult() : (t.winRate = e.data, t.openStageOneResult());
    }), this.btnConfirm.on(_dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency12.EBTM.BN_CLICK,
          loop: !1
        }
      }), dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: _dependency12.EBTM.BN_CONTINUE
      }), t.ndStageOneResult.active = !1;
      var e = {
        bonusType: _dependency9.EBonusType.ELIXIR_FURNACE,
        action: _dependency9.BonusStateAction.GAMBLE,
        actionValue: !0,
        ratioIndex: _dependency11.default.ratioIndex,
        ratioValue: _dependency11.default.ratioValue,
        stakeIndex: _dependency11.default.stakeIndex,
        stakeValue: _dependency11.default.stakeValue,
        spinId: t.data.getData().spinId
      };
      App.senderManager.get(_dependency10.GameSender).sendBonusGambleReq(e);
    }, this), this.btnCancel.on(_dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency12.EBTM.BN_CLICK,
          loop: !1
        }
      }), dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: _dependency12.EBTM.BN_CONTINUE
      }), t.sendResultReq();
    }, this), this.on(_dependency7.GameEvent.BONUS_GAMBLE_RESP, function () {
      App.uiManager.isShow(_dependency14.BonusSlotMultipleGame) || (t.data.getData().bonusState.isFinish ? t.showTotalResult() : App.uiManager.open({
        type: _dependency14.BonusSlotMultipleGame,
        bundle: t.bundle,
        zIndex: _dependency6.ViewZOrder.Alert,
        name: "精煉遊戲"
      }));
    }), this.on(_dependency7.GameEvent.BONUS_GAMBLE_RESULT_RESP, function () {
      t.showTotalResult();
    });
  }, o.openStageOneResult = function () {
    var t = this;
    dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency12.EBTM.BN_CONTINUE,
        loop: !1
      }
    }), this.initStageOneResult(), this.ndStageOneResult.active = !0, _dependency2.tween(this.rateBackground.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.6, {
      opacity: 255
    }).start(), this.skeletonFurnace.node.scale = new _dependency2.Vec3(.2, .2, .2), this.skeletonFurnace.clearTracks(), this.skeletonFurnace.setToSetupPose(), this.skeletonFurnace.setAnimation(1, "idle", !0);
    var e = this.skeletonFurnace.node.position.clone();
    this.skeletonFurnace.node.y = 170, _dependency2.tween(this.skeletonFurnace.node).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(.3, {
      y: e.y
    }), _dependency2.tween().bindNodeState(false).to(.3, {
      scale: new _dependency2.Vec3(1, 1, 1)
    })).call(function () {
      t.win_effect.node.active = !0, t.win_effect.clearTracks(), t.win_effect.setToSetupPose(), t.win_effect.setAnimation(1, "function", !1);
    }).start(), _dependency2.tween(this.skeletonFurnace.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.4, {
      opacity: 255
    }).call(function () {
      t.ndFurnaceTransformBG.node.getComponent(_dependency2.UIOpacity).opacity = 255, t.ndFurnaceTransformBG.clearTracks(), t.ndFurnaceTransformBG.setToSetupPose(), t.ndFurnaceTransformBG.setAnimation(1, "in", !1), t.ndFurnaceTransformBG.setCompleteListener(function () {
        t.ndFurnaceTransformBG.setCompleteListener(null), t.ndFurnaceTransformBG.clearTracks(), t.ndFurnaceTransformBG.setToSetupPose(), t.ndFurnaceTransformBG.setAnimation(1, "loop", !0);
      }), t.ndHightRate.node.getComponent(_dependency2.UIOpacity).opacity = 255, t.ndHightRate.clearTracks(), t.ndHightRate.setToSetupPose(), t.ndHightRate.setAnimation(1, "funtion", !1), t.ndHightRate.setCompleteListener(function () {
        t.ndHightRate.setCompleteListener(null), t.ndText.active = !0, _dependency2.tween(t.btnConfirm.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1, {
          opacity: 255
        }).start(), _dependency2.tween(t.btnCancel.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1, {
          opacity: 255
        }).start();
      }), t.txtTempRate.node.active = !0, t.txtTempRate.node.scale = new _dependency2.Vec3(2.6, 2.6, 2.6), _dependency2.tween(t.txtTempRate.node).bindNodeState(false).delay(.1).to(.3, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: "elasticOut"
      }).start();
    }).start();
  }, o.sendResultReq = function () {
    var t = {
      bonusType: _dependency9.EBonusType.ELIXIR_FURNACE,
      action: _dependency9.BonusStateAction.GAMBLE,
      actionValue: !1,
      ratioIndex: _dependency11.default.ratioIndex,
      ratioValue: _dependency11.default.ratioValue,
      stakeIndex: _dependency11.default.stakeIndex,
      stakeValue: _dependency11.default.stakeValue,
      spinId: this.data.getData().spinId
    };
    App.senderManager.get(_dependency10.GameSender).sendBonusGambleReq(t);
  }, o.showTotalResult = function () {
    var t = this;
    App.uiManager.close(_dependency5.DropMaterials), App.uiManager.close(_dependency14.BonusSlotMultipleGame);
    var e = this.data.getData().bonusState,
      n = e.totalWinnings;
    if (n > 0) {
      App.globalAudio.pauseMusic(), dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency12.EBTM.BN_TW,
          loop: !1
        }
      });
      var a = e.gambleTimes;
      this.ndStageOneResult.active = !1, this.ndStageResult.active = !0, this.rateBall.skeletonData = this.getRateBallSpine(a).skeletonData, this.rateBall.node.active = !0, this.rateBall.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.tween(this.rateBall.getComponent(_dependency2.UIOpacity)).bindNodeState(false).tag(this.TOTAL_RESULT_TWEEN_TAG).to(.3, {
        opacity: 255
      }).start(), this.rateBall.clearTracks(), this.rateBall.setToSetupPose(), this.rateBall.setAnimation(0, "animation", !0), this.rateBall.setCompleteListener(function () {
        t.rateBall.setCompleteListener(null), t.txtRate.node.active = !0;
      }), _dependency2.tween(this.node).bindNodeState(false).tag(this.TOTAL_RESULT_TWEEN_TAG).delay(.6).call(function () {
        t.runScoreStatus = le.RUN_SCORE, t.ballLight.node.active = !0, t.ballLight.clearTracks(), t.ballLight.setToSetupPose(), t.ballLight.setAnimation(0, "animation", !0), t.winRate = a;
        var e = t.data.getData().definition.digital,
          i = {
            label: t.txtTotalWin,
            start: 0,
            end: Number(_dependency8.CmmSlotUtils.formatNumber(n, !1, !1, e)),
            tweenTime: 5,
            digital: e,
            useThousandsSeparator: !0,
            tag: t.TOTAL_RESULT_TWEEN_TAG,
            callback: t.directShowResult.bind(t)
          };
        t.numTween = _dependency8.CmmSlotUtils.tweenNum(i), dispatch(_dependency7.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency12.EBTM.MONEY_SCROLL,
            loop: !0
          }
        }), t.ndStageResultBbr.once(_dependency2.NodeEventType.TOUCH_END, t.directShowResult, t), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: n,
            tweenTime: .3
          }
        }), t.ndTotalWin.getComponent(_dependency2.UIOpacity).opacity = 0, t.ndTotalWin.active = !0, _dependency18.CmmUtils.fadeInTween(t.ndTotalWin);
      }).start();
    } else this.ndResultFail.active = !0, dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency12.EBTM.BN_FAILED,
        loop: !1
      }
    }), this.ndFailTitle.active = !0, this.ndFailTitle.scale = new _dependency2.Vec3(2, 2, 2), _dependency2.tween(this.ndFailTitle).bindNodeState(false).tag(this.TOTAL_RESULT_TWEEN_TAG).to(.6, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }).start(), this.ndPot.active = !0, this.ndPot.y = 57, this.ndPot.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.tween(this.ndPot).bindNodeState(false).tag(this.TOTAL_RESULT_TWEEN_TAG).to(.9, {
      y: 157
    }).start(), _dependency2.tween(this.ndPot.getComponent(_dependency2.UIOpacity)).bindNodeState(false).tag(this.TOTAL_RESULT_TWEEN_TAG).to(.9, {
      opacity: 255
    }).start(), this.ndSmoke.active = !0, this.ndSmoke.y = 102, _dependency2.tween(this.ndSmoke).bindNodeState(false).tag(this.TOTAL_RESULT_TWEEN_TAG).to(.9, {
      y: 202
    }).start(), _dependency2.tween(this.ndSmoke.getComponent(_dependency2.UIOpacity)).bindNodeState(false).tag(this.TOTAL_RESULT_TWEEN_TAG).to(.9, {
      opacity: 255
    }).call(function () {
      t.btnFailBack.active = !0, _dependency17.default.isReplay && t.scheduleOnce(function () {
        t.backMainGame();
      }, 1);
    }).start();
    this.btnBack.once(_dependency2.NodeEventType.TOUCH_END, function () {
      t.backMainGame();
    }), this.btnFailBack.once(_dependency2.NodeEventType.TOUCH_END, function () {
      t.backMainGame();
    });
  }, o.directShowResult = function () {
    var t,
      e = this;
    null == (t = this.numTween) || t.stop(), this.runScoreStatus = le.RUN_SCORE_END, _dependency2.Tween.stopAllByTag(this.TOTAL_RESULT_TWEEN_TAG), this.ndStageResultBbr.off(_dependency2.NodeEventType.TOUCH_END, this.directShowResult);
    var n = this.data.getData().bonusState.totalWinnings,
      a = this.data.getData().definition.digital;
    this.txtTotalWin.string = _dependency8.CmmSlotUtils.formatNumber(n, !1, !0, a), this.btnBack.getComponent(_dependency2.UIOpacity).opacity = 0, this.btnBack.active = !0, _dependency18.CmmUtils.fadeInTween(this.btnBack), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency12.EBTM.FU_OUT_DIRECT
      }
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency12.EBTM.MONEY_SCROLL
    }), _dependency17.default.isReplay && this.scheduleOnce(function () {
      e.backMainGame();
    }, .5);
  }, o.getRateBallSpine = function (t) {
    var e = 0;
    return t > 200 && t <= 300 ? e = 1 : t > 300 && t <= 500 ? e = 2 : t > 500 && t <= 700 ? e = 3 : t > 700 && (e = 4), this.rateBallList[e];
  }, o.backMainGame = function () {
    dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency12.EBTM.BN_END,
        loop: !1
      }
    }), dispatch(_dependency7.GameEvent.PLAY_BGM, {
      data: _dependency12.EBGM.MAINGAME
    }), App.uiManager.close(e), dispatch(_dependency7.GameEvent.BONUS_ELIXIR_FURNACE_END);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }, {
    key: "winRate",
    get: function () {
      return this._winRate;
    },
    set: function (t) {
      this._winRate = t, this.txtRate.string = this._winRate + "x", this.txtTempRate.string = this._winRate + "x";
    }
  }]), e;
}(_dependency3.default)).prototype, "ndTitlePopup", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), wt = _dependency.applyDecoratedDescriptor(Bt.prototype, "titleSpine", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Lt = _dependency.applyDecoratedDescriptor(Bt.prototype, "btnStart", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), kt = _dependency.applyDecoratedDescriptor(Bt.prototype, "startLable", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Et = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndStageOneResult", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(Bt.prototype, "btnConfirm", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ot = _dependency.applyDecoratedDescriptor(Bt.prototype, "confirmLabel", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(Bt.prototype, "btnCancel", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ft = _dependency.applyDecoratedDescriptor(Bt.prototype, "cancelLabel", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Nt = _dependency.applyDecoratedDescriptor(Bt.prototype, "txtTempRate", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), vt = _dependency.applyDecoratedDescriptor(Bt.prototype, "rateBackground", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Gt = _dependency.applyDecoratedDescriptor(Bt.prototype, "win_effect", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Pt = _dependency.applyDecoratedDescriptor(Bt.prototype, "skeletonFurnace", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Mt = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndContinue", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Dt = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndFurnaceTransformBG", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), xt = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndHightRate", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ut = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndText", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), It = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndHightTxtRate", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), zt = _dependency.applyDecoratedDescriptor(Bt.prototype, "rateTitleSprite", [at], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Wt = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndStageResult", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ht = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndStageResultBbr", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Vt = _dependency.applyDecoratedDescriptor(Bt.prototype, "b_font_06", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Yt = _dependency.applyDecoratedDescriptor(Bt.prototype, "btnBack", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), qt = _dependency.applyDecoratedDescriptor(Bt.prototype, "backLabel", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Xt = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndTotalWin", [ut], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Zt = _dependency.applyDecoratedDescriptor(Bt.prototype, "txtTotalWin", [ct], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), jt = _dependency.applyDecoratedDescriptor(Bt.prototype, "txtRate", [pt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Kt = _dependency.applyDecoratedDescriptor(Bt.prototype, "ballLight", [dt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Jt = _dependency.applyDecoratedDescriptor(Bt.prototype, "rateBall", [bt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Qt = _dependency.applyDecoratedDescriptor(Bt.prototype, "rateBallList", [ht], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), $t = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndResultFail", [ft], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), te = _dependency.applyDecoratedDescriptor(Bt.prototype, "btnFailBack", [gt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ee = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndFailTitle", [Tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ne = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndSmoke", [mt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ae = _dependency.applyDecoratedDescriptor(Bt.prototype, "ndPot", [St], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ie = _dependency.applyDecoratedDescriptor(Bt.prototype, "resultFailBackLabel", [Rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = Bt)) || _t));
_dependency2.cclegacy._RF.pop();
