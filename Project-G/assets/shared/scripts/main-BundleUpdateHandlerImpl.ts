// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Macros";
var _export;
export { _export as BundleUpdateHandlerImpl };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BundleUpdateHandlerImpl":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t;
_dependency.cclegacy._RF.push({}, "8b7b9KkXIBPqJ3HKbM6mJj4", "BundleUpdateHandlerImpl", void 0), _publish("BundleUpdateHandlerImpl", function () {
  function n() {
    this.module = null, this.isResident = !0;
  }
  var e = n.prototype;
  return e.onNewVersionFund = function (n) {
    n.doUpdate();
  }, e.onUpdateFailed = function (n) {
    App.tips.show(App.getLanguage("updateFaild", [n.name])), App.uiManager.getView("HallView").then(function (e) {
      e && e.toUpdateStatus(n);
    });
  }, e.onPreVersionFailed = function (n) {
    this.onUpdateFailed(n);
  }, e.onShowUpdating = function (n) {
    App.tips.show(App.getLanguage("checkingUpdate"));
  }, e.onNeedUpdateMain = function (n) {
    var e = App.getLanguage("mainPackVersionIsTooLow");
    App.alert.show({
      text: e,
      confirmCb: function (n) {
        App.entryManager.enterBundle(_dependency2.Macro.BUNDLE_RESOURCES);
      }
    });
  }, e.onOther = function (n) {}, e.onDownloading = function (n, e) {
    App.uiManager.getView("HallView").then(function (n) {
      n && n.onDownloadProgess(e);
    });
  }, e.onAreadyUpToData = function (n) {
    App.tips.show(App.getLanguage("alreadyRemoteVersion", [n.name]));
  }, e.onStarCheckUpdate = function (n) {}, e.onStartLoadBundle = function (n) {}, e.onLoadBundleError = function (n, e) {
    App.tips.show(App.getLanguage("loadFailed", [n.name]));
  }, e.onLoadBundleComplete = function (n) {
    App.entryManager.onLoadBundleComplete(n);
  }, e.onLoadBundle = function (n) {
    App.bundleManager.loadBundle(n);
  }, e.onDownloadComplete = function (n) {
    App.releaseManger.tryRemoveBundle(n.bundle);
  }, e.onNeedRestartApp = function (n, e) {
    var t = App.getLanguage("restartApp", [n.name]);
    App.alert.show({
      text: t,
      confirmCb: function (n) {
        e(!1);
      }
    });
  }, n;
}()).module = "【Bundle熱更新】", _dependency.cclegacy._RF.pop();
