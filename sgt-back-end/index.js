const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const express = require('express');

const app = express();

app.use(express.json());


app.get('/api/grades', (req, res, next) => {
  const sql = `select *
              from "grades"`;
db.query(sql)
  .then(result => {
    res.status(200).json(result.rows);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({'error': 'An unexpected error occured'});
  })
})


app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  if (name === undefined || course === undefined || score === undefined || score < 1 || score > 100 || isNaN(score) === true) {
    res.status(400).json({error: `name, course and score are required and score must be a number between 1 and 100`});
  };
  const sql = `insert into "grades" ("name", "course", "score")
               values ($1, $2, $3)
               returning *`;
  const params = [name, course, score];
  db.query(sql, params)
  .then(result => {
    res.status(200).json(result.rows[0]);
  })
  .catch(err => {
    res.status(500).json({error: `An unexpected error occured`});
  })
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  if (name === undefined || course === undefined || score === undefined || score < 1 || score > 100 || isNaN(score) === true) {
    res.status(400).json({ error: `name, course and score are required and score must be a number between 1 and 100` });
  };
  const sql = `update "grades"
               set "name" = $1,
                   "course" = $2,
                   "score" = $3
               where "gradeId" = $4
               returning *`;
  const params = [name, course, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({error: `Cannot find grade with id ${gradeId}`});
      } else {
      res.status(200).json(result.rows[0]);
      };
    })
    .catch(err => {
      res.status(500).json({ error: `An unexpected error occured` });
    })
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  if (isNaN(gradeId) === true) {
    res.status(400).json({error: `grade id must be a postive integer`});
  };
  const sql = `delete from "grades"
               where "gradeId" = $1
               returning *`;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with id ${gradeId}` });
      } else {
        res.status(200).json(`deleted row at gradeId ${gradeId}`);
      };
    })
    .catch(err => {
      res.status(500).json({ error: `An unexpected error occured` });
    })
});



app.listen(3000, () => {console.log("Server is on");});
