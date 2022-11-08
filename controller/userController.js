const bcrypt = require("bcrypt");
const User = require("../model/user_schema")
const userSchema = require('../model/user_schema')


const userSignup = async (req, resp) => {
    const { email, password } = req.body;
    const userData = new userSchema({
        user: req.body.user,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state

    })
    console.log("====>", req.body.user);
    try {
        console.log('inside try');

        const userExists = await userSchema.findOne({ email: req.body.email })

        if (userExists) {
            return resp.status(400).json({
                status: 400,
                error: "email already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(password, salt);



        const addRes = await userData.save()
        console.log('after try');
        resp.json(addRes)

    } catch (err) {
        console.log(err);
        resp.send('error')
    }
}


module.exports = {
    userSignup
}
