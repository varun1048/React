import { useState } from "react";
import {useParams, useHistory} from 'react-router-dom'
import axios from "axios"

import AdminLinks from "./adminLinks";

export default function TackAssessment(){
    let st={"width":"400px"}
    
    const history = useHistory()    
    const  Params = useParams()
    console.log(Params)
    let [input,setInput] = useState({
        _id:Params.id,
        pushUp:0,
        curlUps:0,
        squats:0,
        mfd:"Normal"
    })
    function handleChange(event){
        const {name,value} = event.target 
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        if(input.pushUp !== 0 && input.curlUps !== 0 && input.squats !== 0 ){
            axios.post("http://localhost:5000/admin/assessment",input)
            .then(()=>{
                history.push('/admin')
            })
        } 
    }

return    <div className="container-fluid">
     <div  className="row">
        <AdminLinks />
        <div className="col-lg-9 ">
            
        <h2>
            Assessment Test
        </h2> <br/>  
        
        <form  className="">
            <div className="input-group mb-3 " style={st}>
                <div className="input-group-prepend" >
                    <span className="input-group-text ">Push Up</span>
                    
                </div>
                <input type="number" className="form-control" onChange={handleChange} name="pushUp"
                placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1"/> <br/>
                <div className="checkbox m-1">
                <label  ><input type="checkbox" onChange={handleChange}
                    name="mfd" value="MDF" /> 
                    <samp className="m-2"> MFD</samp> </label>
                </div>
            </div>

            

            <div className="input-group mb-3 " style={st}>
                <div className="input-group-prepend" >
                    <span className="input-group-text ">Curl Ups</span>
                    
                </div>
                <input type="number" className="form-control" onChange={handleChange} name="curlUps"
                placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3 " style={st}>
                <div className="input-group-prepend" >
                    <span className="input-group-text ">Squats</span>
                    
                </div>
                <input type="number" className="form-control" onChange={handleChange} name="squats"
                placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            
            <button type="submit" className="btn btn-primary"  onClick={handleClick}  > submit </button>
        </form>
        </div>
    </div>
</div>
}