const router = require('express').Router();
const controller = require('../controllers/subscriptionController')

  router.post('', controller.subscribe);

  module.exports = router;