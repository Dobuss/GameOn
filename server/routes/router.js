const Router = require('./routes.js');

module.exports = (app) => {
  app.use('/subscribe', Router);
};