const express = require("express");
const router = express.Router();
const company = require('../controller/companyController')
const {upload} = require('../middlewares/imageStorage')
const c_validation = require('../validation/company/company_valid')
const r_validation = require('../validation/company/company_valid')

router.post('/create',upload.single("company_logo"),c_validation.registerCompanyValidation , company.companyRegister)
router.get('/listing',company.companyListing)
router.post('/add_review',r_validation.addReviewValidation,company.addReview)
router.get('/review_details/:id',company.companyReviewDetails)


module.exports = router





