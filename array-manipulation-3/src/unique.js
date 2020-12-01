/* exported unique */
function unique(array) {
  var arr = [];
  var arrTwo = [];
  var arrThree = [];
  for (i = 0; i < array.length; i++) {
    if (array.indexOf(array[i], i + 1) > 0) {
      arr.push(array[i]);
     delete (array[array.indexOf(array[i], i + 1)])
    } else if (array.indexOf(array[i], i + 1) < 0) {
      arr.push(array[i]);
    }
  } for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i], i + 1) > 0) {
      arrTwo.push(arr[i]);
      delete (arr[arr.indexOf(arr[i], i + 1)]);
    } else if (arr.indexOf(arr[i], i + 1) < 0) {
      arrTwo.push(arr[i]);
    }
  } for (i = 0; i < arrTwo.length; i++) {
    if(arrTwo[i] !== undefined) {
      arrThree.push(arrTwo[i]);
    }
  }
  return arrThree;
}
