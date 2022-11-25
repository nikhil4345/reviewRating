const review = require("./reviewCrud_schema")


module.exports = {
    reviewCrudValidation: async (req, resp, next) => {
        console.log('hii')
        let val = await review.reviewCrud.validate(req.body, { abortEarly: true })
        if (val.error) {

            resp.json({
                success : 0,
                message : 'Not Valid'
            })

        }
        else {
            next()
        }

    }
}



