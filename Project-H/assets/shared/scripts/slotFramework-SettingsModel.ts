// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
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
var n, e, o, u;
_dependency2.cclegacy._RF.push({}, "edc25gZ8xRJdLTLR7FE4byD", "SettingsModel", void 0);
var a = function (t) {
  var _nativeConstructor = o;
  function o() {
    var n;
    return (n = Reflect.construct(t, [], new.target || _nativeConstructor) || this).data = {
      backgroundVolume: null,
      effectVolume: null,
      notify: null,
      stopOnJackpot: null,
      turbo: null,
      stakeIndex: null,
      ratioIndex: null
    }, n;
  }
  _dependency.inheritsLoose(o, t), o.Instance = function () {
    return this._instance || (this._instance = new o());
  };
  var u = o.prototype;
  return u.setData = function (t) {
    var n = t.advancedSettings,
      e = n.sounds,
      o = n.notify,
      u = n.turbo,
      a = t.autoPlay,
      i = t.stakeIndex,
      s = t.ratioIndex;
    this.data = {
      backgroundVolume: e.backgroundVolume,
      effectVolume: e.effectVolume,
      notify: o,
      stopOnJackpot: a.stopOnJackpot,
      turbo: u,
      stakeIndex: i,
      ratioIndex: s
    };
  }, u.reset = function () {
    this.data = {
      backgroundVolume: null,
      effectVolume: null,
      notify: null,
      stopOnJackpot: null,
      turbo: null,
      stakeIndex: null,
      ratioIndex: null
    };
  }, _dependency.createClass(o, [{
    key: "backgroundVolume",
    get: function () {
      return this.data.backgroundVolume;
    },
    set: function (t) {
      this.data.backgroundVolume = t;
    }
  }, {
    key: "effectVolume",
    get: function () {
      return this.data.effectVolume;
    },
    set: function (t) {
      this.data.effectVolume = t;
    }
  }, {
    key: "notify",
    get: function () {
      return this.data.notify;
    },
    set: function (t) {
      this.data.notify = t;
    }
  }, {
    key: "stopOnJackpot",
    get: function () {
      return this.data.stopOnJackpot;
    },
    set: function (t) {
      this.data.stopOnJackpot = t;
    }
  }, {
    key: "turbo",
    get: function () {
      return this.data.turbo;
    },
    set: function (t) {
      this.data.turbo = t;
    }
  }, {
    key: "stakeIndex",
    get: function () {
      return this.data.stakeIndex;
    },
    set: function (t) {
      this.data.stakeIndex = t;
    }
  }, {
    key: "ratioIndex",
    get: function () {
      return this.data.ratioIndex;
    },
    set: function (t) {
      this.data.ratioIndex = t;
    }
  }]), o;
}(_dependency3.BaseModel);
a._instance = null;
_publish("default", a.Instance());
_dependency2.cclegacy._RF.pop();
