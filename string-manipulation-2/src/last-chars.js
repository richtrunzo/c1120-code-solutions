/* exported lastChars */
function lastChars(length, string) {
  var newString = "";
  if (length > string.length) {
    newString += string.slice(0, string.length);
  } else {
    newString += string.slice((string.length - length), string.length);
  }
  return newString;
}
