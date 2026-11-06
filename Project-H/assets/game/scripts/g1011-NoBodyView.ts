// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "./g1011-GameData";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./g1011-GameEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-type2";
import * as _dependency9 from "../../shared/scripts/main-CmmUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "../../shared/scripts/main-Bundles";
import * as _dependency10 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency11 from "./g1011-StaticData";
var _export;
export { _export as NoBodyView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "NoBodyView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, i, o, a, r, s, l, u, c, d, h, p, f, S, m, g, y, k, E, b, C, v, _;
var T, L;
_dependency2.cclegacy._RF.push({}, "eb583OrWHFKiJgLgJqMDYUT", "NoBodyView", void 0);
var D = _dependency2._decorator.ccclass,
  O = "空轉",
  w = "FG",
  N = "FG_加局",
  R = "FG_無連線贏分",
  B = "平轉",
  P = "全盤",
  U = "跑馬燈",
  H = "咪牌_進入",
  A = "咪牌_沒中",
  I = "BIG",
  F = "SUPER",
  G = "MEGA",
  W = "ULTRA",
  M = "LEGENDARY",
  K = 120,
  V = 32,
  q = 20,
  Y = 22,
  J = 3,
  j = {
    enableLabel: new _dependency2.Color("#ffffff"),
    enableOutline: new _dependency2.Color("#3e7a5c"),
    enableBg: new _dependency2.Color("#7eab8d"),
    disableLabel: new _dependency2.Color("#aaaaaa"),
    disableOutline: new _dependency2.Color("#000000")
  };
_publish("NoBodyView", D("NoBodyView")(((L = function (e) {
  var _nativeConstructor = i;
  function i() {
    for (var n, t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
    return (n = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).optionBtnList = [], n.oldTick = _dependency2.director.tick, n._speed = 1, n._pressed = new Set(), n;
  }
  _dependency.inheritsLoose(i, e);
  var o = i.prototype;
  return o.start = function () {
    this.node.active = !1;
  }, o.onDestroy = function () {
    this.removeEvents(), _dependency2.director.tick = this.oldTick, e.prototype.onDestroy.call(this);
  }, o.removeEvents = function () {
    this.off(_dependency7.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), this.off(_dependency7.GameEvent.DROP_TREASURE_RESULT_RESP), this.off(_dependency6.SlotFrameworkEvent.UPDATE_SPIN_STATUS);
  }, o.addEvents = function () {
    var e = this;
    this.on(_dependency7.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function () {
      return e.clearStyle();
    }), this.on(_dependency7.GameEvent.DROP_TREASURE_RESULT_RESP, function () {
      return e.clearStyle();
    }), this.on(_dependency6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      e.data === _dependency8.ESpinStatus.SPINING && (i.isOpting = !0);
    }), this.onI(_dependency2.Input.EventType.KEY_DOWN, this.onKeyDown);
  }, o.onKeyUp = function (e) {
    this._pressed.delete(e.keyCode);
  }, o.onKeyDown = function (e) {}, o.makeSpinHandler = function (e) {
    return function () {
      Log.d("%c makeSpinHandler ", _dependency10.getKeyStyle(_dependency10.KeyStyle.Watch), e()), dispatch(_dependency7.GameEvent.START_SPIN, {
        data: {
          spinId: null,
          spinData: e()
        }
      });
    };
  }, o.buildAllOptions = function () {
    var e = this;
    return [{
      key: O,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.emptySpin;
      })
    }, {
      key: B,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.normalSpin;
      })
    }, {
      key: P,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.fullCombo;
      })
    }, {
      key: H,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.listenFreeSpinEnter;
      })
    }, {
      key: A,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.listenFreeSpinMiss;
      })
    }, {
      key: w,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.freeSpin;
      })
    }, {
      key: N,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.freeSpinRetrigger;
      })
    }, {
      key: R,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.freeSpinWinNoLine;
      })
    }, {
      key: I,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.bigWin;
      })
    }, {
      key: F,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.superWin;
      })
    }, {
      key: G,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.megaWin;
      })
    }, {
      key: W,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.ultraWin;
      })
    }, {
      key: M,
      handler: this.makeSpinHandler(function () {
        return _dependency11.StaticData.legendaryWin;
      })
    }, {
      key: U,
      handler: function () {
        return e.dispatchMarqueeTest();
      }
    }];
  }, o.getVisibleOptions = function () {
    var e = new Set([O, B, P, A, H, w, N, R, I, F, G, W, M]);
    return this.buildAllOptions().filter(function (n) {
      return e.has(n.key);
    });
  }, o.dispatchMarqueeTest = function () {}, o.createOptionBtn = function (e) {
    var n = this,
      t = this.node.getChildByName("list");
    t ? (e.forEach(function (e, o) {
      var a,
        r = _dependency9.CmmUtils.createNode("按鈕" + o, {
          Button: !0,
          subLabel: !0
        });
      r.name = e.key, r.setParent(t), n.optionBtnList.push(r);
      var s = r.getComponentInChildren(_dependency2.Label);
      s.fontSize = q, s.lineHeight = Y, s.string = e.key, null == (a = r.getChildByName("Label")) || a.addComponent(_dependency2.LabelOutline);
      var h = r.getComponent(_dependency2.UITransform);
      h.width = K, h.height = V, n.setTouchDisable(r), _dependency9.CmmUtils.addDoubleClickProtection(r, function () {
        i.isOpting || (i.isOpting = !0, e.handler());
      }), r.on(_dependency2.NodeEventType.TOUCH_START, function () {
        i.isOpting || n.setTouchEnable(r);
      }, n), r.on(_dependency2.NodeEventType.TOUCH_CANCEL, function () {
        i.isOpting || n.setTouchDisable(r);
      }, n);
    }), this.scheduleOnce(function () {
      var e = n.node.getChildByName("mask");
      if (e) {
        var i = t.getComponent(_dependency2.UITransform),
          o = e.getComponent(_dependency2.UITransform);
        o.width = i.width, o.height = i.height;
      }
    }, 0)) : Log.d('%c NoBodyView: 找不到 "list" 子節點', _dependency10.getKeyStyle(_dependency10.KeyStyle.Watch));
  }, o.setTouchEnable = function (e) {
    e.getComponentInChildren(_dependency2.Label).color = j.enableLabel;
    var n = e.getChildByName("Label").getComponent(_dependency2.LabelOutline);
    n.width = J, n.color = j.enableOutline;
    var t = this.slotData.getData().filePaths.commonSpDir,
      i = e.getComponent(_dependency2.Sprite);
    i.spriteFrame = _dependency0.LoadUtils.getDirSp(_dependency1.EBundles[_dependency1.EBundles.slotFramework], t, "bg_s"), i.color = j.enableBg;
    var o = e.getComponent(_dependency2.UITransform);
    o.width = K, o.height = V;
  }, o.setTouchDisable = function (e) {
    e.getComponentInChildren(_dependency2.Label).color = j.disableLabel;
    var n = e.getChildByName("Label").getComponent(_dependency2.LabelOutline);
    n.width = J, n.color = j.disableOutline, e.getComponent(_dependency2.Sprite).spriteFrame = null;
  }, o.clearStyle = function () {
    var e = this;
    i.isOpting = !1, this.optionBtnList.forEach(function (n) {
      return e.setTouchDisable(n);
    });
  }, o.showOption = function () {
    this.node.active = !this.node.active;
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "speed",
    get: function () {
      return this._speed;
    },
    set: function (e) {
      var n = this;
      this._speed = e, _dependency2.director.tick = function (e) {
        return n.oldTick.call(_dependency2.director, e * n._speed);
      };
    }
  }]), i;
}(_dependency3.default)).isOpting = !1, T = L)) || T);
_dependency2.cclegacy._RF.pop();
