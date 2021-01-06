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
let liveMember={
    count :0,
    id :['a','b',"c"]
}


function fun(inner){
    if(!liveMember.id.includes(inner)){

       liveMember.count = liveMember.id.length  
       liveMember.id.push(inner)
    }
}

fun("v")
fun("v")
fun("v")
fun("d")
// console.log(liveMember)
// console.log(count +"---"+id)
