const takeAChance = require('./take-a-chance');


let promiseObj = takeAChance("Rich");

promiseObj.then((value) => {
  console.log(value);
});

promiseObj.catch((error) => {
  console.log(error.message);
});
