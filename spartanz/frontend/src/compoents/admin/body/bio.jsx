import axios from "axios"
import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom'

import AdminLinks from "./adminLinks";
import Fulldetails from "./fulldetails"
export default function Bio(){  

    const  Params = useParams()
    
    let     [info,setInfo]=useState(0) 
    let     [assessment,setAssessment] =   useState([])
    let     [workout,setWorkout] = useState([])

     useEffect(()=>{
        axios.post("http://localhost:5000/admin/bio",{"id": Params.id})
        .then(datas => {
            setInfo(datas.data)
            setAssessment(datas.data.assessment)
            setWorkout( datas.data.workout )
        })
        .catch(err => console.log(err) )
    })
    
    
    let st={"width":"200"}

    let [input,setInput] = useState(0)

    function handleChange(event){
        const {name,value} = event.target 
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]:value    
            }
        })
    }
    function updatePackage(){
        let obj={
            id:info._id,
            package:input.package
        }

        axios.post("http://localhost:5000/adminTwo/upDatePackage",obj)
        .then(console.log("sending to server"))
        .catch(err => console.log("err on updating :" +err))
        
        
    }


    return    <div className="container-fluid ">
     <div  className="row ">
        <AdminLinks />
        <br/> 

        <div className="m-2 col-lg-8 bg-light  ">
            <div className="row d-flex justify-content-between ">

            <div className="col-sm ">
                    <ul className="list-group ">
                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                            Card Number
                            <span className="badge badge-primary badge-pill">{info.card}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Number of days more 
                            <span className="badge badge-primary badge-pill">{info.days}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Number
                            <span className="badge badge-primary badge-pill">{info.number}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                               Package
                            <span className="badge badge-primary badge-pill">{info.package}</span>
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

                <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#exampleModalCenter">
                    Update Package
                </button>

                    <Link to={`/admin/SetExercise/${info._id}`}
                        className="btn btn-success m-1 btnLink">
                        Set Exercised
                    </Link>  

                    <Link to={`/admin/TackAssessment/${info._id}`} 
                    className="btn btn-success m-1" >
                        Tack Assessment
                    </Link> 

                    <button className="btn btn-danger m-1" data-toggle="collapse" data-target="#demo"> Lsat Assessment</button>
                    <button className="btn btn-danger m-1" data-toggle="collapse" data-target="#Exercise">Doing  Exercise</button>
                    <button type="button" class="btn btn-dark m-1" data-toggle="modal" data-target=".bd-example-modal-lg">Full details</button>

                        </div>

                </div>
            </div>
            <br/>



            <div  id="accordion">

                <div id="Exercise" className="collapse"  data-parent="#accordion">
                    <h3>Workout</h3>
                    <table className="table table-striped table-bordered  ">
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
                    <h3>Last Assessment</h3>        
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
    <div className="container">
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Update package </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body container">
                    <div>
                        Last package  expre in : <span className="badge badge-warning">  {String(info.expiry).slice(0,10)}</span> 
                    </div>
                    <br/>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" value="2"  onChange={handleChange} name="package" />Monthly
                        </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" value="4" onChange={handleChange} name="package" />Quartely
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" value="7" onChange={handleChange} name="package" />Half yearly
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" value="13" onChange={handleChange} name="package" />Annual
                            </label>
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={ ()=> updatePackage()}  data-dismiss="modal" className="btn btn-primary">Update</button>
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <Fulldetails info={info} assessment={assessment} workout={workout} />
                    </div>
                </div>
            </div>
        </div>
</div>
}