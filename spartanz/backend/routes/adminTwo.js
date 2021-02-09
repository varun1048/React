const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")



let packageing = (inner) => {
    if(inner === "2"){
        return "Monthly"
    }
    if(inner === "4"){
        return "Quartely"
    }
    if(inner === "7"){
        return "Half yearly"
    }
    if(inner === "13"){
        return "Annual"
    }
    
}
router.route('/upDatePackage').post((req,res)=>{
    console.log(req.body)
    let date  = new Date()

    date.setMonth(Number(req.body.package))
    let package     =  packageing(req.body.package)

    membersDB.findById(req.body.id)  //note in line
    .then(datas => {
        membersDB.updateOne({"_id":req.body.id},{"expiry":date,"package":package})
        .then(res.json(datas.package +"---"+datas.expiry ))
        .catch(err => console.log("Error updateing"+ err))        
    })
    .catch(err => console.log("err finding update package :"+ err))
})

let date = new Date()
// console.log(date.getHours()+"."+date.getMinutes()  )
let member = []
let DT = new Date
router.route('/live').post((req,res)=> { //member page
    let obj = req.body
    member.push({ name: obj.name, id :obj.id,date : DT.getDate() , time :DT.getHours() +":"+ DT.getMinutes() ,days:obj.days })
    res.json(member)
})
router.route('/live2').post((req,res)=>{ //admin page
    let M={
        array :member 
    }
    res.json(M)
})
router.route('/live3').post((req,res)=>{ //admin page
    let obj = req.body
    membersDB.updateOne({"_id":obj.id},{"days": (obj.days-1)})
    .then(()=> {
        member = member.filter( e => (e.id != obj.id) )
    })  
    .catch(err => console.log("eror on live3 : "+err))

})



module.exports = router
