/* exported filterOutNulls */
function filterOutNulls(values) {
  var arr = [];
  for (i = 0; i < values.length; i++) {
    if (values[i] != null) {
      arr.push(values[i]);
    }
  }
  return arr;
}
