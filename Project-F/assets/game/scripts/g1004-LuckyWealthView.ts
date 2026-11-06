// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "./g1004-GameConfigModel";
import * as _dependency5 from "./g1004-GameEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-RunScoreComponent";
import * as _dependency7 from "./g1004-GameData";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
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
var e, n, o, i, a, l, r, s, c, p, u, d, f, h, m, y, g, T, C, b, A, S, W, w, L;
var _, P, v, O, E, N, I, k, R, U, F, x, D, M, z, B, G;
_dependency2.cclegacy._RF.push({}, "d6d2abI7WpGmJJucCnb5vEJ", "LuckyWealthView", void 0);
var V = _dependency2._decorator.ccclass,
  Y = _dependency2._decorator.property;
_publish("default", (_ = V("LuckyWealthView"), P = Y({
  type: _dependency2.Node,
  tooltip: "背景"
}), v = Y({
  type: _dependency2.Node,
  tooltip: "金幣容器"
}), O = Y({
  type: _dependency2.Node,
  tooltip: "金幣Prefab"
}), E = Y({
  type: _dependency2.sp.Skeleton,
  tooltip: "天機動畫"
}), N = Y({
  type: _dependency2.Label,
  tooltip: "金額"
}), I = Y({
  type: _dependency2.Node,
  tooltip: "結算金額節點"
}), k = Y({
  type: _dependency2.Sprite
}), _((F = _dependency.applyDecoratedDescriptor((U = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinContent", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinFallingAnimNode", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "wealth", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtTotalWin", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndTotalWin", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spTitle", G, _dependency.assertThisInitialized(e)), e.runScoreComponent = null, e.totalWin = 0, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/bonusGame/LuckyWealthView";
  };
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this), null === this.node.getComponent(_dependency6.RunScoreComponent) && (this.runScoreComponent = this.node.addComponent(_dependency6.RunScoreComponent));
    var e = _dependency4.default.getData().filePaths.localeSpriteFrame;
    this.spTitle.spriteFrame = _dependency8.LoadUtils.getDirSp(this.data.module, e, "feature_board_font");
  }, l.addEvents = function () {
    this.on(_dependency6.ERunScoreStatus.RUN_SCORE_END, this.directShowResult), this.on(_dependency6.ERunScoreStatus.WAIT_CLOSE, this.removeAllTween);
  }, l.start = function () {
    var t = this,
      e = this.args,
      n = e.win,
      o = e.tweenTime;
    this.initCoinPool(), this.playWealthAnim(), App.globalAudio.pauseMusic(), dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency4.EBTM.LUCKY_WEALTH_INTRO
      }
    }), this.ndTotalWin.scale = new _dependency2.Vec3(0, 0, 0), this.txtTotalWin.string = "0", this.totalWin = n;
    var i = this.bbr.getComponent(_dependency2.UIOpacity);
    i.opacity = 0, _dependency2.Tween.stopAllByTarget(i), _dependency2.tween(i).bindNodeState(false).delay(.5).to(.3, {
      opacity: 255
    }).call(function () {
      t.playCoinFallAnim();
      var e = t.data.getData().definition.digital,
        n = _dependency4.default.getData().bigWinAutoCloseTime;
      t.runScoreComponent.runScore(t.txtTotalWin, t.totalWin, o, e, n, !0), dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency4.EBTM.RUN_SCORE
        }
      }), _dependency2.tween(t.ndTotalWin).bindNodeState(false).to(.3, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: "backOut"
      }).start();
    }).start();
  }, l.initCoinPool = function () {
    var t = this;
    this.coinContent.children.forEach(function (t) {
      t.destroy();
    });
    for (var e, n = this.coinFallingAnimNode, o = App.pool.createPool("COIN_POOL"), i = 0; i < 5; i++) e = void 0, (e = _dependency2.instantiate(n)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (e, n) {
      "copy" == n.data.name && t.playCoinFallAnim();
    }), o.cloneNode = e, o.put(e);
  }, l.playCoinFallAnim = function () {
    var t = App.pool.getPool("COIN_POOL").get(),
      e = Math.random() >= .5 ? 1 : -1,
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
      App.pool.getPool("COIN_POOL").put(t);
    }), t.setParent(this.coinContent);
  }, l.playWealthAnim = function () {
    var t = this.wealth.getComponent(_dependency2.sp.Skeleton);
    t.clearTracks(), t.setToSetupPose(), t.setAnimation(0, "in", !1), t.setCompleteListener(function () {
      t.clearTracks(), t.setToSetupPose(), t.setAnimation(0, "loop", !0);
    });
  }, l.directShowResult = function () {
    dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency4.EBTM.RUN_SCORE
    }), this.playScoreEffect(this.ndTotalWin), dispatch(_dependency5.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.totalWin
    });
  }, l.removeAllTween = function () {
    App.pool.getPool("COIN_POOL").clear(), this.coinContent.children.forEach(function (t) {
      t.destroy();
    }), App.globalAudio.resumeMusic(), dispatch(_dependency5.GameEvent.LUCKY_WEALTH_END), dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency4.EBTM.LUCKY_WEALTH_INTRO
    }), this.close();
  }, l.playScoreEffect = function (t) {
    _dependency2.Tween.stopAllByTarget(this.txtTotalWin.node);
    var e = this.txtTotalWin.node.getWorldPosition(),
      n = _dependency2.instantiate(this.txtTotalWin.node);
    n.parent = t, n.scale = new _dependency2.Vec3(1.4, 1.4, 1.4), n.setWorldPosition(e), n.addComponent(_dependency2.UIOpacity), n.getComponent(_dependency2.UIOpacity).opacity = 0, n.setSiblingIndex(0), _dependency2.tween(n).bindNodeState(false).delay(.18).to(.18, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.linear
    }).call(function () {
      n.removeFromParent();
    }).start(), _dependency2.tween(n.getComponent(_dependency2.UIOpacity)).bindNodeState(false).delay(.18).to(0, {
      opacity: 158
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
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "bbr", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(U.prototype, "coinContent", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(U.prototype, "coinFallingAnimNode", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(U.prototype, "wealth", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(U.prototype, "txtTotalWin", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(U.prototype, "ndTotalWin", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(U.prototype, "spTitle", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = U)) || R));
_dependency2.cclegacy._RF.pop();
