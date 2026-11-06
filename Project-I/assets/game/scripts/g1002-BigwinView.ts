// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "./g1002-GameConfigModel";
import * as _dependency9 from "./g1002-GameData";
import * as _dependency0 from "./g1002-GameEvent";
var _export;
export { _export as BigwinView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BigwinView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, r, a, o, s, l, u, c, h, p, g, d, B, m, f, _, w, S, N, W, L, A, T, E;
var b, v, y, O, C, R, I, P, k, D, U;
_dependency2.cclegacy._RF.push({}, "4ac00S/iiJDnLvHRzXNJXES", "BigwinView", void 0);
var F,
  V = _dependency2._decorator.ccclass,
  G = _dependency2._decorator.property;
!function (t) {
  t[t.RUN_SCORE = 0] = "RUN_SCORE", t[t.RUN_SCORE_END = 1] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 2] = "WAIT_CLOSE";
}(F || (F = {}));
_publish("BigwinView", (b = V("BigwinView"), v = _dependency5.inject("alert", _dependency2.Node), y = _dependency5.inject("alert/totalWin", _dependency2.Label), O = G(_dependency2.sp.Skeleton), C = G(_dependency2.sp.Skeleton), b((P = _dependency.applyDecoratedDescriptor((I = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrBg", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrFont", U, _dependency.assertThisInitialized(e)), e.bigwinFontFileNames = ["w_big", "w_super", "w_mega", "w_ultra", "w_legend"], e.totalWinNumber = 0, e.completedCB = null, e.tweenNumTween = null, e.bigwinVO = null, e.playBigFontLoop = null, e.showWinStatus = null, e.playPrizeLoopBtmSchedule = null, e.playInBtmSchedule = null, e.playLoopBtmSchedule = null, e.playVoiceBtmSchedule = null, e.currBigWinBg = null, e.currBigWinFont = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.start = function () {
    this.init();
  }, l.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/BigwinView";
  }, l.closeNodes = function () {}, l.playAnimation = function (t, e) {}, l.init = function () {
    this.setEventTouch();
  }, l.setEventTouch = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_DOWN, _dependency3.CmmUtils.debounce(function (i) {
      if (i.keyCode === _dependency2.KeyCode.SPACE) {
        if (!App.uiManager.isShow(e)) return;
        switch (t.showWinStatus) {
          case F.RUN_SCORE:
            t.directShowResult();
            break;
          case F.RUN_SCORE_END:
            t.removeAllTween();
            break;
          case F.WAIT_CLOSE:
        }
      }
    }));
  }, l.playInBtn = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e, i) {
      var n,
        r,
        a = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            r = 1, t.t0 = e, t.next = 1 === t.t0 ? 4 : 2 === t.t0 ? 7 : 3 === t.t0 ? 10 : 4 === t.t0 ? 13 : 5 === t.t0 ? 16 : 19;
            break;
          case 4:
          case 7:
          case 10:
            return n = _dependency8.EBTM.SMALL_PRIZE_IN, r = .46, t.abrupt("break", 20);
          case 13:
            return n = _dependency8.EBTM.ULTRA_IN, r = .75, t.abrupt("break", 20);
          case 16:
            return n = _dependency8.EBTM.LEGEND_IN, r = .8, t.abrupt("break", 20);
          case 19:
            return t.abrupt("break", 20);
          case 20:
            this.playInBtmSchedule = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
              var e, o;
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (dispatch(_dependency0.GameEvent.PLAY_BTM, {
                      data: {
                        url: n
                      }
                    }), !i) {
                      t.next = 7;
                      break;
                    }
                    return t.next = 4, App.globalAudio.getAudioInfo(n, a.bundle);
                  case 4:
                    e = t.sent, o = e.source, a.scheduleOnce(function () {
                      i();
                    }, o.duration * r);
                  case 7:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), this.scheduleOnce(this.playInBtmSchedule);
          case 22:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, i) {
      return t.apply(this, arguments);
    };
  }(), l.playLoopBtm = function (t) {
    var e,
      i = 0;
    switch (t) {
      case 1:
      case 2:
      case 3:
        e = _dependency8.EBTM.S_PRIZE_LOOP, i = 0;
        break;
      case 4:
      case 5:
        e = _dependency8.EBTM.L_PRIZE_LOOP, i = 0;
    }
    this.playLoopBtmSchedule = function () {
      dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: e,
          loop: !0
        }
      });
    }, this.scheduleOnce(this.playLoopBtmSchedule, i);
  }, l.playVocalBtm = function (t) {
    var e,
      i = 0;
    switch (t) {
      case 1:
        e = _dependency8.EBTM.BIG_VOCAL, i = .8;
        break;
      case 2:
        e = _dependency8.EBTM.SUPER_VOCAL, i = .8;
        break;
      case 3:
        e = _dependency8.EBTM.MEGA_VOCAL, i = .8;
        break;
      case 4:
        e = _dependency8.EBTM.ULTRA_VOCAL, i = 2;
        break;
      case 5:
        e = _dependency8.EBTM.LEGENDARY_VOCAL, i = 3;
    }
    this.playVoiceBtmSchedule = function () {
      dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: e
        }
      });
    }, this.scheduleOnce(this.playVoiceBtmSchedule, i);
  }, l.showBigwin = function (t, e, i) {
    var n = this;
    void 0 === i && (i = !1), this.totalWinNumber = t;
    var r = this.data.setBigWinReach(t);
    r && r.level && (this.currBigWinFont = this.arrFont[r.level - 1], this.currBigWinBg = this.arrBg[r.level - 1], this.currBigWinFont.node.active = !0, this.currBigWinBg.node.active = !0, this.currBigWinBg.clearTracks(), this.currBigWinBg.setToSetupPose(), this.currBigWinBg.setAnimation(0, "in", !1), this.currBigWinBg.setCompleteListener(function () {
      n.currBigWinBg.setCompleteListener(null), n.currBigWinBg.setAnimation(0, "loop", !0);
    }), this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose(), this.currBigWinFont.setAnimation(0, "in", !1), this.currBigWinFont.setCompleteListener(function () {
      n.currBigWinFont.setCompleteListener(null), n.currBigWinFont.setAnimation(0, "loop", !0);
    }), App.globalAudio.pauseMusic(), this.playInBtn(r.level, function () {
      if (n.playLoopBtm(r.level), n.showWinStatus != F.RUN_SCORE_END) {
        n.totalWin.string = t.toString(), n.totalWin.node.active = !0;
        var a = n.data.getData().definition.digital,
          o = {
            label: n.totalWin,
            start: 0,
            end: Number(_dependency7.CmmSlotUtils.formatNumber(t, !1, !1, a)),
            tweenTime: e,
            digital: a,
            useThousandsSeparator: !0,
            callback: function () {
              n.directShowResult();
            }
          };
        n.tweenNumTween = _dependency7.CmmSlotUtils.tweenNum(o), n.showWinStatus = F.RUN_SCORE, i && dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: Number(_dependency7.CmmSlotUtils.formatNumber(t, !1, !1, a)),
            tweenTime: e
          }
        }), n.alert.once(_dependency2.NodeEventType.TOUCH_END, n.directShowResult, n);
      }
    }), this.playVocalBtm(r.level));
  }, l.directShowResult = function () {
    var t = this;
    _dependency2.Tween.stopAllByTarget(this.node), this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.directShowResult), this.showWinStatus = F.RUN_SCORE_END, this.currBigWinBg && (this.currBigWinBg.setCompleteListener(null), this.currBigWinBg.setAnimation(0, "loop", !0)), this.currBigWinFont && (this.currBigWinFont.setCompleteListener(null), this.currBigWinFont.setAnimation(0, "loop", !0)), this.tweenNumTween && this.tweenNumTween.stop();
    var e = this.data.getData().definition.digital;
    this.totalWin.string = _dependency7.CmmSlotUtils.formatNumber(this.totalWinNumber, !1, !0, e), this.totalWin.node.active = !0, dispatch(_dependency0.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.totalWinNumber
    }), _dependency2.tween(this.node).bindNodeState(false).delay(1).call(function () {
      t.alert.once(_dependency2.NodeEventType.TOUCH_END, t.removeAllTween, t);
    }).start();
    var i = _dependency8.default.getData().bigwinAutoCloseTime;
    _dependency2.tween(this.node).bindNodeState(false).delay(i).call(function () {
      t.removeAllTween();
    }).start();
  }, l.removeAllTween = function () {
    var t = this;
    this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.removeAllTween), this.tweenNumTween && this.tweenNumTween.stop(), _dependency2.Tween.stopAllByTarget(this.node), this.currBigWinBg && (this.currBigWinBg.clearTracks(), this.currBigWinBg.setToSetupPose(), this.currBigWinBg.node.active = !1), this.currBigWinFont && (this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose(), this.currBigWinFont.node.active = !1), [_dependency8.EBTM.BIG_VOCAL, _dependency8.EBTM.SUPER_VOCAL, _dependency8.EBTM.MEGA_VOCAL, _dependency8.EBTM.ULTRA_VOCAL, _dependency8.EBTM.LEGENDARY_VOCAL, _dependency8.EBTM.SMALL_PRIZE_IN, _dependency8.EBTM.ULTRA_IN, _dependency8.EBTM.LEGEND_IN, _dependency8.EBTM.WIN_LOOP, _dependency8.EBTM.S_PRIZE_LOOP, _dependency8.EBTM.L_PRIZE_LOOP].forEach(function (t) {
      dispatch(_dependency0.GameEvent.STOP_BTM, {
        data: t
      });
    }), this.scheduleOnce(function () {
      t.unschedule(t.playInBtmSchedule), t.unschedule(t.playLoopBtmSchedule), t.unschedule(t.playVoiceBtmSchedule);
    }), App.globalAudio.resumeMusic(), dispatch(_dependency0.GameEvent.SHOW_BIG_WIN_END), this.close();
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "alert", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(I.prototype, "totalWin", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(I.prototype, "arrBg", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = _dependency.applyDecoratedDescriptor(I.prototype, "arrFont", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), R = I)) || R));
_dependency2.cclegacy._RF.pop();
