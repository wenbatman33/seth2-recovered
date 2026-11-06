// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-SpriteSymbolItem";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameSymbolID";
import * as _dependency6 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1002-GameConfigModel";
import * as _dependency9 from "./g1002-GameEvent";
import * as _dependency0 from "./g1002-GameData";
var _export;
export { _export as GameSymbol };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSymbol":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, o, s, r, m, l, c, u, d, h, p, f, S, y, A, _, T, v, b, g, k, L;
var P, D, I, C, E, N, M, O, B, G, W, Y, x, z, R, w, F, H;
_dependency2.cclegacy._RF.push({}, "8e979vGeGxLAKpkmaR9oR6e", "GameSymbol", void 0);
var U = _dependency2._decorator.ccclass,
  V = _dependency2._decorator.property,
  j = _dependency2._decorator.executeInEditMode;
_publish("GameSymbol", (P = U("GameSymbol"), D = j(), I = V({
  type: _dependency2.CCInteger,
  override: !0
}), C = V({
  type: _dependency2.CCInteger,
  override: !0
}), E = V({
  type: _dependency2.SpriteFrame,
  tooltip: "放入對應圖片。通常[0]會是空，其餘會與後端symbolID對齊",
  override: !0
}), N = V({
  type: _dependency2.Node,
  override: !0
}), M = _dependency4.inject("anim", _dependency2.Node), O = _dependency4.inject("frame", _dependency2.Node), B = _dependency4.inject("transformAnim", _dependency2.Node), P(G = D((Y = _dependency.applyDecoratedDescriptor((W = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "id", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "zIndex", x, _dependency.assertThisInitialized(e)), e.isExplode = !1, _dependency.initializerDefineProperty(e, "spriteFrames", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "staticSymbol", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "anim", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "frame", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "transformAnim", H, _dependency.assertThisInitialized(e)), e.originalParent = null, e.originalPoistion = _dependency2.v3(0, 0, 0), e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.start = function () {}, s.setSymbol = function (t, e, i) {
    if (void 0 === e && (e = !1), void 0 === i && (i = !0), this.staticSymbol.active = !0, this.isExplode = e, this.node.zIndex = this.zIndex, i && (this.originalParent = this.node.parent, this.originalPoistion = this.node.position), this.anim.active = !1, this.anim.getComponent(_dependency2.sp.Skeleton).clearTracks(), this.anim.getComponent(_dependency2.sp.Skeleton).setToSetupPose(), this.anim.getComponent(_dependency2.sp.Skeleton).setCompleteListener(null), this.frame.active = !1, this.frame.getComponent(_dependency2.sp.Skeleton).clearTracks(), this.frame.getComponent(_dependency2.sp.Skeleton).setToSetupPose(), this.frame.getComponent(_dependency2.sp.Skeleton).setCompleteListener(null), this.id = t, this.staticSymbol) {
      var n = this.spriteFrames[t];
      n && (this.staticSymbol.getComponent(_dependency2.Sprite).spriteFrame = n);
    }
  }, s.init = function () {}, s.getSymbolAnimation = function (t) {
    var e = this.id,
      i = {
        skeletonDataName: "",
        animation: ""
      },
      n = _dependency6.default.zeroPad(e, 2);
    return e < 2 ? (i.skeletonDataName = "symbol_" + n, i.animation = t) : e < 5 ? (i.skeletonDataName = "symbol_02-04", i.animation = t === _dependency5.ESymbolAnimType.WIN && _dependency5.ESymbolAnimType["SYMBOL_" + n + "_WIN"]) : e < 9 ? (i.skeletonDataName = "symbol_05-08", i.animation = t === _dependency5.ESymbolAnimType.WIN && _dependency5.ESymbolAnimType["SYMBOL_" + n + "_WIN"]) : (i.skeletonDataName = "symbol_" + n, i.animation = t), i;
  }, s.getFrameAnimation = function () {
    var t,
      e = this.id;
    return e < 2 ? t = "symbol_frame_C" : e < 5 ? t = "symbol_frame_A" : e < 9 && (t = "symbol_frame_B"), t;
  }, s.getTransformAnimation = function (t) {
    var e;
    return t < 2 ? e = this.data.is30TimesAnd5Trans() ? "trans_01_2" : "trans_01" : t < 9 && (e = this.data.is30TimesAnd5Trans() ? "trans_02_2" : "trans_02"), e;
  }, s.reset = function () {
    this.anim.active = !1, this.frame.active = !1, this.data.tempAnimTopMap.get(this.node.uuid) && (this.setOriginParent(), this.data.tempAnimTopMap.delete(this.node.uuid));
  }, s.setOriginParent = function () {
    this.node.setParent(this.originalParent), this.node.setPosition(0, this.originalPoistion.y);
  }, s.setScale = function () {
    var t = this.id === _dependency5.EBackendSymbolID.SCATTER || this.id === _dependency5.EBackendSymbolID.BONUS ? 1.2 : 1;
    this.staticSymbol.setScale(t, t), this.anim.setScale(t, t);
  }, s.playWinAnim = function (t, e) {
    var i = this;
    t && dispatch(_dependency9.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW, {
      data: this.node
    }), this.anim.active = !0, this.staticSymbol.active = !1;
    var n = this.anim.getComponent(_dependency2.sp.Skeleton),
      a = this.getSymbolAnimation(_dependency5.ESymbolAnimType.WIN),
      o = a.animation,
      s = a.skeletonDataName,
      r = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      m = _dependency7.LoadUtils.getDirSkeleton(this.data.module, r, s);
    n.skeletonData = m, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, o, !1), n.setCompleteListener(function () {
      t && i.setOriginParent(), e && e();
    });
  }, s.playScatterWinAnim = function (t, e) {
    var i = this;
    void 0 === e && (e = .8), this.staticSymbol.active = !1, this.anim.active = !0;
    var n = this.anim.getComponent(_dependency2.sp.Skeleton),
      a = this.getSymbolAnimation(_dependency5.ESymbolAnimType.WIN),
      o = a.animation,
      s = a.skeletonDataName,
      r = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      m = _dependency7.LoadUtils.getDirSkeleton(this.data.module, r, s);
    n.skeletonData = m, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, o, !1), n.setCompleteListener(function () {
      n.setAnimation(0, o, !1), n.setCompleteListener(function () {}), i.scheduleOnce(function () {
        t && t();
      }, e);
    });
  }, s.playBonusWinAnim = function (t) {
    this.playScatterWinAnim(t, 1.5);
  }, s.playHitAnim = function (t) {
    this.anim.active = !0;
    var e = this.anim.getComponent(_dependency2.sp.Skeleton),
      i = this.getSymbolAnimation(_dependency5.ESymbolAnimType.HIT),
      n = i.animation,
      a = i.skeletonDataName,
      o = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      s = _dependency7.LoadUtils.getDirSkeleton(this.data.module, o, a);
    e.skeletonData = s, e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, n, !1), e.setCompleteListener(function () {
      t && t();
    });
  }, s.playFrameAnim = function (t) {
    var e = this;
    if (!(this.id >= 9)) {
      this.frame.active = !0;
      var i = this.frame.getComponent(_dependency2.sp.Skeleton),
        n = this.getFrameAnimation(),
        a = _dependency8.default.getData().filePaths.frameSkeletonData,
        o = _dependency7.LoadUtils.getDirSkeleton(this.data.module, a, n);
      i.skeletonData = o, this.scheduleOnce(function () {
        e.staticSymbol.active = !1, e.anim.active = !1;
      }, .2), i.timeScale = this.data.isFullBoard(this.data.getData().parser.currentGameState.resultView) ? .5 : 1, i.clearTracks(), i.setToSetupPose(), i.setAnimation(0, "out", !1), i.setCompleteListener(function () {
        e.frame.active = !1, e.reset(), t && t();
      });
    }
  }, s.playTransformAnim = function (t, e) {
    var i = this;
    if (!(this.id >= 9)) {
      this.transformAnim.active = !0;
      var n = this.transformAnim.getComponent(_dependency2.sp.Skeleton);
      this.data.is30TimesAnd5Trans() && t === _dependency5.EBackendSymbolID.WILD && this.scheduleOnce(function () {
        dispatch(_dependency9.GameEvent.PLAY_SYMBOL_TRANS_HALO_ANIM);
      }, .65), n.setEventListener(function (t, e) {
        "shake" == e.data.name && i.shake();
      });
      var a = this.getTransformAnimation(t),
        o = t === _dependency5.EBackendSymbolID.WILD ? 1.3 : 2;
      this.scheduleOnce(function () {
        i.setSymbol(t, i.isExplode, !1);
      }, this.data.is30TimesAnd5Trans() ? o : .2), n.clearTracks(), n.setToSetupPose();
      n.setAnimation(0, a, !1);
      if (n.setCompleteListener(function () {
        i.transformAnim.active = !1, e && e();
      }), t < 2) {
        var s = this.data.is30TimesAnd5Trans() ? _dependency8.EBTM.SYMBOL_CHANGE_WILD_PLUS_A : _dependency8.EBTM.SYMBOL_CHANGE_WILD,
          r = this.data.is30TimesAnd5Trans() ? .7 : 0;
        this.scheduleOnce(function () {
          dispatch(_dependency9.GameEvent.PLAY_REPEAT_BTM, {
            data: {
              url: s
            }
          }), i.data.is30TimesAnd5Trans() && i.scheduleOnce(function () {
            dispatch(_dependency9.GameEvent.PLAY_REPEAT_BTM, {
              data: {
                url: _dependency8.EBTM.SYMBOL_CHANGE_WILD_PLUS_B
              }
            });
          }, .2);
        }, r);
      } else if (t < 9) {
        var m = this.data.is30TimesAnd5Trans() ? _dependency9.GameEvent.PLAY_BTM : _dependency9.GameEvent.PLAY_REPEAT_BTM;
        dispatch(m, {
          data: {
            url: _dependency8.EBTM.SYMBOL_CHANGE_SYMBOL
          }
        }), this.data.is30TimesAnd5Trans() && this.scheduleOnce(function () {
          dispatch(_dependency9.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency8.EBTM.SYMBOL_CHANGE_SYMBOL_PLUS
            }
          });
        }, 1.3);
      }
    }
  }, s.shake = function () {
    for (var t, e = this, i = this.node.position.clone(), n = _dependency2.tween(this.node).bindNodeState(false), a = 0; a < 4; a++) n = n.then((t = void 0, t = new _dependency2.Vec3(5 * (Math.random() - .5), 5 * (Math.random() - .5), 0), _dependency2.tween().bindNodeState(false).to(.03, {
      x: i.x + t.x,
      y: i.y + t.y
    }).to(.03, {
      x: i.x,
      y: i.y
    })));
    n.call(function () {
      e.node.setPosition(i);
    }).start();
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency9.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT, function () {
      t.data.tempAnimTopMap.get(t.node.uuid) && (t.setOriginParent(), t.data.tempAnimTopMap.delete(t.node.uuid));
    }), this.on(_dependency9.GameEvent.SKIP_WIN_LINE, function () {
      t.data.tempAnimTopMap.get(t.node.uuid) && (t.frame.active = !1, t.anim.active = !1, t.staticSymbol.active = !0);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency3.SpriteSymbolItem)).prototype, "id", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), x = _dependency.applyDecoratedDescriptor(W.prototype, "zIndex", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), z = _dependency.applyDecoratedDescriptor(W.prototype, "spriteFrames", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), R = _dependency.applyDecoratedDescriptor(W.prototype, "staticSymbol", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(W.prototype, "anim", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(W.prototype, "frame", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(W.prototype, "transformAnim", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = W)) || G) || G));
_dependency2.cclegacy._RF.pop();
