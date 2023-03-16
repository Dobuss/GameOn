const { gameModel } = require("../models/Game");
const { ValidationError } = require("../utils/createValidationError");
const { errorHandler } = require("../utils/errorHandler");

const addGame = async (req, res) => {
  const data = req.body;
  try {
    await gameModel.create(data);
    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const getGames = async (req, res) => {
  try {
    const users = await gameModel.find({}).lean();
    res.status(200).json(users);
  } catch (err) {
    errorHandler(err, res, req);
  }
};

const getGameById = async (req, res) => {
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
};

const updateGame = async (req, res) => {
  const { gameId } = req.params;
  const data = req.body;

  try {
    const game = await gameModel.findByIdAndUpdate(gameId, data, {runValidators: true, new: true})
    res.status(200).json({game: game.toObject()});
  } catch (error) {
    errorHandler(error, res, req)
  }
};

const deleteGame = async (req, res) => {
  const {gameId} = req.params;

  try {
    await gameModel.findByIdAndDelete(gameId);
    res.status(200).json({gameId});
  } catch (error) {
    errorHandler(error, req, req)
  }
}

module.exports = {
  addGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame
};
