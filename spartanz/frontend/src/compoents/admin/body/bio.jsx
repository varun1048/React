import { useEffect, useState } from "react";
import axios from "axios"
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import AdminLinks from "./adminLinks";

export default function Bio(){
    const  Params = useParams()
    const history = useHistory()

    let     [info,setInfo]=useState(0)
    let     [assessment,setAssessment] = useState([])
    useEffect(()=>{
        axios.post("http://localhost:5000/admin/bio",{"id":Params.id})
        .then(datas => {
            setInfo(datas.data)
            setAssessment(datas.data.assessment)
        } )
        .catch(err => console.log(err) )
    })
    function handleClick(id,root){
        console.log(id)
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


    return    <div className="container-fluid">
     <div  className="row">
        <AdminLinks />
        <br/> 
        <div className="m-2 col-lg-8 bg-light ">
            <div className="d-flex justify-content-between ">
                <div>
                    Bio <br/>
                    Name: {info.name} <br/>
                    Number {info.number}
                </div>
                
                <div>
                    <button onClick={() => handleClick(info._id,"SetExercise")}
                        className="btn btn-secondary m-2">
                        Set Exercise
                    </button> 

                    <button onClick={() => handleClick(info._id,"TackAssessment")}
                    className="btn btn-success" >
                        Tack Assessment
                    </button> 
                </div>
            </div>
            <br/>

            <button className="btn btn-danger" data-toggle="collapse" data-target="#demo">Collapsible</button>
            <div id="demo" class="collapse">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Push up</th>
                    <th>Curl Ups</th>
                    <th>Squats</th>
                </tr>
                </thead>

                <tbody>
                    {assessment.map(element =>
                    <tr>
                        <th>{element.pushUp}</th>
                        <th>{element.curlUps}</th>
                        <th>{element.squats}</th>
                    </tr>
                    )}

                </tbody>
            </table>
            </div> 

        </div>
    </div>
</div>
}