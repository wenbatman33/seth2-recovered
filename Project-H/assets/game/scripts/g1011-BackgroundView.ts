// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1011-GameData";
import * as _dependency6 from "./g1011-GameEvent";
import * as _dependency7 from "./g1011-GameConfigModel";
var _export;
export { _export as BackgroundView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BackgroundView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, r, o, c, s, u, f, d, l, E;
var h, p, v, T, A;
_dependency2.cclegacy._RF.push({}, "83e72N9BOdIbocPQwddl1iP", "BackgroundView", void 0);
var _ = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BackgroundView", (h = _("BackgroundView"), p = _dependency4.inject("mainContent", _dependency2.Node), h((A = _dependency.applyDecoratedDescriptor((T = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "mainContent", A, _dependency.assertThisInitialized(e)), e.isFeverTime = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    this.removeEvents(), t.prototype.onDestroy.call(this);
  }, o.init = function () {}, o.changeModel = function (t) {
    this.mainContent.active = t;
  }, o.willTriggerBigWin = function () {
    var t,
      e = this.data.getData();
    if (null == e || null == (t = e.parser) || !t.currentGameState) return !1;
    var n = e.parser.currentGameState,
      i = n.totalWinnings,
      a = n.totalStake;
    if (!i || !a) return !1;
    var r = i / a,
      o = e.parser.winOdds;
    if (!o) return !1;
    for (var c = 0; c < o.length; c++) if (r >= o[c].reachRate) return !0;
    return !1;
  }, o.reset = function () {}, o.setData = function (t) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.changeModel(e.data);
    }), this.on(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED, function (e) {
      t.isFeverTime = !0 === t.data.getData().definition.isLuckyMoment, dispatch(_dependency6.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, {
        data: t.isFeverTime
      }), t.isFeverTime ? dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency7.EBGM.FEVERTIME
      }) : dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency7.EBGM.MAIN_GAME
      });
    }), this.on(_dependency6.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, function (e) {
      var n = 1 == e.data;
      t.isFeverTime !== n && (n ? dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency7.EBGM.FEVERTIME
      }) : t.willTriggerBigWin() || dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency7.EBGM.MAIN_GAME
      })), t.isFeverTime = n;
    });
  }, o.removeEvents = function () {
    this.off(_dependency6.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency6.GameEvent.UPDATE_BAT_FEVERTIME_STATUS);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "mainContent", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = T)) || v));
_dependency2.cclegacy._RF.pop();
