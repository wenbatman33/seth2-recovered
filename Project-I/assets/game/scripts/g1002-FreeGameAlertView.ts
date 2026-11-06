// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameConfigModel";
import * as _dependency6 from "./g1002-GameData";
import * as _dependency7 from "./g1002-GameEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "../../shared/scripts/slotFramework-MisaButton";
import * as _dependency10 from "../../shared/scripts/main-Bundles";
import * as _dependency11 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency12 from "../../shared/scripts/main-CmmUtils";
import * as _dependency13 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
var _export;
export { _export as FreeGameAlertView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FreeGameAlertView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, o, r, s, l, u, c, f, h, p, g, m, _, d, S, b, E, T, F, C, O, A, v, N, R, G, B, D, y, w, I, M, L;
var P, U, k, H, z, W, Y, V, K, j, x, X, q, J, Q, Z, $, tt, et, it, nt, at, ot, rt, st, lt, ut, ct, ft;
_dependency2.cclegacy._RF.push({}, "fc716pADP5P3pHYRcO2qcWb", "FreeGameAlertView", void 0);
var ht,
  pt = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.START_FREE_GAME = 1] = "START_FREE_GAME", t[t.START_FREE_GAME_END = 2] = "START_FREE_GAME_END", t[t.RUN_SCORE = 3] = "RUN_SCORE", t[t.RUN_SCORE_END = 4] = "RUN_SCORE_END", t[t.FINISH_FREE_GAME = 5] = "FINISH_FREE_GAME", t[t.FINISH_FREE_GAME_END = 6] = "FINISH_FREE_GAME_END";
}(ht || (ht = {}));
_publish("FreeGameAlertView", (P = pt("FreeGameAlertView"), U = _dependency4.inject("alert", _dependency2.Node), k = _dependency4.inject("alert/bbr", _dependency2.Node), H = _dependency4.inject("alert/bgContent", _dependency2.Node), z = _dependency4.inject("alert/fgOutBg", _dependency2.Node), W = _dependency4.inject("alert/fgFontSprite", _dependency2.Sprite), Y = _dependency4.inject("alert/fgOutFontSprite", _dependency2.Sprite), V = _dependency4.inject("alert/fgTimes", _dependency2.Label), K = _dependency4.inject("alert/fgWin", _dependency2.Label), j = _dependency4.inject("alert/buttonBg", _dependency2.Node), x = _dependency4.inject("alert/startBtn", _dependency2.Node), X = _dependency4.inject("alert/finishBtn", _dependency2.Node), q = _dependency4.inject("alert/lightEffect", _dependency2.Node), J = _dependency4.inject("prefab/coinFallingAnimNode", _dependency2.Node), P(($ = _dependency.applyDecoratedDescriptor((Z = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgContent", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgOutBg", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgFontSprite", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgOutFontSprite", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgTimes", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgWin", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "buttonBg", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startBtn", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "finishBtn", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "lightEffect", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinFallingAnimNode", ft, _dependency.assertThisInitialized(e)), e.finishFGCallback = null, e.freeGameAlertStatus = ht.NONE, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/FGAlertView";
  }, r.init = function () {
    this.enabledKeyDown = !0, this.setData(), this.setEventTouch();
  }, r.setEventTouch = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_DOWN, function (i) {
      var n = i.keyCode;
      App.uiManager.isShow(e) && n === _dependency2.KeyCode.SPACE && (t.freeGameAlertStatus === ht.START_FREE_GAME ? t.startFreeGame() : t.freeGameAlertStatus === ht.RUN_SCORE ? t.directShowResult() : t.freeGameAlertStatus === ht.RUN_SCORE_END && t.finishFreeGame());
    });
  }, r.setData = function () {
    var t = _dependency5.default.getData().filePaths.localeSpriteFrame;
    this.startBtn.getComponent(_dependency1.default).customNormalSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_01_normal"), this.startBtn.getComponent(_dependency1.default).customPressedSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_01_pressed"), this.startBtn.getComponent(_dependency1.default).customHoverSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_01_hover"), this.startBtn.getComponent(_dependency1.default).customDisabledSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_01_disabled"), this.finishBtn.getComponent(_dependency1.default).customNormalSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_02_normal"), this.finishBtn.getComponent(_dependency1.default).customPressedSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_02_pressed"), this.finishBtn.getComponent(_dependency1.default).customHoverSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_02_hover"), this.finishBtn.getComponent(_dependency1.default).customDisabledSprite = _dependency0.LoadUtils.getDirSp(this.bundle, t, "t_font_02_disabled");
    var e = App.storage.getItem("using_language");
    "en" !== e && "vn" !== e || this.fgFontSprite.node.setPosition(2, 114);
  }, r.initCoinPool = function () {
    for (var t, e = this, i = this.coinFallingAnimNode, n = App.pool.createPool("ALERT_COIN_POOL"), a = 0; a < 5; a++) t = void 0, (t = _dependency2.instantiate(i)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (t, i) {
      "copy" == i.data.name && e.playCoinFallAnim();
    }), n.cloneNode = t, n.put(t);
  }, r.playCoinFallAnim = function () {
    var t = App.pool.getPool("ALERT_COIN_POOL").get(),
      e = Math.random() >= .5 ? 1 : -1,
      i = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(e, 1), i.clearTracks(), i.setToSetupPose(), i.setAnimation(0, "coin", !1), i.setCompleteListener(function () {
      App.pool.getPool("ALERT_COIN_POOL").put(t);
    });
  }, r.startFreeGame = function () {
    var t = this;
    this.freeGameAlertStatus = ht.START_FREE_GAME_END, this.data.originTurbo = _dependency5.default.isTurbo, _dependency5.default.setIsTurbo(!1, !1), _dependency11.ReelDataSettingObj.setSpeedIndex(0), this.unschedule(this.startFreeGame), this.bbr.targetOff(this), dispatch(_dependency7.GameEvent.START_EXTENSION_SCHEDULE), this.fadeOutTween(this.alert, function () {
      dispatch(_dependency7.GameEvent.CLICK_START_FREE_GAME), t.close();
    });
  }, r.finishFreeGame = function () {
    this.freeGameAlertStatus = ht.FINISH_FREE_GAME, this.finishBtn.active = !1, this.bbr.active = !1, this.bgContent.active = !1, this.fgFontSprite.node.active = !1, this.fgOutFontSprite.node.active = !1, this.fgTimes.node.active = !1, this.fgWin.node.active = !1, this.buttonBg.active = !1, _dependency5.default.stopOnFg && (_dependency8.default.active = !1), _dependency5.default.setIsTurbo(this.data.originTurbo, !1), dispatch(_dependency7.GameEvent.KILL_EXTENSION_SCHEDULE), this.unschedule(this.finishFreeGame), this.bbr.targetOff(this), this.close();
  }, r.close = function () {
    dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.FALL_MONEY
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.MONEY_SCROLL
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.FG_OUT_INTRO
    }), this.unscheduleAllCallbacks(), this.bbr.targetOff(this), t.prototype.close.call(this);
  }, r.playBounceTween = function (t, e) {
    _dependency2.tween(t).bindNodeState(false).delay(.2).to(.1, {
      scale: new _dependency2.Vec3(1.2, 1.2, 1.2)
    }).to(.2, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, r.fadeOutTween = function (t, e) {
    var i = t.getComponent(_dependency2.UIOpacity);
    i.opacity = 255, _dependency2.tween(i).bindNodeState(false).to(.4, {
      opacity: 0
    }, {
      onComplete: function () {
        t.active = !1, e && e();
      }
    }).start();
  }, r.showIntroAlert = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = _dependency5.default.getData().autoCloseTime,
      n = _dependency13.default.isReplay;
    this.bbr.getComponent(_dependency2.Sprite).color = new _dependency2.Color(0, 0, 0, 204), this.alert.active = !0, this.finishBtn.active = !1, this.fgWin && (this.fgWin.string = "");
    for (var a = 0; a < e.length; a++) {
      var o = e[a];
      if (o.freeGameCount > 0) {
        this.fgTimes.string = o.freeGameCount.toString();
        break;
      }
    }
    this.buttonBg.active = !0, this.startBtn.active = !0;
    var r = _dependency5.default.getData().filePaths.localeSpriteFrame;
    this.fgFontSprite.spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, r, "t_font_03"), this.playBounceTween(this.fgFontSprite.node, function () {
      t.buttonBg.active = !0, i && t.scheduleOnce(t.startFreeGame, i), n && t.scheduleOnce(t.startFreeGame, 1), t.schedule(function () {
        t.freeGameAlertStatus = ht.START_FREE_GAME, t.startBtn.once(_dependency2.NodeEventType.TOUCH_END, t.startFreeGame, t);
      }, .5);
    }), dispatch(_dependency14.SlotFrameworkEvent.STOP_AUTO_SPIN);
  }, r.showSummaryAlert = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = _dependency5.default.getData().autoCloseTime;
    this.bbr.getComponent(_dependency2.Sprite).color = new _dependency2.Color(0, 0, 0, 170), App.globalAudio.pauseMusic(), this.alert.active = !0, this.startBtn.active = !1, this.fgOutBg.active = !0, this.bgContent.active = !1, this.fgFontSprite.node.active = !1;
    var n = e[e.length - 1].totalWinnings;
    this.fgWin && (this.fgWin.node.active = !0, this.fgWin.string = _dependency9.CmmSlotUtils.formatNumber(n)), this.fgTimes && (this.fgTimes.string = ""), this.buttonBg.active = !1, this.finishBtn.active = !1;
    var a = _dependency5.default.getData().filePaths.localeSpriteFrame;
    this.fgOutFontSprite.node.active = !0, this.fgOutFontSprite.spriteFrame = _dependency0.LoadUtils.getDirSp(_dependency10.EBundles[_dependency10.EBundles.g1002], a, "t_font_04");
    var o = _dependency0.LoadUtils.getDirSp(_dependency10.EBundles[_dependency10.EBundles.g1002], a, "t_font_04"),
      r = o.width,
      s = o.height;
    this.fgOutFontSprite.node.setPosition(0, 163), this.fgOutFontSprite.node.getComponent(_dependency2.UITransform).setContentSize(r, s), this.lightEffect.active = !0, this.playBounceTween(this.fgOutFontSprite.node, function () {
      t.fgWin.node.active = !0, t.finishFGCallback = function () {
        t.freeGameAlertStatus === ht.RUN_SCORE ? t.directShowResult() : t.freeGameAlertStatus === ht.RUN_SCORE_END && (t.finishFreeGame(), t.unschedule(t.finishFGCallback));
      }, i && t.scheduleOnce(t.finishFGCallback, i), t.bbr.once(_dependency2.NodeEventType.TOUCH_END, t.finishFGCallback, t), t.finishBtn.once(_dependency2.NodeEventType.TOUCH_END, t.finishFGCallback, t);
    });
    var l = this.data.getData().definition.digital,
      u = {
        label: this.fgWin,
        start: 0,
        end: Number(_dependency9.CmmSlotUtils.formatNumber(n, !1, !1, l)),
        tweenTime: 5,
        digital: l,
        useThousandsSeparator: !0,
        tag: _dependency12.CmmUtils.hashCode("summaryTween"),
        callback: function () {
          t.freeGameAlertStatus = ht.RUN_SCORE_END, t.buttonBg.active = !0, t.finishBtn.active = !0, dispatch(_dependency7.GameEvent.STOP_BTM, {
            data: _dependency5.EBTM.MONEY_SCROLL
          });
        }
      };
    this.freeGameAlertStatus = ht.RUN_SCORE, _dependency9.CmmSlotUtils.tweenNum(u), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.MONEY_SCROLL,
        loop: !0
      }
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.FG_OUT_INTRO
      }
    });
  }, r.directShowResult = function () {
    this.freeGameAlertStatus = ht.RUN_SCORE_END, _dependency2.Tween.stopAllByTag(_dependency12.CmmUtils.hashCode("summaryTween"));
    var t = this.data.getData().gameState,
      e = t[t.length - 1].totalWinnings;
    this.fgWin.string = _dependency9.CmmSlotUtils.formatNumber(e), this.buttonBg.active = !0, this.finishBtn.active = !0, this.finishBtn.once(_dependency2.NodeEventType.TOUCH_END, this.finishFGCallback, this), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.FU_OUT_DIRECT
      }
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.MONEY_SCROLL
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.FG_OUT_INTRO
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }, {
    key: "closeAction",
    get: function () {
      var t = this;
      return this.freeGameAlertStatus === ht.FINISH_FREE_GAME ? function (e) {
        App.utils.fadeOutView(t.node, function () {
          dispatch(_dependency7.GameEvent.CLICK_FINISH_FREE_GAME), e();
        });
      } : null;
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(Z.prototype, "bbr", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(Z.prototype, "bgContent", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(Z.prototype, "fgOutBg", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(Z.prototype, "fgFontSprite", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(Z.prototype, "fgOutFontSprite", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(Z.prototype, "fgTimes", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(Z.prototype, "fgWin", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(Z.prototype, "buttonBg", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(Z.prototype, "startBtn", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(Z.prototype, "finishBtn", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(Z.prototype, "lightEffect", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(Z.prototype, "coinFallingAnimNode", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = Z)) || Q));
_dependency2.cclegacy._RF.pop();
