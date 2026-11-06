// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./main-Queue";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./slotFramework-SlotFrameworkData";
import * as _dependency8 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "./slotFramework-PlatformModel";
import * as _dependency0 from "./slotFramework-ReplayModel";
import * as _dependency1 from "./slotFramework-UrlModel";
import * as _dependency10 from "./slotFramework-res-type3";
import * as _dependency11 from "./slotFramework-type2";
import * as _dependency12 from "./slotFramework-MarqueeItem";
import * as _dependency13 from "./main-UrlUtils";
var _export;
export { _export as Marquee };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Marquee":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, i, r, o, s, u, l, p, c, d, f, h, m, y, g, E, v, M, w, A, T, U, _, P;
var C, S, R, O, b;
_dependency2.cclegacy._RF.push({}, "db544LlkjJGYYtTKks29ac+", "Marquee", void 0);
var L = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("Marquee", (C = L("Marquee"), S = _dependency6.inject("content/msgContent", _dependency2.Node), C((b = _dependency.applyDecoratedDescriptor((O = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "msgContent", b, _dependency.assertThisInitialized(t)), t.taskQueue = void 0, t.tempTweenArray = [], t.MARQUEE_SPEED = 100, t.MARQUEE_DELAY_FACTOR = 1.5, t.ITEM_OFFSET_Y = 3, t.announcementMap = new Map(), t;
  }
  _dependency.inheritsLoose(t, e);
  var s = t.prototype;
  return s.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, s.init = function () {
    this.hide(), this.taskQueue = new _dependency5.default(), this.createMarqueePool();
  }, s.test = function () {
    for (var e = 0; e < 10; e++) {
      dispatch(_dependency8.SlotFrameworkEvent.NOTIFY_SYSTEM_RESPONSE, {
        data: {
          data: {
            html: '<span class="news-notify news">test</span><span class="news-notify news">test2</span>',
            text: "test"
          },
          expiredAt: 1720066998753,
          shiftTime: 3,
          type: "system"
        }
      });
    }
  }, s.createMarqueePool = function () {
    for (var e = this.data.getData().filePaths.marqueeItemPrefab, t = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], e).data, n = App.pool.getPool("MARQUEE_POOL"), a = 0; a < 10; a++) {
      var i = _dependency2.instantiate(t);
      n.cloneNode = i, n.put(i);
    }
  }, s.createLabel = function (e) {
    var t = this,
      n = App.pool.getPool("MARQUEE_POOL").get();
    return n.getComponent(_dependency12.MarqueeItem).setMessage(e), n.on(_dependency2.Node.EventType.TOUCH_END, function () {
      if (null != e.replayUrl) {
        var n = _dependency13.default.getParam("gn", e.replayUrl);
        if (n === _dependency1.default.searchParams.gn) {
          if (!t.isSpining() && e && e.replayUrl) {
            var a = _dependency13.default.getHostname(),
              i = new URL(e.replayUrl),
              r = {
                text: App.getLanguage("replayTitle", [], _dependency3.EBundles[_dependency3.EBundles.slotFramework]),
                confirmCb: function (n) {
                  App.globalAudio.pauseMusic(), i.hostname = a;
                  var r = i.searchParams.get("view_mode"),
                    o = _dependency13.default.getViewModeParam();
                  r !== o && i.searchParams.set("view_mode", o), e.replayUrl = i.toString();
                  var s = _dependency9.default.getData(),
                    u = s.disableRotate,
                    l = void 0 !== u && u,
                    p = s.hideUserInfo,
                    c = void 0 !== p && p;
                  1 == l && (e.replayUrl = e.replayUrl + "&disableRotate=true"), 1 == c && (e.replayUrl = e.replayUrl + "&hideUserInfo=true"), t.redirectTo(e.replayUrl), dispatch(_dependency8.SlotFrameworkEvent.PLAY_CLICK_BTM);
                },
                cancelCb: function (e) {},
                bbrCb: function (e) {}
              };
            App.gameAlert.show(r);
          }
        } else Log.e("目前只能重播自己的遊戲:::::", n, _dependency1.default.searchParams.gn);
      } else Log.e("replay url is undefined");
    }, n.getComponent(_dependency12.MarqueeItem)), n.setParent(this.msgContent), n;
  }, s.playMarqueeAnim = function () {
    var e = this;
    if (0 === this.tempTweenArray.length && !this.taskQueue.isEmpty()) {
      this.show();
      var t = this.taskQueue.dequeue(),
        n = this.createLabel(t),
        a = n.getComponent(_dependency2.UITransform),
        i = this.msgContent.getComponent(_dependency2.UITransform);
      n.setPosition(i.width / 2, this.ITEM_OFFSET_Y);
      var r = (i.width + a.width * this.MARQUEE_DELAY_FACTOR) / this.MARQUEE_SPEED,
        o = _dependency2.tween(n).bindNodeState(false).to(r, {
          position: _dependency2.v3(-i.width / 2 + -a.width * this.MARQUEE_DELAY_FACTOR, this.ITEM_OFFSET_Y, 0)
        }).call(function () {
          n.getComponent(_dependency12.MarqueeItem).reset(), App.pool.getPool("MARQUEE_POOL").put(n), 0 === e.msgContent.children.length && e.hide(), null != t.id && e.announcementMap.get(t.id) && e.announcementMap.delete(t.id);
        }).start();
      this.tempTweenArray.push(o), this.scheduleOnce(function () {
        var t = a.width / e.MARQUEE_SPEED;
        e.scheduleOnce(function () {
          e.tempTweenArray.pop(), e.playMarqueeAnim();
        }, t + .5);
      });
    }
  }, s.isSpining = function () {
    return App.dataCenter.get(_dependency7.default).getData().spinStatus === _dependency11.ESpinStatus.SPINING;
  }, s.redirectTo = function (e) {
    window.location.href = e;
  }, s.reset = function () {}, s.setData = function (e) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    e.prototype.addEvents.call(this), this.on(_dependency8.SlotFrameworkEvent.NOTIFY_SYSTEM_RESPONSE, function (e) {
      if (!_dependency0.default.isReplay && t.taskQueue) {
        var n = e.data,
          a = n.data,
          i = n.replayUrl;
        if (!(t.taskQueue.size() > 100)) {
          var o = _dependency.extends({}, a, {
            replayUrl: i
          });
          if (a.winType) {
            if (!Object.values(_dependency10.ENotifyWinTypes).includes(a.winType)) return;
            t.taskQueue.enqueue(o), t.playMarqueeAnim();
          } else {
            if (a.id && t.announcementMap.get(a.id)) return;
            var s = o.text,
              u = [];
            s && (u = s.split("|"));
            for (var l = 0; l < u.length; l++) if ("" != u[l]) {
              var p = {
                game: o.game,
                player: o.player,
                win: o.win,
                winType: o.winType,
                roomNumber: o.roomNumber,
                replayUrl: o.replayUrl,
                gameCode: o.gameCode,
                text: u[l],
                id: a.id
              };
              t.taskQueue.enqueue(p);
            }
            if ("" == a.text) return;
            t.announcementMap.set(a.id, a), t.playMarqueeAnim();
          }
        }
      }
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), t;
}(_dependency4.default)).prototype, "msgContent", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = O)) || R));
_dependency2.cclegacy._RF.pop();
