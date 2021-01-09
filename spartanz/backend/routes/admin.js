const { json } = require("express")
const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")

router.route("/getAll").get((req,res)=>{
    membersDB.find().then(datas => res.send(datas) )
})

router.route("/bio").post((req,res)=>{
    membersDB.findOne({"_id":String(req.body.id)})
    .then(datas => res.send(datas))
})



router.route("/assessment").get((req,res)=>{

    let obj= req.body;
    membersDB.findById("5ffa3cbe96dbba0a6c6b66a6")  //note in line
    .then(datas => {
        let tep = datas.assessment
        tep.push({"p":"3"})
        console.log(tep)
        membersDB.updateOne(obj.id,{"assessment":tep})
        .then(doc => res.send(doc))
        .catch(err => console.log("on updateing"+ err))
        
    })
    .catch(err => console.log("on finding:"+ err))
})

module.exports = router
