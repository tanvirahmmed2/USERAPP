exports.registerUser = (req, res) => {
    try {
        const { name, email, password, dob } = req.body;
        const newUser = {
            name, email, password, dob
        }
        return res.status(200).json({
            message: "user was created",
            newUser
        })
    } catch (error) {
        return res.status(404).json(error.message)
    }
}


exports.loginUser = (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === 'tanvir@gmail.com' && password === 'tanvir1234') {
            return res.status(200).json({
                message: "user was logged in"
            })
        } else {
            return res.status(404).json({
                message: "email or password didnot matched"
            })
        }

    } catch (error) {
        return res.status(404).json(error.message)
    }
}