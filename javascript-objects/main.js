/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: "Rich",
  lastName: "Trunzo",
  age: 27
}
var fullName = student.firstName + " " + student.lastName;

console.log("Value of fullName:", fullName);

student.livesInIrvine = false;

student.previousOccupation = "Public Relations";

console.log("Value of student.livesInIrvine:", student.livesInIrvine);
console.log("Value of student.previousOccupation:", student.previousOccupation);
console.log("Value of student:", student);

var vehicle = {
  make: "Chevy",
  model: "Volt",
  year: 2013
}

vehicle['color'] = "Dark Grey";
vehicle['isConvertible'] = false;

console.log("Value of vehicle[color]:", vehicle['color']);
console.log("Value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log("Value of vehicle object:", vehicle);

var pet = {
  name: "Duke",
  type: "Dog"
}

delete pet.name;
delete pet.type;

console.log("Value of pet object:", pet);
