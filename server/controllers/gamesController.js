const { gameModel } = require('../models/Game');
const { errorHandler } = require("../utils/errorHandler");

const addGame = async (req, res) => {
    const data  = req.body;
    try {
        await gameModel.create(data);
        res.status(200).json(data);
    } catch (error) {
        errorHandler(error, res, req);
    }
}
module.exports = {
    addGame
}