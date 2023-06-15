class AppError extends Error {
    constructor(message, statusCode, name = 'Error', path = '', value = '') {
        super(message)

        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
        this.isOperational = true
        this.name = name
        this.path = path
        this.value = value

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError
