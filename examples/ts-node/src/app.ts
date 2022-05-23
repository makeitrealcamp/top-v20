import express from 'express';

import routes from './routes';
import expressConfig from './config/express';
import connectDb from './config/database';

const app = express();

const port = process.env.PORT || 8080;

expressConfig(app);

app.listen(port, () => {
  // Connect DB
  connectDb();


  // Routes
  routes(app);

  console.log(`Listening on port ${port}`);
});

export default app;
