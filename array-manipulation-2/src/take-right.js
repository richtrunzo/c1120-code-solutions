/* exported takeRight */
function takeRight(array, count) {
  var arr = [];
  for (i = 0; i < array.length; i++) {
    if (i === array.length) {
      return arr;
    } else if (i >= array.length - count) {
      arr.push(array[i]);
    }
  }
  return arr;
}
