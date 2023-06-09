const mongoose = require('mongoose')

const { Schema } = mongoose

const JokesCollection = new Schema({
    title: {
        type: String,
    },
})

const JokesModel = mongoose.model('JokesModel', JokesCollection)

module.exports = JokesModel
