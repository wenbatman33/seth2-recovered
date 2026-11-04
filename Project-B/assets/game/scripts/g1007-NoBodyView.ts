// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/NoBodyView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-Bundles";
import * as __dependency_3 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_4 from "../../shared/scripts/main-UIView";
import * as __dependency_5 from "../../shared/scripts/framework-AutoPlayModel";
import * as __dependency_6 from "../../shared/scripts/framework-SlotFrameworkData";
import * as __dependency_7 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_8 from "../../shared/scripts/framework-type2";
import * as __dependency_9 from "../../shared/scripts/framework-LoadUtils";
import * as __dependency_10 from "./g1007-GameData";
import * as __dependency_11 from "./g1007-StaticData";
import * as __dependency_12 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as NoBodyView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "NoBodyView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, i, a, r, s, c, u, l, p, f, h, d, g, m, y, C, S;
var v;
__dependency_1.cclegacy._RF.push({}, "d7f4a+cT7ZNXKzhhRjHt0zD", "NoBodyView", void 0);
var w = __dependency_1._decorator.ccclass,
  E = (__dependency_1._decorator.property, "空轉"),
  D = "4X4",
  O = "5X5_02",
  B = "跳瞇進FG",
  _ = "敲石板",
  I = "big",
  L = "super",
  N = "mega",
  T = "ultra",
  b = "legendary",
  F = "FG連莊",
  P = "瞇牌空轉",
  k = "消除後瞇牌",
  A = "空轉寶箱",
  U = "大獎預告",
  V = "50%成功",
  G = "50%失敗",
  R = "贏分消除",
  M = "贏分倍數消除";
__publish("NoBodyView", w("Hades_NoBodyView")(v = function (t) {
  function o() {
    for (var n, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this).isOpting = !1, n.optionBtnList = [], n.optionMap = null, n;
  }
  __dependency_0.inheritsLoose(o, t);
  var i = o.prototype;
  return i.start = function () {
    this.setOptionVO();
  }, i.addEvents = function () {
    var t = this;
    this.on(__dependency_12.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function (n) {
      __dependency_5.default.active || t.clearStyle();
    }), this.on(__dependency_7.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (n) {
      n.data === __dependency_8.ESpinStatus.SPINING && (t.isOpting = !0);
    }), this.onI(__dependency_1.Input.EventType.KEY_UP, function (t) {
      t.keyCode;
    });
  }, i.createOptionFunction = function (t) {
    return function () {
      dispatch(__dependency_12.GameEvent.START_SPIN, {
        data: {
          spinId: null,
          spinData: t
        }
      });
    };
  }, i.setOptionVO = function () {
    var t = this,
      n = [];
    [E, R, M, D, O, B, _, I, L, N, T, b, P, k, A, F, U, V, G].forEach(function (e) {
      return n.push(t.optionMap.get(e));
    }), this.createOptionBtn(n);
  }, i.createOptionBtn = function (t) {}, i.setTouchEnable = function (t) {
    var n = this.slotData.getData().filePaths.commonSpDir,
      e = t.getComponentInChildren(__dependency_1.Label),
      o = t.getChildByName("Label").getComponent(__dependency_1.LabelOutline);
    e.color = new __dependency_1.Color("#ffffff"), o.width = 3, o.color = new __dependency_1.Color("#3e7a5c"), t.getComponent(__dependency_1.Sprite).spriteFrame = __dependency_9.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.slotFramework], n, "bg_s"), t.getComponent(__dependency_1.UITransform).width = 120, t.getComponent(__dependency_1.UITransform).height = 32, t.getComponent(__dependency_1.Sprite).color = new __dependency_1.Color("#7eab8d");
  }, i.setTouchDisable = function (t) {
    var n = t.getComponentInChildren(__dependency_1.Label),
      e = t.getChildByName("Label").getComponent(__dependency_1.LabelOutline);
    n.color = new __dependency_1.Color("#aaaaaa"), e.width = 3, e.color = new __dependency_1.Color("#000000"), t.getComponent(__dependency_1.Sprite).spriteFrame = null;
  }, i.clearStyle = function () {
    var t = this;
    this.isOpting = !1, this.optionBtnList.forEach(function (n) {
      t.setTouchDisable(n);
    });
  }, i.showOption = function () {}, __dependency_0.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_10.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_6.default);
    }
  }]), o;
}(__dependency_4.default)) || v);
__dependency_1.cclegacy._RF.pop();
