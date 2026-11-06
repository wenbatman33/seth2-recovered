// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-TaskQueue";
import * as _dependency4 from "./main-FlowEvent";
import * as _dependency5 from "./main-SingletonExtends";
var _export;
export { _export as FlowTrigger };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FlowTrigger":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a, e, s, i, n, r, o, l;
var u;
_publish("FlowTrigger", void 0), _dependency2.cclegacy._RF.push({}, "b89fb33Z5tEF4/6KMJFEYKx", "Flow", void 0), function (t) {
  t[t.AFTER_PREVIOUS = 0] = "AFTER_PREVIOUS", t[t.AFTER_ALL = 1] = "AFTER_ALL", t[t.CONCURRENT = 2] = "CONCURRENT", t[t.WITH_FLAGS = 3] = "WITH_FLAGS";
}(u || (u = _publish("FlowTrigger", {})));
_publish("default", function (t) {
  var _nativeConstructor = s;
  function s(a) {
    var s;
    return (s = Reflect.construct(t, [], new.target || _nativeConstructor) || this).flowId = "", s._idx = 0, s._tag = 0, s._priority = 0, s._curPriority = 0, s._curTag = 0, s._taskManger = void 0, s.afterAllTasks = [], s._flowMap = new Map(), s.flowId = a, s._taskManger = new _dependency3.TaskManager(), s._taskManger.eventTarget.once("completed", s.taskCompleted, _dependency.assertThisInitialized(s)), s._taskManger.eventTarget.on("curTaskConfig", s.setCurTaskConfig, _dependency.assertThisInitialized(s), !1), s;
  }
  _dependency.inheritsLoose(s, t);
  var l = s.prototype;
  return l.add = function (t) {
    this._idx += 1;
    for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) e[s - 1] = arguments[s];
    this._flowMap.set(this.flowId + "_" + this._idx, {
      firstTrigger: t,
      data: e
    });
  }, l.start = function () {
    var t = this;
    this._flowMap.forEach(function (a) {
      var e = a.firstTrigger,
        s = a.data,
        i = e;
      t.setTasksCount.apply(t, [e].concat(s)), s.forEach(function (a, e) {
        if (a instanceof _dependency4.FlowEvent) {
          var s = {
            eventName: a.name,
            eventData: a.data,
            config: {
              autoComplete: a.autoComplete,
              delay: a.delay
            }
          };
          switch (i) {
            case u.CONCURRENT:
              t.addTaskQueue(s, e);
              break;
            case u.AFTER_PREVIOUS:
              t.addTaskQueue(s, t._tag);
              break;
            case u.AFTER_ALL:
              t.addAfterAll(s);
              break;
            case u.WITH_FLAGS:
              t.addWithFlags(s);
          }
        } else i = a, t._priority += 1;
      });
    });
  }, l.setTasksCount = function (t) {
    for (var a = t, e = 0, s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) i[n - 1] = arguments[n];
    i.forEach(function (t) {
      if (t instanceof _dependency4.FlowEvent) switch (a) {
        case u.CONCURRENT:
        case u.AFTER_PREVIOUS:
          e += 1;
      } else a = t;
    }), this._taskManger.setEventCount(e);
  }, l.addTask = function (t) {
    var a = this;
    return function (e) {
      var s = function () {
        var a = t.eventName,
          s = t.eventData,
          i = {
            name: "",
            data: null,
            complete: e
          };
        a && (i.name = a), s && (i.data = s), dispatch(a, i);
      };
      if (t.config) {
        var n = t.config,
          r = n.delay,
          o = n.autoComplete;
        r ? _dependency2.tween(a).bindNodeState(false).delay(r).call(function () {
          s(), o && e();
        }).start() : (s(), o && e());
      } else s();
    };
  }, l.addTaskQueue = function (t, a, e) {
    var s = this.addTask(t);
    void 0 === e && (void 0 === this._priority ? this._priority = 0 : this._priority += 1, e = this._priority), this._tag = a, this._taskManger.pushTaskByTag(s, this._tag, e);
  }, l.addAfterAll = function (t) {
    this.afterAllTasks || (this.afterAllTasks = []), this.afterAllTasks.push(t);
  }, l.addWithFlags = function (t) {
    this._curPriority += .01, this.addTaskQueue(t, this._curTag, this._priority);
  }, l.taskCompleted = function () {
    var t,
      a = this;
    (null == (t = this.afterAllTasks) ? void 0 : t.length) > 0 && (this._taskManger.setEventCount(this.afterAllTasks.length), this.afterAllTasks.forEach(function (t) {
      a.addTaskQueue(t, a._tag);
    }), this.afterAllTasks = []);
  }, l.setCurTaskConfig = function (t) {
    this._curPriority = t.priority, this._curTag = t.tag;
  }, l.kill = function () {
    _dependency2.Tween.stopAllByTarget(this), this._taskManger.clearAllTaskQueue();
  }, s;
}(_dependency5.SingletonExtends));
_dependency2.cclegacy._RF.pop();
