// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Snapshot";
var _export;
export { _export as Platform };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Platform":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, s, n, o, r, i;
_dependency2.cclegacy._RF.push({}, "98f4cJugxNCmLLz8qfpsjAJ", "Platform", void 0), _publish("Platform", function () {
  function t() {
    this.module = null, this._screenshotsPath = null;
  }
  var s = t.prototype;
  return s.openURL = function (t) {
    _dependency2.sys.openURL(t);
  }, s.copyText = function (t) {
    _dependency2.native.copyTextToClipboard(t);
  }, s.getNetworkType = function () {
    return _dependency2.sys.getNetworkType();
  }, s.getBatteryLevel = function () {
    return _dependency2.sys.getBatteryLevel();
  }, s.snapshot = function (t, e) {
    if (_dependency2.isValid(t)) {
      var s = t.addComponent(_dependency3.Snapshot);
      s.onCaptureComplete = e;
    }
  }, _dependency.createClass(t, [{
    key: "screenshotsPath",
    get: function () {
      return this._screenshotsPath || _dependency2.sys.isNative && (this._screenshotsPath = _dependency2.native.fileUtils.getWritablePath() + "Screenshots", _dependency2.native.fileUtils.isDirectoryExist(this._screenshotsPath) || _dependency2.native.fileUtils.createDirectory(this._screenshotsPath)), this._screenshotsPath;
    }
  }]), t;
}()).module = "【平臺管理器】", _dependency2.cclegacy._RF.pop();
