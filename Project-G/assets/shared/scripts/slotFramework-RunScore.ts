// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-CmmSlotUtils";
var _export;
export { _export as RunScore };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "RunScore":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, r, o, n, i, s, c, u, a, l, p;
var h, f;
_dependency2.cclegacy._RF.push({}, "3bdd2ee2RtBy749awYKnz6K", "RunScore", void 0);
_dependency2._decorator.ccclass;
var y = _dependency2._decorator.property;
_publish("RunScore", (f = _dependency.applyDecoratedDescriptor((h = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "_score", f, _dependency.assertThisInitialized(e)), e.label = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.start = function () {
    this.label = this.node.getComponent(_dependency2.Label);
  }, s.runScore = function (t, e, r) {
    void 0 === e && (e = 2), void 0 === r && (r = !1), r ? (this.label.string = _dependency3.CmmSlotUtils.formatNumber(t, !0), this._score = t) : _dependency2.tween(this).bindNodeState(false).to(e, {
      score: t
    }, {
      easing: "quintOut"
    }).start();
  }, s.runZeroScore = function (t, e, r) {
    void 0 === e && (e = 2), void 0 === r && (r = !1), this.score = 0, this.runScore(t, e, r);
  }, _dependency.createClass(e, [{
    key: "score",
    get: function () {
      return this._score;
    },
    set: function (t) {
      this._score = t, this.label && (this.label.string = _dependency3.CmmSlotUtils.formatNumber(this._score, !0));
    }
  }]), e;
}(_dependency2.Component)).prototype, "_score", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), _dependency.applyDecoratedDescriptor(h.prototype, "score", [y], Object.getOwnPropertyDescriptor(h.prototype, "score"), h.prototype), h));
_dependency2.cclegacy._RF.pop();
