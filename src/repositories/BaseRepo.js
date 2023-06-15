const AppError = require('../utils/AppError')

class BaseRepo {
    constructor(Model) {
        this.Model = Model
    }

    async index() {
        try {
            const data = await this.Model.find()
            return data
        } catch (err) {
            throw new AppError(err.message, err.statusCode)
        }
    }

    async show(id) {
        const data = await this.Model.findById({ _id: id })
            .then((response) => response)
            .catch((err) => {
                throw new AppError(
                    `Invalid ${err.stringValue}`
                        .replace(/[{}\\"]/g, '')
                        .trim(''),
                    404,
                    err.name,
                    err.path,
                    err.value
                )
            })
        return data
    }

    async create(data) {
        const newJoke = await new this.Model({
            ...data,
        })

        const joke = await newJoke
            .save()
            .then((result) => result)
            .catch((err) => {
                throw new AppError(err.message, err.statusCode)
            })
        return joke
    }

    async update(id, data) {
        const update = await this.Model.updateOne({ _id: id }, data)
            .then((result) => result)
            .catch((err) => {
                throw new AppError(
                    err.message,
                    err.statusCode,
                    err.name,
                    err.path,
                    err.value
                )
            })
        if (update.acknowledged) return this.show(id)
        else throw new AppError('Data not updated', 404)
    }

    async delete(id) {
        const data = await this.Model.findById({ _id: id })
            .then((result) => result.deleteOne())
            .catch((err) => {
                throw new AppError(
                    err.message,
                    err.statusCode,
                    err.name,
                    err.path,
                    err.value
                )
            })
        return data
    }
}

module.exports = BaseRepo
