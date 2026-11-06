// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-ColorProxy";
import * as _dependency4 from "./g1012-GameData";
import * as _dependency5 from "./g1012-GameColors";
var _export;
export { _export as GameColor };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameColor":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r, e, i, c;
var u;
_dependency2.cclegacy._RF.push({}, "46a1b+sehdNCpxcTF1yWgk0", "GameColor", void 0);
_publish("GameColor", _dependency3.injectColorData(u = function (o) {
  var _nativeConstructor = n;
  function n() {
    for (var t, n = arguments.length, r = new Array(n), e = 0; e < n; e++) r[e] = arguments[e];
    return (t = Reflect.construct(o, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).bundle = _dependency4.default.module, t;
  }
  return _dependency.inheritsLoose(n, o), n.prototype.init = function () {
    this.importColors(_dependency5);
  }, n;
}(_dependency3.ColorProxy)) || u);
_dependency2.cclegacy._RF.pop();
