require('dotenv').config()

const express = require('express');

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

configExpress(app);
routes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
