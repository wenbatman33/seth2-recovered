// Responsive host compatibility: keep the original raster backdrop covering
// tall windows while leaving the horizontal gameplay panel unchanged.
const __originalHadesBackdropLoad = __export_0.prototype.onLoad;
const __originalHadesBackdropDestroy = __export_0.prototype.onDestroy;
__export_0.prototype.onLoad = function (...args) {
  __originalHadesBackdropLoad.apply(this, args);
  this.__fitLocalBackdrop = () => {
    const sprite = this.bgBlur, frame = __dependency_1.screen.windowSize;
    if (!sprite || frame.width <= 0 || frame.height <= 0) return;
    const image = sprite.node.getComponent(__dependency_1.UITransform);
    const panel = sprite.node.parent.getComponent(__dependency_1.UITransform);
    if (!image || !panel || image.height <= 0) return;
    const scale = Math.max(1, panel.width * frame.height / frame.width / image.height);
    sprite.node.setScale(scale, scale, 1);
  };
  __dependency_1.screen.on('window-resize', this.__fitLocalBackdrop, this);
  this.__fitLocalBackdrop();
};
__export_0.prototype.onDestroy = function (...args) {
  __dependency_1.screen.off('window-resize', this.__fitLocalBackdrop, this);
  return __originalHadesBackdropDestroy.apply(this, args);
};
