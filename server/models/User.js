const {Schema, model} = require('mongoose');

const userSchema = Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: {type: String, required: true},
    hashedPassword: { type: String, required: true }
});

const User = model('User', userSchema);

module.exports = User;