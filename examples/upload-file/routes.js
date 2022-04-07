const upload = require('./api/upload');

function routes(app) {
  // API Routes
  app.use('/api/upload', upload);
}

module.exports = routes;
