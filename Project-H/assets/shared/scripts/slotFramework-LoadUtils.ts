// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as LoadUtils };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LoadUtils":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t;
_dependency.cclegacy._RF.push({}, "8c5cbVFIvRKYaV9Jau2YnXq", "LoadUtils", void 0);
_publish("LoadUtils", function () {
  function r() {}
  return r.getDirSp = function (r, t, e) {
    var n = App.cache.get(r, t).data.find(function (r) {
      return r.name === e;
    });
    if (!n) throw new Error("NOT FIND 所需SpriteFrame " + e);
    return n;
  }, r.getDirSkeleton = function (r, t, e) {
    var n = App.cache.get(r, t).data.find(function (r) {
      return r.name === e;
    });
    if (!n) throw new Error("NOT FIND 所需SpriteFrame " + e);
    return n;
  }, r.getDirPrefab = function (r, t, e) {
    var n = App.cache.get(r, t).data.find(function (r) {
      return r.name === e;
    });
    if (!n) throw new Error("NOT FIND 所需Prefab " + e);
    return n;
  }, r.getDirAtlas = function (r, t, e) {
    var n = App.cache.get(r, t).data.getSpriteFrame(e);
    if (!n) throw new Error("Not Find 所需圖片 " + e);
    return n;
  }, r;
}());
_dependency.cclegacy._RF.pop();
