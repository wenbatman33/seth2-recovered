// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
import * as _dependency4 from "./main-Net";
import * as _dependency5 from "./main-Message";
import * as _dependency6 from "./main-ServerConnector";
import * as _dependency7 from "./main-Process";
var _export;
export { _export as Service };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Service":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var s, t, o, n, c, i, r, a;
_dependency2.cclegacy._RF.push({}, "526ef9AI7RPRo6k9vx5gbA2", "Service", void 0), _publish("Service", function (e) {
  var _nativeConstructor = o;
  function o() {
    for (var s, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
    return (s = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).module = _dependency3.Macro.UNKNOWN, s.excludeType = ["echo"], s.maxEnterBackgroundTime = void 0, s.reconnectHandler = null, s._Process = new _dependency7.Process(), s._Heartbeat = null, s.priority = 0, s.serviceType = _dependency4.Net.ServiceType.Unknown, s;
  }
  _dependency.inheritsLoose(o, e);
  var r = o.prototype;
  return r.onOpen = function (s) {
    e.prototype.onOpen.call(this, s), App.serviceManager.onOpen(s, this);
  }, r.onClose = function (s) {
    e.prototype.onClose.call(this, s), App.serviceManager.onClose(s, this);
  }, r.onError = function (s) {
    e.prototype.onError.call(this, s), App.serviceManager.onError(s, this);
  }, r.onMessage = function (s) {
    this.recvHeartbeat();
    var t = new this._Process.Codec();
    "websocket" === this.clientType ? t.unPack(s) ? this.isHeartBeat(t) ? this.onRecvHeartBeat() : (e.prototype.onMessage.call(this, s), this._Process.onMessage(t)) : Log.e("decode header error") : this.onRecvHeartBeat();
  }, r.onRecvHeartBeat = function () {}, r.addListener = function (e, s, t, o, n) {
    this._Process.addListener(e, s, t, o, n);
  }, r.removeListeners = function (e, s) {
    this._Process.removeListeners(e, s);
  }, r.addMessageQueue = function (e, s, t) {
    void 0 === t && (t = !1), this._Process.addMessageQueue(e, s, t);
  }, r.pauseMessageQueue = function () {
    this._Process.isPause = !0;
  }, r.resumeMessageQueue = function () {
    this._Process.isPause = !1;
  }, r.handMessage = function () {
    this._Process.handMessage();
  }, r.reset = function () {
    this._Process.reset();
  }, r.close = function (s) {
    void 0 === s && (s = !1), this._Process.close(), e.prototype.close.call(this, s);
  }, r.on = function (s, t) {
    e.prototype.on.call(this, s, t);
  }, r.send = function (e, s, t) {
    e instanceof _dependency5.Message ? this.websocketMessage(e) : this.socketIOMessage(e, s, t);
  }, r.sendWithoutCheck = function (e, s, t) {
    e instanceof _dependency5.Message ? this.websocketMessage(e) : this.socketIOMessageWithoutCheck(e, s, t);
  }, r.websocketMessage = function (e) {
    if (this._Process.Codec) {
      if (e.encode()) {
        var s = new this._Process.Codec();
        s.pack(e), this.isHeartBeat(e) || Log.d("send request main cmd : " + e.cmd + " "), "websocket" === this.clientType && this.sendBuffer(s.buffer);
      } else Log.e("encode error");
    } else Log.e("請求指定資料包頭處理型別");
  }, r.socketIOMessage = function (e, s, t) {
    this.emit(e, s, t);
  }, r.socketIOMessageWithoutCheck = function (e, s, t) {
    this.emit(e, s, t);
  }, r.destory = function () {
    this.reconnectHandler && this.reconnectHandler.onDestroy();
  }, _dependency.createClass(o, [{
    key: "Process",
    set: function (e) {
      null != e && (this._Process = new e(), this._Process.serviceType = this.serviceType);
    }
  }, {
    key: "Codec",
    set: function (e) {
      this._Process.Codec = e;
    }
  }, {
    key: "heartbeat",
    get: function () {
      return this._Heartbeat;
    },
    set: function (e) {
      this._Heartbeat = e, this.serviceType = e.type, this._Process.serviceType = e.type;
    }
  }]), o;
}(_dependency6.ServerConnector)).module = _dependency3.Macro.UNKNOWN, _dependency2.cclegacy._RF.pop();
