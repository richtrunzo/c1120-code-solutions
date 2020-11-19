/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var arr = [];
  for (i = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
  }
  return arr;
}
