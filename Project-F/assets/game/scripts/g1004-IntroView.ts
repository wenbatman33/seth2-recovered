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
import * as _dependency0 from "./g1004-GameConfigModel";
import * as _dependency1 from "./g1004-GameData";
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
var e, n, i, r, o, a, s, l, u, c, p, f, g, h, m, d, w, b, y, S, v, P, T, A;
var I, C, V, x, D, L, F, G, N, _, k, z, E, B, U, M, H;
_dependency2.cclegacy._RF.push({}, "0bc83HqHQ9H+INnBbjJkNFy", "IntroView", void 0);
var O = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("IntroView", (I = O("IntroView"), C = _dependency6.inject("pageView", _dependency2.PageView), V = _dependency6.inject("bbr", _dependency2.Node), x = _dependency6.inject("startGame", _dependency2.Node), D = _dependency6.inject("gameLogo", _dependency2.Sprite), L = _dependency6.inject("leftArrow", _dependency2.Button), F = _dependency6.inject("rightArrow", _dependency2.Button), G = _dependency6.inject("introTextArea/text", _dependency2.Sprite), I((k = _dependency.applyDecoratedDescriptor((_ = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "pageView", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startGame", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameLogo", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "leftArrow", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rightArrow", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "infoTextSprite", H, _dependency.assertThisInitialized(e)), e.spineNodes = [], e;
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
    return "prefabs/normal/IntroView";
  }, a.init = function () {
    this.setGameLogo(), this.setStartGame(), this.setPageSpines(), _dependency4.CmmUtils.fadeInTween(this.node, .1);
  }, a.setGameLogo = function () {
    var t = _dependency0.default.getData().filePaths.localeSpriteFrame;
    this.gameLogo.spriteFrame = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1004], t, "l_logo");
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
    }), this.startGame.getComponent(_dependency2.Sprite).spriteFrame = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1004], e, "l_font");
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
    this.infoTextSprite.spriteFrame = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1004], e, "intro_text_" + _dependency9.default.zeroPad(t + 1));
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
}(_dependency5.default)).prototype, "pageView", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(_.prototype, "bbr", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(_.prototype, "startGame", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(_.prototype, "gameLogo", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(_.prototype, "leftArrow", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(_.prototype, "rightArrow", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(_.prototype, "infoTextSprite", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _)) || N));
_dependency2.cclegacy._RF.pop();
