// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1004-GameConfigModel";
import * as _dependency6 from "./g1004-GameData";
import * as _dependency7 from "./g1004-GameEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-RunScoreComponent";
var _export;
export { _export as BigWinShowView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BigWinShowView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, o, a, s, r, l, c, p, u, h, d, f, g, S, T, A, v, _, y, E, m, P, w;
var B, k, L, W, M, z, O, D, N, b, C, I, R;
_dependency2.cclegacy._RF.push({}, "4ac00S/iiJDnLvHRzXNJXES", "BigWinShowView", void 0);
var F = _dependency2._decorator.ccclass,
  V = _dependency2._decorator.property;
_publish("BigWinShowView", (B = F("BigWinShowView"), k = _dependency4.inject("alert/totalWin", _dependency2.Label), L = V(_dependency2.sp.Skeleton), W = V(_dependency2.sp.Skeleton), M = V(_dependency2.sp.SkeletonData), z = V(_dependency2.sp.SkeletonData), B((N = _dependency.applyDecoratedDescriptor((D = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "txtTotalWin", N, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "spineFont", b, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "spineBackground", C, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "spDataFonts", I, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "spDataBackgrounds", R, _dependency.assertThisInitialized(t)), t.playPrizeStartSchedule = null, t.playPrizeEndSchedule = null, t.playPrizeVoiceSchedule = null, t.runScoreComponent = null, t.totalWin = 0, t.winLevel = 0, t.prizeDelayRatioMap = new Map([[1, .46], [2, .46], [3, .46], [4, .75], [5, .8]]), t.runScoreEndDelayMap = new Map([[1, .2], [2, .2], [3, .2], [4, .2], [5, .2]]), t.prizeStartMap = new Map([[1, _dependency5.EBTM.BIG_WIN], [2, _dependency5.EBTM.SUPER_WIN], [3, _dependency5.EBTM.MEGA_WIN], [4, _dependency5.EBTM.ULTRA_WIN], [5, _dependency5.EBTM.LEGENDARY_WIN]]), t.prizeEndMap = new Map([[1, _dependency5.EBTM.BIG_WIN_END], [2, _dependency5.EBTM.SUPER_WIN_END], [3, _dependency5.EBTM.MEGA_WIN_END], [4, _dependency5.EBTM.ULTRA_WIN_END], [5, _dependency5.EBTM.LEGENDARY_WIN_END]]), t.prizeVoiceMap = new Map([[1, _dependency5.EBTM.BIG_VOCAL], [2, _dependency5.EBTM.SUPER_VOCAL], [3, _dependency5.EBTM.MEGA_VOCAL], [4, _dependency5.EBTM.ULTRA_VOCAL], [5, _dependency5.EBTM.LEGENDARY_VOCAL]]), t;
  }
  _dependency.inheritsLoose(t, e), t.getPrefabUrl = function () {
    return "prefabs/normal/BigWinView";
  };
  var l = t.prototype;
  return l.onLoad = function () {
    e.prototype.onLoad.call(this), this.txtTotalWin.node.active = !1, this.spineBackground.node.active = !1, this.spineFont.node.active = !1, null === this.node.getComponent(_dependency8.RunScoreComponent) && (this.runScoreComponent = this.node.addComponent(_dependency8.RunScoreComponent));
    for (var t = App.pool.createPool("TOTAL_WIN_POOL"), n = 0; n < 5; n++) {
      var i = _dependency2.instantiate(this.txtTotalWin.node);
      t.cloneNode = i, t.put(i);
    }
  }, l.addEvents = function () {
    this.on(_dependency8.ERunScoreStatus.RUN_SCORE_END, this.directShowResult), this.on(_dependency8.ERunScoreStatus.WAIT_CLOSE, this.removeAllTween);
  }, l.removeEvents = function () {
    this.off(_dependency8.ERunScoreStatus.RUN_SCORE_END), this.off(_dependency8.ERunScoreStatus.WAIT_CLOSE);
  }, l.playPrizeStart = function (e, t) {
    var n = this,
      i = this.prizeStartMap.get(e),
      o = this.prizeDelayRatioMap.get(e) || 1;
    this.playPrizeStartSchedule = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var a, r;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (dispatch(_dependency7.GameEvent.PLAY_BTM, {
              data: {
                url: i,
                loop: !0
              }
            }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency5.EBTM.BIG_INTRO
              }
            }), !t) {
              e.next = 8;
              break;
            }
            return e.next = 5, App.globalAudio.getAudioInfo(i, n.bundle);
          case 5:
            a = e.sent, r = a.source, n.scheduleOnce(function () {
              t();
            }, r.duration * o);
          case 8:
          case "end":
            return e.stop();
        }
      }, e);
    })), this.scheduleOnce(this.playPrizeStartSchedule);
  }, l.playPrizeEnd = function () {
    var e = this.prizeEndMap.get(this.winLevel);
    this.playPrizeEndSchedule = function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: e
        }
      });
    }, this.scheduleOnce(this.playPrizeEndSchedule, 0);
  }, l.playPrizeVoice = function (e) {
    var t = this,
      n = this.prizeVoiceMap.get(this.winLevel);
    this.playPrizeVoiceSchedule = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function i() {
      var o, a;
      return _dependency.regeneratorRuntime().wrap(function (i) {
        for (;;) switch (i.prev = i.next) {
          case 0:
            if (dispatch(_dependency7.GameEvent.PLAY_BTM, {
              data: {
                url: n
              }
            }), !e) {
              i.next = 7;
              break;
            }
            return i.next = 4, App.globalAudio.getAudioInfo(n, t.bundle);
          case 4:
            o = i.sent, a = o.source, t.scheduleOnce(function () {
              e();
            }, .4 * a.duration);
          case 7:
          case "end":
            return i.stop();
        }
      }, i);
    })), this.scheduleOnce(this.playPrizeVoiceSchedule, .8);
  }, l.directShowResult = function () {
    this.playScoreEffect(this.node), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency5.EBTM.RUN_SCORE
    }), Array.from(this.prizeStartMap.values()).forEach(function (e) {
      dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: e
      });
    }), this.playPrizeEnd(), this.spineBackground && (this.spineBackground.clearTracks(), this.spineBackground.setToSetupPose(), this.spineBackground.setAnimation(0, "loop", !0)), this.spineFont && (this.spineFont.clearTracks(), this.spineFont.setToSetupPose(), this.spineFont.setAnimation(0, "loop", !0));
  }, l.removeAllTween = function () {
    var e = this;
    this.removeEvents(), this.stopAllMusic(), this.spineBackground && (this.spineBackground.clearTracks(), this.spineBackground.setToSetupPose(), this.spineBackground.node.active = !1), this.spineFont && (this.spineFont.clearTracks(), this.spineFont.setToSetupPose(), this.spineFont.node.active = !1), this.scheduleOnce(function () {
      e.unschedule(e.playPrizeStartSchedule), e.unschedule(e.playPrizeEndSchedule), e.unschedule(e.playPrizeVoiceSchedule);
    }), App.globalAudio.resumeMusic(), dispatch(_dependency7.GameEvent.SHOW_BIG_WIN_END), this.close();
  }, l.stopAllMusic = function () {
    Array.from(this.prizeStartMap.values()).forEach(function (e) {
      dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: e
      });
    }), Array.from(this.prizeEndMap.values()).forEach(function (e) {
      dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: e
      });
    }), Array.from(this.prizeVoiceMap.values()).forEach(function (e) {
      dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: e
      });
    });
  }, l.showBigWin = function (e, t) {
    var n = this,
      i = this.data.setBigWinReach(e);
    if (i && i.level) {
      this.totalWin = e, this.winLevel = i.level, this.spineBackground.node.active = !0, this.spineBackground.skeletonData = this.spDataBackgrounds[this.winLevel - 1], this.spineBackground.clearTracks(), this.spineBackground.setToSetupPose(), this.spineBackground.setAnimation(0, "in", !1), this.spineBackground.setCompleteListener(function () {
        n.spineBackground.setCompleteListener(null), n.spineBackground.setAnimation(0, "loop", !0);
      }), this.spineFont.node.active = !0, this.spineFont.skeletonData = this.spDataFonts[this.winLevel - 1], this.spineFont.clearTracks(), this.spineFont.setToSetupPose(), this.spineFont.setAnimation(0, "in", !1), this.spineFont.setCompleteListener(function () {
        n.spineFont.setCompleteListener(null), n.spineFont.setAnimation(0, "loop", !0);
      }), App.globalAudio.pauseMusic(), this.playPrizeStart(this.winLevel);
      var o = this.runScoreEndDelayMap.get(this.winLevel) || 1;
      _dependency2.tween(this).bindNodeState(false).delay(o).call(function () {
        var e = n.data.getData().definition.digital,
          i = _dependency5.default.getData().bigWinAutoCloseTime;
        n.txtTotalWin.node.scale = new _dependency2.Vec3(.4, .4, .4), _dependency2.tween(n.txtTotalWin.node).bindNodeState(false).to(.2, {
          scale: new _dependency2.Vec3(1.6, 1.6, 1.6)
        }, {
          easing: _dependency2.easing.quadIn
        }).to(.3, {
          scale: new _dependency2.Vec3(1, 1, 1)
        }, {
          easing: _dependency2.easing.backOut
        }).start(), n.runScoreComponent.runScore(n.txtTotalWin, n.totalWin, t, e, i, !1), dispatch(_dependency7.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency5.EBTM.RUN_SCORE
          }
        });
      }).start();
    }
  }, l.playScoreEffect = function (e) {
    _dependency2.Tween.stopAllByTarget(this.txtTotalWin.node);
    var t = this.txtTotalWin.node.getWorldPosition(),
      n = App.pool.getPool("TOTAL_WIN_POOL").get();
    n.getComponent(_dependency2.Label).string = this.txtTotalWin.string, n.active = !0, n.parent = e, n.scale = new _dependency2.Vec3(1.4, 1.4, 1.4), n.setWorldPosition(t), null === n.getComponent(_dependency2.UIOpacity) && n.addComponent(_dependency2.UIOpacity), n.getComponent(_dependency2.UIOpacity).opacity = 0, n.setSiblingIndex(0), _dependency2.tween(n).bindNodeState(false).delay(.18).to(.18, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.linear
    }).call(function () {
      n.removeFromParent(), App.pool.getPool("TOTAL_WIN_POOL").put(n);
    }).start(), _dependency2.tween(n.getComponent(_dependency2.UIOpacity)).bindNodeState(false).delay(.18).to(0, {
      opacity: 200
    }).to(.18, {
      opacity: 0
    }).start(), _dependency2.tween(this.txtTotalWin.node).bindNodeState(false).to(.16, {
      scale: new _dependency2.Vec3(1.6, 1.6, 1.6)
    }, {
      easing: _dependency2.easing.quadIn
    }).to(.2, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.backOut
    }).start();
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "txtTotalWin", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = _dependency.applyDecoratedDescriptor(D.prototype, "spineFont", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(D.prototype, "spineBackground", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(D.prototype, "spDataFonts", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), R = _dependency.applyDecoratedDescriptor(D.prototype, "spDataBackgrounds", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), O = D)) || O));
_dependency2.cclegacy._RF.pop();
