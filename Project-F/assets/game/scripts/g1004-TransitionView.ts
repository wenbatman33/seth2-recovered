// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1004-GameData";
import * as _dependency6 from "./g1004-GameEvent";
import * as _dependency7 from "./g1004-GameConfigModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
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
var n, i, e, o, s, a, r, c, u, l, p, f, h, d, S, T;
var v, _, E, I, N;
_dependency2.cclegacy._RF.push({}, "c5c804nUEdBBYkTJnNj8MI4", "TransitionView", void 0);
var w = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TransitionView", (v = w("TransitionView"), _ = _dependency4.inject("transitionSpine", _dependency2.sp.Skeleton), v((N = _dependency.applyDecoratedDescriptor((I = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
    return n = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "transitionSpine", N, _dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(n, t);
  var a = n.prototype;
  return a.showTransitionIn = function () {
    var t = this,
      n = _dependency7.default.getData().filePaths.transitionsSkeletonData,
      i = _dependency8.LoadUtils.getDirSkeleton(this.data.module, n, "trans");
    this.transitionSpine.node.active = !0, this.transitionSpine.skeletonData = i, this.transitionSpine.clearTracks(), this.transitionSpine.setToSetupPose(), this.transitionSpine.setAnimation(0, "in", !1), this.transitionSpine.setEventListener(function (n, i) {
      t.transitionSpine.setEventListener(null), t.transitionSpine.clearTracks(), t.transitionSpine.setToSetupPose(), t.transitionSpine.setAnimation(0, "loop", !0), dispatch(_dependency6.GameEvent.SHOW_TRANSITION_IN_END);
    }), _dependency2.tween(this).bindNodeState(false).delay(.5).call(function () {
      dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency7.EBGM.FREE_GAME
      });
    }).start();
  }, a.showTransitionOut = function () {
    _dependency2.tween(this).bindNodeState(false).delay(.6).call(function () {
      dispatch(_dependency6.GameEvent.SHOW_TRANSITION_OUT_END);
    }).start();
  }, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, a.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.SHOW_TRANSITION_IN, function (n) {
      t.showTransitionIn();
    }), this.on(_dependency6.GameEvent.SHOW_TRANSITION_OUT, function (n) {
      t.showTransitionOut();
    }), this.on(_dependency6.GameEvent.CLICK_START_FREE_GAME, function (n) {
      t.transitionSpine.node.active = !1;
    });
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), n;
}(_dependency3.default)).prototype, "transitionSpine", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = I)) || E));
_dependency2.cclegacy._RF.pop();
