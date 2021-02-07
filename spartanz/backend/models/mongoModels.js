const mongoose = require("mongoose")

const  schema = mongoose.Schema ({
    name:String,
    number:Number,
    age:Number,
    package:String,
    gender:String,
    specific:String,
    gmail:String,
    joindate:Date,
    expiry:Date,
    imgUrl:String,
    program:String,

    card:Number,
    days:Number,
    
    assessment:[Object],
    workout:[Array],
    dates:[Date],

    autograph :Boolean

})

const members = mongoose.model("members",schema)

module.exports = members    
