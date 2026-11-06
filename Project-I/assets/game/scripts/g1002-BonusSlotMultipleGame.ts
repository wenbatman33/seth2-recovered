// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "./g1002-GameData";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/main-CmmUtils";
import * as _dependency7 from "./g1002-GameEvent";
import * as _dependency8 from "./g1002-types";
import * as _dependency9 from "./g1002-GameConfigModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "./g1002-GameSender";
import * as _dependency10 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency11 from "../../shared/scripts/slotFramework-MisaButton";
import * as _dependency12 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency13 from "./g1002-MultipReelsController";
import * as _dependency14 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as BonusSlotMultipleGame };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BonusSlotMultipleGame":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, o, r, l, s, u, c, p, m, d, h, S, f, g, B, b, C, _, L, T, E, O, A, y, N, D, v, R, x, I, U;
var M, P, w, G, F, k, H, V, z, W, Y, X, K, j, q, Z, J, Q, $, tt, et, nt, it, at, ot, rt, lt, st, ut;
_dependency2.cclegacy._RF.push({}, "57c09hLSl1D74VZOwYrCmLu", "BonusSlotMultipleGame", void 0);
var ct,
  pt,
  mt = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.STOVE = "stove", t.STOP = "stop", t.SUCCESS = "success", t.FAIL = "fail";
}(ct || (ct = {})), function (t) {
  t[t.IDLE = 0] = "IDLE", t[t.SCROLLING = 1] = "SCROLLING", t[t.EXPECTING = 2] = "EXPECTING", t[t.DIRECT_SHOW_STOP = 3] = "DIRECT_SHOW_STOP";
}(pt || (pt = {}));
_publish("BonusSlotMultipleGame", (M = mt("BonusSlotMultipleGame"), P = _dependency5.inject("content/MultipReelsController", _dependency2.Node), w = _dependency5.inject("content/stopBtn", _dependency2.Node), G = _dependency5.inject("whiteBackground", _dependency2.Node), F = _dependency5.inject("content/bonusBgAnim", _dependency2.sp.Skeleton), k = _dependency5.inject("content/remainingContent/remainingTimesLabel", _dependency2.Node), H = _dependency5.inject("content/remainingContent/remainingFont", _dependency2.Sprite), V = _dependency5.inject("nextAlertContent", _dependency2.Node), z = _dependency5.inject("nextAlertContent/barBg/currentTimexLabel", _dependency2.Node), W = _dependency5.inject("nextAlertContent/maxTimesLabel", _dependency2.Node), Y = _dependency5.inject("nextAlertContent/btnsContent/cancelBtn", _dependency2.Node), X = _dependency5.inject("nextAlertContent/btnsContent/confirmBtn", _dependency2.Node), K = _dependency5.inject("nextAlertContent/titleSpFont", _dependency2.Sprite), j = _dependency5.inject("nextAlertContent/maxSpFont", _dependency2.Sprite), M((J = _dependency.applyDecoratedDescriptor((Z = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "multipReelsController", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stopBtn", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "whiteBackground", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bonusBgAnim", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remainingTimesLabel", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remainingFont", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "nextAlertContent", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "currentTimexLabel", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "maxTimesLabel", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "cancelBtn", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "confirmBtn", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "titleSpFont", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "maxSpFont", ut, _dependency.assertThisInitialized(e)), e.multipleList = [], e.state = null, e.tempOriginAllStop = null, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/bonusGame/BonusSlotMultipleGame";
  };
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
    var e = this.tempOriginAllStop ? 3 : 0;
    _dependency12.ReelDataSettingObj.setSpeedIndex(e);
  }, s.show = function (e) {
    t.prototype.show.call(this, e), this.init();
  }, s.init = function () {
    this.setEventTouch(), this.setData(), this.tempOriginAllStop = _dependency9.default.isTurbo, _dependency12.ReelDataSettingObj.setSpeedIndex(0), 3 === this.data.getData().bonusState.restOfGamble ? this.showNextAlert() : this.reset();
  }, s.reset = function () {
    var t = this;
    this.playStoveAnim(ct.STOP, !0), this.confirmBtn.getComponent(_dependency11.default).interactable = !0, this.cancelBtn.getComponent(_dependency11.default).interactable = !0, this.nextAlertContent.active = !1;
    var e = this.data.getData().bonusState;
    this.setRestOfGamble(e.restOfGamble), this.multipleList = e.gambleResults.map(function (t) {
      return t.times;
    }), this.stopBtn.getComponent(_dependency2.Button).interactable = !1, _dependency2.tween(this.node).bindNodeState(false).delay(.5).call(function () {
      t.stopBtn.getComponent(_dependency2.Button).interactable = !0, t.state = pt.IDLE;
    }).start();
  }, s.setData = function () {
    var t = _dependency9.default.getData().filePaths.localeSpriteFrame;
    this.remainingFont.spriteFrame = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_08"), this.titleSpFont.spriteFrame = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_02"), this.maxSpFont.spriteFrame = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_03"), this.cancelBtn.getComponent(_dependency11.default).customNormalSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_05_normal"), this.cancelBtn.getComponent(_dependency11.default).customPressedSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_05_pressed"), this.cancelBtn.getComponent(_dependency11.default).customHoverSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_05_hover"), this.cancelBtn.getComponent(_dependency11.default).customDisabledSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_05_disabled"), this.confirmBtn.getComponent(_dependency11.default).customNormalSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_04_normal"), this.confirmBtn.getComponent(_dependency11.default).customPressedSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_04_pressed"), this.confirmBtn.getComponent(_dependency11.default).customHoverSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_04_hover"), this.confirmBtn.getComponent(_dependency11.default).customDisabledSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "b_font_04_disabled");
  }, s.playWinWhiteBgOutAnim = function (t) {
    var e = this;
    this.whiteBackground.active = !0, this.whiteBackground.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.tween(this.whiteBackground.getComponent(_dependency2.UIOpacity)).bindNodeState(false).delay(.3).to(1, {
      opacity: 255
    }).call(function () {
      e.whiteBackground.active = !1, t && t();
    }).start();
  }, s.stopScolling = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            this.scheduleOnce(function () {
              dispatch(_dependency7.GameEvent.SET_BONUS_MULTIP_RESULT);
            }, .2);
          case 1:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), s.playStoveAnim = function (t, e, n) {
    var i;
    void 0 === e && (e = !1);
    var a = ((i = {})[ct.STOVE] = {
      url: null,
      loop: !0
    }, i[ct.STOP] = {
      url: null,
      loop: !1
    }, i[ct.SUCCESS] = {
      url: _dependency9.EBTM.BONUS_SUCCESS,
      loop: !1
    }, i[ct.FAIL] = {
      url: _dependency9.EBTM.BONUS_FAIL,
      loop: !1
    }, i);
    a[t].url && dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: a[t].url,
        loop: a[t].loop
      }
    }), this.bonusBgAnim.setToSetupPose(), this.bonusBgAnim.clearTracks(), this.bonusBgAnim.setAnimation(0, t, e), this.bonusBgAnim.setCompleteListener(function () {
      n && n();
    });
  }, s.showNextAlert = function () {
    var t,
      e,
      n = this,
      i = this.data.getData().bonusState;
    dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.BN_CONTINUE,
        loop: !1
      }
    }), this.nextAlertContent.active = !0, this.currentTimexLabel.getComponent(_dependency2.Label).string = (null != (t = i.gambleTimes) ? t : i.purifyTimes) + "x", this.maxTimesLabel.getComponent(_dependency2.Label).string = (null != (e = i.biggest) ? e : 0) + "x", this.playNextAlertTween(), this.confirmBtn.once(_dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency9.EBTM.BN_CLICK,
          loop: !1
        }
      }), dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: _dependency9.EBTM.BN_CONTINUE
      });
      var t = {
        bonusType: _dependency8.EBonusType.ELIXIR_FURNACE,
        action: _dependency8.BonusStateAction.GAMBLE,
        actionValue: !0,
        ratioIndex: _dependency0.default.ratioIndex,
        ratioValue: _dependency0.default.ratioValue,
        stakeIndex: _dependency0.default.stakeIndex,
        stakeValue: _dependency0.default.stakeValue,
        spinId: n.data.getData().spinId
      };
      App.senderManager.get(_dependency1.GameSender).sendBonusGambleReq(t);
    }), this.cancelBtn.once(_dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency9.EBTM.BN_CLICK,
          loop: !1
        }
      }), dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: _dependency9.EBTM.BN_CONTINUE
      });
      var t = {
        bonusType: _dependency8.EBonusType.ELIXIR_FURNACE,
        action: _dependency8.BonusStateAction.GAMBLE,
        actionValue: !1,
        ratioIndex: _dependency0.default.ratioIndex,
        ratioValue: _dependency0.default.ratioValue,
        stakeIndex: _dependency0.default.stakeIndex,
        stakeValue: _dependency0.default.stakeValue,
        spinId: n.data.getData().spinId
      };
      App.senderManager.get(_dependency1.GameSender).sendBonusGambleReq(t);
    });
  }, s.playNextAlertTween = function () {
    var t = this;
    this.cancelBtn.getComponent(_dependency2.UIOpacity).opacity = 0, this.confirmBtn.getComponent(_dependency2.UIOpacity).opacity = 0, this.maxSpFont.node.active = !1, this.maxTimesLabel.active = !1, this.currentTimexLabel.scale = new _dependency2.Vec3(2.6, 2.6, 2.6), _dependency2.tween(this.currentTimexLabel).bindNodeState(false).delay(.1).to(.3, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: "elasticOut"
    }).call(function () {
      t.maxSpFont.node.active = !0, t.maxTimesLabel.active = !0, _dependency2.tween(t.cancelBtn.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1, {
        opacity: 255
      }).start(), _dependency2.tween(t.confirmBtn.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1, {
        opacity: 255
      }).start();
    }).start(), _dependency14.default.isReplay && this.replayAutoNextBtn();
  }, s.setRestOfGamble = function (t) {
    this.data.getData().bonusState;
    this.remainingTimesLabel.getComponent(_dependency2.Label).string = "" + (null != t ? t : 0);
  }, s.setEventTouch = function () {
    var t = this;
    _dependency6.CmmUtils.addBtnClickEvent(this.stopBtn, function () {
      t.stopBtnHandle();
    });
  }, s.stopBtnHandle = function () {
    this.state === pt.IDLE ? (dispatch(_dependency7.GameEvent.BONUS_START_SCROLL), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.BONUS_REEL_SCROLL,
        loop: !0
      }
    }), this.playStoveAnim(ct.STOVE, !0), this.state = pt.SCROLLING) : this.state === pt.SCROLLING ? (dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.BONUS_REEL_SCROLL
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.BONUS_REEL_SCROLL_SLOW
      }
    }), this.playStoveAnim(ct.STOP, !0), this.stopScolling(), this.state = pt.EXPECTING) : this.state === pt.EXPECTING && (dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.MG_WHEEL_STOP
      }
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.BONUS_REEL_SCROLL
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.BONUS_REEL_SCROLL_SLOW
    }), this.stopBtn.getComponent(_dependency2.Button).interactable = !1, dispatch(_dependency7.GameEvent.BONUS_DIRECT_STOP_SCROLL), this.state = pt.DIRECT_SHOW_STOP);
  }, s.replayAutoNextBtn = function () {
    var t = this.data.getData().parser.currentSpinIndex;
    this.data.replayData.betData.theResult[t].engine.gambleValue ? this.simulationConfirmHandler() : this.simulationCancelHandler();
  }, s.stopScrollTimeLine = function () {
    var t = this;
    gsap.timeline().add(function () {
      Log.d("0", new Date().getUTCDate()), t.stopBtnHandle();
    }).add(function () {
      Log.d("1", new Date().getUTCDate()), t.stopBtnHandle();
    }, "+=2").add(function () {
      Log.d("2", new Date().getUTCDate()), t.stopBtnHandle();
    }, "+=2").add(function () {
      Log.d("2", new Date().getUTCDate()), t.stopBtnHandle();
    }, "+=2");
  }, s.simulationCancelHandler = function () {
    var t = this;
    this.confirmBtn.getComponent(_dependency11.default).interactable = !1, dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.BN_CLICK,
        loop: !1
      }
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.BN_CONTINUE
    });
    var e = this.cancelBtn.getComponent(_dependency11.default),
      n = e.hoverSprite,
      i = e.pressedSprite,
      a = e.normalSprite;
    gsap.timeline().add(function () {
      t.cancelBtn.getComponent(_dependency2.Sprite).spriteFrame = n;
    }, "+=0.8").add(function () {
      t.cancelBtn.getComponent(_dependency2.Sprite).spriteFrame = i;
    }, "+=0.8").add(function () {
      t.cancelBtn.getComponent(_dependency2.Sprite).spriteFrame = a;
    }, "+=0.8").call(function () {
      t.data.setReplayNextBonusData(), dispatch(_dependency7.GameEvent.BONUS_GAMBLE_RESULT_RESP);
    });
  }, s.simulationConfirmHandler = function () {
    var t = this;
    this.cancelBtn.getComponent(_dependency11.default).interactable = !1, dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.BN_CLICK,
        loop: !1
      }
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.BN_CONTINUE
    });
    var e = this.confirmBtn.getComponent(_dependency11.default),
      n = e.hoverSprite,
      i = e.pressedSprite,
      a = e.normalSprite;
    gsap.timeline().add(function () {
      t.confirmBtn.getComponent(_dependency2.Sprite).spriteFrame = n;
    }, "+=0.8").add(function () {
      t.confirmBtn.getComponent(_dependency2.Sprite).spriteFrame = i;
    }, "+=0.8").add(function () {
      t.confirmBtn.getComponent(_dependency2.Sprite).spriteFrame = a;
    }, "+=0.8").call(function () {
      var e = t.data.getData().parser.currentSpinIndex;
      t.data.replayData.betData.theResult[e].engine.gambleValue ? (t.data.setReplayNextBonusData(), dispatch(_dependency7.GameEvent.BONUS_GAMBLE_RESP), t.scheduleOnce(function () {
        t.stopScrollTimeLine();
      }, .5)) : (t.data.setReplayNextBonusData(), dispatch(_dependency7.GameEvent.BONUS_GAMBLE_RESULT_RESP));
    });
  }, s.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency7.GameEvent.BONUS_SLOT_SCOLLING_COMPLETE, function (t) {
      n.state = pt.DIRECT_SHOW_STOP;
      var e = n.data.getData().bonusState,
        i = e.isFinish && 0 === e.totalWinnings,
        a = i ? ct.FAIL : ct.SUCCESS;
      n.playStoveAnim(a, !1, function () {
        i ? dispatch(_dependency7.GameEvent.BONUS_GAMBLE_RESULT_RESP) : e.isFinish ? dispatch(_dependency7.GameEvent.BONUS_GAME_COLLECT_END, {
          data: e.gambleTimes
        }) : n.showNextAlert();
      });
    }), this.on(_dependency7.GameEvent.BONUS_GAMBLE_RESP, function () {
      App.uiManager.isShow(e) && (n.reset(), n.multipReelsController.getComponent(_dependency13.MultipReelsController).initSymbolView());
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "multipReelsController", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(Z.prototype, "stopBtn", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(Z.prototype, "whiteBackground", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(Z.prototype, "bonusBgAnim", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(Z.prototype, "remainingTimesLabel", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(Z.prototype, "remainingFont", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(Z.prototype, "nextAlertContent", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(Z.prototype, "currentTimexLabel", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(Z.prototype, "maxTimesLabel", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(Z.prototype, "cancelBtn", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(Z.prototype, "confirmBtn", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(Z.prototype, "titleSpFont", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(Z.prototype, "maxSpFont", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = Z)) || q));
_dependency2.cclegacy._RF.pop();
