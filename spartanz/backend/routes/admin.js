const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")
let liveMembers ={
    count : 0,
    memebers : []
};
router.route("/getAll").post((req,res)=>{
    
    console.log(liveMembers)

    res.send(liveMembers)
    // membersDB.find().then(datas => res.send(datas))
    
})

router.route("/bio").post((req,res)=>{
    membersDB.findOne({"_id":String(req.body.id)})
    .then(datas => res.send(datas))
})

module.exports = router
