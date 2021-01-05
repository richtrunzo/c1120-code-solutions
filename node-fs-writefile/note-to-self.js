const data = process.argv[2];

const fs = require('fs');

fs.writeFile('note.txt', data, (err) => {
  console.log(data.toString());
})
