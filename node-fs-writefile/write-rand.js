const data = Math.random().toString();

const fs = require('fs');

fs.writeFile('random.txt', data, (err) => {
 console.log(data.toString());
})
