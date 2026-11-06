// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "./g1004-GameConfigModel";
import * as _dependency6 from "./g1004-GameEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1004-GameData";
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
var t, e, o, i, a, r, l, c, s, u, p, d, f, g, m, h, A;
var b, y, D, C, v, L, O, P, _, N, w, k, S;
_dependency2.cclegacy._RF.push({}, "11533hDv6FGSrvQCcksrInD", "DragonView", void 0);
var F = _dependency2._decorator.ccclass;
_publish("default", (b = F("DragonView"), y = _dependency3.inject("bbr", _dependency2.Node), D = _dependency3.inject("content", _dependency2.Node), C = _dependency3.inject("content/coinContent", _dependency2.Node), v = _dependency3.inject("prefab/coinFallingAnimNode", _dependency2.Node), L = _dependency3.inject("content/dragonAnim", _dependency2.sp.Skeleton), b((_ = _dependency.applyDecoratedDescriptor((P = function (n) {
  var _nativeConstructor = t;
  function t() {
    for (var t, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
    return t = Reflect.construct(n, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "bbr", _, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "content", N, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "coinContent", w, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "coinFallingAnimNode", k, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "dragonAnim", S, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, n), t.getPrefabUrl = function () {
    return "prefabs/normal/DragonView";
  };
  var r = t.prototype;
  return r.onLoad = function () {
    n.prototype.onLoad.call(this);
  }, r.onDestroy = function () {
    n.prototype.onDestroy.call(this);
  }, r.show = function (t) {
    n.prototype.show.call(this, t), this.init();
  }, r.init = function () {
    var n = this.args;
    this.playDragonAnim(n);
  }, r.initCoinPool = function () {
    for (var n, t = this, e = this.coinFallingAnimNode, o = App.pool.createPool("COIN_POOL"), i = 0; i < 5; i++) n = void 0, (n = _dependency2.instantiate(e)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (n, e) {
      "copy" == e.data.name && t.playCoinFallAnim();
    }), o.cloneNode = n, o.put(n);
  }, r.playCoinFallAnim = function () {
    var n = App.pool.getPool("COIN_POOL").get(),
      t = Math.random() >= .5 ? 1 : -1,
      e = n.getComponent(_dependency2.sp.Skeleton);
    n.setScale(t, 1), e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, "coin", !1), e.setCompleteListener(function () {
      App.pool.getPool("COIN_POOL").put(n);
    }), n.setParent(this.coinContent);
  }, r.playDragonAnim = function (n) {
    var t = this,
      e = _dependency5.default.getData().filePaths.dragonSkeletonData,
      o = {
        1: _dependency5.EBTM.DRAGON_LV1,
        2: _dependency5.EBTM.DRAGON_LV2,
        3: _dependency5.EBTM.DRAGON_LV3
      },
      i = {
        1: "dragon_A",
        2: "dragon_B",
        3: "dragon_C"
      }[n],
      a = _dependency7.LoadUtils.getDirSkeleton(this.bundle, e, i);
    this.dragonAnim.node.active = !0, this.dragonAnim.clearTracks(), this.dragonAnim.setToSetupPose(), this.dragonAnim.skeletonData = a, this.dragonAnim.setAnimation(0, i, !1), this.dragonAnim.setCompleteListener(function () {
      t.dragonAnim.setCompleteListener(null), t.dragonAnim.node.active = !1, t.close();
    }), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: o[n]
      }
    });
  }, r.addEventTouch = function () {}, r.close = function () {
    App.pool.getPool("COIN_POOL").clear(), this.coinContent.children.forEach(function (n) {
      n.destroy();
    }), dispatch(_dependency6.GameEvent.SHOW_DRAGON_END), n.prototype.close.call(this);
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), t;
}(_dependency4.default)).prototype, "bbr", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(P.prototype, "content", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(P.prototype, "coinContent", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(P.prototype, "coinFallingAnimNode", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(P.prototype, "dragonAnim", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = P)) || O));
_dependency2.cclegacy._RF.pop();
