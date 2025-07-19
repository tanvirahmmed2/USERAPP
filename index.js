const express = require("express")
const { body, validationResult } = require("express-validator")
const userRoutes = require("./routes/users.route")

const app = express()

const PORT = 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use("/api", userRoutes)



app.get("/test", (req, res) => {
    res.send("server testing")
})




app.listen(PORT, () => {
    console.log(`Congratulations`)
    console.log(`Server is running at http://localhost:${PORT}`)
})