// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-Decorators";
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
var n, e, i, o, r, c, l, s, a, u, h, f, g, _, p, m, C, v;
var b, d, w, y, x, S, P, T, A, z, L, q, k, R, B;
_dependency2.cclegacy._RF.push({}, "6d185pBzzJKFZi8SZ3jOWGJ", "GameAlert2", void 0);
var E = (b = _dependency4.inject("close", _dependency2.Node, "content"), d = _dependency4.inject("content", _dependency2.Node), w = _dependency4.inject("content", _dependency2.Label, "content"), y = _dependency4.inject("richContent", _dependency2.RichText, "content"), x = _dependency4.inject("title", _dependency2.Label, "content"), S = _dependency4.inject("confirm", _dependency2.Node, "content"), P = _dependency4.inject("cancel", _dependency2.Node, "content"), A = _dependency.applyDecoratedDescriptor((T = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, r = new Array(e), c = 0; c < e; c++) r[c] = arguments[c];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "_closeBtn", A, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "_content", z, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "_textContent", L, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "_richTextContent", q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "_title", k, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "_confirm", R, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "_cancel", B, _dependency.assertThisInitialized(n)), n._config = null, n;
  }
  _dependency.inheritsLoose(n, t);
  var c = n.prototype;
  return c.show = function (t) {
    t.title || (t.title = App.getLanguage("alert_title")), t.confirmString || (t.confirmString = App.getLanguage("alert_confirm")), t.cancelString || (t.cancelString = App.getLanguage("alert_cancel")), this._config = t, this.writeContent(t), this.showButton(t), this._show();
  }, c._show = function () {
    this._content && _dependency2.tween(this._content).bindNodeState(false).set({
      scale: new _dependency2.Vec3(.2, .2, .2)
    }).to(.2, {
      scale: new _dependency2.Vec3(1.1, 1.1, 1.1)
    }).delay(.05).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }).start();
  }, c.writeContent = function (t) {
    if (t.richText ? (this._textContent.node.active = !1, this._richTextContent.node.active = !0, this._richTextContent.string = t.richText) : (this._textContent.node.active = !0, this._richTextContent.node.active = !1, t.text ? this._textContent.string = t.text : (Log.e("請指定提示內容"), this._textContent.string = "")), t.title && (this._title.string = t.title), t.confirmString) {
      var n = _dependency2.find("Label", this._confirm);
      if (n) {
        var e = n.getComponent(_dependency2.Label);
        e && (e.string = t.confirmString);
      }
    }
    if (t.cancelString) {
      var i = _dependency2.find("Label", this._cancel);
      if (i) {
        var o = i.getComponent(_dependency2.Label);
        o && (o.string = t.cancelString);
      }
    }
  }, c.showButton = function (t) {
    this._confirm && this._cancel && this._closeBtn && (this._closeBtn.on(_dependency2.Input.EventType.TOUCH_END, this.close.bind(this)), t.confirmCb ? (this._confirm.active = !0, this._confirm.on(_dependency2.Input.EventType.TOUCH_END, this.onClick.bind(this, t.confirmCb, !0)), this._closeBtn.on(_dependency2.Input.EventType.TOUCH_END, this.onClick.bind(this, t.confirmCb, !1))) : this._confirm.active = !1, t.cancelCb ? (this._cancel.active = !0, this._cancel.on(_dependency2.Input.EventType.TOUCH_END, this.onClick.bind(this, t.cancelCb, !1))) : this._cancel.active = !1, this._confirm.active ? this._cancel.active || this._confirm.setPosition(new _dependency2.Vec3(0, this._confirm.position.y, this._confirm.position.z)) : this._cancel.active ? this._confirm.setPosition(new _dependency2.Vec3(0, this._confirm.position.y, this._confirm.position.z)) : Log.w("提示框無按鈕顯示"));
  }, c.close = function () {
    this._close(null);
  }, c._close = function (t) {
    _dependency2.isValid(this._content) && _dependency2.tween(this._content).bindNodeState(false).to(.2, {
      scale: new _dependency2.Vec3(1.15, 1.15, 1.15)
    }).to(.1, {
      scale: new _dependency2.Vec3(.3, .3, .3)
    }).call(function () {
      App.alert.finishAlert(), t && t();
    }).start();
  }, c.onClick = function (t, n) {
    this._config.immediatelyCallback ? (t && t(n), this._close(null)) : this._close(function () {
      t && t(n);
    });
  }, _dependency.createClass(n, [{
    key: "config",
    get: function () {
      return this._config;
    }
  }]), n;
}(_dependency3.default)).prototype, "_closeBtn", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(T.prototype, "_content", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(T.prototype, "_textContent", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(T.prototype, "_richTextContent", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(T.prototype, "_title", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(T.prototype, "_confirm", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(T.prototype, "_cancel", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T);
_publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.curPanel = null, this.queue = [];
  }
  var n = t.prototype;
  return n.getConfig = function (t) {
    var n = {};
    return t.tag && (n.tag = t.tag), t.text && (n.text = t.text), t.title && (n.title = t.title), t.confirmString && (n.confirmString = t.confirmString), t.cancelString && (n.cancelString = t.cancelString), t.richText && (n.richText = t.richText), t.immediatelyCallback && (n.immediatelyCallback = t.immediatelyCallback), t.isRepeat && (n.isRepeat = t.isRepeat), n;
  }, n.show = function (t) {
    return t.tag && !1 === t.isRepeat && this.isRepeat(t.tag) ? (Log.w("彈出框已經存在 config : " + JSON.stringify(this.getConfig(t))), !1) : (this.queue.push(t), this._show(t), !0);
  }, n.isCurrentShow = function (t) {
    if (this.curPanel) {
      var n,
        e = null == (n = this.curPanel.getComponent(E)) ? void 0 : n.config;
      if (e && e.tag == t) return !0;
    }
    return !1;
  }, n.currentShow = function (t) {
    if (this.curPanel) {
      var n,
        e = null == (n = this.curPanel.getComponent(E)) ? void 0 : n.config;
      return t && e && e.tag, e;
    }
    return null;
  }, n.isRepeat = function (t) {
    if (this.curPanel) {
      var n,
        e = null == (n = this.curPanel.getComponent(E)) ? void 0 : n.config;
      if (e && e.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(e))), !0;
    } else for (var i = 0; i < this.queue.length; i++) {
      var o = this.queue[i];
      if (o.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(o))), !0;
    }
    return !1;
  }, n.close = function (t) {
    if (t) {
      for (var n = this.queue.length; n--;) this.queue[n].tag == t && this.queue.splice(n, 1);
      if (this.curPanel) {
        var e,
          i = null == (e = this.curPanel.getComponent(E)) ? void 0 : e.config;
        i && i.tag == t && this.finishAlert();
      }
    } else this.finishAlert();
  }, n.closeAll = function () {
    this.queue = [], this.finishAlert();
  }, n.finishAlert = function () {
    this.curPanel && (this.curPanel.destroy(), this.curPanel = null);
    var t = this.queue.shift();
    return 0 != this.queue.length ? (this._show(this.queue[0]), this.queue[0]) : t;
  }, n._show = function (t) {
    if (!this.curPanel) {
      this.curPanel = _dependency2.instantiate(App.uiManager.getScenePrefab("Alert"));
      var n = this.curPanel.addComponent(E);
      App.uiManager.addView(this.curPanel, _dependency5.ViewZOrder.Alert), n.show(t);
    }
  }, t;
}()).module = "【GameAlert2】", _dependency2.cclegacy._RF.pop();
