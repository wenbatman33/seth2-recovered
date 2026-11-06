// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameData";
import * as _dependency6 from "./g1002-GameEvent";
import * as _dependency7 from "./g1002-GameConfigModel";
import * as _dependency8 from "./g1002-types";
import * as _dependency9 from "./g1002-GameSymbol";
import * as _dependency0 from "../../shared/scripts/slotFramework-MathUtil";
var _export;
export { _export as TransitionView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TransitionView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, n, e, a, o, s, r, c, l, u, p, h, f, d, S, m, y, v, T, b, g, _;
var N, E, A, G, I, w, M, k, O;
_dependency2.cclegacy._RF.push({}, "c5c804nUEdBBYkTJnNj8MI4", "TransitionView", void 0);
var D = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TransitionView", (N = D("TransitionView"), E = _dependency4.inject("transitionSpine", _dependency2.sp.Skeleton), A = _dependency4.inject("bg", _dependency2.Node), G = _dependency4.inject("bg/frame", _dependency2.Node), N((M = _dependency.applyDecoratedDescriptor((w = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var i, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    return i = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "transitionSpine", M, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "bg", k, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "frame", O, _dependency.assertThisInitialized(i)), i.transitionSymbolNodes = [], i;
  }
  _dependency.inheritsLoose(i, t);
  var s = i.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this), this.transitionSymbolNodes = [];
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {
    for (var t = _dependency7.default.getData().filePaths.symbolPrefab, i = 0; i < 15; i++) {
      var n = App.cache.get(this.data.module, t).data;
      if (n) {
        var e = _dependency2.instantiate(n);
        this.transitionSymbolNodes.push(e), this.node.addChild(e), e.active = !1;
      }
    }
  }, s.showTransitionIn = function () {
    var t = this,
      i = _dependency0.default.flattenArray(this.data.getData().parser.currentGameState.view);
    this.transitionSpine.node.active = !0, this.transitionSpine.skeletonData = this.data.getTransitionSpine("trans_fg"), this.transitionSpine.sockets = [];
    for (var n = 0; n < i.length; n++) {
      var e = this.transitionSymbolNodes[n];
      if (e) {
        var a = e.getComponent(_dependency9.GameSymbol),
          o = new _dependency2.sp.SpineSocket("root/s_" + (n + 1), e);
        this.transitionSpine.sockets.push(o), this.transitionSpine.sockets = this.transitionSpine.sockets, a.setSymbol(i[n], !1), e.active = !0;
      }
    }
    var s = new _dependency2.sp.SpineSocket("root/mg", this.bg);
    this.bg.active = !0, this.frame.active = !0, this.transitionSpine.sockets.push(s), this.transitionSpine.sockets = this.transitionSpine.sockets, this.transitionSpine.clearTracks(), this.transitionSpine.setToSetupPose();
    this.transitionSpine.timeScale = .8, this.scheduleOnce(function () {
      t.transitionSpine.setAnimation(0, "trans_fg", !1);
    }), this.transitionSpine.setCompleteListener(function () {
      t.transitionSpine.node.active = !1;
    }), this.transitionSpine.node.scale = _dependency2.v3(1, 1, 1), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.FG_TRANSITION_IN
      }
    });
    this.data.getData().spinId;
    _dependency2.tween(this).bindNodeState(false).delay(1.3).call(function () {
      for (var i = 0; i < t.transitionSymbolNodes.length; i++) t.transitionSymbolNodes[i].active = !1;
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(2.5).call(function () {
      t.bg.active = !1;
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(2).call(function () {
      t.data.currentGameType = _dependency8.EGameType.FREE_GAME, dispatch(_dependency6.GameEvent.CHANGE_GAME_STYLE, {
        data: !1
      }), dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency7.EBGM.FREEGAME
      }), t.scheduleOnce(function () {
        dispatch(_dependency6.GameEvent.SHOW_TRANSITION_IN_END);
      }, 1);
    }).start();
  }, s.showTransitionOut = function () {
    this.data.currentGameType = _dependency8.EGameType.MAIN_GAME, dispatch(_dependency6.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    }), dispatch(_dependency6.GameEvent.PLAY_BGM, {
      data: _dependency7.EBGM.MAINGAME
    }), dispatch(_dependency6.GameEvent.SHOW_TRANSITION_OUT_END);
  }, s.reset = function () {}, s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.SHOW_TRANSITION_IN, function (i) {
      t.showTransitionIn();
    }), this.on(_dependency6.GameEvent.SHOW_TRANSITION_OUT, function (i) {
      t.showTransitionOut();
    });
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), i;
}(_dependency3.default)).prototype, "transitionSpine", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(w.prototype, "bg", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(w.prototype, "frame", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = w)) || I));
_dependency2.cclegacy._RF.pop();
