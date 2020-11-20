/* exported reverseWord */
function reverseWord(word) {
  var x = "";
  for (i = word.length - 1; i > -1; i--) {
    x += word[i];
  }
  return x;
}
