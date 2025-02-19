// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(express.static('public'));

// Read comments from file
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error reading comments.json');
      return;
    }
    res.send(data);
  });
});

// Write comments to file
app.post('/comments', (req, res) => {
  fs.writeFile('comments.json', JSON.stringify(req.body), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error writing comments.json');
      return;
    }
    res.send('Data written to comments.json');
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});