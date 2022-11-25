const user = require("./user_schema")

module.exports = {
    registerUserValidation: async (req, res, next) => {
        const value = await user.registerUser.validate(req.body, { abortEarly: false })
        if (value.error) {
            
            res.json({
                success: 0,
                message :'error'
            })
        }
        else {
            next()
        }

    },
    userLoginValidation: async (req, res, next) => {
        const value = await user.userLogin.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message : "All fields are required"
            })
        }
        else {
            next()
        }

    }

}