/* exported filterOutStrings */
function filterOutStrings(values) {
  var arr = [];
  var string = "string";
  var typeOfString = typeof string;
  for (i = 0; i < values.length; i++) {
    if (typeof values[i] != typeOfString) {
      arr.push(values[i]);
    }
  }
  return arr;
}
