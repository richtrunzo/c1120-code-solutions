/* exported capitalize */
function capitalize(word) {
  var text = word[0].toUpperCase(word[0]);
  for (i = 1; i < word.length; i++) {
    text += word[i].toLowerCase(word[i]);
  }
  return text;
}
