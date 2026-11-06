// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Decorators";
import * as _dependency4 from "./main-Config";
import * as _dependency5 from "./main-Bundles";
import * as _dependency6 from "./main-EventComponent";
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
var e, n, i, r, o, l, a, c, s, u, h, f, p, d, g, b, _, m, C, v, w, y, x, A;
var P, S, L, k, B, H, E, T, q, z, I, N, D, R, O, G, F, V, J, M, U, j, X;
_dependency2.cclegacy._RF.push({}, "00dbfsAAG1OXqY+qbdiBELI", "GameAlert", void 0);
var Y = (P = _dependency3.inject("bbr", _dependency2.Node), S = _dependency3.inject("content", _dependency2.Node), L = _dependency3.inject("title", _dependency2.Node, "content"), k = _dependency3.inject("expand", _dependency2.Node, "content"), B = _dependency3.inject("expand/bg", _dependency2.Node, "content"), H = _dependency3.inject("expand/label", _dependency2.Label, "content"), E = _dependency3.inject("expand/num", _dependency2.Label, "content"), T = _dependency3.inject("message", _dependency2.Label, "content"), q = _dependency3.inject("button/confirm", _dependency2.Node, "content"), z = _dependency3.inject("button/cancel", _dependency2.Node, "content"), I = _dependency3.inject("errorCode", _dependency2.Node, "content"), D = _dependency.applyDecoratedDescriptor((N = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "_bbr", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_content", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_title", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_expand", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_expandBg", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_expandTitle", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_expandNum", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_message", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_confirm", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "_cancel", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "errorCode", X, _dependency.assertThisInitialized(e)), e._config = null, e.finishAlertCb = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.show = function (t) {
    t.confirmString || (t.confirmString = App.getLanguage("alertConfirm", [], _dependency5.EBundles[_dependency5.EBundles.wrapper])), t.cancelString || (t.cancelString = App.getLanguage("alertCancel", [], _dependency5.EBundles[_dependency5.EBundles.wrapper])), t.colorStyle && (this._content.getComponent(_dependency2.Sprite).color = t.colorStyle), t.bbrColor && (this._bbr.getComponent(_dependency2.Sprite).color = t.bbrColor), null != t.titleisHidden && t.titleisHidden && (this._title.active = !1), null != t.expandisHidden && t.expandisHidden && (this._expand.active = !1), null != t.confirmisHidden && t.confirmisHidden && (this._confirm.parent.active = !1), this._content.getComponent(_dependency2.Layout).updateLayout(!0), this._config = t, this.writeContent(t), this.showButton(t), (null == t ? void 0 : t.code) && this.setErrorCode(t), this._show();
  }, l.setErrorCode = function (t) {
    this.errorCode.active = !0, this.errorCode.getComponent(_dependency2.Label).string = "" + t.code;
  }, l._show = function () {
    this._content && _dependency2.tween(this._content).bindNodeState(false).set({
      scale: new _dependency2.Vec3(.2, .2, .2)
    }).to(.2, {
      scale: new _dependency2.Vec3(1.1, 1.1, 1.1)
    }).delay(.05).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }).start();
  }, l.setFinishAlert = function (t) {
    this.finishAlertCb = t;
  }, l.writeContent = function (t) {
    if (t.text ? this._message.string = t.text : (Log.e("請指定提示內容"), this._message.string = ""), t.title ? (this._title.active = !0, this._title.getComponent(_dependency2.Label).string = t.title) : this._title.active = !1, t.expandTitle ? (this._expand.active = !0, this._expandTitle.string = t.expandTitle, this._expandNum.string = t.expandNum) : this._expand.active = !1, t.confirmString) {
      var e = _dependency2.find("Label", this._confirm);
      if (e) {
        var n = e.getComponent(_dependency2.Label);
        n && (n.string = t.confirmString);
      }
    }
    if (t.cancelString) {
      var i = _dependency2.find("Label", this._cancel);
      if (i) {
        var r = i.getComponent(_dependency2.Label);
        r && (r.string = t.cancelString);
      }
    }
  }, l.showButton = function (t) {
    var e = void 0 === t.needCloseAlert || t.needCloseAlert;
    this._confirm && this._cancel && (t.bbrCb ? this._bbr.on(_dependency2.Input.EventType.TOUCH_END, this.onClick.bind(this, t.bbrCb, !1, e)) : Log.d("請設定 bbrCb"), t.confirmCb ? (this._confirm.active = !0, this._confirm.on(_dependency2.Input.EventType.TOUCH_END, this.onClick.bind(this, t.confirmCb, !0, e))) : this._confirm.active = !1, t.cancelCb ? (this._cancel.active = !0, this._cancel.on(_dependency2.Input.EventType.TOUCH_END, this.onClick.bind(this, t.cancelCb, !1, e))) : this._cancel.active = !1);
  }, l.hiddenButton = function () {
    this._confirm.parent.active = !1, this._expand.active = !1, this._title.active = !1, this._content.getComponent(_dependency2.Layout).updateLayout(!0);
  }, l._close = function (t, e) {
    var n = this;
    _dependency2.isValid(this._content) && (t ? _dependency2.tween(this._content).bindNodeState(false).to(.2, {
      scale: new _dependency2.Vec3(1.15, 1.15, 1.15)
    }).to(.1, {
      scale: new _dependency2.Vec3(.3, .3, .3)
    }).call(function () {
      n.finishAlertCb(), e && e();
    }).start() : e && e());
  }, l.onClick = function (t, e, n) {
    this._config.immediatelyCallback ? (t && t(e), this._close(n, null)) : this._close(n, function () {
      t && t(e);
    });
  }, l.enableBLockInputEvents = function () {
    this._bbr && (this._bbr.getComponent(_dependency2.BlockInputEvents).enabled = !0, this._bbr.active = !0), this._content && (this._content.getComponent(_dependency2.BlockInputEvents).enabled = !0);
  }, l.disableBLockInputEvents = function () {
    Log.e("this._bbr:::::::", this._bbr), Log.e("this._content:::::::", this._content), this._bbr && (this._bbr.getComponent(_dependency2.BlockInputEvents).enabled = !1, this._bbr.active = !1), this._content && (this._content.getComponent(_dependency2.BlockInputEvents).enabled = !1);
  }, _dependency.createClass(e, [{
    key: "config",
    get: function () {
      return this._config;
    }
  }]), e;
}(_dependency6.default)).prototype, "_bbr", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(N.prototype, "_content", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(N.prototype, "_title", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(N.prototype, "_expand", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(N.prototype, "_expandBg", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(N.prototype, "_expandTitle", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(N.prototype, "_expandNum", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(N.prototype, "_message", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(N.prototype, "_confirm", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(N.prototype, "_cancel", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(N.prototype, "errorCode", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N);
_publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.curPanel = null, this.queue = [];
  }
  var e = t.prototype;
  return e.getConfig = function (t) {
    var e = {};
    return t.tag && (e.tag = t.tag), t.text && (e.text = t.text), t.title && (e.title = t.title), t.confirmString && (e.confirmString = t.confirmString), t.cancelString && (e.cancelString = t.cancelString), t.richText && (e.richText = t.richText), t.immediatelyCallback && (e.immediatelyCallback = t.immediatelyCallback), t.isRepeat && (e.isRepeat = t.isRepeat), t.needCloseAlert && (e.needCloseAlert = t.needCloseAlert), t.code && (e.code = t.code), t.titleisHidden && (e.titleisHidden = t.titleisHidden), t.expandisHidden && (e.expandisHidden = t.expandisHidden), t.confirmisHidden && (e.confirmisHidden = t.confirmisHidden), e;
  }, e.show = function (t, e) {
    return void 0 === e && (e = _dependency4.ViewZOrder.Alert), t.tag && !1 === t.isRepeat && this.isRepeat(t.tag) ? (Log.w("彈出框已經存在 config : " + JSON.stringify(this.getConfig(t))), !1) : (this.queue.push(t), this._show(t, e), !0);
  }, e.isCurrentShow = function (t) {
    if (this.curPanel) {
      var e,
        n = null == (e = this.curPanel.getComponent(Y)) ? void 0 : e.config;
      if (n && n.tag == t) return !0;
    }
    return !1;
  }, e.currentShow = function (t) {
    if (this.curPanel) {
      var e,
        n = null == (e = this.curPanel.getComponent(Y)) ? void 0 : e.config;
      return t && n && n.tag, n;
    }
    return null;
  }, e.enableBlockInputEvents = function () {
    this.curPanel && this.curPanel.getComponent(Y).enableBLockInputEvents();
  }, e.isRepeat = function (t) {
    if (this.curPanel) {
      var e,
        n = null == (e = this.curPanel.getComponent(Y)) ? void 0 : e.config;
      if (n && n.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(n))), !0;
    } else for (var i = 0; i < this.queue.length; i++) {
      var r = this.queue[i];
      if (r.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(r))), !0;
    }
    return !1;
  }, e.close = function (t) {
    if (t) {
      for (var e = this.queue.length; e--;) this.queue[e].tag == t && this.queue.splice(e, 1);
      if (this.curPanel) {
        var n,
          i = null == (n = this.curPanel.getComponent(Y)) ? void 0 : n.config;
        i && i.tag == t && this.finishAlert();
      }
    } else this.finishAlert();
  }, e.closeAll = function () {
    this.queue = [], this.finishAlert();
  }, e.finishAlert = function () {
    this.curPanel && (this.curPanel.removeFromParent(), this.curPanel = null);
    var t = this.queue.shift();
    return 0 != this.queue.length ? (this._show(this.queue[0]), this.queue[0]) : t;
  }, e._show = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e, n) {
      var i;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            void 0 === n && (n = _dependency4.ViewZOrder.Alert), this.curPanel || (_dependency2.log(App.cache), this.curPanel = _dependency2.instantiate(App.uiManager.getScenePrefab("GameAlert")), i = this.curPanel.addComponent(Y), App.uiManager.addView(this.curPanel, n), null != e.isDisableBlockInput && (Log.e("disableBlockInputEvents:::::::", e.isDisableBlockInput), 1 == e.isDisableBlockInput && i.disableBLockInputEvents()), i.setFinishAlert(this.finishAlert.bind(this)), i.show(e));
          case 2:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, n) {
      return t.apply(this, arguments);
    };
  }(), _dependency.createClass(t, [{
    key: "currentPanel",
    get: function () {
      return this.curPanel;
    }
  }]), t;
}()).module = "【GameAlert】", _dependency2.cclegacy._RF.pop();
