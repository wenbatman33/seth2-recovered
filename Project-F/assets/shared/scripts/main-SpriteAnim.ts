// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
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
var t, e, s, r, n, a, p, l, o, h;
var u, c, m, y, F, f;
_dependency2.cclegacy._RF.push({}, "39cb6DIWdBASK7XIw4LCbaH", "SpriteAnim", void 0);
var d = _dependency2._decorator.ccclass,
  g = _dependency2._decorator.property;
_publish("default", (u = g(_dependency2.CCFloat), c = g({
  type: _dependency2.SpriteFrame
}), d((F = _dependency.applyDecoratedDescriptor((y = function (i) {
  var _nativeConstructor = t;
  function t() {
    for (var t, e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
    return t = Reflect.construct(i, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "duration", F, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "spriteFrames", f, _dependency.assertThisInitialized(t)), t.loop = !1, t.playOnload = !1, t.endFunc = null, t.isPlaying = !1, t.playTime = null, t.sprite = null, t;
  }
  _dependency.inheritsLoose(t, i);
  var n = t.prototype;
  return n.onLoad = function () {
    this.isPlaying = !1, this.playTime = 0, this.sprite = this.getComponent(_dependency2.Sprite), this.sprite || (this.sprite = this.addComponent(_dependency2.Sprite)), this.playOnload && (this.loop ? this.playLoop() : this.playOnce(null));
  }, n.playLoop = function () {
    this.spriteFrames.length <= 0 || (this.loop = !0, this.endFunc = null, this.isPlaying = !0, this.playTime = 0, this.sprite.spriteFrame = this.spriteFrames[0]);
  }, n.playCount = function (i, t) {
    var e = this,
      s = 0;
    !function r() {
      return e.playOnce(function () {
        (s += 1) === i ? t() : r();
      });
    }();
  }, n.playOnce = function (i) {
    this.spriteFrames.length <= 0 || (this.endFunc = i, this.loop = !1, this.isPlaying = !0, this.playTime = 0, this.sprite.spriteFrame = this.spriteFrames[0]);
  }, n.update = function (i) {
    if (this.isPlaying) {
      this.playTime += i;
      var t = Math.floor(this.playTime / this.duration);
      if (this.loop) {
        for (; t >= this.spriteFrames.length;) t -= this.spriteFrames.length, this.playTime -= this.spriteFrames.length * this.duration;
        this.sprite.spriteFrame = this.spriteFrames[t];
      } else t >= this.spriteFrames.length ? (this.isPlaying = !1, this.endFunc && this.endFunc()) : this.sprite.spriteFrame = this.spriteFrames[t];
    }
  }, t;
}(_dependency2.Component)).prototype, "duration", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .1;
  }
}), f = _dependency.applyDecoratedDescriptor(y.prototype, "spriteFrames", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), m = y)) || m));
_dependency2.cclegacy._RF.pop();
