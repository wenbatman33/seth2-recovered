// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-UIView";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-AlignCenter";
import * as _dependency7 from "./slotFramework-SlotFrameworkEvent";
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
var t, n, i, r, o, a, l, s, u, c, f, p, d, g, h, b, m;
var w, v, y, V, _, C, k, A, R, x, B, E, I;
_dependency2.cclegacy._RF.push({}, "dcab14wtl1LwJ1QGDfg0thr", "GameRulesView", void 0);
var L = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (w = L("GameRulesView"), v = _dependency5.inject("closeBtn", _dependency2.Node), y = _dependency5.inject("scrollView/view/content", _dependency2.Node), V = _dependency5.inject("background", _dependency2.Node), _ = _dependency5.inject("scrollView", _dependency2.Node), C = _dependency5.inject("pageView", _dependency2.PageView), w((R = _dependency.applyDecoratedDescriptor((A = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "closeBtn", R, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "content", x, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "background", B, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "scrollView", E, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "pageView", I, _dependency.assertThisInitialized(t)), t.flag = !1, t;
  }
  _dependency.inheritsLoose(t, e);
  var o = t.prototype;
  return o.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {}, t.getPrefabUrl = function () {
    return "prefabs/view/GameRulesView";
  }, o.init = function () {
    this.setRuleAssets(), this.setEventTouch(), this.flag && (this.scrollView.addComponent(_dependency6.default), this.pageView.node.active = !1);
  }, o.setEventTouch = function () {
    var e = this;
    this.closeBtn.on(_dependency2.NodeEventType.TOUCH_START, function () {
      dispatch(_dependency7.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM), e.onClose();
    });
  }, o.setRuleAssets = function () {
    var e = this,
      t = App.cache.get(this.args.bundle, this.args.background).data.find(function (e) {
        return "mg_bg" === e.name;
      }),
      n = App.cache.get(this.args.bundle, this.args.rules).data.filter(function (e) {
        return e.name.includes("rule");
      });
    this.background.getComponent(_dependency2.Sprite).spriteFrame = t, n.sort(function (e, t) {
      return Number(e.name.split("_")[1]) - Number(t.name.split("_")[1]);
    }), this.args.excludeIndexes && this.args.excludeIndexes.length > 0 && (n = n.filter(function (t) {
      var n = Number(t.name.split("_")[1]);
      return !(e.args.excludeIndexes.indexOf(n) > -1);
    }));
    var i = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], "prefabs/component/ruleItem").data;
    n.forEach(function (t) {
      var n = _dependency2.instantiate(i);
      _dependency2.find("rule", n).getComponent(_dependency2.Sprite).spriteFrame = t, e.flag ? e.content.addChild(n) : e.pageView.addPage(n);
    });
  }, o.onClose = function () {
    this.close();
  }, t;
}(_dependency4.default)).prototype, "closeBtn", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(A.prototype, "content", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(A.prototype, "background", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(A.prototype, "scrollView", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(A.prototype, "pageView", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = A)) || k));
_dependency2.cclegacy._RF.pop();
