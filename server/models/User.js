const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: {type: String, required: true},
    hashedPassword: { type: String, required: true },
    games: [{type: Schema.Types.ObjectId, ref: 'Game', default: []}],
    likedGames: [{type: Schema.Types.ObjectId, ref: 'Game', default: []}]
});

const User = model('User', userSchema);

module.exports = User;