const { gameModel } = require("../models/Game");
const { errorHandler } = require("../utils/errorHandler");
const {ValidationError} = require("../utils/createValidationError") 

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const games = await gameModel.find({}).lean();
    res.status(200).json(games);
  } catch (err) {
    errorHandler(err, res, req);
  }
})

router.post('/', async (req, res) => {
  const data = req.body;
  try {
    await gameModel.create(data);
    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, res, req);
  }
})

router.get('/:gameId', async (req, res) => {
  const { gameId } = req.params;
  try {
    const game = await gameModel.findById(gameId);
    if (!game) {
      throw new ValidationError("There is no such game in our database!");
    }
    res.status(200).json({ game: game.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
})

router.put('/:gameId', async (req, res) => {
  const { gameId } = req.params;
  const data = req.body;
  try {
    const game = await gameModel.findByIdAndUpdate(gameId, data, {runValidators: true, new: true})
    res.status(200).json({game: game.toObject()});
  } catch (error) {
    errorHandler(error, res, req)
  }
})

router.delete('/:gameId', async (req, res) => {
  const {gameId} = req.params;

  try {
    await gameModel.findByIdAndDelete(gameId);
    res.status(200).json({gameId});
  } catch (error) {
    errorHandler(error, req, req)
  }
})

router.patch('/:gameId', async (req, res) => {
  const { gameId } = req.params;
  const {userId, likes, likedBy} = req.body;

  try {
    const game = await gameModel.findById(gameId);
    game.likes = likes;
    if(game.likedBy.includes(userId)){
      throw new ValidationError('You have liked this game already!')
    }
    game.likedBy.push(likedBy);
    const updatedGame = await gameModel.findByIdAndUpdate(gameId, game)
    res.status(200).json({updatedGame: updatedGame.toObject()});
  } catch (error) {
    errorHandler(error, res, req)
  }
})

module.exports = router;


