const company = require('./company_schema');
// const review = require('./review_schema')
//const companies = require('../')

module.exports={
    registerCompanyValidation:async(req,res,next)=>{
        
         const value=await company.registerCompany.validate(req.body,{abortEarly:false})
         if(value.error){
            res.json({
                success:0,
                message:value.error.details[0].message
            })
         }else{
            next()
         }
    },
    addReviewValidation :async(req,res,next)=>{
        const val =await company.addReview.validate(req.body,{abortEarly:false})
        if(val.error){
            res.json({
                success:0,
                message:val.error.details[0].message
            })
         }else{
            next()
         }
    }
}