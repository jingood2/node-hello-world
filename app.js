'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World from IBM Cloud Essentials!');
})

app.get('/health', (req, res) => {
  console.log('200 OK');
  res.send(200);
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
