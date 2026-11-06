// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
var _export;
export { _export as EColorKeys };
var _export2;
export { _export2 as EUiColorKeys };
var _export3;
export { _export3 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EColorKeys":
      _export = value;
      break;
    case "EUiColorKeys":
      _export2 = value;
      break;
    case "default":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, r, o, a;
var t;
_publish({
  EColorKeys: void 0,
  EUiColorKeys: void 0
}), _dependency2.cclegacy._RF.push({}, "4d216JbRNJE+pa6PdrkrN/Q", "ColorModel", void 0), function (e) {
  e[e.yellow = 0] = "yellow", e[e.green = 1] = "green", e[e.red = 2] = "red", e[e.white = 3] = "white", e[e.record = 4] = "record", e[e.background = 5] = "background", e[e.mainGame = 6] = "mainGame";
}(t || (t = _publish("EColorKeys", {})));
var i = function (e) {
  var _nativeConstructor = r;
  function r() {
    var n;
    return (n = Reflect.construct(e, [], new.target || _nativeConstructor) || this).data = {
      mainGame: {
        auxiliary: new _dependency2.Color("#4e3487"),
        main: new _dependency2.Color("#ab84ff"),
        mainHover: new _dependency2.Color("#896acc"),
        topbar: new _dependency2.Color(42, 26, 77, 209.1)
      },
      record: {
        5: new _dependency2.Color(255, 255, 255, 12.75),
        10: new _dependency2.Color(255, 255, 255, 255 * .24)
      },
      background: {
        0: new _dependency2.Color("#c9c9cc"),
        20: new _dependency2.Color("#a9a9ad"),
        40: new _dependency2.Color("#88898e"),
        60: new _dependency2.Color("#68696f"),
        80: new _dependency2.Color("#474951"),
        100: new _dependency2.Color("#272932")
      },
      white: {
        info01: new _dependency2.Color("#ffffff"),
        default01: new _dependency2.Color(255, 255, 255, 38.25),
        default02: new _dependency2.Color(255, 255, 255, 255 * .24),
        hover01: new _dependency2.Color(255, 255, 255, 76.5),
        hover02: new _dependency2.Color(255, 255, 255, 255 * .08),
        labelDefault01: new _dependency2.Color(255, 255, 255, 153),
        textAuto01: new _dependency2.Color("#ffffff")
      },
      red: {
        primary: new _dependency2.Color("#ff6433")
      },
      green: {
        primary: new _dependency2.Color("#3ae300")
      },
      yellow: {
        primary: new _dependency2.Color("#ffd680"),
        secondary: new _dependency2.Color(255, 168, 0, 76.5)
      }
    }, n;
  }
  return _dependency.inheritsLoose(r, e), r.Instance = function () {
    return this._instance || (this._instance = new r());
  }, r.prototype.setData = function (e) {
    this.data = e;
  }, r;
}(_dependency3.BaseModel);
i._instance = null;
_publish("default", i.Instance());
var c,
  f = i.Instance().getData();
c || (c = _publish("EUiColorKeys", {}));
var l = {};
for (var s in f) for (var u in f[s]) {
  var w = d(s + "_" + u);
  l[w] && console.log("碰撞檢測: " + s + "_" + u + " 的哈希碰撞"), l[w] = s + "_" + u, c[s + "_" + u] = w;
}
function d(e) {
  for (var n = 0, r = 0; r < e.length; r++) {
    n = (n << 5) - n + e.charCodeAt(r), n |= 0;
  }
  return n;
}
_dependency2.cclegacy._RF.pop();
