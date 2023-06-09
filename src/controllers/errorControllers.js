const AppError = require('../utils/AppError')

exports.errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
}

exports.handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`
    return new AppError(message, 400)
}

exports.catchAsync = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next)
}
