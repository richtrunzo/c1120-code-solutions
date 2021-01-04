const add = require('./add');

const subtract = require('./subtract');

const multiply = require('./multiply');

const divide = require('./divide');

if (process.argv[3] === "plus") {
  add(parseInt(process.argv[2]), parseInt(process.argv[4]));
} else if (process.argv[3] === "minus") {
  subtract(parseInt(process.argv[2]), parseInt(process.argv[4]));
} else if (process.argv[3] === "times") {
  multiply(parseInt(process.argv[2]), parseInt(process.argv[4]));
} else if (process.argv[3] === "over") {
  divide(parseInt(process.argv[2]), parseInt(process.argv[4]));
}
