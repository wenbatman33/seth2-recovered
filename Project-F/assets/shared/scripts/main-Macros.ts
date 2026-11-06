// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Bundles";
import * as _dependency3 from "./main-ByteArray";
var _export;
export { _export as Macro };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Macro":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var N, E, t;
var e, c;
_publish("Macro", void 0), _dependency.cclegacy._RF.push({}, "e9733sUI9xL5obHtAPUvMhj", "Macros", void 0), (c = e || (e = _publish("Macro", {}))).USING_LITTLE_ENDIAN = _dependency3.Endian.BIG_ENDIAN, c.BUNDLE_RESOURCES = _dependency2.EBundles[_dependency2.EBundles.resources], c.BUNDLE_REMOTE = "__Remote__Caches__", c.ENABLE_CHANGE_LANGUAGE = !0, c.USING_LAN_KEY = "i18n.", c.USING_COLOR_KEY = "color.", c.ADAPT_SCREEN = "Event_ADAPT_SCREEN", c.UNKNOWN = "UNKNOWN", c.ON_CUSTOM_CLOSE = "ON_CUSTOM_CLOSE", c.MAIN_PACK_BUNDLE_NAME = "main", c.BUNDLE_HALL = "hall", c.SUPPORT_ORIENTATION = {
  landscape: !0,
  portrait: !1,
  auto: !1
}, _dependency.cclegacy._RF.pop();
