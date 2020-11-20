/* exported compact */
function compact(array) {
  var arr = [];
  for (i = 0; i < array.length; i++) {
    if(array[i] === null || array[i] === 0 || array[i] === false || array[i] === "" || array[i] === undefined) {
      delete array[i];
    } else if (isNaN(array[i]) && typeof array[i] !== "string" &&  typeof array[i] !== "object") {
      delete array[i];
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}
