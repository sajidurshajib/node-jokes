const express = require('express')
const jokeRouter = require('./routes/jokeRouter')
const AppError = require('./utils/AppError')
const { errorHandler } = require('./controllers/errorControllers')

const app = express()

app.use(express.json())

app.use('/jokes', jokeRouter)
app.get('/', (req, res) => {
    res.json({ msg: 'Hello Joker' })
})

// 404 handle
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

// handle error
app.use(errorHandler)

module.exports = app
