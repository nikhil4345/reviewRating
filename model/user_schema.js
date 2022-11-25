const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    user: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    userPic: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: "user"
    }

})
userSchema.set("timestamps", true)
module.exports = mongoose.model('user', userSchema)