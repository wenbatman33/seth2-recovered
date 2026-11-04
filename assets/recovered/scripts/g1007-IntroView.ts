// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/IntroView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmUtils";
import * as __dependency_4 from "./main-UIView";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./framework-LoadUtils";
import * as __dependency_8 from "./framework-MathUtil";
import * as __dependency_9 from "./g1007-GameConfigModel";
import * as __dependency_10 from "./g1007-GameData";
var __export_0;
export { __export_0 as IntroView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "IntroView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, r, o, a, s, l, u, c, p, f, g, h, m, d, w, b, S, y, v, P, T, A;
var C, I, V, x, D, L, F, G, _, z, N, E, k, U, B, M, O;
__dependency_1.cclegacy._RF.push({}, "a68fcc95JpFs6ZxqsuQzeSJ", "IntroView", void 0);
var R = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("IntroView", (C = R("Hades_IntroView"), I = __dependency_5.inject("pageView", __dependency_1.PageView), V = __dependency_5.inject("bbr", __dependency_1.Node), x = __dependency_5.inject("startGame", __dependency_1.Node), D = __dependency_5.inject("gameLogo", __dependency_1.Sprite), L = __dependency_5.inject("leftArrow", __dependency_1.Button), F = __dependency_5.inject("rightArrow", __dependency_1.Button), G = __dependency_5.inject("introTextArea/text", __dependency_1.Sprite), C((N = __dependency_0.applyDecoratedDescriptor((z = function (t) {
  function e() {
    for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "pageView", N, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "bbr", E, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "startGame", k, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "gameLogo", U, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "leftArrow", B, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "rightArrow", M, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "infoTextSprite", O, __dependency_0.assertThisInitialized(e)), e.spineNodes = [], e;
  }
  __dependency_0.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    var t = this;
    this.init(), this.setInfoTextSprite(0), this.playSpineAnim(0), this.pageView.node.on("page-turning", this.onPageTurning, this), __dependency_3.CmmUtils.addBtnClickEvent(this.leftArrow.node, function () {
      t.onPrevPage();
    }), __dependency_3.CmmUtils.addBtnClickEvent(this.rightArrow.node, function () {
      t.onNextPage();
    });
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/IntroView";
  }, a.init = function () {
    this.setGameLogo(), this.setStartGame(), this.initPageSpines(), __dependency_3.CmmUtils.fadeInTween(this.node, .1);
  }, a.setGameLogo = function () {
    var t = __dependency_9.default.getData().filePaths.localeSpriteFrame;
    this.gameLogo.spriteFrame = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], t, "l_logo");
  }, a.setStartGame = function () {
    var t = this,
      e = __dependency_9.default.getData().filePaths.localeSpriteFrame,
      n = this.startGame.getComponent(__dependency_1.UIOpacity);
    n.opacity = 0, __dependency_1.tween(n).bindNodeState(false).repeatForever(__dependency_1.tween().bindNodeState(false).to(1, {
      opacity: 255
    }).to(1, {
      opacity: 170
    })).start(), this.bbr.on(__dependency_1.NodeEventType.TOUCH_START, function () {
      App.gameLoading.complete(function () {
        dispatch(__dependency_6.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), t.close();
      });
    }), this.startGame.getComponent(__dependency_1.Sprite).spriteFrame = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "l_font");
  }, a.initPageSpines = function () {
    var t = this;
    this.pageView.content.children.forEach(function (e, n) {
      var i = e.getChildByName("intro");
      if (i) {
        var r = i.getComponent(__dependency_1.sp.Skeleton);
        t.spineNodes.push(r), t.resetSpine(r, "p" + (n + 1));
      }
    });
  }, a.onPageTurning = function () {
    var t = this.pageView.getCurrentPageIndex();
    this.playSpineAnim(t), this.setInfoTextSprite(t);
  }, a.setInfoTextSprite = function (t) {
    var e = __dependency_9.default.getData().filePaths.localeSpriteFrame;
    this.infoTextSprite.spriteFrame = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "intro_text_" + __dependency_8.default.zeroPad(t + 1));
  }, a.resetSpine = function (t, e) {
    t.clearTracks(), t.setToSetupPose(), t.setAnimation(0, e, !1), t.paused = !0;
  }, a.playSpineAnim = function (t) {
    var e = this;
    this.spineNodes.forEach(function (n, i) {
      var r = "p" + (i + 1);
      i === t ? (n.paused = !1, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, r, !0)) : e.resetSpine(n, r);
    });
  }, a.onPrevPage = function () {
    var t = this.pageView.getCurrentPageIndex(),
      e = Math.max(0, t - 1);
    this.pageView.scrollToPage(e, .3);
  }, a.onNextPage = function () {
    var t = this.pageView.getCurrentPageIndex(),
      e = this.pageView.content.children.length - 1,
      n = Math.min(e, t + 1);
    this.pageView.scrollToPage(n, .3);
  }, a.reset = function () {}, a.setData = function (t) {}, a.addEvents = function () {}, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_10.default);
    }
  }]), e;
}(__dependency_4.default)).prototype, "pageView", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = __dependency_0.applyDecoratedDescriptor(z.prototype, "bbr", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = __dependency_0.applyDecoratedDescriptor(z.prototype, "startGame", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = __dependency_0.applyDecoratedDescriptor(z.prototype, "gameLogo", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = __dependency_0.applyDecoratedDescriptor(z.prototype, "leftArrow", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __dependency_0.applyDecoratedDescriptor(z.prototype, "rightArrow", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __dependency_0.applyDecoratedDescriptor(z.prototype, "infoTextSprite", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = z)) || _));
__dependency_1.cclegacy._RF.pop();
