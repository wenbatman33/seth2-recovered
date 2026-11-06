// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
var _export;
export { _export as Update };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Update":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var _, t, D, A;
var N;
_publish("Update", void 0), _dependency2.cclegacy._RF.push({}, "3d08aMS7tVOUJAnh86aBZlX", "Update", void 0), function (E) {
  var t, N, O;
  E.MAIN_PACK = _dependency3.Macro.MAIN_PACK_BUNDLE_NAME, E.MANIFEST_ROOT = "manifest/";
  !function (E) {
    E[E.ERROR_NO_LOCAL_MANIFEST = 0] = "ERROR_NO_LOCAL_MANIFEST", E[E.ERROR_DOWNLOAD_MANIFEST = 1] = "ERROR_DOWNLOAD_MANIFEST", E[E.ERROR_PARSE_MANIFEST = 2] = "ERROR_PARSE_MANIFEST", E[E.NEW_VERSION_FOUND = 3] = "NEW_VERSION_FOUND", E[E.ALREADY_UP_TO_DATE = 4] = "ALREADY_UP_TO_DATE", E[E.UPDATE_PROGRESSION = 5] = "UPDATE_PROGRESSION", E[E.ASSET_UPDATED = 6] = "ASSET_UPDATED", E[E.ERROR_UPDATING = 7] = "ERROR_UPDATING", E[E.UPDATE_FINISHED = 8] = "UPDATE_FINISHED", E[E.UPDATE_FAILED = 9] = "UPDATE_FAILED", E[E.ERROR_DECOMPRESS = 10] = "ERROR_DECOMPRESS", E[E.MAIN_PACK_NEED_UPDATE = 11] = "MAIN_PACK_NEED_UPDATE", E[E.PRE_VERSIONS_NOT_FOUND = 12] = "PRE_VERSIONS_NOT_FOUND", E[E.UNINITED = 13] = "UNINITED";
  }(t || (t = {})), E.Code = t, function (E) {
    E[E.UNINITED = 0] = "UNINITED", E[E.UNCHECKED = 1] = "UNCHECKED", E[E.PREDOWNLOAD_VERSION = 2] = "PREDOWNLOAD_VERSION", E[E.DOWNLOADING_VERSION = 3] = "DOWNLOADING_VERSION", E[E.VERSION_LOADED = 4] = "VERSION_LOADED", E[E.PREDOWNLOAD_MANIFEST = 5] = "PREDOWNLOAD_MANIFEST", E[E.DOWNLOADING_MANIFEST = 6] = "DOWNLOADING_MANIFEST", E[E.MANIFEST_LOADED = 7] = "MANIFEST_LOADED", E[E.NEED_UPDATE = 8] = "NEED_UPDATE", E[E.READY_TO_UPDATE = 9] = "READY_TO_UPDATE", E[E.UPDATING = 10] = "UPDATING", E[E.UNZIPPING = 11] = "UNZIPPING", E[E.UP_TO_DATE = 12] = "UP_TO_DATE", E[E.FAIL_TO_UPDATE = 13] = "FAIL_TO_UPDATE";
  }(N || (N = {})), E.State = N, function (E) {
    E[E.NEED_DOWNLOAD = 0] = "NEED_DOWNLOAD", E[E.UP_TO_DATE = 1] = "UP_TO_DATE", E[E.NEED_UPDATE = 2] = "NEED_UPDATE";
  }(O || (O = {})), E.Status = O;
  var e = function () {
    function E(E, _) {
      this.bundle = "", this.name = "", this.name = E, this.bundle = _;
    }
    return E.prototype.clone = function () {
      return new E(this.name, this.bundle);
    }, E;
  }();
  E.Config = e;
  var n = function () {
    function E(E, _) {
      this.name = "", this._manager = null, this.type = "", this.storagePath = "", this.name = E, this.type = "type." + E, this.storagePath = _, this.create();
    }
    var t = E.prototype;
    return t.reset = function () {
      this.manager.reset();
    }, t.create = function () {
      Log.d("建立 " + this.name + " AssetsManager"), this.manager = new _dependency2.native.AssetsManager(this.type, this.storagePath);
    }, _dependency.createClass(E, [{
      key: "manager",
      get: function () {
        return this._manager || this.create(), this._manager;
      },
      set: function (E) {
        this._manager = E;
      }
    }]), E;
  }();
  E.AssetsManager = n;
}(N || (N = _publish("Update", {}))), _dependency2.cclegacy._RF.pop();
