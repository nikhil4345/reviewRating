const  mongoose  = require('mongoose')
const companySchema = new mongoose.Schema({

    companyName :{
        type: String,
        require : true
    },
     city:{
        type : String,
        require : true,
        default : false
    },
    location : {
        type : String,
        require : true
    },
   
    founded :{
        type: String,
        require : true
    },
    userId: {
       type: mongoose.Schema.Types.ObjectId,
       require: true,
       ref: 'user'
    },
    isActive: {
        type: Boolean,
        default:true
    },
   
})
companySchema.set ("timetamps",true)
module.exports = mongoose.model('company',companySchema)