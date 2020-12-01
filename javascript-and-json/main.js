var arr = [
  {
    isbn: "1234567",
    title: "Harry Potter",
    author: "JK Rowling"

  },
  {
    isbn: "78912345",
    title: "Man's Search for Meaning",
    author: "Viktor Frankl"
  },
  {
    isbn: "567891234",
    title: "Don Quixote",
    author: "Miquel D. Cervantes"
  }
]

console.log("array of books:", arr);
console.log("type of array of books:", typeof arr);


var string = JSON.stringify(arr);

console.log("JSON.stringify arr:", string);
console.log("typeof JSON.stringify arr:", typeof string)


var jsonString = '{"numberid": "1234567", "stringname": "json string"}'

console.log("manual JSON string:", jsonString);
console.log("typeof manual JSON string:", typeof jsonString);

var parse = JSON.parse(jsonString);

console.log("result of parsing JSON string:", parse);
console.log("type of result of parsing JSON string:", typeof parse);
