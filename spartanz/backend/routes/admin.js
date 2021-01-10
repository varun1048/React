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



router.route("/assessment").post((req,res)=>{
    let obj= req.body;

    console.log(obj)
    membersDB.findById(obj._id)  //note in line
    .then(datas => {
        let tep = datas.assessment
        delete obj._id
        tep.push(obj)
        membersDB.updateOne(obj._id,{"assessment":tep})
        .then(doc => res.send(doc))
        .catch(err => console.log("on updateing"+ err))        
    })
    .catch(err => console.log("on finding:"+ err))
})

module.exports = router
