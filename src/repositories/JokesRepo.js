const Jokes = require('../models/Jokes')
const BaseRepo = require('./BaseRepo')

class JokesRepo extends BaseRepo {
    constructor(Model) {
        super(Model)
        this.Model = Model
    }
}

const jokesRepo = new JokesRepo(Jokes)

module.exports = jokesRepo
