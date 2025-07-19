const express = require('express');
const { validateRegister, validateLogin } = require('../validation/users.validation');
const {  loginUser, registerUser } = require('../controllers/users.controller');

const userRoutes = express.Router()


userRoutes.post("/register",

    //input validator
    validateRegister
    , registerUser);

userRoutes.post("/login",

    //input validator

   validateLogin


    , loginUser)



module.exports = userRoutes