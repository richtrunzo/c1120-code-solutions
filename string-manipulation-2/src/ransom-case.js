/* exported ransomCase */
function ransomCase(string) {
  var x = "";
  for (i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      x += string[i].toLowerCase();
    } else {
      x += string[i].toUpperCase();
    }
  }
  return x;
}
