const express = require('express');

const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());

app.post('/api/grades', (req, res, next) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).send(req.body);
  nextId++
});

app.get('/api/grades', (req, res, next) => {
  let gradesArr = [];
  for (let prop in grades) {
    gradesArr.push(grades[prop]);
  };
  res.json(gradesArr);
});

app.listen(3000, () => {
  console.log('Server is listening');
});
