import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

import Exercise from "./content/Exercise"

export default function Member(){
    
    const  Params = useParams()
    const [notes, setNotes] = useState(0)


let st={"width":"200"}
useEffect(()=>{
        axios.post("http://localhost:5000/members/profile",{"number":Params.id})
        .then((datas)=>{
            setNotes( datas.data )
        })
        
    })
    let btn = (false)?true:false 

    function toSending(){
        btn=false
        console.log(btn)
        axios.post("http://localhost:5000/adminTwo/live",{"id":notes._id,"name":notes.name,"days":notes.days })
        .then(()=>console.log("updeted"))
        .catch((err)=> console.log("updating live member"))
    }
    
    return <div className="m-5">

        <div className="row">
            
            <div className="col-sm">
                <div className="card bg-light " style={st} >
                    
                    <img className="card-img-top" src={notes.imgUrl} alt="Cardimage"  />

                    <div className="card-body">
                    <h4 className="card-title"> {notes.name}</h4>
                    <p className="card-text">
                        Card:{notes.card}
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
                <button type="submit" className="btn btn-success "   onClick={toSending} disabled={btn}>{(btn)?"submited":"submit"}
                <span className="badge badge-light text-dark"> {Date().slice(0,15)}</span>  </button>
                Days more :{notes.days}
            </div>

        </div>

    </div>
}