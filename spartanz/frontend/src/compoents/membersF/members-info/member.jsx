import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

export default function Member(){
const  Params = useParams()
const [notes, setNotes] = useState(0)
const [workout,setWorkout] = useState([])

useEffect(()=>{
        axios.post("http://localhost:5000/members/profile",{"number":Params.id})
        .then((datas)=>{
            setNotes( datas.data )
            setWorkout( datas.data.workout )
        })
        
    })

    return <div className="container">
        wellcome {notes.name}  <br/>
        Number {notes.number}
        <table className="table">
            <thead>
            <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>

                <tbody>
                {   workout.map( (element ,i) =>{
                        return <tr key={  (i).toString() } >   
                            <td >{element.Exercise}</td>
                            <td >{element.Sets}</td>
                            <td >{element.Reps}</td>
                            <td >{element.Weight} Kg  </td>
                        </tr>
                    })}
                </tbody>
            </thead>

        </table>
    </div>
}