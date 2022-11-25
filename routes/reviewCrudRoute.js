const express = require('express');
const router = express.Router()
const reviewCrud = require('../controller/reviewCrudCotroller')
const validation = require('../validation/reviewCrud/reviewCrudValidation')

router.post('/create',validation.reviewCrudValidation,reviewCrud.createReview)
router.post('/read/:id',reviewCrud.retrieveReview)
router.patch('/update/:id',reviewCrud.updateReview)
router.delete('/delete/:id',reviewCrud.deleteReview)

module.exports = router


