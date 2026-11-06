// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EventProcessor };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EventProcessor":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, s, i, a;
_dependency.cclegacy._RF.push({}, "9b4a8lMol1JU4rkKbyLB54R", "EventProcessor", void 0);
_publish("EventProcessor", function () {
  function t() {
    this._events = new Map(), this._eventsD = new Map(), this._eventsG = [], this._eventsI = [];
  }
  var e = t.prototype;
  return e.on = function (t, e) {
    this._on({
      bind: "Default",
      type: t,
      cb: e
    });
  }, e.once = function (t, e) {
    this._once({
      bind: "Default",
      type: t,
      cb: e
    });
  }, e.off = function (t) {
    this._off({
      bind: "Default",
      type: t
    });
  }, e.onD = function (t, e) {
    this._on({
      bind: "Dispatcher",
      type: t,
      cb: e
    });
  }, e.onceD = function (t, e) {
    this._once({
      bind: "Dispatcher",
      type: t,
      cb: e
    });
  }, e.offD = function (t) {
    this._off({
      bind: "Dispatcher",
      type: t
    });
  }, e.onG = function (t, e) {
    this._on({
      bind: "Game",
      type: t,
      cb: e
    });
  }, e.onceG = function (t, e) {
    this._once({
      bind: "Game",
      type: t,
      cb: e
    });
  }, e.offG = function (t, e) {
    this._off({
      bind: "Game",
      type: t,
      cb: e
    });
  }, e.onI = function (t, e) {
    this._on({
      bind: "Input",
      type: t,
      cb: e
    });
  }, e.onceI = function (t, e) {
    this._once({
      bind: "Input",
      type: t,
      cb: e
    });
  }, e.offI = function (t, e) {
    this._off({
      bind: "Input",
      type: t,
      cb: e
    });
  }, e.onN = function (t, e, n, s, i) {
    this._on({
      bind: "Node",
      type: e,
      cb: n,
      target: s,
      useCapture: i,
      node: t
    });
  }, e.onceN = function (t, e, n, s, i) {
    this._once({
      bind: "Node",
      type: e,
      cb: n,
      target: s,
      useCapture: i,
      node: t
    });
  }, e.offN = function (t, e, n, s, i) {
    this._off({
      bind: "Node",
      type: e,
      cb: n,
      target: s,
      useCapture: i,
      node: t
    });
  }, e.addEvents = function () {}, e.onLoad = function () {
    this.addEvents();
  }, e.onDestroy = function () {
    this._cleanDefault(), this._cleanD(), this._cleanG(), this._cleanI(), this._cleanN();
  }, e._on = function (t) {
    switch (t.bind) {
      case "Default":
        this._onDefault(t);
        break;
      case "Dispatcher":
        this._onD(t);
        break;
      case "Game":
        this._onG(t);
        break;
      case "Input":
        this._onI(t);
        break;
      case "Node":
        this._onN(t);
        break;
      default:
        Log.e("on " + t.bind + " 未知事件类型");
    }
  }, e._once = function (t) {
    t.once = !0, this._on(t);
  }, e._off = function (t) {
    switch (t.bind) {
      case "Default":
        this._offDefault(t);
        break;
      case "Dispatcher":
        this._offD(t);
        break;
      case "Game":
        this._offG(t);
        break;
      case "Input":
        this._offI(t);
        break;
      case "Node":
        this._offN(t);
        break;
      default:
        Log.e("off " + t.bind + " 未知事件类型");
    }
  }, e._onDefault = function (t) {
    t.target || (t.target = this), this._events.has(t.type) ? Log.e(t.type + " 重复注册") : (App.dispatcher.on(t.type, t.cb, t.target, t.once), this._events.set(t.type, t));
  }, e._offDefault = function (t) {
    t.target || (t.target = this), this._events.has(t.type) && (App.dispatcher.off(t.type, t.target), this._events.delete(t.type));
  }, e._onD = function (t) {
    t.target || (t.target = this), this._eventsD.has(t.type) ? Log.e(t.type + " 重复注册") : (App.dispatcher.on(t.type, t.cb, t.target, t.once), this._eventsD.set(t.type, t));
  }, e._offD = function (t) {
    t.target || (t.target = this), this._eventsD.has(t.type) && (App.dispatcher.off(t.type, t.target), this._eventsD.delete(t.type));
  }, e._cleanDefault = function () {
    this._events.forEach(function (t, e) {
      App.dispatcher.off(t.type, t.target);
    }), this._events.clear();
  }, e._cleanD = function () {
    this._eventsD.forEach(function (t, e) {
      App.dispatcher.off(t.type, t.target);
    }), this._eventsD.clear();
  }, e._onG = function (t) {
    t.target || (t.target = this), _dependency.game.hasEventListener(t.type, t.cb, t.target) || (_dependency.game.on(t.type, t.cb, t.target, t.once), this._eventsG.push(t));
  }, e._offG = function (t) {
    t.target || (t.target = this), _dependency.game.off(t.type, t.cb, t.target);
    for (var e = 0; e < this._eventsG.length; e++) {
      var s = this._eventsG[e];
      if (s.type == t.type && s.cb == t.cb && s.target == s.target) {
        this._eventsG.splice(e, 1);
        break;
      }
    }
  }, e._cleanG = function () {
    for (var t = 0; t < this._eventsG.length; t++) {
      var e = this._eventsG[t];
      _dependency.game.off(e.type, e.cb, e.target);
    }
    this._eventsG = [];
  }, e._onI = function (t) {
    if (t.target || (t.target = this), !this._has(this._eventsI, t)) {
      if (t.type == _dependency.Input.EventType.KEY_DOWN || t.type == _dependency.Input.EventType.KEY_UP) {
        var e,
          n = null != (e = t.once) && e,
          a = t.cb.bind(t.target);
        t.cb = a, document.getElementById("GameCanvas").addEventListener(t.type, t.cb, {
          once: n
        });
      } else t.once ? _dependency.input.once(t.type, t.cb, t.target) : _dependency.input.on(t.type, t.cb, t.target);
      this._eventsI.push(t);
    }
  }, e._offI = function (t) {
    if (t.target || (t.target = this), t.type == _dependency.Input.EventType.KEY_DOWN || t.type == _dependency.Input.EventType.KEY_UP) for (var e = 0; e < this._eventsI.length; e++) {
      var n = this._eventsI[e];
      if (n.target === t.target && n.type === t.type) {
        document.getElementById("GameCanvas").removeEventListener(n.type, n.cb);
        break;
      }
    } else _dependency.input.off(t.type, t.cb, t.target);
    for (var a = 0; a < this._eventsI.length; a++) {
      var o = this._eventsI[a];
      if (o.type == t.type && o.cb == t.cb && o.target == o.target) {
        this._eventsI.splice(a, 1);
        break;
      }
    }
  }, e._cleanI = function () {
    for (var t = 0; t < this._eventsI.length; t++) {
      var e = this._eventsI[t];
      e.type == _dependency.Input.EventType.KEY_DOWN || e.type == _dependency.Input.EventType.KEY_UP ? document.getElementById("GameCanvas").removeEventListener(e.type, e.cb) : _dependency.input.off(e.type, e.cb, e.target);
    }
    this._eventsI = [];
  }, e._onN = function (t) {
    var e, n;
    (t.target || (t.target = this), _dependency.isValid(t.node)) && (t.once ? null == (e = t.node) || e.once(t.type, t.cb, t.target, t.useCapture) : null == (n = t.node) || n.on(t.type, t.cb, t.target, t.useCapture));
  }, e._offN = function (t) {
    var e;
    t.target || (t.target = this), _dependency.isValid(t.node) && (null == (e = t.node) || e.off(t.type, t.cb, t.target, t.useCapture));
  }, e._cleanN = function () {}, e._has = function (t, e) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n];
      if (s.type == e.type && s.cb == e.cb && s.target == e.target) return !0;
    }
    return !1;
  }, e.removeAllEvents = function () {
    this._cleanDefault(), this._cleanD(), this._cleanG(), this._cleanI(), this._cleanN();
  }, t;
}());
_dependency.cclegacy._RF.pop();
