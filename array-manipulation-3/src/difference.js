/* exported difference */
function difference(first, second) {
  var arr = [];
  for (i = 0; i < first.length; i++) {
    if (first[i] !== second[i] && first[i] !== second[i + 1] && first[i] !== second[i + 2] && first[i] !== second[i + 3] && first[i] !== second [i - 3]) {
      arr.push(first[i]);
    }
  } for (i = 0; i < second.length; i++) {
    if (second[i] !== first[i] && second[i] !== first[i + 1] && second[i] !== first[i + 2] && second[i] !== first[i + 3] && second[i] !== first[i - 2]) {
      arr.push(second[i]);
    }
  }
  return arr;
}
