/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var property in object) {
    arr.push(property);
  }
  return arr;
}
