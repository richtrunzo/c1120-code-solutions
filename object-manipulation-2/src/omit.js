/* exported omit */
function omit(source, keys) {
  var newObject = {};
  var arr = Object.keys(source);
  for (i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (prop !== keys[i] && keys.length !== arr.length) {
        newObject[prop] = source[prop];
        return newObject;
      } else if (prop !== keys[i]) {
        newObject[prop] = source[prop];
      }
    }
  }
  return newObject;
}
