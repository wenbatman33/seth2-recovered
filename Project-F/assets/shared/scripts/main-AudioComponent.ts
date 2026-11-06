// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import { EDITOR as __ownedAudioFlagsEditor } from 'cc/env';
import { installLocalAudioFlagInitialization as __installOwnedAudioFlags } from '../bootstrap/local-audio-flags';
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-Resource";
import * as _dependency5 from "./main-Macros";
import * as _dependency6 from "./main-Singleton";
var _export;
export { _export as AudioInfo };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "AudioInfo":
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
var t, s, o, u, i, n, c, a, f, r, l, h;
var p;
_dependency2.cclegacy._RF.push({}, "f40c7r82/BAhYU5orjFTt7k", "AudioComponent", void 0);
var m = _dependency2._decorator.ccclass,
  d = (_dependency2._decorator.property, _dependency2._decorator.menu, _publish("AudioInfo", function () {
    function e() {
      this.url = "", this.bundle = _dependency5.Macro.BUNDLE_RESOURCES, this.source = null, this.owner = null, this.isPause = !1, this.isStopPlay = !1;
    }
    var s = e.prototype;
    return s.play = function () {
      this.isPause = !1, this.source && this.source.play();
    }, s.pause = function () {
      this.isPause = !1, this.source && this.source.playing && (Log.d(this.url, "isPlaying to pause"), this.isPause = !0, this.source.pause());
    }, s.stop = function () {
      this.isPause = !1, this.source && this.source.stop();
    }, s.resume = function () {
      this.source && this.isPause && (Log.d(this.url, "resume play"), this.source.play()), this.isPause = !1;
    }, _dependency.createClass(e, [{
      key: "volume",
      get: function () {
        return this.source ? this.source.volume : 0;
      },
      set: function (e) {
        this.source && (this.source.volume = e);
      }
    }]), e;
  }())),
  y = function () {
    function e() {
      this.module = null, this.musicVolume = 1, this.effectVolume = 1, this.isEffectOn = !0, this.isMusicOn = !0, this.musicInfos = new Map(), this.effectInfos = new Map(), this.repeatEffectInfo = new Map(), this.curMusic = null, this._storeMusicKey = "default_save_music", this._storeEffectKey = "default_save_effect", this._storeMusicVolumeKey = "default_save_music_volume_key", this._storeEffectVolumeKey = "default_save_effect_volume_key";
    }
    var t = e.prototype;
    return t.init = function () {
      this.isMusicOn = App.storage.getItem(this._storeMusicKey, this.isMusicOn), this.isEffectOn = App.storage.getItem(this._storeEffectKey, this.isEffectOn), this.musicVolume = App.storage.getItem(this._storeMusicVolumeKey, this.musicVolume), this.effectVolume = App.storage.getItem(this._storeEffectVolumeKey, this.effectVolume);
    }, t.save = function () {
      try {
        App.storage.setItem(this._storeMusicKey, this.isMusicOn), App.storage.setItem(this._storeMusicVolumeKey, this.musicVolume), App.storage.setItem(this._storeEffectKey, this.isEffectOn), App.storage.setItem(this._storeEffectVolumeKey, this.effectVolume);
      } catch (e) {}
    }, t.remove = function (e) {
      this.musicInfos.forEach(function (t, s, o) {
        t.owner && t.owner == e && (t.stop(), o.delete(s));
      }), this.effectInfos.forEach(function (t, s, o) {
        t.owner && t.owner == e && (t.stop(), o.delete(s));
      }), this.repeatEffectInfo.forEach(function (t, s, o) {
        if (t.length > 0) {
          for (var u = 0; u < t.length; u++) {
            var i = t[u];
            i.owner && i.owner == e && (i.stop(), i.source = null);
          }
          o.delete(s);
        }
      });
    }, t.setMusicVolume = function (e) {
      this.musicInfos.forEach(function (t, s, o) {
        t.volume = e;
      }), this.musicVolume = e, this.save();
    }, t.setEffectVolume = function (e) {
      this.effectInfos.forEach(function (t, s, o) {
        t.volume = e;
      }), this.repeatEffectInfo.forEach(function (t, s, o) {
        for (var u = 0; u < t.length; u++) {
          t[u].volume = e;
        }
      }), this.effectVolume = e, this.save();
    }, t.setMusicStatus = function (e) {
      this.isMusicOn != e && (this.isMusicOn = e, this.save(), e ? this.curMusic && this.curMusic.play() : this.stopMusic());
    }, t.setEffectStatus = function (e) {
      this.isEffectOn != e && (this.isEffectOn = e, this.save(), e || this.stopAllEffects());
    }, t.stopAllEffects = function () {
      this.effectInfos.forEach(function (e, t, s) {
        e.stop();
      }), this.repeatEffectInfo.forEach(function (e, t, s) {
        for (var o = 0; o < e.length; o++) {
          e[o].stop();
        }
      });
    }, t.stopMusic = function () {
      this.musicInfos.forEach(function (e, t, s) {
        e.stop();
      });
    }, t.makeKey = function (e, t) {
      return App.bundleManager.getBundleName(t) + "_" + e;
    }, t.stopEffect = function (e, t) {
      var s = this.makeKey(e, t),
        o = this.effectInfos.get(s);
      o && (o.isStopPlay = !0, o.stop());
      var u = this.repeatEffectInfo.get(s);
      if (u && u.length > 0) for (var i = 0; i < u.length; i++) u[i].stop();
    }, t.resumeAll = function () {
      var e = this;
      this.musicInfos.forEach(function (t, s, o) {
        e.isMusicOn && t.resume();
      }), this.effectInfos.forEach(function (t, s, o) {
        e.isEffectOn && t.resume();
      });
    }, t.pauseAll = function () {
      this.musicInfos.forEach(function (e, t, s) {
        e.pause();
      }), this.effectInfos.forEach(function (e, t, s) {
        e.pause();
      });
    }, t.pauseMusic = function () {
      this.musicInfos.forEach(function (e, t, s) {
        e.pause();
      });
    }, t.resumeMusic = function () {
      var e = this;
      this.musicInfos.forEach(function (t, s, o) {
        e.isMusicOn && t.resume();
      });
    }, e;
  }();
