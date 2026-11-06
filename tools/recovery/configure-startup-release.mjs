#!/usr/bin/env node
// Configure the official Creator build only. Never build or change asset metas.
import {readFile,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const collection=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const clone=value=>JSON.parse(JSON.stringify(value));
// Schema produced by Creator 3.8.8's bundle settings UI in Project-I. Bundle
// compression belongs here, not in build-config.bundleConfigs or legacy metas.
export const officialBundleDefaults={displayName:'i18n:builder.asset_bundle.defaultConfig',configs:{native:{preferredOptions:{isRemote:false,compressionType:'merge_dep'}},web:{preferredOptions:{isRemote:false,compressionType:'merge_all_json'},fallbackOptions:{compressionType:'merge_dep'}},miniGame:{fallbackOptions:{isRemote:false,compressionType:'merge_dep'},configMode:'fallback'}}};
function defaults(target,source){for(const [key,value]of Object.entries(source)){if(target[key]===undefined)target[key]=clone(value);else if(value&&typeof value==='object'&&!Array.isArray(value)&&target[key]&&typeof target[key]==='object'&&!Array.isArray(target[key]))defaults(target[key],value);}return target;}
export function releaseBuildConfiguration(input){return{...clone(input),debug:false,mainBundleCompressionType:'merge_all_json',mangleProperties:false,md5Cache:false};}
export function releaseBuilderSettings(input){const output=clone(input);output.bundleConfig??={};output.bundleConfig.custom??={};output.bundleConfig.custom.default??={};defaults(output.bundleConfig.custom.default,officialBundleDefaults);output.bundleConfig.custom.default.configs.web.preferredOptions.compressionType='merge_all_json';return output;}
export async function configureStartupRelease(projectRoot){const root=resolve(projectRoot),buildFile=resolve(root,'build-config.json'),settingsFile=resolve(root,'settings/v2/packages/builder.json'),build=JSON.parse(await readFile(buildFile,'utf8')),settings=JSON.parse(await readFile(settingsFile,'utf8')),nextBuild=releaseBuildConfiguration(build),nextSettings=releaseBuilderSettings(settings);
 await writeFile(buildFile,JSON.stringify(nextBuild,null,2)+'\n');await writeFile(settingsFile,JSON.stringify(nextSettings,null,2)+'\n');return{project:root,debug:nextBuild.debug,mainBundleCompressionType:nextBuild.mainBundleCompressionType,customWebCompressionType:nextSettings.bundleConfig.custom.default.configs.web.preferredOptions.compressionType,inlineEnum:nextBuild.inlineEnum,officialGuiRebuildRequired:true};}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){const projects=process.argv.slice(2);for(const name of projects.length?projects:'ABCDEFGH'.split('').map(x=>'Project-'+x)){if(!/^Project-[A-Z]+$/.test(name))throw Error('Pass neutral Project-X folders');console.log(JSON.stringify(await configureStartupRelease(resolve(collection,name))));}}
