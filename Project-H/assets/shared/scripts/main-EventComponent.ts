// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventProcessor";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, c, i;
var s;
_dependency2.cclegacy._RF.push({}, "9cde5GFThVAMr5vKTrRR3M4", "EventComponent", void 0);
var r = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", r(s = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var n, e = arguments.length, o = new Array(e), c = 0; c < e; c++) o[c] = arguments[c];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._eventProcessor = new _dependency3.EventProcessor(), n;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.on = function (t, n) {
    this._on({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.once = function (t, n) {
    this._once({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.off = function (t) {
    this._off({
      bind: "Dispatcher",
      type: t
    });
  }, o._on = function (t) {
    t.target || (t.target = this), this._eventProcessor._on(t);
  }, o._once = function (t) {
    t.target || (t.target = this), this._eventProcessor._once(t);
  }, o._off = function (t) {
    t.target || (t.target = this), this._eventProcessor._off(t);
  }, o.onD = function (t, n) {
    this._on({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.onceD = function (t, n) {
    this._once({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.offD = function (t) {
    this._off({
      bind: "Dispatcher",
      type: t
    });
  }, o.onG = function (t, n) {
    this._on({
      bind: "Game",
      type: t,
      cb: n
    });
  }, o.onceG = function (t, n) {
    this._once({
      bind: "Game",
      type: t,
      cb: n
    });
  }, o.offG = function (t, n) {
    this._off({
      bind: "Game",
      type: t,
      cb: n
    });
  }, o.onI = function (t, n) {
    this._on({
      bind: "Input",
      type: t,
      cb: n
    });
  }, o.onceI = function (t, n) {
    this._once({
      bind: "Input",
      type: t,
      cb: n
    });
  }, o.offI = function (t, n) {
    this._off({
      bind: "Input",
      type: t,
      cb: n
    });
  }, o.onN = function (t, n, e, o, c) {
    this._on({
      bind: "Node",
      type: n,
      cb: e,
      target: o,
      useCapture: c,
      node: t
    });
  }, o.onceN = function (t, n, e, o, c) {
    this._once({
      bind: "Node",
      type: n,
      cb: e,
      target: o,
      useCapture: c,
      node: t
    });
  }, o.offN = function (t, n, e, o, c) {
    this._off({
      bind: "Node",
      type: n,
      cb: e,
      target: o,
      useCapture: c,
      node: t
    });
  }, o.addEvents = function () {}, o.onLoad = function () {
    this.addEvents();
  }, o.onDestroy = function () {
    this._eventProcessor.onDestroy();
  }, o.removeAllEvents = function () {
    this._eventProcessor.removeAllEvents();
  }, o.setAdapter = function (t) {}, e;
}(_dependency2.Component)) || s);
_dependency2.cclegacy._RF.pop();
