/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstArr = [];
  var secondArr = [];
  var strOne= "";
  var strTwo = "";
  for (i = 0; i < firstString.length; i++) {
    if(firstString[i] === " ") {
      delete firstString[i];
    } else {
      firstArr.push(firstString[i])
    }
  } for (i = 0; i < secondString.length; i++) {
    if(secondString[i] === " ") {
      delete secondString[i];
    } else {
      secondArr.push(secondString[i])
    }
  }
  var compareFirst = firstArr.sort();
  var compareSecond = secondArr.sort();
  for (i = 0; i < compareFirst.length; i++) {
    strOne += compareFirst[i];
  } for (i = 0; i < compareSecond.length; i++) {
    strTwo += compareSecond[i];
  } if (strOne === strTwo) {
    return true;
  } else {
    return false;
  }
}
