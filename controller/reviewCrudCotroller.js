const reviewCrud = require('../model/review_schema')
const user = require('../model/user_schema');

//------------------------------==CREATE DATA=------------------------------------


const createReview = async function (req, resp) {

    try {
        let crudReview = new reviewCrud(req.body);
        let addR = await crudReview.save();
        resp.send({
            "status" : "201",
            "message" : "review created"
        })
    } catch {
        resp.send({
            "status" : "failed",
            "message" : "err"
        },)
    }

}

//--------------------------------===READ DATA==--------------------------------


const retrieveReview = async function (req, resp) {
const id =req.params.id
    try {
        const findResult = await reviewCrud.findById(id)
         resp.json({findResult})
    } catch {
        resp.send({
            "status" : "failed",
            "meassage": "Data not Exist"
        })
    }
}

//------------------------------==UPDATE DATA==-----------------------------------


const updateReview = async function (req, resp) {
    const id = req.params.id
    try {
        const updateResult = await reviewCrud.findByIdAndUpdate(id, req.body, { new: true })
        resp.json(updateResult)
    } catch {
        resp.send({
            "status": "failed",
            "meassage": "Id not Exist"
        })
    }

}

//-------------------------==Delete Data==------------------------------------------

const deleteReview = async function (req, resp) {
    const id = req.params.id
    reviewCrud.findByIdAndDelete(id, function (err, deleted) {
        if (err) {
            resp.send(err)
        }
        else {
            resp.json({ deleted })
        }

    })
}

module.exports = {
    createReview,
    retrieveReview,
    updateReview,
    deleteReview
}
