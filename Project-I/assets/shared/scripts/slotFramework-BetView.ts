// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-CmmUtils";
import * as _dependency5 from "./main-UIView";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./slotFramework-BetToggleItem";
import * as _dependency8 from "./slotFramework-SlotFrameworkData";
import * as _dependency9 from "./slotFramework-StakeModel";
import * as _dependency0 from "./slotFramework-SlotFrameworkEvent";
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
var e, n, o, a, i, r, l, c, s, u, f, g, p, d, m, h, b, T, I, k;
var v, w, y, C, S, B, D, E, M;
_dependency2.cclegacy._RF.push({}, "99835gmaTRAk4HlmKLoR5Wd", "BetView", void 0);
var P = _dependency2._decorator.ccclass;
_publish("default", (v = P("BetView"), w = _dependency6.inject("bbr", _dependency2.Node), y = _dependency6.inject("content/ScrollView/view/betItemContent", _dependency2.Node), C = _dependency6.inject("content/confirmBtn", _dependency2.Node), v((D = _dependency.applyDecoratedDescriptor((B = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betItemContent", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "confirmBtn", M, _dependency.assertThisInitialized(e)), e.betToggleItemMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/view/BetView";
  };
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.show = function (e) {
    t.prototype.show.call(this, e), this.init();
  }, r.init = function () {
    var t = this;
    this.setEventTouch(), _dependency9.default.getData().totalStakeMap.forEach(function (e, n) {
      t.createBetToggleItem(e);
    }), this.initMarkToggle();
  }, r.setEventTouch = function () {
    var t = this;
    this.bbr.on(_dependency2.NodeEventType.TOUCH_END, _dependency4.CmmUtils.debounce(function () {
      t.close();
    })), this.confirmBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var e = t.betItemContent.getComponent(_dependency2.ToggleContainer).toggleItems.find(function (t) {
        return !0 === t.isChecked;
      }).node.getComponent(_dependency7.BetToggleItem).stakeVO;
      _dependency9.default.updateStake(_dependency9.default.totalStakeMap.get(e.index)), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_STAKE, {
        data: e.totalStake
      }), _dependency9.default.stakeMapIndex = e.index, t.sendSetting(), t.close();
    });
  }, r.createBetToggleItem = function (t) {
    this.data.getData().filePaths.betToggleItemPrefab;
    var e = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], this.data.getData().filePaths.betToggleItemPrefab).data,
      n = _dependency2.instantiate(e),
      o = n.addComponent(_dependency7.BetToggleItem);
    n.setParent(this.betItemContent), this.betToggleItemMap.set(t.totalStake, o), o.init(t);
  }, r.initMarkToggle = function () {
    var t = _dependency9.default.totalStake;
    this.betToggleItemMap.get(t).getComponent(_dependency2.Toggle).isChecked = !0;
  }, r.sendSetting = function () {
    var t = _dependency9.default.getData(),
      e = {
        type: "game",
        data: {
          stakeIndex: t.stakeIndex,
          ratioIndex: t.ratioIndex
        }
      };
    dispatch(_dependency0.SlotFrameworkEvent.SEND_SETTING_REQUEST, e);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), e;
}(_dependency5.default)).prototype, "bbr", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(B.prototype, "betItemContent", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(B.prototype, "confirmBtn", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = B)) || S));
_dependency2.cclegacy._RF.pop();
