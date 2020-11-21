/* exported truncate */
function truncate(length, string) {
  var trunc = string.slice(0, length);
  var newString = trunc + "...";
  return newString;
}
