// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-RankingViewBase";
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
var e, n, r, i, a;
var s;
_dependency2.cclegacy._RF.push({}, "51bfcZrRUZFu6G1OsBeWk3M", "RankingViewP", void 0);
var c = _dependency2._decorator.ccclass;
_publish("default", c("RankingViewP")(s = function (t) {
  var _nativeConstructor = r;
  function r() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(r, t), r.prototype.start = function () {
    t.prototype.start.call(this);
  }, r.getPrefabUrl = function () {
    return "prefabs/view/RankingViewP";
  }, _dependency.createClass(r, [{
    key: "getRankingItemPrefabUrl",
    get: function () {
      return this.data.getData().filePaths.rankingItemPPrefab;
    }
  }]), r;
}(_dependency3.default)) || s);
_dependency2.cclegacy._RF.pop();
