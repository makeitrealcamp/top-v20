const dotenv = require('dotenv');
const express = require('express');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

configExpress(app);
routes(app);

module.exports = app;
