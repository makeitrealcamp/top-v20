// import endpoints (api)
const checkout = require('./api/checkout');

// defining routes
function routes(app) {
  app.use('/api/checkout', checkout);
}

module.exports = routes;
