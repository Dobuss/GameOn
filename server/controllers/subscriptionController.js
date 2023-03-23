const {subscriptionModel} = require('../models/Subscription'); 
const { errorHandler } = require("../utils/errorHandler");
const router = require('express').Router();

/*const subscribe = async (req, res) => {
    const email  = req.body;
    try {
        await subscriptionModel.create(email);
        res.status(200).json(email);
    } catch (error) {
        errorHandler(error, res, req);
    }
}
module.exports = {
    subscribe
}*/

router.post('/', async (req, res) => {
    const email  = req.body;
    try {
        await subscriptionModel.create(email);
        res.status(200).json(email);
    } catch (error) {
        errorHandler(error, res, req);
    }
})
module.exports = router;