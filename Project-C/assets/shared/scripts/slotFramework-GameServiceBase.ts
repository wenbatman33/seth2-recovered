// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-CommonService";
import * as _dependency5 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./slotFramework-GameStateModel";
import * as _dependency7 from "./slotFramework-SocketModel";
import * as _dependency8 from "./slotFramework-UrlModel";
import * as _dependency9 from "./slotFramework-type2";
import * as _dependency0 from "./slotFramework-ExitUtils";
import * as _dependency1 from "./slotFramework-CryptoTool";
var _export;
export { _export as GameServiceBase };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameServiceBase":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r, o, s, a, c, i, u, l, p, E, f, d, k;
_dependency2.cclegacy._RF.push({}, "c1c33c7fltGsa/KKjg+HxxA", "GameServiceBase", void 0);
_publish("GameServiceBase", function (e) {
  var _nativeConstructor = s;
  function s() {
    var t;
    return (t = Reflect.construct(e, [], new.target || _nativeConstructor) || this).clientType = "socketIO", t.url = _dependency8.default.socket_url, t.EXCLUDE_CURRENT_EVENT = [_dependency9.ESocketRequestName.UPDATE_SETTINGS, _dependency9.ESocketRequestName.UPDATE_AVATAR, _dependency9.ESocketRequestName.EXTENSION], t.EXCLUDE_STATE_500 = [_dependency9.ESocketRequestName.EXTENSION], t.eventMap = new Map(), t.init(), t;
  }
  _dependency.inheritsLoose(s, e);
  var c = s.prototype;
  return c.onOpen = function (t) {
    e.prototype.onOpen.call(this, t), this.addSocketListeners(), dispatch(_dependency5.SlotFrameworkEvent.WRAPPER_SERVICE_CONNECTED, this);
  }, c.onClose = function (t) {
    e.prototype.onClose.call(this, t), dispatch(_dependency5.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, {
      data: {
        event: t,
        _this: this
      }
    });
  }, c.socketIOMessage = function (e, t, s) {
    var a = this;
    if (this.eventMap.size > 0) {
      var c = [];
      this.eventMap.forEach(function (e, t) {
        c.push(t);
      }), Log.e("error: " + c + " 尚未回應，當前事件:" + e);
      _dependency6.default.getData().spinId && _dependency6.default.getData().spinId, _dependency9.EDebugLogLevel.ERROR, _dependency6.default.getData();
    } else t.request && delete t.request, t = _dependency.extends({}, t, {
      token: _dependency7.default.currentToken,
      locale: _dependency8.default.getData().searchParams.l
    }), this.EXCLUDE_CURRENT_EVENT.includes(e) || this.eventMap.set(e, t), this.emit(e, t, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      var r, c, i, u, p;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (a.EXCLUDE_CURRENT_EVENT.includes(e)) {
              t.next = 3;
              break;
            }
            if (a.eventMap.has(e)) {
              t.next = 3;
              break;
            }
            return t.abrupt("return");
          case 3:
            return Log.d("SocketModel.currentToken:::::::::::::", _dependency7.default.currentToken), t.next = 6, _dependency1.CryptoTool.initKey(_dependency7.default.currentToken);
          case 6:
            if ("string" != typeof n) {
              t.next = 9;
              break;
            }
            t.next = 16;
            break;
          case 9:
            if (!(n instanceof ArrayBuffer)) {
              t.next = 15;
              break;
            }
            return t.next = 12, _dependency1.CryptoTool.decrypt(n);
          case 12:
            n = t.sent, t.next = 16;
            break;
          case 15:
          case 16:
            n.zip && 1 == n.zip && (n.data ? n = JSON.parse(pako.inflate(n.data, {
              to: "string"
            })) : Log.e("no response data::::::::::::::::", n)), c = (r = n).status, i = r.message, u = r.code, p = r.token, 500 === c && (a.EXCLUDE_STATE_500.includes(e) ? Log.e("EXCLUDE_STATE_500::::::::::::::::", e) : a.showAlert(i, {
              needCloseAlert: !1,
              code: u
            })), a.eventMap.delete(e), p && (_dependency7.default.currentToken = p), s && s(n);
          case 22:
          case "end":
            return t.stop();
        }
      }, t);
    })));
  }, c.socketIOMessageWithoutCheck = function (e, t, s) {
    var a = this;
    t.request && delete t.request, t = _dependency.extends({}, t, {
      token: _dependency7.default.currentToken,
      locale: _dependency8.default.getData().searchParams.l
    }), this.emit(e, t, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      var r, c, i, u, p;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, _dependency1.CryptoTool.initKey(_dependency7.default.currentToken);
          case 2:
            if ("string" != typeof n) {
              t.next = 5;
              break;
            }
            t.next = 13;
            break;
          case 5:
            if (!(n instanceof ArrayBuffer)) {
              t.next = 12;
              break;
            }
            return t.next = 8, _dependency1.CryptoTool.decrypt(n);
          case 8:
            n = t.sent, Log.e("decrypt res:::::::::::::", n), t.next = 13;
            break;
          case 12:
          case 13:
            n.zip && 1 == n.zip && (n.data ? n = JSON.parse(pako.inflate(n.data, {
              to: "string"
            })) : Log.e("no response data::::::::::::::::", n)), c = (r = n).status, i = r.message, u = r.code, p = r.token, 500 === c && (a.EXCLUDE_STATE_500.includes(e) ? Log.e("EXCLUDE_STATE_500::::::::::::::::", e) : a.showAlert(i, {
              needCloseAlert: !1,
              code: u
            })), p && (_dependency7.default.currentToken = p), s && s(n);
          case 18:
          case "end":
            return t.stop();
        }
      }, t);
    })));
  }, c.showAlert = function (e, t) {
    var n = {
        text: e,
        confirmCb: function () {
          r(), dispatch(_dependency5.SlotFrameworkEvent.PLAY_CLICK_BTM);
        },
        bbrCb: function () {
          dispatch(_dependency5.SlotFrameworkEvent.PLAY_CLICK_BTM);
        },
        needCloseAlert: null == t ? void 0 : t.needCloseAlert,
        tag: _dependency3.ViewZOrder.TopErrorAlert,
        code: null == t ? void 0 : t.code
      },
      r = function () {
        (null == t ? void 0 : t.callback) && t.callback(), _dependency0.ExitUtils.exit();
      };
    App.gameAlert.show(n, _dependency3.ViewZOrder.TopErrorAlert);
  }, c.addSocketListeners = function () {}, s;
}(_dependency4.CommonService));
_dependency2.cclegacy._RF.pop();
