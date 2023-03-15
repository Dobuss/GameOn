const mongoose = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = (dbConnection) => mongoose.connect(dbConnection, options);