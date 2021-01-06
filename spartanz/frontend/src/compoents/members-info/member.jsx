import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'


export default function Member(){
const  Params = useParams()
const [notes, setNotes] = useState(0)
    useEffect(()=>{
        axios.post("http://localhost:5000/members/profile",{"number":Params.id})
        .then((datas)=>{
            setNotes( datas.data )
        })
        .catch(err => console.log(err))
        axios.post("http://localhost:5000/admin/getAll",{"id":notes._id,"name":notes.name})
    })
    return <div className="container">
        wellcome {notes.name}  <br/>
        Number {notes.number}
    </div>
}