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
module.exports = {
  addGame,
  getGames,
  getGameById,
};
