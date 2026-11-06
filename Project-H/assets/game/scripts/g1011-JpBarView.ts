// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1011-GameData";
import * as _dependency5 from "../../shared/scripts/main-CmmUtils";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "./g1011-GameEvent";
import * as _dependency9 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency0 from "./g1011-ThisProjectUtils";
import * as _dependency1 from "../../shared/scripts/slotFramework-PlatformModel";
var _export;
export { _export as JpBarView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "JpBarView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, r, n, i, a, s, o, u, p, c, m, l, h, f, b, j, N, y, d, A, J, g;
var w, x, P, T, v, E, k, C, I;
_dependency2.cclegacy._RF.push({}, "85af9cecWRPbYgyLo/H6nOr", "JpBarView", void 0);
var O = _dependency2._decorator.ccclass,
  R = _dependency2._decorator.property;
_publish("JpBarView", (w = O("JpBarView"), x = R(_dependency2.UIOpacity), P = R(_dependency2.Label), T = R(_dependency2.Label), w((k = _dependency.applyDecoratedDescriptor((E = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "jpInfoOpacity", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "jpNameText", C, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "JpNumberText", I, _dependency.assertThisInitialized(e)), e.jpIndex = 0, e.jpNumberArray = [0, 0, 0, 0, 0], e.switchJPAnimController = null, e.tweenMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var u = e.prototype;
  return u.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, u.start = function () {
    this.init();
  }, u.onDestroy = function () {
    this.removeEvents(), t.prototype.onDestroy.call(this);
  }, u.removeEvents = function () {
    this.off(_dependency8.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency7.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE), this.off(_dependency7.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN);
  }, u.init = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (null !== this.JpNumberText) {
              t.next = 5;
              break;
            }
            return t.next = 3, _dependency0.delay(.3);
          case 3:
            t.next = 0;
            break;
          case 5:
            this.JpNumberText.string = "0.00", _dependency9.default.isReplay && ((e = this.data.replayData.betData.replayMeta.pool)["jp-mini"] && (this.jpNumberArray[1] = e["jp-mini"]), e["jp-minor"] && (this.jpNumberArray[2] = e["jp-minor"]), e["jp-major"] && (this.jpNumberArray[3] = e["jp-major"]), e["jp-grand"] && (this.jpNumberArray[4] = e["jp-grand"]), this.updateJPNumber()), this.switchJPAnimController = this.switchJPAnim();
          case 8:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), u.setJackpotValue = function (t) {
    var e = t.data;
    this.jpNumberArray[1] = e["jp-mini"], this.jpNumberArray[2] = e["jp-minor"], this.jpNumberArray[3] = e["jp-major"], this.jpNumberArray[4] = e["jp-grand"];
  }, u.dynamicEasingTime = function (t, e, r, n) {
    var i = parseFloat(t.string.replace(/,/g, ""));
    if (0 !== i) {
      if (this.tweenMap.get(r) && _dependency2.Tween.stopAllByTag(_dependency5.CmmUtils.hashCode(r)), i > e) t.string = _dependency6.CmmSlotUtils.formatNumber(e, !0, !0, 2, n);else if (e - i > 100) t.string = _dependency6.CmmSlotUtils.formatNumber(e, !0, !0, 2, n);else {
        var a = {
            label: t,
            start: i,
            end: e,
            tweenTime: .5,
            digital: 2,
            useThousandsSeparator: !0,
            isRounding: !1,
            callback: null,
            tag: _dependency5.CmmUtils.hashCode(r)
          },
          s = _dependency6.CmmSlotUtils.tweenJPNum(a);
        this.tweenMap.set(r, s);
      }
    } else t.string = _dependency6.CmmSlotUtils.formatNumber(e, !0, !0, 2, n);
  }, u.switchJPAnim = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e,
        r = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = !1, .5, 3, .5, function () {
              var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
                return _dependency.regeneratorRuntime().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      r.jpInfoOpacity.opacity = 0;
                    case 1:
                      if (e) {
                        t.next = 19;
                        break;
                      }
                      return r.switchJP(), r.updateJPName(), r.updateJPNumber(), t.next = 7, new Promise(function (t) {
                        _dependency2.tween(r.jpInfoOpacity).bindNodeState(false).to(.5, {
                          opacity: 255
                        }).call(function () {
                          return t();
                        }).start();
                      });
                    case 7:
                      if (!e) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt("break", 19);
                    case 9:
                      return t.next = 11, _dependency0.delay(3);
                    case 11:
                      if (!e) {
                        t.next = 13;
                        break;
                      }
                      return t.abrupt("break", 19);
                    case 13:
                      return t.next = 15, new Promise(function (t) {
                        _dependency2.tween(r.jpInfoOpacity).bindNodeState(false).to(.5, {
                          opacity: 0
                        }).call(function () {
                          return t();
                        }).start();
                      });
                    case 15:
                      if (!e) {
                        t.next = 17;
                        break;
                      }
                      return t.abrupt("break", 19);
                    case 17:
                      t.next = 1;
                      break;
                    case 19:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
              return function () {
                return t.apply(this, arguments);
              };
            }()(), t.abrupt("return", {
              stop: function () {
                e = !0;
              }
            });
          case 7:
          case "end":
            return t.stop();
        }
      }, t);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), u.switchJP = function () {
    this.jpIndex++, this.jpIndex >= 5 && (this.jpIndex = 1);
  }, u.updateJPName = function () {
    switch (this.jpIndex) {
      case 1:
        this.jpNameText.string = "MINI";
        break;
      case 2:
        this.jpNameText.string = "MINOR";
        break;
      case 3:
        this.jpNameText.string = "MAJOR";
        break;
      case 4:
        this.jpNameText.string = "GRAND";
    }
  }, u.updateJPNumber = function () {
    switch (this.jpIndex) {
      case 1:
        this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[1], !0), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[1], "jp-mini", !0);
        break;
      case 2:
        this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[2], !0), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[2], "jp-minor", !0);
        break;
      case 3:
        this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[3], !1), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[3], "jp-major", !1);
        break;
      case 4:
        this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[4], !1), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[4], "jp-grand", !1);
    }
  }, u.formatJPNumber = function (t, e) {
    return "" + _dependency6.CmmSlotUtils.formatNumber(t, !0, !0, 2, e);
  }, u.reset = function () {}, u.setData = function (t) {}, u.show = function () {
    this.node.active = !0, this.switchJPAnimController.stop(), this.switchJPAnimController = this.switchJPAnim();
  }, u.hide = function () {
    this.node.active = !1, this.switchJPAnimController.stop();
  }, u.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency7.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, _dependency5.CmmUtils.throttle(function (t) {
      _dependency9.default.isReplay || e.setJackpotValue(t.data);
    })), this.on(_dependency7.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      0 == _dependency1.default.getData().jackpotOn && (e.node.active = !1);
    }), this.on(_dependency8.GameEvent.PARSER_REPLAY_COMPLETED, function (t) {
      var r = e.data.replayData.betData.replayMeta.pool;
      r["jp-mini"] && (e.jpNumberArray[1] = r["jp-mini"]), r["jp-minor"] && (e.jpNumberArray[2] = r["jp-minor"]), r["jp-major"] && (e.jpNumberArray[3] = r["jp-major"]), r["jp-grand"] && (e.jpNumberArray[4] = r["jp-grand"]), e.updateJPNumber();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "jpInfoOpacity", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(E.prototype, "jpNameText", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(E.prototype, "JpNumberText", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = E)) || v));
_dependency2.cclegacy._RF.pop();

// Display own local pools, never production jackpots.
import { EDITOR as __localPoolEditor } from "cc/env";
import { installJackpotDisplayHooks as __installLocalPools } from "../backend/BonusHooks";
if(!__localPoolEditor)__installLocalPools(_export,undefined,{isReplay:()=>_dependency9.default.isReplay});
