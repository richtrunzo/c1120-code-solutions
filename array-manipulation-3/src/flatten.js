/* exported flatten */
function flatten(array) {
  var arr = [];
  var arrTwo = [];
  for(i = 0; i < array.length; i++) {
    if(Array.isArray(array[i]) === true && array[i].length > 1) {
      arr.push(array[i][0]);
      arr.push(array[i][1]);
    } else if (Array.isArray(array[i]) === true && array[i].length === 1) {
      arr.push(array[i][0]);
    } else {
      arr.push(array[i])
    }
  }
  return arr;
}
