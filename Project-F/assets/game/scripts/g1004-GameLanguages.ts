// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as ZH_TW };
var _export2;
export { _export2 as ZH_CN };
var _export3;
export { _export3 as EN };
var _export4;
export { _export4 as VN };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ZH_TW":
      _export = value;
      break;
    case "ZH_CN":
      _export2 = value;
      break;
    case "EN":
      _export3 = value;
      break;
    case "VN":
      _export4 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n;
_dependency.cclegacy._RF.push({}, "8b900C2H0RJMornoM9EaYqG", "GameLanguages", void 0);
_publish("ZH_TW", {
  language: "zh-tw",
  data: {
    confirm: "確定",
    cancel: "取消"
  }
}), _publish("ZH_CN", {
  language: "zh-cn",
  data: {
    confirm: "确定",
    cancel: "取消"
  }
}), _publish("EN", {
  language: "en",
  data: {
    confirm: "Sure",
    cancel: "Cancel"
  }
}), _publish("VN", {
  language: "vn",
  data: {
    confirm: "",
    cancel: ""
  }
});
_dependency.cclegacy._RF.pop();
