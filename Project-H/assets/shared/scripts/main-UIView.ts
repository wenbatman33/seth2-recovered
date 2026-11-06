// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-AudioComponent";
import * as _dependency5 from "./main-Macros";
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
var e, t, o, i, r, s, c, a, u, h;
var d;
_dependency2.cclegacy._RF.push({}, "88e0cFi4dhOUr9sdD/3nRz4", "UIView", void 0);
var l = _dependency2._decorator.ccclass,
  p = (_dependency2._decorator.property, _dependency2._decorator.menu);
_publish("default", l(d = p("Quick公共元件/UIView")(d = function (n) {
  var _nativeConstructor = o;
  function o() {
    for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
    return (e = Reflect.construct(n, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._args = void 0, e._className = "unknow", e._bundle = null, e._enabledKeyUp = !1, e._enabledKeyDown = !1, e.audioHelper = null, e._enterBackgroundTime = 0, e._enableFrontAndBackgroundSwitch = !1, e;
  }
  _dependency.inheritsLoose(o, n), o.getPrefabUrl = function () {
    return Log.e("請求實現public static getPrefabUrl"), _dependency5.Macro.UNKNOWN;
  };
  var i = o.prototype;
  return i.close = function () {
    var n = this;
    this.closeAction ? this.closeAction(function () {
      App.uiManager.close(n.className);
    }) : App.uiManager.close(this.className);
  }, i.show = function (n) {
    this._args = n, this.node && (this.node.active = !0), this.showAction && this.showAction(function () {});
  }, i.hide = function () {
    var n = this;
    this.hideAction ? this.hideAction(function () {
      n.node && n.node.removeFromParent();
    }) : this.node && this.node.removeFromParent();
  }, i.onKeyUp = function (n) {
    n.keyCode == _dependency2.macro.KEY.escape ? this.onKeyBackUp(n) : n.propagationStopped = !0;
  }, i.onKeyDown = function (n) {
    n.keyCode == _dependency2.macro.KEY.escape ? this.onKeyBackDown(n) : n.propagationStopped = !0;
  }, i.onKeyBackUp = function (n) {
    n.propagationStopped = !0;
  }, i.onKeyBackDown = function (n) {
    n.propagationStopped = !0;
  }, i.onLoad = function () {
    this.audioHelper = this.addComponent(_dependency4.default), this.audioHelper.owner = this, n.prototype.onLoad.call(this);
  }, i._onEnterBackground = function () {
    this._enterBackgroundTime = Date.timeNow(), this.onEnterBackground();
  }, i._onEnterForgeGround = function () {
    var n = Date.timeNow() - this._enterBackgroundTime;
    this.onEnterForgeground(n);
  }, i.onEnterForgeground = function (n) {}, i.onEnterBackground = function () {}, _dependency.createClass(o, [{
    key: "args",
    get: function () {
      return this._args;
    },
    set: function (n) {
      this._args = n;
    }
  }, {
    key: "className",
    get: function () {
      return this._className;
    },
    set: function (n) {
      this._className = n;
    }
  }, {
    key: "bundle",
    get: function () {
      return this._bundle;
    },
    set: function (n) {
      this._bundle = n;
    }
  }, {
    key: "closeAction",
    get: function () {
      return null;
    }
  }, {
    key: "showAction",
    get: function () {
      return null;
    }
  }, {
    key: "hideAction",
    get: function () {
      return null;
    }
  }, {
    key: "enabledKeyUp",
    get: function () {
      return this._enabledKeyUp;
    },
    set: function (n) {
      this._enabledKeyUp = n, n ? this.onI(_dependency2.Input.EventType.KEY_UP, this.onKeyUp) : this.offI(_dependency2.Input.EventType.KEY_UP, this.onKeyUp);
    }
  }, {
    key: "enabledKeyDown",
    get: function () {
      return this._enabledKeyUp;
    },
    set: function (n) {
      this._enabledKeyUp = n, n ? this.onI(_dependency2.Input.EventType.KEY_DOWN, this.onKeyDown) : this.offI(_dependency2.Input.EventType.KEY_DOWN, this.onKeyDown);
    }
  }, {
    key: "enableFrontAndBackgroundSwitch",
    get: function () {
      return this._enableFrontAndBackgroundSwitch;
    },
    set: function (n) {
      this._enableFrontAndBackgroundSwitch = n, n ? (this.onG(_dependency2.Game.EVENT_SHOW, this._onEnterForgeGround), this.onG(_dependency2.Game.EVENT_HIDE, this._onEnterBackground)) : (this.offG(_dependency2.Game.EVENT_SHOW, this._onEnterForgeGround), this.offG(_dependency2.Game.EVENT_HIDE, this._onEnterBackground));
    }
  }]), o;
}(_dependency3.default)) || d) || d);
_dependency2.cclegacy._RF.pop();
