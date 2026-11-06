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
var t, n, r, a, s, o, i, c, u, l, p, f, d, h, E;
_dependency2.cclegacy._RF.push({}, "c1c33c7fltGsa/KKjg+HxxA", "GameServiceBase", void 0);
_publish("GameServiceBase", function (e) {
  var _nativeConstructor = s;
  function s() {
    var t;
    return (t = Reflect.construct(e, [], new.target || _nativeConstructor) || this).clientType = "socketIO", t.url = _dependency8.default.socket_url, t.EXCLUDE_CURRENT_EVENT = [_dependency9.ESocketRequestName.UPDATE_SETTINGS, _dependency9.ESocketRequestName.UPDATE_AVATAR, _dependency9.ESocketRequestName.EXTENSION], t.EXCLUDE_STATE_500 = [_dependency9.ESocketRequestName.EXTENSION], t.eventMap = new Map(), t.handshakeSent = !1, t.init(), t;
  }
  _dependency.inheritsLoose(s, e);
  var i = s.prototype;
  return i.onOpen = function (t) {
    e.prototype.onOpen.call(this, t), this.handshakeSent = !1, this.addSocketListeners(), dispatch(_dependency5.SlotFrameworkEvent.WRAPPER_SERVICE_CONNECTED, this);
  }, i.onClose = function (t) {
    e.prototype.onClose.call(this, t), _dependency1.CryptoTool.clear(), dispatch(_dependency5.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, {
      data: {
        event: t,
        _this: this
      }
    });
  }, i.socketIOMessage = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t, s, o) {
      var i,
        c,
        f,
        h = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (!(this.eventMap.size > 0)) {
              e.next = 7;
              break;
            }
            return i = [], this.eventMap.forEach(function (e, t) {
              i.push(t);
            }), Log.e("error: " + i + " 尚未回應，當前事件:" + t), _dependency6.default.getData().spinId && _dependency6.default.getData().spinId, _dependency9.EDebugLogLevel.ERROR, _dependency6.default.getData(), e.abrupt("return");
          case 7:
            return s.request && delete s.request, c = _dependency.extends({}, s, {
              token: _dependency7.default.currentToken,
              locale: _dependency8.default.getData().searchParams.l
            }), this.EXCLUDE_CURRENT_EVENT.includes(t) || this.eventMap.set(t, c), e.next = 13, this.buildPayload(c);
          case 13:
            f = e.sent, this.emit(t, f, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
              var a, s, i, c, u;
              return _dependency.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (h.EXCLUDE_CURRENT_EVENT.includes(t)) {
                      e.next = 3;
                      break;
                    }
                    if (h.eventMap.has(t)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return e.next = 5, _dependency1.CryptoTool.initKey(_dependency7.default.currentToken);
                  case 5:
                    if ("string" != typeof n) {
                      e.next = 8;
                      break;
                    }
                    e.next = 18;
                    break;
                  case 8:
                    if (!(n instanceof ArrayBuffer)) {
                      e.next = 14;
                      break;
                    }
                    return e.next = 11, _dependency1.CryptoTool.decrypt(n);
                  case 11:
                    n = e.sent, e.next = 18;
                    break;
                  case 14:
                    if (!(n instanceof Uint8Array)) {
                      e.next = 18;
                      break;
                    }
                    return e.next = 17, _dependency1.CryptoTool.decrypt(n);
                  case 17:
                    n = e.sent;
                  case 18:
                    n.zip && 1 == n.zip && (n.data ? n = JSON.parse(pako.inflate(n.data, {
                      to: "string"
                    })) : Log.e("no response data::::::::::::::::", n)), s = (a = n).status, i = a.message, c = a.code, u = a.token, 500 === s && (h.EXCLUDE_STATE_500.includes(t) ? Log.e("EXCLUDE_STATE_500::::::::::::::::", t) : h.showAlert(i, {
                      needCloseAlert: !1,
                      code: c
                    })), h.eventMap.delete(t), u && (_dependency7.default.currentToken = u), o && o(n);
                  case 24:
                  case "end":
                    return e.stop();
                }
              }, e);
            })));
          case 15:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, n, r) {
      return e.apply(this, arguments);
    };
  }(), i.socketIOMessageWithoutCheck = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t, s, o) {
      var i,
        c,
        u = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return s.request && delete s.request, i = _dependency.extends({}, s, {
              token: _dependency7.default.currentToken,
              locale: _dependency8.default.getData().searchParams.l
            }), e.next = 4, this.buildPayload(i);
          case 4:
            c = e.sent, this.emit(t, c, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
              var a, s, i, c, p;
              return _dependency.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, _dependency1.CryptoTool.initKey(_dependency7.default.currentToken);
                  case 2:
                    if ("string" != typeof n) {
                      e.next = 5;
                      break;
                    }
                    e.next = 15;
                    break;
                  case 5:
                    if (!(n instanceof ArrayBuffer)) {
                      e.next = 11;
                      break;
                    }
                    return e.next = 8, _dependency1.CryptoTool.decrypt(n);
                  case 8:
                    n = e.sent, e.next = 15;
                    break;
                  case 11:
                    if (!(n instanceof Uint8Array)) {
                      e.next = 15;
                      break;
                    }
                    return e.next = 14, _dependency1.CryptoTool.decrypt(n);
                  case 14:
                    n = e.sent;
                  case 15:
                    n.zip && 1 == n.zip && (n.data ? n = JSON.parse(pako.inflate(n.data, {
                      to: "string"
                    })) : Log.e("no response data::::::::::::::::", n)), s = (a = n).status, i = a.message, c = a.code, p = a.token, 500 === s && (u.EXCLUDE_STATE_500.includes(t) ? Log.e("EXCLUDE_STATE_500::::::::::::::::", t) : u.showAlert(i, {
                      needCloseAlert: !1,
                      code: c
                    })), p && (_dependency7.default.currentToken = p), o && o(n);
                  case 20:
                  case "end":
                    return e.stop();
                }
              }, e);
            })));
          case 6:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, n, r) {
      return e.apply(this, arguments);
    };
  }(), i.buildPayload = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (this.handshakeSent) {
              e.next = 5;
              break;
            }
            return e.next = 3, _dependency1.CryptoTool.ready();
          case 3:
            return this.handshakeSent = !0, e.abrupt("return", _dependency.extends({}, t, {
              kid: _dependency1.CryptoTool.kid
            }));
          case 5:
            return e.abrupt("return", _dependency.extends({}, t));
          case 6:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), i.showAlert = function (e, t) {
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
  }, i.addSocketListeners = function () {}, s;
}(_dependency4.CommonService));
_dependency2.cclegacy._RF.pop();
