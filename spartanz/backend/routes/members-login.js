const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")
let L = inner =>console.log(inner)
router.route("/save").post((req,res) =>{

    let name= req.body.info.name
    let number =  req.body.info.number
    L(req.body.info)
    // let data = new membersDB({
    //     name,   
    //     number,
    // })
   
    // data.save()
    // .then((ress)=>res.json(ress))   
})

let member =  new Array()
router.route('/profile').post((req,res)=>{
    membersDB.findOne({"number":String(req.body.number)})
    .then(datas=>{
        res.json(datas)
        if(!member.includes(datas.name)){   
            member.push( datas.name)
        }
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.route('/live').get((req,res)=>{
    res.json(member)
})
member = []




module.exports = router

let now  = new Date()
let Expiry  = new Date()
let package = 3
Expiry.setMonth(4)

L( Expiry.toLocaleDateString())









