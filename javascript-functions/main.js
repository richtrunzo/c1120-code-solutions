function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log("convertMinutesToSecondsResult:", convertMinutesToSecondsResult);


function greet(name) {
  var greeting = "Hey, " + name;
  return greeting;
}

var greetResult = greet("Rich");

console.log("greetResult:", greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(10, 20);

console.log("getAreaResult:", getAreaResult);


function getFirstName(person) {
  var first = person.firstName;
  return first;
}

var getFirstNameResult = getFirstName({firstName: "Rich", lastName: "Trunzo"});

console.log("getFirstNameResult:", getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement([1, 2, 3, 4]);

console.log("getLastElementResult:", getLastElementResult);
