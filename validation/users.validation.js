const { check } = require("express-validator");
const { runValidate } = require(".");

exports.validateRegister =[
    check("name").trim().notEmpty().withMessage("name is missing").isLength({ min: 5 }).withMessage("name must haev atleats 5 characters").isLength({ max: 31 }).withMessage("name can must  have 31 character"),
    check("email").trim().notEmpty().withMessage("email not found").isEmail().withMessage("enter a valid emaill"),
    check("password").trim().notEmpty().withMessage("password missing").isLength({ min: 5 }).withMessage("password must be minimum 5 character"),
    check("dob").trim().notEmpty().withMessage("dob is missing").isDate().withMessage("not a valid date of birth"),
    runValidate
    


]
    


exports.validateLogin = [
    check("email").trim().notEmpty().withMessage("email not found").isEmail().withMessage("enter a valid emaill"),
    check("password").trim().notEmpty().withMessage("password missing").isLength({ min: 5 }).withMessage("password must be minimum 5 character")
    ,runValidate
 

]

    
