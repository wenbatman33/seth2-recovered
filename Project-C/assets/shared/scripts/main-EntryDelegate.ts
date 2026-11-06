// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Macros";
var _export;
export { _export as EntryDelegate };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EntryDelegate":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t;
_dependency.cclegacy._RF.push({}, "7195eD0dxVOmIS0HcmWhEaq", "EntryDelegate", void 0);
_publish("EntryDelegate", function () {
  function e() {}
  var n = e.prototype;
  return n.onEnterGameView = function (e, n) {
    var t = this.getPersistBundle();
    e && t.push(e.bundle), App.gameView && App.gameView.close(), App.gameView = n, App.bundleManager.removeLoadedBundle(t);
  }, n.onShowGameView = function (e, n) {}, n.onCheckUpdate = function () {
    Log.d("主包檢測更新");
    var e = this.getEntryConfig(_dependency2.Macro.BUNDLE_RESOURCES);
    App.bundleManager.enterBundle(e);
  }, n.getPersistBundle = function () {
    return [_dependency2.Macro.BUNDLE_RESOURCES];
  }, n.onEnterMain = function (e, n) {
    e && (App.gameView && App.gameView.close(), e.onEnter(n));
  }, n.getEntryConfig = function (e) {
    return null;
  }, e;
}());
_dependency.cclegacy._RF.pop();
