const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');
const gamesController = require('../controllers/gamesController');
const subscriptionController = require('../controllers/subscriptionController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/games', gamesController);
    app.use('/subscribe', subscriptionController);
    app.use('/comments', commentController);
}