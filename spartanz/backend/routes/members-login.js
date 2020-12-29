const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")

router.route("/save").post((req,res) =>{

    let name= req.body.name
    let number =  req.body.number

    let data = new membersDB( {
        name,   
        number
    })
    
    data.save()
        .then(()=>res.send("400"))
})

router.route('/profile').get((req,res)=>{

    membersDB.findOne({"number":String(req.body.number)})
    .then(datas=>{
        console.log("varun is comming")
        res.send(datas.name)
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports = router
