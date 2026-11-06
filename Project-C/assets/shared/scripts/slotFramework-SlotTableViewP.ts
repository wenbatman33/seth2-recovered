// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-SlotTableViewBase";
import * as _dependency4 from "./main-Decorators";
import * as _dependency5 from "./main-CmmUtils";
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
var e, n, o, i, r, a, u, l, c, f, s, p, m, b;
var C, w, h, g, T, y, d, v, R, L, G, z, N, O, S, I, M, k, B, P, D, V, _;
_dependency2.cclegacy._RF.push({}, "3a134KRnA1LmL06RvGJexZB", "SlotTableViewP", void 0);
var A = _dependency2._decorator.ccclass;
_publish("default", (C = A("SlotTableViewP"), w = _dependency4.inject("content/infoContent/content/rowContent/featureGameRow", _dependency2.Node), h = _dependency4.inject("content/infoContent/content/rowContent/featureGameRow/content/notOpenContent/number", _dependency2.Label), g = _dependency4.inject("content/infoContent/content/rowContent/featureGameRow/content/previousOneContent/number", _dependency2.Label), T = _dependency4.inject("content/infoContent/content/rowContent/featureGameRow/content/previousTwoContent/number", _dependency2.Label), y = _dependency4.inject("content/infoContent/content/rowContent", _dependency2.Node), d = _dependency4.inject("content/infoContent/content/rowContent/featureGameRow/titleContent", _dependency2.Node), v = _dependency4.inject("content/infoContent/content/rowContent/featureGameRow/titleContent/bg", _dependency2.Node), R = _dependency4.inject("content/infoContent/content/rowContent/featureGameRow/content", _dependency2.Node), L = _dependency4.inject("content/infoContent/content/infoRow/buttons/remainTimeTip/labelMask", _dependency2.Node), G = _dependency4.inject("content/infoContent/content/infoRow/buttons/remainTimeTip/labelMask/Label", _dependency2.Node), C((O = _dependency.applyDecoratedDescriptor((N = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "featureGameRow", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "notOpenContentNumber", S, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "previousOneNumber", I, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "previousTwoNumber", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rowContent", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "titleContent", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "titleContentBg", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "featureGameRowContent", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remainTimeTipLabelMask", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remainTimeTipLabel", _, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/view/SlotTableViewP";
  };
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.notOpenContentNumber = _dependency2.find("content/infoContent/content/rowContent/featureGameRow/content/notOpenContent/number", this.node).getComponent(_dependency2.Label), this.previousOneNumber = _dependency2.find("content/infoContent/content/rowContent/featureGameRow/content/previousOneContent/number", this.node).getComponent(_dependency2.Label), this.previousTwoNumber = _dependency2.find("content/infoContent/content/rowContent/featureGameRow/content/previousTwoContent/number", this.node).getComponent(_dependency2.Label), this.setLangStyle();
  }, r.start = function () {
    t.prototype.start.call(this);
  }, r.update = function () {
    t.prototype.update.call(this);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    t.prototype.init.call(this), this.initRemainTimeLabelMarquee();
  }, r.setInfoHight = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = t.infoContentContent.getComponent(_dependency2.UITransform).height;
      t.infoContent.getComponent(_dependency2.UITransform).height = e + 40, t.infoContentBg.getComponentsInChildren(_dependency2.Widget).forEach(function (t) {
        return t.updateAlignment();
      });
    });
  }, r.setTableInfo = function (e) {
    t.prototype.setTableInfo.call(this, e), this.setFeatureContentHight();
  }, r.setLangStyle = function () {
    var t = App.storage.getItem("using_language"),
      e = 16;
    "en" !== t && "vn" !== t || (e = 15), this.rowContent.getComponentsInChildren(_dependency2.Label).forEach(function (t) {
      t.fontSize = e;
    }), this.infoRowTable.getComponentsInChildren(_dependency2.Label).forEach(function (t) {
      t.fontSize = e;
    });
  }, r.setFeatureContentHight = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = t.featureGameRowContent.getComponent(_dependency2.UITransform).height;
      t.titleContent.getComponent(_dependency2.UITransform).height = e, t.titleContentBg.getComponent(_dependency2.UITransform).height = e;
    });
  }, r.initRemainTimeLabelMarquee = function () {
    var t = {
      maskNode: this.remainTimeTipLabelMask,
      labelNode: this.remainTimeTipLabel,
      delayTime: 2
    };
    _dependency5.CmmUtils.labelMarquee(t);
  }, e;
}(_dependency3.default)).prototype, "featureGameRow", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(N.prototype, "notOpenContentNumber", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(N.prototype, "previousOneNumber", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(N.prototype, "previousTwoNumber", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(N.prototype, "rowContent", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(N.prototype, "titleContent", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(N.prototype, "titleContentBg", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(N.prototype, "featureGameRowContent", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(N.prototype, "remainTimeTipLabelMask", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(N.prototype, "remainTimeTipLabel", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = N)) || z));
_dependency2.cclegacy._RF.pop();
