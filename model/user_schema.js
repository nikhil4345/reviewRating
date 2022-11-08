const  mongoose  = require('mongoose')
const userSchema = new mongoose.Schema({

    user :{
        type: String,
        require : true
    },
    phoneNumber :{
        type : String,
        require : true,
        default : false
    },
    password :{
        type: String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    city:{
        type: String,
        require : true
    },
    state :{
        type: String,
        require : true
    },
    isActive: {
        type: Boolean,
        default:true
    },
    role: {
        type: String,
        default:"user"
    }

})
userSchema.set ("timetamps",true)
module.exports = mongoose.model('user',userSchema)