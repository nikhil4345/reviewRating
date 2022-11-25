const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({

    subject: {
        type: String,
        require: true
    },
    review: {
        type: String,
        require: true,
    },
    rating: {
        type: String,
        require: true
    },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:"companies"
    },
  
    isActive: {
        type: Boolean,
        default: true
    }

})
reviewSchema.set("timestamps", true)
module.exports = mongoose.model('reviews', reviewSchema)