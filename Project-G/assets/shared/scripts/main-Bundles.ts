// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EBundles };
var _export2;
export { _export2 as Bundles };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBundles":
      _export = value;
      break;
    case "Bundles":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
var n;
_publish("EBundles", void 0), _dependency.cclegacy._RF.push({}, "3d1a3os25ROeo0YTS1i+Vgc", "Bundles", void 0), function (g) {
  g[g.resources = 0] = "resources", g[g.hall = 1] = "hall", g[g.template = 2] = "template", g[g.g1001 = 3] = "g1001", g[g.g9999 = 4] = "g9999", g[g.wrapper = 5] = "wrapper", g[g.slotFramework = 6] = "slotFramework", g[g.unknown = 7] = "unknown", g[g.g1002 = 8] = "g1002", g[g.g1003 = 9] = "g1003", g[g.g1004 = 10] = "g1004", g[g.g1005 = 11] = "g1005", g[g.g1006 = 12] = "g1006", g[g.g1007 = 13] = "g1007", g[g.g1008 = 14] = "g1008", g[g.g1009 = 15] = "g1009", g[g.g1010 = 16] = "g1010", g[g.g1011 = 17] = "g1011", g[g.g1012 = 18] = "g1012", g[g.g1013 = 19] = "g1013", g[g.g1014 = 20] = "g1014", g[g.g1015 = 21] = "g1015", g[g.g1016 = 22] = "g1016";
}(n || (n = _publish("EBundles", {})));
var s = _publish("Bundles", {
  bundles: {}
});
Object.values(n).forEach(function (g, e) {
  var n;
  "number" != typeof g && Object.assign(s.bundles, ((n = {})[g] = {
    name: g,
    sort: e
  }, n));
}), _dependency.cclegacy._RF.pop();
