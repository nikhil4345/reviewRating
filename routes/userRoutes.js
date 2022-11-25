const express = require('express');
const router = express.Router()
const user = require('../controller/userController')
const validation = require('../validation/user/user_validation')
const { upload } = require('../middlewares/imageStorage')
const userAuth = require('../middlewares/auth_middleware')

router.post("/register", upload.single("userPic"),validation.registerUserValidation, user.userSignup)
router.post("/login", validation.userLoginValidation, user.userLogin)
router.post("/mail", user.sendMail)
router.post("/send-reset-password-email" , user.sendUserResetPasswordEmail)
router.post("/reset-password/:id/:token",user.userPasswordReset)


module.exports = router;
