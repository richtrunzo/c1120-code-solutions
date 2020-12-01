/* exported intersection */
function intersection(first, second) {
  var arr = [];
  for (i = 0; i < first.length; i++) {
    if (first[i] === second[i] || first[i] === second[i + 1] || first[i] === second[i +2] || first[i] === second[i-3]) {
      arr.push(first[i]);
    }
  }
  return arr;
}
