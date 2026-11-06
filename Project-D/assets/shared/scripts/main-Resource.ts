// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as Resource };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Resource":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, s, e;
var n;
_publish("Resource", void 0), _dependency2.cclegacy._RF.push({}, "86fa3hsHP1My5zJYrNKRvgr", "Resource", void 0), function (t) {
  var s, n, o;
  !function (t) {
    t[t.LOADING = 0] = "LOADING", t[t.NO_FOUND_LOAD_RESOURCE = 1] = "NO_FOUND_LOAD_RESOURCE", t[t.SUCCESS = 2] = "SUCCESS";
  }(s || (s = {})), t.LoaderError = s, function (t) {
    t[t.NONE = 0] = "NONE", t[t.WAITTING_FOR_RELEASE = 1] = "WAITTING_FOR_RELEASE";
  }(n || (n = {})), t.CacheStatus = n, function (t) {
    t[t.Local = 0] = "Local", t[t.Remote = 1] = "Remote";
  }(o || (o = {})), t.Type = o;
  var r = function () {
    this.url = "", this.type = null, this.data = null, this.retain = !1, this.bundle = null, this.resourceType = o.Local, this.stamp = null;
  };
  t.Info = r;
  var a = function () {
    function t() {
      this.isLoaded = !1, this.data = null, this.info = new r(), this.status = n.NONE, this.getCb = [], this.finishCb = [];
    }
    var s = t.prototype;
    return s.doGet = function (t) {
      for (var i = 0; i < this.getCb.length; i++) this.getCb[i] && this.getCb[i](t);
      this.getCb = [];
    }, s.doFinish = function (t) {
      for (var i = 0; i < this.finishCb.length; i++) this.finishCb[i] && this.finishCb[i](t);
      this.finishCb = [];
    }, _dependency.createClass(t, [{
      key: "isInvalid",
      get: function () {
        return this.isLoaded && this.data && !_dependency2.isValid(this.data);
      }
    }]), t;
  }();
  t.CacheData = a;
}(n || (n = _publish("Resource", {}))), _dependency2.cclegacy._RF.pop();
