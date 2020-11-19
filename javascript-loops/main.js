/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */



 function getNumbersToTen() {
   var numbers = [];
   var currentNumber = 1;
   for (i = 0; i < 10; i++) {
     numbers.push(currentNumber);
     currentNumber++;
 }
     return numbers;
 }

 function getEvenNumbersToTwenty() {
   var evenNumbers = [];
   var currentNumber = 2;
   for (i = 0; i < 20; i += 2) {
     evenNumbers.push(currentNumber);
     currentNumber += 2;
   }
   return evenNumbers;
 }

 function repeatWord(word, times) {
   var count = 1;
   var repeated = " ";
   while (count <= times) {
     repeated += word;
     count ++;
   }
   return repeated;
 }

 function logEachCharacter(string) {
   for (i = 0; i < string.length; i++) {
     console.log(string[i]);
   }
 }

 function doubleAll(numbers) {
   var doubled = [];
   for (i = 0; i < numbers.length; i++) {
     doubled.push(numbers[i] * 2);
   }
   return doubled;
 }

 function getKeys(object) {
   var keys = [];
   for (var property in object) {
     keys.push(property);
   }
   return keys;
 }

 function getValues(object) {
   var values = [];
   for (var property in object) {
     values.push(object[property]);
   }
   return values;
 }
