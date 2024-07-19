// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => {
    res.send('Hello, World health is: !');
    res.status(200);
  });

app.get('/check-name', (req, res) => {
    res.send('Pradeep Rai!');
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
