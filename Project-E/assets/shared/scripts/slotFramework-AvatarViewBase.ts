import { EDITOR as __localEmptyAvatarEditor } from 'cc/env';
import { installEmptyAvatarMenuHook as __installLocalEmptyAvatarMenu } from '../../game/backend/MenuMetadata';
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-UIView";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-AvatarToggleItem";
import * as _dependency7 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "./slotFramework-PlatformModel";
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
var e, a, n, o, i, r, c, s, l, u, h, p, d, f, v, g;
var A, b, E, T, I, _, m, C, y;
_dependency2.cclegacy._RF.push({}, "74c24U0r3pJjrBOjbk1SPRY", "AvatarViewBase", void 0);
var D = _dependency2._decorator.ccclass;
_publish("default", (A = D("AvatarViewBase"), b = _dependency5.inject("bbr", _dependency2.Node), E = _dependency5.inject("content/closeBtn", _dependency2.Node), T = _dependency5.inject("content/ScrollView/view/content/ToggleGroup", _dependency2.Node), A((m = _dependency.applyDecoratedDescriptor((_ = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", m, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "closeBtn", C, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "toggleGroup", y, _dependency.assertThisInitialized(e)), e.checkId = null, e.avatarMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var i = e.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this), this.createAvatar();
  }, i.start = function () {
    this.addEventTouch();
  }, i.createAvatar = function () {
    var t = this,
      e = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], "prefabs/component/AvatarToggleItem").data;
    _dependency8.default.getData().avatars.forEach(function (a) {
      var n = _dependency2.instantiate(e);
      n.setParent(t.toggleGroup);
      var o = n.addComponent(_dependency6.AvatarToggleItem);
      o.init(a), t.avatarMap.set("" + a, o);
    });
  }, i.addEventTouch = function () {
    var t = this;
    this.bbr.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose();
    }), this.closeBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose();
    });
  }, i.onClose = function () {
    this.enableItems(!1), _dependency8.default.getData().player.avatar === this.checkId ? this.close() : this.sendUpdateAvatar(), dispatch(_dependency7.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
  }, i.sendUpdateAvatar = function () {
    _dependency8.default.getData().player.avatar !== this.checkId && dispatch(_dependency7.SlotFrameworkEvent.SEND_UPDATE_AVATAR_REQUEST, {
      avatarId: this.checkId
    });
  }, i.setCheckHighlight = function (t) {
    this.avatarMap.get(t).node.getComponent(_dependency2.Toggle).isChecked = !0;
  }, i.enableItems = function (t) {
    this.avatarMap.forEach(function (e, a) {
      e.getComponent(_dependency2.Toggle).interactable = t;
    });
  }, i.init = function () {
    this.checkId = _dependency8.default.getData().player.avatar, this.setCheckHighlight(this.checkId), this.enableItems(!0);
  }, i.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency7.SlotFrameworkEvent.UPDATE_CHECK_AVATAR_ID, function (t) {
      var a = t.data;
      e.checkId = "" + a;
    }), this.on(_dependency7.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE, function () {
      e.close();
    });
  }, e;
}(_dependency4.default)).prototype, "bbr", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(_.prototype, "closeBtn", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = _dependency.applyDecoratedDescriptor(_.prototype, "toggleGroup", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _)) || I));
_dependency2.cclegacy._RF.pop();

// Original portrait endpoint unavailable: retain safe native empty selector.
if(!__localEmptyAvatarEditor)__installLocalEmptyAvatarMenu(_export,_dependency8.default);
