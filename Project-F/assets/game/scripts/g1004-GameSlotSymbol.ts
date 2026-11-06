// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency4 from "./g1004-GameConfigModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency6 from "./g1004-GameSymbolID";
import * as _dependency7 from "./g1004-GameData";
import * as _dependency8 from "../../shared/scripts/main-ReelEnum";
import * as _dependency9 from "./g1004-GameEvent";
var _export;
export { _export as GameSlotSymbol };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSlotSymbol":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, s, r, l, m, u, p, c, h, d, g, f, y, b, v, S, k, A, D, L, C, _, x, I, T, P, w, F;
var R, N, E, z, B, U, H, W, G, O, q, M, K, J, j, V, Y, Q, X, Z, $, tt, et, nt, it, ot, at, st, rt;
_dependency2.cclegacy._RF.push({}, "1146bWvYsxFMK2cdiqfbwcO", "GameSlotSymbol", void 0);
var lt = _dependency2._decorator.ccclass,
  mt = _dependency2._decorator.property;
_publish("GameSlotSymbol", (R = lt("GameSlotSymbol"), N = mt({
  type: _dependency2.SpriteFrame,
  tooltip: "Symbol預製物件"
}), E = mt({
  type: _dependency2.Node,
  tooltip: "壓暗圖層"
}), z = mt({
  type: _dependency2.Node,
  tooltip: "anim"
}), B = mt({
  type: _dependency2.Node,
  tooltip: "frame"
}), U = mt({
  type: _dependency2.sp.Skeleton,
  tooltip: "fx"
}), H = mt({
  type: _dependency2.sp.Skeleton,
  tooltip: "spHighLightLv"
}), W = mt({
  type: _dependency2.Node,
  tooltip: "staticSymbol"
}), G = mt({
  type: _dependency2.Sprite,
  tooltip: "frameImg"
}), O = mt({
  type: _dependency2.sp.Skeleton,
  tooltip: "框升級特效"
}), q = mt({
  type: _dependency2.Node,
  tooltip: "倍數特效顯示節點"
}), M = mt({
  type: _dependency2.Node,
  tooltip: "levelUp"
}), K = mt({
  type: _dependency2.Node
}), J = mt({
  type: _dependency2.Label
}), R((Y = _dependency.applyDecoratedDescriptor((V = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "spriteFrames", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndDark", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndAnim", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndFrame", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spFx", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spHighLightLv", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndSymbolSprite", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "frameImg", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spTransformAnim", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndRate", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndLevelUp", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "box", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "Label", rt, _dependency.assertThisInitialized(e)), e.nodeRowCol = "", e.symbolLabels = [], e._symbolIndex = 0, e._symbolID = 0, e._reelIndex = -1, e._order = -1, e._groupCount = 1, e._symbolPosition = -1, e._rate = 0, e._level = 0, e._originalParent = null, e._originalPosition = new _dependency2.Vec3(0, 0, 0), e._status = _dependency8.EReelStatus.NONE, e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    this._originalParent = this.node.parent, this._originalPosition = this.node.position, this.status = _dependency8.EReelStatus.NONE, this.initData();
  }, l.initData = function () {
    this.level = 0, this.symbolID = -1, this.rate = 0, this.ndRate.getChildByName("txt").active = !1, this.ndAnim.active = !1, this.ndFrame.active = !1, this.spFx.node.active = !1, this.spHighLightLv.node.active = !1, this.spTransformAnim.node.active = !1, this.ndDark.active = !1, this.ndDark.getComponent(_dependency2.UIOpacity).opacity = 0, this.getRateSkeleton().node.active = !1, this.ndSymbolSprite.active = !0, this.frameImg.spriteFrame = null, this.frameImg.node.active = !1, this.box.getComponent(_dependency2.Sprite).spriteFrame = null, this.box.active = !1;
  }, l.playWinAnim = function () {
    var t = this;
    return new Promise(function (e) {
      t.ndAnim.active = !0, t.isEnableDark(!1);
      var n = t.getSymbolAnimation(_dependency6.ESymbolAnimType.WIN),
        i = n.skeletonDataName,
        o = n.animation,
        a = _dependency4.default.getData().filePaths.symbolsSkeletonData,
        s = t.getLoadSkeleton(t.ndAnim, a, i);
      _dependency2.tween(t.node).bindNodeState(false).to(.2, {
        scale: new _dependency2.Vec3(1.1, 1.1, 1.1)
      }, {
        easing: _dependency2.easing.quadOut
      }).to(.36, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: _dependency2.easing.smooth
      }).start(), s.paused = !1, s.timeScale = .87, s.setAnimation(1, o, !1), s.setCompleteListener(function () {
        s.setCompleteListener(null), e(!0);
      });
    });
  }, l.showWinPos = function () {
    this.ndAnim.active = !0;
    var t = _dependency4.default.getData().filePaths.frameSkeletonData,
      e = this.getSymbolAnimation(_dependency6.ESymbolAnimType.WIN).skeletonDataName;
    this.getLoadSkeleton(this.ndAnim, t, e);
  }, l.showHighLight = function (t) {
    this.ndFrame.active = !0;
    var e = _dependency4.default.getData().filePaths.frameSkeletonData,
      n = "symbol_frame_" + this.groupCount,
      i = _dependency3.LoadUtils.getDirSkeleton(this.data.module, e, n),
      o = this.ndFrame.getComponent(_dependency2.sp.Skeleton);
    o.skeletonData = i, o.clearTracks(), o.setToSetupPose(), o.setAnimation(0, "highlight", !0), this.playWinAnim();
  }, l.playUpLevelAnim = function (t, e) {
    var n = this;
    return new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function i(o) {
      var r, l, m;
      return _dependency.regeneratorRuntime().wrap(function (i) {
        for (;;) switch (i.prev = i.next) {
          case 0:
            n.ndAnim.active = !1, n.ndLevelUp.active = !0, r = _dependency4.default.getData().filePaths.frameSkeletonData, l = "symbol_bg_" + n.groupCount, (m = n.getLoadSkeleton(n.ndLevelUp, r, l)).clearTracks(), m.setToSetupPose(), m.setAnimation(0, "lv_up", !1), m.setCompleteListener(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    m.setCompleteListener(null);
                  case 1:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))), _dependency2.tween(n.node).bindNodeState(false).delay(0).call(function () {
              var e = (1 === n.level ? "silver" : "gold") + "_lv_up_" + n.groupCount;
              n.spTransformAnim.node.active = !0, n.spTransformAnim.clearTracks(), n.spTransformAnim.setToSetupPose(), n.spTransformAnim.setAnimation(0, e, !1), n.spTransformAnim.setCompleteListener(function () {
                n.spTransformAnim.setCompleteListener(null), n.spTransformAnim.node.active = !1;
              }), n.spTransformAnim.setEventListener(function (e, i) {
                "start" === i.data.name && (n.level = t);
              });
            }).start(), n.playShockEffect(1), _dependency2.tween(n.ndLevelUp).bindNodeState(false).delay(.618).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
              var i;
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, n.changeSymbol(e);
                  case 2:
                    i = n.ndLevelUp.getComponent(_dependency2.UIOpacity), _dependency2.tween(i).bindNodeState(false).to(.3, {
                      opacity: 0
                    }, {
                      easing: _dependency2.easing.fade
                    }).call(function () {
                      n.ndLevelUp.active = !1, o(!0);
                    }).start();
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))).start();
          case 12:
          case "end":
            return i.stop();
        }
      }, i);
    })));
  }, l.updateLevelFrame = function () {
    if (!(0 === this.level || this.groupCount < 2)) {
      var t = _dependency4.default.getData().filePaths,
        e = t.symbolsSpriteAtlas,
        n = t.symbolsSpriteBlurAtlas,
        i = (1 === this.level ? "silver" : "gold") + "_" + this.groupCount,
        o = this.status === _dependency8.EReelStatus.START_SPIN ? n : e,
        a = _dependency3.LoadUtils.getDirAtlas(this.data.module, o, i);
      this.frameImg.spriteFrame = a, this.frameImg.node.active = !0;
    }
  }, l.playFrameOut = function () {
    var t = this;
    return new Promise(function (e) {
      var n = t.box.getComponent(_dependency2.UIOpacity);
      _dependency2.Tween.stopAllByTarget(n), _dependency2.tween(n).bindNodeState(false).delay(.6).to(.3, {
        opacity: 0
      }, {
        easing: _dependency2.easing.fade
      }).call(function () {
        t.ndSymbolSprite.active = !1, t.ndAnim.active = !1, t.frameImg.node.active = !1, t.box.getComponent(_dependency2.Sprite).spriteFrame = null;
      }).start();
      var i = _dependency4.default.getData().filePaths.frameSkeletonData,
        o = "symbol_frame_" + t.groupCount,
        a = _dependency3.LoadUtils.getDirSkeleton(t.data.module, i, o);
      t.ndFrame.active = !0;
      var s = t.ndFrame.getComponent(_dependency2.sp.Skeleton);
      s.skeletonData = a, s.clearTracks(), s.setToSetupPose(), s.timeScale = 1.618, s.setAnimation(0, "out", !1), s.setCompleteListener(function () {
        s.setCompleteListener(null), e(!0);
      });
    });
  }, l.playShockEffect = function (t, e) {
    if (void 0 === e && (e = .56), !(t > 1)) {
      var n = .6,
        i = .0268,
        o = this.node.getPosition();
      _dependency2.tween(this.node).bindNodeState(false).delay(e).sequence(_dependency2.tween().bindNodeState(false).to(i, {
        position: new _dependency2.Vec3(-4.2 + o.x, -4.8 + o.y)
      }), _dependency2.tween().bindNodeState(false).to(i, {
        position: new _dependency2.Vec3(4.8 + o.x, -9 * n + o.y)
      }), _dependency2.tween().bindNodeState(false).to(i, {
        position: new _dependency2.Vec3(3 + o.x, -4.2 + o.y)
      }), _dependency2.tween().bindNodeState(false).to(i, {
        position: new _dependency2.Vec3(6 * n + o.x, 6 * n + o.y)
      }), _dependency2.tween().bindNodeState(false).to(i, {
        position: new _dependency2.Vec3(-6 * n + o.x, -6 * n + o.y)
      }), _dependency2.tween().bindNodeState(false).to(i, {
        position: new _dependency2.Vec3(9 * n + o.x, -9 * n + o.y)
      }), _dependency2.tween().bindNodeState(false).to(i, {
        position: o
      })).start();
    }
  }, l.playFrameOutEffect = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.box.active = !0, e.ndSymbolSprite.active = !1, e.frameImg.node.active = !1, e.ndAnim.active = !1, e.box.getComponent(_dependency2.Sprite).spriteFrame = null;
      var i = "out_" + t;
      e.playSymbolFxAnim(i).then(function () {
        n(!0);
      });
    });
  }, l.playScatterWinAnim = function (t) {
    var e = this.getSymbolAnimation(_dependency6.ESymbolAnimType.WIN),
      n = e.animation,
      i = e.skeletonDataName,
      o = _dependency4.default.getData().filePaths.symbolsSkeletonData,
      a = _dependency3.LoadUtils.getDirSkeleton(this.data.module, o, i);
    this.ndAnim.active = !0;
    var s = this.ndAnim.getComponent(_dependency2.sp.Skeleton);
    s.skeletonData = a, s.clearTracks(), s.setToSetupPose(), s.paused = !1, s.setAnimation(0, n, !0), s.setCompleteListener(function () {
      s.setCompleteListener(null), t && t();
    });
  }, l.randomSymbol = function (t, e) {
    void 0 === t && (t = 1), void 0 === e && (e = this.symbolLabels.length), this.ndAnim.active = !1, this._symbolIndex = _dependency2.randomRangeInt(t, e), this.symbolID = this.symbolLabels[this._symbolIndex];
  }, l.playExtraAnim = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.ndAnim.active = !0;
      var i = e.ndAnim.getComponent(_dependency2.sp.Skeleton),
        o = e.getSymbolAnimation(t),
        a = o.animation,
        s = o.skeletonDataName,
        r = _dependency4.default.getData().filePaths.symbolsSkeletonData,
        l = _dependency3.LoadUtils.getDirSkeleton(e.data.module, r, s);
      i.skeletonData = l, i.clearTracks(), i.setToSetupPose(), i.setAnimation(0, a, !0), t === _dependency6.ESymbolAnimType.IDLE ? (i.paused = !0, n(!0)) : (i.paused = !1, i.setCompleteListener(function () {
        i.setCompleteListener(null), n(!0);
      }));
    });
  }, l.isEnableDark = function (t) {
    var e = this;
    _dependency2.Tween.stopAllByTarget(this.ndDark), this.ndDark.active = !0, _dependency2.tween(this.ndDark.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.16, {
      opacity: t ? 255 : 0
    }, {
      easing: t ? _dependency2.easing.fade : _dependency2.easing.quintIn
    }).call(function () {
      e.ndDark.active = !!t;
    }).start();
  }, l.initRateAnim = function () {
    this.ndAnim.active = !1, this.ndFrame.active = !1, this.ndSymbolSprite.active = !1, this.box.active = !0, this.box.getComponent(_dependency2.Sprite).spriteFrame = null, this.groupCount = 1, this.ndRate.active = !0, this.ndRate.getChildByName("txt").active = !0, this.ndRate.getChildByName("txt").getComponent(_dependency2.UIOpacity).opacity = 255, this.getRateSkeleton().node.active = !0;
  }, l.playRateAnim = function (t) {
    var e = this;
    return new Promise(function (n) {
      var i = e.getRateSkeleton();
      i.node.active = !0;
      var o = i.node.getComponent(_dependency2.UIOpacity);
      o.opacity = 0, _dependency2.Tween.stopAllByTarget(o), _dependency2.tween(o).bindNodeState(false).to(.2, {
        opacity: 255
      }, {
        easing: _dependency2.easing.fade
      }).start(), i.setAnimation(0, t, !1), "big" === t && (i.node.scale = new _dependency2.Vec3(2.2, 2.2, 2), i.timeScale = 1.6, i.getCurrent(0).animationStart = .3), i.setCompleteListener(function () {
        i.node.scale = new _dependency2.Vec3(1, 1, 1), i.setCompleteListener(null), n(!0);
      });
    });
  }, l.playSymbolFxAnim = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.spFx.node.active = !0, e.spFx.clearTracks(), e.spFx.setToSetupPose(), e.spFx.timeScale = 1.36, e.spFx.setAnimation(1, t, !1), _dependency2.tween(e.spFx.node).bindNodeState(false).delay(.3).to(.1, {
        scale: new _dependency2.Vec3(1.3, 1.3, 1.2)
      }).start(), e.spFx.setCompleteListener(function () {
        e.spFx.setCompleteListener(null), n(!0);
      });
    });
  }, l.playHighLightLvAnim = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.spHighLightLv.node.active = !0, e.spHighLightLv.clearTracks(), e.spHighLightLv.setToSetupPose(), e.spHighLightLv.timeScale = 2.4, e.spHighLightLv.setAnimation(0, "lv" + t, !1), e.spHighLightLv.setCompleteListener(function () {
        e.spHighLightLv.setCompleteListener(null), e.spHighLightLv.node.active = !1, n(!0);
      });
    });
  }, l.changeSymbol = function (t) {
    var e = this;
    return new Promise(function (n) {
      if (_dependency2.Tween.stopAllByTarget(e), t === _dependency6.EBackendSymbolID.WILD) e.symbolID = t, e.ndLevelUp.active = !1, e.playWinAnim(), _dependency2.tween(e).bindNodeState(false).delay(0).call(function () {
        n(!0);
      }).start();else {
        _dependency2.tween(e).bindNodeState(false).repeat(8, _dependency2.tween().bindNodeState(false).delay(.19).call(function () {
          var t;
          do {
            t = _dependency2.randomRangeInt(4, 13);
          } while (t === e._symbolIndex);
          e._symbolIndex = t, e.symbolID = e.symbolLabels[e._symbolIndex];
        }).start()).call(function () {
          e.symbolID = t, e.ndLevelUp.active = !1, dispatch(_dependency9.GameEvent.UPGRADE_END), _dependency2.tween(e).bindNodeState(false).delay(0).call(function () {
            n(!0);
          }).start();
        }).start();
      }
    });
  }, l.getSymbolAnimation = function (t) {
    var e = this.symbolID,
      n = this.groupCount,
      i = {
        skeletonDataName: "symbol_" + _dependency5.default.zeroPad(e, 2),
        animation: ""
      };
    switch (e) {
      case _dependency6.EBackendSymbolID.WILD:
        i.animation = "x" + n + "_" + t;
        break;
      case _dependency6.EBackendSymbolID.JACKPOT:
      case _dependency6.EBackendSymbolID.SCATTER:
        i.animation = t;
        break;
      default:
        i.animation = "x" + n + "_" + t;
    }
    return i;
  }, l.updateSymbol = function () {
    var t,
      e = null == (t = this.ndSymbolSprite) ? void 0 : t.getComponent(_dependency2.Sprite);
    if (this.spriteFrames[this._symbolIndex]) {
      var n = _dependency4.default.getData().filePaths,
        i = n.symbolsSpriteAtlas,
        o = n.symbolsSpriteBlurAtlas,
        a = this.status === _dependency8.EReelStatus.START_SPIN ? o : i,
        s = "symbol_" + _dependency5.default.zeroPad(this._symbolIndex, 2),
        r = _dependency3.LoadUtils.getDirAtlas(this.data.module, a, s);
      e.spriteFrame = r, this.box.active = !0, this.updateBackground(), this.updateLevelFrame();
    } else e.spriteFrame = null, this.box.active = !1;
  }, l.updateBackground = function () {
    var t = this.box.getComponent(_dependency2.Sprite),
      e = this.box.getComponent(_dependency2.UITransform),
      n = this.box.parent.getComponent(_dependency2.Layout),
      i = this.ndDark.getComponent(_dependency2.UITransform);
    if (0 === this.groupCount || -1 === this.symbolID) return this.box.active = !1, void (t.spriteFrame = null);
    switch (this.symbolID) {
      case _dependency6.EBackendSymbolID.WILD:
      case _dependency6.EBackendSymbolID.JACKPOT:
      case _dependency6.EBackendSymbolID.SCATTER:
        this.ndAnim.active = !1, t.spriteFrame = null, e.height = 100 * this.groupCount, n.updateLayout(!0);
        var o = this.getSymbolAnimation(_dependency6.ESymbolAnimType.IDLE),
          a = o.skeletonDataName,
          s = o.animation,
          r = _dependency4.default.getData().filePaths.symbolsSkeletonData,
          l = this.getLoadSkeleton(this.ndAnim, r, a);
        this.ndAnim.active = !0, l.clearTracks(), l.setToSetupPose(), l.setAnimation(0, s, !0), l.paused = !0;
    }
    if (!(this.symbolID > 12 || this.symbolID < 2)) {
      this.ndAnim.active = !1;
      var m,
        u = _dependency5.default.zeroPad(this.symbolID, 2),
        p = "";
      if (this.symbolID < 4) {
        if (1 == this.groupCount) p = "symbol_" + u;else (null == (m = this.ndSymbolSprite) ? void 0 : m.getComponent(_dependency2.Sprite)).spriteFrame = null, p = "symbol_" + u + "_" + this.groupCount;
      } else this.symbolID, p = "symbol_bg" + u + "_" + this.groupCount;
      var c = _dependency4.default.getData().filePaths,
        d = c.symbolsSpriteAtlas,
        g = c.symbolsSpriteBlurAtlas,
        f = this.status === _dependency8.EReelStatus.START_SPIN ? g : d,
        y = _dependency3.LoadUtils.getDirAtlas(this.data.module, f, p);
      t.spriteFrame = y, e.height = 100 * this.groupCount, e.width = 118, n.updateLayout(!0), i.height = e.height;
    }
  }, l.getRateSkeleton = function () {
    var t = this.ndRate.getChildByName("spine").getComponent(_dependency2.sp.Skeleton),
      e = _dependency4.default.getData().filePaths.frameSkeletonData,
      n = _dependency3.LoadUtils.getDirSkeleton(this.data.module, e, "times_light");
    return t.skeletonData = n, t.clearTracks(), t.setToSetupPose(), t;
  }, l.getLoadSkeleton = function (t, e, n) {
    var i = t.getComponent(_dependency2.sp.Skeleton),
      o = _dependency3.LoadUtils.getDirSkeleton(this.data.module, e, n);
    return i.skeletonData = o, i.clearTracks(), i.setToSetupPose(), i;
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }, {
    key: "symbolID",
    get: function () {
      return this._symbolID;
    },
    set: function (t) {
      this._symbolID = t, this._symbolIndex = this.symbolLabels.indexOf(this._symbolID), this.updateSymbol();
    }
  }, {
    key: "reelIndex",
    get: function () {
      return this._reelIndex;
    },
    set: function (t) {
      this._reelIndex = t;
    }
  }, {
    key: "order",
    get: function () {
      return this._order;
    },
    set: function (t) {
      this._order = t;
    }
  }, {
    key: "groupCount",
    get: function () {
      return this._groupCount;
    },
    set: function (t) {
      this._groupCount = t, this.updateBackground();
    }
  }, {
    key: "symbolPosition",
    get: function () {
      return this._symbolPosition;
    },
    set: function (t) {
      this._symbolPosition = t, this.Label.string = "" + this._symbolPosition;
    }
  }, {
    key: "rate",
    get: function () {
      return this._rate;
    },
    set: function (t) {
      if (this._rate = t, this.ndRate.active = this.symbolID === _dependency6.EBackendSymbolID.RATE && this._rate > 0, this.ndRate.active) {
        this.ndRate.getComponent(_dependency2.Widget).updateAlignment();
        var e = this.getRateSkeleton();
        e.node.active = !0, e.setAnimation(0, "idle", !0);
        var n = this.ndRate.getChildByName("txt");
        n.active = !0, _dependency2.Tween.stopAllByTarget(n);
        var i = {
            scale: new _dependency2.Vec3(1.16, 1.16, 1.16)
          },
          o = {
            scale: new _dependency2.Vec3(1, 1, 1)
          };
        _dependency2.tween(n).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).delay(.06).to(.3, i, {
          easing: _dependency2.easing.smooth
        }).to(.25, o, {
          easing: _dependency2.easing.smooth
        })).start();
      }
    }
  }, {
    key: "level",
    get: function () {
      return this._level;
    },
    set: function (t) {
      this._level = t, this.updateLevelFrame();
    }
  }, {
    key: "status",
    get: function () {
      return this._status;
    },
    set: function (t) {
      this._status = t, this.updateSymbol();
    }
  }]), e;
}(_dependency2.Component)).prototype, "spriteFrames", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Q = _dependency.applyDecoratedDescriptor(V.prototype, "ndDark", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(V.prototype, "ndAnim", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(V.prototype, "ndFrame", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(V.prototype, "spFx", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(V.prototype, "spHighLightLv", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(V.prototype, "ndSymbolSprite", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(V.prototype, "frameImg", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(V.prototype, "spTransformAnim", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(V.prototype, "ndRate", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(V.prototype, "ndLevelUp", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(V.prototype, "box", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(V.prototype, "Label", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = V)) || j));
_dependency2.cclegacy._RF.pop();
