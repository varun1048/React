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
    membersDB.findById(obj._id)  //note in line
    .then(datas => {
        let tep = datas.assessment
        let id =  obj._id
        delete obj._id
        
        tep.push(obj)
        membersDB.updateOne({"_id":id},{"assessment":tep})
        .then(doc => console.log("updated :"+id))
        .catch(err => console.log("on updateing"+ err))        
    })
    .catch(err => console.log("on finding:"+ err))
})

module.exports = router
