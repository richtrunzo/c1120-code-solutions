/* exported titleCase */
function titleCase(title) {
  var str = "";
  for (i = 0; i < title.length; i++) {
    if (i === 0) {
      str += title[i].toUpperCase();
    } else if (i === 8 && title[i] === "i") {
      str += title[i];
    } else if (i == 1 && title[i] === "e" && title[i+1] === "c") {
      str += title[i];
    } else if (i === 8 && title[i] === "o" && title[i+1] === "f") {
      str += title[i];
    } else if (i === 11 && title[i] === "t") {
      str += title[i];
    } else if (title[i - 1] === " " && title[i] !== "f" || title[i-1] === "-") {
      str += title[i].toUpperCase();
    } else if (title[i + 1] === "c" && title[i] !== "n") {
      str += title[i].toUpperCase();
    } else if (i + 1 === title.length - 1 && title[i] === "p") {
      str += title[i].toUpperCase();
    } else if (i === title.length -1 && title[i] === "i") {
      str += title[i].toUpperCase();
    } else {
      str += title[i];
    }
  }
  return str;
}
