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
import * as _dependency0 from "./slotFramework-UrlModel";
import * as _dependency1 from "./slotFramework-res-type3";
import * as _dependency10 from "./slotFramework-type2";
import * as _dependency11 from "./slotFramework-LoadUtils";
import * as _dependency12 from "./main-UrlUtils";
var _export;
export { _export as PrizeNotify };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "PrizeNotify":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, a, r, o, s, l, p, u, c, f, d, g, y, h, m, w, v, N, T, P, A, E, I, U;
var b, M, R, L, _, S, z, D, O;
_dependency2.cclegacy._RF.push({}, "b6888fWpDVDrLQN/2uq7exW", "PrizeNotify", void 0);
var F,
  C = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (e) {
  e.BIG = "big", e.SUPER = "super", e.MEGA = "mega", e.ULTRA = "ultra", e.LEGEND = "legend", e.MINI = "mini", e.MINOR = "minor", e.MAJOR = "major", e.GRAND = "grand";
}(F || (F = {}));
_publish("PrizeNotify", (b = C("PrizeNotify"), M = _dependency6.inject("content/icon", _dependency2.Node), R = _dependency6.inject("content/richText", _dependency2.RichText), L = _dependency6.inject("content/hitArea", _dependency2.Node), b((z = _dependency.applyDecoratedDescriptor((S = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "icon", z, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "richText", D, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "hitArea", O, _dependency.assertThisInitialized(t)), t.msgQueue = new _dependency5.default(), t.tween = null, t.prizeFileNameMap = new Map(), t;
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
    this.hide(), this.msgQueue = new _dependency5.default(), this.initPrizeFileNameMap();
  }, s.test = function () {
    for (var e = 0; e < 10; e++) {
      var t = {
        data: {
          text: "恭喜玩家rsgtest00016在戰神塞特獲得Grand彩金42,332,176.01",
          html: "<span>恭喜</span><span class='notify-win-username'>玩家rsgtest00016</span><br><span>在</span><span class='notify-win-game'>[戰神塞特]</span><br><span>获得</span>Grand<span class='notify-win-prize'>42,332,176.01</span><span>彩金</span>",
          game: "戰神塞特",
          player: "JOJO_" + e,
          win: "42,332,176.01",
          winType: "jp-grand"
        },
        expiredAt: 1696238584133,
        shiftTime: 3,
        type: "jp-grand"
      };
      dispatch(_dependency8.SlotFrameworkEvent.NOTIFY_PRIZE_RESPONSE, {
        data: t
      });
    }
  }, s.initPrizeFileNameMap = function () {
    var e = this;
    [{
      winType: _dependency1.ENotifyWinTypes.BIG_WIN,
      file: F.BIG
    }, {
      winType: _dependency1.ENotifyWinTypes.SUPER_WIN,
      file: F.SUPER
    }, {
      winType: _dependency1.ENotifyWinTypes.MEGA_WIN,
      file: F.MEGA
    }, {
      winType: _dependency1.ENotifyWinTypes.ULTRA_WIN,
      file: F.ULTRA
    }, {
      winType: _dependency1.ENotifyWinTypes.LEGENDARY_WIN,
      file: F.LEGEND
    }, {
      winType: _dependency1.ENotifyWinTypes.JP_MINI,
      file: F.MINI
    }, {
      winType: _dependency1.ENotifyWinTypes.JP_MINOR,
      file: F.MINOR
    }, {
      winType: _dependency1.ENotifyWinTypes.JP_MAJOR,
      file: F.MAJOR
    }, {
      winType: _dependency1.ENotifyWinTypes.JP_GRAND,
      file: F.GRAND
    }].forEach(function (t) {
      e.prizeFileNameMap.set(t.winType, t.file);
    });
  }, s.setMessage = function (e) {
    var t = e.player,
      n = e.game,
      i = e.gameCode,
      a = e.win,
      r = "",
      o = App.getLanguage(i, [], _dependency3.EBundles[_dependency3.EBundles.slotFramework]);
    null == o && (o = n);
    var s = App.getLanguage("notifyPrizeMsg", [t, o, a], _dependency3.EBundles[_dependency3.EBundles.wrapper]);
    if (r = r.concat(s), Log.d("messageVO: ", e), null != (null == e ? void 0 : e.roomNumber)) {
      var l = App.getLanguage("notifyAtSomeTable", [null == e ? void 0 : e.roomNumber], _dependency3.EBundles[_dependency3.EBundles.wrapper]);
      r = r.concat("<br/>", l);
    }
    this.richText.string = r;
  }, s.setIcon = function (e) {
    var t = this.prizeFileNameMap.get(e),
      n = this.data.getData().filePaths.prizeNotifySp,
      i = _dependency11.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], n, t);
    this.icon.getComponent(_dependency2.Sprite).spriteFrame = i;
  }, s.playPrize = function (e) {
    var t = this;
    if (!this.msgQueue.isEmpty() && null === this.tween) {
      var n = this.msgQueue.dequeue();
      this.setIcon(n.winType), this.node.active = !0, this.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.tween = _dependency2.tween(this.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).call(function () {
        t.setMessage(n), t.hitArea.on(_dependency2.Node.EventType.TOUCH_END, function () {
          if (null != n.replayUrl) {
            var e = _dependency12.default.getParam("gn", n.replayUrl);
            if (e === _dependency0.default.searchParams.gn) {
              if (!t.isSpining() && n && n.replayUrl) {
                var i = _dependency12.default.getHostname(),
                  a = new URL(n.replayUrl),
                  r = a.searchParams.get("view_mode"),
                  o = _dependency12.default.getViewModeParam();
                r !== o && a.searchParams.set("view_mode", o);
                var s = {
                  text: App.getLanguage("replayTitle", [], _dependency3.EBundles[_dependency3.EBundles.slotFramework]),
                  confirmCb: function (e) {
                    App.globalAudio.pauseMusic(), a.hostname = i, n.replayUrl = a.toString();
                    var r = _dependency9.default.getData(),
                      o = r.disableRotate,
                      s = void 0 !== o && o,
                      l = r.hideUserInfo,
                      p = void 0 !== l && l;
                    1 == s && (n.replayUrl = n.replayUrl + "&disableRotate=true"), 1 == p && (n.replayUrl = n.replayUrl + "&hideUserInfo=true"), t.redirectTo(n.replayUrl), dispatch(_dependency8.SlotFrameworkEvent.PLAY_CLICK_BTM);
                  },
                  cancelCb: function (e) {},
                  bbrCb: function (e) {}
                };
                App.gameAlert.show(s);
              }
            } else Log.e("目前只能重播自己的遊戲:::::", e, _dependency0.default.searchParams.gn);
          } else Log.e("replay url is undefined");
        }, t);
      }).to(.5, {
        opacity: 255
      }).delay(e).to(.5, {
        opacity: 0
      }).call(function () {
        t.hitArea.targetOff(t), _dependency2.Tween.stopAllByTarget(t.node.getComponent(_dependency2.UIOpacity)), t.node.active = !1, t.msgQueue.isEmpty() ? t.tween = null : _dependency2.tween(t).bindNodeState(false).delay(.01).call(function () {
          t.tween = null, t.playPrize(e);
        }).start();
      }).start();
    }
  }, s.isSpining = function () {
    return App.dataCenter.get(_dependency7.default).getData().spinStatus === _dependency10.ESpinStatus.SPINING;
  }, s.redirectTo = function (e) {
    window.location.href = e;
  }, s.reset = function () {}, s.setData = function (e) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    e.prototype.addEvents.call(this), this.on(_dependency8.SlotFrameworkEvent.NOTIFY_PRIZE_RESPONSE, function (e) {
      var n = e.data,
        i = n.shiftTime,
        a = n.data,
        o = n.replayUrl,
        s = a.winType;
      if (Object.values(_dependency1.ENotifyWinTypes).includes(s)) {
        if (!(t.msgQueue.size() > 100)) {
          var l = _dependency.extends({}, a, {
            replayUrl: o
          });
          t.msgQueue.enqueue(l), "hades" != _dependency0.default.searchParams.gn && null === t.tween && t.playPrize(i);
        }
      } else Log.w("warn: 大獎通知資料異常", _dependency1.ENotifyWinTypes, s, a);
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), t;
}(_dependency4.default)).prototype, "icon", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(S.prototype, "richText", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(S.prototype, "hitArea", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = S)) || _));
_dependency2.cclegacy._RF.pop();
