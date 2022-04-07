require('dotenv').config();
const express = require('express');

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

configExpress(app);
routes(app);

module.exports = app;
