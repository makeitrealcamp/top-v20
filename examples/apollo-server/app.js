const dotenv = require('dotenv');
const express = require('express');
const http = require('http');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

const configExpress = require('./config/express');
const connectDB = require('./config/database');
const graphqlConfig = require('./config/graphql');

const app = express();
const server = http.Server(app);
const env = process.env.NODE_ENV;

if (env !== 'test') {
  connectDB();
}

configExpress(app);
graphqlConfig(app);

module.exports = { app, server };
