// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "./g1011-GameConfigModel";
import * as _dependency8 from "./g1011-GameData";
import * as _dependency9 from "./g1011-GameEvent";
import * as _dependency0 from "../../shared/scripts/main-CmmUtils";
import * as _dependency1 from "./g1011-WinCash";
import * as _dependency10 from "../../shared/scripts/slotFramework-type2";
import * as _dependency11 from "../../shared/scripts/main-ReelSetting";
import * as _dependency12 from "../../shared/scripts/main-ReelEnum";
import * as _dependency13 from "../../shared/scripts/main-ReelEvent";
import * as _dependency14 from "./g1011-GameSingleReel";
import * as _dependency15 from "./g1011-GameSymbol";
import * as _dependency16 from "./g1011-GameSymbolID";
import * as _dependency17 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency18 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency19 from "../../shared/scripts/slotFramework-MathUtil";
var _export;
export { _export as WILD_ANIME_NAME };
var _export2;
export { _export2 as WinLineView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WILD_ANIME_NAME":
      _export = value;
      break;
    case "WinLineView":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, s, l, r, o, c, u, h, _, d, S, f, p, L, C, m, W, w, E, T, A, v, I, b, g, N, R, P, F, y, D, O, k, M, B, H, x, U, K;
var X, Y, G, V, z, q, j, Q, Z, J, $, tt, et, it, nt, at, st, lt, rt, ot, ct, ut, ht, _t, dt, St, ft, pt, Lt, Ct, mt, Wt, wt, Et, Tt, At, vt, It, bt, gt;
_publish("WILD_ANIME_NAME", void 0), _dependency2.cclegacy._RF.push({}, "73657sVTn9NP7ZCXO2VCO+2", "WinLineView", void 0), function (t) {
  t.IN = "in", t.WIN = "win";
}(gt || (gt = _publish("WILD_ANIME_NAME", {})));
var Nt = _dependency2._decorator.ccclass,
  Rt = (_dependency2._decorator.property, _dependency2._decorator.disallowMultiple);
_publish("WinLineView", (X = Nt("WinLineView"), Y = Rt(), G = _dependency4.inject("bbr", _dependency2.Node), V = _dependency4.inject("content", _dependency2.Node), z = _dependency4.inject("content/tempSymbolAnimContent", _dependency2.Node), q = _dependency4.inject("content/winLineContent", _dependency2.Node), j = _dependency4.inject("content/wildContent/wildAnim_0", _dependency2.Node), Q = _dependency4.inject("content/wildContent/wildAnim_1", _dependency2.Node), Z = _dependency4.inject("content/wildContent/wildAnim_2", _dependency2.Node), J = _dependency4.inject("content/wildContent/wildAnim_3", _dependency2.Node), $ = _dependency4.inject("content/wildContent/wildAnim_4", _dependency2.Node), tt = _dependency4.inject("content/wildFrameContent", _dependency2.Node), et = _dependency4.inject("scarf", _dependency2.Node), it = _dependency4.inject("content/scatterContent/ScatterReel_0", _dependency14.GameSingleReel), nt = _dependency4.inject("content/scatterContent/ScatterReel_1", _dependency14.GameSingleReel), at = _dependency4.inject("content/scatterContent/ScatterReel_2", _dependency14.GameSingleReel), st = _dependency4.inject("content/scatterContent/ScatterReel_3", _dependency14.GameSingleReel), lt = _dependency4.inject("content/scatterContent/ScatterReel_4", _dependency14.GameSingleReel), rt = _dependency4.inject("wildLockContent", _dependency2.Node), X(ot = Y(((bt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "content", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "tempSymbolAnimContent", _t, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "winLineContent", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "wildAnim_0", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "wildAnim_1", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "wildAnim_2", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "wildAnim_3", Lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "wildAnim_4", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "wildFrameContent", mt, _dependency.assertThisInitialized(e)), e._wildTransformCbList = [null, null, null, null, null], e._scarfDoneList = [!1, !1, !1, !1, !1], e._scarfWaitCbList = [null, null, null, null, null], e._scarfWaitTimeoutCbList = [null, null, null, null, null], _dependency.initializerDefineProperty(e, "_scarfTemplate", Wt, _dependency.assertThisInitialized(e)), e._scarfNodes = [], e._scarfTimeoutCbList = [null, null, null, null, null], _dependency.initializerDefineProperty(e, "scatterReel_0", wt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "scatterReel_1", Et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "scatterReel_2", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "scatterReel_3", At, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "scatterReel_4", vt, _dependency.assertThisInitialized(e)), e.scatterReelSetting = null, e._scatterScrollCount = 0, e._scatterScrolling = !1, e._scatterWinReelSet = new Set(), e.expectOverlayList = [], e.wildFrameList = [], e._wildFrames = [], e._wildWinCbList = [null, null, null, null, null], _dependency.initializerDefineProperty(e, "wildLockContent", It, _dependency.assertThisInitialized(e)), e.wildLockList = [], e._wildLockCbList = [null, null, null, null, null], e._wildFrameCbList = [null, null, null, null, null], e._wildFrameStepList = [null, null, null, null, null], e._isSkipWinLine = !1, e._winPresentStageCbs = [], e._winPresentSymbolsDone = !1, e._winPresentCashDone = !1, e._winPresentFinishFallbackCb = null, e._skipHoldCb = null, e._isClickSkipWinLine = !1, e._winCashNode = null, e._totalWinCashDelayCb = null, e._totalWinCashDelayDone = !1, e._totalWinCashNode = null, e.skipTotalWinCashTween = null, e.tweenNumber = null, e.winLineCallBack = null, e.spinStatus = _dependency10.ESpinStatus.IDLE, e._wildPresentPollCb = null, e._wildInSfxPlayed = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, c.start = function () {
    this.init();
  }, c.onDestroy = function () {
    this.stopAllScarf(), this.cancelWildPresentPoll(), this.cancelSkipHold(), this.removeEvents(), t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/WinLineView";
  }, c.init = function () {
    this.initScatterReels(), this.initExpectOverlay(), this.initWildFrame(), this.initWildLock(), this.initScarf();
  }, c.getLineNode = function (t) {
    var e,
      i = null == (e = this.winLineContent) ? void 0 : e.getChildByName("line_" + t);
    return i || Log.e("找不到中獎線節點 line_" + t), i;
  }, c.showWinSummary = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
      var i = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            Log.d("%c showWinSummary ", _dependency17.getKeyStyle(_dependency17.KeyStyle.Watch), e), this._isSkipWinLine = !1, this._winCashNode = null, this._winPresentSymbolsDone = !1, this._winPresentCashDone = !1, !this.data.getData().parser.currentGameState.fullCombo && this.activeBBR(!0), dispatch(_dependency9.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency7.EBTM.SFX_LINE_WIN
              }
            }), this.playAllWinLines(e), dispatch(_dependency9.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
              data: e,
              complete: function () {
                i._winPresentSymbolsDone = !0, i.scheduleWinPresentFinishFallback(), i.tryFinishWinPresent();
              }
            });
          case 10:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), c.tryFinishWinPresent = function () {
    this._isSkipWinLine || this._winPresentSymbolsDone && this._winPresentCashDone && (this.cancelWinPresentFinishFallback(), this.activeBBR(!1), this.clearWinLine(), dispatch(_dependency9.GameEvent.HIDE_SYMBOLS_WIN), this.fadeOutTotalWinCash(.4, function () {}), dispatch(_dependency9.GameEvent.SHOW_WIN_SUMMARY_END));
  }, c.scheduleWinPresentFinishFallback = function () {
    var t = this;
    this.cancelWinPresentFinishFallback();
    var i = function () {
      t._winPresentFinishFallbackCb = null, t._winPresentCashDone || (Log.w("中獎演出收尾：等不到贏分的回呼，直接收線與符號"), t._winPresentCashDone = !0, t.tryFinishWinPresent());
    };
    this._winPresentFinishFallbackCb = i, this.scheduleOnce(i, e.WIN_PRESENT_FINISH_FALLBACK);
  }, c.cancelWinPresentFinishFallback = function () {
    this._winPresentFinishFallbackCb && (this.unschedule(this._winPresentFinishFallbackCb), this._winPresentFinishFallbackCb = null);
  }, c.showWinLineCycle = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
      var i,
        n = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            this.activeBBR(!0), i = 0, this._isSkipWinLine = !1, dispatch(_dependency9.GameEvent.CAN_SKIP_WIN_LINE), this.winLineCallBack = function () {
              i++, dispatch(_dependency9.GameEvent.HIDE_SYMBOLS_WIN), n.clearWinLine(), i < e.length || (i = 0), n.showSingWinLine(e[i], n.winLineCallBack);
            }, this.showSingWinLine(e[i], this.winLineCallBack);
          case 6:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), c.showSingWinLine = function (t, e) {
    var i = this;
    this.activeBBR(!0);
    t.symbol;
    var n = t.winLine,
      a = t.winnings,
      s = n + 1,
      l = this.getLineNode(s);
    l && (l.active = !0), this.showWinCash(a, this.getWinCashPos(s)), dispatch(_dependency9.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
      data: [t],
      complete: function () {
        l && (l.active = !1), dispatch(_dependency9.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency9.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT), i._winCashNode && (i._winCashNode.parent = null), _dependency2.tween(i).bindNodeState(false).delay(_dependency7.default.tempoConfig.animStagger).call(function () {
          i.activeBBR(!1), e && e();
        }).start();
      }
    });
  }, c.scheduleWinPresentStage = function (t, i) {
    var n = this,
      a = function t() {
        n._winPresentStageCbs = n._winPresentStageCbs.filter(function (e) {
          return e !== t;
        }), i();
      };
    this._winPresentStageCbs.push(a), this.scheduleOnce(a, e.WIN_PRESENT_STAGE_DELAY * t);
  }, c.cancelWinPresentStages = function () {
    for (var t, e = _dependency.createForOfIteratorHelperLoose(this._winPresentStageCbs); !(t = e()).done;) {
      var i = t.value;
      this.unschedule(i);
    }
    this._winPresentStageCbs = [], this.cancelWinPresentFinishFallback(), this._winPresentSymbolsDone = !1, this._winPresentCashDone = !1;
  }, c.cancelPendingTotalWinCashDelay = function () {
    this._totalWinCashDelayCb && (this.unschedule(this._totalWinCashDelayCb), this._totalWinCashDelayCb = null);
  }, c.skipWinLine = function () {
    this.stopWinPresentBtm();
    var t = !this._totalWinCashNode;
    this.cancelWinPresentStages();
    var e = !this._totalWinCashDelayDone;
    this.cancelPendingTotalWinCashDelay(), e && this.quickStopTotalWinnings(), this._isSkipWinLine = !0, this._isClickSkipWinLine = !0, this._winCashNode && (this._winCashNode.removeFromParent(), this._winCashNode = null), this.data.getData().parser.currentGameState.fullCombo || this.activeBBR(!0), t && (this.showAllWinLinesInstant(), this.showTotalWinCashInstant()), this.liftWinSymbolsIfNeeded();
  }, c.liftWinSymbolsIfNeeded = function () {
    if (!(this.data.tempAnimTopMap.size > 0)) {
      var t = this.data.getData().parser.winSymbols;
      t && 0 !== t.length && dispatch(_dependency9.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
        data: t,
        complete: function () {}
      });
    }
  }, c.scheduleSkipHold = function () {
    var t = this;
    if (!this._skipHoldCb) {
      var i = function () {
        t._skipHoldCb = null, dispatch(_dependency9.GameEvent.SHOW_WIN_SUMMARY_END);
      };
      this._skipHoldCb = i, this.scheduleOnce(i, e.SKIP_HOLD);
    }
  }, c.flushSkipHold = function () {
    var t = this._skipHoldCb;
    t && (this.unschedule(t), t());
  }, c.cancelSkipHold = function () {
    this._skipHoldCb && (this.unschedule(this._skipHoldCb), this._skipHoldCb = null);
  }, c.showAllWinLinesInstant = function () {
    var t = this.data.getData().parser.winSymbols;
    if (t && 0 !== t.length) for (var e, i = _dependency.createForOfIteratorHelperLoose(t); !(e = i()).done;) {
      var n = e.value.winLine,
        a = this.getLineNode(n + 1);
      a && (a.active = !0);
    }
  }, c.showTotalWinCashInstant = function () {
    if (!this._totalWinCashNode) {
      var t = this.data.getData().parser.currentGameState,
        e = t.totalWinnings,
        i = t.currentWinnings,
        n = t.action,
        a = t.startFreeGame,
        s = "freeSpin" === n || a ? i : e,
        l = this.data.getData().definition.digital,
        r = App.cache.get(this.data.module, _dependency7.default.getData().filePaths.winCashPrefab).data,
        o = _dependency2.instantiate(r);
      this._totalWinCashNode = o;
      var c = o.getComponent(_dependency1.WinCash).number;
      c.fontSize = 110, c.color = new _dependency2.Color(255, 255, 255, 255);
      var u = Number(_dependency6.CmmSlotUtils.formatNumber(s, !1, !1, l));
      c.string = _dependency6.CmmSlotUtils.formatNumber(u, !1, !0, l), o.setParent(this.content), o.setScale(_dependency2.Vec3.ONE);
    }
  }, c.quickStopTotalWinnings = function () {
    var t = this.data.getData().parser.currentGameState.totalWinnings;
    dispatch(_dependency9.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: t
    });
  }, c.stopWinPresentBtm = function () {
    dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.SFX_SCORE
    }), dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.SFX_LINE_WIN
    }), dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.SFX_FREE_WIN
    }), dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.SFX_FREE_MULTIPLE
    });
  }, c.cleanupWinCashNodes = function () {
    this._winCashNode && (this._winCashNode.removeFromParent(), this._winCashNode = null), this._totalWinCashNode && (_dependency2.Tween.stopAllByTag(_dependency0.CmmUtils.hashCode("playTotalWinCashTween")), this.tweenNumber && (this.tweenNumber.stop(), this.tweenNumber = null), this._totalWinCashNode.destroy(), this._totalWinCashNode = null);
  }, c.clearWinLine = function () {
    var t;
    null == (t = this.winLineContent) || t.children.forEach(function (t) {
      return t.active = !1;
    }), dispatch(_dependency9.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT);
  }, c.fadeOutTotalWinCash = function (t, e) {
    void 0 === t && (t = .4), void 0 === e && (e = null);
    var i = this._totalWinCashNode;
    if (i) {
      var n = i.getComponent(_dependency1.WinCash).number.color;
      i.getComponent(_dependency1.WinCash).number.color = new _dependency2.Color(n.r, n.g, n.b, 255);
      var a = i.getComponent(_dependency1.WinCash).background.node.getComponent(_dependency2.UIOpacity);
      a.opacity = 255, _dependency2.tween(n).bindNodeState(false).to(t, {
        a: 0
      }, {
        easing: "cubicOut"
      }).call(function () {
        e && e();
      }).start(), _dependency2.tween(a).bindNodeState(false).to(t, {
        opacity: 0
      }, {
        easing: "cubicOut"
      }).call(function () {
        i.parent = null;
      }).start();
    } else e && e();
  }, c.playAllWinLines = function (t) {
    var e = this,
      i = 30;
    t.map(function (t, n) {
      n % 2 == 0 && i--;
      var a = n * i / 1e3;
      _dependency2.tween(e).bindNodeState(false).delay(a).call(function () {
        var i = t.winLine,
          n = e.getLineNode(i + 1);
        n && (n.active = !0);
      }).start();
    });
  }, c.showWinCash = function (t, e) {
    if (0 !== t) {
      var i = App.cache.get(this.data.module, _dependency7.default.getData().filePaths.winCashPrefab).data,
        n = _dependency2.instantiate(i);
      n.setScale(new _dependency2.Vec3(.4, .4, .4)), this._winCashNode = n;
      var a = n.getComponent(_dependency1.WinCash).number;
      a.color = new _dependency2.Color(255, 255, 255, 255), n.setParent(this.content), n.setPosition(e), a.string = _dependency6.CmmSlotUtils.formatNumber(t);
    }
  }, c.showTotalWinCashStage = function () {
    var t = this,
      e = this.data.getData().parser.currentGameState,
      i = e.totalWinnings,
      n = e.currentWinnings,
      a = e.action,
      s = e.startFreeGame,
      l = "freeSpin" === a || s ? n : i;
    this.showTotalWinCash(l, function () {
      t._isClickSkipWinLine = !1, t._winPresentCashDone = !0, t.tryFinishWinPresent();
    });
  }, c.showTotalWinCash = function (t, e) {
    var i = this;
    this.tweenNumber && this.tweenNumber.stop(), this._totalWinCashNode && (this._totalWinCashNode.destroy(), this._totalWinCashNode = null);
    var n = App.cache.get(this.data.module, _dependency7.default.getData().filePaths.winCashPrefab).data,
      a = _dependency2.instantiate(n);
    this._totalWinCashNode = a;
    var s = a.getComponent(_dependency1.WinCash).number;
    s.color = new _dependency2.Color(255, 255, 255, 0), a.setParent(this.content), a.setScale(new _dependency2.Vec3(.1, .1, .1));
    var l = this.data.getData().definition.digital,
      r = {
        label: s,
        start: 0,
        end: Number(_dependency6.CmmSlotUtils.formatNumber(t, !1, !1, l)),
        tweenTime: .01,
        digital: l,
        useThousandsSeparator: !0,
        callback: function () {
          s.color = new _dependency2.Color(255, 255, 255, 255), _dependency2.tween(i._totalWinCashNode).bindNodeState(false).to(.2, {
            scale: _dependency2.Vec3.ONE
          }).start(), i.cancelPendingTotalWinCashDelay(), i._totalWinCashDelayDone = !1, i._totalWinCashDelayCb = function () {
            i._totalWinCashDelayCb = null, i._totalWinCashDelayDone = !0, i.quickStopTotalWinnings(), dispatch(_dependency9.GameEvent.STOP_BTM, {
              data: _dependency7.EBTM.SFX_SCORE
            }), e && e();
          }, i.scheduleOnce(i._totalWinCashDelayCb, 1);
        }
      };
    dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.SFX_SCORE
      }
    }), this.tweenNumber = _dependency6.CmmSlotUtils.tweenNum(r), this.playTotalWinCashTween(a, .01), this.setSkipTotalWinCashTweenEvent(a);
  }, c.playTotalWinCashTween = function (t, e, i) {
    void 0 === i && (i = .01);
    var n = t.getComponent(_dependency1.WinCash),
      a = n.number.color;
    n.number.fontSize = 110, _dependency2.tween(n.node).bindNodeState(false).tag(_dependency0.CmmUtils.hashCode("playTotalWinCashTween")).to(e, {
      scale: _dependency2.Vec3.ONE
    }).call(function () {}).start(), _dependency2.tween(a).bindNodeState(false).tag(_dependency0.CmmUtils.hashCode("playTotalWinCashTween")).to(i, {
      a: 255
    }).start();
    var s = _dependency7.default.getData().filePaths.common,
      l = _dependency18.LoadUtils.getDirSp(this.data.module, s, "pe_star");
    n.playParticleBurst(l, 7);
  }, c.setSkipTotalWinCashTweenEvent = function (t) {
    var e = this;
    this.skipTotalWinCashTween = _dependency2.tween(t).bindNodeState(false).call(function () {
      _dependency2.Tween.stopAllByTag(_dependency0.CmmUtils.hashCode("playTotalWinCashTween")), e.stopWinPresentBtm(), t.getComponent(_dependency1.WinCash).number.color = new _dependency2.Color(255, 255, 255, 255), e._isClickSkipWinLine = !1, e.activeBBR(!1), t.destroy(), dispatch(_dependency9.GameEvent.SHOW_TOTAL_WIN_CASH_END);
    });
  }, c.activeBBR = function (t) {
    this.bbr.active = t, this.bbr.getComponent(_dependency2.UIOpacity).opacity = t ? 255 : 0;
  }, c.playFadeInBBR = function () {
    this.bbr.active = !0, _dependency0.CmmUtils.fadeInTween(this.bbr, .3);
  }, c.playFadeOutBBR = function () {
    var t = this;
    _dependency0.CmmUtils.fadeOutTween(this.bbr, 0, function () {
      t.bbr.active = !1;
    });
  }, c.getWinCashPos = function (t) {
    switch (t) {
      case 1:
      case 7:
      case 12:
      case 13:
      case 17:
      case 19:
      case 22:
      case 26:
      case 27:
      case 30:
      case 35:
      case 37:
      case 40:
        return new _dependency2.Vec3(0, 50, 0);
      case 2:
      case 8:
      case 11:
      case 14:
      case 18:
      case 20:
      case 21:
      case 25:
      case 28:
      case 29:
      case 36:
      case 38:
      case 39:
        return new _dependency2.Vec3(0, -80, 0);
      case 5:
      case 16:
      case 24:
        return new _dependency2.Vec3(0, -203, 0);
      case 3:
      case 6:
      case 9:
      case 15:
      case 23:
      case 31:
      case 33:
        return new _dependency2.Vec3(0, 185, 0);
      case 4:
      case 10:
      case 32:
      case 34:
        return new _dependency2.Vec3(0, -215, 0);
    }
    return _dependency2.Vec3.ZERO;
  }, c.initScatterReels = function () {
    var t = this,
      i = _dependency7.default.getData().filePaths.symbolPrefab,
      n = App.cache.get(this.data.module, i).data,
      a = new _dependency11.ReelSetting();
    a.speedUp = .66, a.symbolSetting.symbolWidth = 144, a.symbolSetting.symbolHeight = 165, a.symbolSetting.symbolAnchor = new _dependency2.Vec2(.5, .5), a.symbolNode = _dependency2.instantiate(n), this.scatterReelSetting = a;
    var s = this.scatterReelList;
    s.forEach(function (i, n) {
      i && (i.strip = n, i.isLastStrip = n === s.length - 1, i.singleReelSetting.randomSymbolList = t.buildScatterStrip(e.SCATTER_REEL_INDEXES.includes(n)), i.singleReelSetting.initSymbolIdList = t.buildScatterStrip(!1).slice(0, i.singleReelSetting.getAllCount()), t.applyScatterOnlyFilter(i), i.init(a), i.node.on(_dependency13.SingleReelEvents.FINISH, function () {
        var e = t._scatterWinReelSet.has(n);
        i.symbolList.forEach(function (t) {
          var i = t.getComponent(_dependency15.GameSymbol);
          if (i && i.id === _dependency16.EBackendSymbolID.SCATTER) {
            var n = t.getComponent(_dependency2.UIOpacity);
            n && (n.opacity = 255), e || i.playLoopAnim();
          }
        }), dispatch(_dependency9.GameEvent.SCATTER_REEL_LANDED, {
          data: n
        });
      }), t.setScatterReelVisible(n, !1));
    });
  }, c.buildScatterStrip = function (t) {
    for (var i = e.SCATTER_APPEAR_RATE, n = e.SCATTER_STRIP_FILLER, a = Math.max(1, i - 1), s = [], l = 0; l < a; l++) s.push(n[l % n.length]);
    return t && (s[s.length - 1] = _dependency16.EBackendSymbolID.SCATTER), s;
  }, c.buildPeekScatterStrip = function () {
    for (var t = e.SCATTER_STRIP_FILLER, i = _dependency2.randomRangeInt(3, 7), n = _dependency2.randomRangeInt(1, i), a = [], s = 0; s < i; s++) a.push(s === n ? _dependency16.EBackendSymbolID.SCATTER : t[s % t.length]);
    return a;
  }, c.enterScatterPeekMode = function () {
    var t = this;
    e.SCATTER_REEL_INDEXES.forEach(function (e) {
      var i = t.scatterReelList[e];
      i && (i.singleReelSetting.randomSymbolList = t.buildPeekScatterStrip());
    });
  }, c.exitScatterPeekMode = function () {
    var t = this;
    e.SCATTER_REEL_INDEXES.forEach(function (e) {
      var i = t.scatterReelList[e];
      i && (i.singleReelSetting.randomSymbolList = t.buildScatterStrip(!0));
    });
  }, c.applyScatterOnlyFilter = function (t) {
    var i = this;
    t.initSymbol = function (t, n) {
      var a,
        s = t.getComponent(_dependency15.GameSymbol);
      s && s.unScheduleAllCallBack(), s && s.setSymbol(n);
      var l = null != (a = t.getComponent(_dependency2.UIOpacity)) ? a : t.addComponent(_dependency2.UIOpacity);
      n !== _dependency16.EBackendSymbolID.SCATTER || i._scatterScrollCount >= e.MAX_SCATTER_PER_SCROLL ? l.opacity = 0 : (i._scatterScrollCount++, l.opacity = 255);
    };
    var n = t.directShowStop.bind(t);
    t.directShowStop = function () {
      var e = t.status === _dependency12.EReelStatus.SCROLLING;
      n(), e && t.symbolList.forEach(function (t) {
        var e,
          i = t.getComponent(_dependency15.GameSymbol),
          n = i ? i.id : -1;
        (null != (e = t.getComponent(_dependency2.UIOpacity)) ? e : t.addComponent(_dependency2.UIOpacity)).opacity = n === _dependency16.EBackendSymbolID.SCATTER ? 255 : 0, n === _dependency16.EBackendSymbolID.SCATTER && i && i.playLoopAnim();
      });
    };
  }, c.playScatterReelWin = function () {
    for (var t, e = this.data.getWildCoveredCols(), i = _dependency.createForOfIteratorHelperLoose(e); !(t = i()).done;) {
      var n = t.value,
        a = this.scatterReelList[n];
      if (a) for (var l, r = _dependency.createForOfIteratorHelperLoose(a.getMidSymbolList()); !(l = r()).done;) {
        var o = l.value.getComponent(_dependency15.GameSymbol);
        o && o.id === _dependency16.EBackendSymbolID.SCATTER && (this._scatterWinReelSet.add(n), o.playScatterWinAnim());
      }
    }
  }, c.startScatterScroll = function () {
    var t = this;
    this._scatterScrollCount = 0, this._scatterScrolling = !0, this._scatterWinReelSet.clear(), this.scatterReelList.forEach(function (e, i) {
      e && e.status === _dependency12.EReelStatus.FINISH && (e.isLastStrip = i === t.scatterReelList.length - 1, e.startScroll());
    });
  }, c.setScatterReelResult = function () {
    this._scatterScrolling = !1;
    var t = this.data.getData().parser.reelResult;
    t && this.scatterReelList.forEach(function (e, i) {
      e && t[i] && e.setFinalIndex(void 0, t[i]);
    });
  }, c.setScatterReelVisible = function (t, e) {
    var i,
      n = this.scatterReelList[t];
    n && ((null != (i = n.node.getComponent(_dependency2.UIOpacity)) ? i : n.node.addComponent(_dependency2.UIOpacity)).opacity = e ? 255 : 0);
  }, c.quickStopScatterReels = function () {
    this._scatterScrolling = !1, this.scatterReelList.forEach(function (t) {
      t && t.directShowStop();
    });
  }, c.initExpectOverlay = function () {
    for (var t = _dependency7.default.getData().filePaths.expectSkeletonData, i = _dependency18.LoadUtils.getDirSkeleton(this.data.module, t, "A_frame_B"), n = 0; n < 5; n++) {
      var a = new _dependency2.Node("expectOverlay_" + n),
        s = a.addComponent(_dependency2.sp.Skeleton);
      s.skeletonData = i, s.premultipliedAlpha = !1, a.setPosition(e.EXPECT_OVERLAY_POSITIONS[n]), a.setScale(e.EXPECT_OVERLAY_SCALE), a.active = !1, a.layer = this.content.layer, this.content.addChild(a), this.expectOverlayList.push(a);
    }
  }, c.showExpectOverlay = function (t) {
    var e = this.wildAnimList[t];
    if (e && e.active) {
      var i = this.expectOverlayList[t];
      if (i && !i.active) {
        var n = i.getComponent(_dependency2.sp.Skeleton);
        i.active = !0, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "expect", !0);
      }
    }
  }, c.hideExpectOverlay = function (t) {
    var e = this.expectOverlayList[t];
    if (e) {
      var i = e.getComponent(_dependency2.sp.Skeleton);
      e.active = !1, i.clearTracks(), i.setToSetupPose();
    }
  }, c.hideAllExpectOverlay = function () {
    for (var t = 0; t < this.expectOverlayList.length; t++) this.hideExpectOverlay(t);
  }, c.initWildFrame = function () {
    var t = _dependency7.default.getData().filePaths.wildFrameSpriteFrame;
    this._wildFrames = [];
    for (var i = e.WILD_FRAME_FIRST; i <= e.WILD_FRAME_LAST; i++) {
      var n = "F_frame_" + _dependency19.default.zeroPad(i, 3);
      try {
        this._wildFrames.push(_dependency18.LoadUtils.getDirSp(this.data.module, t, n));
      } catch (t) {
        Log.e("initWildFrame: 找不到序列圖 " + n, t);
      }
    }
    if (0 === this._wildFrames.length) return Log.e("initWildFrame: " + t + " 一張都沒撈到，整軸 wild 不會有框特效"), !1;
    var a = this.wildFrameContent;
    if (!a) return Log.e("initWildFrame: 找不到 content/wildFrameContent，框特效無法建立"), !1;
    for (var s = [], l = 0; l < 5; l++) {
      var r = this.findWildFrameNode(a, l),
        o = null == r ? void 0 : r.getComponent(_dependency2.Sprite);
      r && o ? (o.spriteFrame = this._wildFrames[0], r.active = !1, this.wildFrameList[l] = r) : s.push(l + (r ? "(無 Sprite)" : "(無節點)"));
    }
    return s.length > 0 && Log.e("initWildFrame: wildFrameContent 底下第 " + s.join("、") + " 軸沒有可用的 Sprite 節點"), this.wildFrameList.filter(function (t) {
      return !!t;
    }).length > 0;
  }, c.findWildFrameNode = function (t, i) {
    var n, a, s;
    return null != (n = null != (a = null != (s = t.getChildByName("wildAnim_" + i)) ? s : t.getChildByName("" + e.WILD_FRAME_NODE_NAME_PREFIX + i)) ? a : t.children[i]) ? n : null;
  }, c.showWildFrame = function (t) {
    var i,
      n = this,
      a = this.wildAnimList[t];
    if (a && a.active) {
      var s = this.wildFrameList[t],
        l = null == (i = s) ? void 0 : i.getComponent(_dependency2.Sprite);
      if (!s || !s.isValid || !l) {
        var r;
        if (!this.initWildFrame()) return;
        if (s = this.wildFrameList[t], l = null == (r = s) ? void 0 : r.getComponent(_dependency2.Sprite), !s || !s.isValid || !l) return;
      }
      if (0 !== this._wildFrames.length && !this._wildFrameStepList[t]) {
        var o = 0;
        l.spriteFrame = this._wildFrames[0], s.active = !0;
        var c = function () {
          o = (o + 1) % n._wildFrames.length, l.spriteFrame = n._wildFrames[o];
        };
        this._wildFrameStepList[t] = c, this.schedule(c, 1 / e.WILD_FRAME_FPS);
      }
    }
  }, c.hideWildFrame = function (t) {
    this.cancelPendingWildFrame(t);
    var e = this._wildFrameStepList[t];
    e && (this.unschedule(e), this._wildFrameStepList[t] = null);
    var i = this.wildFrameList[t];
    i && i.isValid && (i.active = !1);
  }, c.hideAllWildFrame = function () {
    for (var t = 0; t < 5; t++) this.hideWildFrame(t);
  }, c.scheduleWildFrameAfterWildIn = function (t) {
    var i = this,
      n = this.wildAnimList[t],
      a = null == n ? void 0 : n.getComponent(_dependency2.sp.Skeleton);
    this.cancelPendingWildFrame(t);
    var s = !1,
      l = function () {
        s || (s = !0, i.cancelPendingWildFrame(t), a && a.setCompleteListener(null), i.hideWildLock(t), i.showWildFrame(t), i.scheduleWildWin(t));
      };
    a && a.setCompleteListener(l);
    var r = function () {
      i._wildFrameCbList[t] = null, Log.w("第 " + t + " 軸等不到 wild 進場的 complete，直接開始框特效"), l();
    };
    this._wildFrameCbList[t] = r, this.scheduleOnce(r, e.WILD_IN_FALLBACK);
  }, c.scheduleWildFrame = function (t) {
    var i = this;
    this.cancelPendingWildFrame(t);
    var n = function () {
      i._wildFrameCbList[t] = null, i.showWildFrame(t);
    };
    this._wildFrameCbList[t] = n, this.scheduleOnce(n, e.WILD_FRAME_DELAY);
  }, c.cancelPendingWildFrame = function (t) {
    var e = this._wildFrameCbList[t];
    e && (this.unschedule(e), this._wildFrameCbList[t] = null);
  }, c.scheduleWildWin = function (t) {
    var i = this;
    this.cancelPendingWildWin(t);
    var n = function () {
      i._wildWinCbList[t] = null;
      var n = i.wildAnimList[t];
      if (n && n.isValid && n.active) {
        var a = n.getComponent(_dependency2.sp.Skeleton);
        a && (a.timeScale = e.WILD_WIN_TIME_SCALE, a.setAnimation(0, gt.WIN, !0));
      }
    };
    this._wildWinCbList[t] = n, this.scheduleOnce(n, e.WILD_WIN_DELAY);
  }, c.cancelPendingWildWin = function (t) {
    var e = this._wildWinCbList[t];
    e && (this.unschedule(e), this._wildWinCbList[t] = null);
  }, c.isWildPresenting = function () {
    for (var t = 0; t < 5; t++) if (this._wildTransformCbList[t] || this._scarfWaitCbList[t] || this._scarfTimeoutCbList[t] || this._wildLockCbList[t] || this._wildFrameCbList[t] || this._wildWinCbList[t]) return !0;
    return !1;
  }, c.replyWildAnimStatus = function () {
    var t = this;
    if (this.cancelWildPresentPoll(), !this.isWildPresenting()) return Log.d("整軸 wild 沒有在演，直接放行"), void dispatch(_dependency9.GameEvent.WILD_ANIM_COMPLETED);
    var i = 0,
      n = function (n) {
        var a = (i += n) >= e.WILD_PRESENT_TIMEOUT;
        t.isWildPresenting() && !a || (a ? Log.w("等不到整軸 wild 的表演結束，直接放行下一轉") : Log.d("等整軸 wild 演完共 " + i.toFixed(2) + " 秒"), t.cancelWildPresentPoll(), dispatch(_dependency9.GameEvent.WILD_ANIM_COMPLETED));
      };
    this._wildPresentPollCb = n, this.schedule(n, e.WILD_PRESENT_POLL);
  }, c.cancelWildPresentPoll = function () {
    var t = this._wildPresentPollCb;
    t && (this.unschedule(t), this._wildPresentPollCb = null);
  }, c.initWildLock = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var i, n, a, s, l, o, c, u;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (i = this.wildLockContent) {
              t.next = 4;
              break;
            }
            return Log.e("initWildLock: 找不到 wildLockContent，鎖定特效不會有表現"), t.abrupt("return");
          case 4:
            return n = null, t.prev = 5, t.next = 8, App.cache.getCacheByAsync(e.WILD_LOCK_SKELETON_URL, _dependency2.sp.SkeletonData, this.data.module);
          case 8:
            n = t.sent, t.next = 15;
            break;
          case 11:
            return t.prev = 11, t.t0 = t.catch(5), Log.e("initWildLock: 取 F_lock 骨架失敗", t.t0), t.abrupt("return");
          case 15:
            if (n) {
              t.next = 18;
              break;
            }
            return Log.e("initWildLock: 取不到 F_lock 骨架，鎖定特效不會有表現"), t.abrupt("return");
          case 18:
            a = 0;
          case 19:
            if (!(a < 5)) {
              t.next = 40;
              break;
            }
            if (l = "" + e.WILD_LOCK_NODE_NAME_PREFIX + a, o = this.findWildLockNode(i, a, l)) {
              t.next = 32;
              break;
            }
            if (c = this.wildAnimList[a]) {
              t.next = 27;
              break;
            }
            return Log.e("initWildLock: 第 " + a + " 軸沒有節點也沒有 wildAnim_" + a + " 可參考"), t.abrupt("continue", 37);
          case 27:
            (o = new _dependency2.Node(l)).layer = c.layer, o.setPosition(c.position), o.setScale(c.scale), i.addChild(o);
          case 32:
            (u = null != (s = o.getComponent(_dependency2.sp.Skeleton)) ? s : o.addComponent(_dependency2.sp.Skeleton)).skeletonData = n, u.premultipliedAlpha = !1, o.active = !1, this.wildLockList[a] = o;
          case 37:
            a++, t.next = 19;
            break;
          case 40:
          case "end":
            return t.stop();
        }
      }, t, this, [[5, 11]]);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.findWildLockNode = function (t, e, i) {
    var n, a, s;
    return null != (n = null != (a = null != (s = t.getChildByName(i)) ? s : t.getChildByName("wildAnim_" + e)) ? a : t.children[e]) ? n : null;
  }, c.scheduleWildLock = function (t) {
    var i = this;
    this.cancelPendingWildLock(t);
    var n = function () {
      i._wildLockCbList[t] = null, i.playWildLock(t);
    };
    this._wildLockCbList[t] = n, this.scheduleOnce(n, e.WILD_LOCK_DELAY);
  }, c.cancelPendingWildLock = function (t) {
    var e = this._wildLockCbList[t];
    e && (this.unschedule(e), this._wildLockCbList[t] = null);
  }, c.playWildLock = function (t) {
    var i = this.wildLockList[t],
      n = null == i ? void 0 : i.getComponent(_dependency2.sp.Skeleton);
    i && i.isValid && n && n.skeletonData && (i.active = !0, n.setCompleteListener(null), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, e.WILD_LOCK_ANIME_NAME, !1));
  }, c.hideWildLock = function (t) {
    this.cancelPendingWildLock(t);
    var e = this.wildLockList[t];
    if (e && e.isValid) {
      var i = e.getComponent(_dependency2.sp.Skeleton);
      i && (i.setCompleteListener(null), i.clearTracks(), i.setToSetupPose()), e.active = !1;
    }
  }, c.hideAllWildLock = function () {
    for (var t = 0; t < 5; t++) this.hideWildLock(t);
  }, c.initScarf = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var i, n, a, s, l, o, c, u, h, _;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (n = null == (i = this._scarfTemplate) ? void 0 : i.parent, this._scarfTemplate && n) {
              t.next = 4;
              break;
            }
            return Log.e("initScarf: 找不到 scarf 範本節點，飄帶不會有表現"), t.abrupt("return");
          case 4:
            (a = this._scarfTemplate.getComponent(_dependency2.sp.Skeleton)) && (a.clearTracks(), a.setToSetupPose()), this._scarfTemplate.active = !1, s = 0;
          case 8:
            if (!(s < e.SCARF_SUFFIXES.length)) {
              t.next = 35;
              break;
            }
            return l = e.SCARF_SUFFIXES[s], t.prev = 10, t.next = 13, App.cache.getCacheByAsync(e.SCARF_SKELETON_URL_PREFIX + l, _dependency2.sp.SkeletonData, this.data.module);
          case 13:
            if (c = t.sent) {
              t.next = 17;
              break;
            }
            return Log.e("initScarf: 取不到骨架 F_scarf_" + l + "，第 " + s + " 軸不會有飄帶"), t.abrupt("continue", 32);
          case 17:
            u = "" + e.SCARF_NODE_NAME_PREFIX + s, (h = n.getChildByName(u)) || ((h = new _dependency2.Node(u)).layer = this._scarfTemplate.layer, h.setPosition(this.getScarfPosition(s)), h.setScale(this._scarfTemplate.scale), n.addChild(h)), (_ = null != (o = h.getComponent(_dependency2.sp.Skeleton)) ? o : h.addComponent(_dependency2.sp.Skeleton)).skeletonData = c, _.premultipliedAlpha = !1, _.clearTracks(), _.setToSetupPose(), h.active = !1, this._scarfNodes[s] = h, t.next = 32;
            break;
          case 29:
            t.prev = 29, t.t0 = t.catch(10), Log.e("initScarf: 建立第 " + s + " 軸飄帶失敗", t.t0);
          case 32:
            s++, t.next = 8;
            break;
          case 35:
          case "end":
            return t.stop();
        }
      }, t, this, [[10, 29]]);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.getScarfPosition = function (t) {
    var i = this._scarfTemplate.position,
      n = e.SCARF_POSITIONS[t];
    return n ? new _dependency2.Vec3(n.x, n.y, i.z) : (Log.w("getScarfPosition: SCARF_POSITIONS 沒有第 " + t + " 軸，沿用 scarf 範本原位"), new _dependency2.Vec3(i));
  }, c.playScarf = function (t) {
    var i = this,
      n = this._scarfNodes[t],
      a = null == n ? void 0 : n.getComponent(_dependency2.sp.Skeleton);
    if (n && n.isValid && a && a.skeletonData) {
      var s = !1,
        l = function () {
          s || (s = !0, i.cancelScarfTimeout(t), a.setCompleteListener(null), n.isValid && (n.active = !1), dispatch(_dependency9.GameEvent.SCARF_COMPLETED, {
            data: t
          }));
        };
      n.active = !0, a.clearTracks(), a.setToSetupPose(), a.timeScale = e.SCARF_TIME_SCALE, a.setAnimation(0, "roll_" + e.SCARF_SUFFIXES[t], !1), a.setCompleteListener(l);
      var r = function () {
        i._scarfTimeoutCbList[t] = null, Log.w("playScarf: 第 " + t + " 軸飄帶逾時，直接放行 wild 進場"), l();
      };
      this._scarfTimeoutCbList[t] = r, this.scheduleOnce(r, e.SCARF_TIMEOUT);
    } else dispatch(_dependency9.GameEvent.SCARF_COMPLETED, {
      data: t
    });
  }, c.cancelScarfTimeout = function (t) {
    var e = this._scarfTimeoutCbList[t];
    e && (this.unschedule(e), this._scarfTimeoutCbList[t] = null);
  }, c.stopScarf = function (t) {
    this.cancelScarfTimeout(t);
    var e = this._scarfNodes[t];
    if (e && e.isValid) {
      var i = e.getComponent(_dependency2.sp.Skeleton);
      i && (i.setCompleteListener(null), i.clearTracks(), i.setToSetupPose()), e.active = !1;
    }
  }, c.stopAllScarf = function () {
    for (var t = 0; t < e.SCARF_SUFFIXES.length; t++) this.stopScarf(t);
  }, c.isFreeSpinNow = function () {
    var t, e, i;
    return "freeSpin" === (null == (t = this.data.getData()) || null == (e = t.parser) || null == (i = e.currentGameState) ? void 0 : i.action);
  }, c.waitScarf = function (t, i) {
    var n = this;
    if (this._scarfDoneList[t]) i();else {
      var a = !1,
        s = function () {
          a || (a = !0, n._scarfWaitCbList[t] = null, n.cancelScarfWaitTimeout(t), i());
        };
      this._scarfWaitCbList[t] = s;
      var l = function () {
        n._scarfWaitTimeoutCbList[t] = null, Log.w("waitScarf: 第 " + t + " 軸等不到 SCARF_COMPLETED，直接讓長圖標進場"), s();
      };
      this._scarfWaitTimeoutCbList[t] = l, this.scheduleOnce(l, e.SCARF_WAIT_TIMEOUT);
    }
  }, c.cancelScarfWaitTimeout = function (t) {
    var e = this._scarfWaitTimeoutCbList[t];
    e && (this.unschedule(e), this._scarfWaitTimeoutCbList[t] = null);
  }, c.cancelScarfWait = function (t) {
    this.cancelScarfWaitTimeout(t), this._scarfWaitCbList[t] = null, this._scarfDoneList[t] = !1;
  }, c.cancelAllScarfWait = function () {
    for (var t = 0; t < this._scarfWaitCbList.length; t++) this.cancelScarfWait(t);
  }, c.showWild = function (t) {
    var i = this,
      n = this.wildAnimList[t];
    if (n) {
      this.setScatterReelVisible(t, !0);
      var a = this.scatterReelList[t];
      if (a && a.directShowStop(), n.active) this.scheduleWildFrame(t);else if (!this._wildTransformCbList[t]) {
        var s = function () {
            if (n.isValid) {
              var a = n.getComponent(_dependency2.sp.Skeleton);
              a && (n.active = !0, i.data.addWildDisplayedCol(t), a.timeScale = e.WILD_IN_TIME_SCALE, a.clearTracks(), a.setToSetupPose(), a.setAnimation(0, gt.IN, !1), i._wildInSfxPlayed || (i._wildInSfxPlayed = !0, dispatch(_dependency9.GameEvent.PLAY_BTM, {
                data: {
                  url: _dependency7.EBTM.SFX_FREE_GAME_WILD_DOWN
                }
              })), i.scheduleWildFrameAfterWildIn(t));
            }
          },
          l = function () {
            i._wildTransformCbList[t] = null, n.isValid && (i.isFreeSpinNow() ? i.waitScarf(t, s) : s());
          };
        this._wildTransformCbList[t] = l, this.scheduleOnce(l, e.WILD_TRANSFORM_DELAY);
      }
    }
  }, c.flushPendingWild = function () {
    for (var t = 0; t < 5; t++) if (this._wildTransformCbList[t] || this._scarfWaitCbList[t]) {
      this.cancelPendingWildTransform(t);
      var i = this.wildAnimList[t];
      if (i && i.isValid && !i.active) {
        var n = i.getComponent(_dependency2.sp.Skeleton);
        n && (Log.w("第 " + t + " 軸的整軸 wild 還沒進場就起轉了，直接補進 win 循環"), i.active = !0, this.data.addWildDisplayedCol(t), n.timeScale = e.WILD_WIN_TIME_SCALE, n.setCompleteListener(null), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, gt.WIN, !0));
      }
    }
  }, c.cancelPendingWildTransform = function (t) {
    this.cancelScarfWait(t);
    var e = this._wildTransformCbList[t];
    e && (this.unschedule(e), this._wildTransformCbList[t] = null);
  }, c.hideWild = function (t) {
    this.cancelPendingWildTransform(t), this.hideWildFrame(t), this.hideWildLock(t), this.cancelPendingWildWin(t), this.data.removeWildDisplayedCol(t), this.setScatterReelVisible(t, !1);
    var e = this.wildAnimList[t];
    if (e) {
      var i = e.getComponent(_dependency2.sp.Skeleton);
      e.active = !1, i.setCompleteListener(null), i.clearTracks(), i.setToSetupPose();
    }
  }, c.hideAllWild = function () {
    for (var t = 0; t < this.wildAnimList.length; t++) this.hideWild(t);
  }, c.addEvents = function () {
    var t = this;
    this.on(_dependency9.GameEvent.SHOW_WIN_SUMMARY, function () {
      t.cancelWinPresentStages(), t.scheduleWinPresentStage(1, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
        var i;
        return _dependency.regeneratorRuntime().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return i = t.data.getData().parser.winSymbols, e.prev = 1, e.next = 4, t.showWinSummary(i);
            case 4:
              e.next = 10;
              break;
            case 6:
              e.prev = 6, e.t0 = e.catch(1), Log.e("showWinSummary error, 強制發送 SHOW_WIN_SUMMARY_END 避免卡住:", e.t0), dispatch(_dependency9.GameEvent.SHOW_WIN_SUMMARY_END);
            case 10:
            case "end":
              return e.stop();
          }
        }, e, null, [[1, 6]]);
      })));
    }), this.on(_dependency9.GameEvent.START_SCROLL, function () {
      t.cancelWinPresentStages(), t.hideAllExpectOverlay(), t._wildInSfxPlayed = !1, t.flushPendingWild(), t.hideAllWildFrame(), t.hideAllWildLock(), t.cancelAllScarfWait(), t.stopAllScarf(), t.startScatterScroll();
    }), this.on(_dependency9.GameEvent.SET_REEL_RESULT, function () {
      _dependency7.default.isTurbo ? (t.startScatterScroll(), _dependency2.tween(t).bindNodeState(false).delay(.15).call(function () {
        return t.setScatterReelResult();
      }).start()) : t.setScatterReelResult();
    }), this.on(_dependency9.GameEvent.START_QUICK_STOP, function () {
      t.quickStopScatterReels(), t.hideAllExpectOverlay();
    }), this.on(_dependency9.GameEvent.SHOW_EXPECT, function (e) {
      t.showExpectOverlay(e.data), t.enterScatterPeekMode();
    }), this.on(_dependency9.GameEvent.CHECK_SCATTER_LANDED, function (e) {
      var i = e.data,
        n = t.scatterReelList[i];
      n && n.status !== _dependency12.EReelStatus.FINISH || dispatch(_dependency9.GameEvent.SCATTER_REEL_LANDED, {
        data: i
      });
    }), this.on(_dependency9.GameEvent.STOP_EXPECT, function (e) {
      t.hideExpectOverlay(e.data);
    }), this.on(_dependency9.GameEvent.SHOW_WILD, function (e) {
      t.showWild(e.data);
    }), this.on(_dependency9.GameEvent.CHECK_WILD_ANIM_STATUS, function () {
      t.replyWildAnimStatus();
    }), this.on(_dependency9.GameEvent.SHOW_SCARF, function (e) {
      null != e.data && (t.playScarf(e.data), t.scheduleWildLock(e.data));
    }), this.on(_dependency9.GameEvent.SCARF_COMPLETED, function (e) {
      var i = e.data;
      if (null != i) {
        t._scarfDoneList[i] = !0;
        var n = t._scarfWaitCbList[i];
        n && n();
      }
    }), this.on(_dependency9.GameEvent.STOP_WILD, function (e) {
      null != (null == e ? void 0 : e.data) ? t.hideWild(e.data) : t.hideAllWild();
    }), this.on(_dependency9.GameEvent.CLEAR_ALL_WIN_LINE, function () {
      t.flushSkipHold(), t.cancelWinPresentStages(), dispatch(_dependency9.GameEvent.HIDE_SYMBOLS_WIN), t.stopWinPresentBtm(), t.clearWinLine(), t.activeBBR(!1), _dependency2.Tween.stopAllByTarget(t), t.cleanupWinCashNodes();
    }), this.on(_dependency9.GameEvent.START_SPIN, function () {
      t.flushSkipHold(), dispatch(_dependency9.GameEvent.HIDE_SYMBOLS_WIN), t.cancelWinPresentStages(), t.stopWinPresentBtm(), _dependency2.Tween.stopAllByTarget(t), t.hideAllExpectOverlay(), t._wildInSfxPlayed = !1, t.hideAllWildFrame(), t.hideAllWildLock(), t.cancelAllScarfWait(), t.stopAllScarf(), t.exitScatterPeekMode(), _dependency7.default.isTurbo || t.startScatterScroll(), t.winLineCallBack && (t.winLineCallBack = null), t.clearWinLine(), t._winCashNode && t._winCashNode.removeFromParent(), t._totalWinCashNode && t._totalWinCashNode.removeFromParent(), t.activeBBR(!1);
    }), this.on(_dependency5.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      t.spinStatus = e.data;
    }), this.on(_dependency9.GameEvent.SHOW_WIN_LINE_CYCLE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var i;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return dispatch(_dependency9.GameEvent.HIDE_SYMBOLS_WIN), i = t.data.getData().parser.winSymbols, e.prev = 2, e.next = 5, t.showWinLineCycle(i);
          case 5:
            e.next = 10;
            break;
          case 7:
            e.prev = 7, e.t0 = e.catch(2), Log.d("reject promise::::::::::::::", e.t0);
          case 10:
          case "end":
            return e.stop();
        }
      }, e, null, [[2, 7]]);
    }))), this.on(_dependency9.GameEvent.SHOW_ALL_WIN_LINE, function () {
      Log.d("%c SHOW_ALL_WIN_LINE ", _dependency17.getKeyStyle(_dependency17.KeyStyle.Notify));
      var e = t.data.getData().parser.winSymbols;
      try {
        !t.data.getData().parser.currentGameState.fullCombo && t.activeBBR(!0), t.playAllWinLines(e);
      } catch (t) {
        Log.e("show all win line error:::::", t);
      }
    }), this.on(_dependency9.GameEvent.SKIP_WIN_LINE, function () {
      t.skipWinLine(), _dependency2.Tween.stopAllByTarget(t), t.scheduleSkipHold();
    }), this.on(_dependency9.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(i) {
      var n, a;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (n = i.data, !t.data.tempAnimTopMap.has(n.uuid)) {
              e.next = 3;
              break;
            }
            return e.abrupt("return");
          case 3:
            a = n.parent, t.data.tempAnimTopMap.set(n.uuid, {
              node: n,
              originParent: a
            }), n.setParent(t.tempSymbolAnimContent, !0);
          case 6:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency9.GameEvent.SHOW_TOTAL_WIN_CASH, function (e) {
      t._totalWinCashDelayDone = !1, t.scheduleWinPresentStage(2, function () {
        return t.showTotalWinCashStage();
      });
    }), this.on(_dependency9.GameEvent.SKIP_SHOW_TOTAL_WIN_CASH, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(i) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            t.skipTotalWinCashTween.start();
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency9.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE, function () {
      t._isClickSkipWinLine = !1;
    }), this.on(_dependency9.GameEvent.FADE_IN_WIN_LINE_BBR, function () {
      t.playFadeInBBR();
    }), this.on(_dependency9.GameEvent.FADE_OUT_WIN_LINE_BBR, function () {
      t.playFadeOutBBR();
    }), this.on(_dependency9.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH, function () {
      var e = t.data.getData().parser.currentGameState.totalWinnings;
      dispatch(_dependency9.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: e
      }), t.fadeOutTotalWinCash(.01, function () {
        _dependency2.tween(t).bindNodeState(false).delay(.1).call(function () {
          dispatch(_dependency9.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END);
        }).start();
      });
    }), this.on(_dependency9.GameEvent.SHOW_SCATTER_WIN, function () {
      t.playScatterReelWin();
    }), this.on(_dependency9.GameEvent.SHOW_FG_ROUND_WIN_CASH, function () {
      for (var e = t.data.getData(), i = e.parser, n = e.gameState, a = i.currentGameState.numFreeSpins, s = 0, l = i.currentSpinIndex; l >= 0; l--) {
        var r = n[l];
        if (r.numFreeSpins !== a) break;
        s += r.currentWinnings;
      }
      dispatch(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: s,
          needComplete: !0
        },
        complete: function () {
          dispatch(_dependency9.GameEvent.SHOW_FG_ROUND_WIN_CASH_END);
        }
      });
    });
  }, c.removeEvents = function () {
    this.off(_dependency9.GameEvent.SHOW_WIN_SUMMARY), this.off(_dependency9.GameEvent.SKIP_WIN_LINE), this.off(_dependency9.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH), this.off(_dependency9.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW), this.off(_dependency9.GameEvent.SHOW_TOTAL_WIN_CASH), this.off(_dependency9.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE), this.off(_dependency9.GameEvent.FADE_IN_WIN_LINE_BBR), this.off(_dependency9.GameEvent.FADE_OUT_WIN_LINE_BBR), this.off(_dependency9.GameEvent.SHOW_FG_ROUND_WIN_CASH), this.off(_dependency9.GameEvent.START_SPIN), this.off(_dependency9.GameEvent.SHOW_WILD), this.off(_dependency9.GameEvent.SHOW_SCARF), this.off(_dependency9.GameEvent.SCARF_COMPLETED), this.off(_dependency9.GameEvent.CHECK_WILD_ANIM_STATUS), this.off(_dependency9.GameEvent.STOP_WILD), this.off(_dependency9.GameEvent.START_SCROLL), this.off(_dependency9.GameEvent.SET_REEL_RESULT), this.off(_dependency9.GameEvent.START_QUICK_STOP), this.off(_dependency9.GameEvent.SHOW_EXPECT), this.off(_dependency9.GameEvent.STOP_EXPECT), this.off(_dependency9.GameEvent.CHECK_SCATTER_LANDED), this.off(_dependency9.GameEvent.CLEAR_ALL_WIN_LINE), this.off(_dependency9.GameEvent.SHOW_ALL_WIN_LINE), this.off(_dependency9.GameEvent.SHOW_WIN_LINE_CYCLE), this.off(_dependency9.GameEvent.SKIP_SHOW_TOTAL_WIN_CASH), this.off(_dependency9.GameEvent.SHOW_SCATTER_WIN), this.off(_dependency5.SlotFrameworkEvent.UPDATE_SPIN_STATUS);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }, {
    key: "wildContent",
    get: function () {
      var t, e;
      return null != (t = null == (e = this.wildAnim_0) ? void 0 : e.parent) ? t : null;
    }
  }, {
    key: "wildAnimList",
    get: function () {
      return [this.wildAnim_0, this.wildAnim_1, this.wildAnim_2, this.wildAnim_3, this.wildAnim_4];
    }
  }, {
    key: "scatterReelList",
    get: function () {
      return [this.scatterReel_0, this.scatterReel_1, this.scatterReel_2, this.scatterReel_3, this.scatterReel_4];
    }
  }]), e;
}(_dependency3.default)).WILD_TRANSFORM_DELAY = .5, bt.SCARF_WAIT_TIMEOUT = 20, bt.SCARF_SUFFIXES = ["A", "B", "C", "D", "E"], bt.SCARF_NODE_NAME_PREFIX = "scarf_", bt.SCARF_POSITIONS = [{
  x: -75,
  y: 143.634
}, {
  x: -40,
  y: 143.634
}, {
  x: 0,
  y: 143.634
}, {
  x: 40,
  y: 143.634
}, {
  x: 75,
  y: 143.634
}], bt.SCARF_SKELETON_URL_PREFIX = "assets/spine/New/spine2/high/F_scarf_", bt.SCARF_TIME_SCALE = .7, bt.SCARF_TIMEOUT = 2.6, bt.SCATTER_REEL_INDEXES = [1, 2, 3], bt.SCATTER_APPEAR_RATE = 181, bt.MAX_SCATTER_PER_SCROLL = 3, bt.SCATTER_STRIP_FILLER = [2, 3, 4, 5, 6, 7, 8, 1], bt.WILD_FRAME_NODE_NAME_PREFIX = "wildFrame_", bt.WILD_FRAME_FIRST = 1, bt.WILD_FRAME_LAST = 15, bt.WILD_FRAME_FPS = 30, bt.WILD_FRAME_DELAY = .5, bt.WILD_IN_TIME_SCALE = .5, bt.WILD_WIN_TIME_SCALE = 1, bt.WILD_IN_FALLBACK = 2.2, bt.WILD_WIN_DELAY = .5, bt.WILD_LOCK_SKELETON_URL = "assets/spine/New/spine2/high/F_lock/F_lock", bt.WILD_LOCK_ANIME_NAME = "lock", bt.WILD_LOCK_NODE_NAME_PREFIX = "wildLock_", bt.WILD_LOCK_DELAY = 1.4, bt.EXPECT_OVERLAY_POSITIONS = [new _dependency2.Vec3(-285.889, -6.309, 0), new _dependency2.Vec3(-144, -6.309, 0), new _dependency2.Vec3(0, -6.309, 0), new _dependency2.Vec3(144, -6.309, 0), new _dependency2.Vec3(281, -6.309, 0)], bt.EXPECT_OVERLAY_SCALE = new _dependency2.Vec3(.67, .59, 1), bt.WIN_PRESENT_STAGE_DELAY = .5, bt.WIN_PRESENT_FINISH_FALLBACK = 3, bt.SKIP_HOLD = .5, bt.WILD_PRESENT_POLL = .1, bt.WILD_PRESENT_TIMEOUT = 12, ut = _dependency.applyDecoratedDescriptor((ct = bt).prototype, "bbr", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(ct.prototype, "content", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = _dependency.applyDecoratedDescriptor(ct.prototype, "tempSymbolAnimContent", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(ct.prototype, "winLineContent", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(ct.prototype, "wildAnim_0", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(ct.prototype, "wildAnim_1", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(ct.prototype, "wildAnim_2", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Lt = _dependency.applyDecoratedDescriptor(ct.prototype, "wildAnim_3", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(ct.prototype, "wildAnim_4", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(ct.prototype, "wildFrameContent", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Wt = _dependency.applyDecoratedDescriptor(ct.prototype, "_scarfTemplate", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), wt = _dependency.applyDecoratedDescriptor(ct.prototype, "scatterReel_0", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Et = _dependency.applyDecoratedDescriptor(ct.prototype, "scatterReel_1", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(ct.prototype, "scatterReel_2", [at], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(ct.prototype, "scatterReel_3", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), vt = _dependency.applyDecoratedDescriptor(ct.prototype, "scatterReel_4", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), It = _dependency.applyDecoratedDescriptor(ct.prototype, "wildLockContent", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = ct)) || ot) || ot));
_dependency2.cclegacy._RF.pop();
