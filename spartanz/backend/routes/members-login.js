const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")
let L = inner =>console.log(inner)
router.route("/save").post((req,res) =>{
    let date  = new Date()
    
    let name        = req.body.info.Name
    let number      =  req.body.info.number
    let package     =   req.body.info.package
    let gender      =   req.body.info.gender
    let specific    =   req.body.info.specific
    let gmail       = req.body.info.gmail
    let imgUrl      =    req.body.info.imgUrl
    let joindate    = Date()

    let card = 2; //  note this line to updatein setex
    date.setMonth(Number(req.body.info.package))
    let expiry  = date
    
        let data = new membersDB({
            name,   
            number,
            package,
            gender,
            specific,
            gmail,
            joindate,
            expiry,
            imgUrl,
            card
        })
        data.save()
        .then((ress)=>res.json(ress))   
        .catch(err => L(err))
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


