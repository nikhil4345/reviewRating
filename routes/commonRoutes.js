const express = require('express');
const router = express.Router() ;
const companyRouter = require('./companyRoutes');
const userRouter = require('./userRoutes');
const reviewCrud = require('./reviewCrudRoute')

router.use('/user', userRouter);
router.use('/company', companyRouter);
router.use('/reviewCrud', reviewCrud);

module.exports = router
