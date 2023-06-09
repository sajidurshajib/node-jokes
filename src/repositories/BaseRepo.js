const AppError = require('../utils/AppError')

class BaseRepo {
    constructor(Model) {
        this.Model = Model
    }

    index() {
        const data = this.Model.find()
            .then((response) => response)
            .catch((err) => {
                throw new AppError(err.message, err.statusCode)
            })
        return data
    }

    show(id) {
        const data = this.Model.findById({ _id: id })
            .then((response) => response)
            .catch((err) => {
                throw new AppError(
                    `Invalid ${err.stringValue}`
                        .replace(/[{}\\"]/g, '')
                        .trim(''),
                    404
                )
            })
        return data
    }

    create(data) {
        const newJoke = new this.Model({
            title: data.title,
        })

        newJoke
            .save()
            .then((result) => result)
            .catch((err) => new AppError(err.message, err.statusCode))
        return newJoke
    }

    update(id, data) {
        this.Model.updateOne({ _id: id }, data)
            .then((result) => result)
            .catch((err) => new AppError(err.message, err.statusCode))
        return this.show(id)
    }

    async delete(id) {
        const data = await this.Model.findById({ _id: id })
            .then((result) => result.deleteOne())
            .catch((err) => new AppError(err.message, err.statusCode))
        return data
    }
}

module.exports = BaseRepo
