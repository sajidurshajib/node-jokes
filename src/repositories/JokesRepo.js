const JokesModel = require('../models/Jokes')
const BaseRepo = require('./BaseRepo')

class JokesRepo extends BaseRepo {
    constructor(Model) {
        super(Model)
        this.Model = Model
    }
}

const jokesRepo = new JokesRepo(JokesModel)

module.exports = jokesRepo
