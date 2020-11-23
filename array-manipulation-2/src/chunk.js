/* exported chunk */

function chunk(array, size) {
  var arr = [];
  for (i = 0; i < array.length; i += size) {
    arr.push(array.slice(i, i + size));
  }
  return arr;
}
