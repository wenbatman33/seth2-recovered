// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./slotFramework-SlotFrameworkEvent";
var _export;
export { _export as SpineName };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpineName":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, e, o, s, n, a, h, r, g, l, d, p, m, u, c, b, P, f, C;
var S;
_publish("SpineName", void 0), _dependency2.cclegacy._RF.push({}, "e7295bYB29JKIzgpZJghufA", "GameLoading", void 0), function (t) {
  t.LANDSCAPE = "loading_pc", t.PORTRAIT = "loading_phone";
}(S || (S = _publish("SpineName", {}))), _publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.node = null, this.maskPosition = null, this.percentTextPosition = null, this.barLightPos = null, this.logoPosition = null, this.atgLogoPosition = null, this.progressBarPosition = null, this.barSpinePosition = null, this.startGamePosition = null, this.content = null, this.barSprite = null, this.barBGSprite = null, this.mask = null, this.barLight = null, this.frame = null, this.logo = null, this.atgLogo = null, this.startGame = null, this.background = null, this.spine = null, this.barSpine = null, this.message = null, this.percentText = null, this.bar = null, this.logoWidget = null, this.isHandlerReady = !1, this._uiName = null, this._timerId = -1, this.loadTotal = 0, this.loadedNum = 0, this.delay = 0, this.barLightPosY = null, this.barRealWidth = null, this.loadingVO = null, this.enterGameSpVO = null;
  }
  var e = t.prototype;
  return e._show = function () {
    var t, i, e;
    if (this.node || (this.node = _dependency2.instantiate(this.prefab)), this.node.addComponent(_dependency2.UIOpacity), this.node.removeFromParent(), App.uiManager.addView(this.node, _dependency3.ViewZOrder.UILoading), this.node.position = _dependency2.Vec3.ZERO, this.content = _dependency2.find("content", this.node), this.background = this.content.getChildByName("background"), this.spine = this.content.getChildByName("spine"), this.barSpine = this.content.getChildByName("barSpine"), this.barBGSprite = this.content.getChildByPath("ProgressBar"), this.mask = this.content.getChildByPath("ProgressBar/Mask"), this.barSprite = this.content.getChildByPath("ProgressBar/Mask/Bar"), this.barLight = this.content.getChildByPath("ProgressBar/barLight"), this.barLightPos = this.barLight.getPosition(), this.frame = this.content.getChildByPath("ProgressBar/frame"), this.logo = this.content.getChildByName("logo"), this.atgLogo = this.content.getChildByName("atgLogo"), this.startGame = this.content.getChildByName("startGame"), this.barLightPosY && (this.barLightPos.y = this.barLightPosY), this.logoPosition && (this.logo.getComponent(_dependency2.Widget) && (this.logo.getComponent(_dependency2.Widget).enabled = !1), this.logo.setPosition(this.logoPosition)), this.atgLogoPosition && this.atgLogo && (0 == this.atgLogo.active && (this.atgLogo.active = !0), this.atgLogo.setPosition(this.atgLogoPosition)), this.logoWidget) {
      var l = this.logo.getComponent(_dependency2.Widget);
      l.enabled = !0, l.top = this.logoWidget.top, l.left = this.logoWidget.left, l.right = this.logoWidget.right, l.bottom = this.logoWidget.bottom, l.alignMode = this.logoWidget.alignMode, l.alignFlags = this.logoWidget.alignFlags, l.verticalCenter = this.logoWidget.verticalCenter, l.horizontalCenter = this.logoWidget.horizontalCenter, l.isAlignVerticalCenter = this.logoWidget.isAlignVerticalCenter, l.isAlignHorizontalCenter = this.logoWidget.isAlignHorizontalCenter, l.isAlignTop = this.logoWidget.isAlignTop, l.isAlignLeft = this.logoWidget.isAlignLeft, l.isAlignRight = this.logoWidget.isAlignRight, l.isAlignBottom = this.logoWidget.isAlignBottom, l.isAbsoluteTop = this.logoWidget.isAbsoluteTop, l.isAbsoluteRight = this.logoWidget.isAbsoluteRight, l.isAbsoluteLeft = this.logoWidget.isAbsoluteLeft, l.isAbsoluteBottom = this.logoWidget.isAbsoluteBottom;
    }
    this.percentText = null == (t = _dependency2.find("ProgressBar/percent", this.content)) ? void 0 : t.getComponent(_dependency2.Label), this.percentText.string = "0%", this.bar = null == (i = _dependency2.find("ProgressBar", this.content)) ? void 0 : i.getComponent(_dependency2.ProgressBar), this.bar.progress = 0, this.progressBarPosition && this.bar.node.setPosition(this.progressBarPosition), this.message = null == (e = _dependency2.find("message", this.content)) ? void 0 : e.getComponent(_dependency2.Label), this.fadeIn(), this.node.active = !0;
  }, e.startTimeOutTimer = function (t) {
    var i = this;
    this.stopTimeOutTimer(), t && (this._timerId = setTimeout(function () {
      App.tips.show("加载界面" + (i._uiName ? i._uiName : "") + "超时，请重试"), i.hide(!1);
    }, 2e4 * t));
  }, e.stopTimeOutTimer = function () {
    clearTimeout(this._timerId), this._timerId = -1;
  }, e.updateProgress = function () {
    if (this.percentText) {
      var t = this.loadedNum + (this.isHandlerReady ? 1 : 0),
        i = Math.floor(t / this.loadTotal * 100);
      if (null == i || null == i || Number.isNaN(i)) return;
      if (i >= 0 && i <= 100) {
        this.percentText.string = i + "%", this.bar.progress = i / 100;
        var e = this.mask.getComponent(_dependency2.UITransform).width + this.mask.getPosition().x;
        null != this.barRealWidth && this.barRealWidth > 0 && (e = this.barRealWidth * (i / 100) + this.mask.getPosition().x), this.barLight.setPosition(_dependency2.v3(e, this.barLightPos.y)), i >= 100 && this.hide(!1);
      }
    }
  }, e.show = function (t, i) {
    this.delay = null == t || null == t || t < 0 ? _dependency3.Config.LOAD_VIEW_DELAY : t, this._uiName = i || "", this._show();
  }, e.hide = function (t) {
    var i = this;
    this.stopTimeOutTimer(), t ? this.node && (_dependency2.Tween.stopAllByTarget(this.content), _dependency2.tween(this.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1, {
      opacity: 0
    }, {
      easing: "quintIn"
    }).delay(.1).call(function () {
      i.node.active = !1;
    }).start()) : this.node && (this.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.node.active = !1);
  }, e.fadeIn = function () {
    this.node.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.tween(this.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.1, {
      opacity: 255
    }, {
      easing: "quintIn"
    }).start();
  }, e.setGameSpriteFrame = function () {
    if (!this.loadingVO) return Log.e("this.loadingVO is error");
    var t = this.loadingVO,
      i = t.loadingSpineAnimName,
      e = t.background,
      o = t.spine,
      s = t.barFrame,
      n = t.bar,
      a = t.barbg,
      r = t.barLight,
      g = t.logo,
      d = t.startGame,
      p = t.enterGame,
      m = t.barSpine,
      b = t.spineBgScale;
    this.bar.totalLength = n.width, this.bar._updateBarStatus, this.frame.getComponent(_dependency2.Sprite).spriteFrame = s, this.frame.getComponent(_dependency2.Sprite).sizeMode = _dependency2.Sprite.SizeMode.RAW, this.barSprite.getComponent(_dependency2.Sprite).spriteFrame = n, this.barSprite.getComponent(_dependency2.Sprite).sizeMode = _dependency2.Sprite.SizeMode.RAW, this.barSprite.getPosition().x = .5 * this.frame.getComponent(_dependency2.UITransform).width, this.barBGSprite.getComponent(_dependency2.Sprite).spriteFrame = a, this.barBGSprite.getComponent(_dependency2.Sprite).sizeMode = _dependency2.Sprite.SizeMode.RAW, this.mask.getComponent(_dependency2.Sprite).spriteFrame = n, this.background.getComponent(_dependency2.UITransform).setContentSize(e.originalSize.width, e.originalSize.height), this.background.getComponent(_dependency2.Sprite).spriteFrame = e, this.barLight.getComponent(_dependency2.Sprite).spriteFrame = r, this.logo.getComponent(_dependency2.Sprite).spriteFrame = g, this.startGame.getComponent(_dependency2.Sprite).spriteFrame = d, this.maskPosition ? (this.mask.getComponent(_dependency2.Widget).enabled = !1, this.mask.setPosition(this.maskPosition)) : this.mask.getPosition().x = .5 * -this.frame.getComponent(_dependency2.UITransform).width, this.percentTextPosition && (this.percentText.node.getComponent(_dependency2.Widget).enabled = !1, this.percentText.node.setPosition(this.percentTextPosition)), this.spine && (this.spine.getComponent(_dependency2.sp.Skeleton).skeletonData = o, null != i ? this.spine.getComponent(_dependency2.sp.Skeleton).setAnimation(0, i, !0) : this.spine.getComponent(_dependency2.sp.Skeleton).setAnimation(0, S.LANDSCAPE, !0), b && this.spine.setScale(b, b, 1)), this.barSpine && (this.barSpine.getComponent(_dependency2.sp.Skeleton).skeletonData = m, this.barSpine.getComponent(_dependency2.sp.Skeleton).setAnimation(0, "loop", !0), this.barSpinePosition && this.barSpine.setPosition(this.barSpinePosition)), this.startGamePosition && this.startGame.setPosition(this.startGamePosition), this.enterGameSpVO = p, this.bar.getComponent(_dependency2.UITransform).width = n.width, this.frame.getComponent(_dependency2.UITransform).width = null == s ? void 0 : s.width, this.barSprite.getComponent(_dependency2.UITransform).width = n.width, this.barBGSprite.getComponent(_dependency2.UITransform).width = null == a ? void 0 : a.width, this.mask.getComponent(_dependency2.UITransform).width = n.width, this.barLight.getComponent(_dependency2.UITransform).width = r.width;
  }, e.createEnterGameBtn = function () {
    var t = this.startGame.getComponent(_dependency2.UIOpacity);
    t.opacity = 0, _dependency2.tween(t).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).to(1, {
      opacity: 255
    }).to(1, {
      opacity: 170
    })).start(), this.background.on(_dependency2.NodeEventType.TOUCH_START, function () {
      App.gameLoading.complete(function () {
        dispatch(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN);
      });
    });
  }, e.hideProgressBar = function () {
    this.bar.node.active = !1, this.percentText.node.active = !1, this.barSpine && (this.barSpine.active = !1);
  }, e.setLoadResource = function (t) {
    this.content.getComponent(_dependency2.Sprite).spriteFrame = t;
  }, e.setData = function (t) {
    this.loadingVO = t;
  }, e.setLoading = function (t, i, e) {
    var o, s;
    1 === t && (this.show(), this.setGameSpriteFrame(), null != (o = window) && o.hideLogo && (null == (s = window) || s.hideLogo()));
    this.loadedNum = t, this.loadTotal = i + 1, this.updateProgress();
    var n = e.info;
    n.type, n.url, n.bundle;
  }, e.complete = function (t) {
    this.isHandlerReady = !0, this.updateProgress(), t && t();
  }, e.setMessage = function (t) {
    this.message.string = t;
  }, e.showEnterGameBtn = function () {
    this.hideProgressBar(), this.createEnterGameBtn();
  }, e.hideGameLogo = function () {
    this.logo.active = !1;
  }, e.setLogoPosition = function (t) {
    this.logoPosition = t;
  }, e.setLogoWidget = function (t) {
    this.logoWidget = t;
  }, e.setSpineBgAnimName = function (t) {
    this.spine.getComponent(_dependency2.sp.Skeleton).setAnimation(0, t, !0);
  }, e.setBarSpineAnimName = function (t) {
    this.barSpine.getComponent(_dependency2.sp.Skeleton).setAnimation(0, t, !0);
  }, e.setBarSpinePosition = function (t) {
    this.barSpinePosition = t;
  }, e.setProgressBarPosition = function (t) {
    this.progressBarPosition = t;
  }, e.setPercentTextPos = function (t) {
    this.percentTextPosition = t;
  }, e.setStartGamePosition = function (t) {
    this.startGamePosition = t;
  }, e.setBarLightPositionY = function (t) {
    this.barLightPosY = t;
  }, e.setBarRealWidth = function (t) {
    this.barRealWidth = t;
  }, e.setMaskPos = function (t) {
    this.maskPosition = t;
  }, e.setAtgLogoPosition = function (t, i) {
    this.atgLogoPosition = _dependency2.v3(t, i, 0);
  }, _dependency.createClass(t, [{
    key: "prefab",
    get: function () {
      return App.uiManager.getScenePrefab("GameLoading");
    }
  }]), t;
}()).module = "【GameLoading】", _dependency2.cclegacy._RF.pop();
