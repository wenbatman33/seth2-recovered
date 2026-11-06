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
var e, n, a, o, i, r, s, l, c, u, g, f, p, d, h, b, m, S, T, v;
var k, I, B, D, w, C, y, E, L, U, M;
_dependency2.cclegacy._RF.push({}, "5bb0am/t41DCqjlThEO9YOg", "BetViewLandScape", void 0);
var _ = _dependency2._decorator.ccclass;
_publish("default", (k = _("BetViewLandScape"), I = _dependency6.inject("bbr", _dependency2.Node), B = _dependency6.inject("content/ScrollView/view/betItemContent", _dependency2.Node), D = _dependency6.inject("content/confirmBtn", _dependency2.Node), w = _dependency6.inject("content/closeBtn", _dependency2.Node), k((E = _dependency.applyDecoratedDescriptor((y = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betItemContent", L, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "confirmBtn", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "closeBtn", M, _dependency.assertThisInitialized(e)), e.betToggleItemMap = new Map(), e.isUseServerBetList = !1, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/view/BetViewLandScape";
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
    if (this.setEventTouch(), this.isUseServerBetList = this.args, this.isUseServerBetList && _dependency9.default.getData().totalStakeList && _dependency9.default.getData().totalStakeList.length > 0) for (var e = 0; e < _dependency9.default.getData().totalStakeList.length; e++) {
      var n = _dependency9.default.getData().totalStakeList[e];
      this.createBetToggleItem(n);
    } else _dependency9.default.getData().totalStakeMap.forEach(function (e, n) {
      t.createBetToggleItem(e);
    }), this.initMarkToggle();
  }, r.setEventTouch = function () {
    var t = this;
    this.bbr.on(_dependency2.NodeEventType.TOUCH_END, _dependency4.CmmUtils.debounce(function () {
      t.close();
    })), this.closeBtn.on(_dependency2.NodeEventType.TOUCH_END, _dependency4.CmmUtils.debounce(function () {
      t.close();
    })), this.confirmBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var e,
        n = null == (e = t.betItemContent.getComponent(_dependency2.ToggleContainer).toggleItems.find(function (t) {
          return !0 === t.isChecked;
        })) ? void 0 : e.node;
      if (n) {
        var a = n.getComponent(_dependency7.BetToggleItem).stakeVO;
        _dependency9.default.updateStake(_dependency9.default.totalStakeMap.get(a.index)), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_STAKE_SETTING, {
          data: a.totalStake
        }), _dependency9.default.stakeMapIndex = a.index, t.sendSetting(), t.close();
      }
    });
  }, r.createBetToggleItem = function (t) {
    this.data.getData().filePaths.betToggleItemPrefab;
    var e = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], this.data.getData().filePaths.betToggleItemPrefab).data,
      n = _dependency2.instantiate(e),
      a = n.addComponent(_dependency7.BetToggleItem);
    n.setParent(this.betItemContent), this.betToggleItemMap.set(t.totalStake, a), a.init(t);
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
}(_dependency5.default)).prototype, "bbr", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(y.prototype, "betItemContent", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(y.prototype, "confirmBtn", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(y.prototype, "closeBtn", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = y)) || C));
_dependency2.cclegacy._RF.pop();
