// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as ReelDataSetting };
var _export2;
export { _export2 as ReelDataSettingObj };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelDataSetting":
      _export = value;
      break;
    case "ReelDataSettingObj":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
_dependency.cclegacy._RF.push({}, "7f53chreC1I27vZPBNHh4hu", "ReelDataSetting", void 0);
var n = _publish("ReelDataSetting", function () {
  function t() {
    this.key = "reel_data_setting_", this.allStop = !1, this.skipWinScroll = !1, this.nowSpeedIndex = 0, this.userId = void 0, this.speedList = [1, .68, .5, .5], this.expectStrip = void 0;
  }
  var e = t.prototype;
  return e.getAllStop = function () {
    return this.allStop;
  }, e.setAllStop = function (t) {
    this.allStop = t, this.saveData();
  }, e.getSpeedIndex = function () {
    return this.nowSpeedIndex;
  }, e.getSkipWinScroll = function () {
    return this.skipWinScroll;
  }, e.setSpeedIndex = function (t) {
    this.nowSpeedIndex = t, this.allStop = 3 === t, this.skipWinScroll = 3 === t, this.saveData();
  }, e.getSpeed = function () {
    return this.speedList[this.nowSpeedIndex];
  }, e.changeSpeed = function () {
    return this.setSpeedIndex((this.nowSpeedIndex + 1) % this.speedList.length), this.nowSpeedIndex;
  }, e.saveData = function () {
    dispatch(t.CHANGE_SPEED, this.speedList[this.nowSpeedIndex], this.allStop);
  }, e.getData = function () {}, t;
}());
n.CHANGE_SPEED = "REEL_DATA_SETTING_CHANGE_SPEED";
_publish("ReelDataSettingObj", new n());
_dependency.cclegacy._RF.pop();
