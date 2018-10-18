const express = require('express');
const app     = express();
const bp      = require('body-parser');

const api     = require('./api/api');

app.use(bp.json());

app.use('/blockchain/', api);

app.listen(5000, () => console.log('Running on localhost:5000'));

module.exports = app;
