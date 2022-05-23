/**
 * Main application routes
 */

// Import Endpoints
const user = require('./api/user');

module.exports = (app) => {
  app.use('/api/users', user);
};
