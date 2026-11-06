// Original Creator3.8.8 Skeleton methods; TS annotations removed only.
(class extends Base {
__preload() {
  super.__preload();
  if (EDITOR_NOT_IN_PREVIEW) {
    this.paused = true;
  }
  this._updateSkeletonData();
  this._updateDebugDraw();
}

/**
 * @engineInternal
 */
/**
 * @en Find animation with specified name.
 * @zh 查找指定名称的动画
 * @param name @en The name of animation. @zh 动画名称。
 * @returns {sp.spine.Animation}
 */
findAnimation(name) {
  if (this._skeleton) {
    return this._skeleton.data.findAnimation(name);
  }
  return null;
}
/**
 * @en Returns track entry by trackIndex.<br>
 * Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.
 * @zh 通过 track 索引获取 TrackEntry。<br>
 * 返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。
 * @param trackIndex @en The index of trackEntry. @zh TrackEntry 索引。
 * @return {sp.spine.TrackEntry}
 */
})
