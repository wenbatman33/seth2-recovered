// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./g1004-GameSlotReel";
import * as _dependency4 from "./g1004-GameEvent";
import * as _dependency5 from "./g1004-GameConfigModel";
import * as _dependency6 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency7 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency8 from "../../shared/scripts/main-EventComponent";
import * as _dependency9 from "./g1004-GameData";
import * as _dependency0 from "./g1004-GameSlotSymbol";
import * as _dependency1 from "../../shared/scripts/main-ReelEvent";
import * as _dependency10 from "../../shared/scripts/main-ReelEnum";
import * as _dependency11 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency12 from "./g1004-GameSymbolID";
import * as _dependency13 from "./g1004-types";
import * as _dependency14 from "./g1004-GameSlotRoller";
var _export;
export { _export as GameSlotController };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSlotController":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, r, o, a, i, s, l, c, u, p, h, d, f, m, T, y, S, E, R, _, g, L, b, v, x, I, A, C, P, w, D, O, H, W, M, N, G, k, B, V, F, Y, U;
var K, J, z, q, X, Q, j, Z, $, tt, et, nt, rt, ot, at, it, st, lt, ct, ut, pt, ht, dt, ft, mt, Tt, yt, St, Et, Rt, _t, gt, Lt;
_dependency2.cclegacy._RF.push({}, "6ee7esYSJ1FmLV1qjhTvK82", "GameSlotController", void 0);
var bt = _dependency2._decorator.ccclass,
  vt = _dependency2._decorator.property,
  xt = Array.from(Array(15), function (t, e) {
    return e;
  }),
  It = new _dependency2.Vec3(346, 246, 1),
  At = new _dependency2.Vec3(346, -26, 1),
  Ct = new _dependency2.Vec3(346, -115, 1),
  Pt = new _dependency2.Vec3(1.4, 1.4, 1.4),
  wt = new _dependency2.Vec3(1, 1, 1),
  Dt = new _dependency2.Vec3(.8, .8, .8);
