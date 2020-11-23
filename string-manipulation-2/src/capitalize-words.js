/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(" ");
  var newWords = "";
  var finalResult = "";
  for (i = 0; i < words.length; i++) {
    newWords += words[i][0].toUpperCase() + words[i].substr(1).toLowerCase() + " ";
  } for (i = 0; i < newWords.length -1; i++) {
    finalResult += newWords[i];
  }
  return finalResult;
}
