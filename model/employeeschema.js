const { default: mongoose } = require('mongoose')
const mangoose = require ('mongoose')
const crudeSchema = new mongoose.Schema({

    name :{
        type: String,
        require : true
    },
    sub :{
        type : String,
        require : true,
        default : false
    },
    email : {
        type : String,
        require : true
    },
})
module.exports = mongoose.model('user',crudeSchema)