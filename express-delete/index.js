const express = require('express');

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  let gradesArr = [];
  for (let prop in grades) {
    gradesArr.push(grades[prop]);
  };
  res.json(gradesArr);
});

app.delete('/api/grades/:id', (req, res) => {
  if (req.params.id === "12") {
    delete grades[12];
  } else if (req.params.id === "47") {
    delete grades[47];
  } else if (req.params.id === "273") {
    delete grades[273];
  }
  res.sendStatus(204);
})


app.listen(3000, () => {
  console.log('Server is listening.')
});
