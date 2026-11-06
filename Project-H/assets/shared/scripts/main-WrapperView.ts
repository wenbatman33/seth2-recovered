// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Decorators";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./main-CmmUtils";
import * as _dependency6 from "./main-GameViewBase";
import * as _dependency7 from "./main-WrapperData";
import * as _dependency8 from "./main-WrapperLogic";
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
var n, e, i, o, s, r, a, c, l, u, p, f, h, b, d, m, v, g;
var y, B, C, T, w;
_dependency2.cclegacy._RF.push({}, "d0f3bzgoghKnopHyB5KfGCs", "WrapperView", void 0);
var E = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (y = _dependency3.inject("content/bbr", _dependency2.Node), E(((w = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, s = new Array(e), r = 0; r < e; r++) s[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "bbr", T, _dependency.assertThisInitialized(n)), n.title = null, n.btnContent = null, n.lobbyBtn = null, n.gamebtn = null, n.tween = null, n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.setNode(), this.setEventTouch();
  }, r.start = function () {
    var t = this;
    this.enableBBR(!0), this.init(), this.serviceInit(), this.coundown(function () {
      t.setBtnContentActive(!0);
    }), this.data.ENTER_SLOT_VIEW;
  }, r.onDestroy = function () {
    this.tween.stop();
  }, n.getPrefabUrl = function () {
    return "@WrapperView";
  }, r.init = function () {
    this.setBtnContentActive(!1);
  }, r.setNode = function () {
    this.title = _dependency2.find("content/title", this.node).getComponent(_dependency2.Label), this.btnContent = _dependency2.find("content/btnContent", this.node), this.lobbyBtn = _dependency2.find("lobbyBtn", this.btnContent), this.gamebtn = _dependency2.find("gameBtn", this.btnContent);
  }, r.setEventTouch = function () {
    var t = this;
    this.lobbyBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.enterBundle(_dependency4.EBundles[_dependency4.EBundles.slotFramework]);
    }), this.gamebtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.enterBundle(_dependency4.EBundles[_dependency4.EBundles.g1002]);
    });
  }, r.setTitle = function (t) {
    this.title.string = "\n        Wrapper\n        " + t + "s \n        go to GameView\n        Game 前往 Game\n        ";
  }, r.setBtnContentActive = function (t) {
    this.btnContent.active = t;
  }, r.coundown = function (t) {
    var n = this,
      e = {
        time: 2,
        totalTime: 2
      };
    this.tween = _dependency2.tween(e).bindNodeState(false).to(e.totalTime, {
      time: 0
    }, {
      onUpdate: function () {
        e.totalTime = e.time, n.setTitle(_dependency5.CmmUtils.roundDecimal(e.totalTime, 0));
      },
      onComplete: function (n) {
        t && t(n);
      }
    }).start();
  }, r.serviceInit = function () {}, r.enableBBR = function (t) {
    this.bbr.active = t;
  }, r.addEvents = function () {
    t.prototype.addEvents.call(this);
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), n;
}(_dependency6.default)).logicType = _dependency8.WrapperLogic, T = _dependency.applyDecoratedDescriptor((C = w).prototype, "bbr", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), B = C)) || B));
_dependency2.cclegacy._RF.pop();
