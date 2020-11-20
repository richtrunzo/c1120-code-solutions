/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  for (i = 0; i < keyValuePair.length; i++)
  if (keyValuePair[i] === keyValuePair[0]) {
    object[keyValuePair[i]];
  } else if (keyValuePair[i] === keyValuePair[1]) {
    object[keyValuePair[0]] = keyValuePair[i];
  }
  return object;
}
