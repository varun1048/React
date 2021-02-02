import axios from "axios"
import { useEffect, useState } from "react";
import {useHistory,useParams} from 'react-router-dom'

import AdminLinks from "./adminLinks";

export default function Bio(){  

    const  Params = useParams()
    const history = useHistory()
    
    let     [info,setInfo]=useState(0) 
    let     [assessment,setAssessment] =   useState([])
    let     [workout,setWorkout] = useState([])

    let packageing = () => {
        if(info.package === "2"){
            return "Monthly"
        }
        if(info.package === "4"){
            return "Quartely"
        }
        if(info.package === "7"){
            return "Half yearly"
        }
        if(info.package === "13"){
            return "Annual"
        }
        
    }
     useEffect(()=>{
        axios.post("http://localhost:5000/admin/bio",{"id": Params.id})
        .then(datas => {
            setInfo(datas.data)
            setAssessment(datas.data.assessment)
            setWorkout( datas.data.workout )
        })
        .catch(err => console.log(err) )
    })
    
    function handleClick(id,root){
        switch (root) {
            case "bio":
                history.push(`/admin/bio/${id}`)
                break;
            case "TackAssessment":
                history.push(`/admin/TackAssessment/${id}`)
                break;
            case "SetExercise":
                history.push(`/admin/SetExercise/${id}`)
                break;
            default:
                break;
        }
    }
// console.log(info)
    let st={"width":"200"}
    return    <div className="container-fluid ">
     <div  className="row ">
        <AdminLinks />
        <br/> 

        <div className="m-2 col-lg-8 bg-light  ">
{/*    */}
            <div className="row d-flex justify-content-between ">

            <div className="col-sm ">
                    <ul className="list-group ">
                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            Card Number
                            <span className="badge badge-primary badge-pill">{info.card}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Number of days more 
                            <span className="badge badge-primary badge-pill">{info.card}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            age
                            <span className="badge badge-primary badge-pill">{info.age}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Gender
                            <span className="badge badge-primary badge-pill">{info.gender}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Number
                            <span className="badge badge-primary badge-pill">{info.number}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Package
                            <span className="badge badge-primary badge-pill">{packageing()}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Gmail
                            <span className="badge badge-primary badge-pill">{info.gmail}</span>
                        </li>
                        

                    </ul> 
                </div>


                <div>
                    <div className="col-sm">
                        <div className="card bg-light " style={st} >
                            
                            <img className="card-img-top" src={info.imgUrl} alt="ErrorImage"  />

                            <div className="card-body">
                            <h4 className="card-title text-center"> {info.name}</h4>
                        
                            </div>
                        </div>
                    </div>
                </div>

                

                <div>
                <div className="btn-group-vertical">

                    <button className="btn btn-info m-1"> Update Package  </button>

                    <button onClick={() => handleClick(info._id,"SetExercise")}
                        className="btn btn-success m-1">
                        Set Exercise
                    </button> 

                    <button onClick={() => handleClick(info._id,"TackAssessment")}
                    className="btn btn-success m-1" >
                        Tack Assessment
                    </button> 

                    <button className="btn btn-danger m-1" data-toggle="collapse" data-target="#demo"> Lsat Assessment</button>
                    <button className="btn btn-danger m-1" data-toggle="collapse" data-target="#Exercise">Doing  Exercise</button>

                    <button className="btn btn-dark m-1"> Full details  </button>

                        </div>

                </div>
            </div>
            <br/>



            <div  id="accordion">

                <div id="Exercise" className="collapse"  data-parent="#accordion">
                    <h3>Workout</h3>
                    <table className="table table-striped table-bordered ">
                        <thead className=" ">
                            <tr>
                                <th>Exercise</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Weight</th>
                            </tr>
                        </thead>

                        <tbody>
                            {      workout.map( (element ,i) =>{
                            return <tr key={  (i).toString() } >   
                                <td >{element.Exercise}</td>
                                <td >{element.Sets}</td>
                                <td >{element.Reps}</td>
                                <td >{element.Weight} Kg  </td>
                            </tr>
                            })}

                        </tbody>
                    </table>

                </div>

                <div id="demo" className="collapse"   data-parent="#accordion">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Push up</th>
                                <th>Curl Ups</th>
                                <th>Squats</th>
                            </tr>
                            </thead>

                            <tbody>
                                {assessment.map( (element ,i) =>{
                                    return <tr key={  ( i  ).toString() } >
                                        <th >{element.pushUp}</th>
                                        <th >{element.curlUps}</th>
                                        <th >{element.squats}</th>
                                    </tr>
                                })}
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    </div>
    
</div>
}