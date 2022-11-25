const bcrypt = require("bcrypt");
const User = require("../model/user_schema")
const jwt = require('jsonwebtoken')
const cron = require('node-cron')
const { transporter, mailOptions } = require('../service/mailService')

//-----------------------------==USERSIGNUP==-------------------------------------

// const userSignup = async function (req, resp) {

//     const {email, password } = req.body;
//     const userData = new User({
//         user: req.body.user,
//         phoneNumber: req.body.phoneNumber,
//         password: req.body.password,
//         email: req.body.email,
//         city: req.body.city,
//         state: req.body.state

//     })

//     try {


//         const userExists = await User.findOne({ email: req.body.email })

//         if (userExists) {

//            return resp.status(400).json({
//                status: 400,
//                error: "email already exists",


//         })
//     }
//         const salt = await bcrypt.genSalt(10);
//         userData.password = await bcrypt.hash(password, salt);
//         console.log("Already exist=>", req.body.email)
//         const filePath = `/uploads/${req.file.filename}`;
//         userData.userPic = filePath
//         const addRes = await userData.save()
//         console.log('after try',addRes);
//         resp.json(addRes)

//     } catch (err) {
//         console.log(err);
//         resp.send('error')
//     }`
// }



const userSignup = async function (req, resp) {

    const { email, password } = req.body;
    const userData = new User(req.body)

    try {
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            return resp.status(400).json({
                status: 400,
                error: "email already exists",
            })
        }
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(password, salt);
        const filePath = `/uploads/${req.file.filename}`;
        userData.userPic = filePath
        const addRes = await userData.save()
        resp.json(addRes)

    } catch (err) {
        console.log(err);
        resp.send('error')
    }
}
//------------------------------==USER LOGIN==------------------------------------------------


const userLogin = async (req, resp) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = await User.findOne({ email: email });
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password)
                if (user.email == email && isMatch) {
                    //Generate jwt
                    const token = jwt.sign({ userID: user._id },
                        process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                    resp.send({ status: "Success", message: "Login Success", "token": token })
                } else {
                    resp.send({
                        status: "failed",
                        message: "Email or Password is not valid"
                    })
                }
            } else {
                resp.send({ status: "failed", message: "you are not register user" })
            }
        }
    } catch (err) {
        resp.send("error" + err)
    }
}

//-------------------------------==SENDMAIL==-----------------------------------------


const sendMail = async (req, resp) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('email sent successfuly' + info.response)
        }

    })
}
cron.schedule('* * * * 5 *', function () {
    sendMail();
})

//----------------------------== reset password--------------------------------


const sendUserResetPasswordEmail = async (req, resp) => {

    const { email } = req.body

    if (email) {
        const user = await User.findOne({ email: email })
        if (user) {
            const secret = user._id + process.env.JWT_SECRET_KEY
            const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
            const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
            console.log('link :', link);
            //send Email
            let info = await transporter.sendMail({
                from: "nikhilpatil0759@gmail.com",
                to: email,
                subject: "Password reset link",
                html: `<a href=${link}> click here to reset password </a>`
            })
            resp.send({ "status": "success", "message": "password Reset Email sent..plzz /check your email" })
        }
        else {
            resp.send({
                "status": "failed",
                "message": "email is required"
            })
        }

    } else {
        resp.send({
            "status": "failed",
            "message": "user not found"
        })
    }

}

//---------------------------------==RESET=------------------------------------

const userPasswordReset = async (req, resp) => {

    const { password, confirm_password } = req.body
    const { id, token } = req.params
    const user = await User.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY

    try {

        jwt.verify(token, new_secret)
        if (password && confirm_password) {

            if (password !== confirm_password) {
                resp.send({
                    "STATUS": "FAILED",
                    "message": "verify pass"
                })
            } else {
                const salt = await bcrypt.genSalt(10);
                var new_password = await bcrypt.hash(password, salt);
                await User.findByIdAndUpdate(user._id, {
                    $set: { password: new_password }
                })
                resp.send({
                    "status": " success",
                    "message": "password reset successfully"
                })
            }

        } else {
            resp.send({
                "status": "failed",
                "message": "all fields are required"
            })
        }
    } catch (error) {

    }
}


module.exports = {
    userSignup,
    userLogin,
    sendMail,
    sendUserResetPasswordEmail,
    userPasswordReset
}
