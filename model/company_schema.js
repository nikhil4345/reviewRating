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
   
    founded_on :{
        type: String,
        require : true
    },
   
    userId: {
       type: mongoose.Schema.Types.ObjectId,
       require : true,
       ref: 'user'
    },
    company_logo :{
        type: String,
        require : true
    },
    isActive: {
        type: Boolean,
        default:true
    },
    role:{
        type:String,
        default:"company"
    }
    
   
})
companySchema.set ("timestamps",true)
module.exports = mongoose.model('company',companySchema);