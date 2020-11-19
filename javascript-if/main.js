/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

 function isUnderFive(number) {
   if (number < 5) {
     console.log(true);
   } else {
     console.log(false);
   }
 }

 function isEven(number) {
   if (number % 2 === 0) {
     console.log(true);
   } else {
     console.log(false);
   }
 }

 function startsWithJ(string) {
   if (string[0] === "J") {
     console.log(true);
   } else {
     console.log(false);
   }
 }

 function isOldEnoughToDrink(person) {
   if (person.age >= 21) {
     console.log(true);
   } else {
     console.log(false);
   }
 }

 function isOldEnoughToDrive(person) {
   if (person.age >= 16) {
     console.log(true);
   } else {
     console.log(false);
   }
 }

 function isOldEnoughToDrinkAndDrive(person) {
     console.log(false);
 }

 function categorizeAcidity(pH) {
   if (pH < 7 && pH > -1) {
     console.log("acid");
   } else if (pH > 7 && pH < 15) {
     console.log("base");
   } else if (pH === 7) {
     console.log("neutral");
   } else {
     console.log("invalid pH level");
   }
 }

 function introduceWarnerBro(name) {
   if (name === "yakko" || name === "wakko") {
     console.log("We're the warner brothers!");
   } else if (name === "dot") {
     console.log("I'm cute~");
   } else {
     console.log("Goodnight everybody!");
   }
 }
