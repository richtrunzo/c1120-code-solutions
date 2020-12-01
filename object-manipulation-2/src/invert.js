/* exported invert */
function invert(source) {
  var obj = {};
  for (var [prop, value] of Object.entries(source)) {
    obj[value] = prop;
  }
  return obj;
}
