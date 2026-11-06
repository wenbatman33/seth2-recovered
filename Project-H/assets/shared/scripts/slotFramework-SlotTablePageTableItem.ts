// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmmUtils";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-SlotFrameworkData";
import * as _dependency7 from "./slotFramework-SlotFrameworkEvent";
var _export;
export { _export as SlotTablePageTableItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotTablePageTableItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, c, s, l, r, u, d, p, f, h;
var T, g, L, v, E;
_dependency2.cclegacy._RF.push({}, "7711ajO4ydIwLFSlv6Kdp22", "SlotTablePageTableItem", void 0);
var S,
  _ = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.NORMAL = 1] = "NORMAL", t[t.LOADING = 2] = "LOADING";
}(S || (S = {}));
_publish("SlotTablePageTableItem", (T = _("SlotTablePageTableItem"), g = _dependency5.inject("content/title", _dependency2.Label), T((E = _dependency.applyDecoratedDescriptor((v = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "title", E, _dependency.assertThisInitialized(e)), e.pageIndex = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, c.start = function () {
    this.init();
  }, c.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, c.init = function () {
    this.setEventTouch();
  }, c.setEventTouch = function () {
    var t = this;
    _dependency3.CmmUtils.addBtnClickEvent(this.node, _dependency3.CmmUtils.throttle(function () {
      t.node.getComponent(_dependency2.Toggle).isChecked || (dispatch(_dependency7.SlotFrameworkEvent.SLOT_TABLE_START_LOADING), dispatch(_dependency7.SlotFrameworkEvent.SLOT_TABLES_RECYCLE_ALL), t.sendGetSlotTablePageData(t.pageIndex), dispatch(_dependency7.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }));
  }, c.setTitle = function (t) {
    this.title.string = t;
  }, c.sendGetSlotTablePageData = function (t) {
    dispatch(_dependency7.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, {
      page: t
    });
  }, c.reset = function () {
    this.node.active = !0;
  }, c.select = function () {
    this.node.getComponent(_dependency2.Toggle).isChecked = !0;
  }, c.setData = function (t) {
    var e = t.tabTitle,
      n = t.pageIndex;
    this.pageIndex = n, this.setTitle(e);
  }, c.show = function () {
    this.node.active = !0;
  }, c.hide = function () {
    this.node.active = !1;
  }, c.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "title", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = v)) || L));
_dependency2.cclegacy._RF.pop();
