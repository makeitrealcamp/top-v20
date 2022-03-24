/**
 * Main application routes
 */
const helloworld = require('./api/helloworld');
const task = require('./api/task');

function routes(app) {
  // API Routes
  app.use('/api/helloworld', helloworld);
  app.use('/api/tasks', task);
}

module.exports = routes;
