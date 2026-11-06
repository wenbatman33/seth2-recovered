// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SingletonExtends";
var _export;
export { _export as ETaskTag };
var _export2;
export { _export2 as TaskQueue };
var _export3;
export { _export3 as TaskManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ETaskTag":
      _export = value;
      break;
    case "TaskQueue":
      _export2 = value;
      break;
    case "TaskManager":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, s, u, n, i;
_publish("ETaskTag", void 0), _dependency2.cclegacy._RF.push({}, "46530OmLmFKkK+9DLcLK5e/", "TaskQueue", void 0);
var a,
  r = function (t, e) {
    this.task = void 0, this.priority = void 0, this.task = t, this.priority = e;
  };
!function (t) {
  t[t.GAME_UPDATED = 1] = "GAME_UPDATED";
}(a || (a = _publish("ETaskTag", {})));
var o = _publish("TaskQueue", function (t) {
  var _nativeConstructor = s;
  function s() {
    for (var e, s = arguments.length, u = new Array(s), i = 0; i < s; i++) u[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(u).slice(1), new.target || _nativeConstructor) || this)._curTask = null, e._taskQueue = Array(), e.eventTarget = new _dependency2.EventTarget(), e._isCompleted = !1, e;
  }
  _dependency.inheritsLoose(s, t);
  var i = s.prototype;
  return i.pushTask = function (t, e) {
    void 0 === e && (e = 0);
    var s = new r(t, e);
    if (this._taskQueue.length > 0) for (var u = this._taskQueue.length - 1; u >= 0; --u) if (this._taskQueue[u].priority <= e) return void this._taskQueue.splice(u + 1, 0, s);
    this._taskQueue.splice(0, 0, s), null == this._curTask && this.executeNextTask();
  }, i.clearTask = function () {
    this._curTask = null, this._taskQueue = [];
  }, i.getCurTaskPriority = function () {
    return this._curTask.priority;
  }, i.executeNextTask = function () {
    var t = this,
      e = this._taskQueue.shift() || null;
    this._curTask = e, e && e.task(function () {
      e === t._curTask ? (t.eventTarget.emit("completed"), t.executeNextTask()) : _dependency2.warn("your task finish twice!");
    });
  }, s;
}(_dependency3.SingletonExtends));
_publish("TaskManager", function () {
  function t() {
    this._taskQueues = {}, this.count = 0, this.eventTarget = new _dependency2.EventTarget();
  }
  t.Instance = function () {
    return this._instance || (this._instance = new t());
  }, t.destory = function () {
    this._instance = null;
  };
  var e = t.prototype;
  return e.pushTask = function (t, e) {
    return void 0 === e && (e = 0), this.getTaskQueue().pushTask(t, e);
  }, e.pushTaskByTag = function (t, e, s) {
    return void 0 === s && (s = 0), this.getTaskQueue(e).pushTask(t, s);
  }, e.clearTaskQueue = function (t) {
    void 0 === t && (t = 0);
    var e = this._taskQueues[t];
    e && e.clearTask();
  }, e.clearAllTaskQueue = function () {
    for (var t in this._taskQueues) this._taskQueues[t].clearTask();
    this._taskQueues = {};
  }, e.getTaskQueue = function (t) {
    var e = this;
    void 0 === t && (t = 0);
    var s = this._taskQueues[t];
    return null == s && (s = new o(), this._taskQueues[t] = s, void 0 !== this.count && s.eventTarget.on("completed", function () {
      var s = {
        tag: t,
        priority: e._taskQueues[t].getCurTaskPriority()
      };
      e.count -= 1, e.eventTarget.emit("curTaskConfig", s), 0 === e.count && e.eventTarget.emit("completed");
    }, this, !1)), s;
  }, e.setEventCount = function (t) {
    this.count = t;
  }, t;
}())._instance = null, _dependency2.cclegacy._RF.pop();
