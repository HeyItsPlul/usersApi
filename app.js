const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

// MiddleWare
app.use(express.json())
app.use(bodyParser.json())
//Routes
app.get('/', function(req, res) {
    res.send('This Is The UserApi')
})

const getUserRoute = require('./Routes/getUser/getUser')
app.use('/getUser', getUserRoute)

const uploadUser = require('./Routes/postUser/uploadUser')
app.use('/uploadUser', uploadUser)

// StartUp Api Stuff
mongoose.connect(process.env.DATABASE_LINK), console.log('Connected To MongoDB')
app.listen(5000, console.log('Api Started...'))