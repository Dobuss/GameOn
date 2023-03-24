const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'Game name must be at least 2 characters']
    },
    category: {
        type: String,
        required: [true, 'Game category is required'],
    },
    date: {
        type: String,
        required: [true, 'Release date is required'],
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    platform: {
        type: String,
        required: [true, 'Platform is required'],
    },
    mode: {
        type: String,
        required: [true, 'Mode is required'],
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Game description must be at least 10 characters']
    },
    likes: {
        type: Number,
        default: 0
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

const gameModel = model('Game', gameSchema);
module.exports = {
    gameModel
};
