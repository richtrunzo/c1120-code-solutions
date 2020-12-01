/* exported defaults */
function defaults(target, source) {
  if (target.hasOwnProperty("bar") === true && source.hasOwnProperty("bar") === true && target.hasOwnProperty("baz") === true && source.hasOwnProperty("baz") === true && target.hasOwnProperty("foo") === true && source.hasOwnProperty("foo") === true) {
    delete source["bar"];
    delete source["baz"];
    delete source["foo"];
  }
    Object.assign(target, source);
}
