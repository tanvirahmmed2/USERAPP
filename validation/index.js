const { validationResult } = require("express-validator");

exports.runValidate = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let errorlist = errors.array().map((error) => error.msg)
        return res.status(404).json({ error: errorlist })
    }
    next()


}