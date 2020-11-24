/* exported isPalindromic */
function isPalindromic(string) {
  var lowerCase = string.toLowerCase();
  var str = "";
  var strForward = "";
  for (i = lowerCase.length - 1; i > -1; i--) {
    if (lowerCase[i] === " ") {
      delete lowerCase[i];
    } else {
      str += lowerCase[i];
    }
  } for (i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === " ") {
      delete lowerCase[i];
    } else {
      strForward += lowerCase[i];
    }
  } if (str === strForward) {
    return true;
  } else {
    return false;
  }
}
