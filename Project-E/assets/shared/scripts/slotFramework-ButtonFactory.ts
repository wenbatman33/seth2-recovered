// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-SingletonExtends";
import * as _dependency5 from "./slotFramework-ImageButton";
var _export;
export { _export as EButtonFactory };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EButtonFactory":
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
var n, o, e, u, r, i, a;
_publish("EButtonFactory", void 0), _dependency2.cclegacy._RF.push({}, "32f75tOIwZEZoJuTqY4XViL", "ButtonFactory", void 0);
var c;
_dependency2._decorator.ccclass, _dependency2._decorator.property;
!function (t) {
  t.ImageButton = "ImageButton", t.SpineButton = "SpineButton";
}(c || (c = _publish("EButtonFactory", {})));
_publish("default", function (t) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(o, t), o.prototype.createButton = function (t, n) {
    if (t === c.ImageButton) {
      var o = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], "prefabs/ui/button/ImageButton").data,
        e = _dependency2.instantiate(o);
      return e.name = n, e.addComponent(_dependency5.ImageButton);
    }
    if (t !== c.SpineButton) throw new Error("无法创建该类型的按钮");
  }, o;
}(_dependency4.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
