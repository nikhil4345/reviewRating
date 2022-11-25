const jwt = require("jsonwebtoken");
const User = require("../model/user_schema");
const company = require("../model/company_schema");


const checkUserAuth = async (req, res, next) => {
let token;
// const { authorization } = req.headers;
if (authorization && authorization.startsWith("Bearer")) {
        try {
            // get token from header
            token = authorization.split(" ")[1];

            //check what we are getting in token and authorization
            console.log('token:', token);
            console.log('authorization :', authorization);
            //verify token
            const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

            //get user from token
            req.user = await User.findById(userID).select('-password');
            next();

        } catch (error) {
            console.log(error);
            res.status(401).send({ status: "failed", meassage: "unauthorized User" })
        }
    }
    if (!token) {
        res.status(401).send({ "message": "unauthorized user no token" })
    }
};


module.exports =  {checkUserAuth} 