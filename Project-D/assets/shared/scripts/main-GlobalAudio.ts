// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-AudioComponent";
import * as _dependency4 from "./main-Macros";
import * as _dependency5 from "./main-Config";
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
var o, t, n, a, u, i, s, c, r;
var d;
_dependency2.cclegacy._RF.push({}, "8dca8lhVEpKYbqJLgXzurTU", "GlobalAudio", void 0);
var f = _dependency2._decorator.ccclass,
  p = (_dependency2._decorator.property, _dependency2._decorator.menu);
_publish("default", f(d = p("Quick公共元件/GlobalAudio")(d = function (e) {
  var _nativeConstructor = t;
  function t() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(t, e);
  var n = t.prototype;
  return n.playDialogOpen = function () {
    this.playEffect(_dependency5.Config.audioPath.dialog, _dependency4.Macro.BUNDLE_RESOURCES, !1);
  }, n.playButtonClick = function () {
    this.playEffect(_dependency5.Config.audioPath.button, _dependency4.Macro.BUNDLE_RESOURCES, !1);
  }, n.playMusic = function (e, o, t) {
    var n = this;
    void 0 === t && (t = !0);
    var s = this;
    return new Promise(function (r) {
      if (o != _dependency4.Macro.BUNDLE_RESOURCES) return Log.e(e + " 不在 " + _dependency4.Macro.BUNDLE_RESOURCES + " 全域性播放的聲音發現存放到" + _dependency4.Macro.BUNDLE_RESOURCES), void r(!1);
      var d = n.audioData.makeKey(e, o),
        f = n.audioData.musicInfos.get(d);
      f || ((f = new _dependency3.AudioInfo()).url = e, f.bundle = o, f.source = n.node.addComponent(_dependency2.AudioSource), f.source.playOnAwake = !0, f.source.name = d, n.audioData.musicInfos.set(d, f)), n.audioData.curMusic = f, App.cache.getCacheByAsync(e, _dependency2.AudioClip, o).then(function (a) {
        a ? (App.asset.addPersistAsset(e, a, o), s.stopMusic(), f && f.source && (f.source.clip = a, f.source.loop = t, n.play(f, !0, r))) : r(!1);
      });
    });
  }, n.playEffect = function (e, o, t) {
    var n = this;
    return void 0 === t && (t = !1), new Promise(function (s) {
      if (o != _dependency4.Macro.BUNDLE_RESOURCES) return Log.e(e + " 不在 " + _dependency4.Macro.BUNDLE_RESOURCES + " 全域性播放的聲音發現存放到" + _dependency4.Macro.BUNDLE_RESOURCES), void s(!1);
      var r = n.audioData.makeKey(e, o),
        d = n.audioData.effectInfos.get(r);
      d || ((d = new _dependency3.AudioInfo()).url = e, d.bundle = o, d.source = n.node.addComponent(_dependency2.AudioSource), d.source.name = r, n.audioData.effectInfos.set(r, d)), d.isStopPlay = !1, App.cache.getCacheByAsync(e, _dependency2.AudioClip, o).then(function (a) {
        a ? (App.asset.addPersistAsset(e, a, o), d && d.source && (d.source.clip = a, d.source.loop = t, 0 == d.isStopPlay && n.play(d, !1, s))) : s(!1);
      });
    });
  }, n.getAudioInfo = function (e, o) {
    var t = this;
    return new Promise(function (n, s) {
      var c = t.audioData.makeKey(e, o),
        r = t.audioData.effectInfos.get(c);
      r || ((r = new _dependency3.AudioInfo()).url = e, r.bundle = o, r.source = t.node.addComponent(_dependency2.AudioSource), r.source.name = c, t.audioData.effectInfos.set(c, r)), App.cache.getCacheByAsync(e, _dependency2.AudioClip, o).then(function (t) {
        t ? (App.asset.addPersistAsset(e, t, o), r && r.source && n(r)) : s();
      });
    });
  }, t;
}(_dependency3.default)) || d) || d);
_dependency2.cclegacy._RF.pop();
