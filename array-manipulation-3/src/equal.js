/* exported equal */
function equal(first, second) {
  var str = "";
  var strTwo = "";
  for (i = 0; i < first.length; i++) {
  str += first[i];
  } for (i = 0; i < second.length; i++) {
    strTwo += second[i];
  } if (str === strTwo) {
    return true;
  } else {
    return false;
  }
}