_publish("GameSlotController", (K = bt("GameSlotController"), J = vt({
  type: _dependency3.GameSlotReel
}), z = vt({
  type: _dependency2.Prefab,
  tooltip: "Symbol預製物件"
}), q = vt({
  type: _dependency2.Node,
  tooltip: "Extra 停輪時最上層顯示"
}), X = vt({
  type: _dependency2.Node,
  tooltip: "壓暗層"
}), Q = vt({
  type: _dependency2.Node,
  tooltip: "補充掉落的容器"
}), j = vt({
  type: _dependency2.Node,
  tooltip: "滾輪頂部的 wild 特效"
}), Z = vt({
  type: _dependency2.Node,
  tooltip: "滾輪頂部的 Rate 特效"
}), $ = vt({
  type: _dependency2.Node,
  tooltip: "中獎倍數容器"
}), tt = vt({
  type: _dependency2.Label,
  tooltip: "中獎倍數標題"
}), et = vt({
  type: _dependency2.sp.Skeleton,
  tooltip: "中獎倍數特效"
}), nt = vt({
  type: _dependency2.Node,
  tooltip: "中獎特效容器"
}), rt = vt({
  type: _dependency2.Node,
  tooltip: "消除特效容器"
}), ot = vt({
  type: _dependency2.Node,
  tooltip: "Scatter 特效容器"
}), at = vt({
  type: _dependency14.GameSlotRoller,
  tooltip: "瞇牌輪軸"
}), it = vt({
  type: _dependency2.Node,
  tooltip: "咪牌特效"
}), K((ct = _dependency.applyDecoratedDescriptor((lt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "slotReels", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolPrefab", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndExtraIdleContainer", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndDark", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndDropContainer", dt, _dependency.assertThisInitialized(e)), e.ndDropTop = null, e.ndDropBottom = null, _dependency.initializerDefineProperty(e, "ndTopWild", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndTopRate", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndRateContainer", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtRateTitle", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rateEffect", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndWinSymbolsContainer", Et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndFrameOutContainer", Rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndExtraContainer", _t, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "slotRollers", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndExpectAnimList", Lt, _dependency.assertThisInitialized(e)), e._winRate = 0, e._currStopReel = -1, e._symbolHeight = 0, e._symbolWidth = 0, e.status = _dependency10.EReelStatus.NONE, e.allReelsPositionMap = new Map(), e.isGetResult = !1, e.roundWinSymbols = [], e.isNeedExpect = !1, e.roundExtraList = [], e.dropPropsSetting = {
      durations: [.25, .15, .05],
      offset: 10
    }, e._frameOutCount = 0, e.frameOutLv = 0, e.rateToScoreLv = 0, e._reteToScoreCount = 0, e.highLightLvMap = new Map(), e.isUpGradeEnd = !1, e.expectDropCount = 0, e.recordViewMap = null, e.dropReelListTemp = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var c = e.prototype;
  return c.start = function () {
    var t = this;
    this.ndDropTop = this.node.getChildByName("ndDropTopContainer"), this.ndDropBottom = this.node.getChildByName("ndDropContainer"), this.highLightLvMap.set("HIGH_LIGHT_LV1_3", _dependency5.EBTM.HIGH_LIGHT_LV1_3), this.highLightLvMap.set("HIGH_LIGHT_LV1_4", _dependency5.EBTM.HIGH_LIGHT_LV1_4), this.highLightLvMap.set("HIGH_LIGHT_LV1_5", _dependency5.EBTM.HIGH_LIGHT_LV1_5), this.highLightLvMap.set("HIGH_LIGHT_LV1_6", _dependency5.EBTM.HIGH_LIGHT_LV1_6), this.highLightLvMap.set("HIGH_LIGHT_LV2_3", _dependency5.EBTM.HIGH_LIGHT_LV2_3), this.highLightLvMap.set("HIGH_LIGHT_LV2_4", _dependency5.EBTM.HIGH_LIGHT_LV2_4), this.highLightLvMap.set("HIGH_LIGHT_LV2_5", _dependency5.EBTM.HIGH_LIGHT_LV2_5), this.highLightLvMap.set("HIGH_LIGHT_LV2_6", _dependency5.EBTM.HIGH_LIGHT_LV2_6), this.highLightLvMap.set("HIGH_LIGHT_LV3_3", _dependency5.EBTM.HIGH_LIGHT_LV3_3), this.highLightLvMap.set("HIGH_LIGHT_LV3_4", _dependency5.EBTM.HIGH_LIGHT_LV3_4), this.highLightLvMap.set("HIGH_LIGHT_LV3_5", _dependency5.EBTM.HIGH_LIGHT_LV3_5), this.highLightLvMap.set("HIGH_LIGHT_LV3_6", _dependency5.EBTM.HIGH_LIGHT_LV3_6), this.highLightLvMap.set("HIGH_LIGHT_LV4_3", _dependency5.EBTM.HIGH_LIGHT_LV4_3), this.highLightLvMap.set("HIGH_LIGHT_LV4_4", _dependency5.EBTM.HIGH_LIGHT_LV4_4), this.highLightLvMap.set("HIGH_LIGHT_LV4_5", _dependency5.EBTM.HIGH_LIGHT_LV4_5), this.highLightLvMap.set("HIGH_LIGHT_LV4_6", _dependency5.EBTM.HIGH_LIGHT_LV4_6), this.highLightLvMap.set("HIGH_LIGHT_LV5_3", _dependency5.EBTM.HIGH_LIGHT_LV5_3), this.highLightLvMap.set("HIGH_LIGHT_LV5_4", _dependency5.EBTM.HIGH_LIGHT_LV5_4), this.highLightLvMap.set("HIGH_LIGHT_LV5_5", _dependency5.EBTM.HIGH_LIGHT_LV5_5), this.highLightLvMap.set("HIGH_LIGHT_LV5_6", _dependency5.EBTM.HIGH_LIGHT_LV5_6), this.slotReels.map(function (e, n) {
      e.symbolLabels = xt, e.reelIndex = n, 0 === n ? (e.symbolCount = 4, t._symbolWidth = e.symbols[0].getComponent(_dependency2.UITransform).width) : (e.symbolCount = 5, t._symbolHeight = e.symbols[0].getComponent(_dependency2.UITransform).height), e.createRandSymbols(), e.isLastStrip = n === t.slotReels.length - 1, e.symbols.map(function (t) {
        return t.groupCount = 1;
      }), e.node.on(_dependency1.SingleReelEvents.FINISH, t.onSingleReelFinish, t);
    }), this.slotRollers.map(function (t, e) {
      t.symbolLabels = xt, t.reelIndex = e + 1, t.symbolCount = 5, t.createRandSymbols(), t.node.active = !1;
    }), this.creatorReelsToPositionMap(this.slotReels, this.allReelsPositionMap), this.txtRateTitle.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.txtRateTitle.node.active = !1, this.rateEffect.node.active = !1, this.isEnableDark(!1), this.closeTopWild(), this.closeTopRate(), this.status = _dependency10.EReelStatus.WAITING, this.recordViewMap && this.initReelView(this.recordViewMap), this.slotReels.map(function (t, e) {
      t.symbols.forEach(function (t, e) {
        e < 5 || (t.ndAnim.active = !1);
      });
    });
  }, c.creatorReelsToPositionMap = function (t, e) {
    var n = 0;
    t.map(function (t, r) {
      if (0 === r) for (var o = 3; o >= 0; o--) {
        var a = t.symbols[o];
        a.Label.string = n.toString(), a.reelIndex = r, a.order = n + 2, a.symbolPosition = n, e.set(n, a), n++;
      } else t.symbols.map(function (t, n) {
        if (n < 5) {
          var o = 4 + r + (n > 0 ? 6 : 0) * n - 1;
          t.Label.string = o.toString(), t.symbolPosition = o, t.reelIndex = r, t.order = r, e.set(o, t);
        }
      });
    });
  }, c.initReelView = function (t) {
    void 0 === t && (t = null), this.status = _dependency10.EReelStatus.WAITING, this.setReelResult(t), this.initRateTitle(), this.setExtraSymbolToTop(), this.ndDropTop.active = !1, this.ndDropBottom.active = !1;
  }, c.removeEvents = function () {
    this.off(_dependency11.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(_dependency4.GameEvent.START_SPIN), this.off(_dependency4.GameEvent.START_SCROLL), this.off(_dependency4.GameEvent.START_QUICK_STOP), this.off(_dependency4.GameEvent.SET_REEL_RESULT), this.off(_dependency4.GameEvent.REEL_ALL_START), this.off(_dependency4.GameEvent.SHOW_SYMBOLS_WIN), this.off(_dependency4.GameEvent.SHOW_WIN_LINE), this.off(_dependency4.GameEvent.SHOW_SYMBOLS_FRAME_OUT), this.off(_dependency4.GameEvent.SHOW_DROP_SYMBOL), this.off(_dependency4.GameEvent.SHOW_SCATTER_WIN), this.off(_dependency4.GameEvent.SHOW_JACKPOT_WIN), this.off(_dependency4.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency4.GameEvent.JACKPOT_GAME_PICK_END), this.off(_dependency4.GameEvent.UPGRADE_END), this.off(_dependency4.GameEvent.REEL_STOP), this.off(_dependency4.GameEvent.PARSER_REPLAY_COMPLETED);
  }, c.addEvents = function () {
    var t = this;
    this.on(_dependency11.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            dispatch(_dependency4.GameEvent.PARSER_INIT_COMPLETED), t.initReelView();
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency4.GameEvent.START_SPIN, function () {
      _dependency5.default.isTurbo || t.startSpin();
    }), this.on(_dependency4.GameEvent.START_SCROLL, function () {
      t.startSpin();
    }), this.on(_dependency4.GameEvent.START_QUICK_STOP, function () {
      Log.d("%c START_QUICK_STOP", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), t.quickStopSpin();
    }), this.on(_dependency4.GameEvent.SET_REEL_RESULT, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var n, r, o, a;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            t.data.currentGameType === _dependency13.EGameType.MAIN_GAME && _dependency5.default.isTurbo && t.startSpin(), t.isGetResult = !0, t.isNeedExpect = t.getCurrentViewIsNeedExpect(), Log.d("%c 收到滾輪結果", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify), t.isNeedExpect), n = t.getExtraSymbolList(), r = 0, o = _dependency.regeneratorRuntime().mark(function e(o) {
              var a;
              return _dependency.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    a = n.filter(function (t) {
                      return t.reelIndex === o;
                    }), (r += a.length) >= 3 && t.slotReels[o + 1] && (t.slotReels[o + 1].needExpect = !0);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }), a = 0;
          case 8:
            if (!(a < 7)) {
              e.next = 13;
              break;
            }
            return e.delegateYield(o(a), "t0", 10);
          case 10:
            a++, e.next = 8;
            break;
          case 13:
            t.checkStopSpin();
          case 14:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency4.GameEvent.REEL_ALL_START, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            t.status = _dependency10.EReelStatus.LOOP_SCROLLING;
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency4.GameEvent.SHOW_SYMBOLS_WIN, function (e) {
      Log.d("%c SHOW_SYMBOLS_WIN", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), t.status = _dependency10.EReelStatus.ROUND_START, t.playSymbolWinFlow().then(function () {
        Log.d("%c SHOW_SYMBOLS_WIN_END", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), dispatch(_dependency4.GameEvent.SHOW_SYMBOLS_WIN_END);
      });
    }), this.on(_dependency4.GameEvent.SHOW_WIN_LINE, function () {
      Log.d("%c SHOW_WIN_LINE", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), t.showWinRateFlow().then(function () {
        Log.d("%c SHOW_WIN_LINE_END", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify));
      });
    }), this.on(_dependency4.GameEvent.SHOW_SYMBOLS_FRAME_OUT, function (e) {
      Log.d("%c SHOW_SYMBOLS_FRAME_OUT", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), t.playFrameAnimFlow().then(function () {
        Log.d("%c SHOW_SYMBOLS_FRAME_OUT_END", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), dispatch(_dependency4.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END);
      });
    }), this.on(_dependency4.GameEvent.SHOW_DROP_SYMBOL, function (e) {
      Log.d("%c SHOW_DROP_SYMBOL", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), t.playDropSymbol().then(function () {
        Log.d("%c SHOW_DROP_SYMBOL_END", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), dispatch(_dependency4.GameEvent.SHOW_DROP_SYMBOL_END);
      });
    }), this.on(_dependency4.GameEvent.SHOW_SCATTER_WIN, function (e) {
      Log.d("%c SHOW_SCATTER_WIN", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), t.playScatterWin(_dependency12.EBackendSymbolID.SCATTER).then(function () {
        Log.d("%c SHOW_SCATTER_WIN_END", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), dispatch(_dependency4.GameEvent.SHOW_SCATTER_WIN_END);
      });
    }), this.on(_dependency4.GameEvent.SHOW_JACKPOT_WIN, function (e) {
      Log.d("%c SHOW_JACKPOT_WIN", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), t.playScatterWin(_dependency12.EBackendSymbolID.JACKPOT).then(function () {
        Log.d("%c SHOW_JACKPOT_WIN_END", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify)), dispatch(_dependency4.GameEvent.SHOW_JACKPOT_WIN_END);
      });
    }), this.on(_dependency4.GameEvent.CHANGE_GAME_STYLE, function (e) {
      switch (t.roundExtraList = [], t.ndExtraContainer.destroyAllChildren(), t.ndWinSymbolsContainer.destroyAllChildren(), t.data.currentGameType = e.data, e.data) {
        case _dependency13.EGameType.MAIN_GAME:
          t.slotRollers.map(function (t) {
            return t.isFreeGame = !1;
          }), t.slotReels.map(function (t) {
            return t.isFreeGame = !1;
          }), t.initRateTitle(), t.winRate = 0;
          break;
        case _dependency13.EGameType.FREE_GAME:
          t.slotRollers.map(function (t) {
            return t.isFreeGame = !0;
          }), t.slotReels.map(function (t) {
            return t.isFreeGame = !0;
          }), t.txtRateTitle.node.active = !0, t.txtRateTitle.node.getComponent(_dependency2.UIOpacity).opacity = 255, t.winRate = 2, t.repeatRateTitleScale();
      }
    }), this.on(_dependency4.GameEvent.JACKPOT_GAME_PICK_END, function (e) {
      t.roundExtraList = [], t.ndExtraContainer.destroyAllChildren();
    }), this.on(_dependency4.GameEvent.UPGRADE_END, function () {
      t.isUpGradeEnd || (dispatch(_dependency4.GameEvent.STOP_BTM, {
        data: _dependency5.EBTM.SYMBOL_UPGRADE
      }), dispatch(_dependency4.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency5.EBTM.SYMBOL_UPGRADE_END
        }
      }), t.isUpGradeEnd = !0);
    }), this.on(_dependency4.GameEvent.REEL_STOP, function (e) {
      var n = Array.from(t.allReelsPositionMap.values()).filter(function (t) {
          return t.reelIndex === e;
        }),
        r = n.some(function (t) {
          return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
        }),
        o = n.some(function (t) {
          return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
        }),
        a = n.some(function (t) {
          return t.symbolID === _dependency12.EBackendSymbolID.WILD;
        });
      t.checkReelsDropMusic(r, o, a);
    }), this.on(_dependency4.GameEvent.PARSER_REPLAY_COMPLETED, function (e) {
      var n = t.data.getData().gameState[0].view,
        r = t.data.parserViewMapToResult(n);
      t.initReelView(r);
    }), this.on(_dependency4.GameEvent.SET_SYMBOL_VIEW, function (e) {
      t.recordViewMap = e.data, t.ndExtraIdleContainer.destroyAllChildren();
    });
  }, c.checkReelsDropMusic = function (t, e, n) {
    t ? dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.SCATTER_HIT
      }
    }) : e ? dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.JACKPOT_HIT
      }
    }) : n ? dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.WILD_HIT
      }
    }) : dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.REEL_STOP
      }
    });
  }, c.initRoundSetting = function () {
    switch (this.closeTopWild(), this.closeTopRate(), this.currStopReel = -1, this.expectDropCount = 0, this.frameOutCount = 0, this.rateToScoreCount = 0, this.roundExtraList = [], this.isNeedExpect = !1, this.roundWinSymbols = [], this.ndWinSymbolsContainer.destroyAllChildren(), this.ndExtraContainer.destroyAllChildren(), this.ndExtraIdleContainer.destroyAllChildren(), this.data.currentGameType) {
      case _dependency13.EGameType.MAIN_GAME:
        this.initRateTitle(), this.winRate = 0;
        var t = _dependency5.default.isTurbo ? 3 : 0;
        _dependency6.ReelDataSettingObj.setSpeedIndex(t);
        break;
      case _dependency13.EGameType.FREE_GAME:
        _dependency6.ReelDataSettingObj.setSpeedIndex(0);
    }
    dispatch(_dependency4.GameEvent.UPDATE_TOTAL_WAYS, {
      data: {
        totalWays: -1,
        isRun: !1
      }
    });
  }, c.startSpin = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (Log.d("%c START_SPIN", _dependency7.getKeyStyle(_dependency7.KeyStyle.Notify), this.data.getData().parser.currentSpinIndex), this.status !== _dependency10.EReelStatus.NONE) {
              t.next = 3;
              break;
            }
            return t.abrupt("return");
          case 3:
            _dependency5.default.isTurbo || dispatch(_dependency4.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency5.EBTM.REEL_SCROLL
              }
            }), this.status = _dependency10.EReelStatus.START_SPIN, this.slotReels.map(function (t) {
              return t.isEnableScrollLayout(!1);
            }), this.initRoundSetting(), e = 0;
          case 8:
            if (!(e < this.slotReels.length)) {
              t.next = 18;
              break;
            }
            if (this.slotReels[e].spinSpeed = _dependency5.default.isTurbo ? 2600 : 4200, this.slotReels[e].stopSpinTime = _dependency5.default.isTurbo ? .1 : .32, this.slotReels[e].startSpin(_dependency5.default.isTurbo), _dependency5.default.isTurbo) {
              t.next = 15;
              break;
            }
            return t.next = 15, this.sleep(.04);
          case 15:
            e++, t.next = 8;
            break;
          case 18:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.checkStopSpin = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            this.status === _dependency10.EReelStatus.LOOP_SCROLLING && this.isGetResult ? _dependency5.default.isTurbo ? this.quickStopSpin() : (this.setReelResult(), this.queueStopSpin()) : _dependency2.tween(this.node).bindNodeState(false).delay(0).call(function () {
              e.checkStopSpin();
            }).start();
          case 1:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.hasTopWild = function () {
    return this.data.getData().parser.totalResult[0].filter(function (t) {
      return t === _dependency12.EBackendSymbolID.WILD;
    }).length >= 4;
  }, c.hasTopRate = function () {
    var t = 0;
    return this.allReelsPositionMap.forEach(function (e, n) {
      n > 3 || e.symbolID === _dependency12.EBackendSymbolID.RATE && e.rate === _dependency12.EBackendSymbolID.RATE && t++;
    }), t >= 4;
  }, c.showTopWild = function (t) {
    var e = this;
    return void 0 === t && (t = !1), new Promise(function (n) {
      var r = t ? .1 : .3,
        o = e.ndTopWild.getChildByName("spine"),
        a = o.getComponent(_dependency2.sp.Skeleton);
      a.clearTracks(), a.setToSetupPose(), a.setAnimation(0, "win", !1), a.paused = !0, _dependency2.tween(o).bindNodeState(false).to(r, {
        x: 0
      }).call(function () {
        n(!0);
      }).start();
    });
  }, c.showTopRate = function (t) {
    var e = this;
    return void 0 === t && (t = !1), new Promise(function (n) {
      var r = t ? .1 : .3,
        o = e.ndTopRate.getChildByName("spine"),
        a = o.getComponent(_dependency2.sp.Skeleton);
      a.clearTracks(), a.setToSetupPose(), a.setAnimation(0, "win", !1), a.paused = !0, _dependency2.tween(o).bindNodeState(false).to(r, {
        x: 0
      }).call(function () {
        n(!0);
      }).start();
    });
  }, c.closeTopWild = function () {
    var t = this.ndTopWild.getChildByName("spine").getComponent(_dependency2.sp.Skeleton);
    t.node.x = 532, t.paused = !0, t.clearTracks(), t.setToSetupPose(), t.setCompleteListener(null);
  }, c.closeTopRate = function () {
    var t = this.ndTopRate.getChildByName("spine").getComponent(_dependency2.sp.Skeleton);
    t.node.x = 532, t.paused = !0, t.clearTracks(), t.setToSetupPose(), t.setCompleteListener(null);
  }, c.quickStopSpin = function () {
    this.status !== _dependency10.EReelStatus.FINISH && (dispatch(_dependency4.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.RUN_EXPECT
    }), Log.d("%c 急速停止  ", _dependency7.getKeyStyle(_dependency7.KeyStyle.Function)), this.setReelResult(), this.cancelNeedExpect(), this.slotReels.map(function (t) {
      t.quicklyStop(.0618);
    }), this.status = _dependency10.EReelStatus.FINISH, dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
      data: {
        url: _dependency5.EBTM.REEL_STOP
      }
    }), this.hasTopWild() && this.showTopWild(!0), this.hasTopRate() && this.showTopRate(!0));
  }, c.queueStopSpin = function (t) {
    var e = this;
    if (void 0 === t && (t = .09), this.currStopReel++, this.currStopReel >= this.slotReels.length) return _dependency2.Tween.stopAllByTarget(this.node), void (this.currStopReel = -1);
    0 === this.currStopReel && (this.hasTopWild() && this.showTopWild(), this.hasTopRate() && this.showTopRate()), _dependency2.tween(this.node).bindNodeState(false).delay(t).call(function () {
      var t;
      null == (t = e.slotReels[e.currStopReel]) || t.stopSpin(_dependency3.ReelStopType.BottomToTop), e.queueStopSpin();
    }).start();
  }, c.playTopWildAni = function () {
    var t = this;
    return new Promise(function (e) {
      var n = t.ndTopWild.getChildByName("spine").getComponent(_dependency2.sp.Skeleton);
      n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "win", !1), n.paused = !1, n.setCompleteListener(function () {
        t.closeTopWild(), e(!0);
      });
    });
  }, c.playTopRateAni = function () {
    var t = this;
    return new Promise(function (e) {
      var n = t.ndTopRate.getChildByName("spine").getComponent(_dependency2.sp.Skeleton);
      n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "win", !1), n.paused = !1, n.setCompleteListener(function () {
        t.closeTopRate(), e(!0);
      });
    });
  }, c.checkAllReelStop = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e, n, r, o;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!this.hasTopWild()) {
              t.next = 3;
              break;
            }
            return t.next = 3, this.playTopWildAni();
          case 3:
            if (!this.hasTopRate()) {
              t.next = 6;
              break;
            }
            return t.next = 6, this.playTopRateAni();
          case 6:
            if (e = this.data.getData().parser.currentGameState, n = e.winSymbols, r = e.roundWinnings, this.data.currentGameType !== _dependency13.EGameType.FREE_GAME) {
              t.next = 14;
              break;
            }
            if (0 !== n.length) {
              t.next = 12;
              break;
            }
            return o = Array.from(this.allReelsPositionMap.values()).filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.RATE && 2 === t.rate;
            }), t.next = 12, this.playRateOnlyCollect(o);
          case 12:
            t.next = 17;
            break;
          case 14:
            if (!(r > 0)) {
              t.next = 17;
              break;
            }
            return t.next = 17, this.sleep(.218);
          case 17:
            this.slotReels.map(function (t, e) {
              t.symbols.forEach(function (t, e) {
                e < 5 || (t.ndAnim.active = !1);
              });
            }), dispatch(_dependency4.GameEvent.STOP_BTM, {
              data: _dependency5.EBTM.REEL_SCROLL
            }), dispatch(_dependency4.GameEvent.REEL_ALL_STOP);
          case 20:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.setExtraSymbolToTop = function () {
    var t = this,
      e = this.getAllExtraIdleSymbol();
    this.ndExtraIdleContainer.destroyAllChildren(), e.forEach(function (e) {
      var n = t.allReelsPositionMap.get(e.position);
      t.cloneWinSymbol(n, t.ndExtraIdleContainer).playExtraAnim(_dependency12.ESymbolAnimType.IDLE);
    });
  }, c.onSingleReelFinish = function (t) {
    var e = this.data.getData().parser.currentGameState.totalWays,
      n = {
        totalWays: 0,
        isRun: !1
      };
    this.checkAllReelStatus(_dependency10.EReelStatus.FINISH) ? (n.totalWays = e[e.length - 1], this.handleAllReelsFinish()) : _dependency6.ReelDataSettingObj.getAllStop() ? Log.d("%c getAllStop", _dependency7.getKeyStyle(_dependency7.KeyStyle.Watch)) : (t > 0 && (n.totalWays = _dependency5.default.isTurbo ? e[e.length - 1] : e[t - 1]), this.handleReelNotAllStop(t)), dispatch(_dependency4.GameEvent.UPDATE_TOTAL_WAYS, {
      data: n
    });
  }, c.handleAllReelsFinish = function () {
    Log.d("%c All FINISH", _dependency7.getKeyStyle(_dependency7.KeyStyle.Watch), this.isNeedExpect), this.status = _dependency10.EReelStatus.FINISH, _dependency2.Tween.stopAllByTarget(this.node), this.isGetResult = !1, this.currStopReel = 7, this.setExtraSymbolToTop(), this.isNeedExpect && (dispatch(_dependency4.GameEvent.STOP_EXPECT), this.cancelNeedExpect(), this.playExtraAnimStatus(), this.isEnableDark(!1)), this.checkAllReelStop();
  }, c.handleReelNotAllStop = function (t) {
    var e = this.getExtraSymbolList();
    this.isNeedExpect && e.length >= 3 && this.handleNeedExpect(t, e);
  }, c.handleNeedExpect = function (t, e) {
    var n = this,
      r = e.filter(function (e) {
        return e.reelIndex === t;
      });
    if (r.forEach(function (t) {
      var e = n.allReelsPositionMap.get(t.position);
      n.roundExtraList.push(e);
    }), this.roundExtraList.length < 5) {
      var o = Array.from(this.allReelsPositionMap.values()).filter(function (e) {
          return e.reelIndex === t;
        }),
        a = o.some(function (t) {
          return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
        }),
        i = o.some(function (t) {
          return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
        });
      a && dispatch(_dependency4.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency5.EBTM.SCATTER_HIT
        }
      }), i && dispatch(_dependency4.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency5.EBTM.JACKPOT_HIT
        }
      });
    }
    if (3 === this.roundExtraList.length) this.ndExtraContainer.destroyAllChildren(), this.roundExtraList.forEach(function (t) {
      n.cloneWinSymbol(t, n.ndExtraContainer).playExtraAnim(_dependency12.ESymbolAnimType.TWIST);
    });else if (this.roundExtraList.length >= 4) return void this.handleFourOrMoreExtras(t);
    this.handleNextReelExpect(t, r);
  }, c.handleFourOrMoreExtras = function (t) {
    var e = this;
    this.slotReels[t + 1] && (this.slotReels[t + 1].needExpect = !1, this.slotReels[t + 1].stopSpin()), this.ndExtraContainer.destroyAllChildren(), this.roundExtraList.forEach(function (t) {
      e.cloneWinSymbol(t, e.ndExtraContainer).playExtraAnim(_dependency12.ESymbolAnimType.IDLE);
    }), this.isEnableDark(!1);
  }, c.handleNextReelExpect = function (t, e) {
    var n = this,
      r = Array.from(this.allReelsPositionMap.values()).filter(function (e) {
        return e.reelIndex === t + 1;
      }).some(function (t) {
        return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
      });
    if (this.slotReels[t + 1] && this.slotReels[t + 1].needExpect) {
      this.isEnableDark(!0), dispatch(_dependency4.GameEvent.SHOW_EXPECT), dispatch(_dependency4.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency5.EBTM.RUN_EXPECT
        }
      });
      var o = this.ndExpectAnimList[t];
      o.active = !0;
      var a = o.getComponent(_dependency2.sp.Skeleton);
      a.clearTracks(), a.setToSetupPose(), a.setAnimation(1, "loop", !0);
      var i = this.slotRollers[t];
      i.node.active = !0, i.spinSpeed = 1600, i.startSpin();
      var s = function () {
        var r = n.slotReels[t + 1];
        r.needExpect = !1, r.quicklyStop(), dispatch(_dependency4.GameEvent.STOP_EXPECT), dispatch(_dependency4.GameEvent.STOP_BTM, {
          data: _dependency5.EBTM.RUN_EXPECT
        }), e.forEach(function (t) {
          var e = n.allReelsPositionMap.get(t.position);
          n.cloneWinSymbol(e, n.ndExtraContainer).playExtraAnim(_dependency12.ESymbolAnimType.TWIST);
        }), _dependency2.tween(o).bindNodeState(false).delay(.1).call(function () {
          o.active = !1, i.node.active = !1;
        }).start();
      };
      i.node.once(_dependency1.SingleReelEvents.FINISH, function () {
        dispatch(_dependency4.GameEvent.STOP_BTM, {
          data: _dependency5.EBTM.RUN_EXPECT
        }), i.isEnableDark(!0), r ? s() : (dispatch(_dependency4.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency5.EBTM.EXPECT_FAIL
          }
        }), a.clearTracks(), a.setToSetupPose(), a.setAnimation(0, "out", !1), a.setCompleteListener(function () {
          s(), a.setCompleteListener(null);
        }));
      });
    }
  }, c.cancelNeedExpect = function () {
    this.slotReels.forEach(function (t, e) {
      t.needExpect = !1, t.stopSpinTime = .1, t.stopSpin();
    }), this.slotRollers.forEach(function (t) {
      t.node.off(_dependency1.SingleReelEvents.FINISH), t.node.active = !1;
    }), this.ndExpectAnimList.forEach(function (t) {
      var e = t.getComponent(_dependency2.sp.Skeleton);
      e.clearTracks(), e.setToSetupPose(), e.setCompleteListener(null), t.active = !1;
    });
  }, c.setReelResult = function (t) {
    var e = this;
    if (void 0 === t && (t = null), this.status !== _dependency10.EReelStatus.FINISH) {
      var n = t || this.data.getData().parser.currentViewMap;
      if (Log.d("%c server 回覆的滾輪結果 ", _dependency7.getKeyStyle(_dependency7.KeyStyle.Info), n), n.forEach(function (t, n) {
        var r = e.allReelsPositionMap.get(t.position);
        r.initData(), r.groupCount = t.groupCount, r.symbolID = t.symbolID, t.symbolID === _dependency12.EBackendSymbolID.RATE && (r.rate = 2), r.level = t.level;
      }), this.parserSymbolGroup(this.allReelsPositionMap), this.slotReels.map(function (t) {
        return t.isEnableScrollLayout(!0);
      }), this.isNeedExpect) for (var r = function (t) {
          var n = Array.from(e.allReelsPositionMap.values()).filter(function (e) {
              return e.reelIndex === t + 1;
            }),
            r = n.some(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
            }),
            o = n.some(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
            });
          e.slotRollers[t].hasJackpot = o, e.slotRollers[t].hasScatter = r, n.forEach(function (n, r) {
            var o = e.slotRollers[t].symbols[r];
            o.initData(), o.symbolLabels = n.symbolLabels, o.groupCount = n.groupCount, o.symbolID = n.symbolID, n.symbolID === _dependency12.EBackendSymbolID.RATE && (o.rate = 2), o.level = n.level, o.order = n.order, o.reelIndex = n.reelIndex, o.symbolPosition = n.symbolPosition;
          });
        }, o = 0; o < 6; o++) r(o);
    }
  }, c.isEnableDark = function (t, e) {
    var n = this;
    return void 0 === e && (e = .1), new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function r(o) {
      return _dependency.regeneratorRuntime().wrap(function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return n.ndDark.active = !0, r.next = 3, n.animateOpacity(n.ndDark, t ? 255 : 0, e, t ? _dependency2.easing.fade : _dependency2.easing.quintIn);
          case 3:
            n.ndDark.active = !!t, o(!0);
          case 5:
          case "end":
            return r.stop();
        }
      }, r);
    })));
  }, c.playSymbolWinFlow = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var r, o, s, l, c, u;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t.isUpGradeEnd = !1, t.isEnableDark(!0), t.ndExtraContainer.destroyAllChildren(), e.next = 5, t.awaitViewDateTime(.05);
          case 5:
            r = t.data.getData().parser.currentGameState.winSymbols, o = t.getWinQueueReels([].concat(r)), t.roundWinSymbols = [], t.ndWinSymbolsContainer.destroyAllChildren(), t.frameOutCount += 1, s = o.length, l = "HIGH_LIGHT_LV" + t.frameOutLv + "_" + s, dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
              data: {
                url: t.highLightLvMap.get(l)
              }
            }), c = _dependency.regeneratorRuntime().mark(function e() {
              var n, r;
              return _dependency.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = [], o[u].forEach(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
                      var o;
                      return _dependency.regeneratorRuntime().wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            o = t.cloneWinSymbol(n, t.ndWinSymbolsContainer), r.push(o);
                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }))), (n = t.roundWinSymbols).push.apply(n, r), e.next = 6, t.showWinSymbolHighLight(r, t.frameOutLv > 3 ? 3 : t.frameOutLv);
                  case 6:
                  case "end":
                    return e.stop();
                }
              }, e);
            }), u = 0;
          case 15:
            if (!(u < o.length)) {
              e.next = 20;
              break;
            }
            return e.delegateYield(c(), "t0", 17);
          case 17:
            u++, e.next = 15;
            break;
          case 20:
            if (0 !== Array.from(t.allReelsPositionMap.values()).filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.RATE && 2 === t.rate;
            }).length || 0 !== t.winRate) {
              e.next = 24;
              break;
            }
            return e.next = 24, t.awaitViewDateTime(.618);
          case 24:
            n(!0);
          case 25:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.cloneWinSymbol = function (t, e) {
    void 0 === e && (e = null);
    var n = t.node.getWorldPosition(),
      r = _dependency2.instantiate(t.node);
    r.parent = e, r.active = !0, r.setWorldPosition(n);
    var o = r.getComponent(_dependency0.GameSlotSymbol);
    return o.initData(), o.symbolLabels = t.symbolLabels, o.groupCount = t.groupCount, o.symbolID = t.symbolID, o.level = t.level, o.order = t.order, o.reelIndex = t.reelIndex, o.symbolPosition = t.symbolPosition, o.rate = t.rate, o;
  }, c.initRateTitle = function () {
    this.winRate = 0, this.txtRateTitle.node.active = !1, this.txtRateTitle.node.scale = Dt, this.txtRateTitle.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.txtRateTitle.node.setPosition(Ct);
  }, c.showWinRateFlow = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var r, o, a, s;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = Array.from(t.allReelsPositionMap.values()).filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.RATE && 2 === t.rate;
            }), o = t.data.getData().parser.currentGameState, a = o.roundWinnings, s = o.winSymbols, 0 !== r.length) {
              e.next = 27;
              break;
            }
            if (!(a > 0)) {
              e.next = 20;
              break;
            }
            if (0 !== t.winRate) {
              e.next = 11;
              break;
            }
            return dispatch(_dependency4.GameEvent.SHOW_WIN_LINE_END), e.next = 8, t.sleep(.3);
          case 8:
            dispatch(_dependency4.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH), e.next = 17;
            break;
          case 11:
            return dispatch(_dependency4.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_BEFORE), e.next = 14, t.sleep(.45);
          case 14:
            return e.next = 16, t.playRateTitleToWinBoardAnim();
          case 16:
            t.playRateMoveToBottom();
          case 17:
            n(!0), e.next = 25;
            break;
          case 20:
            return dispatch(_dependency4.GameEvent.SHOW_WIN_LINE_END), e.next = 23, t.sleep(.3);
          case 23:
            dispatch(_dependency4.GameEvent.SHOW_ROUND_VIEW_WIN_CASH), n(!0);
          case 25:
            e.next = 38;
            break;
          case 27:
            if (0 !== s.length) {
              e.next = 34;
              break;
            }
            return e.next = 30, t.playRateOnlyCollect(r);
          case 30:
            dispatch(_dependency4.GameEvent.SHOW_WIN_LINE_END), n(!0), e.next = 38;
            break;
          case 34:
            return e.next = 36, t.playRateToCollect(r);
          case 36:
            t.playRateMoveToBottom(), n(!0);
          case 38:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.repeatRateTitleScale = function () {
    _dependency2.tween(this.txtRateTitle.node).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).to(.618, {
      scale: new _dependency2.Vec3(.85, .85, .85)
    }, {
      easing: _dependency2.easing.smooth
    }).to(.618, {
      scale: Dt
    }, {
      easing: _dependency2.easing.smooth
    })).start();
  }, c.playRateOnlyCollect = function (t) {
    var e = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(r) {
      var o, a, s, l;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return o = e.getAllRateSymbols(t), a = new _dependency2.Vec3(e.txtRateTitle.node.getPosition().x, e.txtRateTitle.node.getPosition().y - 50, 1), s = o.map(function (t, n) {
              return e.moveRateSymbolToTargetPos(t, a, n);
            }), l = t.length > 0 ? .9 : 0, n.next = 6, Promise.all(s);
          case 6:
            return e.repeatRateTitleScale(), n.next = 9, e.sleep(l);
          case 9:
            r(!0);
          case 10:
          case "end":
            return n.stop();
        }
      }, n);
    })));
  }, c.playRateToCollect = function (t) {
    var e = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(r) {
      var o, a, s;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (o = e.getAllRateSymbols(t), e.ndWinSymbolsContainer.getComponentsInChildren(_dependency0.GameSlotSymbol).filter(function (t) {
              return 2 === t.rate;
            }).forEach(function (t) {
              t.rate = 0, t.ndRate.getChildByName("txt").active = !1;
            }), !e.txtRateTitle.node.active) {
              n.next = 8;
              break;
            }
            return n.next = 6, e.moveRateTitleToCenter();
          case 6:
            n.next = 9;
            break;
          case 8:
            e.txtRateTitle.node.setPosition(It);
          case 9:
            return a = e.txtRateTitle.node.getPosition(), a = new _dependency2.Vec3(a.x, a.y - 50, 1), s = o.map(function (t, n) {
              return e.moveRateSymbolToTargetPos(t, a, n);
            }), n.next = 14, Promise.all(s);
          case 14:
            return n.next = 16, e.playRateTitleToWinBoardAnim();
          case 16:
            r(!0);
          case 17:
          case "end":
            return n.stop();
        }
      }, n);
    })));
  }, c.getAllRateSymbols = function (t) {
    var e = this;
    return t.map(function (t) {
      var n = t.node.getWorldPosition();
      t.rate = 0, t.ndRate.active = !1;
      var r = e.symbolPrefab,
        o = _dependency2.instantiate(r);
      o.parent = e.ndRateContainer.getChildByName("content"), o.setWorldPosition(n), o.active = !0;
      var a = o.getComponent(_dependency0.GameSlotSymbol);
      return a.symbolID = 2, a.initRateAnim(), a.rate = 2, a.box.getComponent(_dependency2.Sprite).spriteFrame = null, a.playRateAnim("normal"), t.rate = 0, o;
    });
  }, c.playRateTitleToWinBoardAnim = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, t.playRateMoveToWinBoard();
          case 2:
            n(!0);
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.playRateMoveToWinBoard = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var r;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, t.sleep(.1);
          case 2:
            t.rateToScoreCount += 1, r = _dependency5.EBTM.RATE_TO_SCORE_LV3, e.t0 = t.rateToScoreLv, e.next = 1 === e.t0 ? 7 : 2 === e.t0 ? 9 : 11;
            break;
          case 7:
            return r = _dependency5.EBTM.RATE_TO_SCORE_LV1, e.abrupt("break", 11);
          case 9:
            return r = _dependency5.EBTM.RATE_TO_SCORE_LV2, e.abrupt("break", 11);
          case 11:
            return _dependency2.tween(t).bindNodeState(false).delay(.15).call(function () {
              dispatch(_dependency4.GameEvent.PLAY_BTM, {
                data: {
                  url: r
                }
              });
            }).start(), _dependency2.Tween.stopAllByTarget(t.txtRateTitle.node), t.txtRateTitle.node.getComponent(_dependency2.UIOpacity).opacity = 255, t.animateScale(t.txtRateTitle.node, new _dependency2.Vec3(1.6, 1.6, 1.6), .3, _dependency2.easing.linear), dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
              data: {
                url: _dependency5.EBTM.RATE_MOVE_LV1
              }
            }), e.next = 19, t.animatePosition(t.txtRateTitle.node, At, .309, _dependency2.easing.linear);
          case 19:
            return e.next = 21, t.sleep(.3);
          case 21:
            return t.animateScale(t.txtRateTitle.node, new _dependency2.Vec3(.6, .6, .6), .2, _dependency2.easing.quintOut), dispatch(_dependency4.GameEvent.SHOW_WIN_LINE_END), dispatch(_dependency4.GameEvent.PLAY_SHOCK_EFFECT, {
              data: {
                type: _dependency13.EShockType.REEL_VIEW,
                level: 3
              }
            }), dispatch(_dependency4.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_AFTER), e.next = 27, t.animateOpacity(t.txtRateTitle.node, 172, .2, _dependency2.easing.sineOut);
          case 27:
            t.animateOpacity(t.txtRateTitle.node, 0, .06, _dependency2.easing.sineOut), n(!0);
          case 29:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.playRateMoveToBottom = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t.txtRateTitle.node.getWorldPosition(), _dependency2.Tween.stopAllByTarget(t.txtRateTitle.node), _dependency2.tween(t.txtRateTitle.node).bindNodeState(false).to(.3, {
              scale: Dt
            }, {
              easing: _dependency2.easing.sineIn
            }).start(), e.next = 5, t.sleep(.6618);
          case 5:
            return t.animatePosition(t.txtRateTitle.node, Ct, .9, _dependency2.easing.sineOut), e.next = 8, t.animateOpacity(t.txtRateTitle.node, 172, .8, _dependency2.easing.linear);
          case 8:
            return e.next = 10, t.animateOpacity(t.txtRateTitle.node, 255, .1, _dependency2.easing.linear);
          case 10:
            t.repeatRateTitleScale(), n(!0);
          case 12:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.moveRateTitleToCenter = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var r;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = t.txtRateTitle.node.active ? Ct : It, t.txtRateTitle.node.setPosition(r), _dependency2.Tween.stopAllByTarget(t.txtRateTitle.node), t.animateScale(t.txtRateTitle.node, Pt, .4, _dependency2.easing.sineIn), t.animateOpacity(t.txtRateTitle.node, 255, .4, _dependency2.easing.sineIn), t.txtRateTitle.node.active && dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
              data: {
                url: _dependency5.EBTM.RATE_MOVE_LV1
              }
            }), e.next = 8, t.animatePosition(t.txtRateTitle.node, It, .36, _dependency2.easing.quadIn);
          case 8:
            n(!0);
          case 9:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.moveRateSymbolToTargetPos = function (t, e, n) {
    var r = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function o(s) {
      return _dependency.regeneratorRuntime().wrap(function (o) {
        for (;;) switch (o.prev = o.next) {
          case 0:
            _dependency2.tween(t).bindNodeState(false).delay(.26 * n).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function o() {
              return _dependency.regeneratorRuntime().wrap(function (o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    return o.next = 2, r.playRateSymbolToCenter(t, e, n);
                  case 2:
                    s(!0);
                  case 3:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))).start();
          case 1:
          case "end":
            return o.stop();
        }
      }, o);
    })));
  }, c.playRateSymbolToCenter = function (t, e, n) {
    var r = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function o(a) {
      var s, l, c;
      return _dependency.regeneratorRuntime().wrap(function (o) {
        for (;;) switch (o.prev = o.next) {
          case 0:
            return s = r.data.getData().parser.currentGameState.winSymbols, l = t.getComponent(_dependency0.GameSlotSymbol), c = l.ndRate.getChildByName("txt"), _dependency2.Tween.stopAllByTarget(t), o.next = 6, r.animateScale(t, new _dependency2.Vec3(.8, .8, .8), .3, _dependency2.easing.sineIn);
          case 6:
            return dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
              data: {
                url: _dependency5.EBTM.GOT_RATE
              }
            }), r.animateOpacity(c, 0, .2, _dependency2.easing.smooth), o.next = 10, r.animateScale(t, new _dependency2.Vec3(1.4, 1.4, 1.4), .32, _dependency2.easing.sineIn);
          case 10:
            return _dependency2.tween(t).bindNodeState(false).delay(.2).to(.1, {
              scale: new _dependency2.Vec3(.6, .6, .6)
            }, {
              easing: _dependency2.easing.sineIn
            }).start(), o.next = 13, r.animateBezierPosition(t, t.getPosition(), e, e, .4, _dependency2.easing.backOutIn);
          case 13:
            return l.playRateAnim("big").then(function () {
              t.destroy();
            }), 0 === n && s.length > 0 && dispatch(_dependency4.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_BEFORE), o.next = 17, r.delayTime(.1618, t);
          case 17:
            return r.txtRateTitle.node.active = !0, r.txtRateTitle.node.getComponent(_dependency2.UIOpacity).opacity = 255, r.winRate += 2, o.next = 22, r.scaleRateTitleAnim();
          case 22:
            a(!0);
          case 23:
          case "end":
            return o.stop();
        }
      }, o);
    })));
  }, c.scaleRateTitleAnim = function () {
    var t = this;
    return new Promise(function (e) {
      t.txtRateTitle.node.getPosition().y === It.y ? (t.txtRateTitle.node.scale = Pt, _dependency2.tween(t.txtRateTitle.node).bindNodeState(false).to(.13, {
        scale: new _dependency2.Vec3(2.2, 2.2, 2.2)
      }, {
        easing: _dependency2.easing.quadOut
      }).to(.13, {
        scale: Pt
      }, {
        easing: _dependency2.easing.quadIn
      }).call(function () {
        e(!0);
      }).start()) : (t.txtRateTitle.node.scale = wt, _dependency2.tween(t.txtRateTitle.node).bindNodeState(false).to(.13, {
        scale: Pt
      }, {
        easing: _dependency2.easing.quadOut
      }).to(.13, {
        scale: new _dependency2.Vec3(.6, .6, .6)
      }, {
        easing: _dependency2.easing.quadIn
      }).call(function () {
        e(!0);
      }).start());
    });
  }, c.animateScale = function (t, e, n, r) {
    return new Promise(function (o) {
      _dependency2.tween(t).bindNodeState(false).to(n, {
        scale: e
      }, {
        easing: r
      }).call(o).start();
    });
  }, c.animateOpacity = function (t, e, n, r) {
    return new Promise(function (o) {
      var a = t.getComponent(_dependency2.UIOpacity);
      _dependency2.Tween.stopAllByTarget(a), _dependency2.tween(a).bindNodeState(false).to(n, {
        opacity: e
      }, {
        easing: r
      }).call(o).start();
    });
  }, c.animatePosition = function (t, e, n, r) {
    return new Promise(function (o) {
      _dependency2.tween(t).bindNodeState(false).to(n, {
        position: e
      }, {
        easing: r
      }).call(o).start();
    });
  }, c.animateBezierPosition = function (t, e, n, r, o, a) {
    var i = this;
    return new Promise(function (n) {
      var s = e.x > r.x ? r.x + _dependency2.randomRangeInt(200, 400) : r.x - _dependency2.randomRangeInt(200, 400),
        l = e.y > r.y ? r.y + _dependency2.randomRangeInt(200, 400) : r.y - _dependency2.randomRangeInt(200, 400);
      _dependency2.tween(t).bindNodeState(false).to(o, {}, {
        easing: a,
        onUpdate: function (t, n) {
          var o = i.getQuadraticBezierPoint(e, new _dependency2.Vec3(s, l), r, n);
          t.setPosition(o);
        }
      }).call(n).start();
    });
  }, c.getQuadraticBezierPoint = function (t, e, n, r) {
    var o = (1 - r) * (1 - r) * t.x + 2 * (1 - r) * r * e.x + r * r * n.x,
      a = (1 - r) * (1 - r) * t.y + 2 * (1 - r) * r * e.y + r * r * n.y;
    return new _dependency2.Vec3(o, a);
  }, c.getWinQueueReels = function (t) {
    var e = this,
      n = new Map();
    t.map(function (t) {
      t.symbolPos.map(function (t) {
        n.set(t, e.allReelsPositionMap.get(t));
      });
    });
    for (var r = Array.from(n.values()), o = [], a = function (t) {
        var e = r.filter(function (e) {
          return e.order == t;
        });
        e.length > 0 && o.push(e);
      }, i = 0; i < 7; i++) a(i);
    return o;
  }, c.showWinSymbolHighLight = function (t, e) {
    var n = this;
    return void 0 === e && (e = 1), new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function r(o) {
      return _dependency.regeneratorRuntime().wrap(function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return t.filter(function (t) {
              return t.symbolID > 0;
            }).map(function (t) {
              return t.showHighLight(e);
            }), r.next = 3, n.sleep(.07);
          case 3:
            o(!0);
          case 4:
          case "end":
            return r.stop();
        }
      }, r);
    })));
  }, c.playWinSymbols = function (t) {
    return new Promise(function (e) {
      Promise.all(t.map(function (t) {
        return t.playWinAnim();
      })).then(function () {
        return e(!0);
      });
    });
  }, c.playFrameAnimFlow = function () {
    var t = this;
    return new Promise(function (e) {
      t.slotReels.map(function (t) {
        return t.isEnableScrollLayout(!1);
      }), t.getClearSymbols().forEach(function (e) {
        e.symbolPos.forEach(function (e) {
          var n = t.allReelsPositionMap.get(e);
          n && (n.symbolID = -1);
        });
      });
      var n = t.data.getData().parser.currentGameState.groupUpgrade,
        r = [].concat(t.roundWinSymbols);
      n && n.map(function (t) {
        for (var e = t.symbolPos.length, n = function () {
            var n = t.symbolPos[o];
            if (o === e - 1) {
              var a = r.findIndex(function (t) {
                return t.symbolPosition === n;
              });
              a > -1 && r.splice(a, 1);
            }
          }, o = 0; o < e; o++) n();
      });
      var o = _dependency5.EBTM.SYMBOL_SHINE_LV3;
      switch (t.frameOutLv) {
        case 1:
          o = _dependency5.EBTM.SYMBOL_SHINE_LV1;
          break;
        case 2:
          o = _dependency5.EBTM.SYMBOL_SHINE_LV2;
      }
      dispatch(_dependency4.GameEvent.PLAY_BTM, {
        data: {
          url: o
        }
      }), dispatch(_dependency4.GameEvent.PLAY_SHOCK_EFFECT, {
        data: {
          type: _dependency13.EShockType.REEL_VIEW,
          level: t.frameOutLv > 3 ? 3 : t.frameOutLv
        }
      }), t.playFrameOutAnim(r).then(function () {
        t.parserSymbolLevel(t.allReelsPositionMap), e(!0);
      });
    });
  }, c.playFrameOutAnim = function (t) {
    var e = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(r) {
      var o, a, s, l, c, u;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            for (o = [], a = e.data.getData().parser.currentGameState.groupUpgrade, Log.d("%c groupUpgrade ", _dependency7.getKeyStyle(_dependency7.KeyStyle.Info), a), s = [], l = 0; l < t.length; l++) c = t[l], u = e.cloneWinSymbol(c, e.ndFrameOutContainer), o.push(u.playFrameOutEffect(e.frameOutLv > 3 ? 3 : e.frameOutLv)), s.push(c), c.playFrameOut();
            return a.length > 0 && (dispatch(_dependency4.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency5.EBTM.SYMBOL_UPGRADE,
                loop: !0
              }
            }), a.map(function (t) {
              var n = t.symbolPos.length,
                r = t.symbolPos[n - 1],
                a = e.allReelsPositionMap.get(r),
                i = e.cloneWinSymbol(a, e.ndWinSymbolsContainer);
              e.cloneWinSymbol(a, e.ndFrameOutContainer).playFrameOutEffect(e.frameOutLv > 3 ? 3 : e.frameOutLv), o.push(i.playUpLevelAnim(t.afterLevel, t.afterSymbol));
              var s = e.allReelsPositionMap.get(r);
              s.rate = 0, s.symbolID = t.afterSymbol, s.level = t.afterLevel, s.isEnableDark(!1);
            })), n.next = 8, Promise.all(o);
          case 8:
            a.length > 0 && dispatch(_dependency4.GameEvent.UPGRADE_END), r(!0);
          case 10:
          case "end":
            return n.stop();
        }
      }, n);
    })));
  }, c.playDropSymbol = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
              var r, o, a, s, l, c, u, p, h, d;
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.ndDropTop.active = !0, e.ndDropBottom.active = !0, t.next = 4, e.isEnableDark(!1, .3);
                  case 4:
                    if (e.ndWinSymbolsContainer.destroyAllChildren(), e.ndFrameOutContainer.destroyAllChildren(), r = e.getTotalWinSymbols(), e.isNeedExpect = e.getCurrentViewIsNeedExpect(), dispatch(_dependency4.GameEvent.NEXT_SPIN), o = e.getReelsAddDropList(r), Log.d("%c 補充掉落牌 ", _dependency7.getKeyStyle(_dependency7.KeyStyle.Info), o), e.createDropReels(o), e.ndExtraIdleContainer.destroyAllChildren(), e.ndWinSymbolsContainer.destroyAllChildren(), !e.isNeedExpect) {
                      t.next = 22;
                      break;
                    }
                    return a = Array.from(e.allReelsPositionMap.values()).filter(function (t) {
                      return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
                    }), s = Array.from(e.allReelsPositionMap.values()).filter(function (t) {
                      return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
                    }), l = a.length >= 3 ? [].concat(a) : s.length >= 3 ? [].concat(s) : [], t.next = 20, e.playScatterDropSymbol(r, l);
                  case 20:
                    t.next = 24;
                    break;
                  case 22:
                    return t.next = 24, e.playNormalDropSymbol(r);
                  case 24:
                    return c = e.data.getData().parser.currentGameState.totalWays, u = {
                      totalWays: c[c.length - 1],
                      isRun: !0
                    }, dispatch(_dependency4.GameEvent.UPDATE_TOTAL_WAYS, {
                      data: u
                    }), t.next = 29, e.coverRefreshView(o);
                  case 29:
                    if (e.isNeedExpect && (p = e.getExtraSymbolList(), h = [], e.ndExtraContainer.destroyAllChildren(), p.forEach(function (t) {
                      var n = e.cloneWinSymbol(e.allReelsPositionMap.get(t.position), e.ndExtraContainer);
                      n.playExtraAnim(_dependency12.ESymbolAnimType.IDLE), h.push(n);
                    })), e.data.currentGameType !== _dependency13.EGameType.FREE_GAME) {
                      t.next = 36;
                      break;
                    }
                    if (0 !== e.data.getData().parser.currentGameState.winSymbols.length) {
                      t.next = 36;
                      break;
                    }
                    return d = Array.from(e.allReelsPositionMap.values()).filter(function (t) {
                      return t.symbolID === _dependency12.EBackendSymbolID.RATE && 2 === t.rate;
                    }), t.next = 36, e.playRateOnlyCollect(d);
                  case 36:
                    n(!0);
                  case 37:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))));
          case 1:
          case "end":
            return t.stop();
        }
      }, t);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.playNormalDropSymbol = function (t) {
    var e = this;
    return Log.d("%c playNormalDropSymbol", _dependency7.getKeyStyle(_dependency7.KeyStyle.Function)), new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(r) {
      var o, a, s, l, c, u, p, h;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            o = e.getReelsDropCount(t), a = [], s = 0, l = o.length - 1;
          case 4:
            if (!(l >= 0)) {
              n.next = 20;
              break;
            }
            if (e.sumArray(o[l]) > 0 && (u = e.slotReels[l], a.push(e.queueSlotReelDrop(u, o[l]))), p = null == (c = e.ndDropContainer[l]) ? void 0 : c.getChildByName("content"), e.dropReelListTemp = [], e.dropReelListTemp = e.getReelsAddDropList(t), a.push(e.dropReelsToDown(l, p, !1, e.dropReelListTemp[l])), 0 === l && (e.dropReelListTemp[0].filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.WILD;
            }).length > 3 && e.showTopWild().then(function () {
              a.push(e.playTopWildAni());
            }), e.dropReelListTemp[0].filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.RATE;
            }).length > 3 && e.showTopRate().then(function () {
              a.push(e.playTopRateAni());
            })), _dependency5.default.isTurbo) {
              n.next = 17;
              break;
            }
            return h = .016 * (7 - s), n.next = 16, e.sleep(h);
          case 16:
            s += 1;
          case 17:
            l--, n.next = 4;
            break;
          case 20:
            return n.next = 22, Promise.all(a);
          case 22:
            r(!0);
          case 23:
          case "end":
            return n.stop();
        }
      }, n);
    })));
  }, c.playScatterDropSymbol = function (t, e) {
    var n = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function r(o) {
      var a, s, l, c, u, p, h, d, f, m, T, y, S;
      return _dependency.regeneratorRuntime().wrap(function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            s = [], l = n.getReelsDropCount(t), c = n.getReelsAddDropList(t), u = n.ndExtraContainer.getComponentsInChildren(_dependency0.GameSlotSymbol), (a = n.roundExtraList).push.apply(a, u), p = _dependency.regeneratorRuntime().mark(function t() {
              var e, r;
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    n.sumArray(l[h]) > 0 && (e = n.slotReels[h], r = u.filter(function (t) {
                      return t.reelIndex === e.reelIndex;
                    }), s.push(n.queueSlotReelDrop(e, l[h], r)));
                  case 2:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), h = l.length - 1;
          case 7:
            if (!(h >= 0)) {
              r.next = 12;
              break;
            }
            return r.delegateYield(p(), "t0", 9);
          case 9:
            h--, r.next = 7;
            break;
          case 12:
            if (3 !== e.length) {
              r.next = 25;
              break;
            }
            return n.expectDropCount += 1, 1 === n.expectDropCount ? dispatch(_dependency4.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency5.EBTM.ENTER_EXPECT_LV1
              }
            }) : dispatch(_dependency4.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency5.EBTM.ENTER_EXPECT_LV2
              }
            }), r.next = 17, Promise.all(s);
          case 17:
            return n.roundExtraList = [], n.ndExtraContainer.destroyAllChildren(), e.forEach(function (t) {
              var e = n.cloneWinSymbol(t, n.ndExtraContainer);
              e.playExtraAnim(_dependency12.ESymbolAnimType.TWIST), n.roundExtraList.push(e);
            }), n.isEnableDark(!0), r.next = 23, n.sleep(1.6);
          case 23:
            dispatch(_dependency4.GameEvent.STOP_BTM, {
              data: _dependency5.EBTM.ENTER_EXPECT_LV1
            }), dispatch(_dependency4.GameEvent.STOP_BTM, {
              data: _dependency5.EBTM.ENTER_EXPECT_LV2
            });
          case 25:
            if (s = [], n.dropReelListTemp = [], n.dropReelListTemp = n.getReelsAddDropList(t), _dependency5.default.isTurbo || 3 !== e.length) {
              r.next = 41;
              break;
            }
            d = 0;
          case 30:
            if (!(d < l.length)) {
              r.next = 39;
              break;
            }
            if (!(c[d] && l[d].length > 0)) {
              r.next = 36;
              break;
            }
            return m = null == (f = n.ndDropContainer[d]) ? void 0 : f.getChildByName("content"), 0 === d && (n.hasTopWild() && n.showTopWild().then(function () {
              s.push(n.playTopWildAni());
            }), n.hasTopRate() && n.showTopRate().then(function () {
              s.push(n.playTopRateAni());
            })), r.next = 36, n.dropReelsToDown(d, m, !0, n.dropReelListTemp[d]);
          case 36:
            d++, r.next = 30;
            break;
          case 39:
            r.next = 42;
            break;
          case 41:
            for (T = l.length - 1; T >= 0; T--) c[T] && (S = null == (y = n.ndDropContainer[T]) ? void 0 : y.getChildByName("content"), s.push(n.dropReelsToDown(T, S, !0, n.dropReelListTemp[T]))), 0 === T && (n.hasTopWild() && n.showTopWild().then(function () {
              s.push(n.playTopWildAni());
            }), n.hasTopRate() && n.showTopRate().then(function () {
              s.push(n.playTopRateAni());
            }));
          case 42:
            return r.next = 44, Promise.all(s);
          case 44:
            o(!0);
          case 45:
          case "end":
            return r.stop();
        }
      }, r);
    })));
  }, c.playExtraAnim = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var r;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return Log.d("%c playExtraAnim", _dependency7.getKeyStyle(_dependency7.KeyStyle.Function)), t.roundExtraList = [], t.getExtraSymbolList().forEach(function (e) {
              t.roundExtraList.push(t.allReelsPositionMap.get(e.position));
            }), t.ndExtraContainer.destroyAllChildren(), t.roundExtraList.length < 4 && (t.roundExtraList = [], n(!0)), r = t.roundExtraList.map(function (e) {
              return t.cloneWinSymbol(e, t.ndExtraContainer).playExtraAnim(_dependency12.ESymbolAnimType.WIN);
            }), e.next = 10, Promise.all(r);
          case 10:
            n(!0);
          case 11:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.playExtraAnimStatus = function () {
    var t = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var r, o, a, s, l, c, u, p;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            r = Array.from(t.allReelsPositionMap.values()).filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
            }), o = Array.from(t.allReelsPositionMap.values()).filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
            }), a = r.length >= 3 ? [].concat(r) : o.length >= 3 ? [].concat(o) : [], s = t.data.getData().parser.currentGameState.freeGameCount, l = t.data.getData().parser.currentSpinIndex, c = t.data.getData().gameState[l + 1], u = !c || s !== c.freeGameCount, p = _dependency12.ESymbolAnimType.IDLE, e.t0 = t.data.currentGameType, e.next = e.t0 === _dependency13.EGameType.MAIN_GAME ? 11 : e.t0 === _dependency13.EGameType.FREE_GAME ? 13 : 15;
            break;
          case 11:
            return c || 3 === a.length && t.cloneExtraSymbol(a, p).then(function () {
              n(!0);
            }), e.abrupt("break", 15);
          case 13:
            return u && 3 === a.length && t.cloneExtraSymbol(a, p).then(function () {
              n(!0);
            }), e.abrupt("break", 15);
          case 15:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, c.cloneExtraSymbol = function (t, e) {
    var n = this;
    return void 0 === e && (e = _dependency12.ESymbolAnimType.TWIST), new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function r(o) {
      var a;
      return _dependency.regeneratorRuntime().wrap(function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return n.roundExtraList = [], n.ndExtraContainer.destroyAllChildren(), a = t.map(function (t) {
              var r = n.cloneWinSymbol(t, n.ndExtraContainer);
              return n.roundExtraList.push(r), r.playExtraAnim(e);
            }), r.next = 5, Promise.all(a);
          case 5:
            o(!0);
          case 6:
          case "end":
            return r.stop();
        }
      }, r);
    })));
  }, c.getTotalWinSymbols = function () {
    for (var t, e = this.data.getData().parser.currentGameState, n = e.winSymbols, r = e.groupSymbols, o = e.groupUpgrade, a = [], i = _dependency.createForOfIteratorHelperLoose(n); !(t = i()).done;) {
      var l = t.value;
      a.push(l.symbolPos);
      for (var c, u = _dependency.createForOfIteratorHelperLoose(l.symbolPos); !(c = u()).done;) for (var p, h = c.value, d = _dependency.createForOfIteratorHelperLoose(r); !(p = d()).done;) {
        var f = p.value;
        if (f.symbolPos.includes(h)) {
          a.push(f.symbolPos);
          break;
        }
      }
    }
    var m = [];
    a.forEach(function (t) {
      m = m.concat(t);
    }), m = Array.from(new Set(m));
    var T = [].concat(m);
    return o && o.length > 0 && o.forEach(function (t) {
      t.symbolPos.forEach(function (t) {
        var e = T.indexOf(t);
        e > -1 && T.splice(e, 1);
      });
    }), T;
  }, c.getReelsDropCount = function (t) {
    var e = this;
    t.forEach(function (t) {
      e.allReelsPositionMap.get(t).symbolID = -1;
    });
    var n = [];
    return this.slotReels.map(function (t, r) {
      var o = [];
      t.isEnableScrollLayout(!1), t.symbols.map(function (t, e) {
        var n = t.symbolID > 0 ? 0 : t.symbolID;
        0 === r ? e < 4 && o.push(n) : e < 5 && o.push(n);
      }), n[r] = e.convertSymbolDropPos(o);
    }), n;
  }, c.getReelsAddDropList = function (t) {
    var e = this.data.getData().parser.currentViewMap,
      n = new Map();
    return t.map(function (t) {
      var r = e.get(t);
      n.set(t, r);
    }), Array.from({
      length: 7
    }, function (t, e) {
      return Array.from(n.values()).filter(function (t) {
        return t.reelIndex === e;
      });
    }).map(function (t, n) {
      if (0 === t.length) return [];
      var r = Array.from(e.values()).filter(function (e) {
        return e.reelIndex == t[0].reelIndex;
      });
      return 0 === n && r.reverse(), r.splice(0, t.length);
    });
  }, c.createDropReels = function (t) {
    var e = this,
      n = new Map();
    t.forEach(function (t, r) {
      var o,
        a = null == (o = e.ndDropContainer[r]) ? void 0 : o.getChildByName("content");
      a && (a.removeAllChildren(), t.sort(function (t, e) {
        return e.position - t.position;
      }), t.forEach(function (t) {
        if (0 !== t.groupCount) {
          var r = e.symbolPrefab,
            o = _dependency2.instantiate(r);
          o.active = !0, o.parent = a;
          var i = o.getComponent(_dependency0.GameSlotSymbol);
          i.initData(), i.symbolLabels = xt.slice(), i.groupCount = t.groupCount, i.symbolID = t.symbolID, t.symbolID === _dependency12.EBackendSymbolID.RATE && (i.rate = 2), i.level = t.level, i.symbolPosition = t.position, n.set(t.position, i);
        }
      }), a.getComponent(_dependency2.Layout).enabled = !0, a.getComponent(_dependency2.Layout).updateLayout(), a.active = !1);
    }), this.parserSymbolGroup(n);
  }, c.playScatterWin = function (t) {
    var e = this;
    return new Promise(function (n) {
      switch (e.isEnableDark(!1), t) {
        case _dependency12.EBackendSymbolID.SCATTER:
          dispatch(_dependency4.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency5.EBTM.SCATTER_WIN
            }
          });
          break;
        case _dependency12.EBackendSymbolID.JACKPOT:
          dispatch(_dependency4.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency5.EBTM.JACKPOT_WIN
            }
          });
      }
      var r = Array.from(e.allReelsPositionMap.values()).filter(function (e) {
        return e.symbolID === t;
      });
      e.ndWinSymbolsContainer.destroyAllChildren(), e.roundExtraList = [], e.ndExtraContainer.destroyAllChildren(), r.map(function (t) {
        return e.cloneWinSymbol(t, e.ndExtraContainer);
      }).forEach(function (t, e) {
        t.playScatterWinAnim(function () {
          e === r.length - 1 && n(!0);
        });
      });
    });
  }, c.coverRefreshView = function (t) {
    var e = this;
    return this.isEnableDark(!1, 0), new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n(r) {
      var o, a, s, l;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return e.setReelResult(), e.ndDropContainer.forEach(function (t, e) {
              var n = t.getChildByName("content");
              n.removeAllChildren(), 0 === e ? n.x = 472 : n.y = 500;
            }), e.allReelsPositionMap.forEach(function (t) {
              t.symbolID === _dependency12.EBackendSymbolID.RATE && (t.rate = 0);
            }), t.forEach(function (t, n) {
              t.forEach(function (t) {
                t.symbolID === _dependency12.EBackendSymbolID.RATE && (e.allReelsPositionMap.get(t.position).rate = 2);
              });
            }), n.next = 6, e.awaitViewDateTime(.0618);
          case 6:
            e.isNeedExpect && (o = Array.from(e.allReelsPositionMap.values()).filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
            }), a = Array.from(e.allReelsPositionMap.values()).filter(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
            }), s = o.length >= 3 ? [].concat(o) : a.length >= 3 ? [].concat(a) : [], l = t.map(function (t) {
              return o.length >= 3 ? t.filter(function (t) {
                return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
              }) : a.length >= 3 ? t.filter(function (t) {
                return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
              }) : void 0;
            }), s.forEach(function (t) {
              l.forEach(function (e) {
                e.forEach(function (e) {
                  t.symbolPosition === e.position && s.splice(s.indexOf(t), 1);
                });
              });
            }), e.roundExtraList = [], e.ndExtraContainer.destroyAllChildren(), s.forEach(function (t) {
              e.cloneWinSymbol(t, e.ndExtraContainer).playExtraAnim(_dependency12.ESymbolAnimType.TWIST);
            })), e.getAllExtraIdleSymbol().forEach(function (t) {
              var n = e.allReelsPositionMap.get(t.position);
              e.cloneWinSymbol(n, e.ndExtraIdleContainer).playExtraAnim(_dependency12.ESymbolAnimType.IDLE);
            }), e.setExtraSymbolToTop(), e.ndDropTop.active = !1, e.ndDropBottom.active = !1, r(!0);
          case 13:
          case "end":
            return n.stop();
        }
      }, n);
    })));
  }, c.queueSlotReelDrop = function (t, e, n) {
    var r = this;
    return void 0 === n && (n = []), new Promise(function (o) {
      var a = [],
        i = -1;
      t.symbols.forEach(function (o, s) {
        if (!(e[s] <= 0)) {
          var l = t.scrollDirection === _dependency10.EScrollDirection.LEFT ? "x" : "y",
            c = e[s] * ("x" === l ? r._symbolWidth : r._symbolHeight);
          if (n.length > 0) {
            var u = n.find(function (t) {
              return t.symbolPosition === o.symbolPosition;
            });
            u && a.push(r.dropSymbolToDown(u.node, l, c));
          }
          i !== t.reelIndex ? (a.push(r.dropSymbolToDown(o.node, l, c, !0)), i = t.reelIndex) : a.push(r.dropSymbolToDown(o.node, l, c));
        }
      }), Promise.all(a).then(function () {
        o(!0);
      });
    });
  }, c.dropSymbolToDown = function (t, e, n, r, o) {
    var a = this;
    return void 0 === r && (r = !1), void 0 === o && (o = !1), new Promise(function (i) {
      var s,
        l,
        c,
        u = a.dropPropsSetting,
        p = t[e] - n;
      _dependency2.Tween.stopAllByTarget(t), _dependency2.tween(t).bindNodeState(false).to(u.durations[0], (s = {}, s[e] = p, s), {
        easing: "sineIn"
      }).to(u.durations[1], (l = {}, l[e] = p + u.offset, l), {
        easing: "linear"
      }).to(u.durations[2], (c = {}, c[e] = p, c), {
        easing: "linear"
      }).call(function () {
        i(!0);
      }).start(), (r || o) && _dependency2.tween(t).bindNodeState(false).delay(u.durations[0]).call(function () {
        o && dispatch(_dependency4.GameEvent.PLAY_REPEAT_BTM, {
          data: {
            url: _dependency5.EBTM.ENTER_EXPECT_DROP
          }
        });
      }).start();
    });
  }, c.dropReelsToDown = function (t, e, n, r) {
    var o = this;
    return void 0 === n && (n = !1), void 0 === r && (r = null), new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function a(s) {
      var l, c, u, p, h, d, f, m;
      return _dependency.regeneratorRuntime().wrap(function (a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (l = e.getComponent(_dependency2.UITransform), c = 0 === t ? l.width : l.height, u = 0 === t ? "x" : "y", 0 === e.children.length && s(!0), e.active = !0, !((p = r.slice()).length > 0)) {
              a.next = 14;
              break;
            }
            return h = p.some(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.SCATTER;
            }), d = p.some(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.JACKPOT;
            }), f = p.some(function (t) {
              return t.symbolID === _dependency12.EBackendSymbolID.WILD;
            }), m = o.dropPropsSetting, _dependency2.tween(o.node).bindNodeState(false).delay(m.durations[0]).call(function () {
              o.checkReelsDropMusic(h, d, f);
            }).start(), a.next = 14, o.dropSymbolToDown(e, u, c, n, n);
          case 14:
            s(!0);
          case 15:
          case "end":
            return a.stop();
        }
      }, a);
    })));
  }, c.getViewMapBySymbolID = function (t) {
    var e = this.data.getData().parser.currentViewMap;
    return Array.from(e.values()).filter(function (e) {
      return e.symbolID === t;
    });
  }, c.getCurrentViewIsNeedExpect = function () {
    var t = this.getViewMapBySymbolID(_dependency12.EBackendSymbolID.SCATTER),
      e = this.getViewMapBySymbolID(_dependency12.EBackendSymbolID.JACKPOT);
    return t.length >= 3 || e.length >= 3;
  }, c.getExtraSymbolList = function () {
    var t = this.getViewMapBySymbolID(_dependency12.EBackendSymbolID.SCATTER),
      e = this.getViewMapBySymbolID(_dependency12.EBackendSymbolID.JACKPOT);
    return t.length >= 3 ? [].concat(t) : e.length >= 3 ? [].concat(e) : [];
  }, c.getAllExtraIdleSymbol = function () {
    var t = this.getViewMapBySymbolID(_dependency12.EBackendSymbolID.SCATTER),
      e = this.getViewMapBySymbolID(_dependency12.EBackendSymbolID.JACKPOT);
    return [].concat(t, e);
  }, c.getClearSymbols = function () {
    var t = this.data.getData().parser.currentGameState.winSymbols,
      e = this.data.getData().parser.currentGameState.groupUpgrade,
      n = JSON.parse(JSON.stringify(t));
    return e && e.map(function (t) {
      var e = t.symbolPos.length,
        r = t.symbolPos[e - 1];
      n.map(function (t) {
        var e = t.symbolPos.indexOf(r);
        -1 != e && t.symbolPos.splice(e, 1);
      });
    }), n;
  }, c.convertSymbolDropPos = function (t) {
    for (var e = Array.from(Array(t.length), function (t, e) {
        return 0;
      }), n = 0, r = t.length - 1; r >= 0; r--) -1 === t[r] ? (n++, -1 !== t[r - 1] && (e[r - 1] = n)) : -1 !== t[r] && -1 !== t[r - 1] && (e[r - 1] = n);
    return e;
  }, c.parserSymbolGroup = function (t) {
    var e = this.data.getData().parser.currentGameState.groupSymbols;
    e && e.map(function (e) {
      for (var n = e.symbolPos.length, r = 0; r < n; r++) {
        var o = t.get(e.symbolPos[r]);
        o && (o.groupCount = n, o.level = e.level, o.symbolID = r === n - 1 ? e.symbol : 0);
      }
    });
  }, c.parserSymbolLevel = function (t) {
    var e = this.data.getData().parser.currentGameState.groupUpgrade;
    e && e.map(function (e) {
      var n = e.symbolPos.length,
        r = e.symbolPos[n - 1];
      t.get(r).level = e.afterLevel;
    });
  }, c.checkAllReelStatus = function (t) {
    return this.slotReels.every(function (e) {
      return e.status == t;
    });
  }, c.sumArray = function (t) {
    return t.map(function (t) {
      return t;
    }).reduce(function (t, e) {
      return t + e;
    }, 0);
  }, c.deepCopyMap = function (t) {
    var e = new Map();
    return t.forEach(function (t, n) {
      t && "object" == typeof t ? e.set(n, JSON.parse(JSON.stringify(t))) : e.set(n, t);
    }), e;
  }, c.sleep = function (t) {
    var e = this;
    return new Promise(function (n) {
      _dependency2.Tween.stopAllByTarget(e), _dependency2.tween(e).bindNodeState(false).delay(t).call(function () {
        n(!0);
      }).start();
    });
  }, c.delayTime = function (t, e) {
    return new Promise(function (n) {
      _dependency2.tween(e).bindNodeState(false).delay(t).call(function () {
        n(!0);
      }).start();
    });
  }, c.awaitViewDateTime = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.sleep(t).then(function () {
        n(!0);
      });
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }, {
    key: "winRate",
    get: function () {
      return this._winRate;
    },
    set: function (t) {
      this._winRate = t, this.txtRateTitle.string = "x" + t.toString();
    }
  }, {
    key: "currStopReel",
    get: function () {
      return this._currStopReel;
    },
    set: function (t) {
      this._currStopReel = t;
    }
  }, {
    key: "frameOutCount",
    get: function () {
      return this._frameOutCount;
    },
    set: function (t) {
      this._frameOutCount = t, this.frameOutLv = Math.round(t / 2), this.frameOutLv > 5 && (this.frameOutLv = 5), Log.d("%c 消除次數: " + t + " 消除等級: " + this.frameOutLv, _dependency7.getKeyStyle(_dependency7.KeyStyle.Watch));
    }
  }, {
    key: "rateToScoreCount",
    get: function () {
      return this._reteToScoreCount;
    },
    set: function (t) {
      this._reteToScoreCount = t, this.rateToScoreLv = t <= 2 ? 1 : t <= 4 ? 2 : 3;
    }
  }]), e;
}(_dependency8.default)).prototype, "slotReels", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ut = _dependency.applyDecoratedDescriptor(lt.prototype, "symbolPrefab", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(lt.prototype, "ndExtraIdleContainer", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(lt.prototype, "ndDark", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(lt.prototype, "ndDropContainer", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ft = _dependency.applyDecoratedDescriptor(lt.prototype, "ndTopWild", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(lt.prototype, "ndTopRate", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(lt.prototype, "ndRateContainer", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(lt.prototype, "txtRateTitle", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(lt.prototype, "rateEffect", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Et = _dependency.applyDecoratedDescriptor(lt.prototype, "ndWinSymbolsContainer", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Rt = _dependency.applyDecoratedDescriptor(lt.prototype, "ndFrameOutContainer", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = _dependency.applyDecoratedDescriptor(lt.prototype, "ndExtraContainer", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(lt.prototype, "slotRollers", [at], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Lt = _dependency.applyDecoratedDescriptor(lt.prototype, "ndExpectAnimList", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), st = lt)) || st));
_dependency2.cclegacy._RF.pop();

// Owned local resume preconditions; original collector and animation methods stay intact.
import { EDITOR as __localRateEditor } from "cc/env";
import { installProjectFNativeRateCompatibility as __installNativeRateCompatibility } from "../backend/InstallNativeRateCompatibility";
if (!__localRateEditor) __installNativeRateCompatibility(_export, { UIOpacity: _dependency2.UIOpacity });
