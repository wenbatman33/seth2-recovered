const { prepareRecoveredBuild } = require('../../tools/prepare-recovered-build.cjs');
exports.throwError = true;
exports.onAfterBuild = function (options, result) {
  if (!result.dest) throw Error('Official build result is missing its destination');
  prepareRecoveredBuild(result.dest);
};
