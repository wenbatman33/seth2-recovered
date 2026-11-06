// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-type2";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "./g1008-GameConfigModel";
import * as _dependency9 from "./g1008-GameData";
import * as _dependency0 from "./g1008-GameEvent";
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
var e, n, i, o, a, r, u, s, c, l, f, h, d, p, y, B, E, S, F, v, b;
var T, _, m, C, A, U, g;
_dependency2.cclegacy._RF.push({}, "847d3DCFMxJqqQeeEwAUjN5", "BuyFeatureButton", void 0);
var D = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BuyFeatureButton", (T = D("BuyFeatureButton"), _ = _dependency4.inject("stake", _dependency2.Label), m = _dependency4.inject("font", _dependency2.Sprite), T((U = _dependency.applyDecoratedDescriptor((A = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "stake", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSprite", g, _dependency.assertThisInitialized(e)), e.button = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.init();
  }, r.start = function () {}, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    this.button = this.node.getComponent(_dependency2.Button), this.node.on(_dependency2.NodeEventType.TOUCH_START, this.buyFeatureBtnHandler, this), this.node.on(_dependency2.NodeEventType.TOUCH_MOVE, this.buyFeatureBtnHandler, this), this.node.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.buyFeatureBtnHandler, this), this.node.on(_dependency2.NodeEventType.TOUCH_END, this.buyFeatureBtnHandler, this), this.fontSprite.spriteFrame = this.data.getLocaleSpriteFrame("mg_btn_font");
  }, r.setBuyFeatureBtnActive = function (t) {
    this.node.active = t;
  }, r.buyFeatureBtnHandler = function (t) {
    if (this.button.interactable) {
      var e = t.type == _dependency2.NodeEventType.TOUCH_START ? _dependency2.v3(.95, .95, .95) : _dependency2.v3(1, 1, 1);
      this.node.children.forEach(function (t) {
        t.setScale(e);
      }), t.type == _dependency2.NodeEventType.TOUCH_END && (dispatch(_dependency0.GameEvent.OPEN_FEATURE_POPUP), dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency8.EBTM.OPEN_FEATURE
        }
      }));
    }
  }, r.updateBuyFeatureStake = function (t) {
    var e = t * this.data.getData().definition.buyFeature[0].featureRate;
    this.stake.string = _dependency7.CmmSlotUtils.formatNumber(e);
  }, r.updateBuyFeatureBtnStatus = function (t) {
    var e = _dependency6.ESpinStatus.SPINING === t,
      n = new _dependency2.Color(255, 255, 255, 255),
      i = new _dependency2.Color(130, 130, 130, 255);
    this.button.interactable = !e, this.fontSprite.color = e ? i : n, this.stake.color = e ? i : n;
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
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
}), g = _dependency.applyDecoratedDescriptor(A.prototype, "fontSprite", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = A)) || C));
_dependency2.cclegacy._RF.pop();
