const express = require("express")
const router = express.Router()
const membersDB = require("../models/mongoModels")


    let id=[]

router.route("/getAll").post((req,res)=>{
    
    if( !id.includes(req.body.id)){    
        id.push({"id":req.body.id, "name":req.body.name })
    }
    console.log(id)
    //     "id":id,
    //     count:id.length,
    //     name:datas.name
    // }))    
})



router.route("/bio").post((req,res)=>{
    membersDB.findOne({"_id":String(req.body.id)})
    .then(datas => res.send(datas))
})

module.exports = router
