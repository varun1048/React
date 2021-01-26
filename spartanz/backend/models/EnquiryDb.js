const mongoose = require("mongoose")

const  schema = mongoose.Schema ({
    name:String,
    number:Number,
    gmail:String
    
})

const Enquiry  = mongoose.model("Enquiry",schema)

module.exports = Enquiry    
