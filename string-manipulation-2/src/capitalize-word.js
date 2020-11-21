/* exported capitalizeWord */
function capitalizeWord(word) {
  for (i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {
      var x = word[i].toUpperCase();
    } else if (word[i] === word[4]) {
      x += word[i].toUpperCase()
    } else {
      x += word[i].toLowerCase();
    }
  }
  return x;
}
