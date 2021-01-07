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
        
        // axios.post("http://localhost:5000/admin/live",{"id":notes})
    })

    return <div className="container">
        wellcome {notes.name}  <br/>
        Number {notes.number}
    </div>
}