// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-GameDataBase";
import * as _dependency4 from "./main-Macros";
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
var e, t, a, o, r;
_dependency2.cclegacy._RF.push({}, "9d2b2JmbXhFEZLADzrPFFbL", "WrapperData", void 0), _publish("default", function (n) {
  var _nativeConstructor = a;
  function a() {
    for (var e, t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o];
    return (e = Reflect.construct(n, [this].concat(a).slice(1), new.target || _nativeConstructor) || this).ENTER_SLOT_VIEW = !1, e.orientation = null, e._colorConfig = {
      main: "#FFD680",
      main_normal: "#FFD53A",
      main_pressed: "#FFDD61",
      main_disable: "#A18E4C",
      second: "#876A00",
      disable: "#56596F",
      btn_bg_normal: "#56596F",
      btn_bg_hover: "#696C7F",
      btn_bg_pressed: "#FFD53A",
      btn_bg_disable: "#4C5067",
      btn_label_normal: "#AAACB7",
      btn_label_hover: "#AAACB7",
      btn_label_pressed: "#876A00",
      btn_label_disable: "#76798B"
    }, e;
  }
  return _dependency.inheritsLoose(a, n), _dependency.createClass(a, [{
    key: "colorConfig",
    get: function () {
      return this._colorConfig;
    },
    set: function (n) {
      this._colorConfig = n;
    }
  }]), a;
}(_dependency3.GameDataBase)).module = _dependency4.Macro.BUNDLE_RESOURCES, _dependency2.cclegacy._RF.pop();
