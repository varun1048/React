import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'



export default function    Exercise(pros ){

    const [workout,setWorkout] = useState([])
    const  Params = useParams()
    useEffect(()=>{
        axios.post("http://localhost:5000/members/profile",{"number":Params.id})
        .then((datas)=>{
            setWorkout( datas.data.workout )
        })
    })

    function ArryaList (){
        let arr =  (workout)
        return <div>            
            {arr.map( (element,i )=>{
                return <div key={i}>
                    Day {(i+1)} <br/>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Workout</th>
                                <th>sets</th>
                                <th>Reps</th>
                            </tr>
                        </thead>

                        <tbody>
                            {element.map((f ,i)=>{ 
                                return <tr key={i}>
                                    <td>{f}</td>
                                    <td>{(Number(pros.days)<=34)?"3":"2" }</td>
                                    <td>15</td>
                                </tr>
                                })}
                        </tbody>
                    </table>
                </div>
            } )}
            
        </div>
    }



    return <div>
        <ArryaList />
    </div> 
}