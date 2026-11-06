// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-CmmUtils";
import * as _dependency5 from "../../shared/scripts/main-UIView";
import * as _dependency6 from "../../shared/scripts/main-Decorators";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency9 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency0 from "./g1008-GameConfigModel";
import * as _dependency1 from "./g1008-GameData";
import * as _dependency10 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as IntroView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "IntroView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, r, o, a, s, l, u, c, p, f, g, h, m, d, w, b, S, y, v, P, T, A, C;
var V, I, x, D, L, G, _, F, N, U, z, E, k, B, M, O, H;
_dependency2.cclegacy._RF.push({}, "a53822H1JBPCJZHtOtGxmnO", "IntroView", void 0);
var R = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("IntroView", (V = R("IntroView"), I = _dependency6.inject("pageView", _dependency2.PageView), x = _dependency6.inject("bbr", _dependency2.Node), D = _dependency6.inject("startGame", _dependency2.Node), L = _dependency6.inject("gameLogo", _dependency2.Sprite), G = _dependency6.inject("leftArrow", _dependency2.Button), _ = _dependency6.inject("rightArrow", _dependency2.Button), F = _dependency6.inject("introTextArea/text", _dependency2.Sprite), V((z = _dependency.applyDecoratedDescriptor((U = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "pageView", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startGame", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameLogo", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "leftArrow", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rightArrow", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "infoTextSprite", H, _dependency.assertThisInitialized(e)), e.spineNodes = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    var t = this;
    this.init(), this.setInfoTextSprite(0), this.playSpineAnim(0), this.pageView.node.on("page-turning", this.onPageTurning, this), _dependency4.CmmUtils.addBtnClickEvent(this.leftArrow.node, function () {
      t.onPrevPage();
    }), _dependency4.CmmUtils.addBtnClickEvent(this.rightArrow.node, function () {
      t.onNextPage();
    });
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency10.default.getViewModeParam() + "/IntroView";
  }, a.init = function () {
    this.setGameLogo(), this.setStartGame(), this.setPageSpines(), _dependency4.CmmUtils.fadeInTween(this.node, .1);
  }, a.setGameLogo = function () {
    var t = _dependency0.default.getData().filePaths.localeSpriteFrame;
    this.gameLogo.spriteFrame = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1008], t, "l_logo");
  }, a.setStartGame = function () {
    var t = this,
      e = _dependency0.default.getData().filePaths.localeSpriteFrame,
      n = this.startGame.getComponent(_dependency2.UIOpacity);
    n.opacity = 0, _dependency2.tween(n).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).to(1, {
      opacity: 255
    }).to(1, {
      opacity: 170
    })).start(), this.bbr.on(_dependency2.NodeEventType.TOUCH_START, function () {
      App.gameLoading.complete(function () {
        dispatch(_dependency7.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), t.close();
      });
    }), this.startGame.getComponent(_dependency2.Sprite).spriteFrame = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1008], e, "l_font");
  }, a.setPageSpines = function () {
    var t = this;
    this.pageView.content.children.forEach(function (e, n) {
      var i = e.getChildByName("intro");
      if (i) {
        var r = i.getComponent(_dependency2.sp.Skeleton);
        t.spineNodes.push(r), t.resetSpine(r, "p" + (n + 1));
      }
    });
  }, a.onPageTurning = function () {
    var t = this.pageView.getCurrentPageIndex();
    this.playSpineAnim(t), this.setInfoTextSprite(t);
  }, a.setInfoTextSprite = function (t) {
    var e = _dependency0.default.getData().filePaths.localeSpriteFrame;
    this.infoTextSprite.spriteFrame = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1008], e, "intro_text_" + _dependency9.default.zeroPad(t + 1));
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
  }, a.reset = function () {}, a.setData = function (t) {}, a.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency1.default);
    }
  }]), e;
}(_dependency5.default)).prototype, "pageView", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(U.prototype, "bbr", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(U.prototype, "startGame", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(U.prototype, "gameLogo", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(U.prototype, "leftArrow", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(U.prototype, "rightArrow", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(U.prototype, "infoTextSprite", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = U)) || N));
_dependency2.cclegacy._RF.pop();
