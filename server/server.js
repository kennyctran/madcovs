const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '..', 'dist')));

module.exports = app;
