/* exported reverse */
function reverse(array) {
  var arr = [];
  for (i = array.length - 1; i > -1; i--) {
    arr.push(array[i]);
  }
  return arr;
}
