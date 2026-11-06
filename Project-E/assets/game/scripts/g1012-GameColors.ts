// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EUiColorKeys };
var _export2;
export { _export2 as DARK };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EUiColorKeys":
      _export = value;
      break;
    case "DARK":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, r;
_publish("EUiColorKeys", void 0), _dependency.cclegacy._RF.push({}, "8bcb7Y+s6xE4pS3nsjgKPd4", "GameColors", void 0);
var a,
  o = _publish("DARK", {
    mode: "dark",
    data: {
      mainGame: {
        auxiliary: new _dependency.Color("#4e3487"),
        main: new _dependency.Color("#ab84ff"),
        mainHover: new _dependency.Color("#896acc"),
        topbar: new _dependency.Color(42, 26, 77, 209.1)
      },
      record: {
        5: new _dependency.Color(255, 255, 255, 12.75),
        10: new _dependency.Color(255, 255, 255, 255 * .24)
      },
      background: {
        0: new _dependency.Color("#c9c9cc"),
        20: new _dependency.Color("#a9a9ad"),
        40: new _dependency.Color("#88898e"),
        60: new _dependency.Color("#68696f"),
        80: new _dependency.Color("#474951"),
        100: new _dependency.Color("#272932")
      },
      white: {
        info01: new _dependency.Color("#ffffff"),
        default01: new _dependency.Color(255, 255, 255, 38.25),
        default02: new _dependency.Color(255, 255, 255, 255 * .24),
        hover01: new _dependency.Color(255, 255, 255, 76.5),
        hover02: new _dependency.Color(255, 255, 255, 255 * .08),
        labelDefault01: new _dependency.Color(255, 255, 255, 153),
        textAuto01: new _dependency.Color("#ffffff")
      },
      red: {
        primary: new _dependency.Color("#ff6433")
      },
      green: {
        primary: new _dependency.Color("#3ae300")
      },
      yellow: {
        primary: new _dependency.Color("#ffd680"),
        secondary: new _dependency.Color(255, 168, 0, 76.5)
      }
    }
  }).data;
a || (a = _publish("EUiColorKeys", {}));
var f = {};
for (var t in o) for (var w in o[t]) {
  var c = i(t + "_" + w);
  f[c] && Log.e("碰撞檢測: " + t + "_" + w + " 的哈希碰撞"), f[c] = t + "_" + w, a[t + "_" + w] = c;
}
function i(e) {
  for (var n = 0, r = 0; r < e.length; r++) {
    n = (n << 5) - n + e.charCodeAt(r), n |= 0;
  }
  return n;
}
_dependency.cclegacy._RF.pop();
