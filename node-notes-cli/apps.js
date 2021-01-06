const fs = require('fs');
const dataJSON = require('./data.json');
const newEntry = process.argv[3];
const updateContent = process.argv[4];
const target = process.argv[2];



if (target === 'read') {
  fs.readFile(JSON.stringify(dataJSON['notes']), 'utf8', (err, data) => {
    for (prop in dataJSON['notes']) {
      console.log(prop + ": " + dataJSON['notes'][prop]);
    };
  });
} else if (target === 'create') {
  fs.writeFile('./data.json', JSON.stringify(dataJSON, dataJSON['notes'][dataJSON['nextId']] = newEntry, dataJSON['nextId']++, null, 2), (err) => {});
} else if (target === 'delete') {
  fs.readFile(JSON.stringify(dataJSON['notes']), 'utf8', (err, data) => {
    for (prop in dataJSON['notes']) {
      if (newEntry === prop) {
        delete dataJSON['notes'][prop]
      };
      fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), (err) => {});
    };
  });
} else if (target === 'update') {
  fs.readFile(JSON.stringify(dataJSON['notes']), 'utf8', (err, data) => {
    for (prop in dataJSON['notes']) {
      if (newEntry === prop) {
        dataJSON['notes'][prop] = updateContent;
      };
      fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), (err) => { });
    };
  });
}
