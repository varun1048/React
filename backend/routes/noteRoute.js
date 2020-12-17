const express = require("express")
const router = express.Router()

const Note = require("../models/notesModels")

router.route("/create").post((req,res)=>{
    const title = req.body.title
    const content = req.body.content
    
    const newNote = new Note({
        title,
        content
    })

    newNote.save().then((res)=>{
        console.log(res)
    })
})

router.route('/notes').get((req,res)=>{
    Note.find()
        .then(data => res.json(data))
})
module.exports = router

