// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency9 from "./g1009-GameConfigModel";
import * as _dependency0 from "./g1009-GameData";
import * as _dependency1 from "../../shared/scripts/main-UrlUtils";
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
var e, i, n, r, o, a, s, l, u, p, c, f, g, h, d, m, w, b, y, S, v, P, T, A;
var V, C, I, x, D, L, G, _, F, N, U, z, k, E, M, B, O;
_dependency2.cclegacy._RF.push({}, "d4ff4NGY/ZP9p91pTTBH45v", "IntroView", void 0);
var R = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("IntroView", (V = R("IntroView"), C = _dependency5.inject("pageView", _dependency2.PageView), I = _dependency5.inject("bbr", _dependency2.Node), x = _dependency5.inject("startGame", _dependency2.Node), D = _dependency5.inject("gameLogo", _dependency2.Sprite), L = _dependency5.inject("leftArrow", _dependency2.Button), G = _dependency5.inject("rightArrow", _dependency2.Button), _ = _dependency5.inject("introTextArea/text", _dependency2.Sprite), V((U = _dependency.applyDecoratedDescriptor((N = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "pageView", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startGame", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameLogo", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "leftArrow", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rightArrow", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "infoTextSprite", O, _dependency.assertThisInitialized(e)), e.spineNodes = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    var t = this;
    this.setInfoTextSprite(0), this.playSpineAnim(0), this.pageView.node.on("page-turning", this.onPageTurning, this), _dependency3.CmmUtils.addBtnClickEvent(this.leftArrow.node, function () {
      t.onPrevPage();
    }), _dependency3.CmmUtils.addBtnClickEvent(this.rightArrow.node, function () {
      t.onNextPage();
    });
  }, a.show = function (e) {
    this.setGameLogo(), this.setStartGame(), this.setPageSpines(), _dependency3.CmmUtils.fadeInTween(this.node, .1), t.prototype.show.call(this, e);
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency1.default.getViewModeParam() + "/IntroView";
  }, a.init = function () {}, a.setGameLogo = function () {
    var t = _dependency9.default.getData().filePaths.localeSpriteFrame;
    this.gameLogo.spriteFrame = _dependency7.LoadUtils.getDirSp(this.data.module, t, "l_logo");
  }, a.setStartGame = function () {
    var t = this,
      e = _dependency9.default.getData().filePaths.localeSpriteFrame,
      i = this.startGame.getComponent(_dependency2.UIOpacity);
    i.opacity = 0, _dependency2.tween(i).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).to(1, {
      opacity: 255
    }).to(1, {
      opacity: 170
    })).start(), this.bbr.on(_dependency2.NodeEventType.TOUCH_START, function () {
      App.gameLoading.complete(function () {
        dispatch(_dependency6.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), t.close();
      });
    }), this.startGame.getComponent(_dependency2.Sprite).spriteFrame = _dependency7.LoadUtils.getDirSp(this.data.module, e, "l_font");
  }, a.setPageSpines = function () {
    var t = this;
    this.pageView.content.children.forEach(function (e, i) {
      var n = e.getChildByName("intro");
      if (n) {
        var r = n.getComponent(_dependency2.sp.Skeleton);
        t.spineNodes.push(r), t.resetSpine(r, "p" + (i + 1));
      }
    });
  }, a.onPageTurning = function () {
    var t = this.pageView.getCurrentPageIndex();
    this.playSpineAnim(t), this.setInfoTextSprite(t);
  }, a.setInfoTextSprite = function (t) {
    var e = _dependency9.default.getData().filePaths.localeSpriteFrame;
    this.infoTextSprite.spriteFrame = _dependency7.LoadUtils.getDirSp(this.data.module, e, "intro_text_" + _dependency8.default.zeroPad(t + 1));
  }, a.resetSpine = function (t, e) {
    t.clearTracks(), t.setToSetupPose(), t.setAnimation(0, e, !1), t.paused = !0;
  }, a.playSpineAnim = function (t) {
    var e = this;
    this.spineNodes.forEach(function (i, n) {
      var r = "p" + (n + 1);
      n === t ? (i.paused = !1, i.clearTracks(), i.setToSetupPose(), i.setAnimation(0, r, !0)) : e.resetSpine(i, r);
    });
  }, a.onPrevPage = function () {
    var t = this.pageView.getCurrentPageIndex(),
      e = Math.max(0, t - 1);
    this.pageView.scrollToPage(e, .3);
  }, a.onNextPage = function () {
    var t = this.pageView.getCurrentPageIndex(),
      e = this.pageView.content.children.length - 1,
      i = Math.min(e, t + 1);
    this.pageView.scrollToPage(i, .3);
  }, a.reset = function () {}, a.setData = function (t) {}, a.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "pageView", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(N.prototype, "bbr", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(N.prototype, "startGame", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(N.prototype, "gameLogo", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(N.prototype, "leftArrow", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(N.prototype, "rightArrow", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(N.prototype, "infoTextSprite", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = N)) || F));
_dependency2.cclegacy._RF.pop();
