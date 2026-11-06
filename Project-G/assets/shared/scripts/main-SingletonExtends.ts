// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as SingletonExtends };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingletonExtends":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t;
_dependency.cclegacy._RF.push({}, "1dadeUDcThH8oh7TgbXHTJ/", "SingletonExtends", void 0);
_publish("SingletonExtends", function () {
  function n() {}
  return n.instance = function () {
    return this._instance || (this._instance = new this()), this._instance;
  }, n.destory = function () {
    this._instance = null;
  }, n;
}());
_dependency.cclegacy._RF.pop();
