const { commentModel } = require('../models/Comment');
const { errorHandler } = require("../utils/errorHandler");

const createComment = async (req, res) => {
    const data  = req.body;
    try {
        await commentModel.create(data);
        res.status(200).json(data);
    } catch (error) {
        errorHandler(error, res, req);
    }
}

const getCommentByGameId = async (req, res) => {
    const { gameId } = req.params;

  try {
    const comments = await commentModel.findById(gameId);
    if (!comments) {
      throw new ValidationError("There is no comments in our database!");
    }
    res.status(200).json({ comments: comments.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
}
module.exports = {
    createComment,
    getCommentByGameId
}