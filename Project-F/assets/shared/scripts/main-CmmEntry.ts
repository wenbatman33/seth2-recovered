// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EntryDelegate";
import * as _dependency4 from "./main-Macros";
import * as _dependency5 from "./main-Singleton";
import * as _dependency6 from "./main-Bundles";
import * as _dependency7 from "./main-BundleUpdateHandlerImpl";
import * as _dependency8 from "./main-HallUpdateHandlerImpl";
import * as _dependency9 from "./main-MainUpdateHandlerImpl";
var _export;
export { _export as CmmEntry };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CmmEntry":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, r, l, o, i, u, p;
_dependency2.cclegacy._RF.push({}, "3e642VxXNZJBIt6YDvEMdSh", "CmmEntry", void 0);
_publish("CmmEntry", function (e) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, e);
  var a = n.prototype;
  return a.onEnterGameView = function (t, n) {
    App.stageData.where = t.bundle, e.prototype.onEnterGameView.call(this, t, n), App.loading.hide();
  }, a.onShowGameView = function (e, t) {
    App.stageData.where = t.bundle;
  }, a.getEntryConfig = function (e) {
    var t;
    try {
      t = App.stageData.getEntry(e);
    } catch (e) {
      Log.e("很高的可能性 是輸入未知的多語系，所造成的錯誤。請檢查 CommonLanguage 模塊");
    }
    if (t) {
      var n = App.updateManager.getItem(t);
      return e == _dependency4.Macro.BUNDLE_RESOURCES ? n.handler = _dependency5.default.instance.get(_dependency9.MainUpdateHandlerImpl) : e == _dependency6.EBundles[_dependency6.EBundles.wrapper] ? n.handler = _dependency5.default.instance.get(_dependency8.HallUpdateHandlerImpl) : n.handler = _dependency5.default.instance.get(_dependency7.BundleUpdateHandlerImpl), n;
    }
    return Log.e("未找到入口配置資訊"), null;
  }, a.getPersistBundle = function () {
    return [_dependency4.Macro.BUNDLE_RESOURCES, _dependency6.EBundles[_dependency6.EBundles.wrapper], _dependency6.EBundles[_dependency6.EBundles.slotFramework]];
  }, n;
}(_dependency3.EntryDelegate));
_dependency2.cclegacy._RF.pop();
