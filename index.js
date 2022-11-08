const express = require('express')
const mongoose = require('mongoose')
require('./model/config')
var bodyParser = require("body-parser")
const app = express()
const router = require('./routes/userRoutes')
app.use(express.json())
app.use(bodyParser.json())
const bcrypt = require("bcrypt")
const userSchema = require('./model/user_schema')

mongoose.connect('mongodb://127.0.0.1:27017/review', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.use('/',router)

// app.get("/", function (req, resp) {

//     resp.send("welcome to node js world");
// })


// app.post('/registerUser', async (req, resp) => {
//     const {email,password} = req.body;
//     const userData = new userSchema({
//         user: req.body.user,
//         phoneNumber: req.body.phoneNumber,
//         password: req.body.password,
//         email: req.body.email,
//         city: req.body.city,
//         state: req.body.state

//     })
//     console.log("====>",req.body.user);
//     try {
//         console.log('inside try');

//         const userExists = await userSchema.findOne({ email: req.body.email })

//         if (userExists) {
//             return resp.status(400).json({
//                 status: 400,
//                 error: "email already exists"
//             })
//         }
//         const salt = await bcrypt.genSalt(10);
//         userData.password = await bcrypt.hash(password, salt);



//         const addRes = await userData.save()
//         console.log('after try');
//         resp.json(addRes)

//     } catch (err) {
//         console.log(err);
//         resp.send('error')
//     }

// })


app.listen(9000, function (req, res) {
    console.log("server is running on port no :9000");

})




