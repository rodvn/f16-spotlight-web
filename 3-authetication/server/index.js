var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/login', function (req, res) {
  console.log(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
