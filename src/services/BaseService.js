const AppError = require('../utils/AppError')

class BaseService {
    constructor(Repo) {
        this.Repo = Repo
    }

    async index() {
        try {
            const data = await this.Repo.index()
            return data
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }

    async show(id) {
        try {
            const data = await this.Repo.show(id)
            return data
        } catch (err) {
            throw new AppError(
                err.message,
                err.statusCode,
                err.name,
                err.path,
                err.value
            )
        }
    }

    async create(data) {
        try {
            return this.Repo.create(data)
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }

    async update(id, data) {
        try {
            return this.Repo.update(id, data)
        } catch (err) {
            throw new AppError(
                err.message,
                err.statusCode,
                err.name,
                err.path,
                err.value
            )
        }
    }

    async delete(id) {
        try {
            return this.Repo.delete(id)
        } catch (err) {
            throw new AppError(
                err.message,
                err.statusCode,
                err.name,
                err.path,
                err.value
            )
        }
    }
}

module.exports = BaseService
