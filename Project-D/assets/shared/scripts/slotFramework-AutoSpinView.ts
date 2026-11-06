// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-UIView";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./main-WrapperData";
import * as _dependency7 from "./slotFramework-ImageButton";
import * as _dependency8 from "./slotFramework-SlotFrameworkData";
import * as _dependency9 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "./slotFramework-PlatformModel";
import * as _dependency1 from "./slotFramework-LoadUtils";
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
var e, n, o, i, a, r, s, u, c, l, p, f, b, d, h, g, v, m, _, w, y;
var C, S, D, A, B, E, L;
_dependency2.cclegacy._RF.push({}, "8882e4o6XVAGLvxtZW6DE2O", "AutoSpinView", void 0);
var k = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (C = k("AutoSpinView"), S = _dependency5.inject("bbr", _dependency2.Node), D = _dependency5.inject("content/buttons", _dependency2.Node), C((E = _dependency.applyDecoratedDescriptor((B = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "buttons", L, _dependency.assertThisInitialized(e)), e.buttonMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.setEventTouch();
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {}, e.getPrefabUrl = function () {
    return "prefabs/view/AutoSpinView";
  }, r.init = function () {
    var t = this;
    _dependency0.default.getData().player.settings.autoPlay.numberOfPlays.forEach(function (e, n) {
      t.createCountBtn(e, n);
    });
  }, r.createCountBtn = function (t, e) {
    var n = this,
      o = this.data.getData().filePaths.commonSpDir,
      i = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], "prefabs/ui/button/ImageButton").data,
      a = _dependency2.instantiate(i),
      r = a.addComponent(_dependency7.ImageButton),
      s = App.dataCenter.get(_dependency6.default).colorConfig,
      p = s.btn_bg_normal,
      f = s.btn_bg_hover,
      d = s.btn_bg_pressed,
      h = s.btn_bg_disable,
      m = s.btn_label_normal,
      w = {
        bgSprite: _dependency1.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], o, "bg_s"),
        normal: p,
        pressed: d,
        hover: f,
        disabled: h,
        contentSize: {
          width: 88,
          height: 40
        }
      };
    if (a.name = "" + t, a.setParent(this.buttons), r.init(), r.setButton(_dependency2.Button.Transition.COLOR, w), this.buttonMap.set(e, r), r.addClickEvent(function () {
      var t = n.data.checkBalanceAndAlert();
      n.close(), t && (dispatch(_dependency9.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, {
        data: e
      }), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), -1 !== t) r.setLabel("" + t, {
      active: !0,
      fontSize: 20,
      color: m,
      isBold: !0
    });else {
      var C = _dependency1.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], o, "unlimited");
      r.setFont(C, {
        position: _dependency2.v3(0, 0, 0)
      });
    }
  }, r.onClose = function () {
    this.close();
  }, r.setEventTouch = function () {
    var t = this;
    this.bbr.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "bbr", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(B.prototype, "buttons", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = B)) || A));
_dependency2.cclegacy._RF.pop();
