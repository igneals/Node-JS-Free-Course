const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app')
const mogan = require('morgan')
const app = express();
const port = 3000;

app.use(mogan('combined'));

app.get('/', (req, res) => {
    res.send('Hello My World!');
});

app.listen(port, () => {
    //console.log(`Listening at http://localhost:${port}`);
    debug(`Listening at http://localhost:${port}`);
});