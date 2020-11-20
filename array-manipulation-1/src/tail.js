/* exported tail */
function tail(array) {
  var arr = [];
  for (i = 0; i < array.length; i++) {
    if (i !== 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}
