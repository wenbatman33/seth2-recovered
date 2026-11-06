// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Adapter";
var _export;
export { _export as SpriteAlignType };
var _export2;
export { _export2 as SpriteScaleType };
var _export3;
export { _export3 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpriteAlignType":
      _export = value;
      break;
    case "SpriteScaleType":
      _export2 = value;
      break;
    case "default":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, s, n, r, o, p, h, a, c, l;
var T, d, u, y, g, f;
_publish({
  SpriteAlignType: void 0,
  SpriteScaleType: void 0
}), _dependency2.cclegacy._RF.push({}, "38151mINEtP7bc2sNH9D25e", "AdapterSprite", void 0);
var S,
  v,
  I = _dependency2._decorator.ccclass,
  E = _dependency2._decorator.property,
  L = _dependency2._decorator.executeInEditMode,
  _ = _dependency2._decorator.menu;
!function (t) {
  t[t.FILL = 0] = "FILL", t[t.SUIT = 1] = "SUIT";
}(S || (S = _publish("SpriteScaleType", {}))), function (t) {
  t[t.LEFT = 0] = "LEFT", t[t.TOP = 1] = "TOP", t[t.RIGHT = 2] = "RIGHT", t[t.BOTTOM = 3] = "BOTTOM", t[t.CENTER = 4] = "CENTER";
}(v || (v = _publish("SpriteAlignType", {})));
_publish("default", (T = L(!0), d = _("Quick適配元件/AdapterSprite"), u = E({
  type: _dependency2.Enum(S),
  tooltip: "縮放型別:\n        -FILL: 縮放到填滿父節點（如果父節點有裁剪，影像可能會被裁剪，節點可能會超出父節點）\n        -SUIT: 縮放到剛好在父節點內部最大化顯示（影像會完整顯示，但父節點上下或者左右可能會留空）"
}), y = E({
  type: _dependency2.Enum(v),
  tooltip: "齊方式型別:\n        -LEFT: 縮放後靠左對齊\n        -TOP: 縮放後靠上對齊\n        -RIGHT: 縮放後靠右對齊\n        -BOTTOM: 縮放後靠下對齊\n        -CENTER: 縮放後居中對齊"
}), I(g = T(g = d((_dependency.applyDecoratedDescriptor((f = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this)._scaleType = S.SUIT, e._alignType = v.CENTER, e._sprite = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var n = e.prototype;
  return n.onLoad = function () {
    this._sprite = this.node.getComponent(_dependency2.Sprite);
  }, n.start = function () {
    this.updateSprite(this.scaleType, this.alignType);
  }, n.onChangeSize = function () {
    this.updateSprite(this.scaleType, this.alignType);
  }, n.updateSprite = function (t, e) {
    var i;
    if (this._sprite && this._sprite.enabled && this._sprite.spriteFrame) {
      var s = null == (i = this.node.parent) ? void 0 : i.getComponent(_dependency2.Widget);
      s && s.updateAlignment(), this.width = this._sprite.spriteFrame.rect.width, this.height = this._sprite.spriteFrame.rect.height;
      var n = this.parentTrans;
      if (this.width / this.height > n.width / n.height) {
        if (t == S.SUIT) {
          var r = n.width / this.width;
          this.node.scale = _dependency2.v3(r, r);
        } else if (t == S.FILL) {
          var o = n.height / this.height;
          this.node.scale = _dependency2.v3(o, o);
        }
      } else if (t == S.SUIT) {
        var p = n.height / this.height;
        this.node.scale = _dependency2.v3(p, p);
      } else if (t == S.FILL) {
        var c = n.width / this.width;
        this.node.scale = _dependency2.v3(c, c);
      }
      switch (e) {
        case v.CENTER:
          this.node.setPosition(_dependency2.v3());
          break;
        case v.LEFT:
          this.node.setPosition(_dependency2.v3(-.5 * (n.width - this.width * this.node.scale.x), 0));
          break;
        case v.RIGHT:
          this.node.setPosition(_dependency2.v3(.5 * (n.width - this.width * this.node.scale.x), 0));
          break;
        case v.TOP:
          this.node.setPosition(_dependency2.v3(0, .5 * (n.height - this.height * this.node.scale.x)));
          break;
        case v.BOTTOM:
          this.node.setPosition(_dependency2.v3(0, -.5 * (n.height - this.height * this.node.scale.x)));
      }
    }
  }, _dependency.createClass(e, [{
    key: "scaleType",
    get: function () {
      return this._scaleType;
    },
    set: function (t) {
      this._scaleType = t;
    }
  }, {
    key: "alignType",
    get: function () {
      return this._alignType;
    },
    set: function (t) {
      this._alignType = t;
    }
  }, {
    key: "parentTrans",
    get: function () {
      var t;
      return null == (t = this.node.parent) ? void 0 : t.getComponent(_dependency2.UITransform);
    }
  }]), e;
}(_dependency3.Adapter)).prototype, "scaleType", [u], Object.getOwnPropertyDescriptor(f.prototype, "scaleType"), f.prototype), _dependency.applyDecoratedDescriptor(f.prototype, "alignType", [y], Object.getOwnPropertyDescriptor(f.prototype, "alignType"), f.prototype), g = f)) || g) || g) || g));
_dependency2.cclegacy._RF.pop();
