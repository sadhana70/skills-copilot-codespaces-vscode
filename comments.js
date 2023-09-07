// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comments = require('./comments');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

app.post('/comments', (req, res) => {
  comments.addComment(req.body);
  res.send('ok');
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
                           