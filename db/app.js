const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', routes);

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        errors: err.errors
    });
});

module.exports = app;