const joi = require("joi")
joi.objectId = require('joi-objectid')(joi)

const schema = {
  
  registerCompany: joi.object({
    companyName: joi.string().max(20).required(),
    location: joi.string().required(),
    city: joi.string().required(),
    founded_on: joi.string().required()

  }).unknown(true),

  addReview: joi.object({
    subject: joi.string().min(5).max(70).required(),
    review: joi.string().min(5).max(70).required(),
    rating: joi.number().integer().min(1).max(75).required(),
    user_id: joi.objectId().required(),
    company_id: joi.objectId().required()

  }).unknown(true)

}

module.exports = schema

