// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as Snapshot };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Snapshot":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, s, i, n, r, o, p, h, c, u, g, l, f;
var _;
_dependency2.cclegacy._RF.push({}, "1ff00yaE7BLMZ9D4Mudhp/4", "Snapshot", void 0);
var v = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("Snapshot", v("Snapshot")(_ = function (e) {
  var _nativeConstructor = a;
  function a() {
    for (var t, a = arguments.length, s = new Array(a), i = 0; i < a; i++) s[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(s).slice(1), new.target || _nativeConstructor) || this)._camera = null, t.onCaptureComplete = void 0, t._texture = null, t._canvas = null, t._buffer = null, t;
  }
  _dependency.inheritsLoose(a, e);
  var s = a.prototype;
  return s.start = function () {
    var t = this;
    this._camera = App.uiManager.screenShotCamera, e.prototype.start && e.prototype.start.call(this), this._texture = new _dependency2.RenderTexture(), this._texture.reset({
      width: _dependency2.view.getVisibleSize().width,
      height: _dependency2.view.getVisibleSize().height
    }), this._camera.targetTexture = this._texture, this._camera.node.active = !0, this.scheduleOnce(function () {
      t.capture();
    }, .2);
  }, s.onDestroy = function () {
    this._camera.node.active = !1, e.prototype.onDestroy && e.prototype.onDestroy.call(this);
  }, s.capture = function () {
    var e = this.node.getComponent(_dependency2.UITransform);
    if (e) {
      var t = e.width,
        a = e.height,
        s = e.getBoundingBoxToWorld(),
        i = s.x,
        n = s.y;
      this._buffer = this._texture.readPixels(Math.round(i), Math.round(n), t, a), this.saveImage();
    }
  }, s.genSpriteFrame = function (e, t) {
    var a = new _dependency2.ImageAsset();
    a.reset({
      _data: this._buffer,
      width: e,
      height: t,
      format: _dependency2.Texture2D.PixelFormat.RGBA8888,
      _compressed: !1
    });
    var s = new _dependency2.Texture2D();
    s.image = a;
    var i = new _dependency2.SpriteFrame();
    return i.texture = s, i.packable = !1, i.flipUVY = !0, i;
  }, s.createImageData = function (e, t, a) {
    if (_dependency2.sys.isBrowser || _dependency2.sys.platform === _dependency2.sys.Platform.WECHAT_GAME) {
      this._canvas ? this.clearCanvas() : (this._canvas = document.createElement("canvas"), this._canvas.width = e, this._canvas.height = t);
      for (var s = this._canvas.getContext("2d"), i = 4 * e, n = 0; n < t; n++) {
        for (var r = t - 1 - n, o = s.createImageData(e, 1), p = r * e * 4, h = 0; h < i; h++) o.data[h] = a[p + h];
        s.putImageData(o, 0, n);
      }
    }
  }, s.onCaptureFinish = function (e, t, a) {
    this.onCaptureComplete && (null == a && (a = this.genSpriteFrame(e, t)), this.onCaptureComplete(a, new _dependency2.Size(e, t))), this.destroy();
  }, s.flipImageY = function (e, t, a) {
    for (var s = new Uint8Array(t * a * 4), i = 4 * t, n = a - 1, r = 0; r < a; r++) for (var o = (n - r) * i, p = r * i, h = 0; h < i; h++) s[h + p] = e[o + h];
    return s;
  }, s.savaAsImage = function (e, t, a) {
    var s = this;
    if (_dependency2.sys.isBrowser) this.createImageData(e, t, a), App.canvasHelper.saveAsPNG(this._canvas, e, t), App.tips.show(App.getLanguage("capture_success")), this.onCaptureFinish(e, t);else if (_dependency2.sys.isNative) {
      var i = new Date().format("yyyy_MM_dd_hh_mm_ss_SS") + ".png",
        n = App.platform.screenshotsPath + "/" + i,
        r = this.flipImageY(this._buffer, e, t);
      _dependency2.native.saveImageData(r, e, t, n).then(function () {
        s.onCaptureComplete && _dependency2.assetManager.loadRemote(n, function (a, i) {
          if (a) Log.d("show image error");else {
            var r = new _dependency2.SpriteFrame(),
              o = new _dependency2.Texture2D();
            o.image = i, r.texture = o, r.packable = !1, App.tips.show(App.getLanguage("capture_save_local_success1", [n])), s.onCaptureFinish(e, t, r);
          }
        }), Log.d("save image data success, file: " + n), App.tips.show(App.getLanguage("capture_save_local_success2", [n]));
      }).catch(function () {
        Log.e("save image data failed!"), App.tips.show(App.getLanguage("capture_save_failed"));
      });
    } else _dependency2.sys.platform === _dependency2.sys.Platform.WECHAT_GAME && (this.createImageData(e, t, a), this._canvas.toTempFilePath({
      x: 0,
      y: 0,
      width: this._canvas.width,
      height: this._canvas.height,
      destWidth: this._canvas.width,
      destHeight: this._canvas.height,
      fileType: "png",
      success: function (e) {
        wx.showToast({
          title: App.getLanguage("capture_success")
        }), App.tips.show(App.getLanguage("capture_success")), wx.saveImageToPhotosAlbum({
          filePath: e.tempFilePath,
          success: function (e) {
            wx.showToast({
              title: App.getLanguage("capture_save_photo_album")
            }), App.tips.show(App.getLanguage("capture_save_local_success2", [e.tempFilePath]));
          },
          fail: function () {
            App.tips.show(App.getLanguage("capture_save_failed"));
          }
        });
      },
      fail: function () {
        wx.showToast({
          title: App.getLanguage("capture_failed")
        }), App.tips.show(App.getLanguage("capture_failed"));
      }
    }), this.onCaptureFinish(e, t));
  }, s.clearCanvas = function () {
    var e = this._canvas.getContext("2d");
    e && e.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }, s.saveImage = function () {
    var e = this.node.getComponent(_dependency2.UITransform);
    e && this.savaAsImage(e.width, e.height, this._buffer);
  }, a;
}(_dependency2.Component)) || _);
_dependency2.cclegacy._RF.pop();
