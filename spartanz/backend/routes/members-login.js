const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")

router.route("/save").post((req,res) =>{

    let name= req.body.info.name
    let number =  req.body.info.number


    let data = new membersDB( {
        name,   
        number,
    })
   
    data.save()
    .then((ress)=>res.send(ress))   
})

router.route('/').get((req,res)=>{
    console.log("vathi is comming")
})


router.route('/profile').post((req,res)=>{

    membersDB.findOne({"number":String(req.body.number)})
    .then(datas=>{
        res.send(datas)
    })
    .catch((err)=>{
        res.send(err)
    })
})










module.exports = router
