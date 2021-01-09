const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res, next) => {
let getArray = [];
for (let prop in data['notes']) {
      getArray.push(data['notes'][prop]);
    };
  res.status(200).json(getArray);
  });


app.get('/api/notes/:id', (req, res, next) => {
  if (isNaN(req.params.id) === true || req.params.id < 0 ) {
    res.status(400).json({'error': 'id must be a positive integer'});
  };
  if (data['notes'][req.params.id]) {
    res.status(200).json(data['notes'][req.params.id]);
  } else {
    res.status(400).json({ 'error': 'id ' + req.params.id + ' is not found' });
  };
});


app.post('/api/notes', (req, res, next) => {
  if (req.body.content === undefined) {
    res.status(400).json({'error': 'content is a required field'});
  } else {
    let nextId = data['nextId'];
    req.body.id = nextId;
    data['notes'][nextId] = req.body;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        res.status(500).json({ 'error': 'an unexpected error occured' });
      };
    res.status(201).json(req.body);
    });
  }
});


app.delete('/api/notes/:id', (req, res, next) => {
  if (isNaN(req.params.id) === true || req.params.id < 0) {
    res.status(400).json({'error': 'id must be a positive integer'});
  } else if (data['notes'][req.params.id] === undefined) {
    res.status(404).json({'error': 'cannot find note with id ' + req.params.id});
  } else {
    delete data['notes'][req.params.id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        res.status(500).json({ 'error': 'an unexpected error occured' });
      };
    res.status(204).json(res.body);
  });
};
});

app.put('/api/notes/:id', (req, res, next) => {
  if (req.params.id < 0 || isNaN(req.params.id) === true || req.body.content === undefined) {
    res.status(400).json({'error': 'id must be a positive integer and content is a required field'});
  } else if (data['notes'][req.params.id] === undefined) {
    res.status(404).json({ 'error': 'cannot find note with id ' + req.params.id });
  } else {
    data['notes'][req.params.id]['content'] = req.body.content;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        res.status(500).json({'error': 'an unexpected error occured' });
      };
    res.status(200).json(data['notes'][req.params.id]);
  });
};
});



app.listen(3000, () => {});
