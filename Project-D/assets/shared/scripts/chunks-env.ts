// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
var _export;
export { _export as PREVIEW };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "PREVIEW":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
_publish("PREVIEW", !1);
