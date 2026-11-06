// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-ExplodeReelController";
var _export;
export { _export as GameExplodeReelController };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameExplodeReelController":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var r, t, o, l;
var n;
_dependency2.cclegacy._RF.push({}, "f9490UHHb1PfpkOkNQgRXYZ", "GameExplodeReelController", void 0);
var c = _dependency2._decorator.ccclass,
  a = (_dependency2._decorator.property, function (e) {
    if (0 === e) return 0;
    var r = 1.10158;
    return --e * e * ((r + 1) * e + r) + 1;
  });
_publish("GameExplodeReelController", c("GameExplodeReelController")(n = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var r, t = arguments.length, o = new Array(t), l = 0; l < t; l++) o[l] = arguments[l];
    return (r = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).symbolDelay = 0, r.durationList = [.3, .3, .3, .3], r.easing = a, r;
  }
  return _dependency.inheritsLoose(t, e), t;
}(_dependency3.default)) || n);
_dependency2.cclegacy._RF.pop();
