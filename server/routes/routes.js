const router = require('express').Router();
const controller = require('../controllers/subscriptionController');
const gamesController = require('../controllers/gamesController');

  router.post('/subscribe', controller.subscribe);
  router.post('/games', gamesController.addGame)

  module.exports = router;