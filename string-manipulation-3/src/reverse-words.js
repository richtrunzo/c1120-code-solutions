/* exported reverseWords */
function reverseWords(string) {
 var arr = string.split(" ");
 var strOne = "";
 var strTwo = "";
 var strThree = "";
 var strFour = "";
 var finalString = "";
 for (i = 0; i < arr.length; i++) {
   if (i === 0) {
     strOne += arr[i];
   } else if (i === 1) {
     strTwo += arr[i];
   } else if (i === 2) {
     strThree += arr[i];
   } else if (i === 3) {
     strFour += arr[i];
   }
 } for(i = strOne.length -1; i > -1; i--) {
   if(i === 0) {
     finalString += strOne[i] + " "
   } else {
    finalString += strOne[i];
   }
  } for (i = strTwo.length - 1; i > -1; i--) {
    if (i === 0) {
      finalString += strTwo[i] + " ";
    } else {
    finalString += strTwo[i];
    }
  } for (i = strThree.length - 1; i > -1; i--) {
    if (i === 0 && strFour.length !== 0) {
    finalString += strThree[i] + " ";
    } else {
    finalString += strThree[i];
    }
  } for (i = strFour.length - 1; i > -1; i--) {
    finalString += strFour[i];
  }
  return finalString;
}
