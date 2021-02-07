let L = (inner)=>console.log(inner)

const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")

router.route("/getAll").get((req,res)=>{
    membersDB.find()
    .then(datas => res.json(datas) )
    .catch(err => console.log("err on getAll in router :"+  err))
})

router.route("/bio").post((req,res)=>{
    membersDB.findOne({"_id":String(req.body.id)})
    .then(datas => res.json(datas))
    .catch(err => console.log("on bio" +err))
})

router.route("/assessment").post((req,res)=>{
    let obj= req.body;
    console.log(obj)
    membersDB.findById(obj._id)  //note in line
    .then(datas => {
        let tep = datas.assessment
        let id =  obj._id
        delete obj._id
        
        tep.push(obj)
        membersDB.updateOne({"_id":id},{"assessment":tep})
        .then(res.json("assessment updated"))
        .catch(err => console.log("on updateing"+ err))        
    })
    .catch(err => console.log("on finding assessment:"+ err))
})

router.route('/SetExerciseDB').post((req,res)=>{
    console.log("SetExerciseDB")
    let obj = req.body
    L(obj.days[0])
    membersDB.findById(obj.id)  //note in line
    .then(datas => {
        membersDB.updateOne({"_id":obj.id},{"workout":obj.days,"card":obj.card,"days":obj.days})
        .then(console.log("assessment updated"))
        .catch(err => console.log("Error updateing"+ err))        
    })
    .catch(err => console.log("on finding SetExerciseDB :"+ err))
})

router.route('/SetExerciseInfo').post((req,res)=>{
    membersDB.findOne({"_id":String(req.body.id)})
    .then(datas =>{
        let hub={   //to send the dats modifaied
            age:22,
            lastAssessment:datas.assessment[ (datas.assessment.length )-1]
        }
        return res.json(hub)
    } )  
    .catch(err => console.log("on set ExerciseInfo:"+err ))
})

router.route('/ExpredPackage').get((req,res)=>{
    membersDB.find()
    .then(datas => {
        let arrya = datas.sort((a, b)=>{
            return a.expiry - b.expiry
        })
        return  res.json(arrya)
    })
    .catch(err => L("error on   ExpredPackage router \n   "+err))

})

module.exports = router