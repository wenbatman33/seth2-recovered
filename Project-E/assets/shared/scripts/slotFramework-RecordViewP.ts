// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./main-CmmUtils";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./slotFramework-HistoryViewP";
import * as _dependency8 from "./slotFramework-RecordViewBase";
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
var t, a, r, n, i, l, o, u, s, c, f, b, p, d;
var g, L, h, y, k, m, M, w, P, v, R;
_dependency2.cclegacy._RF.push({}, "eef8bggS3ZH+JRXpkkrMgUl", "RecordViewP", void 0);
var V = _dependency2._decorator.ccclass;
_publish("default", (g = V("RecordViewP"), L = _dependency6.inject("content/topBar/featureContent/fgLabelMask", _dependency2.Node), h = _dependency6.inject("content/topBar/featureContent/fgLabelMask/fgLabel", _dependency2.Node), y = _dependency6.inject("content/topBar/featureContent/featureLabelMask", _dependency2.Node), k = _dependency6.inject("content/topBar/featureContent/featureLabelMask/featureLabel", _dependency2.Node), g((w = _dependency.applyDecoratedDescriptor((M = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
    return t = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "fgLabelMask", w, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "fgLabel", P, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "featureLabelMask", v, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "featureLabel", R, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e);
  var l = t.prototype;
  return l.start = function () {
    e.prototype.start.call(this), this.initLabelMarquee();
  }, t.getPrefabUrl = function () {
    return "prefabs/view/RecordViewP";
  }, l.initLabelMarquee = function () {
    var e = {
      maskNode: this.fgLabelMask,
      labelNode: this.fgLabel,
      delayTime: 2
    };
    this.scheduleOnce(function () {
      _dependency5.CmmUtils.labelMarquee(e);
    });
    var t = {
      maskNode: this.featureLabelMask,
      labelNode: this.featureLabel,
      delayTime: 2
    };
    this.scheduleOnce(function () {
      _dependency5.CmmUtils.labelMarquee(t);
    });
  }, l.openHistoryView = function () {
    App.uiManager.open({
      type: _dependency7.default,
      bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
      zIndex: _dependency3.ViewZOrder.UI,
      name: "歷史紀錄"
    });
  }, _dependency.createClass(t, [{
    key: "getRecordViewItemPrefabUrl",
    get: function () {
      return this.data.getData().filePaths.recordItemPPrefab;
    }
  }]), t;
}(_dependency8.default)).prototype, "fgLabelMask", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(M.prototype, "fgLabel", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = _dependency.applyDecoratedDescriptor(M.prototype, "featureLabelMask", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(M.prototype, "featureLabel", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = M)) || m));
_dependency2.cclegacy._RF.pop();
