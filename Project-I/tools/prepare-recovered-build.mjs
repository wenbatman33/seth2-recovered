import preparation from './prepare-recovered-build.cjs';
export const {prepareRecoveredBuild}=preparation;
prepareRecoveredBuild(process.argv[2]||'build/web');
