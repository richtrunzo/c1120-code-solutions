/* exported union */
function union(first, second) {
var arr = [];
for (i = 0; i < first.length; i++) {
  arr.push(first[i]);
} for (i = 0; i < second.length; i++) {
  if (second[i] !== first[i] && second[i] !== first[i + 1] && second[i] !== first[i + 2] && second[i] !== first[i + 3] && second[i] !== first[i + 4] && second[i] !== first[i - 1] && second[i] !== first[i - 2] && second[i] !== first[i - 3] && second[i] !== first[i - 4])
  arr.push(second[i]);
}
return arr;
}
