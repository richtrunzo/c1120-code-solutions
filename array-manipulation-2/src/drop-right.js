/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  for (i = 0; i < array.length; i++) {
    if(i === array.length) {
      return arr;
    } else if (i <= (array.length -1) - count) {
      arr.push(array[i]);
    }
  }
  return arr;
}
