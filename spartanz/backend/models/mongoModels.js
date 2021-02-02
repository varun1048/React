const mongoose = require("mongoose")

const  schema = mongoose.Schema ({
    name:String,
    number:Number,
    package:String,
    gender:String,
    specific:String,
    gmail:String,
    joindate:Date,
    expiry:Date,
    imgUrl:String,

    card:Number,
    assessment:[Object],
    workout:[Object]

})

const members = mongoose.model("members",schema)

module.exports = members    
