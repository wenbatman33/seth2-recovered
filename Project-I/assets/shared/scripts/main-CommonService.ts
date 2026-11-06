// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmdDefines";
import * as _dependency4 from "./main-Config";
import * as _dependency5 from "./main-Service";
import * as _dependency6 from "./main-ReconnectHandler";
var _export;
export { _export as CommonService };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CommonService":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, r, c, a, s;
_dependency2.cclegacy._RF.push({}, "aad07lPwddEKJJ1ajESY2A1", "CommonService", void 0);
_publish("CommonService", function (t) {
  var _nativeConstructor = i;
  function i() {
    var e;
    return (e = Reflect.construct(t, [], new.target || _nativeConstructor) || this).ip = "localhost", e.port = 3e3, e.protocol = "ws", e.url = "", e.opts = null, e._maxEnterBackgroundTime = _dependency4.Config.MAX_INBACKGROUND_TIME, e._backgroundTimeOutId = -1, e;
  }
  _dependency.inheritsLoose(i, t);
  var a = i.prototype;
  return a.init = function () {
    t.prototype.init.call(this), Log.d("[" + this.module + "] init"), Log.d("[" + this.module + "] this.clientType", this.clientType), this.reconnectHandler = new _dependency6.ReconnectHandler(this);
  }, a.connect = function () {
    Log.d("this.clientType", this.clientType, this.url), "websocket" === this.clientType ? t.prototype.connect_server.call(this, this.ip, this.port, this.protocol) : t.prototype.connect_server_io.call(this, this.url, this.opts);
  }, a.sendHeartbeat = function () {
    this.heartbeat ? this.send(new this.heartbeat()) : Log.e("請先設定心跳解析型別");
  }, a.getMaxHeartbeatTimeOut = function () {
    return t.prototype.getMaxHeartbeatTimeOut.call(this);
  }, a.getHeartbeatInterval = function () {
    return t.prototype.getHeartbeatInterval.call(this);
  }, a.onHeartbeatTimeOut = function () {
    Log.w(this.module + " 心跳超時，您已經斷開網路"), this.close(), App.serviceManager.reconnect(this);
  }, a.isHeartBeat = function (t) {
    return t.cmd == String(_dependency3.MainCmd.CMD_SYS) + String(_dependency3.SUB_CMD_SYS.CMD_SYS_HEART);
  }, a.onEnterBackground = function () {
    if (!this.data.isLoginStage()) {
      var t = this;
      t._backgroundTimeOutId = setTimeout(function () {
        Log.d("進入後臺時間過長，主動關閉網路，等玩家切回前臺重新連線網路"), t.close(), App.alert.close(_dependency4.Config.RECONNECT_ALERT_TAG);
      }, 1e3 * t.maxEnterBackgroundTime);
    }
  }, a.onEnterForgeground = function (t) {
    if (-1 != this._backgroundTimeOutId) {
      if (Log.d("清除進入後臺的超時關閉網路定時器"), clearTimeout(this._backgroundTimeOutId), Log.d("在後臺時間" + t + " , 最大時間為: " + this.maxEnterBackgroundTime), this.data.isLoginStage()) return;
      t > this.maxEnterBackgroundTime && (Log.d("從回臺切換，顯示重新連線網路"), this.close(), App.alert.close(_dependency4.Config.RECONNECT_ALERT_TAG), App.serviceManager.reconnect(this));
    }
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.stageData;
    }
  }, {
    key: "maxEnterBackgroundTime",
    get: function () {
      return this._maxEnterBackgroundTime;
    },
    set: function (t) {
      (t < _dependency4.Config.MIN_INBACKGROUND_TIME || t > _dependency4.Config.MAX_INBACKGROUND_TIME) && (t = _dependency4.Config.MIN_INBACKGROUND_TIME), Log.d(this.module, "maxEnterBackgroundTime " + t), this._maxEnterBackgroundTime = t;
    }
  }]), i;
}(_dependency5.Service));
_dependency2.cclegacy._RF.pop();
