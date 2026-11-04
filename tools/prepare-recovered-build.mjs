// CLI entry for the same synchronous official GUI build hook.
import preparation from './prepare-recovered-build.cjs';
export const { prepareRecoveredBuild } = preparation;
prepareRecoveredBuild(process.argv[2] || 'build/frontend-hades');
