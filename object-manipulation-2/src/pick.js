/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (i = 0; i < keys.length; i++) {
    if (source.hasOwnProperty(keys[i]) === true && source[keys[i]] !== undefined) {
      obj[keys[i]] = source[keys[i]];
    }
  }
  return obj;
}
