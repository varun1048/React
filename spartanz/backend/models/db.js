const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://varundb:varun@cluster0.pqsyb.mongodb.net/spartanz"
    ,{useNewUrlParser:true , useUnifiedTopology: true },console.log("DB connected"))
