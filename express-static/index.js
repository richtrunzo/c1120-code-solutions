const express = require('express');

const path = require('path');

const app = express();

const join = path.join(__dirname, 'public');
console.log(join);
console.log(__dirname);

const static = express.static(join);

app.use(static);

app.listen(3000, () => {console.log('Listening!')});
