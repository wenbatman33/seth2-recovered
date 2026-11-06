// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as LayoutType };
var _export2;
export { _export2 as LayoutParam };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LayoutType":
      _export = value;
      break;
    case "LayoutParam":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, s, e, n, h;
var g;
_publish("LayoutType", void 0), _dependency2.cclegacy._RF.push({}, "be45agyNEBBFIGZKYMKuTOs", "LayoutDefines", void 0), function (t) {
  t[t.TOP = 1] = "TOP", t[t.MID = 2] = "MID", t[t.BOT = 4] = "BOT", t[t.LEFT = 8] = "LEFT", t[t.CENTER = 16] = "CENTER", t[t.RIGHT = 32] = "RIGHT", t[t.HORIZONTAL = 56] = "HORIZONTAL", t[t.VERTICAL = 7] = "VERTICAL", t[t.TOP_BOT = 5] = "TOP_BOT", t[t.LEFT_RIGHT = 6] = "LEFT_RIGHT", t[t.CENTER_TOP = 17] = "CENTER_TOP", t[t.CENTER_BOT = 20] = "CENTER_BOT", t[t.MID_LETF = 10] = "MID_LETF", t[t.MID_RIGHT = 34] = "MID_RIGHT";
}(g || (g = _publish("LayoutType", {})));
_publish("LayoutParam", function () {
  function t() {
    this._alignFlags = 0, this.result = {
      position: _dependency2.v2(0, 0),
      originSize: _dependency2.size(0, 0)
    }, this.target = null, this._node = null, this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.horizontalCenter = 0, this.verticalCenter = 0, this.isAbsoluteHorizontalCenter = !0, this.isAbsoluteVerticalCenter = !0, this.isAbsoluteTop = !0, this.isAbsoluteBottom = !0, this.isAbsoluteLeft = !0, this.isAbsoluteRight = !0;
  }
  return t.prototype._setAlign = function (t, i) {
    if (i !== (this._alignFlags & t) > 0) {
      var s = (t & g.LEFT_RIGHT) > 0,
        n = this.node.getComponent(_dependency2.UITransform);
      i ? (this._alignFlags |= t, s ? (this.isAlignHorizontalCenter = !1, this.isStretchWidth && (this.result.originSize.width = n.width)) : (this.isAlignVerticalCenter = !1, this.isStretchHeight && (this.result.originSize.height = n.height))) : (s ? this.isStretchWidth && (n.width = this.result.originSize.width) : this.isStretchHeight && (n.height = this.result.originSize.height), this._alignFlags &= ~t);
    }
  }, _dependency.createClass(t, [{
    key: "alignFlags",
    get: function () {
      return this._alignFlags;
    },
    set: function (t) {
      this._alignFlags = t;
    }
  }, {
    key: "node",
    get: function () {
      return this._node;
    },
    set: function (t) {
      var i = t.getComponent(_dependency2.UITransform);
      this.result.originSize.width = i.width, this.result.originSize.height = i.height, this._node = t;
    }
  }, {
    key: "isAlignTop",
    get: function () {
      return (this._alignFlags & g.TOP) > 0;
    },
    set: function (t) {
      this._setAlign(g.TOP, t);
    }
  }, {
    key: "isAlignVerticalCenter",
    get: function () {
      return (this._alignFlags & g.MID) > 0;
    },
    set: function (t) {
      t ? (this.isAlignTop = !1, this.isAlignBottom = !1, this._alignFlags |= g.MID) : this._alignFlags &= ~g.MID;
    }
  }, {
    key: "isAlignBottom",
    get: function () {
      return (this._alignFlags & g.BOT) > 0;
    },
    set: function (t) {
      this._setAlign(g.BOT, t);
    }
  }, {
    key: "isAlignLeft",
    get: function () {
      return (this._alignFlags & g.LEFT) > 0;
    },
    set: function (t) {
      this._setAlign(g.LEFT, t);
    }
  }, {
    key: "isAlignHorizontalCenter",
    get: function () {
      return (this._alignFlags & g.CENTER) > 0;
    },
    set: function (t) {
      t ? (this.isAlignLeft = !1, this.isAlignRight = !1, this._alignFlags |= g.CENTER) : this._alignFlags &= ~g.CENTER;
    }
  }, {
    key: "isAlignRight",
    get: function () {
      return (this._alignFlags & g.RIGHT) > 0;
    },
    set: function (t) {
      this._setAlign(g.RIGHT, t);
    }
  }, {
    key: "isStretchWidth",
    get: function () {
      return (this._alignFlags & g.LEFT_RIGHT) === g.LEFT_RIGHT;
    }
  }, {
    key: "isStretchHeight",
    get: function () {
      return (this._alignFlags & g.TOP_BOT) === g.TOP_BOT;
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();
