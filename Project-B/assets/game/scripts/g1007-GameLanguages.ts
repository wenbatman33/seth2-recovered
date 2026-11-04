// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameLanguages.js
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as ZH_TW };
var __export_1;
export { __export_1 as ZH_CN };
var __export_2;
export { __export_2 as EN };
var __export_3;
export { __export_3 as VN };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ZH_TW":
      __export_0 = value;
      break;
    case "ZH_CN":
      __export_1 = value;
      break;
    case "EN":
      __export_2 = value;
      break;
    case "VN":
      __export_3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a;
__dependency_0.cclegacy._RF.push({}, "fd0e18UsxJIn7BEr1iET2Cm", "GameLanguages", void 0);
__publish("ZH_TW", {
  language: "zh-tw",
  data: {
    confirm: "確定",
    cancel: "取消",
    feather: "羽毛",
    lotus: "蓮花",
    fang: "尖牙",
    dragonClaw: "龍爪",
    scale: "鱗片",
    lotusRoot: "蓮藕",
    ginseng: "人參",
    lingzhi: "靈芝"
  }
}), __publish("ZH_CN", {
  language: "zh-cn",
  data: {
    confirm: "确定",
    cancel: "取消",
    feather: "羽毛",
    lotus: "莲花",
    fang: "尖牙",
    dragonClaw: "龙爪",
    scale: "鳞片",
    lotusRoot: "莲藕",
    ginseng: "人参",
    lingzhi: "灵芝"
  }
}), __publish("EN", {
  language: "en",
  data: {
    confirm: "Sure",
    cancel: "Cancel",
    feather: "Feather",
    lotus: "Lotus",
    fang: "Fang",
    dragonClaw: "Dragon Claw",
    scale: "Scale",
    lotusRoot: "Lotus Root",
    ginseng: "Ginseng",
    lingzhi: "Lingzhi"
  }
}), __publish("VN", {
  language: "vn",
  data: {
    confirm: "Xác nhận",
    cancel: "Xoá bỏ",
    feather: "Lông chim",
    lotus: "Hoa sen",
    fang: "Răng nanh",
    dragonClaw: "Chân rồng",
    scale: " Vảy cá",
    lotusRoot: "Củ sen",
    ginseng: "Nhân sâm",
    lingzhi: "Linh chi"
  }
});
__dependency_0.cclegacy._RF.pop();
