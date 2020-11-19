/* exported findIndex */
function findIndex(array, value) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === value) {
      return i;
    } else if (array[array.length - 1] != value && array[i] === array[array.length -1]) {
      return -1;
    } else if (array[i] != value) {
      i++;
    }
    }
    }


// for (i = 0; i < array.length; i++) {

// }

// else if (array[array.length - 1] != value) {
//   return -1;
// }

//   else if (array[i] != value) {
//     i++;
//   }
