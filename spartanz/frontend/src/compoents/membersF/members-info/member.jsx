import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

import Exercise from "./content/Exercise"
import Timer from "./content/Timer"

export default function Member(){
    let Proimage="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png"

const  Params = useParams()
const [notes, setNotes] = useState(0)

let st={"width":"200"}
useEffect(()=>{
        axios.post("http://localhost:5000/members/profile",{"number":Params.id})
        .then((datas)=>{
            setNotes( datas.data )
        })
        
    })
    return <div className="m-5">

        <div className="row">
            
            <div className="col-sm">
                <div className="card bg-light " style={st} >
                    
                    <img className="card-img-top" src={Proimage} alt="Cardimage"  />

                    <div className="card-body">
                    <h4 className="card-title"> {notes.name}</h4>
                    <p className="card-text">
                        your Number:{notes.number}
                    </p>
                    {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                    </div>
                </div>
            </div>
 
            <div className="col-8">
                <h3>
                    Today Exercise
                </h3>

                    <Exercise />
            </div>

            <div className="col">
                <Timer />
            </div>

        </div>
        <div className="row">
        </div>
    </div>
}