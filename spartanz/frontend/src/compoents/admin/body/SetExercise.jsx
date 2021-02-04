import axios from "axios"
import {  useState,useEffect } from "react";
import AdminLinks from "./adminLinks";
import {useParams ,useHistory} from 'react-router-dom'

let L = (inner)=>console.log(inner)
export default function SetExercise(){

    // let     [info,setInfo]=useState(0)
    let     [lastAssessment,setLastAssessment]=useState(0)

    const  Params = useParams()
    const history = useHistory()

console.log(Params)

    let [input,setInput] = useState({
        Exercise:"",
        Seta:"",
        Reps:"",
        Weight:"",
        card:"",
        days:""
    })

    let [Exercises, setExercises] = useState([{
        Exercise:"warm - up",
        Sets:"1",
        Reps:"-",
        Weight:"-",
    }])
//suma
 useEffect(()=>{
     console.log(input.card)
    axios.post("http://localhost:5000/admin/SetExerciseInfo",{"id": Params.id})
    .then(datas => {
        // setInfo(datas.data)
        setLastAssessment(datas.data.lastAssessment)
    } )
    .catch(err => console.log(err) )
 })


    function handleChange(event){
        // event.preventDefault();   
        const {name,value} = event.target 
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleAdd(){
        let Hub = Exercises
        Hub.push(input)
        setExercises(Hub)
        setInput(0)
    }
    function handleClick(){
        
        if(Exercises.length !== 0 && Exercises.length !== 1   ){
            
            L("varim")
            axios.post("http://localhost:5000/admin/SetExerciseDB",
                { gymWorkout: Exercises,
                  id: Params.id,
                  card :input.card,
                  days : input.days
            })
            .then(history.push("/admin/memberInfo"))
            .catch(err => console.log("send Exercises to db --"+ err))
            
        }
        else{
            alert("Enter all values")
        }
    }
    let st={"width":"100px"}
    let st2={"width":"15px"}
    return    <div className="container-fluid">
     <div  className="row">
        <AdminLinks />

        <div className="col-lg-9 ">
            <br/>
            <div className="d-flex justify-content-between">
                <h2>
                    Set Exercise 
                </h2>
                <button className="btn btn-info " data-toggle="collapse" data-target="#demo">last Assessment</button>
            </div>
            <br/>
            <div id="demo" className="collapse">
                       
                <ul className="list-group">
                
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        PushUp
                        <span className="badge badge-primary badge-pill">{lastAssessment.pushUp}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        CurlUps
                        <span className="badge badge-primary badge-pill">{lastAssessment.curlUps}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Squats
                        <span className="badge badge-primary badge-pill">{lastAssessment.squats}</span>
                    </li>
                </ul>                
            </div>

               
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                       
                        <td>
                            <div className ="form-group">
                                <input type="text"  className="form-control" onChange={handleChange}
                                placeholder="Exercise Name" name="Exercise"/>
                            </div>
                        </td>
                      
                        <td style={st}>
                            <div className ="form-group"> 
                                <input type="number"  className="form-control" onChange={handleChange}
                                placeholder="-" name="Sets"/>
                            </div>
                        </td>

                        <td style={st}>
                            <div className ="form-group"> 
                                <input type="number"  className="form-control" onChange={handleChange}
                                placeholder="-" name="Reps"/>
                            </div>
                        </td>
                        
                        <td style={st}>
                            <div className ="form-group" > 
                                <input type="number"  className="form-control" onChange={handleChange}
                                placeholder="Kg"  name="Weight"/>
                            </div>
                        </td>
                    
                        <td style={st}>
                            <button type="submit" onClick={handleAdd}  className="btn btn-danger"> Add </button>
                        </td>

                    </tr> 
                
                    <tr>
                        <td>
                            <div className="input-group">
                            <span className="input-group-addon m-2">Card Number</span>
                            <input  type="text" className="form-control " name="card" onChange={handleChange} 
                            placeholder="Enter Card number" style={st2} />
                        </div>
                        </td>
                        <td>
                        <div className="input-group">
                            <span className="input-group-addon m-2">Number days</span>
                            <input  type="text" className="form-control " name="days" onChange={handleChange} 
                            placeholder="Enter days" style={st2} />
                        </div>
                        </td>
                        <td>
                            <button type="submit" onClick={handleClick}  className="btn btn-success"> Submit </button>
                        </td>          
                    </tr>   
                </tbody>
            </table>

        <dir className="container">
        <table className="table bg-light">
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>

                <tbody>
                {  Exercises.map( (element ,i) =>{
                        return <tr key={  ( i).toString() } >   
                            <th >{element.Exercise}</th>
                            <th >{element.Sets}</th>
                            <th >{element.Reps}</th>
                            <th >{element.Weight} Kg  </th>
                        </tr>
                    })}
                </tbody>
        </table>

            
        </dir>

        </div>
    </div>
</div>
}