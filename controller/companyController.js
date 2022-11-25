const companies = require('../model/company_schema')
const reviews = require('../model/review_schema')

//-----------------------------------==company signup=-------------------------------


const companyRegister = async (req, resp) => {

    try {
        const companyExists = await companies.findOne({ companyName: req.body.companyName })

        if (companyExists) {
            return resp.status(400).json({
                status: 400,
                error: "company already exists",
            })
        }
        let company = new companies(req.body);
        const filePath = `/uploads/${req.file.filename}`;
        company.company_logo = filePath
        let result = await company.save();
        console.log("result", result)
        resp.send({
            "status": "200",
            "message": "created"
        })
    } catch {
        resp.send({
            "status": "Failed",
            "message": "Not Created"
        })
    }
}

//-------------------------------==company listing=-----------------------------


const companyListing = async (req, resp) => {


    try {
        const companyList = await companies.find()
        const companyCount = await companies.find().count()
        resp.json({ companyCount, companyList })

    } catch {
        resp.send('error')
    }
}

//--------------------------==Add review==---------------------------------------


const addReview = async (req, resp) => {

    try {
        let review = new reviews(req.body);
        let addR = await review.save();
        console.log("result", addR)
        resp.send({
            "status": "200",
            "message": "review created"
        })
    } catch {
        resp.send({
            "status": "failed",
            "message": "err"
        })
    }
}

//---------------------------==reviewDetails==------------------------------------


const companyReviewDetails = async (req, resp) => {

    try {
        const id = req.params.id
        console.log('api company id:', id)
        let company = await companies.findById(id)
        let companyDetails = {"c_name" : company.companyName , "city" : company.city}
        const comments = await reviews.find({ 'company_id': `${id}` }).populate('users')
        // .populate({
        //         path: 'users', select: "name"
        //     }).populate({
        //         path: 'companies', select: 'companyName'
        //     })
        console.log('**** comments:', comments)
        var data = {
            'company': companyDetails,
            'comments': comments
        }
        resp.json(data)

    } catch {
        resp.send({
            "status": "failed",
            "message": "company not exist"
        })
    }
}

module.exports = {
    companyRegister,
    companyListing,
    addReview,
    companyReviewDetails
}
