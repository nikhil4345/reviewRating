 const joi = require("joi")
//const { userLogin } = require("../../controller/userController")

const Schema ={
    registerUser: joi.object({
        user : joi.string().max(20).required(),
        email : joi.string().email().required(),
        password :joi.string().min(6).required(),
        phoneNumber :  joi.number().integer().min(1000000000).max(9999999999).message("invalid mobile no.").required(),
        city : joi.string().required(),
        state : joi.string().required()

    }),

//here we can add another schema like login.
userLogin :joi.object({
  email: joi.string().email().required(),
  password : joi.string().required(),
}).unknown(true)
}

module.exports = Schema