const BaseService = require('./BaseService')
const jokesRepo = require('../repositories/JokesRepo')

class JokesService extends BaseService {
    constructor(Repo) {
        super(Repo)
    }
}

const jokesService = new JokesService(jokesRepo)

module.exports = jokesService
