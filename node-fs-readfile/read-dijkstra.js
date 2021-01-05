// let read = require('./dijkstra.txt');

// fs.readFile(read, (err, data) => {
//   console.log(data);
// });

let fs = require('fs');


fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  console.log(data);
})
