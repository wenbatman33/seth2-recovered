// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "./g1004-GameEvent";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency6 from "../../shared/scripts/main-Bundles";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1004-GameData";
import * as _dependency9 from "../../shared/scripts/main-UIView";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency1 from "./g1004-types";
import * as _dependency10 from "./g1004-StaticData";
import * as _dependency11 from "../../shared/scripts/slotFramework-type2";
var _export;
export { _export as NoBodyView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "NoBodyView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, i, a, s, r, c, l, u, p, f, d, h, g, m, E, S, y;
var C;
_dependency2.cclegacy._RF.push({}, "c2650hadzBPEr2quf2EVlCl", "NoBodyView", void 0);
var v = _dependency2._decorator.ccclass,
  w = (_dependency2._decorator.property, "天遇仙機"),
  _ = "WILD",
  B = "好好爽爽",
  D = "跑馬燈",
  L = "咪牌",
  T = "倍數球",
  O = "BIG",
  I = "SUPER",
  P = "MEGA",
  k = "ULTRA",
  N = "LEGENDARY";
_publish("NoBodyView", v("NoBodyView")(C = function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var n, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).isOpting = !1, n.optionBtnList = [], n.oldTick = _dependency2.director.tick, n._speed = 1, n.optionMap = null, n;
  }
  _dependency.inheritsLoose(o, t);
  var i = o.prototype;
  return i.start = function () {
    this.setOptionVO();
  }, i.addEvents = function () {
    var t = this;
    this.on(_dependency4.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function (n) {
      t.clearStyle();
    }), this.on(_dependency4.GameEvent.DROP_TREASURE_RESULT_RESP, function (n) {
      t.clearStyle();
    }), this.on(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (n) {
      n.data === _dependency11.ESpinStatus.SPINING && (t.isOpting = !0);
    }), this.onI(_dependency2.Input.EventType.KEY_UP, function (t) {
      t.keyCode;
    });
  }, i.createOptionFunction = function (t) {
    return function () {
      dispatch(_dependency4.GameEvent.START_SPIN, {
        data: {
          spinId: null,
          spinData: t
        }
      });
    };
  }, i.setOptionVO = function () {
    var t = this,
      n = [];
    [D, w, _, B, L, T, O, I, P, k, N].forEach(function (e) {
      return n.push(t.optionMap.get(e));
    }), this.createOptionBtn(n);
  }, i.createOptionBtn = function (t) {}, i.setTouchEnable = function (t, n) {
    t.getComponentInChildren(_dependency2.Label).color = new _dependency2.Color("#ffffff");
    var e = t.getChildByName("Label").getComponent(_dependency2.LabelOutline);
    e.width = 3, e.color = new _dependency2.Color("#3e7a5c");
    var o = this.slotData.getData().filePaths.commonSpDir;
    t.getComponent(_dependency2.Sprite).spriteFrame = _dependency7.LoadUtils.getDirSp(_dependency6.EBundles[_dependency6.EBundles.slotFramework], o, "bg_s"), t.getComponent(_dependency2.UITransform).width = 120, t.getComponent(_dependency2.UITransform).height = 32, t.getComponent(_dependency2.Sprite).color = new _dependency2.Color("#7eab8d");
  }, i.setTouchDisable = function (t, n) {
    t.getComponentInChildren(_dependency2.Label).color = new _dependency2.Color("#aaaaaa");
    var e = t.getChildByName("Label").getComponent(_dependency2.LabelOutline);
    e.width = 3, e.color = new _dependency2.Color("#000000"), t.getComponent(_dependency2.Sprite).spriteFrame = null;
  }, i.clearStyle = function () {
    var t = this;
    this.isOpting = !1, this.optionBtnList.forEach(function (n) {
      var e = t.node.getChildByName("list");
      t.setTouchDisable(n, e);
    });
  }, i.showOption = function () {}, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "speed",
    get: function () {
      return this._speed;
    },
    set: function (t) {
      var n = this;
      this._speed = t, _dependency2.director.tick = function (t) {
        n.oldTick.call(_dependency2.director, t * n._speed);
      };
    }
  }]), o;
}(_dependency9.default)) || C);
_dependency2.cclegacy._RF.pop();
