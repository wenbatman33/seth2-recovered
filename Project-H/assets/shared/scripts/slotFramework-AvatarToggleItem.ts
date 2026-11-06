// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./slotFramework-UrlUtils2";
var _export;
export { _export as AvatarToggleItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "AvatarToggleItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o, a, i, r, c, s, l, u, p, v, h, d, f, g, m, C;
var y, A, T, I, E, k, _, w;
_dependency2.cclegacy._RF.push({}, "c29a6CKHf5KpJU/v72+XUi8", "AvatarToggleItem", void 0);
var D = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("AvatarToggleItem", (y = D("AvatarToggleItem"), A = _dependency5.inject("content", _dependency2.Node), T = _dependency5.inject("content/mask/avatar", _dependency2.Node), y(((w = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "content", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "avatar", _, _dependency.assertThisInitialized(e)), e.id = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var i = e.prototype;
  return i.onLoad = function () {}, i.start = function () {}, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.addEventTouch = function () {
    var t = this,
      e = this.node.getComponent(_dependency2.Toggle),
      n = new _dependency2.EventHandler();
    n.target = this.node, n.component = "AvatarToggleItem", n.handler = _dependency2.Toggle.EventType.TOGGLE, n.emit = function () {
      t.updateOpacity(), e.isChecked && (dispatch(_dependency6.SlotFrameworkEvent.UPDATE_CHECK_AVATAR_ID, {
        data: t.id
      }), dispatch(_dependency6.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }, e.checkEvents.push(n);
  }, i.updateOpacity = function () {
    var t = this.node.getComponent(_dependency2.Toggle).isChecked,
      n = e.OPACITY_CONFIG,
      o = n.isCheck,
      a = n.noCheck;
    this.content.getComponent(_dependency2.UIOpacity).opacity = t ? o : a;
  }, i.setAvatar = function (t) {
    var e = this,
      n = _dependency7.default.GetAvatarUrl("" + t),
      o = this.avatar.getComponent(_dependency2.Sprite),
      a = new _dependency2.Size(this.avatar.getComponent(_dependency2.UITransform).contentSize);
    o.loadRemoteImage({
      url: n,
      view: App.entryManager.getEntry(_dependency3.EBundles[_dependency3.EBundles.slotFramework]).gameView,
      complete: function () {
        e.avatar.getComponent(_dependency2.UITransform).setContentSize(a);
      }
    });
  }, i.init = function (t) {
    this.id = t, this.addEventTouch(), this.setAvatar(t);
  }, e;
}(_dependency4.default)).OPACITY_CONFIG = {
  isCheck: 255,
  noCheck: 100
}, k = _dependency.applyDecoratedDescriptor((E = w).prototype, "content", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(E.prototype, "avatar", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = E)) || I));
_dependency2.cclegacy._RF.pop();
