// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1001-GameConfigModel";
import * as _dependency6 from "./g1001-GameData";
import * as _dependency7 from "./g1001-GameSymbolID";
import * as _dependency8 from "./g1001-GameEvent";
import * as _dependency9 from "./g1001-types";
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
var i, e, n, o, s, a, l, r, m, u, p, c, y, b, h, S, f, d, A, v, g, I, T;
var D, O, L, _, B, E, P, R, C, M, w, G, k, z, F, N, Y;
_dependency2.cclegacy._RF.push({}, "7f3a9grRJlJrqcjTFQYeCFH", "Symbol", void 0);
var x = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("Symbol", (D = x("Symbol"), O = _dependency4.inject("frame", _dependency2.sp.Skeleton), L = _dependency4.inject("symbolSprite", _dependency2.Sprite), _ = _dependency4.inject("symbolSpriteBlur", _dependency2.Sprite), B = _dependency4.inject("upgrade", _dependency2.sp.Skeleton), E = _dependency4.inject("symbolOut", _dependency2.sp.Skeleton), P = _dependency4.inject("times", _dependency2.Label), R = _dependency4.inject("symbolAnimation", _dependency2.sp.Skeleton), D((w = _dependency.applyDecoratedDescriptor((M = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var i, e = arguments.length, s = new Array(e), a = 0; a < e; a++) s[a] = arguments[a];
    return i = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "frameSpine", w, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolSprite", G, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolSpriteBlur", k, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "upgradeAnimation", z, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolOutSpine", F, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "times", N, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "symbolAnimation", Y, _dependency.assertThisInitialized(i)), i.symbolID = null, i.posId = null, i.isRare = null, i;
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
    this.symbolSprite.node.setScale(n, n), this.symbolAnimation.node.setScale(n, n), this.symbolSpriteBlur.node.setScale(n, n), this.name = "" + e, this.posId = e, this.symbolID = i, this.setIsRare(), this.setSymbolSprite(i), this.setSymbolBlur(i), this.times.node.active = !1;
  }, a.recycleSymbol = function () {
    this.hide(), this.reset(), App.pool.getPool(_dependency9.EPool.SYMBOL_POOL).put(this.node);
  }, a.playLoopAnim = function () {
    var t = this;
    _dependency5.default.useProEffect && this.scheduleOnce(function () {
      t.playAnim(t.symbolID, _dependency7.ESymbolAnimType.LOOP, !0);
    }, 0);
  }, a.playWinAnim = function (t) {
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1), this.scheduleOnce(function () {
      t && t();
    }, 1), this.frameSpine.node.active = !0, this.frameSpine.setAnimation(0, "win", !0);
  }, a.playScatterInAnim = function () {
    var t = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.IN, !1, function () {
      t.playAnim(t.symbolID, _dependency7.ESymbolAnimType.LOOP, !0);
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
      t.playAnim(t.symbolID, _dependency7.ESymbolAnimType.LOOP, !0);
    });
  }, a.playScatterWinAnim = function (t) {
    var i = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1, function () {
      i.playAnim(i.symbolID, _dependency7.ESymbolAnimType.LOOP, !0), t && t();
    });
  }, a.playJpWinAnim = function (t) {
    var i = this;
    this.playAnim(this.symbolID, _dependency7.ESymbolAnimType.WIN, !1, function () {
      i.playAnim(i.symbolID, _dependency7.ESymbolAnimType.LOOP, !0), t && t();
    });
  }, a.playOutAnim = function () {
    var t = this;
    _dependency2.tween(this).bindNodeState(false).delay(.13).call(function () {
      t.symbolAnimation.node.active = !1, t.symbolSprite.node.active = !1, t.frameSpine.node.active = !1, t.symbolAnimation.setCompleteListener(null), t.symbolOutSpine.setCompleteListener(null), t.symbolOutSpine.node.active = !0, t.symbolOutSpine.setAnimation(0, "out", !1), t.symbolOutSpine.setCompleteListener(function () {
        t.recycleSymbol();
      });
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
    this.times.node.active = !1;
  }, a.playTimesSymbolsFunction = function () {
    var t = this.isRare ? this.symbolID.toString().padStart(2, "0") + "_01" : "" + this.symbolID.toString().padStart(2, "0");
    this.symbolSprite.node.active = !1, this.symbolAnimation.node.active = !0, this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(t), this.symbolAnimation.setAnimation(0, "function", !1);
  }, a.setSymbolBlur = function (t) {
    var i = this.isRare ? t.toString().padStart(2, "0") + "_01_blur" : t.toString().padStart(2, "0") + "_blur",
      e = this.data.getSymbolSpriteFrameBlur(i),
      n = this.symbolSprite.node.getComponent(_dependency2.UITransform),
      o = n.width,
      s = n.height;
    this.symbolSpriteBlur.getComponent(_dependency2.UITransform).setContentSize(o, s), this.symbolSpriteBlur.spriteFrame = e;
  }, a.setSymbolBlurActive = function (t) {}, a.playAnim = function (t, i, e, n) {
    var o = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0");
    this.symbolAnimation.node.active = !0, this.symbolSprite.node.active = !1, this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(o), this.symbolAnimation.setAnimation(0, i, e), this.symbolAnimation.setCompleteListener(function (t) {
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
}(_dependency3.default)).prototype, "frameSpine", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(M.prototype, "symbolSprite", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(M.prototype, "symbolSpriteBlur", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(M.prototype, "upgradeAnimation", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(M.prototype, "symbolOutSpine", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(M.prototype, "times", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(M.prototype, "symbolAnimation", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = M)) || C));
_dependency2.cclegacy._RF.pop();
