/* exported includesSeven */
function includesSeven(array) {
  var i = 0;
  while (i <= array.length) {
    if (array.length === 0) {
      return false;
    } else if (array[i] === 7) {
      return true;
    } else if (array[i] != 7) {
      i++;
    } else {
      return false;
    }
  }
}
