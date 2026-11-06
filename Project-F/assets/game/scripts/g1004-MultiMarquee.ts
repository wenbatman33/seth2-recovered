// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency5 from "./g1004-GameEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./g1004-GameConfigModel";
import * as _dependency8 from "./g1004-GameData";
import * as _dependency9 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "./g1004-types";
var _export;
export { _export as MARQUEE_STATUS };
var _export2;
export { _export2 as MultiMarquee };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MARQUEE_STATUS":
      _export = value;
      break;
    case "MultiMarquee":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, i, o, r, s, c, u, l, p, d, f, m, g, S, h, T, _, v, w, x, F, A, W, y, E, I, N, M;
var C, L, b, D, G, R, P, U, O, B, H, k, q, z, Y, V, Q, K, j, J, X;
_publish("MARQUEE_STATUS", void 0), _dependency2.cclegacy._RF.push({}, "c868fSG5nxFY5CRWTTYuvha", "MultiMarquee", void 0);
var Z,
  $ = _dependency2._decorator.ccclass,
  ee = _dependency2._decorator.property;
!function (e) {
  e.WIN_CASH = "win_cash", e.MARQUEE = "marquee";
}(Z || (Z = _publish("MARQUEE_STATUS", {})));
_publish("MultiMarquee", (C = $("MultiMarquee"), L = ee({
  type: _dependency2.Node,
  tooltip: "資訊跑馬燈"
}), b = ee({
  type: _dependency2.Sprite,
  tooltip: "資訊標題"
}), D = ee({
  type: _dependency2.Node,
  tooltip: "贏分資訊"
}), G = ee({
  type: _dependency2.Sprite,
  tooltip: "贏分標題"
}), R = ee({
  type: _dependency2.Label,
  tooltip: "贏分"
}), P = ee({
  type: _dependency2.sp.Skeleton,
  tooltip: "贏分特效"
}), U = ee({
  type: _dependency2.sp.Skeleton,
  tooltip: "撞分特效"
}), O = ee({
  type: _dependency2.sp.Skeleton,
  tooltip: "金額強調特效"
}), B = ee({
  type: _dependency2.sp.Skeleton,
  tooltip: "贏分框強調特效"
}), C((q = _dependency.applyDecoratedDescriptor((k = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "ndInfo", q, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "infoMsg", z, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndWinScore", Y, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "winTitle", V, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "txtScore", Q, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "spineFx", K, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "rateFx", j, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "amountFx", J, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "sideFx", X, _dependency.assertThisInitialized(t)), t.currentMarqueeIndex = 1, t.status = "", t._rateLv = 0, t._rateCount = 0, t;
  }
  _dependency.inheritsLoose(t, e);
  var c = t.prototype;
  return c.start = function () {
    this.ndWinScore.active = !1, this.spineFx.node.active = !1, this.rateFx.node.active = !1, this.amountFx.node.active = !1, this.sideFx.node.active = !1, this.changeGameMode("mg");
  }, c.addEvents = function () {
    var e = this;
    this.on(_dependency6.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      e.changeGameMode("mg");
    }), this.on(_dependency5.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_BEFORE, function (t) {
      var n = e.data.getData().parser.currentGameState.winSymbols.reduce(function (e, t) {
        return e + t.winnings;
      }, 0);
      dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency7.EBTM.UPDATE_SCORE
        }
      }), Log.d("%c WAYS WINNINGS BEFORE", _dependency4.getKeyStyle(_dependency4.KeyStyle.Logic), n), e.showWinCashBefore(n);
    }), this.on(_dependency5.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH, function (t) {
      var n = e.data.getData().parser.currentGameState,
        a = n.winSymbols,
        i = n.roundWinnings,
        o = a.reduce(function (e, t) {
          return e + t.winnings;
        }, 0);
      dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency7.EBTM.UPDATE_SCORE
        }
      }), Log.d("%c WAYS WINNINGS", _dependency4.getKeyStyle(_dependency4.KeyStyle.Logic), o), e.showWinCash(o);
      var r = _dependency7.default.getData().winAmountTime;
      dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: i,
          tweenTime: r
        }
      });
    }), this.on(_dependency5.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_AFTER, function (t) {
      var n = e.data.getData().parser.currentGameState.viewWinnings;
      Log.d("%c VIEW WINNINGS", _dependency4.getKeyStyle(_dependency4.KeyStyle.Logic), n), e.rateCount += 1, e.rateFx.node.active = !0, e.rateFx.clearTracks(), e.rateFx.setSlotsToSetupPose(), e.rateFx.setAnimation(0, "lv" + e._rateLv, !1), e.rateFx.timeScale = 1.5, e.rateFx.setCompleteListener(function () {
        e.rateFx.node.active = !1;
      }), e.ndWinScore.active = !0, e.winTitle.node.active = !0;
      var a = _dependency7.default.getData().filePaths.common;
      e.winTitle.spriteFrame = _dependency0.LoadUtils.getDirSp(e.data.module, a, "font_win_02"), e.txtScore.string = _dependency9.CmmSlotUtils.formatNumber(n), _dependency2.tween(e.rateFx.node).bindNodeState(false).delay(.5).call(function () {
        e.ndInfo.active = !1, e.sideFx.node.active = !0, e.sideFx.clearTracks(), e.sideFx.setToSetupPose(), e.sideFx.setAnimation(0, "animation", !1), e.sideFx.setCompleteListener(function () {
          e.sideFx.node.active = !1;
        });
      }).start(), e.playMultipleWinScoreTween();
      var i = e.data.getData().parser.currentGameState.totalWinnings,
        o = _dependency7.default.getData().winAmountTime;
      dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: i,
          tweenTime: o
        }
      });
    }), this.on(_dependency5.GameEvent.SHOW_ROUND_VIEW_WIN_CASH, function (t) {
      var n = e.data.getData().parser.currentGameState.roundWinnings;
      if (dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency7.EBTM.UPDATE_SCORE
        }
      }), Log.d("%c ROUND WINNINGS", _dependency4.getKeyStyle(_dependency4.KeyStyle.Logic), n), e.showWinCash(n).then(function () {
        dispatch(_dependency5.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END);
      }), e.data.currentGameType === _dependency1.EGameType.MAIN_GAME) {
        var a = _dependency7.default.getData().winAmountTime;
        dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: n,
            tweenTime: a
          }
        });
      }
    }), this.on(_dependency5.GameEvent.SHOW_TOTAL_WIN_CASH, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      var a;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            a = e.data.getData().parser.currentGameState.roundWinnings, Log.d("%c TOTAL WINNINGS", _dependency4.getKeyStyle(_dependency4.KeyStyle.Logic), a), dispatch(_dependency5.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency7.EBTM.UPDATE_TOTAL_SCORE
              }
            }), e.showTotalWinCash(a).then(function () {
              dispatch(_dependency5.GameEvent.SHOW_TOTAL_WIN_CASH_END);
            });
          case 4:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency5.GameEvent.SHOW_WIN_LINE_END, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      var a;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            a = e.ndWinScore.getChildByName("content"), _dependency2.tween(a).bindNodeState(false).to(.4, {
              scale: new _dependency2.Vec3(0, 0, 0)
            }, {
              easing: _dependency2.easing.sineIn
            }).start();
          case 2:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency5.GameEvent.CHANGE_GAME_STYLE, function (t) {
      switch (t.data) {
        case _dependency1.EGameType.MAIN_GAME:
          e.changeGameMode("mg");
          break;
        case _dependency1.EGameType.FREE_GAME:
          e.changeGameMode("fg");
      }
    }), this.on(_dependency5.GameEvent.PLAY_MULTI_MARQUEE, function (t) {
      e.status !== Z.MARQUEE && e.startInfoMarquee();
    }), this.on(_dependency5.GameEvent.SET_REEL_RESULT, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e.rateCount = 0;
          case 1:
          case "end":
            return t.stop();
        }
      }, t);
    })));
  }, c.changeGameMode = function (e) {
    this.status = "";
    var t = _dependency7.default.getData().filePaths.common;
    this.ndWinScore.getComponent(_dependency2.Sprite).spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, e + "_winboard_02"), this.ndInfo.getComponent(_dependency2.Sprite).spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, e + "_winboard_01"), this.startInfoMarquee();
  }, c.startInfoMarquee = function () {
    this.status = Z.MARQUEE, this.ndWinScore.active = !1, this.ndInfo.active = !0;
    var e = _dependency7.default.getData().filePaths.localeSpriteFrame,
      t = "font_winboard_0" + this.currentMarqueeIndex;
    this.infoMsg.spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, e, t), this.infoMsg.node.x = 0, this.playMarquee();
  }, c.playMarquee = function () {
    var e = this;
    _dependency2.Tween.stopAllByTarget(this.infoMsg.node);
    var t = this.infoMsg.node.getComponent(_dependency2.UITransform).width,
      n = (590 - t) / 2,
      a = -t - n - 36;
    t > 590 && (this.infoMsg.node.x = -n), _dependency2.tween(this.infoMsg.node).bindNodeState(false).delay(1.6).to(6, {
      x: a
    }).call(function () {
      e.currentMarqueeIndex >= 4 ? e.currentMarqueeIndex = 1 : e.currentMarqueeIndex++, e.startInfoMarquee();
    }).start();
  }, c.showWinCashBefore = function (e) {
    var t = this;
    return new Promise(function (n) {
      t.ndInfo.active = !1, t.ndWinScore.active = !0, t.winTitle.node.active = !1, t.txtScore.string = _dependency9.CmmSlotUtils.formatNumber(e), t.playWinScoreTween2().then(function () {
        n(!0);
      });
    });
  }, c.showWinCash = function (e) {
    var t = this;
    return new Promise(function (n) {
      t.ndInfo.active = !1, t.ndWinScore.active = !0, t.winTitle.node.active = !0;
      var a = _dependency7.default.getData().filePaths.common;
      t.winTitle.spriteFrame = _dependency0.LoadUtils.getDirSp(t.data.module, a, "font_win_02"), t.txtScore.string = _dependency9.CmmSlotUtils.formatNumber(e), t.playWinScoreTween2().then(function () {
        n(!0);
      });
    });
  }, c.showTotalWinCash = function (e) {
    var t = this;
    return new Promise(function (n) {
      t.ndInfo.active = !1, t.ndWinScore.active = !0;
      var a = _dependency7.default.getData().filePaths.common;
      t.winTitle.spriteFrame = _dependency0.LoadUtils.getDirSp(t.data.module, a, "font_win_01"), t.txtScore.string = _dependency9.CmmSlotUtils.formatNumber(e), t.playWinScoreTween2().then(function () {
        n(!0);
      });
    });
  }, c.playMultipleWinScoreTween = function () {
    var e = this;
    return new Promise(function (t) {
      _dependency2.Tween.stopAllByTarget(e.infoMsg.node), e.status = Z.WIN_CASH, e.spineFx.node.active = !0, e.spineFx.node.scale = new _dependency2.Vec3(2, 2, 2), _dependency2.tween(e.spineFx.node).bindNodeState(false).to(.6, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: _dependency2.easing.linear
      }).start(), e.spineFx.clearTracks(), e.spineFx.setToSetupPose(), e.spineFx.setAnimation(0, "function", !1), e.spineFx.setCompleteListener(function () {
        e.spineFx.node.active = !1;
      }), _dependency2.tween(e.rateFx.node).bindNodeState(false).delay(.2).call(function () {
        e.amountFx.node.scale = new _dependency2.Vec3(1, 1, 1), e.amountFx.node.active = !0, e.amountFx.clearTracks(), e.amountFx.setToSetupPose(), e.amountFx.setAnimation(0, "explode", !1), e.amountFx.setCompleteListener(function () {
          e.amountFx.node.active = !1;
        });
      }).start();
      var n = e.ndWinScore.getChildByName("content");
      n.scale = new _dependency2.Vec3(8, 8, 8);
      var a = n.getComponent(_dependency2.UIOpacity);
      a.opacity = 0, _dependency2.Tween.stopAllByTarget(a), _dependency2.tween(a).bindNodeState(false).to(.6, {
        opacity: 255
      }).start(), _dependency2.Tween.stopAllByTarget(n), _dependency2.tween(n).bindNodeState(false).to(.5, {
        scale: new _dependency2.Vec3(.9, .9, .9)
      }, {
        easing: _dependency2.easing.quadOut
      }).to(.1, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: _dependency2.easing.quadOut
      }).call(function () {
        t(!0);
      }).start();
    });
  }, c.playWinScoreTween2 = function () {
    var e = this;
    return new Promise(function (t) {
      _dependency2.Tween.stopAllByTarget(e.infoMsg.node), e.status = Z.WIN_CASH, e.spineFx.node.active = !0, e.spineFx.clearTracks(), e.spineFx.setToSetupPose(), e.spineFx.setAnimation(0, "function", !1), e.spineFx.setCompleteListener(function () {
        e.spineFx.node.active = !1;
      }), e.amountFx.node.scale = new _dependency2.Vec3(.1, .1, .1), _dependency2.tween(e.amountFx.node).bindNodeState(false).to(.2, {
        scale: new _dependency2.Vec3(.6, .5, .5)
      }, {
        easing: _dependency2.easing.linear
      }).start(), e.amountFx.node.active = !0, e.amountFx.timeScale = 1.5, e.amountFx.clearTracks(), e.amountFx.setToSetupPose(), e.amountFx.setAnimation(0, "explode", !1), e.amountFx.setCompleteListener(function () {
        e.amountFx.node.active = !1;
      });
      var n = e.ndWinScore.getChildByName("content");
      n.scale = new _dependency2.Vec3(.1, .1, .1);
      var a = n.getComponent(_dependency2.UIOpacity);
      a.opacity = 0, _dependency2.Tween.stopAllByTarget(a), _dependency2.tween(a).bindNodeState(false).to(.32, {
        opacity: 255
      }).start(), _dependency2.Tween.stopAllByTarget(n), _dependency2.tween(n).bindNodeState(false).to(.3, {
        scale: new _dependency2.Vec3(1.35, 1.35, 1.35)
      }, {
        easing: _dependency2.easing.sineIn
      }).to(.36, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: _dependency2.easing.sineOut
      }).call(function () {
        t(!0);
      }).start();
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }, {
    key: "rateCount",
    get: function () {
      return this._rateCount;
    },
    set: function (e) {
      this._rateCount = e, this._rateLv = e <= 2 ? 1 : e <= 4 ? 2 : 3;
    }
  }]), t;
}(_dependency3.default)).prototype, "ndInfo", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(k.prototype, "infoMsg", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(k.prototype, "ndWinScore", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(k.prototype, "winTitle", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(k.prototype, "txtScore", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(k.prototype, "spineFx", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(k.prototype, "rateFx", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(k.prototype, "amountFx", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(k.prototype, "sideFx", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = k)) || H));
_dependency2.cclegacy._RF.pop();
