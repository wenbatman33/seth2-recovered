// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./slotFramework-HistoryViewL";
import * as _dependency6 from "./slotFramework-RecordViewBase";
import * as _dependency7 from "./main-Decorators";
import * as _dependency8 from "./slotFramework-PlatformModel";
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
var t, i, r, n, o, a, c, l, s, u, f, d, p, h;
var w, y, g, v, b;
_dependency2.cclegacy._RF.push({}, "d0e42uK22BFmKBKAvOCvVDv", "RecordViewL", void 0);
var V = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (w = V("RecordViewL"), y = _dependency7.inject("content/table/title/detail", _dependency2.Node), w((b = _dependency.applyDecoratedDescriptor((v = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "detail", b, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e), t.getPrefabUrl = function () {
    return "prefabs/view/RecordViewL";
  };
  var a = t.prototype;
  return a.init = function () {
    e.prototype.init.call(this), this.showDetail();
  }, a.showDetail = function () {
    "xin-star" === _dependency8.default.getData().theme && (this.detail.active = !0);
  }, a.openHistoryView = function () {
    App.uiManager.open({
      type: _dependency5.default,
      bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
      zIndex: _dependency3.ViewZOrder.UI,
      name: "歷史紀錄"
    });
  }, _dependency.createClass(t, [{
    key: "getRecordViewItemPrefabUrl",
    get: function () {
      return this.data.getData().filePaths.recordItemLPrefab;
    }
  }]), t;
}(_dependency6.default)).prototype, "detail", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), g = v)) || g));
_dependency2.cclegacy._RF.pop();
