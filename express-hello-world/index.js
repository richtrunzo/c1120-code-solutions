const express = require('express');

const app = express();

app.use(function (req, res){
  res.send("testing send method of res object");
});

app.listen(3000, () => {
  console.log("Server is listening!");
});
