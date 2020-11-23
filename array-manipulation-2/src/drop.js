/* exported drop */
function drop(array, count) {
  var arr = [];
  for (i = 0; i < array.length; i++) {
    if (i === array.length) {
      return arr;
    } else if (i >= count) {
      arr.push(array[i]);
    }
  }
  return arr;
}
