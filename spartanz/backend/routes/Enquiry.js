
const express = require("express")
const router = express.Router()
const EnquiryDb = require("../models/EnquiryDb")

router.route("/").post((req,res) =>{
    let obj = req.body
    let sendDB = new EnquiryDb(obj)
    sendDB.save().then((ress)=> res.json(ress))
})

router.route("/").get((req,res) =>{
    EnquiryDb.find().then( datas =>res.json(datas))
    .catch(err => console.log(err))
})

let liveMember = []
router.route("/live").get( (req,res) =>{
    liveMember.push({"name":req.body.name,"id":req.body.id})
    res.send("vARUH")
})




module.exports = router