y.module = "【音效資料】";
_publish("default", m(p = function (e) {
  var _nativeConstructor = o;
  function o() {
    for (var t, s = arguments.length, o = new Array(s), u = 0; u < s; u++) o[u] = arguments[u];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).owner = null, t;
  }
  _dependency.inheritsLoose(o, e);
  var u = o.prototype;
  return u.onDestroy = function () {
    this.audioData.remove(this.owner), e.prototype.onDestroy.call(this);
  }, u.save = function () {
    this.audioData.save();
  }, u.stopEffect = function (e, t) {
    this.audioData.stopEffect(e, t);
  }, u.stopAllEffects = function () {
    this.audioData.stopAllEffects();
  }, u.stopMusic = function () {
    this.audioData.stopMusic();
  }, u.pauseMusic = function () {
    this.audioData.pauseMusic();
  }, u.resumeMusic = function () {
    this.audioData.resumeMusic();
  }, u.playMusic = function (e, t, s, o) {
    var u = this;
    return void 0 === s && (s = !0), void 0 === o && (o = 0), new Promise(function (a) {
      var f = u.audioData.makeKey(e, t),
        l = u.audioData.musicInfos.get(f);
      l || ((l = new d()).url = e, l.bundle = t, l.source = u.node.addComponent(_dependency2.AudioSource), l.owner = u.owner, l.source.name = f, l.source.playOnAwake = !0, u.audioData.musicInfos.set(f, l)), u.audioData.curMusic = l, u.audioData.curMusic && _dependency2.Tween.stopAllByTarget(u.audioData.curMusic.source), App.cache.getCacheByAsync(e, _dependency2.AudioClip, t).then(function (i) {
        if (i) {
          var n = new _dependency4.Resource.Info();
          n.url = e, n.type = _dependency2.AudioClip, n.data = i, n.bundle = t, u.owner ? App.uiManager.addLocal(n, u.owner.className) : App.uiManager.garbage.addLocal(n), u.stopMusic(), l && l.source && (l.source.clip = i, l.source.loop = s, l.source.currentTime = o, l.volume = u.musicVolume, u.play(l, !0, a));
        } else a(!1);
      });
    });
  }, u.playEffect = function (e, t, s, o) {
    var u = this;
    return void 0 === s && (s = !1), void 0 === o && (o = 0), new Promise(function (n) {
      var a = u.audioData.makeKey(e, t),
        f = u.audioData.effectInfos.get(a);
      f || ((f = new d()).url = e, f.bundle = t, f.source = u.node.addComponent(_dependency2.AudioSource), f.owner = u.owner, f.source.name = a, f.source.playOnAwake = !0, u.audioData.effectInfos.set(a, f)), f.isStopPlay = !1, App.cache.getCacheByAsync(e, _dependency2.AudioClip, t).then(function (i) {
        if (i) {
          var a = new _dependency4.Resource.Info();
          a.url = e, a.type = _dependency2.AudioClip, a.data = i, a.bundle = t, u.owner ? App.uiManager.addLocal(a, u.owner.className) : App.uiManager.garbage.addLocal(a), f && f.source && (f.source.clip = i, f.source.loop = s, f.source.volume = u.effectVolume, f.source.currentTime = o, f.isStopPlay ? n(!0) : u.play(f, !1, n));
        } else n(!1);
      });
    });
  }, u.playRepeatEffect = function (e, t, s, o) {
    var u = this;
    return void 0 === s && (s = !1), void 0 === o && (o = 0), new Promise(function (n) {
      var a,
        f = u.audioData.makeKey(e, t),
        l = u.audioData.repeatEffectInfo.get(f);
      null != l && null != l || (l = [], u.audioData.repeatEffectInfo.set(f, l)), 0 == l.length ? ((a = new d()).url = e, a.bundle = t, a.source = u.node.addComponent(_dependency2.AudioSource), a.owner = u.owner, a.source.name = f, a.source.playOnAwake = !0, l.push(a)) : a = l.shift(), App.cache.getCacheByAsync(e, _dependency2.AudioClip, t).then(function (i) {
        if (i) {
          var f = new _dependency4.Resource.Info();
          f.url = e, f.type = _dependency2.AudioClip, f.data = i, f.bundle = t, u.owner ? App.uiManager.addLocal(f, u.owner.className) : App.uiManager.garbage.addLocal(f), a && a.source && (a.source.clip = i, a.source.loop = s, a.source.volume = u.effectVolume, a.source.currentTime = o, u.playRepeatEffectSound(a, !1, n));
        } else n(!1);
      });
    });
  }, u.play = function (e, t, s) {
    e && e.source ? t ? this.isMusicOn ? (e.source.play(), s(!0)) : s(!1) : this.isEffectOn ? (e.source.play(), s(!0)) : s(!1) : s(!1);
  }, u.playRepeatEffectSound = function (e, t, s) {
    e && e.source && this.isEffectOn ? (e.source.playOneShot(e.source.clip), s(!0)) : s(!1);
  }, u.onEnterBackground = function () {}, u.onEnterForgeground = function (e) {}, u.fadeOutMusic = function (e, t, s) {
    void 0 === s && (s = 1);
    this.audioData.makeKey(e, t);
    this.audioData.curMusic && (_dependency2.Tween.stopAllByTarget(this.audioData.curMusic.source), _dependency2.tween(this.audioData.curMusic.source).bindNodeState(false).to(s, {
      volume: 0
    }).start());
  }, _dependency.createClass(o, [{
    key: "audioData",
    get: function () {
      return _dependency6.default.instance.get(y);
    }
  }, {
    key: "musicVolume",
    get: function () {
      return this.audioData.musicVolume;
    },
    set: function (e) {
      this.audioData.setMusicVolume(e);
    }
  }, {
    key: "effectVolume",
    get: function () {
      return this.audioData.effectVolume;
    },
    set: function (e) {
      this.audioData.setEffectVolume(e);
    }
  }, {
    key: "isEffectOn",
    get: function () {
      return this.audioData.isEffectOn;
    },
    set: function (e) {
      this.audioData.setEffectStatus(e);
    }
  }, {
    key: "isMusicOn",
    get: function () {
      return this.audioData.isMusicOn;
    },
    set: function (e) {
      this.audioData.setMusicStatus(e);
    }
  }]), o;
}(_dependency3.default)) || p);
_dependency2.cclegacy._RF.pop();

// Fresh owned page ignores only persisted transient playback gates.
if(!__ownedAudioFlagsEditor)__installOwnedAudioFlags(y,()=>!!globalThis.globalProjectF);
