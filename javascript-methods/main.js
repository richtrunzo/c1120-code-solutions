var numberone = 10;
var numbertwo = 33;
var numberthree = 72;

var maximumValue = Math.max(numberone, numbertwo, numberthree);

console.log("Value of maximumValue:", maximumValue);

var heroes = ["Batman", "Aquaman", "Spiderman", "Iron Man"];

var randomNumber = Math.random();

var randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log("Value of randomIndex:", randomIndex);

var randomHero = heroes[randomIndex];

console.log("Value of randomHero:", randomHero);


var library = [
  {
    title: "Man's Search for meaning",
    author: "Viktor Frankl"
  },
  {
    title: "Harry Potter",
    author: "JK Rowling"
  },
  {
    title: "Lives of the Stoics",
    author: "Ryan Holiday"
  }
]

var lastBook = library.pop();

console.log("Value of lastBook:", lastBook);

var firstBook = library.shift();

console.log("Value of firstBook:", firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log("Value of library:", library);

var fullName = "Rich Trunzo";

var firstAndLastName = fullName.split(' ');

console.log("Value of fistAndLastName:", firstAndLastName);

var sayMyName = firstAndLastName[0].toUpperCase();

console.log("Value of sayMyName:", sayMyName);
