import { useState } from "react";
import {useParams, useHistory} from 'react-router-dom'
import axios from "axios"

import AdminLinks from "./adminLinks";

export default function TackAssessment(){
    let st={"width":"400px"}
    
    const history = useHistory()
    const  Params = useParams()

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

return    <div class="container">
     <div  class="row">
        <AdminLinks />
        <div class="col-lg-9 ">
        
        <h2>
            Assessment Test
        </h2> <br/>  
        
        <form  class="">
            <div class="input-group mb-3 " style={st}>
                <div class="input-group-prepend" >
                    <span class="input-group-text ">Push Up</span>
                    
                </div>
                <input type="number" class="form-control" onChange={handleChange} name="pushUp"
                placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1"/> <br/>
                <div class="checkbox m-1">
                <label  ><input type="checkbox" onChange={handleChange}
                    name="mfd" value="MDF" /> 
                    <samp class="m-2"> MFD</samp> </label>
                </div>
            </div>

            

            <div class="input-group mb-3 " style={st}>
                <div class="input-group-prepend" >
                    <span class="input-group-text ">Curl Ups</span>
                    
                </div>
                <input type="number" class="form-control" onChange={handleChange} name="curlUps"
                placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3 " style={st}>
                <div class="input-group-prepend" >
                    <span class="input-group-text ">Squats</span>
                    
                </div>
                <input type="number" class="form-control" onChange={handleChange} name="squats"
                placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            
            <button type="submit" class="btn btn-primary"  onClick={handleClick}  > submit </button>
        </form>
        </div>
    </div>
</div>
}