const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
require('./model/config')
var bodyParser = require("body-parser")
const app = express()
const router = require('./routes/commonRoutes')
app.use(express.json())
app.use(bodyParser.json())
var fs = require("fs")

app.use('/', router)


app.listen(process.env.PORT, function (req, res) {
    console.log(`Server is running on port no : ${process.env.PORT}`);
});




