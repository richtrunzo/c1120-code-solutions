/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
    var str = "";
    for (i = 0; i < string.length; i++) {
     if (string[i] !== string[firstIndex] && string[i] !== string[secondIndex]) {
       str += string[i];
       } else if (i === firstIndex) {
          str += string[secondIndex];
          } else if (i === secondIndex){
          str += string[firstIndex];
          } else {
            str += string[i];
          }

         }
   return str;
}


// if (string[i] === string[secondIndex] && string[i] !== string[string.length - 2])
