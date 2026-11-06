// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
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
var n, i, o, e, s, r, a, u, h, c, p, l, f, _, y, g;
_dependency2.cclegacy._RF.push({}, "cbe3apTgWJJCIVevDJz8JOj", "Tips", void 0);
var m = function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var n, i = arguments.length, o = new Array(i), e = 0; e < i; e++) o[e] = arguments[e];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._content = null, n._curPositon = new _dependency2.Vec3(), n._curOpacity = null, n._transform = null, n;
  }
  _dependency.inheritsLoose(o, t);
  var e = o.prototype;
  return e.stopAllActions = function () {
    _dependency2.Tween.stopAllByTarget(this._content), _dependency2.Tween.stopAllByTarget(this._curPositon), this.opacity && _dependency2.Tween.stopAllByTarget(this.opacity);
  }, e.onDestroy = function () {
    this.stopAllActions();
  }, e.init = function (t, n) {
    this._content = _dependency2.find("content", this.node), this._content && (this._content.getComponent(_dependency2.Label).string = t), this.runTimeOut(n);
  }, e.runTimeOut = function (t) {
    var n = this;
    _dependency2.tween(this._content).bindNodeState(false).delay(t).call(function () {
      App.tips.finishShowItem(n.node);
    }).start();
  }, e.fadeOut = function () {
    var t = this;
    this.opacity && (_dependency2.Tween.stopAllByTarget(this.opacity), _dependency2.tween(this.opacity).bindNodeState(false).to(.5, {
      opacity: 0
    }).call(function () {
      var n;
      t.stopAllActions(), null == (n = t.node) || n.removeFromParent();
    }).start(), this.moveTo(0, this.node.position.y + this.transform.height));
  }, e.fadeIn = function () {
    this.opacity && (_dependency2.Tween.stopAllByTarget(this.opacity), this.opacity.opacity = 0, _dependency2.tween(this.opacity).bindNodeState(false).to(.5, {
      opacity: 255
    }).start(), this.moveTo(0, this.node.position.y + this.transform.height));
  }, e.moveTo = function (t, n) {
    var i = this;
    _dependency2.Tween.stopAllByTarget(this._curPositon), this._curPositon.set(this.node.position), _dependency2.tween(this._curPositon).bindNodeState(false).to(.5, {
      x: t,
      y: n
    }, {
      onUpdate: function (t) {
        var n;
        null == (n = i.node) || n.setPosition(t);
      },
      easing: "expoOut"
    }).start();
  }, _dependency.createClass(o, [{
    key: "opacity",
    get: function () {
      return this._curOpacity || (this._curOpacity = this.node.getComponent(_dependency2.UIOpacity)), this._curOpacity;
    }
  }, {
    key: "transform",
    get: function () {
      return this._transform || (this._transform = this.node.getComponent(_dependency2.UITransform)), this._transform;
    }
  }]), o;
}(_dependency2.Component);
_publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this._queue = [], this.MAX_NUM = 3, this.FADE_TIME = 2, this._id = 0, this.startPosition = new _dependency2.Vec3(0, 100);
  }
  var n = t.prototype;
  return n._show = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      var i, o, s, r, a, u, h, c, p;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (i = _dependency2.instantiate(App.uiManager.getScenePrefab("Tips"))) {
              for ((o = i.addComponent(m)).init(n, this.FADE_TIME), i.setPosition(this.startPosition), o.fadeIn(), i.userData = this._id++, i.name = "Tips" + i.userData, App.uiManager.addView(i, _dependency3.ViewZOrder.Tips), s = this._queue.length, r = 0; r < s && r < this.MAX_NUM; r++) a = this._queue[r], u = a.getComponent(m), h = a.getComponent(_dependency2.UITransform), u && h && u.moveTo(0, this.startPosition.y + h.height + (s - r) * (h.height + 3));
              this._queue.push(i), this._queue.length > this.MAX_NUM && (p = this._queue.shift(), null == (c = p.getComponent(m)) || c.fadeOut());
            }
          case 2:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (n) {
      return t.apply(this, arguments);
    };
  }(), n.show = function (t) {
    null != t && null != t && "" != t && (_dependency2.log("Toast.show msg=%s", t), this._show(t));
  }, n.finishShowItem = function (t) {
    for (var n = 0; n < this._queue.length; n++) {
      if (this._queue[n].userData == t.userData) {
        var i;
        this._queue.splice(n, 1), null == (i = t.getComponent(m)) || i.fadeOut();
        break;
      }
    }
  }, n.clear = function () {
    for (var t = null; t = this._queue.pop();) {
      var n = t.getComponent(m);
      n && n.stopAllActions(), t.removeFromParent();
    }
  }, t;
}()).module = "【Tips】", _dependency2.cclegacy._RF.pop();
