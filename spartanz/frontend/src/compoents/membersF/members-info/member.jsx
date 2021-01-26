import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

import Exercise from "./content/Exercise"

export default function Member(){
    let Proimage="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png"

const  Params = useParams()
const [notes, setNotes] = useState(0)

let st={"width":"10"}
useEffect(()=>{
        axios.post("http://localhost:5000/members/profile",{"number":Params.id})
        .then((datas)=>{
            setNotes( datas.data )
        })
        
    })

    return <div className="container">


        <div class="card" style="width:400px">
            <img class="card-img-top" src={Proimage} alt="Cardimage" style={st} />
            <div class="card-body">
            <h4 class="card-title"> {notes.name}</h4>
            <p class="card-text">
                your Number:{notes.number}
            </p>
            {/* <a href="#" class="btn btn-primary">See Profile</a> */}
            </div>
        </div>
    <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo">Today Exercise</button>
    <div id="demo" className="collapse">    
        <Exercise />
    </div>
    </div>
}