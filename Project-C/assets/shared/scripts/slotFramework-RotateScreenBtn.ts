// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./slotFramework-SlotFrameworkData";
import * as _dependency5 from "./main-UrlUtils";
import * as _dependency6 from "./main-CmmUtils";
import * as _dependency7 from "./main-Bundles";
import * as _dependency8 from "./main-Config";
import * as _dependency9 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "./slotFramework-type2";
var _export;
export { _export as RotateScreenBtn };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "RotateScreenBtn":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, i, r, a, c, s, u, l, f, d, p;
var h;
_dependency2.cclegacy._RF.push({}, "4d00f2b5H9GZ5Umsjg1lfF7", "RotateScreenBtn", void 0);
var v = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("RotateScreenBtn", v("RotateScreenBtn")(h = function (t) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(o, t);
  var i = o.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    this.init();
  }, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.init = function () {
    this.setTouchEvent();
  }, i.setPostion = function () {}, i.setWidget = function () {}, i.rotateScreenHandler = function () {
    var t = _dependency5.default.getViewModeParam(),
      n = new URLSearchParams(window.location.search);
    "portrait" == t ? n.set("view_mode", "landscape") : n.set("view_mode", "portrait");
    var e = _dependency5.default.getParam("gn") + "_view_mode";
    localStorage.setItem(e, n.get("view_mode"));
    var o = window.location.pathname + "?" + n.toString();
    window.location.href = o;
  }, i.setTouchEvent = function () {
    var t = this;
    _dependency6.CmmUtils.addBtnClickEvent(this.node, function () {
      t.showConfirmAlert();
    });
  }, i.showConfirmAlert = function () {
    var t = this,
      n = {
        text: App.getLanguage("rotateSceneMsg", [], _dependency7.EBundles[_dependency7.EBundles.slotFramework]),
        confirmCb: function (n) {
          t.rotateScreenHandler();
        },
        cancelCb: function (t) {},
        bbrCb: function (t) {},
        tag: _dependency8.ViewZOrder.Alert
      };
    App.gameAlert.show(n, _dependency8.ViewZOrder.TopErrorAlert);
  }, i.updateSpinStatus = function (t) {
    this.node.getComponent(_dependency2.Button).interactable = t === _dependency0.ESpinStatus.IDLE;
  }, i.reset = function () {}, i.setData = function (t) {}, i.show = function () {
    this.node.active = !0;
  }, i.hide = function () {
    this.node.active = !1;
  }, i.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      n.updateSpinStatus(t.data);
    });
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), o;
}(_dependency3.default)) || h);
_dependency2.cclegacy._RF.pop();
