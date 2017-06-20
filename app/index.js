const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const data = require("./data");

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// TODO put your routes here

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
