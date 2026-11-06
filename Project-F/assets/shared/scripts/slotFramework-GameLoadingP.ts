// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-GameLoading";
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
var e, i, n, o, s, r;
var a;
_publish("SpineName", void 0), _dependency2.cclegacy._RF.push({}, "588d51V9G1OhLtq7UbpPiGe", "GameLoadingP", void 0), function (t) {
  t.LANDSCAPE = "loading_pc", t.PORTRAIT = "loading_phone";
}(a || (a = _publish("SpineName", {})));
_publish("default", function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).progressBar = null, e.loadingVO = null, e.offsetVO = null, e;
  }
  _dependency.inheritsLoose(i, t);
  var r = i.prototype;
  return r._show = function () {
    t.prototype._show.call(this), this.progressBar = this.content.getChildByName("ProgressBar");
  }, r.setGameSpriteFrame = function () {
    var t;
    if (this.loadingVO) {
      var e = this.loadingVO,
        i = e.background,
        r = e.spine,
        a = e.loadingSpineAnimName,
        h = e.barFrame,
        p = e.bar,
        m = e.barbg,
        g = e.barLight,
        l = e.logo,
        d = e.startGame,
        u = e.enterGame,
        c = e.progressBarPostion;
      h && (this.frame.getComponent(_dependency2.Sprite).spriteFrame = h, this.frame.getComponent(_dependency2.Sprite).sizeMode = _dependency2.Sprite.SizeMode.RAW), p && (this.bar.totalLength = p.width, this.bar._updateBarStatus, this.barSprite.getComponent(_dependency2.Sprite).spriteFrame = p, this.mask.getComponent(_dependency2.Sprite).spriteFrame = p, this.barSprite.getComponent(_dependency2.Sprite).sizeMode = _dependency2.Sprite.SizeMode.RAW), m && (this.barBGSprite.getComponent(_dependency2.Sprite).spriteFrame = m, this.barBGSprite.getComponent(_dependency2.Sprite).sizeMode = _dependency2.Sprite.SizeMode.RAW, this.barSprite.setPosition(.5 * this.barBGSprite.getComponent(_dependency2.UITransform).width, this.barSprite.y)), this.background.getComponent(_dependency2.UITransform).setContentSize(i.originalSize.width, i.originalSize.height), this.background.getComponent(_dependency2.Sprite).spriteFrame = i, this.spine && (this.spine.getComponent(_dependency2.sp.Skeleton).skeletonData = r, null != a && this.spine.getComponent(_dependency2.sp.Skeleton).setAnimation(0, a, !0)), g && (this.barLight.getComponent(_dependency2.Sprite).spriteFrame = g), l && (this.logo.getComponent(_dependency2.Sprite).spriteFrame = l), d && (this.startGame.getComponent(_dependency2.Sprite).spriteFrame = d), u && (this.enterGameSpVO = u), this.frame.getComponent(_dependency2.UITransform).width = null == h ? void 0 : h.width, this.bar.getComponent(_dependency2.UITransform).width = null == p ? void 0 : p.width, this.barSprite.getComponent(_dependency2.UITransform).width = null == p ? void 0 : p.width, this.mask.getComponent(_dependency2.UITransform).width = null == p ? void 0 : p.width, this.barBGSprite.getComponent(_dependency2.UITransform).width = null == m ? void 0 : m.width, this.barLight.getComponent(_dependency2.UITransform).width = null == g ? void 0 : g.width;
      var S = (null != (t = this.offsetVO) ? t : {}).mask;
      S && this.mask.setPosition(.5 * -this.barBGSprite.getComponent(_dependency2.UITransform).width + S.x, this.mask.y + S.y), c && this.progressBar.setPosition(c);
    }
  }, r.setData = function (t, e) {
    this.loadingVO = t, this.offsetVO = e;
  }, i;
}(_dependency3.default));
_dependency2.cclegacy._RF.pop();
