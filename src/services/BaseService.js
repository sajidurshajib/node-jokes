const AppError = require('../utils/AppError')

class BaseService {
    constructor(Repo) {
        this.Repo = Repo
    }

    index() {
        try {
            return this.Repo.index()
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }

    async show(id) {
        try {
            const data = await this.Repo.show(id)
            return data
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }

    create(data) {
        try {
            return this.Repo.create(data)
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }

    update(id, data) {
        try {
            return this.Repo.update(id, data)
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }

    delete(id) {
        try {
            return this.Repo.delete(id)
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }
}

module.exports = BaseService
