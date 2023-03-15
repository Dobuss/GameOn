const router = require('express').Router();
const controller = require('../controllers/subscriptionController');
const gamesController = require('../controllers/gamesController');

  router.post('/subscribe', controller.subscribe);
  router.post('/games', gamesController.addGame);
  router.get('/games', gamesController.getGames);

  module.exports = router;