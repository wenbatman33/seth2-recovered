// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
var _export;
export { _export as EReplayMode };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EReplayMode":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, i;
var a;
_publish("EReplayMode", void 0), _dependency2.cclegacy._RF.push({}, "a01a6z9NUBAkIC8zaboQmla", "ReplayModel", void 0), function (e) {
  e.NONE = "none", e.URL_REPLAY = "url_replay", e.RANKING_REPLAY = "ranking_replay";
}(a || (a = _publish("EReplayMode", {})));
var o = function (e) {
  var _nativeConstructor = t;
  function t() {
    var n;
    return (n = Reflect.construct(e, [], new.target || _nativeConstructor) || this).index = 0, n.isReplay = !1, n.replayMode = a.NONE, n;
  }
  return _dependency.inheritsLoose(t, e), t.Instance = function () {
    return this._instance || (this._instance = new t());
  }, t.prototype.reset = function () {
    this.index = 0;
  }, t;
}(_dependency3.BaseModel);
o._instance = null;
_publish("default", o.Instance());
_dependency2.cclegacy._RF.pop();
