// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./slotFramework-HistoryViewBase";
import * as _dependency6 from "./slotFramework-RecordViewL";
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
var t, n, o, i, r, s, u, c, a;
var l;
_dependency2.cclegacy._RF.push({}, "830efS/pXZDwalsqQx1Re1r", "HistoryViewL", void 0);
var f = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", f("HistoryViewL")(l = function (e) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(o, e), o.getPrefabUrl = function () {
    return "prefabs/view/HistoryViewL";
  }, o.prototype.setEventTouch = function () {
    var t = this;
    e.prototype.setEventTouch.call(this), this.closeBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose(), App.uiManager.close(_dependency6.default);
    }), this.bbr.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose(), App.uiManager.close(_dependency6.default);
    }), this.backBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose(), App.uiManager.open({
        type: _dependency6.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "押注紀錄L"
      });
    });
  }, _dependency.createClass(o, [{
    key: "getHistoryViewItemPrefabUrl",
    get: function () {
      return this.data.getData().filePaths.historyItemLPrefab;
    }
  }]), o;
}(_dependency5.default)) || l);
_dependency2.cclegacy._RF.pop();
