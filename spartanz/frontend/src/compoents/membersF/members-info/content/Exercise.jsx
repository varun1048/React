import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'



export default function    Exercise(){

    const [workout,setWorkout] = useState([])
    const  Params = useParams()

    useEffect(()=>{
        axios.post("http://localhost:5000/members/profile",{"number":Params.id})
        .then((datas)=>{
            setWorkout( datas.data.workout )
        })
    })

    return <table className="table table-striped table-bordered ">
    <thead className=" ">
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
                    {/* <td >{element.Sets}</td>
                    <td >{element.Reps}</td>
                    <td >{element.Weight} Kg  </td> */}
                </tr>
               })}

        </tbody>
</table>
}