// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as GameNameMap };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameNameMap":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var g;
_dependency.cclegacy._RF.push({}, "83b95leJiNA2JQZqJ/2gldz", "GameNameMap", void 0);
_publish("GameNameMap", {
  "materialistic-women": "g1003",
  "egyptian-mythology": "g1001",
  "son-go-ku": "g1002",
  "wuxia-caishen": "g1004",
  "golden-seth": "g1005",
  "egyptian-mythology-golang": "g1001",
  "light-bringer": "g1006",
  hades: "g1007",
  "scarlet-three-kingdoms": "g1008",
  "tiger-princess": "g1009",
  "new-winter-hunter": "g1010",
  "new-jinlian": "g1011",
  "new-vampire-hunter": "g1012",
  "triple-fortune": "g1013",
  "qin-shi-huang": "g1014"
});
_dependency.cclegacy._RF.pop();
