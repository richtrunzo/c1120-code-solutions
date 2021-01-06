const express = require('express');

const app = express();



app.listen(3000, () => {
  console.log("Server is listening!");
});

app.get('/api/grades', function (req, res){
  let arr = [];
  for (prop in grades) {
    arr.push(grades[prop]);
  };
  res.send(res.json(arr))
});


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
}
