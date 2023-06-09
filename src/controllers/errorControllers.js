const AppError = require('../utils/AppError')

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
        stack: err.stack,
    })
}

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        })
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!',
        })
    }
}

const handleCastErrorDB = (err) => {
    const errValue = err.value._id ? err.value._id : err.value
    const message = `Invalid ${err.path}: ${errValue}`
    return new AppError(message, 404)
}

exports.errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res)
    } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err }

        if (error.name === 'CastError') error = handleCastErrorDB(error)

        sendErrorProd(error, res)
    }
}

exports.catchAsync = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next)
}
