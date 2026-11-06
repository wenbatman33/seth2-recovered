// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1008-GameConfigModel";
import * as _dependency6 from "./g1008-GameData";
import * as _dependency7 from "./g1008-GameSymbolID";
import * as _dependency8 from "./g1008-GameEvent";
import * as _dependency9 from "./g1008-types";
var _export;
export { _export as Symbol };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Symbol":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, e, n, o, s, a, l, r, m, u, c, p, y, b, h, S, f, d, A, v, g, I, D, T, _;
var E, L, B, R, C, w, O, P, M, G, k, z, N, F, U, Y, x;
_dependency2.cclegacy._RF.push({}, "1bc3bSKjbRCYK3jwCSvD/SD", "Symbol", void 0);
var W = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("Symbol", (E = W("Symbol"), L = _dependency4.inject("frame", _dependency2.sp.Skeleton), B = _dependency4.inject("symbolSprite", _dependency2.Sprite), R = _dependency4.inject("symbolSpriteBlur", _dependency2.Sprite), C = _dependency4.inject("upgrade", _dependency2.sp.Skeleton), w = _dependency4.inject("symbolOut", _dependency2.sp.Skeleton), O = _dependency4.inject("times", _dependency2.Label), P = _dependency4.inject("symbolAnimation", _dependency2.sp.Skeleton), E((k = _dependency.applyDecoratedDescriptor((G = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var i, e = arguments.length, s = new Array(e), a = 0; a < e; a++) s[a] = arguments[a];
    return i = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "frameSpine", k, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolSprite", z, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolSpriteBlur", N, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "upgradeAnimation", F, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolOutSpine", U, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "times", Y, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolAnimation", x, _dependency.assertThisInitialized(i)), i.symbolID = null, i.posId = null, i.isRare = null, i;
  }
  _dependency.inheritsLoose(i, t);
  var a = i.prototype;
  return a.onLoad = function () {}, a.start = function () {
    this.node.layer = _dependency2.Layers.Enum.UI_2D;
  }, a.onDestroy = function () {}, a.update = function (t) {}, a.setSymbolSprite = function (t) {
    var i = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0"),
      e = this.data.getSymbolSpriteFrame(i);
    this.symbolSprite.spriteFrame = e, this.symbolSprite.node.active = !0;
  }, a.setIsRare = function () {
    var t = this,
      i = this.data.getData().gameState.timesSymbols.find(function (i) {
        return i.isRare && i.symbolPos == t.posId;
      });
    this.isRare = !!i;
  }, a.setTimesText = function (t) {
    this.times.node.active = !0, this.times.string = t ? t + "x" : "";
  }, a.reset = function () {
    this.isRare = !1, this.symbolAnimation.node.active = !1, this.frameSpine.node.active = !1, this.symbolOutSpine.node.active = !1, this.symbolSpriteBlur.node.active = !1, this.symbolSprite.node.active = !0, _dependency2.Tween.stopAllByTarget(this), _dependency2.Tween.stopAllByTarget(this.node), this.symbolAnimation && this.symbolAnimation.setCompleteListener(null), this.symbolOutSpine && this.symbolOutSpine.setCompleteListener(null);
  }, a.setData = function (t) {
    var i = t.symbolId,
      e = t.posId,
      n = [_dependency7.EBackendSymbolID.ORANGE_GEM, _dependency7.EBackendSymbolID.RED_GEM, _dependency7.EBackendSymbolID.PURPLE_GEM, _dependency7.EBackendSymbolID.BLUE_GEM, _dependency7.EBackendSymbolID.GREEN_GEM].includes(i) ? 1.15 : 1;
    this.symbolSprite.node.setScale(n, n), this.symbolSpriteBlur.node.setScale(n, n), this.name = "" + e, this.posId = e, this.symbolID = i, this.setIsRare(), this.setSymbolSprite(i), this.setSymbolBlur(i), this.times.node.active = !1;
  }, a.recycleSymbol = function () {
    this.hide(), this.reset(), App.pool.getPool(_dependency9.EPool.SYMBOL_POOL).put(this.node);
  }, a.playLoopAnim = function () {
    var t = this;
    _dependency5.default.useProEffect && this.scheduleOnce(function () {
      t.playAnim(t.symbolID, _dependency7.ESymbolAnimType.LOOP, !0);
    }, 0);
  }, a.playWinAnim = function (t) {
    var i = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1), this.scheduleOnce(function () {
      t && t();
    }, 1.5), this.frameSpine.node.active = !0, this.frameSpine.setAnimation(0, "frame", !1), this.frameSpine.setCompleteListener(function () {
      i.frameSpine.node.active = !1, i.recycleSymbol();
    });
  }, a.playScatterInAnim = function () {
    var t = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.IN, !1, function () {
      t.playAnim(t.symbolID, _dependency7.ESymbolAnimType.IDLE, !0);
    }), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.SCATTER_IN
      }
    });
  }, a.playScatterInBtm = function () {
    dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.SCATTER_IN
      }
    });
  }, a.playScatterInBtmFast = function () {
    dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.SCATTER_IN_X2
      }
    });
  }, a.playJackpotInAnim = function () {
    var t = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.IN, !1, function () {
      t.playAnim(t.symbolID, _dependency7.ESymbolAnimType.IDLE, !0);
    });
  }, a.playScatterWinAnim = function (t) {
    var i = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1, function () {
      i.playAnim(i.symbolID, _dependency7.ESymbolAnimType.IDLE, !0), t && t();
    });
  }, a.playJpWinAnim = function (t) {
    var i = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1, function () {
      i.playAnim(i.symbolID, _dependency7.ESymbolAnimType.IDLE, !0), t && t();
    });
  }, a.playOutAnim = function () {
    var t = this;
    _dependency2.tween(this).bindNodeState(false).delay(0).call(function () {
      t.symbolAnimation.node.active = !1, t.symbolAnimation.setCompleteListener(null), t.symbolAnimation.clearTracks(), t.symbolAnimation.setToSetupPose(), t.symbolSprite.node.active = !1;
    }).start();
  }, a.initTimesSymbol = function (t) {
    var i = this.data.getData().gameState.timesSymbols;
    if (i.length) {
      var e = i.find(function (i) {
          return i.symbolPos == t;
        }),
        n = e.symbol,
        o = e.times;
      this.setSymbolSprite(n), this.setTimesText(o);
    }
  }, a.openTimesSymbol = function (t) {
    var i = this.data.getData().parser.newTimesSymbols;
    if (i.length) {
      var e = i.find(function (i) {
          return i.symbolPos == t;
        }),
        n = e.symbol,
        o = e.times;
      this.setSymbolSprite(n), this.setTimesText(o);
    }
  }, a.playTimesSymbolsUpgrade = function (t) {
    var i = this,
      e = t.afterSymbol,
      n = t.afterTimes;
    this.symbolID = e, this.upgradeAnimation.node.active = !0, this.upgradeAnimation.setAnimation(0, "transition", !1), this.upgradeAnimation.setCompleteListener(function () {
      i.upgradeAnimation.node.active = !1;
    }), this.scheduleOnce(function () {
      i.setTimesText(n);
    }, .5), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.TIMES_SYMBOL_UPGRADE
      }
    });
  }, a.closeTimesLabel = function () {
    var t = this;
    _dependency2.tween(this.times.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.4, {
      opacity: 0
    }).call(function () {
      t.times.node.active = !1, t.times.node.getComponent(_dependency2.UIOpacity).opacity = 255, t.times.string = "";
    }).start(), _dependency2.tween(this.times.node).bindNodeState(false).to(.4, {
      scale: new _dependency2.Vec3(1.5, 1.5, 1.5)
    }).call(function () {
      t.times.node.active = !1, t.times.node.scale = new _dependency2.Vec3(1, 1, 1);
    }).start();
  }, a.playTimesSymbolsFunction = function () {
    var t = this.isRare ? this.symbolID.toString().padStart(2, "0") + "_win_02" : this.symbolID.toString().padStart(2, "0") + "_win_01";
    this.symbolSprite.node.active = !1, this.symbolAnimation.node.active = !0, this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(this.symbolID), this.symbolAnimation.setAnimation(0, "sym_" + t, !1);
  }, a.setSymbolBlur = function (t) {
    var i = this.isRare ? t.toString().padStart(2, "0") + "_01_blur" : t.toString().padStart(2, "0") + "_blur",
      e = this.data.getSymbolSpriteFrameBlur(i),
      n = this.symbolSprite.node.getComponent(_dependency2.UITransform),
      o = n.width,
      s = n.height;
    this.symbolSpriteBlur.getComponent(_dependency2.UITransform).setContentSize(o, s), this.symbolSpriteBlur.spriteFrame = e;
  }, a.setSymbolBlurActive = function (t) {}, a.playAnim = function (t, i, e, n) {
    this.isRare, t.toString().padStart(2, "0");
    this.symbolAnimation.node.active = !0, this.symbolSprite.node.active = !1;
    var o = "sym_" + t.toString().padStart(2, "0") + "_" + i;
    this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(t), this.symbolAnimation.setAnimation(0, o, e), this.symbolAnimation.setCompleteListener(function (t) {
      n && !t.loop && n();
    });
  }, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), i;
}(_dependency3.default)).prototype, "frameSpine", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(G.prototype, "symbolSprite", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(G.prototype, "symbolSpriteBlur", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(G.prototype, "upgradeAnimation", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(G.prototype, "symbolOutSpine", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(G.prototype, "times", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(G.prototype, "symbolAnimation", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = G)) || M));
_dependency2.cclegacy._RF.pop();
