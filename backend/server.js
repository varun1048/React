console.clear()
const exp = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = exp()

app.use(cors())
app.use(exp.json())

mongoose.connect("mongodb+srv://varundb:varun@cluster0.pqsyb.mongodb.net/notesDB"
    ,{useNewUrlParser:true , useUnifiedTopology: true },console.log("DB connected"))

app.use("/",require("./routes/noteRoute"))

app.listen(3001,console.log("Backend from :3001"))