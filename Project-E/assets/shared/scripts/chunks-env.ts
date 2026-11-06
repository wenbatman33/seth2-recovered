// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
var _export;
export { _export as PREVIEW };
var _export2;
export { _export2 as DEBUG };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "PREVIEW":
      _export = value;
      break;
    case "DEBUG":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
_publish("PREVIEW", !1), _publish("DEBUG", !1);
