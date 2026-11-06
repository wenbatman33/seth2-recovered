// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-state";
import * as _dependency3 from "./main-fsm";
export { isState } from "./main-state";
export { InvalidConstructor } from "./main-fsm";
export { InvalidTransition } from "./main-fsm";
export { StateMachine } from "./main-fsm";
export { randomUUID } from "./main-fsm";
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n;
_dependency.cclegacy._RF.push({}, "f39b9vVhDNKqKjZS2C/2qc7", "index", void 0), _dependency.cclegacy._RF.pop();
