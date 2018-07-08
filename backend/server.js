const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3333;

/*
app.use(function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});
*/

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/new', (req, res) => {
  console.log(req.body);
  if (!req.body.name) {
    res.send('error');
    return;
  }
  res.send();
});

app.listen(PORT, () => {
  console.log('Listening @ ' + PORT);
});