const mongoose = require('mongoose')

const JokesCollection = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter the title.'],
        trim: true,
    },
    joke: {
        type: String,
        required: [true, 'Please write your joke here.'],
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Please select the category'],
        trim: true,
    },
    nsfw: {
        type: Boolean,
        default: false,
    },
    lang: {
        type: String,
        required: [true, 'Please select the language'],
    },
})

const Jokes = mongoose.model('Jokes', JokesCollection)

module.exports = Jokes
