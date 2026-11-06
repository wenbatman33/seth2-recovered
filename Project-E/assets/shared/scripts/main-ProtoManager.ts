// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Resource";
var _export;
export { _export as ProtoManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ProtoManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, r, e, n;
_dependency.cclegacy._RF.push({}, "647b9mLXKhEYLYv4tkuN2zn", "ProtoManager", void 0), _publish("ProtoManager", function () {
  function o() {
    this._loadDir = {}, this._root = null, this.module = null, this._root = new protobuf.Root();
  }
  var t = o.prototype;
  return t.destory = function () {
    this.unload();
  }, t.load = function (o, t) {
    var e = this;
    return void 0 === t && (t = "proto"), new Promise(function (u, a) {
      e._loadDir[o + "/" + t] ? u(!0) : (e._loadDir[o + "/" + t] = !1, App.asset.loadDir(o, t, _dependency.TextAsset, function (o, t, r) {}, function (a) {
        if (a && a.data && Array.isArray(a.data)) {
          for (var i = 0; i < a.data.length; i++) {
            var s = a.data[i];
            protobuf.parse(s.text, e._root);
          }
          var l = new _dependency2.Resource.Info();
          l.url = t, l.type = _dependency.TextAsset, l.data = a.data, l.bundle = o, App.asset.releaseAsset(l), e._loadDir[o + "/" + t] = !0, u(!0);
        } else u(!1);
      }));
    });
  }, t.unload = function () {
    this._loadDir = {}, this._root = new protobuf.Root();
  }, t.lookup = function (o) {
    return this._root ? this._root.lookup(o) : null;
  }, t.decode = function (o) {
    var t = this.lookup(o.className);
    return t ? t.decode(o.buffer) : null;
  }, t.debug = function () {
    Log.d("-------Proto檔案載入資訊,所有proto檔案都載入在同一個root下,檔案載入完成後，資原始檔就會初釋放-------"), _dependency.sys.isNative ? Log.dump(this._loadDir) : Log.d(this._loadDir);
  }, o;
}()).module = "【Protobuf協議管理器】", _dependency.cclegacy._RF.pop();
