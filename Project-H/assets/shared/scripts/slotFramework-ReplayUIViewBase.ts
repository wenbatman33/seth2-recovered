// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Decorators";
import * as _dependency4 from "./main-UrlUtils";
import * as _dependency5 from "./slotFramework-ExitUtils";
import * as _dependency6 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./slotFramework-NoTouchingView";
import * as _dependency8 from "./slotFramework-ReplayModel";
import * as _dependency9 from "./main-UIView";
import * as _dependency0 from "./slotFramework-SlotFrameworkData";
import * as _dependency1 from "./slotFramework-type2";
import * as _dependency10 from "./main-CmmUtils";
var _export;
export { _export as REPLAY_TYPE };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "REPLAY_TYPE":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, i, a, r, s, c, l, u, f, p, h, B, d, b, C, y, E, w, v, A, g, R;
var _, m, S, O, I, P, k, D, U, N, x, L, T, H, z, F, M, Y, q, V, G, W, K;
_dependency2.cclegacy._RF.push({}, "f1f46dRCdhG960lxU+Ps5hi", "ReplayUIViewBase", void 0);
var j = 0,
  J = 1,
  Q = 2,
  X = _publish("REPLAY_TYPE", {
    NONE: 0,
    INFO_BAR: 1,
    BOARD: 2,
    CLOSE: 3
  }),
  Z = _dependency2._decorator.ccclass;
_publish("default", (_ = Z("ReplayUIViewBase"), m = _dependency3.inject("content/infoBarContent", _dependency2.Node), S = _dependency3.inject("content/infoBarContent/playBtn", _dependency2.Node), O = _dependency3.inject("content/infoBarContent/stopBtn", _dependency2.Node), I = _dependency3.inject("content/infoBarContent/quickStopBtn", _dependency2.Node), P = _dependency3.inject("content/infoBarContent/exitBtn", _dependency2.Node), k = _dependency3.inject("content/boardContent", _dependency2.Node), D = _dependency3.inject("content/boardContent/content/boardExitBtn", _dependency2.Node), U = _dependency3.inject("content/boardContent/content/boardAgainBtn", _dependency2.Node), N = _dependency3.inject("content/closeContent", _dependency2.Node), x = _dependency3.inject("content/closeContent/closeBtn", _dependency2.Node), _((H = _dependency.applyDecoratedDescriptor((T = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "infoBarContent", H, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "playBtn", z, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "stopBtn", F, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "quickStopBtn", M, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "exitBtn", Y, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "boardContent", q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "boardExitBtn", V, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "boardAgainBtn", G, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "closeContent", W, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "closeBtn", K, _dependency.assertThisInitialized(n)), n._status = j, n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.start = function () {
    this.init();
  }, r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this), this.removeEvents();
  }, n.getPrefabUrl = function () {
    return "prefabs/ui/ReplayUIViewP";
  }, r.init = function () {
    null === this.closeContent && (this.closeContent = new _dependency2.Node("closeContent"), this.closeBtn = new _dependency2.Node("closeBtn")), this.switchShowContent(X.INFO_BAR), this.playBtn.active = !1, this.stopBtn.active = !0, this.setEventTouch();
  }, r.switchShowContent = function (t) {
    switch (this.boardContent.active = !1, this.infoBarContent.active = !1, this.closeContent.active = !1, t) {
      case X.INFO_BAR:
        this.infoBarContent.active = !0, App.uiManager.close(_dependency7.default);
        break;
      case X.BOARD:
        this.boardContent.active = !0;
        break;
      case X.CLOSE:
        App.uiManager.close(_dependency7.default), this.closeContent.active = !0;
        break;
      default:
        this.boardContent.active = !1, this.infoBarContent.active = !1, this.closeContent.active = !1;
    }
  }, r.exitHandler = function () {
    var t = _dependency5.ExitUtils.getGoBackUrl();
    if (console.error("goBackUrl", t), "disable" !== t) {
      var n = document.referrer,
        e = _dependency4.default.hasParam("gn", n) && _dependency4.default.hasParam("t", n);
      if (_dependency8.default.replayMode === _dependency8.EReplayMode.RANKING_REPLAY) return this.node.destroy(), void dispatch(_dependency6.SlotFrameworkEvent.REPLAY_BACK_TO_GAME);
      console.error("document.referrer", n), console.error("isGameRedirect", e, _dependency4.default.hasParam("gn", n), _dependency4.default.hasParam("t", n)), e ? window.location.href = n : _dependency5.ExitUtils.replayExitWeb();
    }
  }, r.sendWindowsCloseWebView = function () {
    window.parent.postMessage({
      type: "closeWebUiView"
    }, "*");
  }, r.showPlayOrStopBtn = function (t) {
    this.playBtn.active = t, this.stopBtn.active = !t;
  }, r.showReplayBoard = function (t) {
    this.switchShowContent(X.BOARD);
  }, r.showBoardType = function () {
    this.switchShowContent(X.BOARD);
  }, r.hideInfoBarContent = function () {
    this.infoBarContent.active = !1;
  }, r.setEventTouch = function () {
    var t = this;
    this.playBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      _dependency2.game.resume(), t.status = j, t.showPlayOrStopBtn(!1), t.scheduleOnce(function () {
        t.setInteractable(!0);
      }), App.gameAlert.enableBlockInputEvents();
    }), this.stopBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.status = J, t.setInteractable(!1), t.scheduleOnce(function () {
        t.showPlayOrStopBtn(!0), _dependency2.game.pause();
      });
    }), _dependency10.CmmUtils.addBtnClickEvent(this.quickStopBtn, function () {
      t.status !== J && t.quickStop();
    }), _dependency10.CmmUtils.addBtnClickEvent(this.exitBtn, function () {
      t.status !== Q && (t.status = Q, t.exitHandler(), _dependency8.default.replayMode === _dependency8.EReplayMode.RANKING_REPLAY && _dependency2.game.resume());
    }), this.closeBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.status !== J && (t.status = Q, t.exitHandler());
    }), this.boardExitBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.exitHandler();
    }), this.boardAgainBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.status = j, t.boardAgainBtnHandler();
    }), this.onI(_dependency2.Input.EventType.KEY_UP, function (n) {
      var e = n.keyCode;
      t.status !== J && e === _dependency2.KeyCode.SPACE && t.slotData.spinStatus === _dependency1.ESpinStatus.SPINING && t.quickStop && t.quickStop();
    });
  }, r.setInteractable = function (t) {
    this.quickStopBtn.getComponent(_dependency2.Button).interactable = t;
  }, r.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency6.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT, function (t) {
      App.uiManager.close(_dependency7.default), n.switchShowContent(X.BOARD);
    }), this.on(_dependency6.SlotFrameworkEvent.HIDE_REPLAY_INFO_BAR, function (t) {
      n.hideInfoBarContent();
    });
  }, r.removeEvents = function () {
    this.off(_dependency6.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT), this.off(_dependency6.SlotFrameworkEvent.HIDE_REPLAY_INFO_BAR);
  }, _dependency.createClass(n, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }, {
    key: "status",
    get: function () {
      return this._status;
    },
    set: function (t) {
      this._status = t;
    }
  }]), n;
}(_dependency9.default)).prototype, "infoBarContent", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(T.prototype, "playBtn", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(T.prototype, "stopBtn", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(T.prototype, "quickStopBtn", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(T.prototype, "exitBtn", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(T.prototype, "boardContent", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(T.prototype, "boardExitBtn", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(T.prototype, "boardAgainBtn", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(T.prototype, "closeContent", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(T.prototype, "closeBtn", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = T)) || L));
_dependency2.cclegacy._RF.pop();
