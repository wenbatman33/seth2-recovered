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
var _export5;
export { _export5 as TH };
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
    case "TH":
      _export5 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a;
_dependency.cclegacy._RF.push({}, "8b900C2H0RJMornoM9EaYqG", "GameLanguages", void 0);
_publish("ZH_TW", {
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
}), _publish("ZH_CN", {
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
}), _publish("EN", {
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
}), _publish("VN", {
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
}), _publish("TH", {
  language: "th",
  data: {
    confirm: "แน่นอน",
    cancel: "ยกเลิก",
    feather: "ขนนก",
    lotus: "ดอกบัว",
    fang: "เขี้ยว",
    dragonClaw: "กรงเล็บมังกร",
    scale: "เครื่องชั่ง",
    lotusRoot: "รากบัว",
    ginseng: "โสม",
    lingzhi: "เห็ดหลินจือ"
  }
});
_dependency.cclegacy._RF.pop();
