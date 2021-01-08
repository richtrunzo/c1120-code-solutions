const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res, next) => {
let getArray = [];
let sendArray = [];
for (let prop in data) {
      getArray.push(data[prop]);
    }; for (let prop in getArray[1]) {
      sendArray.push(getArray[1][prop]);
    };
  res.status(200).json(sendArray);
  });


app.get('/api/notes/:id', (req, res, next) => {
  if(req.params.id < 0 || isNaN(req.params.id) === true) {
    res.status(400).json({'error': 'id must be a positive integer'});
  };
    let getArray = [];
    for (let prop in data) {
      getArray.push(data[prop]);
  } if (getArray[1][req.params.id] === undefined) {
    res.status(400).json({'error': 'id ' + req.params.id + ' is not found' });
  } else {
    res.status(200).json(getArray[1][req.params.id]);
  };
});


app.post('/api/notes', (req, res, next) => {
  if (req.body.content === undefined) {
    res.status(400).json({'error': 'content is a required field'});
  } else if (req.body.content !== undefined) {
    let nextId = data['nextId'];
    req.body.id = nextId;
    data['notes'][nextId] = req.body;
    data['nextId'] = req.body.id + 1;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        res.status(500).json({ 'error': 'an unexpected error occured' });
      };
    res.status(201).json(req.body);
    });
  }
});


app.delete('/api/notes/:id', (req, res, next) => {
  if (req.params.id < 0 || isNaN(req.params.id) === true) {
    res.status(400).json({'error': 'id must be a positive integer'});
  } else if (data['notes'][req.params.id] === undefined) {
    res.status(404).json({'error': 'cannot find note with id ' + req.params.id});
  } else if (data['notes'][req.params.id] !== undefined) {
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
  } else if (data['notes'][req.params.id] !== undefined) {
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
