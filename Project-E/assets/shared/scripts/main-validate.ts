// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as validateHydration };
var _export2;
export { _export2 as validateStates };
var _export3;
export { _export3 as InvalidStatesError };
var _export4;
export { _export4 as InvalidInitialStateError };
var _export5;
export { _export5 as InvalidStateIdError };
var _export6;
export { _export6 as InvalidTransitionCondition };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "validateHydration":
      _export = value;
      break;
    case "validateStates":
      _export2 = value;
      break;
    case "InvalidStatesError":
      _export3 = value;
      break;
    case "InvalidInitialStateError":
      _export4 = value;
      break;
    case "InvalidStateIdError":
      _export5 = value;
      break;
    case "InvalidTransitionCondition":
      _export6 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, i, r;
_publish({
  validateHydration: function (t, n) {
    if (s(t), !t.some(function (t) {
      return t.id === n;
    })) throw new a("No state id matches with the state id provided");
  },
  validateStates: s
}), _dependency2.cclegacy._RF.push({}, "35c61eRDUdNIbCCo9zUwNZM", "validate", void 0);
var e = _publish("InvalidStatesError", function (t) {
    var _nativeConstructor = i;
    function i() {
      return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
    }
    return _dependency.inheritsLoose(i, t), i;
  }(_dependency.wrapNativeSuper(Error))),
  o = _publish("InvalidInitialStateError", function (t) {
    var _nativeConstructor2 = i;
    function i() {
      return Reflect.construct(t, arguments, new.target || _nativeConstructor2) || this;
    }
    return _dependency.inheritsLoose(i, t), i;
  }(_dependency.wrapNativeSuper(Error))),
  a = _publish("InvalidStateIdError", function (t) {
    var _nativeConstructor3 = i;
    function i() {
      return Reflect.construct(t, arguments, new.target || _nativeConstructor3) || this;
    }
    return _dependency.inheritsLoose(i, t), i;
  }(_dependency.wrapNativeSuper(Error))),
  u = _publish("InvalidTransitionCondition", function (t) {
    var _nativeConstructor4 = i;
    function i() {
      return Reflect.construct(t, arguments, new.target || _nativeConstructor4) || this;
    }
    return _dependency.inheritsLoose(i, t), i;
  }(_dependency.wrapNativeSuper(Error)));
function s(t) {
  if (!t || !Array.isArray(t) || (null == t ? void 0 : t.length) < 1) throw new e("States must be an array of at least 1 element");
  if (1 !== t.filter(function (t) {
    return t.initial;
  }).length) throw new o("There must be one and only initial state");
  if (!t.every(function (t) {
    return "string" == typeof t.id;
  })) throw new a("Ids must be of type string");
  if (new Set(t.map(function (t) {
    return t.id;
  })).size !== t.length) throw new a("Ids must be unique");
  if (t.some(function (t) {
    return t.autoTransition && t.transitionGuard;
  })) throw new u("State with autoTransition cannot have property transitionGuard");
  if (t.some(function (t) {
    return !t.final && !t.transitionTo || t.final && (t.autoTransition || t.transitionTo || t.transitionGuard);
  })) throw new u("State must have autoTransition or transitionTo if not final");
  if (t.some(function (t) {
    return !t.final && t.onFinal;
  })) throw new u("State that are not final cannot have property onFinal");
}
_dependency2.cclegacy._RF.pop();
