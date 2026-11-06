// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as KeyStyle };
var _export2;
export { _export2 as ShieldKey };
var _export3;
export { _export3 as getKeyStyle };
var _export4;
export { _export4 as getShieldSub };
var _export5;
export { _export5 as getShieldTitle };
var _export6;
export { _export6 as getStyle };
var _export7;
export { _export7 as red };
var _export8;
export { _export8 as red_dark };
var _export9;
export { _export9 as orange };
var _export0;
export { _export0 as orange_dark };
var _export1;
export { _export1 as yellow };
var _export10;
export { _export10 as yellow_light };
var _export11;
export { _export11 as yellow_medium };
var _export12;
export { _export12 as yellow_dark };
var _export13;
export { _export13 as green };
var _export14;
export { _export14 as green_light };
var _export15;
export { _export15 as green_medium };
var _export16;
export { _export16 as green_dark };
var _export17;
export { _export17 as blue };
var _export18;
export { _export18 as blue_light };
var _export19;
export { _export19 as blue_medium };
var _export20;
export { _export20 as blue_dark };
var _export21;
export { _export21 as purple };
var _export22;
export { _export22 as purple_light };
var _export23;
export { _export23 as purple_medium };
var _export24;
export { _export24 as purple_dark };
var _export25;
export { _export25 as pink };
var _export26;
export { _export26 as pink_light };
var _export27;
export { _export27 as pink_dark };
var _export28;
export { _export28 as grey };
var _export29;
export { _export29 as grey_light };
var _export30;
export { _export30 as grey_medium };
var _export31;
export { _export31 as grey_dark };
var _export32;
export { _export32 as class_color };
var _export33;
export { _export33 as function_color };
var _export34;
export { _export34 as arg_color };
var _export35;
export { _export35 as warn_color };
var _export36;
export { _export36 as error_color };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "KeyStyle":
      _export = value;
      break;
    case "ShieldKey":
      _export2 = value;
      break;
    case "getKeyStyle":
      _export3 = value;
      break;
    case "getShieldSub":
      _export4 = value;
      break;
    case "getShieldTitle":
      _export5 = value;
      break;
    case "getStyle":
      _export6 = value;
      break;
    case "red":
      _export7 = value;
      break;
    case "red_dark":
      _export8 = value;
      break;
    case "orange":
      _export9 = value;
      break;
    case "orange_dark":
      _export0 = value;
      break;
    case "yellow":
      _export1 = value;
      break;
    case "yellow_light":
      _export10 = value;
      break;
    case "yellow_medium":
      _export11 = value;
      break;
    case "yellow_dark":
      _export12 = value;
      break;
    case "green":
      _export13 = value;
      break;
    case "green_light":
      _export14 = value;
      break;
    case "green_medium":
      _export15 = value;
      break;
    case "green_dark":
      _export16 = value;
      break;
    case "blue":
      _export17 = value;
      break;
    case "blue_light":
      _export18 = value;
      break;
    case "blue_medium":
      _export19 = value;
      break;
    case "blue_dark":
      _export20 = value;
      break;
    case "purple":
      _export21 = value;
      break;
    case "purple_light":
      _export22 = value;
      break;
    case "purple_medium":
      _export23 = value;
      break;
    case "purple_dark":
      _export24 = value;
      break;
    case "pink":
      _export25 = value;
      break;
    case "pink_light":
      _export26 = value;
      break;
    case "pink_dark":
      _export27 = value;
      break;
    case "grey":
      _export28 = value;
      break;
    case "grey_light":
      _export29 = value;
      break;
    case "grey_medium":
      _export30 = value;
      break;
    case "grey_dark":
      _export31 = value;
      break;
    case "class_color":
      _export32 = value;
      break;
    case "function_color":
      _export33 = value;
      break;
    case "arg_color":
      _export34 = value;
      break;
    case "warn_color":
      _export35 = value;
      break;
    case "error_color":
      _export36 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o;
