// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Macros";
var _export;
export { _export as HallUpdateHandlerImpl };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HallUpdateHandlerImpl":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, a;
_dependency.cclegacy._RF.push({}, "2be25f7HNtJrJ3lfhGK9ALc", "HallUpdateHandlerImpl", void 0), _publish("HallUpdateHandlerImpl", function () {
  function e() {
    this.module = null, this.isResident = !0;
  }
  var n = e.prototype;
  return n.onNewVersionFund = function (e) {
    e.doUpdate();
  }, n.onUpdateFailed = function (e) {
    var n = App.getLanguage("downloadFailed");
    App.alert.show({
      text: n,
      confirmCb: function (n) {
        e.checkUpdate();
      }
    }), App.updateLoading.hide();
  }, n.onPreVersionFailed = function (e) {
    var n = App.getLanguage("downloadFailed");
    App.alert.show({
      text: n,
      confirmCb: function (n) {
        e.checkUpdate();
      }
    }), App.updateLoading.hide();
  }, n.onShowUpdating = function (e) {
    App.updateLoading.show(App.getLanguage("loading"));
  }, n.onNeedUpdateMain = function (e) {
    App.updateLoading.hide();
    var n = App.getLanguage("mainPackVersionIsTooLow");
    App.alert.show({
      text: n,
      confirmCb: function (e) {
        App.stageData.isLoginStage() ? App.entryManager.onCheckUpdate() : App.entryManager.enterBundle(_dependency2.Macro.BUNDLE_RESOURCES);
      }
    });
  }, n.onOther = function (e) {}, n.onDownloading = function (e, n) {
    App.updateLoading.updateProgress(n.progress);
  }, n.onAreadyUpToData = function (e) {
    App.bundleManager.loadBundle(e);
  }, n.onStarCheckUpdate = function (e) {
    App.updateLoading.show(App.getLanguage("loading"));
  }, n.onStartLoadBundle = function (e) {}, n.onLoadBundleError = function (e, n) {
    App.updateLoading.hide(), App.tips.show(App.getLanguage("loadFailed", [e.name]));
  }, n.onLoadBundleComplete = function (e) {
    App.updateLoading.hide(), App.entryManager.onLoadBundleComplete(e);
  }, n.onLoadBundle = function (e) {
    App.bundleManager.loadBundle(e);
  }, n.onDownloadComplete = function (e) {
    App.releaseManger.tryRemoveBundle(e.bundle), this.onLoadBundle(e);
  }, n.onNeedRestartApp = function (e, n) {
    var t = App.stageData.where;
    if (Log.d("重启游戏,当前位置 :" + t + ",之前位置 : " + App.stageData.prevWhere), t == _dependency2.Macro.BUNDLE_RESOURCES) n(!0);else {
      var o = App.getLanguage("restartApp", [e.name]);
      App.alert.show({
        text: o,
        confirmCb: function (e) {
          n(!1);
        }
      });
    }
  }, e;
}()).module = "【大廳熱更新】", _dependency.cclegacy._RF.pop();
