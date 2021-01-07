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

let member =  new Array()
router.route('/profile').post((req,res)=>{
    membersDB.findOne({"number":String(req.body.number)})
    .then(datas=>{
        res.send(datas)
        if(!member.includes(datas.name)){   
            member.push( datas.name)
        }
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.route('/live').get((req,res)=>{
    res.send(member)
})
member = []




module.exports = router