_publish({
  KeyStyle: void 0,
  ShieldKey: void 0,
  getKeyStyle: function (e, o) {
    return (x.get(e) ? "background:" + x.get(e) + ";" : "background:" + g + ";") + (o ? "color:" + o + ";" : "color:#fdfdfd;") + a + n + t;
  },
  getShieldSub: function (e, o) {
    return (R.get(e) ? "background:" + R.get(e) : "background:" + k) + (o ? "color:" + o + ";" : "color:#fdfdfd;") + a + "border-radius:0 5px 5px 0 ;margin:0px 5px 0px 0px;padding: 5px 8px 5px 5px;";
  },
  getShieldTitle: function (e, o) {
    return (R.get(e) ? "background:" + R.get(e) : "background-image: linear-gradient(to bottom, #5f5f5f, #4d4d4d);") + (o ? "color:" + o + ";" : "color:#fdfdfd;") + a + "border-radius:5px 0 0 5px;";
  },
  getStyle: function (e, o) {
    return (e ? "background:" + e + ";" : "background:" + g + ";") + (o ? "color:" + o + ";" : "color:#fdfdfd;") + a + n + t;
  }
}), _dependency.cclegacy._RF.push({}, "3bd13OQzeFAB5n8UFYtqU62", "LogUtils", void 0);
var r,
  t = "margin:1px 5px 1px 1px;",
  n = "border-radius:5px;",
  a = 'font-family:"微軟正黑體","Verdana", "Arial","Helvetica";font-weight: 900;font-size:12px;text-shadow:.05rem .05rem #202327;padding: 5px 5px;',
  i = _publish("red", "#a22041"),
  l = (_publish("red_dark", "#B15560"), _publish("orange", "#bb5548")),
  d = (_publish("orange_dark", "#B67766"), _publish("yellow", "#7b6319"), _publish("yellow_light", "#f8d75b"), _publish("yellow_medium", "#917730"), _publish("yellow_dark", "#bb944b")),
  g = _publish("green", "#8F9650"),
  u = (_publish("green_light", "#9DBEA9"), _publish("green_medium", "#478384")),
  c = _publish("green_dark", "#849B5A"),
  p = _publish("blue", "#4073a8"),
  f = (_publish("blue_light", "#6fa0c8"), _publish("blue_medium", "#3e62ad"), _publish("blue_dark", "#6A87A3"), _publish("purple", "#6e5b70")),
  b = (_publish("purple_light", "#857e95"), _publish("purple_medium", "#604e61"), _publish("purple_dark", "#8E7291")),
  s = (_publish("pink", "#a64d79"), _publish("pink_light", "#cc7eb1")),
  m = _publish("pink_dark", "#B47686"),
  _ = _publish("grey", "#606369"),
  y = (_publish("grey_light", "#808389"), _publish("grey_medium", "#5d808f"), _publish("grey_dark", "#879CAD"), _publish("class_color", "#B98A82"), _publish("function_color", "#86a092"), _publish("arg_color", "#9B8D8C"), _publish("warn_color", "#b57f14"));
_publish("error_color", "#90403e");
!function (e) {
  e[e.Request = 0] = "Request", e[e.Response = 1] = "Response", e[e.XRequest = 2] = "XRequest", e[e.XResponse = 3] = "XResponse", e[e.Important = 4] = "Important", e[e.Manager = 5] = "Manager", e[e.Function = 6] = "Function", e[e.Logic = 7] = "Logic", e[e.Info = 8] = "Info", e[e.Watch = 9] = "Watch", e[e.Core = 10] = "Core", e[e.Notify = 11] = "Notify", e[e.ToDo = 12] = "ToDo";
}(r || (r = _publish("KeyStyle", {})));
var x = new Map([[r.Request, f], [r.Response, b], [r.XRequest, m], [r.XResponse, s], [r.Important, i], [r.Manager, c], [r.Function, d], [r.Logic, g], [r.Info, p], [r.Watch, u], [r.Core, _], [r.Notify, y], [r.ToDo, l]]);
var h,
  k = "linear-gradient(to bottom, #8f8f8f, #7d7d7d);";
!function (e) {
  e[e.Red = 0] = "Red", e[e.Orange = 1] = "Orange", e[e.Yellow = 2] = "Yellow", e[e.Green = 3] = "Green", e[e.Yellowgreen = 4] = "Yellowgreen", e[e.Lightgrey = 5] = "Lightgrey", e[e.Blue = 6] = "Blue", e[e.Purple = 7] = "Purple";
}(h || (h = _publish("ShieldKey", {})));
var R = new Map([[h.Red, "linear-gradient(to bottom, #c73821, #b83b27);"], [h.Orange, "linear-gradient(to bottom, #c06434, #af5b30);"], [h.Yellow, "linear-gradient(to bottom, #b0944b, #917730);"], [h.Green, "linear-gradient(to bottom, #709d4e, #5a7e3f);"], [h.Yellowgreen, "linear-gradient(to bottom, #93951a, #808216);"], [h.Lightgrey, k], [h.Blue, "linear-gradient(to bottom, #4073a8, #3a6898);"], [h.Purple, "linear-gradient(to bottom, #857e95, #6e5b70);"]]);
_dependency.cclegacy._RF.pop();
