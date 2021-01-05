const fs = require('fs');

let file = "./" + process.argv[2];

fs.readFile(file, "utf8", (err, data) => {
  console.log(data);
})
