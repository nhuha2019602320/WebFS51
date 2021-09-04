const express = require('express')
const app = express();
const mongoose = require('mongoose')

const indexRouter = require('./router/jwtIndex')

const db = 'mongodb://localhost/jwt';
const port = 3009

mongoose.connect(db)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('working')
})

app.use('/api/user', indexRouter)
app.listen(port, () => {
    console.log('sever is running on: ', port)
})