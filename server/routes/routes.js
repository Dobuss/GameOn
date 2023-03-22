const router = require('express').Router();
const controller = require('../controllers/subscriptionController');
const gamesController = require('../controllers/gamesController');
const commentController = require('../controllers/commentController');

  router.get('/games', gamesController.getGames);
  router.get('/games/:gameId', gamesController.getGameById);
  router.get('/games/comments', commentController.getCommentByGameId);

  router.post('/subscribe', controller.subscribe);
  router.post('/games', gamesController.addGame);
  router.post('/games/comments', commentController.createComment);

  router.put('/games/:gameId', gamesController.updateGame);
  router.patch('/games/:gameId', gamesController.patchGame);
  router.delete('/games/:gameId', gamesController.deleteGame);

  module.exports = router;