const mongoose = require("mongoose")

const  schema = mongoose.Schema ({
    name:String,
    number:Number,
    assessment:[Object]

})

const members = mongoose.model("members",schema)

module.exports = members    
