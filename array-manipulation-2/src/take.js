/* exported take */
function take(array, count) {
  var arr = [];
  for (i = 0; i < count; i++) {
      if (i === array.length) {
        return arr;
      } else {
        arr.push(array[i]);
      }
  }
  return arr;
}
