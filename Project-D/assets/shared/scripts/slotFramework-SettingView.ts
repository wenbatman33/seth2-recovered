// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-AdapterEvent";
import * as _dependency4 from "./main-UrlUtils";
import * as _dependency5 from "./main-WrapperData";
import * as _dependency6 from "./main-UIView";
import * as _dependency7 from "./main-Decorators";
import * as _dependency8 from "./slotFramework-SlotFrameworkData";
import * as _dependency9 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "./slotFramework-ColorModel";
import * as _dependency1 from "./slotFramework-PlatformModel";
import * as _dependency10 from "./slotFramework-SettingsModel";
import * as _dependency11 from "./slotFramework-UrlModel";
import * as _dependency12 from "./slotFramework-ObjectUtils";
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
var e, n, o, i, a, l, r, s, c, u, f, m, d, p, h, g, b, V, w, C, y, v, S, H, M, N, T, B, D;
var L, A, _, E, O, P, U, k, z, R, j, G, I, F, J, Y, x, K, Q, W, X, Z, q, $, tt, et, nt, ot, it, at, lt, rt, st, ct, ut, ft, mt, dt, pt, ht, gt, bt, Vt;
_dependency2.cclegacy._RF.push({}, "cf88cj0OvNAjYG3rmXimZNf", "SettingView", void 0);
var wt = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (L = wt("SettingView"), A = _dependency7.inject("content/topBar/closeBtn", _dependency2.Node), _ = _dependency7.inject("bbr", _dependency2.Node), E = _dependency7.inject("content/notifyContent/switchHitArea", _dependency2.Node), O = _dependency7.inject("content/jpStop/switch", _dependency2.Node), P = _dependency7.inject("content/music/addBtn", _dependency2.Node), U = _dependency7.inject("content/music/cutBtn", _dependency2.Node), k = _dependency7.inject("content/music/volume", _dependency2.Node), z = _dependency7.inject("content/music/volume/handle", _dependency2.Node), R = _dependency7.inject("content/music/volume/num", _dependency2.Node), j = _dependency7.inject("content/music/volume/num/label", _dependency2.Label), G = _dependency7.inject("content/effect/addBtn", _dependency2.Node), I = _dependency7.inject("content/effect/cutBtn", _dependency2.Node), F = _dependency7.inject("content/effect/volume", _dependency2.Node), J = _dependency7.inject("content/effect/volume/handle", _dependency2.Node), Y = _dependency7.inject("content/effect/volume/num", _dependency2.Node), x = _dependency7.inject("content/effect/volume/num/label", _dependency2.Label), K = _dependency7.inject("content/viewMode", _dependency2.Node), Q = _dependency7.inject("content/viewMode/btnViewModeL", _dependency2.Node), W = _dependency7.inject("content/viewMode/btnViewModeP", _dependency2.Node), X = _dependency7.inject("content/version", _dependency2.Label), L(($ = _dependency.applyDecoratedDescriptor((q = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "closeBtn", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "notifySwitchHitArea", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "jpStopSwitch", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "musicAddBtn", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "musicCutBtn", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "musicVol", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "musicVolHandleNode", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "musicVolNum", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "musicVolNumLabel", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectAddBtn", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectCutBtn", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectVol", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectVolHandleNode", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectVolNum", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectVolNumLabel", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndViewMode", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnViewModeL", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnViewModeP", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "versionLabel", Vt, _dependency.assertThisInitialized(e)), e.effectVolBar = null, e.effectVolHandle = null, e.musicVolBar = null, e.musicVolHandle = null, e.preData = null, e.allowSwitchGameList = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.start = function () {
    this.init();
  }, l.onDestroy = function () {}, e.getPrefabUrl = function () {
    return "prefabs/view/SettingView";
  }, l.init = function () {
    var t = _dependency11.default.searchParams.gn;
    this.isEnableViewMode(this.allowSwitchGameList.indexOf(t) > -1);
  }, l.show = function (e) {
    t.prototype.show.call(this, e), this.musicVolBar = this.musicVol.getComponent(_dependency2.ProgressBar), this.musicVolHandle = this.musicVol.getComponent(_dependency2.Slider), this.effectVolBar = this.effectVol.getComponent(_dependency2.ProgressBar), this.effectVolHandle = this.effectVol.getComponent(_dependency2.Slider), this.setData(), this.setEventTouch();
  }, l.setData = function () {
    var t = this.data,
      e = t.notify,
      n = t.stopOnJackpot,
      o = t.backgroundVolume,
      i = t.effectVolume;
    this.preData = _dependency12.ObjectUtils.clone(this.data.getData()), this.setNotify(e, !0), this.setJpStop(n), this.musicVolHandle.progress = o, this.setMusicVolume(this.musicVolHandle), this.effectVolHandle.progress = i, this.setEffectVolume(this.effectVolHandle), this.versionLabel && (this.versionLabel.string = "ver:" + this.slotData.SLOT_VERSION);
  }, l.onClose = function () {
    this.sendSetting(), dispatch(_dependency9.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM), this.close();
  }, l.isEnableViewMode = function (t) {
    var e = App.dataCenter.get(_dependency5.default).orientation,
      n = new URLSearchParams(window.location.search),
      o = null;
    switch (this.ndViewMode.active = t, e) {
      case _dependency3.EOrientationType.LANDSCAPE:
        this.btnViewModeL.getComponent(_dependency2.Sprite).color = _dependency0.default.getData().background[80], this.changeViewModeColor(this.btnViewModeL, _dependency0.default.getData().background[0]), n.set("view_mode", "portrait"), o = this.btnViewModeP;
        break;
      case _dependency3.EOrientationType.PORTRAIT:
        this.btnViewModeP.getComponent(_dependency2.Sprite).color = _dependency0.default.getData().background[80], this.changeViewModeColor(this.btnViewModeP, _dependency0.default.getData().background[0]), n.set("view_mode", "landscape"), o = this.btnViewModeL;
    }
    o.getComponent(_dependency2.Sprite).color = _dependency0.default.getData().mainGame.main, this.changeViewModeColor(o, _dependency0.default.getData().background[100]);
    o.on(_dependency2.NodeEventType.TOUCH_END, function () {
      o.getComponent(_dependency2.Sprite).color = _dependency0.default.getData().mainGame.main, function () {
        var t = _dependency4.default.getParam("gn") + "_view_mode";
        localStorage.setItem(t, n.get("view_mode"));
        var e = window.location.pathname + "?" + n.toString();
        window.location.href = e;
      }();
    }), o.on(_dependency2.NodeEventType.MOUSE_ENTER, function () {
      o.getComponent(_dependency2.Sprite).color = _dependency0.default.getData().mainGame.mainHover;
    }), o.on(_dependency2.NodeEventType.MOUSE_LEAVE, function () {
      o.getComponent(_dependency2.Sprite).color = _dependency0.default.getData().mainGame.main;
    }), o.on(_dependency2.NodeEventType.TOUCH_CANCEL, function () {
      o.getComponent(_dependency2.Sprite).color = _dependency0.default.getData().mainGame.main;
    });
  }, l.changeViewModeColor = function (t, e) {
    var n = t.getChildByName("status").getChildByName("Label"),
      o = t.getChildByName("status").getChildByName("screen_icon");
    n.getComponent(_dependency2.Label).color = e, o.getComponent(_dependency2.Sprite).color = e;
  }, l.sendSetting = function () {
    var t = _dependency12.ObjectUtils.diffObjects(this.preData, this.data.getData());
    if (Object.keys(t).length > 0) {
      var e = {
        type: "game",
        data: t
      };
      dispatch(_dependency9.SlotFrameworkEvent.SEND_SETTING_REQUEST, e);
    }
  }, l.setEventTouch = function () {
    var t = this;
    this.closeBtn.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onClose();
    }), this.bbr.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onClose();
    }), this.notifySwitchHitArea.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var e = !t.data.notify;
      t.setNotify(e, !1), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.jpStopSwitch.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var e = !t.data.stopOnJackpot;
      t.setJpStop(e);
    }), this.musicAddBtn.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.musicVolHandle.progress += .1, t.setMusicVolume(t.musicVolHandle);
    }), this.musicCutBtn.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.musicVolHandle.progress -= .1, t.setMusicVolume(t.musicVolHandle);
    }), this.onN(this.musicVol, "slide", this.setMusicVolume), this.musicVolBar.progress = this.musicVolHandle.progress, this.setMusicVolume(this.musicVolHandle), this.effectAddBtn.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.effectVolHandle.progress += .1, t.setEffectVolume(t.effectVolHandle);
    }), this.effectCutBtn.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.effectVolHandle.progress -= .1, t.setEffectVolume(t.effectVolHandle);
    }), this.onN(this.effectVol, "slide", this.setEffectVolume), this.effectVolBar.progress = this.effectVolHandle.progress, this.setEffectVolume(this.effectVolHandle), this.effectVol.on(_dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.effectVolHandleNode.on(_dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
    });
  }, l.setJpStop = function (t) {
    var e = this.jpStopSwitch.getComponent(_dependency2.Animation);
    t ? e.play(e.clips[0].name) : e.play(e.clips[1].name), _dependency10.default.stopOnJackpot = t;
  }, l.setNotify = function (t, e) {
    this.switchTween(this.notifySwitchHitArea, t, e), _dependency10.default.notify = t;
  }, l.switchTween = function (t, e, n) {
    void 0 === n && (n = !1);
    var o = t.getChildByPath("switch/label"),
      i = t.getChildByPath("switch/bar"),
      a = t.getChildByPath("switch/handle"),
      l = _dependency2.v3(e ? 13 : -13, -2, 0),
      r = e ? _dependency0.default.getData().mainGame.main : _dependency0.default.getData().background[80],
      s = e ? _dependency0.default.getData().mainGame.main : _dependency0.default.getData().background[60],
      c = function () {
        i.getComponent(_dependency2.Sprite).color = r, o.getComponent(_dependency2.Label).color = s, o.getComponent(_dependency2.Label).string = e ? "ON" : "OFF";
      };
    if (n) return c(), void a.setPosition(l);
    _dependency2.Tween.stopAllByTarget(a), _dependency2.tween(a).bindNodeState(false).call(function () {
      c();
    }).to(.2, {
      position: l
    }).start();
  }, l.setMusicVolume = function (t) {
    t.progress < 0 && (t.progress = 0), t.progress > 1 && (t.progress = 1), App.globalAudio.musicVolume = t.progress, this.musicVolBar.progress = t.progress, this.musicVolNumLabel.string = String(Math.round(100 * t.progress));
    var e = this.musicVolHandleNode.position;
    this.musicVolNum.setPosition(e.x, e.y + 34), this.data.backgroundVolume = Math.round(100 * t.progress) / 100, _dependency1.default.getData().player.settings.advancedSettings.sounds.backgroundVolume = this.data.backgroundVolume;
  }, l.setEffectVolume = function (t) {
    t.progress < 0 && (t.progress = 0), t.progress > 1 && (t.progress = 1), App.globalAudio.effectVolume = t.progress, this.effectVolBar.progress = t.progress, this.effectVolNumLabel.string = String(Math.round(100 * t.progress));
    var e = this.effectVolHandleNode.position;
    this.effectVolNum.setPosition(e.x, e.y + 34), this.data.effectVolume = Math.round(100 * t.progress) / 100, _dependency1.default.getData().player.settings.advancedSettings.sounds.effectVolume = this.data.effectVolume;
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return _dependency10.default;
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), e;
}(_dependency6.default)).prototype, "closeBtn", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(q.prototype, "bbr", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(q.prototype, "notifySwitchHitArea", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(q.prototype, "jpStopSwitch", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(q.prototype, "musicAddBtn", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(q.prototype, "musicCutBtn", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(q.prototype, "musicVol", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(q.prototype, "musicVolHandleNode", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(q.prototype, "musicVolNum", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(q.prototype, "musicVolNumLabel", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(q.prototype, "effectAddBtn", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(q.prototype, "effectCutBtn", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(q.prototype, "effectVol", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(q.prototype, "effectVolHandleNode", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(q.prototype, "effectVolNum", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(q.prototype, "effectVolNumLabel", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(q.prototype, "ndViewMode", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(q.prototype, "btnViewModeL", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(q.prototype, "btnViewModeP", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Vt = _dependency.applyDecoratedDescriptor(q.prototype, "versionLabel", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = q)) || Z));
_dependency2.cclegacy._RF.pop();
