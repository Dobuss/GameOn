const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: {type: String, required: true},
    hashedPassword: { type: String, required: true },
    likedGames: [{type: Schema.Types.ObjectId, ref: 'Game', default: []}]
});

const User = model('User', userSchema);

module.exports = User;