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

const getGames = async (req, res) => {
    try{
        const users = await gameModel.find({}).lean();
        res.status(200).json(users)
    } catch (err) {
        errorHandler(err, res, req);
    }
   
}
module.exports = {
    addGame,
    getGames
}