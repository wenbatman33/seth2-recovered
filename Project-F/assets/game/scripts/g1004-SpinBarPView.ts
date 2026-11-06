// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-SpinBarPController";
import * as _dependency4 from "./g1004-GameConfigModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency6 from "../../shared/scripts/slotFramework-SpineButton";
import * as _dependency7 from "./g1004-GameData";
import * as _dependency8 from "./g1004-GameEvent";
import * as _dependency9 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as SpinBarPView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpinBarPView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, r, s, l, c, u, p, d, h, f, m, b, S, g, _, y, B, v, C;
var w, L, T, E, D;
_dependency2.cclegacy._RF.push({}, "2f9f2RFd9pOXbpUtbZ7TUyX", "SpinBarPView", void 0);
var P = _dependency2._decorator.ccclass,
  A = _dependency2._decorator.property;
_publish("SpinBarPView", (w = P("SpinBarPView"), L = A(_dependency2.Node), w((D = _dependency.applyDecoratedDescriptor((E = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "ndBetBarBG", D, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.start = function () {
    var e = this;
    this.node.getChildByName("spinContent").active = !0, this.setMenuLabelStyle("#683a09", "#ffcd62");
    var n = _dependency4.default.getData().filePaths,
      i = n.common,
      o = n.font,
      s = n.localeSpriteFrame,
      l = n.spinSkeleton,
      c = App.cache.get(this.data.module, l).data[0],
      u = {
        normal: _dependency5.LoadUtils.getDirSp(this.data.module, i, "mg_btn_spin_icon_normal"),
        pressed: _dependency5.LoadUtils.getDirSp(this.data.module, i, "mg_btn_spin_icon_pressed"),
        hover: _dependency5.LoadUtils.getDirSp(this.data.module, i, "mg_btn_spin_icon_normal"),
        disabled: _dependency5.LoadUtils.getDirSp(this.data.module, i, "mg_btn_spin_icon_disabled")
      },
      d = {
        font: _dependency5.LoadUtils.getDirSp(this.data.module, o, "countup_06"),
        fontSize: 30,
        fontPos: new _dependency2.Vec3(0, 0, 0)
      };
    this.setSpinBtnData(c, null, u, d);
    var h = this.spineButton.getComponent(_dependency6.SpineButton);
    h.setAutoSpinCountToTop(), h.setArrowAtAutoSpinAlpha(!0), this.setRuleAssets({
      bundle: this.data.module,
      background: i,
      rules: s
    }), this.on(_dependency8.GameEvent.PARSER_INIT_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var n;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e.initRankListBtn(), n = Object.prototype.hasOwnProperty.call(_dependency9.default.getData(), "table"), Log.e("enableSlotTable::::", n), e.slotTableBtn.active = n, n && e.setTableNumber(_dependency9.default.getData().table.number);
          case 5:
          case "end":
            return t.stop();
        }
      }, t);
    }))), t.prototype.start.call(this);
  }, l.setMenuLabelStyle = function (t, e) {
    this.setLabelStyle(this.ruleBtn, t, e), this.setLabelStyle(this.recordBtn, t, e), this.setLabelStyle(this.settingBtn, t, e), this.setLabelStyle(this.exitBtn, t, e), this.setLabelStyle(this.rankingBtn, t, e);
  }, l.setLabelStyle = function (t, e, n) {
    var i = t.getComponentInChildren(_dependency2.Label);
    i.color = new _dependency2.Color(e);
    var o = t.getComponentInChildren(_dependency2.LabelOutline);
    t.on(_dependency2.NodeEventType.TOUCH_START, function () {
      i.color = new _dependency2.Color(n), o.width = 2;
    }), t.on(_dependency2.NodeEventType.TOUCH_END, function () {
      i.color = new _dependency2.Color(e), o.width = .6;
    }), t.on(_dependency2.NodeEventType.TOUCH_CANCEL, function () {
      i.color = new _dependency2.Color(e), o.width = .6;
    }), t.on(_dependency2.NodeEventType.MOUSE_ENTER, function () {
      i.color = new _dependency2.Color(n), o.width = 2;
    }), t.on(_dependency2.NodeEventType.MOUSE_LEAVE, function () {
      i.color = new _dependency2.Color(e), o.width = .6;
    });
  }, l.hide = function () {
    this.node.getChildByName("spinContent").active = !1;
  }, l.show = function () {
    _dependency0.default.isReplay || (this.node.getChildByName("spinContent").active = !0);
  }, l.removeEvents = function () {
    this.off(_dependency8.GameEvent.PARSER_INIT_COMPLETED);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "ndBetBarBG", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = E)) || T));
_dependency2.cclegacy._RF.pop();
