// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency6 from "../../shared/scripts/main-CmmUtils";
import * as _dependency7 from "./g1011-GameConfigModel";
import * as _dependency8 from "./g1011-GameEvent";
import * as _dependency9 from "./g1011-GameData";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, i, o, a, l, r, u, c, s, p, m, f, h, d, b, A, g, w, C, y, T, L, N;
var E, v, S, P, O, _, k, M, I, D, F, W, U, B, G, z, Y, V;
_dependency2.cclegacy._RF.push({}, "d6d2abI7WpGmJJucCnb5vEJ", "LuckyWealthView", void 0), function (t) {
  t.EASING = "easing", t.COMPLETE = "complete";
}(V || (V = {}));
var H = _dependency2._decorator.ccclass;
_publish("default", (E = H("LuckyWealthView"), v = _dependency3.inject("bbr", _dependency2.Node), S = _dependency3.inject("content", _dependency2.Node), P = _dependency3.inject("content/coinContent", _dependency2.Node), O = _dependency3.inject("prefab/coinFallingAnimNode", _dependency2.Node), _ = _dependency3.inject("content/bgAnim", _dependency2.sp.Skeleton), k = _dependency3.inject("content/title", _dependency2.Sprite), M = _dependency3.inject("content/winAmount", _dependency2.Label), E((F = _dependency.applyDecoratedDescriptor((D = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, a = new Array(e), l = 0; l < e; l++) a[l] = arguments[l];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "bbr", F, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "content", W, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "coinContent", U, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "coinFallingAnimNode", B, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgAnim", G, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "title", z, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "winAmount", Y, _dependency.assertThisInitialized(n)), n.tweenNumTween = null, n.status = null, n;
  }
  _dependency.inheritsLoose(n, t), n.getPrefabUrl = function () {
    return "prefabs/LuckyWealthView";
  };
  var l = n.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, l.setData = function () {
    _dependency7.default.getData().filePaths.localeSpriteFrame;
  }, l.show = function (n) {
    t.prototype.show.call(this, n), this.init(n);
  }, l.init = function (t) {
    var n = t.win,
      e = this.data.getData().definition.digital;
    this.setData();
    var i = _dependency7.default.isTurbo ? 1 : 5;
    this.addEventTouch(), this.initCoinPool(), this.playCoinFallAnim(), this.playBgAnim(), this.playWinAmountAnim(n), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: Number(_dependency5.CmmSlotUtils.formatNumber(Number(n.toString()), !1, !1, e)),
        tweenTime: i
      }
    }), App.globalAudio.pauseMusic(), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.LUCKY_WEALTH
      }
    }), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.FALL_MONEY,
        loop: !0
      }
    });
  }, l.addEventTouch = function () {
    var t = this;
    this.bbr.on(_dependency2.NodeEventType.TOUCH_END, _dependency6.CmmUtils.throttle(function () {
      switch (t.status) {
        case V.EASING:
          t.easingClick();
          break;
        case V.COMPLETE:
          t.completeClick();
      }
    }));
  }, l.easingClick = function () {
    var t = this,
      n = this.args.win;
    this.tweenNumTween.stop(), this.setWinAmount(n), dispatch(_dependency0.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: n
    }), this.playBounceTween(this.winAmount.node, function () {
      t.setStatus(V.COMPLETE);
    });
  }, l.completeClick = function () {
    App.pool.getPool("COIN_POOL").clear(), this.coinContent.children.forEach(function (t) {
      t.destroy();
    }), dispatch(_dependency8.GameEvent.LUCKY_WEALTH_END), dispatch(_dependency8.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.FALL_MONEY
    }), dispatch(_dependency8.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.LUCKY_WEALTH
    }), App.globalAudio.resumeMusic(), this.close();
  }, l.initCoinPool = function () {
    for (var t, n = this, e = this.coinFallingAnimNode, i = App.pool.createPool("COIN_POOL"), o = 0; o < 5; o++) t = void 0, (t = _dependency2.instantiate(e)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (t, e) {
      "copy" == e.data.name && n.playCoinFallAnim();
    }), i.cloneNode = t, i.put(t);
  }, l.playCoinFallAnim = function () {
    var t = App.pool.getPool("COIN_POOL").get(),
      n = Math.random() >= .5 ? 1 : -1,
      e = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(n, 1), e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, "coin", !1), e.setCompleteListener(function () {
      App.pool.getPool("COIN_POOL").put(t);
    }), t.setParent(this.coinContent);
  }, l.playBgAnim = function () {
    this.bgAnim.getComponent(_dependency2.sp.Skeleton).setAnimation(0, "light", !0);
  }, l.setStatus = function (t) {
    this.status = t;
  }, l.playWinAmountAnim = function (t) {
    var n = this;
    this.setStatus(V.EASING);
    var e = _dependency7.default.isTurbo,
      i = {
        label: this.winAmount,
        start: 0,
        end: t,
        tweenTime: e ? 1 : 5,
        digital: 2,
        useThousandsSeparator: !0,
        callback: function () {
          n.setStatus(V.COMPLETE);
        }
      };
    this.tweenNumTween = _dependency5.CmmSlotUtils.tweenNum(i);
  }, l.setWinAmount = function (t) {
    var n = _dependency5.CmmSlotUtils.formatNumber(t);
    this.winAmount.string = n;
  }, l.playBounceTween = function (t, n) {
    _dependency2.tween(t).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.8, 1.8, 1.8)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        n && n();
      }
    }).start();
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), n;
}(_dependency4.default)).prototype, "bbr", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(D.prototype, "content", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(D.prototype, "coinContent", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(D.prototype, "coinFallingAnimNode", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(D.prototype, "bgAnim", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(D.prototype, "title", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(D.prototype, "winAmount", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = D)) || I));
_dependency2.cclegacy._RF.pop();
