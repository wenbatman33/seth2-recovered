// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-CmmUtils";
import * as _dependency5 from "./main-UIView";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "./slotFramework-ColorModel";
import * as _dependency9 from "./slotFramework-PlatformModel";
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
var n, e, i, o, a, r, l, c, s, u, p, f, d, E, m, h, g, N;
var b, B, _, A, T, v, C, y, D, I, L, M, k;
_dependency2.cclegacy._RF.push({}, "7ebe9Om/2VG2I5BpzlSWoPk", "NickNameView", void 0);
var w = _dependency2._decorator.ccclass;
_publish("default", (b = w("NickNameView"), B = _dependency6.inject("bbr", _dependency2.Node), _ = _dependency6.inject("content/inputEditBox", _dependency2.Node), A = _dependency6.inject("content/tip", _dependency2.Label), T = _dependency6.inject("content/btnContent/cancelBtn", _dependency2.Node), v = _dependency6.inject("content/btnContent/confirmBtn", _dependency2.Node), b((D = _dependency.applyDecoratedDescriptor((y = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "bbr", D, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "inputEditBox", I, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "tip", L, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "cancelBtn", M, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "confirmBtn", k, _dependency.assertThisInitialized(n)), n.MAX_NAME_LENGTH = 6, n.MIN_NAME_LENGTH = 1, n.listenerUpdateAlertFlag = !1, n;
  }
  _dependency.inheritsLoose(n, t), n.getPrefabUrl = function () {
    return "prefabs/view/NickNameView";
  };
  var a = n.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.update = function () {
    this.listenerUpdateAlertFlag && null !== App.gameAlert.currentShow() && (this.inputEditBox.getComponent(_dependency2.EditBox).isFocused() && this.inputEditBox.getComponent(_dependency2.EditBox).blur(), this.listenerUpdateAlertFlag = !1);
  }, a.init = function () {
    this.setNickname(), this.addEventTouch();
  }, a.onClose = function () {
    this.close(), dispatch(_dependency7.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
  }, a.setNickname = function () {
    var t = _dependency9.default.getData().player.displayName;
    this.inputEditBox.getComponent(_dependency2.EditBox).string = t || "";
  }, a.setTip = function (t, n) {
    var e = _dependency8.default.getData(),
      i = e.green,
      o = e.red;
    this.tip.string = t, this.tip.color = n ? o.primary : i.primary;
  }, a.validateNickname = function (t) {
    if (t.length < this.MIN_NAME_LENGTH) return this.setTip(App.getLanguage("nicknameMinLength", ["" + this.MIN_NAME_LENGTH], _dependency3.EBundles[_dependency3.EBundles.slotFramework]), !0), !1;
    var n = /[^A-Za-z0-9가-힣à-ỵ_\u3040-\u309F\u30A0-\u30FF\u0110-\u01B0\u4e00-\u9fff\u3105-\u3129]/g,
      e = /[ˇˋˊ˙]/g;
    return n.test(t) || e.test(t) ? (this.setTip(App.getLanguage("nicknameSpecialChars", null, _dependency3.EBundles[_dependency3.EBundles.slotFramework]), !0), t = t.replace(n, "").replace(e, ""), !1) : t.length !== this.MAX_NAME_LENGTH || (this.setTip(App.getLanguage("nicknameMaxLength", ["" + this.MAX_NAME_LENGTH], _dependency3.EBundles[_dependency3.EBundles.slotFramework]), !1), !0);
  }, a.addEventTouch = function () {
    var t = this;
    this.bbr.on(_dependency2.NodeEventType.TOUCH_END, _dependency4.CmmUtils.debounce(function () {
      t.onClose();
    })), this.cancelBtn.on(_dependency2.NodeEventType.TOUCH_END, _dependency4.CmmUtils.debounce(function () {
      t.onClose();
    })), _dependency4.CmmUtils.addBtnClickEvent(this.confirmBtn, _dependency4.CmmUtils.debounce(function () {
      var n = t.inputEditBox.getComponent(_dependency2.EditBox).string;
      t.validateNickname(n) && t.sendDisplayName(n), dispatch(_dependency7.SlotFrameworkEvent.PLAY_CLICK_BTM);
    })), this.inputEditBox.on(_dependency2.EditBox.EventType.EDITING_DID_BEGAN, function () {
      t.listenerUpdateAlertFlag = !0;
      var n = t.inputEditBox.getComponent(_dependency2.EditBox).string;
      t.validateNickname(n);
    }), this.inputEditBox.on(_dependency2.EditBox.EventType.EDITING_DID_ENDED, function () {
      t.listenerUpdateAlertFlag = !1;
    }), this.inputEditBox.on(_dependency2.EditBox.EventType.TEXT_CHANGED, function () {
      var n = t.inputEditBox.getComponent(_dependency2.EditBox).string;
      t.setConfirmBtnInteractable(!0), t.setTip("", !0), t.validateNickname(n) ? t.setConfirmBtnInteractable(!0) : t.setConfirmBtnInteractable(!1);
    });
  }, a.setConfirmBtnInteractable = function (t) {
    this.confirmBtn.getComponent(_dependency2.Button).interactable = t;
  }, a.sendDisplayName = function (t) {
    _dependency9.default.getData().player.displayName !== t ? dispatch(_dependency7.SlotFrameworkEvent.SEND_UPDATE_DISPLAYNAME_REQUEST, t) : this.close();
  }, a.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency7.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE, function () {
      n.close();
    }), this.on(_dependency7.SlotFrameworkEvent.SET_DISPLAYNAME_TIP, function (t) {
      n.setTip("" + t, !0), n.setConfirmBtnInteractable(!1);
    });
  }, n;
}(_dependency5.default)).prototype, "bbr", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(y.prototype, "inputEditBox", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(y.prototype, "tip", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(y.prototype, "cancelBtn", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(y.prototype, "confirmBtn", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = y)) || C));
_dependency2.cclegacy._RF.pop();
