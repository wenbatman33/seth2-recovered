// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1012-GameData";
import * as _dependency6 from "./g1012-GameEvent";
import * as _dependency7 from "./g1012-GameConfigModel";
import * as _dependency8 from "./g1012-types";
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
var n, i, e, a, o, r, s, c, u, l, f, p, d, h, T, y, N, _, b;
var m, A, I, v, S, g, E, w, O;
_dependency2.cclegacy._RF.push({}, "c5c804nUEdBBYkTJnNj8MI4", "TransitionView", void 0);
var M = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TransitionView", (m = M("TransitionView"), A = _dependency4.inject("transitionSpine", _dependency2.sp.Skeleton), I = _dependency4.inject("bg", _dependency2.Node), v = _dependency4.inject("bg/frame", _dependency2.Node), m((E = _dependency.applyDecoratedDescriptor((g = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "transitionSpine", E, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bg", w, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "frame", O, _dependency.assertThisInitialized(n)), n.transitionSymbolNodes = [], n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.transitionSymbolNodes = [];
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    for (var t = _dependency7.default.getData().filePaths.symbolPrefab, n = 0; n < 15; n++) {
      var i = App.cache.get(this.data.module, t).data;
      if (i) {
        var e = _dependency2.instantiate(i);
        this.transitionSymbolNodes.push(e), this.node.addChild(e), e.active = !1;
      }
    }
  }, r.showTransitionIn = function () {
    App.globalAudio.pauseMusic(), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.TRANSITION_IN_AND_OUT
      }
    }), _dependency2.tween(this).bindNodeState(false).delay(1).call(function () {
      dispatch(_dependency6.GameEvent.SHOW_TRANSITION_IN_END);
    }).start();
  }, r.showTransitionOut = function () {
    this.data.currentGameType = _dependency8.EGameType.MAIN_GAME, dispatch(_dependency6.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    }), dispatch(_dependency6.GameEvent.PLAY_BGM, {
      data: _dependency7.EBGM.MAINGAME
    }), dispatch(_dependency6.GameEvent.SHOW_TRANSITION_OUT_END);
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.SHOW_TRANSITION_IN, function (n) {
      t.showTransitionIn();
    }), this.on(_dependency6.GameEvent.SHOW_TRANSITION_OUT, function (n) {
      t.showTransitionOut();
    });
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), n;
}(_dependency3.default)).prototype, "transitionSpine", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(g.prototype, "bg", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(g.prototype, "frame", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = g)) || S));
_dependency2.cclegacy._RF.pop();
