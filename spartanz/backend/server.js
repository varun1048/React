console.clear()
require("./models/db")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.use('/members',require('./routes/members-login'))
app.use('/admin',require('./routes/admin'))

app.listen(5000,console.log("Backend server under port:5000"))



