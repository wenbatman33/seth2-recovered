// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-Decorators";
import * as _dependency5 from "./main-WrapperData";
var _export;
export { _export as BetToggleItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BetToggleItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o, i, r, a, s, c, l, u, h, C, p, d, f, g;
var b, v, k, m, T, y, L;
_dependency2.cclegacy._RF.push({}, "795ectCR+xAdoFwPWTEG66t", "BetToggleItem", void 0);
var E = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BetToggleItem", (b = E("BetToggleItem"), v = _dependency4.inject("text", _dependency2.Label), k = _dependency4.inject("Checkmark", _dependency2.Node), b((y = _dependency.applyDecoratedDescriptor((T = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "text", y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "checkmark", L, _dependency.assertThisInitialized(e)), e.stakeVO = void 0, e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {}, a.start = function () {}, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, a.init = function (t) {
    this.stakeVO = t, this.setLabel(this.stakeVO.totalStake);
    var e = this.node.getComponent(_dependency2.Toggle).isChecked ? "#876A00" : "#C9C9CC";
    this.setLabelColor(e), this.addEventTouch();
  }, a.addEventTouch = function () {
    var t = this,
      e = this.node.getComponent(_dependency2.Toggle),
      n = new _dependency2.EventHandler();
    n.target = this.node, n.component = "BetToggleItem", n.handler = _dependency2.Toggle.EventType.TOGGLE, n.emit = function (n) {
      var o = e.isChecked ? "#876A00" : "#C9C9CC";
      t.setLabelColor(o);
    }, e.checkEvents.push(n), this.node.on(_dependency2.NodeEventType.TOUCH_END, function () {
      e.interactable && (e.isChecked || t.setLabelColor("#C9C9CC"));
    }, this), this.node.on(_dependency2.NodeEventType.MOUSE_LEAVE, function () {
      e.interactable && t.setLabelColor(e.isChecked ? "#876A00" : "#C9C9CC");
    }, this), this.node.on(_dependency2.NodeEventType.TOUCH_START, function () {
      e.interactable && t.setLabelColor("#876A00");
    }, this);
  }, a.setLabel = function (t) {
    this.text.string = "" + t;
  }, a.setLabelColor = function (t) {
    var e = this.text.getComponent(_dependency2.Label);
    e && (e.color = new _dependency2.Color(t));
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "text", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(T.prototype, "checkmark", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = T)) || m));
_dependency2.cclegacy._RF.pop();
