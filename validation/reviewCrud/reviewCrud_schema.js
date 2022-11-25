const joi = require("joi")
joi.objectId = require('joi-objectid')(joi)


const crudSchema = {

  reviewCrud : joi.object({
    subject : joi.string().min(6).max(100).required(),
    review : joi.string().min(6).max(100).required(),
    rating : joi.number().integer().min(1).max(5).required(),
    user_id : joi.objectId().required(),
    company_id : joi.objectId().required()

  }).unknown(true)
}


module.exports = crudSchema

