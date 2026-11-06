// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-type2";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "./g1009-GameConfigModel";
import * as _dependency9 from "./g1009-GameData";
import * as _dependency0 from "./g1009-GameEvent";
var _export;
export { _export as BuyFeatureButton };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureButton":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, a, i, o, u, r, s, c, l, d, f, h, p, y, E, B, v, F, T;
var S, _, C, b, A;
_dependency2.cclegacy._RF.push({}, "ecd3eit8QpCgYtF+zRz/IAy", "BuyFeatureButton", void 0);
var m = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BuyFeatureButton", (S = m("BuyFeatureButton"), _ = _dependency4.inject("stake", _dependency2.Label), S((A = _dependency.applyDecoratedDescriptor((b = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), u = 0; u < n; u++) o[u] = arguments[u];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "stake", A, _dependency.assertThisInitialized(e)), e.button = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var u = e.prototype;
  return u.onLoad = function () {
    t.prototype.onLoad.call(this), this.init();
  }, u.start = function () {}, u.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, u.init = function () {
    this.button = this.node.getComponent(_dependency2.Button), this.node.on(_dependency2.NodeEventType.TOUCH_START, this.buyFeatureBtnHandler, this), this.node.on(_dependency2.NodeEventType.TOUCH_MOVE, this.buyFeatureBtnHandler, this), this.node.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.buyFeatureBtnHandler, this), this.node.on(_dependency2.NodeEventType.TOUCH_END, this.buyFeatureBtnHandler, this);
  }, u.setBuyFeatureBtnActive = function (t) {
    this.node.active = t;
  }, u.buyFeatureBtnHandler = function (t) {
    if (this.button.interactable) {
      var e = t.type == _dependency2.NodeEventType.TOUCH_START ? _dependency2.v3(.95, .95, .95) : _dependency2.v3(1, 1, 1);
      this.node.children.forEach(function (t) {
        t.setScale(e);
      }), t.type == _dependency2.NodeEventType.TOUCH_END && (dispatch(_dependency5.SlotFrameworkEvent.VIEW_CLOSE_MENU), dispatch(_dependency0.GameEvent.OPEN_FEATURE_POPUP), dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency8.EBTM.OPEN_FEATURE
        }
      }));
    }
  }, u.updateBuyFeatureStake = function (t) {
    var e = t * this.data.getData().definition.buyFeature[0].featureRate;
    this.stake.string = _dependency7.CmmSlotUtils.formatNumber(e);
  }, u.updateBuyFeatureBtnStatus = function (t) {
    var e = _dependency6.ESpinStatus.SPINING === t,
      n = new _dependency2.Color(255, 255, 255, 255),
      a = new _dependency2.Color(130, 130, 130, 255);
    this.button.interactable = !e, this.stake.color = e ? a : n;
  }, u.reset = function () {}, u.setData = function (t) {}, u.show = function () {
    this.node.active = !0;
  }, u.hide = function () {
    this.node.active = !1;
  }, u.addEvents = function () {
    var t = this;
    this.on(_dependency0.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setBuyFeatureBtnActive(e.data);
    }), this.on(_dependency5.SlotFrameworkEvent.UPDATE_STAKE, function (e) {
      t.updateBuyFeatureStake(e.data);
    }), this.on(_dependency5.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      t.updateBuyFeatureBtnStatus(e.data);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "stake", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = b)) || C));
_dependency2.cclegacy._RF.pop();
