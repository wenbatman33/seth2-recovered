// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as TweenMaxNode };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TweenMaxNode":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, o, i, s, r, c, u, a;
var h;
_dependency2.cclegacy._RF.push({}, "e3feeHpC/9GO6BSU3tLSMBD", "TweenMaxNode", void 0);
var l = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TweenMaxNode", l("TweenMaxNode")(h = function (e) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(o, e), o.trans = function (e) {
    return e.getComponent(o);
  }, _dependency.createClass(o, [{
    key: "x",
    get: function () {
      return this.node.position.x;
    },
    set: function (e) {
      this.node.setPosition(e, this.node.position.y, this.node.position.z);
    }
  }, {
    key: "y",
    get: function () {
      return this.node.position.y;
    },
    set: function (e) {
      this.node.setPosition(this.node.position.x, e, this.node.position.z);
    }
  }, {
    key: "scale",
    get: function () {
      return this.node.scale.x;
    },
    set: function (e) {
      this.node.setScale(e, e, 1);
    }
  }, {
    key: "scaleX",
    get: function () {
      return this.node.scale.x;
    },
    set: function (e) {
      this.node.setScale(e, this.node.scale.y, 1);
    }
  }, {
    key: "scaleY",
    get: function () {
      return this.node.scale.y;
    },
    set: function (e) {
      this.node.setScale(this.node.scale.x, e, 1);
    }
  }, {
    key: "width",
    get: function () {
      return this.node.getComponent(_dependency2.UITransform).width;
    },
    set: function (e) {
      this.node.getComponent(_dependency2.UITransform).width = e;
    }
  }, {
    key: "height",
    get: function () {
      return this.node.getComponent(_dependency2.UITransform).height;
    },
    set: function (e) {
      this.node.getComponent(_dependency2.UITransform).height = e;
    }
  }, {
    key: "opacity",
    get: function () {
      var e = this.node.getComponent(_dependency2.UIRenderer);
      if (null !== e) return e.color.a;
      var t = this.node.getComponent(_dependency2.UIOpacity);
      return null !== t ? t.opacity : 255;
    },
    set: function (e) {
      var t = this.node.getComponent(_dependency2.UIRenderer);
      if (null === t) {
        var n = this.node.getComponent(_dependency2.UIOpacity);
        null !== n && (n.opacity = e);
      } else t.color = new _dependency2.Color(t.color.r, t.color.g, t.color.b, e);
    }
  }, {
    key: "angle",
    get: function () {
      return this.node.angle;
    },
    set: function (e) {
      this.node.angle = e;
    }
  }]), o;
}(_dependency2.Component)) || h);
_dependency2.cclegacy._RF.pop();
