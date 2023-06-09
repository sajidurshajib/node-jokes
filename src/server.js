const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = require('./app')

// get env variable
dotenv.config({ path: './config.env' })

// DB url
const DB =
    process.env.NODE_ENV === 'development'
        ? process.env.LOCAL_DB
        : process.env.DB

// DB connection
mongoose
    .connect(DB)
    .then(() => {
        console.log('DB connection successful')
    })
    .catch((err) => console.log(err))

// port
const port = process.env.PORT

// run server
app.listen(port, () => {
    console.log(`Server runs on ${port} port...`)
})
